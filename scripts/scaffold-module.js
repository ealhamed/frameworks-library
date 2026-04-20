#!/usr/bin/env node
// Append a stub module to data/<course>.js so a later author pass can fill in content.
//
// Usage:
//   node scripts/scaffold-module.js <course> <number> "<title>" [--topic "Topic"] [--force]
//
// Examples:
//   node scripts/scaffold-module.js fa 06 "Budgeting & Short-term Planning"
//   node scripts/scaffold-module.js me 07 "Platform Dynamics" --topic "Network effects"
//
// Exits:
//   0 on success (stub inserted)
//   1 on bad arguments or unknown course
//   2 if the module already exists (unless --force is passed)

const fs = require('fs');
const path = require('path');

const KNOWN_COURSES = ['lpo', 'fa', 'da', 'me', 'el'];
const DATA_DIR = path.join(__dirname, '..', 'data');

function parseArgs(argv) {
  const out = { flags: {}, positional: [] };
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) {
        out.flags[key] = next;
        i++;
      } else {
        out.flags[key] = true;
      }
    } else {
      out.positional.push(arg);
    }
  }
  return out;
}

function usage(msg) {
  if (msg) console.error(`scaffold-module: ${msg}\n`);
  console.error('Usage: node scripts/scaffold-module.js <course> <number> "<title>" [--topic "Topic"] [--force]');
  console.error(`Known courses: ${KNOWN_COURSES.join(', ')}`);
  process.exit(1);
}

const { flags, positional } = parseArgs(process.argv);
if (positional.length < 3) usage('missing arguments');

const [courseRaw, numberRaw, titleRaw] = positional;
const course = courseRaw.toLowerCase();
if (!KNOWN_COURSES.includes(course)) usage(`unknown course: ${course}`);

// Normalise module number to two digits
const numberPadded = String(numberRaw).padStart(2, '0');
const moduleKey = `m${numberPadded}`;
const title = titleRaw.replace(/"/g, '\\"');
const topic = (flags.topic || 'TODO').replace(/"/g, '\\"');
const force = flags.force === true;

const dataPath = path.join(DATA_DIR, `${course}.js`);
if (!fs.existsSync(dataPath)) {
  console.error(`scaffold-module: ${dataPath} not found`);
  process.exit(1);
}

const source = fs.readFileSync(dataPath, 'utf8');

// Idempotency: does this module already exist?
const existsRegex = new RegExp(`\\b${moduleKey}:\\s*\\{`, 'm');
if (existsRegex.test(source) && !force) {
  console.error(`scaffold-module: ${course}.${moduleKey} already exists. Pass --force to overwrite (destructive).`);
  process.exit(2);
}

const stub = `    ${moduleKey}: {
      id: '${moduleKey}', number: '${numberPadded}', topic: '${topic}',
      title: '${title}',
      hint: 'TODO — one-line intro shown on the course index.',
      kicker: 'TODO — italic sub-title under the H1.',
      coreIdea: {
        text: 'TODO — the paragraph that opens the page. Name the single question this session answers, without jargon. 40–70 words.',
        attr: 'after TODO'
      },
      diagram: {
        type: 'custom',
        title: 'TODO — diagram title.',
        intro: 'TODO — short caption under the diagram heading.',
        svg: '<!-- pick a diagram type: pentagon / 2x2 / hexagon / curve-invertedU / curve-s / scatter / network / linear / equation -->'
      },
      frameworks: [
        { name: 'TODO framework', author: 'TODO', components: ['TODO component 1', 'TODO component 2'], rule: 'TODO — the one-sentence why this matters.' }
      ],
      apply: {
        title: 'TODO — how to actually use this.',
        steps: [
          { strong: 'TODO first step.', rest: 'TODO — make it concrete.' },
          { strong: 'TODO second step.', rest: 'TODO.' },
          { strong: 'TODO third step.', rest: 'TODO.' }
        ]
      },
      eli5: {
        title: 'TODO — plain-English title.',
        body: [
          'TODO — one paragraph explaining this to someone who has never taken an MBA.'
        ]
      },
      keyReading: {
        cite: 'Key reading · TODO source',
        title: 'TODO — title of the closing thought.',
        prose: 'TODO — the prose of the footer block.',
        kicker: 'TODO — italic closing line.'
      }
    }`;

// Find the modules: { ... } block and insert before the closing brace of modules
// We locate the LAST occurrence of a closing '}' that closes `modules: {`
// Strategy: find `modules:` then scan forward matching braces.
const modulesStart = source.search(/modules\s*:\s*\{/);
if (modulesStart === -1) {
  console.error(`scaffold-module: could not find \`modules: {\` in ${dataPath}`);
  process.exit(1);
}
const openBrace = source.indexOf('{', modulesStart);
let depth = 0;
let closeBrace = -1;
for (let i = openBrace; i < source.length; i++) {
  if (source[i] === '{') depth++;
  else if (source[i] === '}') {
    depth--;
    if (depth === 0) {
      closeBrace = i;
      break;
    }
  }
}
if (closeBrace === -1) {
  console.error(`scaffold-module: unbalanced braces parsing ${dataPath}`);
  process.exit(1);
}

// Peek back from the close-brace to decide whether we need a leading comma.
const before = source.slice(openBrace + 1, closeBrace).trimEnd();
const needsComma = before.length > 0 && !before.endsWith(',');

const before_slice = source.slice(0, closeBrace);
const after_slice = source.slice(closeBrace);
const inserted = `${before_slice.replace(/\s*$/, '')}${needsComma ? ',' : ''}\n\n${stub}\n  ${after_slice}`;

// Handle --force: if existing and force, remove first then re-run insert (simple approach: just skip dedup, warn)
if (existsRegex.test(source) && force) {
  console.warn(`scaffold-module: --force set; appending a second ${moduleKey} block. Manual cleanup required.`);
}

fs.writeFileSync(dataPath, inserted);
console.log(`scaffold-module: inserted ${course}.${moduleKey} "${title}" into ${path.relative(process.cwd(), dataPath)}`);

// Optional: also append to arc.blocks so the module shows up on the course index.
// Done as a secondary, best-effort pass — if it fails, user fixes by hand.
try {
  const updated = fs.readFileSync(dataPath, 'utf8');
  // Find the LAST blocks array (most courses have only one arc.blocks anyway)
  const blocksMatch = updated.match(/blocks:\s*\[([\s\S]*?)\]/);
  if (blocksMatch) {
    const blocksBody = blocksMatch[1];
    if (!blocksBody.includes(`'${moduleKey}'`)) {
      // Append to the last block's modules array
      const lastBlockMatch = blocksBody.match(/modules:\s*\[([^\]]*)\](?![\s\S]*modules:)/);
      if (lastBlockMatch) {
        const modulesList = lastBlockMatch[1].trim();
        const newList = modulesList.length
          ? `${modulesList}, '${moduleKey}'`
          : `'${moduleKey}'`;
        const replaced = updated.replace(
          lastBlockMatch[0],
          `modules: [${newList}]`
        );
        fs.writeFileSync(dataPath, replaced);
        console.log(`scaffold-module: appended '${moduleKey}' to the last block in arc.blocks`);
      }
    }
  }
} catch (err) {
  console.warn(`scaffold-module: could not auto-update arc.blocks — add '${moduleKey}' to the right block by hand.`);
}

console.log('\nNext steps:');
console.log('  1. Open', path.relative(process.cwd(), dataPath), 'and replace the TODOs with real content');
console.log('  2. Run: node scripts/build.js');
console.log('  3. Preview at http://localhost:8766/' + course + '/m' + numberPadded + '.html');

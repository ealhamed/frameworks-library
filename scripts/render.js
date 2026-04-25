// Rendering functions: content objects → HTML strings.

const diagrams = require('./diagrams.js');

function esc(s = '') {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const FONTS_LINK = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Serif+Display&family=IBM+Plex+Mono:wght@300;400;500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">`;

const REVEAL_SCRIPT = `<script>
  (function(){
    var SEL = '.reveal, .pentagon, .hexagon, .matrix, .curve, .network';
    var nodes = document.querySelectorAll(SEL);
    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach(function(el){ el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    nodes.forEach(function(el){ io.observe(el); });
    // Safety net: anything still hidden after 1.4s gets revealed regardless.
    // Covers below-fold diagrams on tall pages and automated test tools that don't scroll.
    setTimeout(function(){
      document.querySelectorAll(SEL).forEach(function(el){ el.classList.add('in'); });
    }, 1400);
  })();
</script>`;

// ── Section renderers ────────────────────────────────────

function renderCoreIdea(core, eli5) {
  if (!core) return '';
  const eli5Body = eli5 && eli5.body
    ? eli5.body.map(p => `<p>${p}</p>`).join('\n          ')
    : '';
  const eli5Block = eli5
    ? `
      <aside class="idea-eli5">
        <p class="eli5-tag">Put simply${eli5.title ? ` · ${esc(eli5.title)}` : ''}</p>
        <div class="eli5-body">
          ${eli5Body}
        </div>
      </aside>`
    : '';
  return `
    <section id="idea">
      <p class="section-tag">The core idea</p>
      <p class="lede">
        ${core.text}
        ${core.attr ? `<span class="attr">— ${esc(core.attr)}</span>` : ''}
      </p>${eli5Block}
    </section>`;
}

function renderDiagram(diagram) {
  if (!diagram) return '';
  let svg = '';
  const t = diagram.type;
  if (t === 'pentagon')         svg = diagrams.pentagon(diagram);
  else if (t === '2x2')          svg = diagrams.matrix2x2(diagram);
  else if (t === 'hexagon')      svg = diagrams.hexagon(diagram);
  else if (t === 'curve-invertedU') svg = diagrams.curveInvertedU(diagram);
  else if (t === 'curve-u')      svg = diagrams.curveU(diagram);
  else if (t === 'curve-s')      svg = diagrams.curveS(diagram);
  else if (t === 'bell-family')  svg = diagrams.bellFamily(diagram);
  else if (t === 'supply-demand') svg = diagrams.supplyDemand(diagram);
  else if (t === 'monopoly')     svg = diagrams.monopoly(diagram);
  else if (t === 'scatter')      svg = diagrams.scatter(diagram);
  else if (t === 'network')      svg = diagrams.network(diagram);
  else if (t === 'linear')       svg = diagrams.linear(diagram);
  else if (t === 'equation')     svg = diagrams.equation(diagram);
  else if (t === 'custom')       svg = diagrams.custom(diagram);
  else if (t === 'flow')         svg = diagrams.flow(diagram);
  else if (t === 'two-axis')     svg = diagrams.twoAxis(diagram);
  else if (t === 'decision-tree') svg = diagrams.decisionTree(diagram);
  else if (t === 'five-forces')  svg = diagrams.fiveForces(diagram);
  else if (t === 'platform')     svg = diagrams.platform(diagram);
  else if (t === 'loop')         svg = diagrams.loop(diagram);
  else svg = `<p class="muted">[diagram: ${t}]</p>`;

  return `
    <section id="diagram">
      <p class="section-tag">${esc(diagram.tag || 'The hero diagram')}</p>
      <h2 class="display">${esc(diagram.title || '')}</h2>
      ${diagram.intro ? `<p class="prose muted">${diagram.intro}</p>` : ''}
      <div class="hero-diagram">
        ${svg}
      </div>
    </section>`;
}

function renderMethod(method) {
  if (!method || !method.steps) return '';
  const steps = method.steps.map(s => `
        <div class="step">
          <div class="step-num">Step ${esc(s.num)}</div>
          <h4>${esc(s.title)}</h4>
          <p>${s.desc}</p>
        </div>`).join('');
  return `
    <section id="steps">
      <p class="section-tag">${esc(method.tag || 'The method')}</p>
      <h2 class="display">${esc(method.title || 'Steps.')}</h2>
      <div class="steps">${steps}
      </div>
    </section>`;
}

function renderDiagnostics(diag) {
  if (!diag || !diag.rows) return '';
  const rows = diag.rows.map(r => `
        <div class="diagnostic">
          <div class="code">${esc(r.code)}</div>
          <div class="q">${r.q}</div>
          <div class="fix">${r.fix}</div>
        </div>`).join('');
  return `
    <section id="diagnostics">
      <p class="section-tag">${esc(diag.tag || 'Diagnostics')}</p>
      <h2 class="display">${esc(diag.title || 'Questions you can test.')}</h2>
      ${diag.intro ? `<p class="prose muted" style="max-width: 60ch;">${diag.intro}</p>` : ''}
      <div class="diagnostics reveal stagger">${rows}
      </div>
    </section>`;
}

function renderApply(apply) {
  if (!apply || !apply.steps) return '';
  const steps = apply.steps.map(s => `
        <li><span class="txt"><strong>${esc(s.strong)}</strong> ${s.rest || ''}</span></li>`).join('');
  return `
    <section id="apply">
      <p class="section-tag">${esc(apply.tag || 'How to apply')}</p>
      <h2 class="display">${esc(apply.title || 'Steps you actually run.')}</h2>
      ${apply.intro ? `<p class="prose muted" style="max-width: 60ch;">${apply.intro}</p>` : ''}
      <ol class="apply">${steps}
      </ol>
    </section>`;
}

function renderEli5(eli5) {
  if (!eli5) return '';
  const body = (eli5.body || []).map(p => `<p>${p}</p>`).join('\n        ');
  return `
    <section id="eli5">
      <p class="section-tag">Explain it like I'm 5</p>
      <h2 class="display">${esc(eli5.title || '')}</h2>
      <div class="prose">
        ${body}
      </div>
    </section>`;
}

function renderKeyReading(kr) {
  if (!kr) return '';
  let pairsHtml = '';
  if (kr.pairs) {
    pairsHtml = `<ul class="kr-pairs">${kr.pairs.map(p =>
      `<li><span>${esc(p.left)}</span><span class="arrow">→</span><span>${esc(p.right)}</span></li>`
    ).join('')}</ul>`;
  }
  return `
    <section id="reading" class="key-reading">
      <p class="kr-cite">${esc(kr.cite)}</p>
      ${kr.title ? `<h3 class="kr-title">${kr.title}</h3>` : ''}
      ${kr.prose ? `<p class="kr-prose">${kr.prose}</p>` : ''}
      ${pairsHtml}
      ${kr.kicker ? `<p class="kr-kicker">${kr.kicker}</p>` : ''}
    </section>`;
}

function renderFrameworkList(frameworks, course, module) {
  if (!frameworks || !frameworks.length) return '';
  const rows = frameworks.map(f => {
    const comps = (f.components || []).join(' · ');
    return `
      <div class="fw-row">
        <div class="fw-name">${esc(f.name)}${f.author ? ` <em class="muted">· ${esc(f.author)}</em>` : ''}</div>
        ${comps ? `<div class="fw-comps mono muted">${esc(comps)}</div>` : ''}
        ${f.rule ? `<div class="fw-rule serif">${esc(f.rule)}</div>` : ''}
      </div>`;
  }).join('');
  const heading = (module && module.frameworksHeading)
    || (course && course.frameworksHeading)
    || 'Named ideas to remember.';
  const tag = (module && module.frameworksTag)
    || (course && course.frameworksTag)
    || 'Frameworks in this module';
  return `
    <section id="frameworks">
      <p class="section-tag">${esc(tag)}</p>
      <h2 class="display">${esc(heading)}</h2>
      <div class="fw-list">${rows}
      </div>
    </section>`;
}

// ── Full module page ─────────────────────────────────────

function renderModulePage({ course, module, prevNext }) {
  const blockLabel = findBlockLabel(course, module.id);
  const title = `${module.title} · ${course.courseName}`;
  const desc = module.kicker || '';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${FONTS_LINK}
<link rel="icon" type="image/svg+xml" href="../assets/favicon.svg">
<link rel="stylesheet" href="../styles.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>

<header class="masthead">
  <div class="wrap">
    <div class="brand">Ebrahim Alhamed<span class="dot" aria-hidden="true"></span>Frameworks Library</div>
    <nav aria-label="Primary">
      <a href="../">Courses</a>
      <a href="./">${esc(course.courseShort || course.courseName)}</a>
      <a href="./m${module.number}.html" class="active" aria-current="page">m.${module.number}</a>
    </nav>
  </div>
</header>

<main class="wrap" id="main" tabindex="-1">

  <p class="crumb">
    <a href="../">Courses</a><span class="sep">/</span>
    <a href="./">${esc(course.courseShort || course.courseName)}</a><span class="sep">/</span>
    m.${module.number}
  </p>

  <header class="module-hero">
    <p class="kicker">m.${module.number} · ${esc(blockLabel)} · ${esc(module.topic)}</p>
    <h1>${esc(module.title)}</h1>
    ${module.kicker ? `<p class="sub">${module.kicker}</p>` : ''}
  </header>

  <nav class="sub-nav" aria-label="Section navigation">
    <a href="#idea">Idea</a>
    ${module.diagram ? '<a href="#diagram">Diagram</a>' : ''}
    ${module.method ? '<a href="#steps">Steps</a>' : ''}
    ${module.diagnostics ? '<a href="#diagnostics">Diagnose</a>' : ''}
    ${module.frameworks && module.frameworks.length ? '<a href="#frameworks">Frameworks</a>' : ''}
    ${module.apply ? '<a href="#apply">Apply</a>' : ''}
    ${module.keyReading ? '<a href="#reading">Reading</a>' : ''}
  </nav>

  <article class="module">
    ${renderCoreIdea(module.coreIdea, module.eli5)}
    ${renderDiagram(module.diagram)}
    ${renderMethod(module.method)}
    ${renderDiagnostics(module.diagnostics)}
    ${renderFrameworkList(module.frameworks, course, module)}
    ${renderApply(module.apply)}
    ${renderKeyReading(module.keyReading)}
  </article>

  ${REVEAL_SCRIPT}

  <div class="colophon">
    <span>${prevNext.prev ? `<a href="./m${prevNext.prev.number}.html">← m.${prevNext.prev.number} ${esc(prevNext.prev.title)}</a>` : `<a href="./">← back to ${esc(course.courseShort || course.courseName)}</a>`}</span>
    <span class="dots">···</span>
    <span>${prevNext.next ? `<a href="./m${prevNext.next.number}.html">m.${prevNext.next.number} ${esc(prevNext.next.title)} →</a>` : `<a href="./">back to ${esc(course.courseShort || course.courseName)}</a>`}</span>
  </div>

</main>

</body>
</html>`;
}

// ── Course index page ───────────────────────────────────

function renderCoursePage(course) {
  const modules = course.arc.blocks.map(block => {
    const items = block.modules.map(mid => {
      const m = course.modules[mid];
      if (!m) return '';
      const cls = m.stub ? ' class="coming-soon"' : '';
      const href = m.stub ? '' : `./m${m.number}.html`;
      return `
      <li${cls}>
        <a${href ? ` href="${href}"` : ''}>
          <div><div class="mod-num">m.${m.number}</div></div>
          <div>
            <div class="mod-title">${esc(m.title)}</div>
            ${m.hint ? `<div class="mod-hint">${m.hint}</div>` : ''}
          </div>
          <div class="mod-arrow">${m.stub ? '' : 'open →'}</div>
        </a>
      </li>`;
    }).join('');
    return `
    <p class="section-tag">Block ${esc(block.label)}</p>
    <ul class="module-list">${items}
    </ul>`;
  }).join('\n');

  const publishedCount = Object.values(course.modules).filter(m => !m.stub).length;
  const totalCount = Object.keys(course.modules).length;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(course.courseName)} · Frameworks</title>
<meta name="description" content="${esc(course.courseCode)} — ${esc(course.courseName)}. Frameworks and how to use them.">
${FONTS_LINK}
<link rel="icon" type="image/svg+xml" href="../assets/favicon.svg">
<link rel="stylesheet" href="../styles.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>

<header class="masthead">
  <div class="wrap">
    <div class="brand">Ebrahim Alhamed<span class="dot" aria-hidden="true"></span>Frameworks Library</div>
    <h1>${esc(course.courseDisplayName || course.courseName)}</h1>
    <p class="tagline">${esc(course.courseCode)} · ${esc(course.school)}${course.professor ? ` · ${esc(course.professor)}` : ''} · ${esc(course.cohort)}</p>
    <nav aria-label="Primary">
      <a href="../">Courses</a>
      <a href="./" class="active" aria-current="page">${esc(course.courseShort || course.courseCode)}</a>
    </nav>
  </div>
</header>

<main class="wrap" id="main" tabindex="-1">

  <p class="crumb">
    <a href="../">Courses</a><span class="sep">/</span>${esc(course.courseName)}
  </p>

  ${course.arc.pullquote ? `
  <section>
    <p class="section-tag">The course arc</p>
    <h2 class="display">${esc(course.arc.tagline || 'The shape of the course.')}</h2>
    <p class="lede">
      ${course.arc.pullquote}
      ${course.arc.attr ? `<span class="attr">— ${esc(course.arc.attr)}</span>` : ''}
    </p>
  </section>` : ''}

  <section>${modules}
  </section>

  <div class="colophon">
    <span>${esc(course.courseCode)} · ${publishedCount} of ${totalCount} published</span>
    <span class="dots">···</span>
    <span><a href="../">← back to the shelf</a></span>
  </div>

</main>

</body>
</html>`;
}

// ── Home shelf page ─────────────────────────────────────

function renderHomePage(courses) {
  const cards = courses.map(c => {
    const publishedCount = Object.values(c.modules || {}).filter(m => !m.stub).length;
    const totalCount = Object.keys(c.modules || {}).length;
    const isLive = publishedCount > 0;
    const label = isLive
      ? `${totalCount} modules · ${publishedCount} published`
      : (c.status || 'coming soon');
    const clsAttr = isLive ? 'course-card' : 'course-card coming-soon';
    const hrefAttr = isLive ? `href="./${c.code}/"` : '';
    const nameRaw = c.courseDisplayName || c.courseName;
    // escape first, then replace the already-escaped ampersand with a break (keep a space so screen readers still hear "and")
    const nameHtml = esc(nameRaw).replace(' &amp; ', '<br aria-hidden="true">&amp; ');
    const ariaLabel = isLive ? `${nameRaw} — ${label}` : `${nameRaw} — ${label}`;
    return `
      <${isLive ? 'a' : 'div'} class="${clsAttr}" ${hrefAttr} style="--course: var(${c.courseAccent});" aria-label="${esc(ariaLabel)}">
        <p class="code">${esc(c.courseCode)}${c.professor ? ` · ${esc(c.professor)}` : ''}</p>
        <div class="name">${nameHtml}</div>
        <div class="meta">${esc(label)}</div>
      </${isLive ? 'a' : 'div'}>`;
  }).join('\n');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Frameworks · Ebrahim Alhamed</title>
<meta name="description" content="A personal library of frameworks from the London Business School EMBA programme.">
${FONTS_LINK}
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>

<header class="masthead">
  <div class="wrap">
    <div class="brand">Ebrahim Alhamed<span class="dot" aria-hidden="true"></span>Frameworks Library</div>
    <h1>A personal library of <em class="serif">frameworks</em>.</h1>
    <p class="tagline">Notes from the LBS EMBA — kept here so I can find them in three years.</p>
    <nav aria-label="Primary">
      <a href="#note">Note</a>
      <a href="./" class="active" aria-current="page">Courses</a>
      <a href="#about">About</a>
    </nav>
  </div>
</header>

<main class="wrap" id="main" tabindex="-1">

  <section id="note">
    <p class="section-tag" style="margin-top: 40px;">A note, before you click around</p>
    <div class="prose">
      <p class="lede" style="max-width: 62ch;">
        It&rsquo;s not what you know. It&rsquo;s what you use.
      </p>
      <p style="max-width: 62ch;">
        Below is everything we&rsquo;ve covered at LBS, one page per module, in a shape
        I can actually scan when I need it. I hope you find it useful &mdash; let me
        know where it&rsquo;s lacking.
      </p>
      <p class="muted" style="max-width: 62ch;">
        &mdash; Ebrahim Alhamed
      </p>
    </div>
  </section>

  <section>
    <p class="section-tag" style="margin-top: 56px;">Courses · EMBA Dubai 2027</p>
    <h2 class="display">The shelf.</h2>
    <p class="prose muted" style="max-width: 56ch;">
      Each card opens to a course. Each course expands into its modules.
      Each module is a single-page reference for the frameworks, the ideas behind them, and how to use them.
    </p>

    <div class="shelf">${cards}
    </div>
  </section>

  <section id="about">
    <hr class="accent">
    <p class="section-tag">About the object</p>
    <h2 class="display">Why it looks like this.</h2>
    <div class="prose">
      <p>
        Each module page is designed to be scannable in under a minute and to reward a longer read.
        The writing is sparse on purpose. The diagrams are hand-drawn on purpose. The palette is warm on purpose.
        If in three years I come back tired and need to remember what <em class="serif">Congruence</em> or
        <em class="serif">SAID</em> or <em class="serif">Cournot</em> actually meant, I want to find everything where I left it.
      </p>
    </div>
  </section>

  <div class="colophon">
    <span>Frameworks · v1</span>
    <span class="dots">···</span>
    <span>Built with love, in the margins of an MBA</span>
  </div>

</main>

</body>
</html>`;
}

// Helpers

function findBlockLabel(course, moduleId) {
  for (const b of course.arc.blocks) {
    if (b.modules.includes(moduleId)) return b.label;
  }
  return '';
}

function getPrevNext(course, moduleId) {
  const all = course.arc.blocks.flatMap(b => b.modules);
  const idx = all.indexOf(moduleId);
  const prev = idx > 0 ? course.modules[all[idx - 1]] : null;
  const next = idx < all.length - 1 ? course.modules[all[idx + 1]] : null;
  return { prev, next };
}

module.exports = {
  renderModulePage,
  renderCoursePage,
  renderHomePage,
  getPrevNext,
};

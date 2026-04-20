#!/usr/bin/env node
// Build script: reads course data files, renders static HTML pages.

const fs = require('fs');
const path = require('path');
const render = require('./render.js');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');

function readCourse(code) {
  return require(path.join(DATA_DIR, `${code}.js`));
}

function writeFile(outPath, contents) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, contents);
  console.log('  wrote', path.relative(ROOT, outPath));
}

function buildCourse(code) {
  const course = readCourse(code);
  const courseDir = path.join(ROOT, course.code);

  console.log(`\n▸ Building ${course.courseCode} ${course.courseName}`);

  // Course index
  writeFile(path.join(courseDir, 'index.html'), render.renderCoursePage(course));

  // Module pages
  const allModules = course.arc.blocks.flatMap(b => b.modules);
  for (const moduleId of allModules) {
    const mod = course.modules[moduleId];
    if (!mod) continue;
    if (mod.stub) continue;
    const prevNext = render.getPrevNext(course, moduleId);
    writeFile(
      path.join(courseDir, `m${mod.number}.html`),
      render.renderModulePage({ course, module: mod, prevNext })
    );
  }
}

function buildHome(courses) {
  console.log('\n▸ Building home (shelf)');
  writeFile(path.join(ROOT, 'index.html'), render.renderHomePage(courses));
}

function main() {
  const codes = ['lpo', 'fa', 'da', 'me', 'el'];
  const courses = codes.map(readCourse);
  for (const c of codes) buildCourse(c);

  // Courses not yet started — display as stubs on the shelf
  const comingSoon = [
    {
      code: 'sm',
      courseCode: 'CD52',
      courseName: 'Strategic Management',
      courseDisplayName: 'Strategic Management',
      professor: 'LBS Faculty',
      courseAccent: '--c-fa',
      status: 'starts April 24',
      modules: {}
    },
    {
      code: 'ms',
      courseCode: 'CD55',
      courseName: 'Marketing Strategies',
      courseDisplayName: 'Marketing Strategies',
      professor: 'LBS Faculty',
      courseAccent: '--c-ms',
      status: 'starts April 24',
      modules: {}
    }
  ];

  buildHome([...courses, ...comingSoon]);

  console.log('\n✓ Build complete.\n');
}

main();

const test = require('node:test');
const assert = require('node:assert/strict');

const course = require('../data/mf.js');
const { getPrevNext, renderModulePage } = require('../scripts/render.js');

const handoutFrameworks = {
  m03: 'Shadow Pricing',
  m04: 'Govern to the Widest Boundary',
  m05: 'Strategic Dashboard',
  m06: 'Gaining-Traction Cascade',
  m07: 'Incentives Carry Meaning',
  m08: 'Platform-Ecosystem Polymorphism',
  m09: 'Targeting for Value and Fit',
  m10: 'Brand DNA',
};

test('renders one handout-derived framework for each live-session module', () => {
  for (const [moduleId, frameworkName] of Object.entries(handoutFrameworks)) {
    const module = course.modules[moduleId];
    const framework = module.frameworks.find(({ name }) => name === frameworkName);

    assert.ok(framework, `${moduleId} is missing ${frameworkName}`);
    assert.match(framework.author, /CD61 Module \d+ handout/);
    assert.ok(framework.components.length >= 3);

    const html = renderModulePage({
      course,
      module,
      prevNext: getPrevNext(course, moduleId),
    });
    assert.ok(html.includes(frameworkName), `${frameworkName} is not rendered`);
  }
});

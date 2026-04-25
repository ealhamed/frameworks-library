// SM · CD52 · Advanced Strategic Management · LBS Faculty
module.exports = {
  code: 'sm',
  courseCode: 'CD52',
  courseName: 'Advanced Strategic Management',
  courseShort: 'SM',
  courseDisplayName: 'Advanced Strategic Management',
  courseAccent: '--c-sm',
  professor: 'LBS Faculty',
  frameworksTag: 'Frameworks in this module',
  frameworksHeading: 'Named ideas to remember.',
  school: 'London Business School',
  cohort: 'EMBA Dubai 2027',
  arc: {
    tagline: 'Two blocks. Nine modules.',
    pullquote: 'Read the industry first, then choose where to play and how to win.',
    attr: 'the course, told in one line',
    blocks: [
      { label: 'I · Position the firm', modules: ['m01', 'm02', 'm03', 'm04'] },
      { label: 'II · Choose strategic moves', modules: ['m05', 'm06', 'm07', 'm08', 'm09'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Competitive Advantage',
      title: 'The Value Wedge',
      hint: 'A firm wins when it drives a wider wedge between what buyers will pay and what supply costs - wider than any rival can.',
      kicker: 'Brandenburger, Stuart, Ghemawat & Rivkin - willingness-to-pay minus supplier cost is the only profit pool that exists.',
      coreIdea: {
        text: 'Competitive advantage is not a slogan, it is a measurable gap. Total value created in any transaction is the buyer\'s willingness to pay minus the supplier\'s opportunity cost; price only decides who captures it. A firm has an advantage when its wedge between WTP and cost is wider than rivals can match - and it earns added value only when the network would be worse off without it. Two pure routes widen the wedge: lift WTP by more than cost (differentiation), or cut cost by more than WTP (low-cost). Industry sets the ceiling; activities decide how high you climb under it.',
        attr: 'after Brandenburger & Stuart, extended by Ghemawat & Rivkin'
      },
      diagram: {
        type: 'two-axis',
        title: 'Willingness to Pay vs. Cost - the wedge that defines advantage',
        intro: 'Plot any competitor on two stacked bars. The gap between the top of WTP and the bottom of cost is total value created. The firm whose gap is widest - and whose activities make that gap hard to copy - has the advantage.',
        xAxis: { label: 'Supplier opportunity cost', lowDesc: 'Low cost - efficient activities, scale, cheap inputs, lean configuration. Sets the floor of the wedge.', highDesc: 'High cost - costly inputs, complex operations, premium inputs. The wedge narrows from below.' },
        yAxis: { label: 'Customer willingness to pay', lowDesc: 'Low WTP - undifferentiated, easily substituted, no premium possible. The wedge narrows from above.', highDesc: 'High WTP - distinctive benefits, brand, switching costs, scarcity. Lifts the ceiling of the wedge.' }
      }
    }
  }
};

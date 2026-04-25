// MS · CD55 · Customer-centric Market Strategies · LBS Faculty
module.exports = {
  code: 'ms',
  courseCode: 'CD55',
  courseName: 'Customer-centric Market Strategies',
  courseShort: 'MS',
  courseDisplayName: 'Customer-centric Market Strategies',
  courseAccent: '--c-ms',
  professor: 'LBS Faculty',
  frameworksTag: 'Frameworks in this module',
  frameworksHeading: 'Named ideas to remember.',
  school: 'London Business School',
  cohort: 'EMBA Dubai 2027',
  arc: {
    tagline: 'One block. Five modules.',
    pullquote: 'Start from the customer; segment, target, and position from there.',
    attr: 'the course, told in one line',
    blocks: [
      { label: 'I · Customer-first strategy', modules: ['m01', 'm02', 'm03', 'm04', 'm05'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Market Analysis',
      title: 'The 5Cs',
      hint: 'Read the market through five lenses before you decide what to sell, to whom, or for how much.',
      kicker: 'Tavassoli (after Kotler) - Company, Customers, Competitors, Collaborators, Context - the situational scan that opens every marketing plan.',
      coreIdea: {
        text: 'Marketing is the management of cash flow from customers, and it starts with a clear-eyed read of the situation. Before strategy or the 4Ps, you map five forces: what your Company can do, what Customers actually need, who the Competitors are, which Collaborators sit in the value chain, and what Context (political, economic, social, technological, legal, environmental) shapes the field. Skip this scan and the rest of the plan is built on assumptions.',
        attr: 'after the marketing process tradition (Kotler, Tavassoli)'
      },
      diagram: {
        type: 'flow',
        title: 'The 5Cs of Market Analysis',
        intro: 'Five questions that together describe the market a strategy has to win in.',
        steps: [
          { label: 'Company', desc: 'What capabilities, assets, costs and culture do we bring? Where do we have a right to win and how do we capture part of the value created?' },
          { label: 'Customers', desc: 'What do they value, why and how do they buy, and how attractive is the resulting demand? Treat the customer - not the product - as the unit of analysis.' },
          { label: 'Competitors', desc: 'Who else is meeting the same customer need? How are they competing, what are their economics, and what makes us meaningfully different?' },
          { label: 'Collaborators', desc: 'Which channel partners, suppliers and complementors let us deliver value? What incentives keep them participating in the value chain?' },
          { label: 'Context', desc: 'What macro forces (Political, Economic, Sociocultural, Technological, Legal, Environmental) are reshaping the market and the assumptions behind the plan?' }
        ]
      }
    }
  }
};

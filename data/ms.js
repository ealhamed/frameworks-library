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
    },
    m02: {
      id: 'm02', number: '02', topic: 'Customer Lifetime Value',
      title: 'The CLV Formula',
      hint: 'A customer is worth their margin, multiplied by how long they stay, discounted to today, minus what it cost to win them.',
      kicker: 'after Gupta, Lemmens & Reichheld · forward-looking · margin x retention multiple - acquisition cost.',
      coreIdea: {
        text: 'Customer Lifetime Value reframes a customer as a financial asset rather than a transaction. It is the net present value of all future profits a customer will generate before they churn, minus what it cost to acquire them. With constant margin and retention, the infinite-horizon series collapses to a clean formula: CLV equals margin times the retention multiple r/(1+i-r), minus acquisition cost. Three levers move it: acquire, retain, expand.',
        attr: 'synthesised from Gupta, Lemmens, Reichheld and the customer-equity literature'
      },
      diagram: {
        type: 'flow',
        title: 'From a single customer to firm value',
        intro: 'Each step takes one input from the customer relationship and turns it into the next. The chain ends in a number you can compare against acquisition cost — and aggregate into customer equity.',
        steps: [
          { label: 'Margin (m)', desc: 'Annual profit per customer — revenue minus variable cost to serve. Held constant in the simple form.' },
          { label: 'Retention (r)', desc: 'Probability the customer is still there next year. Survival compounds: r, r-squared, r-cubed across years.' },
          { label: 'Discount (i)', desc: 'Cost of capital. Future profits are pulled back to today by dividing by (1+i) raised to the year.' },
          { label: 'Margin multiple', desc: 'Retention and discount collapse into one number: r / (1 + i - r). At r=80%, i=10% that is 2.67 years of margin.' },
          { label: 'Acquisition cost (AC)', desc: 'What was spent to win the customer in year zero. Subtracted once. Already-acquired customers carry AC = 0.' },
          { label: 'CLV = m x [r / (1+i-r)] - AC', desc: 'The customer\'s value to the firm today. A healthy CLV/AC ratio is around 3 — below that, growth is bought, not earned.' },
          { label: 'Customer equity', desc: 'Sum of CLV across the current base plus discounted CLV of future acquisitions. A bottom-up valuation of the firm itself.' }
        ]
      }
    }
  }
};

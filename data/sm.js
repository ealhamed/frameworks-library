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
    },
    m02: {
      id: 'm02', number: '02', topic: 'Industry Analysis',
      title: 'The Five Forces',
      hint: 'An industry\'s profit ceiling is set by five forces that bargain, threaten, or compete the surplus away - structure, not weather.',
      kicker: 'Porter - industry attractiveness - structural analysis.',
      coreIdea: {
        text: 'Profitability is not luck or management nerve - it is the residue left after five forces have taken their cut. Customers and suppliers bargain value away; entrants and substitutes cap how much can be charged; rivals compete the rest down. The strongest force - not the average - sets the ceiling. Read structure, not headlines: weather and the cycle move quarterly results, but the five forces decide returns over the long run.',
        attr: 'after Porter'
      },
      diagram: {
        type: 'flow',
        title: 'Five Forces - the structural cut on industry profit',
        intro: 'Walk the five in order. For each, name what makes it strong here, then ask which force is binding. The strongest one sets your ceiling; everything else is noise.',
        steps: [
          { label: '1. Threat of New Entrants', desc: 'New capacity arriving puts a cap on prices and profits. The threat is high when barriers are low - small scale economies, weak network effects, low switching costs, modest capital, open distribution, no incumbent retaliation expected. High barriers (scale, brand, patents, regulation, locked channels) protect the pool.' },
          { label: '2. Bargaining Power of Suppliers', desc: 'Suppliers extract value by raising input prices or rationing quality. They are powerful when concentrated, when buyers face switching costs, when their input is differentiated or has no substitute, when they can credibly integrate forward, or when the industry is not a critical share of their volume.' },
          { label: '3. Bargaining Power of Buyers', desc: 'Buyers extract value by pushing prices down or demanding more for the same money. They are powerful when concentrated or buying in volume, when the product is standard, when switching costs are low, or when they can credibly make the product themselves. Add price sensitivity when the purchase is a large share of their cost.' },
          { label: '4. Threat of Substitutes', desc: 'A substitute performs the same function from a different industry - and often hides in plain sight. The threat is high when the substitute offers an attractive price-performance trade-off and switching costs are low. Substitutes cap the price ceiling and limit upside even in boom years.' },
          { label: '5. Rivalry Among Existing Competitors', desc: 'Rivalry shows up as price discounting, ad wars, new launches, and service escalation. It runs hot when competitors are numerous or balanced, growth is slow, fixed costs are high, products are undifferentiated, exit barriers trap capacity, or rivals have divergent goals. Price-based rivalry is the most destructive form.' }
        ]
      }
    },
    m03: {
      id: 'm03', number: '03', topic: 'External Environment & Positioning',
      title: 'Generic Strategies',
      hint: 'Pick a side: compete on cost or on differentiation, across a broad market or a narrow focus — straddling either is the trap.',
      kicker: 'Porter · target scope x source of advantage = a defensible position.',
      coreIdea: {
        text: 'A position is defensible only when the firm chooses both what advantage it offers and to whom. Two choices define the field: compete on lowest delivered cost or on a differentiation buyers will pay a premium for, and aim that advantage at the broad market or a narrow segment. Trying to be cheap and special for everyone leaves a firm stuck in the middle, beaten on price by the cost leader and on value by the differentiator. The discipline is to align every activity — pricing, product, channel, organisation — to the chosen position and refuse the work that does not fit.',
        attr: 'after Michael Porter'
      },
      diagram: {
        type: 'matrix',
        title: 'Target scope x source of advantage',
        intro: 'Two questions decide the position. Where do you compete (broad market or a narrow segment) and how do you win (lower cost or buyer-perceived value). The four cells are the only stable answers; the centre is the trap.',
        rows: [
          { label: 'Broad target', desc: 'Serve the whole market with one offer. Scale and learning curves dominate; a single value proposition has to travel across segments.' },
          { label: 'Narrow target', desc: 'Serve a chosen segment exceptionally well. Tailored activities beat generalists inside the niche but cannot be stretched outside it.' }
        ],
        cols: [
          { label: 'Cost', desc: 'Win by being the lowest-cost producer at acceptable quality. Requires relentless cost discipline, scale, standardisation and efficient operations.' },
          { label: 'Differentiation', desc: 'Win by offering something buyers value enough to pay a premium for. Requires distinctive content, brand, service or design — and the willingness to refuse cheap shortcuts that erode it.' }
        ]
      }
    }
  }
};

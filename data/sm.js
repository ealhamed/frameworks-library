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
      },
      frameworks: [
        {
          name: 'Value-Based Strategy (the Wedge)',
          author: 'Brandenburger & Stuart · 1996',
          components: ['Willingness to pay (WTP)', 'Price', 'Cost', 'Supplier opportunity cost', 'Value created = WTP minus cost'],
          rule: 'The only profit that exists is the gap between WTP and cost; price determines who keeps it.'
        },
        {
          name: 'Added Value',
          author: 'Brandenburger & Stuart',
          components: ['Added value = total value with the firm minus total value without'],
          rule: 'A firm can only claim the value the network would lose without it — no more.'
        },
        {
          name: 'Two Routes to Advantage',
          author: 'after Ghemawat & Rivkin',
          components: ['Differentiation: raise WTP more than cost rises', 'Cost leadership: cut cost more than WTP falls'],
          rule: 'Choose one route and align every activity to it; the middle is not a position.'
        }
      ],
      apply: {
        title: 'At the next strategic review.',
        steps: [
          { strong: 'Map the wedge for your firm and two rivals.', rest: 'Estimate WTP (price + consumer surplus) and cost for each. Who has the widest gap?' },
          { strong: 'Identify which route you are on.', rest: 'Differentiation or cost — not both. If activities conflict, you are straddling.' },
          { strong: 'Test your added value.', rest: 'Would the value chain be worse off without you? If not, your claimed margin is at risk.' },
          { strong: 'Name the one activity that drives your WTP advantage.', rest: 'Describe it in one sentence. If you cannot, it is not a real advantage.' },
          { strong: 'Check the industry ceiling.', rest: 'What is the strongest of the five forces constraining this market? That sets how much wedge any firm can earn.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Corts & Rivkin · HBS Note 9-799-128',
        title: 'A Note on Microeconomics for Strategists.',
        prose: 'Corts and Rivkin ground strategy in microeconomics: willingness to pay, marginal cost, elasticity, and the conditions under which markets depart from perfect competition. Perfect competition leaves no rents; real advantage requires a departure from it — via differentiation, scale, or network effects. The note provides the vocabulary for rigorous wedge analysis.',
        kicker: 'If price equals marginal cost, no one earns a rent. Advantage is the gap between your position and that benchmark.'
      },
      eli5: {
        title: 'The lemonade stand and the gap.',
        body: [
          'Imagine a lemonade stand. The lemons, sugar, and your time cost you $1. If someone is willing to pay $3, there is a <strong>$2 value gap</strong>. You and your supplier split that gap; the price just decides how.',
          'Your rival uses the same lemons. But you found a way to make the lemonade taste better (higher WTP) without spending more — or found cheaper lemons (lower cost). Either way, your gap is wider. That is your advantage.',
          'The street you are on is the industry. If a big supermarket opens nearby and starts giving lemonade away for free, the ceiling on what anyone can charge just dropped — and no activity inside your stand fixes that. Read the street before you redesign the stand.'
        ]
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
        type: 'five-forces',
        tag: 'The hero diagram',
        title: 'The Five Forces shaping industry profit',
        intro: 'Walk the five in order. For each, name what makes it strong here, then ask which force is binding. The strongest one sets your ceiling; everything else is noise.',
        center: {
          label: 'Industry Rivalry',
          desc: 'Price discounting, ad wars, and capacity races. Most destructive when firms are balanced, growth is slow, and products are undifferentiated.'
        },
        forces: [
          {
            position: 'top',
            label: 'Threat of New Entrants',
            desc: 'New capacity arriving caps prices and profits. High when barriers are low: small scale economies, weak network effects, low switching costs, modest capital, open distribution, no expected retaliation.'
          },
          {
            position: 'right',
            label: 'Bargaining Power of Buyers',
            desc: 'Buyers push prices down or demand more for the same money. Powerful when concentrated, buying in volume, facing low switching costs, or able to credibly make the product themselves.'
          },
          {
            position: 'bottom',
            label: 'Threat of Substitutes',
            desc: 'A substitute performs the same function from a different industry. The threat is high when it offers an attractive price-performance trade-off and switching costs are low, capping the price ceiling.'
          },
          {
            position: 'left',
            label: 'Bargaining Power of Suppliers',
            desc: 'Suppliers extract value by raising input prices or rationing quality. Powerful when concentrated, when buyers face switching costs, when their input is differentiated, or when they can credibly integrate forward.'
          }
        ]
      },
      frameworks: [
        {
          name: 'Porter\'s Five Forces',
          author: 'Porter · HBR 1979, updated 2008',
          components: ['Threat of new entrants', 'Bargaining power of buyers', 'Bargaining power of suppliers', 'Threat of substitutes', 'Rivalry among competitors'],
          rule: 'The strongest force sets the ceiling. Analyse all five; act on the binding one.'
        },
        {
          name: 'Industry vs Firm Effects',
          author: 'after Porter',
          components: ['Industry structure → average profitability', 'Firm position → deviation from average'],
          rule: 'First choose an attractive industry; then choose a defensible position within it.'
        }
      ],
      apply: {
        title: 'Before any major strategic decision.',
        steps: [
          { strong: 'Define the industry boundary carefully.', rest: 'Too broad and the analysis is meaningless; too narrow and you miss substitutes.' },
          { strong: 'Score each force as high, moderate, or low.', rest: 'Name one concrete fact that drives your rating for each.' },
          { strong: 'Identify the binding force.', rest: 'Which single force most constrains what any firm in this industry can earn?' },
          { strong: 'Separate structure from the cycle.', rest: 'Is this a five-forces issue (structural) or a macro issue (cyclical)? The response is different.' },
          { strong: 'Look for an underappreciated substitute.', rest: 'Substitutes hide in adjacent industries. Name the one most likely to become binding in five years.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Porter · HBR 1979 (updated 2008)',
        title: 'The Five Competitive Forces That Shape Strategy.',
        prose: 'Porter\'s original 1979 paper — updated in 2008 to address internet-era distortions — argues that industry structure, not management skill or economic luck, determines the long-run profitability of any business. The Cola Wars case illustrates the framework in practice: concentrate producers earn four times the operating margin of bottlers because their structural position is four times stronger.',
        kicker: 'Industry structure is not destiny — but it is the starting point for every strategic choice.'
      },
      eli5: {
        title: 'The tollbooth on the road to profit.',
        body: [
          'Picture the road to profit as a highway with five tollbooths. Suppliers take a cut at the entrance. Buyers take a cut at the exit. New entrants threaten to build a parallel road. Substitutes offer a shortcut that bypasses your road entirely. Rivals compete to sell the same toll stickers cheaper.',
          'The amount you keep is what is left after all five booths have taken their share. If the booths are powerful, almost nothing arrives at the end — no matter how well you drive.',
          'The Cola Wars illustrate it cleanly. Coke and Pepsi earned roughly 30% operating margins as concentrate producers; their bottlers earned about 9%. Same industry, same product — but different structural positions at different tollbooths.'
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
        type: '2x2',
        title: 'Target scope x source of advantage',
        intro: 'Two questions decide the position. Where do you compete (broad market or a narrow segment) and how do you win (lower cost or buyer-perceived value). The four cells are the only stable answers; the centre is the trap.',
        xAxis: { label: 'Source of advantage', lo: 'Cost', hi: 'Differentiation' },
        yAxis: { label: 'Target scope', lo: 'Narrow', hi: 'Broad' },
        quadrants: [
          { pos: 'tl', label: 'Cost Leadership' },
          { pos: 'tr', label: 'Differentiation' },
          { pos: 'bl', label: 'Focus (Cost)' },
          { pos: 'br', label: 'Focus (Differentiation)' }
        ]
      },
      frameworks: [
        {
          name: 'Generic Strategies',
          author: 'Porter · Competitive Strategy 1980',
          components: ['Cost leadership', 'Differentiation', 'Focus (cost)', 'Focus (differentiation)', 'Stuck in the middle (trap)'],
          rule: 'Choose a cell and align every activity to it; the middle is not a stable resting place.'
        },
        {
          name: 'Activity System Alignment',
          author: 'after Porter',
          components: ['Primary activities', 'Support activities', 'Fit and reinforcement'],
          rule: 'Advantage compounds when activities reinforce each other; a single activity is easily copied.'
        }
      ],
      apply: {
        title: 'To test whether your position is real.',
        steps: [
          { strong: 'State your position in one sentence.', rest: 'Who are your target customers and what is the one basis on which you win?' },
          { strong: 'List the three activities that most reinforce that position.', rest: 'If you cannot name them, the position is a claim, not a system.' },
          { strong: 'Name what you deliberately do not do.', rest: 'A real position requires trade-offs. What have you refused in order to hold it?' },
          { strong: 'Check for middle-of-the-road drift.', rest: 'Are you adding features or customers that pull you away from the chosen position?' },
          { strong: 'Test differentiation claims with buyers.', rest: 'What specifically would the target buyer lose if you were replaced by the nearest rival?' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Oberholzer-Gee & Anand · HBS Case 710-441',
        title: 'The Economist.',
        prose: 'The Economist case illustrates a focus-differentiation position held under competitive pressure: anonymous editorial voice, global uniformity, premium pricing, and deliberate refusal to chase mass-media traffic. While rivals cut subscription prices, The Economist raised them — and grew. The case shows how a coherent activity system earns returns that structural analysis alone cannot predict.',
        kicker: 'Coherence is the moat. Every activity that does not reinforce the position is a hole in the wall.'
      },
      eli5: {
        title: 'The restaurant that picks its lane.',
        body: [
          'A restaurant can win by being the cheapest place on the street (cost leadership), or by being the one place that does something nobody else does (differentiation). Either works. What does not work is trying to be both — cheap ingredients and a Michelin-star reputation.',
          'The Economist picked its lane: expensive, opinionated, anonymous, global. Rivals tried to be cheaper and broader. The Economist raised its price and got more readers.',
          'The discipline is not the strategy — it is the refusals. Everything they say no to is what makes the yes defensible.'
        ]
      }
    },
    m04: {
      id: 'm04', number: '04', topic: 'Competitive Dynamics',
      title: 'Commitment & Capacity Games',
      hint: 'A move is strategic when it is hard to reverse and changes what your rival will rationally do next.',
      kicker: 'Ghemawat · commitment · capacity pre-emption · move and counter-move.',
      coreIdea: {
        text: 'Competition between a few large rivals is a sequence of moves. The moves that matter are commitments — investments in capacity, technology or position that are costly to undo and visible to rivals. A credible commitment shifts the game by changing your rival\'s best response: it can deter entry, pre-empt capacity, or force accommodation. Read every major move by asking what it locks in, what it signals, and how the rival will rationally counter.',
        attr: 'after Ghemawat'
      },
      diagram: {
        type: 'decision-tree',
        title: 'Reading a Rival Move',
        intro: 'Walk any major competitive move — yours or theirs — through these gates before you commit capital.',
        nodes: [
          { id: 'reversible', question: 'Is the move reversible?', branches: [{ label: 'Yes — easy to undo', leadsTo: 'tactical' }, { label: 'No — sunk and visible', leadsTo: 'credible' }] },
          { id: 'tactical', question: 'Tactical move only — price tweak, promotion, talk. It signals intent but does not change the game. Watch, do not react with capital.', branches: [] },
          { id: 'credible', question: 'Does it change the rival\'s best response?', branches: [{ label: 'Yes — alters their payoff', leadsTo: 'intent' }, { label: 'No — symbolic', leadsTo: 'tactical' }] },
          { id: 'intent', question: 'What is the commitment doing?', branches: [{ label: 'Pre-empting capacity or position', leadsTo: 'deter' }, { label: 'Raising rival\'s cost to compete', leadsTo: 'deter' }, { label: 'Signalling toughness or softness', leadsTo: 'signal' }] },
          { id: 'deter', question: 'Will the rival accommodate or fight? Accommodate if your commitment makes their entry or expansion unprofitable; fight if they have deeper pockets, sunk assets of their own, or strategic stakes that make retreat costlier than war.', branches: [] },
          { id: 'signal', question: 'Is the signal credible? A signal is only credible when backed by something irreversible — capacity built, contracts signed, reputation staked. Cheap talk is ignored by rational rivals.', branches: [] }
        ]
      },
      frameworks: [
        {
          name: 'Commitment as Strategy',
          author: 'Ghemawat · Commitment 1991',
          components: ['Irreversibility', 'Visibility to rivals', 'Effect on rival\'s best response'],
          rule: 'A move that is reversible is tactics; a move that is irreversible and visible is strategy.'
        },
        {
          name: 'Capacity Pre-emption',
          author: 'after Ghemawat',
          components: ['First-mover capacity build', 'Deterrence of rival entry or expansion', 'Post-entry punishment credibility'],
          rule: 'Pre-empt only when you can fill the capacity and when doing so makes rival entry unprofitable.'
        },
        {
          name: 'Deter vs Accommodate',
          author: 'after Ghemawat',
          components: ['Deter: make entry or expansion unprofitable for rival', 'Accommodate: allow rival a share, avoid destructive rivalry'],
          rule: 'Deterrence requires both the ability and the will to punish; without both, it is not credible.'
        }
      ],
      apply: {
        title: 'Before committing capital in a concentrated market.',
        steps: [
          { strong: 'Ask: is this reversible?', rest: 'If yes, it is tactics. If no, it is a strategic move that deserves the full analysis.' },
          { strong: 'Map the rival\'s payoffs.', rest: 'How does this move change what your rival will rationally do? Draw the game tree.' },
          { strong: 'Check credibility.', rest: 'Can you actually follow through on the implied threat or commitment? If not, the rival will call the bluff.' },
          { strong: 'Estimate the rival\'s sunk assets.', rest: 'A rival with large sunk investments may fight even when accommodation is rational on paper.' },
          { strong: 'Decide: deter or accommodate?', rest: 'Deterrence destroys value if it triggers a war. Accommodation can be rational if it preserves a profit pool.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Casadesus-Masanell et al. · HBS Case 707-447',
        title: 'Airbus vs. Boeing (A).',
        prose: 'The Airbus-Boeing duopoly from 1992 illustrates strategic commitment: capacity investments of $4-20 billion are irreversible, visible, and change each rival\'s best response for a decade. The case shows how to read whether to go alone (pre-empt the super-jumbo market) or collaborate, and how divergent beliefs about market size drive asymmetric commitments.',
        kicker: 'In a duopoly, every capital decision is a message to the rival. Make sure it says what you intend.'
      },
      eli5: {
        title: 'The chess player who tips over their own pieces.',
        body: [
          'In chess you can always take back a move — in real competition you cannot. When Boeing orders a new production line, that is not a chess move; it is welding a piece to the board. The rival now plays a different game.',
          'The power of commitment is exactly that irreversibility. By removing your own flexibility, you remove the rival\'s reason to fight — if you have signalled clearly that you will never back down.',
          'The danger is that irreversibility cuts both ways. A commitment made on a wrong forecast is not strategy — it is a very expensive mistake that you cannot undo.'
        ]
      }
    },
    m05: {
      id: 'm05', number: '05', topic: 'Strategic Innovation',
      title: 'Disruption from Below',
      hint: 'New technologies enter underperforming and cheap; incumbents ignore them until the curve crosses what mainstream customers will accept.',
      kicker: 'Christensen · sustaining vs disruptive · the trajectory that catches incumbents flat-footed.',
      coreIdea: {
        text: 'Innovation is not one curve but two. Incumbents ride the sustaining trajectory — each generation makes an established product better along the dimensions current customers already value, and they overshoot what most buyers actually need. A disruptive trajectory starts elsewhere: a simpler, cheaper, lower-performing offer that serves a fringe or non-consumer the incumbent rationally ignores. The disruptor improves on its own slope, and when its trajectory crosses the threshold of customer-acceptable performance the mainstream switches — quickly, and on a different basis of competition. The incumbent\'s strength on the old curve is precisely what makes the new one invisible until it is too late.',
        attr: 'after Christensen'
      },
      diagram: {
        type: 'custom',
        title: 'Two trajectories, one threshold',
        intro: 'Performance rises over time on both curves. The dashed line is what mainstream customers will accept. The disruptor starts below that line and crosses it — that crossing is the moment incumbents lose.',
        svg: '<svg viewBox="0 0 640 400" role="img" aria-label="Two performance trajectories rising over time, with the disruptive trajectory starting below the customer-acceptable threshold and crossing it from below" xmlns="http://www.w3.org/2000/svg" class="trajectory"><defs><marker id="t-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--text, #1a1714)"/></marker></defs><line x1="60" y1="340" x2="610" y2="340" stroke="var(--text, #1a1714)" stroke-width="2" marker-end="url(#t-arrow)"/><line x1="60" y1="340" x2="60" y2="30" stroke="var(--text, #1a1714)" stroke-width="2" marker-end="url(#t-arrow)"/><text x="335" y="380" text-anchor="middle" font-family="DM Serif Display, serif" font-size="18" fill="var(--text, #1a1714)">Time</text><text x="20" y="190" text-anchor="middle" font-family="DM Serif Display, serif" font-size="18" fill="var(--text, #1a1714)" transform="rotate(-90, 20, 190)">Performance</text><line x1="60" y1="160" x2="600" y2="160" stroke="var(--muted, #4a4640)" stroke-width="1.4" stroke-dasharray="6 6"/><text x="600" y="152" text-anchor="end" font-family="Inter, sans-serif" font-size="12" fill="var(--muted, #4a4640)" font-style="italic">Customer-acceptable performance</text><path d="M 60 280 Q 200 240 350 170 T 600 60" fill="none" stroke="var(--text, #1a1714)" stroke-width="2.5"/><text x="600" y="50" text-anchor="end" font-family="DM Serif Display, serif" font-size="14" fill="var(--text, #1a1714)">Sustaining</text><path d="M 60 320 Q 220 310 350 230 T 600 110" fill="none" stroke="var(--accent, #b05a3a)" stroke-width="2.5"/><text x="600" y="125" text-anchor="end" font-family="DM Serif Display, serif" font-size="14" fill="var(--accent, #b05a3a)">Disruptive</text><circle cx="425" cy="160" r="5" fill="var(--accent, #b05a3a)"/><text x="430" y="180" text-anchor="start" font-family="Inter, sans-serif" font-size="11" fill="var(--accent, #b05a3a)" font-style="italic">crossing point</text></svg>'
      },
      frameworks: [
        {
          name: 'Sustaining vs Disruptive Innovation',
          author: 'Christensen · The Innovator\'s Dilemma 1997',
          components: ['Sustaining trajectory: better along existing dimensions', 'Disruptive trajectory: simpler, cheaper, lower-performing to start', 'Crossing point: disruptor meets mainstream threshold'],
          rule: 'Watch the trajectory, not the current performance gap. Disruption happens when the two curves cross.'
        },
        {
          name: 'Performance Overshoot',
          author: 'after Christensen',
          components: ['Incumbent keeps improving beyond what most buyers need', 'Price premium grows', 'Fringe and non-consumers become viable targets for disruptors'],
          rule: 'If your product is better than most customers need, you are vulnerable from below.'
        }
      ],
      apply: {
        title: 'To stress-test your position against disruption.',
        steps: [
          { strong: 'Map the sustaining trajectory for your industry.', rest: 'What performance dimension have incumbents been improving? How far past customer need have they gone?' },
          { strong: 'Name the non-consumer or fringe segment.', rest: 'Who is too price-sensitive or too low-need to use the current offer? That is the disruptor\'s landing zone.' },
          { strong: 'Identify the disruptive candidate.', rest: 'What simpler, cheaper alternative exists today that incumbent customers would currently reject?' },
          { strong: 'Project the crossing point.', rest: 'At what pace is the disruptive offer improving? When does it cross the customer-acceptable threshold?' },
          { strong: 'Decide: ignore, acquire, or create a separate unit?', rest: 'Incumbents rarely win disruptions by improving the main product. Separation is often the only answer.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · LBS Case CS-24-002',
        title: 'Dubai Air Taxi.',
        prose: 'The eVTOL case illustrates both curves in motion: helicopters represent the sustaining trajectory (expensive, premium, urban elite), while electric air taxis aim at a mass-market fringe that could not afford helicopter rides. The case tests whether the disruptive trajectory will cross the performance threshold before incumbents can respond.',
        kicker: 'The crossing point is not visible until it has already happened to most incumbents. Track the trajectory early.'
      },
      eli5: {
        title: 'The camera that arrived from nowhere.',
        body: [
          'In 2000, film cameras kept getting better — more megapixels, faster film, better lenses. They overshot what most photographers actually needed. Meanwhile, camera phones arrived: blurry, slow, not serious. Film companies ignored them.',
          'The phone camera did not compete with professional film. It served the billions of people who just wanted a quick photo with no fuss. It improved on its own slope — cheap, convenient, always in your pocket.',
          'By 2010, the crossing point had passed. Most people did not need film-camera quality. They needed camera-phone convenience. The incumbent\'s strength — precision optics and chemical film — was exactly what made the threat invisible until it was too late.'
        ]
      }
    },
    m06: {
      id: 'm06', number: '06', topic: 'Platform Strategy',
      title: 'The Two-Sided Platform',
      hint: 'A platform is a market between two user groups linked by cross-side network effects, not a product sold to one.',
      kicker: 'Rochet & Tirole / Eisenmann / Parker & Van Alstyne · two-sided markets, cross-side network effects, chicken-and-egg.',
      coreIdea: {
        text: 'A platform creates value by enabling two distinct user groups to transact, and each side becomes more attractive as the other grows. Because the demand on one side depends on participation on the other, the strategic problem is not setting one price but choosing a price structure: subsidise the side that draws the other and charge the side that values it most. Get both sides on board, or neither shows up. Network effects, not features, are the moat.',
        attr: 'after Rochet & Tirole, Eisenmann, and Parker & Van Alstyne'
      },
      diagram: {
        type: 'platform',
        tag: 'The hero diagram',
        title: 'How a two-sided platform creates value',
        intro: 'The platform sits between two interdependent user groups. Each side joins because the other is there — and the loop, once ignited, runs on its own.',
        platform: {
          label: 'Platform',
          desc: 'Rules, search, matching, payment, and trust. Sets the price structure: subsidise the side that draws the other, charge the side that values access most.'
        },
        sideA: {
          label: 'Producers',
          desc: 'Sellers, developers, hosts, or content makers. Join when buyer demand is large enough to justify the effort. Priced via take rate, listing fees, or early subsidy.'
        },
        sideB: {
          label: 'Consumers',
          desc: 'Buyers, players, riders, readers. Join when producer variety and quality cross a threshold. Their participation is what producers came for, closing the loop.'
        },
        effects: [
          { direction: 'AtoB', label: 'more producers → more variety, lower prices' },
          { direction: 'BtoA', label: 'more consumers → bigger market for sellers' }
        ]
      },
      frameworks: [
        {
          name: 'Two-Sided Market Theory',
          author: 'Rochet & Tirole · 2003 / Eisenmann · 2006',
          components: ['Two distinct user groups', 'Cross-side network effects', 'Price structure (not a single price)', 'Subsidise one side, charge the other'],
          rule: 'The strategic question is not what to charge but which side to charge — and that depends on which side draws the other.'
        },
        {
          name: 'Chicken-and-Egg Bootstrap',
          author: 'after Parker, Van Alstyne & Choudary',
          components: ['Seed supply before demand', 'Subsidise the harder side first', 'Piggyback on existing user base', 'Single-side standalone value'],
          rule: 'Solve the chicken-and-egg or neither side shows up. The first side you onboard must have standalone value until the second arrives.'
        },
        {
          name: 'Winner-Take-All vs Multi-Platform',
          author: 'after Farronato, Toffel & Zhu · HBS 621-016',
          components: ['Single-homing (users pick one platform)', 'Multi-homing (users join several)', 'Network effect strength and reach'],
          rule: 'Strong cross-side effects plus single-homing tilts toward winner-take-all; weak effects or easy multi-homing supports coexistence.'
        }
      ],
      apply: {
        title: 'When designing or stress-testing a platform.',
        steps: [
          { strong: 'Name the two sides and the cross-side dependency.', rest: 'What does side A need from side B, and vice versa? If the dependency is not mutual, it may not be a platform.' },
          { strong: 'Decide which side to subsidise first.', rest: 'Which side draws the other? That side is typically subsidised, sometimes to zero or below.' },
          { strong: 'Solve the chicken-and-egg explicitly.', rest: 'Name the tactic: seed supply, piggyback, or standalone value. Vague plans do not bootstrap.' },
          { strong: 'Test for single vs multi-homing.', rest: 'Will users pick one platform or many? Single-homing on both sides means winner-take-all dynamics.' },
          { strong: 'Identify the envelopment threat.', rest: 'Which larger platform could absorb your use case as a feature? That is often the most dangerous substitute.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Farronato, Toffel & Zhu · HBS Note 621-016',
        title: 'Digital Platforms: An Introduction.',
        prose: 'Farronato, Toffel and Zhu define the platform construct precisely: two or more interdependent user groups, cross-side network effects, and the three design problems — search and matching, price-setting, and trust. The note distinguishes platforms from supply-chain intermediaries and maps how fee structures (subscription vs commission) interact with disintermediation risk.',
        kicker: 'A platform without network effects is just a middleman. Network effects are the moat.'
      },
      eli5: {
        title: 'The market square.',
        body: [
          'Before supermarkets, a town had a market square. Farmers brought produce; buyers came to shop. The more farmers, the more buyers came. The more buyers, the more farmers bothered to set up stalls. The square did not sell anything — it provided the place where the loop could run.',
          'A platform is a digital market square. The owner sets the rules (who can sell, how disputes are resolved, what the stall fee is) and takes a cut of each transaction. The value is not in the owner\'s goods — it is in having enough farmers <em class="serif">and</em> buyers that both sides choose your square over the one across town.',
          'The hard part is always getting the first ten farmers before any buyers arrive. That is the chicken-and-egg problem. The solution is usually: give the square away to farmers until buyers show up, then charge buyers — or vice versa.'
        ]
      }
    },
    m07: {
      id: 'm07', number: '07', topic: 'Ecosystems',
      title: 'Ecosystem as Structure',
      hint: 'An ecosystem is the alignment of multilateral partners whose joint activity is required for a focal value proposition to materialize.',
      kicker: 'Adner · alignment structure · value proposition.',
      coreIdea: {
        text: 'An ecosystem is not a community of affiliated firms; it is the alignment structure of the multilateral partners whose interaction a focal value proposition requires. Strategy starts from the promised value, then maps the activities, actors, positions, and links needed to deliver it. Where partner alignment is intact, traditional strategy suffices. Where alignment must shift, the central question becomes who leads the realignment and how willing followers are secured.',
        attr: 'after Adner (2017)'
      },
      diagram: {
        type: 'flow',
        title: 'From value proposition to aligned ecosystem',
        intro: 'Five steps move a focal firm from a promised value to a working ecosystem. Each step exposes a different alignment risk: missing activities, unwilling actors, contested positions, broken links, or absent leadership.',
        steps: [
          { label: 'Define the value proposition', desc: 'State the benefit the end customer is promised. The proposition, not the product, sets the boundary of the relevant ecosystem.' },
          { label: 'Map the activities', desc: 'List the discrete actions required for the proposition to materialise. Co-innovation risk lives here: which activities are not yet ready?' },
          { label: 'Assign actors and positions', desc: 'Name who performs each activity and where they sit in the flow. Adoption-chain risk lives here: which actors must change behaviour for the chain to hold?' },
          { label: 'Specify the links', desc: 'Trace the transfers of material, information, money, and influence across positions, including those that bypass the focal firm.' },
          { label: 'Secure leadership and followership', desc: 'Identify who guides the realignment and who accepts the follower role. Without willing followership, structure collapses back to the legacy configuration.' }
        ]
      },
      frameworks: [
        {
          name: 'Ecosystem-as-Structure',
          author: 'Adner · Journal of Management 2017',
          components: ['Value proposition (the boundary-setter)', 'Activities', 'Actors', 'Positions', 'Links'],
          rule: 'Start with the value proposition and work backward to the alignment structure it requires; do not start with the partners.'
        },
        {
          name: 'Co-innovation and Adoption-Chain Risk',
          author: 'Adner',
          components: ['Co-innovation risk: partners\' innovations not yet ready', 'Adoption-chain risk: partners must change their own behaviour'],
          rule: 'Your ecosystem is only as fast as its slowest required alignment. Identify which partner is the bottleneck.'
        },
        {
          name: 'Ecosystem-as-Affiliation vs Ecosystem-as-Structure',
          author: 'Adner',
          components: ['Affiliation: community of associated actors around a platform', 'Structure: configuration of activities for a specific value proposition'],
          rule: 'Use structure thinking when alignment must shift; use affiliation thinking when you are counting partners.'
        }
      ],
      apply: {
        title: 'When designing or diagnosing a multi-partner value proposition.',
        steps: [
          { strong: 'Write the value proposition in one sentence.', rest: 'Be specific about the promised benefit to the end customer. This sentence sets the ecosystem boundary.' },
          { strong: 'List every activity the proposition requires.', rest: 'Include activities performed by partners, not just your own firm. Co-innovation risk lives here.' },
          { strong: 'Assign an actor to each activity.', rest: 'Name the specific firm or role. Adoption-chain risk lives here: who must change their behaviour?' },
          { strong: 'Draw the links.', rest: 'Which activities depend on which others? A broken link anywhere stops the proposition.' },
          { strong: 'Identify the least willing follower.', rest: 'That actor is your binding alignment constraint. Address them first, not last.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Adner · Journal of Management 2017',
        title: 'Ecosystem as Structure: An Actionable Construct for Strategy.',
        prose: 'Adner distinguishes ecosystem-as-affiliation (networks of associated actors) from ecosystem-as-structure (the activity alignment a specific value proposition requires). The ecosystem-as-structure view gives a vocabulary for diagnosing where alignment fails: missing activities, unwilling actors, unspecified positions, broken links, or absent leadership — each a different strategic problem.',
        kicker: 'You cannot fix an alignment problem by adding more partners. First, name what needs to be aligned.'
      },
      eli5: {
        title: 'The recipe that needs every ingredient.',
        body: [
          'A recipe promises a specific dish. To deliver it, every ingredient must be ready at the same time — flour, eggs, butter. The recipe is the value proposition. The ingredients are the partner activities. The kitchen is the alignment structure.',
          'If the egg supplier is six months away from being ready, the dish cannot be served — no matter how good the butter is. That is co-innovation risk: your proposition depends on a partner who has not finished their part yet.',
          'Most platform and ecosystem strategies fail not because the idea is wrong but because one ingredient is missing and nobody mapped the full recipe. Adner\'s framework forces you to draw the whole kitchen before you promise the dish.'
        ]
      }
    },
    m08: {
      id: 'm08', number: '08', topic: 'Make vs Buy',
      title: 'The Boundary of the Firm',
      hint: 'Pull an activity inside only when the market would punish you for the relationship-specific bets it requires.',
      kicker: 'Coase and Williamson · transaction costs, asset specificity, and the hold-up problem.',
      coreIdea: {
        text: 'Markets coordinate by price; firms coordinate by authority. Each has a cost. You should make rather than buy when transacting in the open market would be more expensive than running the activity yourself — typically because the activity demands relationship-specific investments, repeats often under uncertainty, and would expose you to hold-up by a thin set of counterparties. When those conditions are absent, the market is faster, cheaper and more disciplined than your own org chart.',
        attr: 'after Coase (1937) and Williamson (1985)'
      },
      diagram: {
        type: 'decision-tree',
        title: 'Where to draw the firm\'s boundary',
        intro: 'Walk a candidate activity down the tree. The price mechanism is the default — only step inside the firm when the transaction itself would misbehave on the open market.',
        nodes: [
          { id: 'n1', question: 'Is the activity strategically core — a source of differentiation, learning or rents?', branches: [{ label: 'No — it is generic, commoditised input', leadsTo: 'Buy. Use the market; let suppliers compete on price and innovation.' }, { label: 'Yes — it shapes how you compete', leadsTo: 'n2' }] },
          { id: 'n2', question: 'Does it require relationship-specific assets — dedicated capacity, custom tooling, co-located plant, proprietary know-how?', branches: [{ label: 'Low specificity — assets are redeployable', leadsTo: 'Buy with a standard contract. Switching is cheap; the market disciplines the supplier.' }, { label: 'High specificity — once built, the asset only has value in this relationship', leadsTo: 'n3' }] },
          { id: 'n3', question: 'Is the supplier market thin and the future hard to specify — few credible counterparties, high uncertainty, frequent re-negotiation?', branches: [{ label: 'Thick market, low uncertainty', leadsTo: 'Buy with safeguards. Long-term contract, dual sourcing, or reciprocal hostages.' }, { label: 'Thin market, high uncertainty — hold-up risk is real', leadsTo: 'n4' }] },
          { id: 'n4', question: 'Can you absorb the activity without losing the market\'s scale, focus and incentive intensity?', branches: [{ label: 'No — internalising would dull incentives or sub-scale the activity', leadsTo: 'Ally. Joint venture, equity stake, or deep partnership — share the specific assets, share the risk.' }, { label: 'Yes — you can run it at scale and keep it sharp', leadsTo: 'Make. Bring it inside; coordinate by authority rather than by price.' }] }
        ]
      },
      frameworks: [
        {
          name: 'Transaction Cost Economics',
          author: 'Coase · 1937 / Williamson · 1985',
          components: ['Market coordination (price)', 'Firm coordination (authority)', 'Transaction costs of each route'],
          rule: 'Use the market by default. Bring an activity inside only when transacting on the open market costs more than managing it yourself.'
        },
        {
          name: 'Asset Specificity and Hold-Up',
          author: 'Williamson',
          components: ['Relationship-specific investments', 'Hold-up: the party who invested loses bargaining power after contracting', 'Thin supplier markets amplify hold-up risk'],
          rule: 'The more relationship-specific the required investment, the stronger the case for internalisation.'
        },
        {
          name: 'Make / Buy / Ally Decision',
          author: 'after Williamson and Dyer, Kale & Singh',
          components: ['Make: authority, full control, dulled incentives', 'Buy: price, market discipline, hold-up risk', 'Ally: shared assets, shared risk, partial control'],
          rule: 'Ally when you need specificity but cannot bear full internalisation costs; make when you can scale and sharpen internally.'
        }
      ],
      apply: {
        title: 'For any activity you are considering internalising or outsourcing.',
        steps: [
          { strong: 'Ask: is this core to how we compete?', rest: 'Generic inputs belong in the market. Only activities that shape your competitive position warrant the make analysis.' },
          { strong: 'Measure asset specificity.', rest: 'If the supplier builds something only valuable in this relationship, hold-up risk is real.' },
          { strong: 'Count credible counterparties.', rest: 'A thin market with one or two viable suppliers dramatically raises transaction costs.' },
          { strong: 'Estimate the cost of bringing it inside.', rest: 'Will internalisation dull incentives, sub-scale the activity, or distract management? The firm is not free.' },
          { strong: 'Consider the alliance option.', rest: 'When both make and buy are costly, a joint venture or deep partnership can share the specific investment without full integration.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Coase · Economica 1937',
        title: 'The Nature of the Firm.',
        prose: 'Coase\'s 1937 paper asks a deceptively simple question: if markets are efficient, why do firms exist at all? His answer is that using the price mechanism itself has costs — discovering prices, negotiating contracts, bearing uncertainty. When those costs exceed the cost of internal coordination, the firm expands its boundary. This insight remains the foundation of every make-or-buy analysis.',
        kicker: 'Markets are not free. Neither are firms. The boundary goes where the costs cross.'
      },
      eli5: {
        title: 'Why you hire a plumber instead of owning a plumbing company.',
        body: [
          'You need your pipes fixed. You could hire a plumber (market) or start a plumbing subsidiary (firm). The market is cheaper for a one-off job because the plumber faces competition and you pay only for what you use.',
          'Now imagine you need a specialised pipe installed that only works in your factory, and the installation requires a dedicated team to be on-site for three years. The plumber now has you over a barrel once the work starts — that is hold-up. You might consider hiring that team outright.',
          'Coase said: firms exist because the market sometimes misbehaves. The boundary between firm and market goes exactly where the misbehaviour starts.'
        ]
      }
    },
    m09: {
      id: 'm09', number: '09', topic: 'Alliances',
      title: 'Ally, Acquire, or Build',
      hint: 'Before signing a deal, ask which mode of growth the resources, the market, and your own competence actually call for.',
      kicker: 'Dyer, Kale & Singh · resources, market, competence · choose the mode before the partner.',
      coreIdea: {
        text: 'Acquisitions, alliances, and internal development are alternatives, not parallel paths. The right choice falls out of three questions: what kind of resources and synergies are needed, how uncertain and contested is the market, and which mode the firm is competent to execute. Hard, redundant resources and reciprocal synergies argue for acquisition; soft resources, sequential synergies, and high uncertainty argue for an equity alliance; modular synergies with clear interfaces argue for a contractual alliance. Defaulting to whichever mode the organisation knows how to do is the most common failure.',
        attr: 'after Dyer, Kale & Singh'
      },
      diagram: {
        type: 'decision-tree',
        title: 'Choosing between acquisition, equity alliance, and non-equity alliance',
        intro: 'Walk the tree top-down. Each branch reflects one of the three factor sets: resources and synergies, market conditions, and your own collaboration competence. The label at the leaf is the mode the framework points to; treat it as a starting hypothesis, not a verdict.',
        nodes: [
          { id: 'root', question: 'What synergy must the combination create?', branches: [{ label: 'Reciprocal — deep, iterative joint work across the value chain', leadsTo: 'reciprocal' }, { label: 'Sequential — one partner hands off to the other in a defined order', leadsTo: 'sequential' }, { label: 'Modular — each side runs its own assets and pools the results', leadsTo: 'modular' }] },
          { id: 'reciprocal', question: 'Are the resources mostly hard assets with high redundancy?', branches: [{ label: 'Yes — plant, distribution, overlapping cost base', leadsTo: 'Acquisition. Full control lets you cut redundancy and lock in scale.' }, { label: 'No — value sits in people and tacit know-how', leadsTo: 'Equity alliance. Control without triggering the post-deal exodus of talent.' }] },
          { id: 'sequential', question: 'Are the synergy-generating resources mostly soft (people, know-how)?', branches: [{ label: 'Yes — talent, relationships, intellectual capital', leadsTo: 'Equity alliance. Align incentives, monitor performance, avoid the acquirer\'s curse.' }, { label: 'No — handoff runs on hard assets and documented process', leadsTo: 'competition' }] },
          { id: 'modular', question: 'Is market and technical uncertainty manageable, with clean interfaces?', branches: [{ label: 'Yes — defined scope, contractible deliverables', leadsTo: 'Non-equity alliance. A contract is enough; equity adds cost without value.' }, { label: 'No — outcomes and customer adoption are unclear', leadsTo: 'Equity alliance as stepping stone. Small stake now, option to acquire later.' }] },
          { id: 'competition', question: 'Is competition for the partner intense?', branches: [{ label: 'Yes — rivals are circling and the asset is scarce', leadsTo: 'Acquisition. Pre-empt to secure access; accept the integration cost.' }, { label: 'No — time is on your side', leadsTo: 'Non-equity alliance. Stay flexible; escalate stake only as evidence accumulates.' }] }
        ]
      },
      frameworks: [
        {
          name: 'When to Ally vs Acquire',
          author: 'Dyer, Kale & Singh · HBR 2004',
          components: ['Resources and synergy type (modular, sequential, reciprocal)', 'Market conditions (uncertainty, competition for partner)', 'Collaboration competence (which mode can you execute?)'],
          rule: 'Choose the mode before choosing the partner. The mode should follow from resources, market, and competence — not from habit.'
        },
        {
          name: 'Three Synergy Types',
          author: 'Dyer, Kale & Singh',
          components: ['Modular: pool independently managed results', 'Sequential: one party hands off to the other', 'Reciprocal: deep iterative joint work'],
          rule: 'Modular synergies argue for non-equity alliances; reciprocal synergies with hard assets argue for acquisition.'
        },
        {
          name: 'Collaboration Competence Trap',
          author: 'Dyer, Kale & Singh',
          components: ['Organisational bias toward familiar mode', 'M&A group vs business development silos', 'Post-deal execution capability'],
          rule: 'The most common failure is choosing the mode you know how to execute rather than the mode the situation demands.'
        }
      ],
      apply: {
        title: 'Before committing to any growth deal.',
        steps: [
          { strong: 'Name the synergy type first.', rest: 'Modular, sequential, or reciprocal? The answer shapes everything that follows.' },
          { strong: 'Classify the target resources as hard or soft.', rest: 'Hard assets (plant, distribution) tolerate acquisition. Soft assets (talent, culture) often flee after acquisition.' },
          { strong: 'Assess market uncertainty and competition for the partner.', rest: 'High uncertainty favors alliance; scarce, contested partner favors acquisition to pre-empt.' },
          { strong: 'Check your own execution capability honestly.', rest: 'Which mode has your firm done well before? Organisational bias toward a familiar mode is a real risk.' },
          { strong: 'Test the alliance-as-option framing.', rest: 'If uncertain, a small equity stake or non-equity alliance preserves the option to acquire later at lower cost.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Dyer, Kale & Singh · HBR July-August 2004',
        title: 'When to Ally and When to Acquire.',
        prose: 'Dyer, Kale and Singh tracked 1,592 alliances and thousands of acquisitions and found that most companies choose a mode out of habit rather than analysis: acquirers keep acquiring, alliance-builders keep allying. Their framework — resources and synergies, market conditions, collaboration competence — gives a systematic basis for choosing before the deal frenzy begins. Firms that choose correctly create significantly more shareholder value than those that default to their preferred mode.',
        kicker: 'Choose the mode before you choose the partner. In that order, not the reverse.'
      },
      eli5: {
        title: 'Buying the kitchen versus hiring the chef.',
        body: [
          'You want to serve a new dish. You could buy the restaurant next door (acquisition), hire their chef on contract (alliance), or train your own chef over time (build). All three get you to the dish eventually — but at very different costs, speeds, and risks.',
          'If the dish requires a fully equipped kitchen you do not have, buy it. If the dish requires a specific chef\'s knowledge that would walk out the door the moment you take over, make a deal instead. If you just need the recipe and can train someone, build it yourself.',
          'The mistake most companies make is choosing based on which option their finance team or business development team knows how to do — not which option the situation actually calls for.'
        ]
      }
    }
  }
};

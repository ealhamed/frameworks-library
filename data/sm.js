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
      }
    },
    m04: {
      id: 'm04', number: '04', topic: 'Competitive Dynamics',
      title: 'Commitment & Capacity Games',
      hint: 'A move is strategic when it is hard to reverse and changes what your rival will rationally do next.',
      kicker: 'Ghemawat · commitment · capacity pre-emption · move and counter-move.',
      coreIdea: {
        text: 'Competition between a few large rivals is a sequence of moves. The moves that matter are commitments — investments in capacity, technology or position that are costly to undo and visible to rivals. A credible commitment shifts the game by changing your rival\'s best response: it can deter entry, pre-empt capacity, or force accommodation. Read every major move by asking what it locks in, what it signals, and how the rival will rationally counter.',
        attr: 'after Ghemawat (commitment) and Brandenburger & Nalebuff (game-theoretic strategy)'
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
      }
    },
    m06: {
      id: 'm06', number: '06', topic: 'Platform Strategy',
      title: 'The Two-Sided Platform',
      hint: 'A platform is a market between two user groups linked by cross-side network effects, not a product sold to one.',
      kicker: 'Rochet & Tirole / Eisenmann / Parker & Van Alstyne · two-sided markets, cross-side network effects, chicken-and-egg.',
      coreIdea: {
        text: 'A platform creates value by enabling two distinct user groups to transact, and each side becomes more attractive as the other grows. Because the demand on one side depends on participation on the other, the strategic problem is not setting one price but choosing a price structure: subsidise the side that draws the other and charge the side that values it most. Get both sides on board, or neither shows up. Network effects, not features, are the moat.',
        attr: 'after Rochet & Tirole and Eisenmann'
      },
      diagram: {
        type: 'flow',
        title: 'Cross-side dynamics on a two-sided platform',
        intro: 'The platform sits between two interdependent user groups. Each side joins because the other is there — and the loop, once ignited, runs on its own.',
        steps: [
          { label: 'Producer side', desc: 'Sellers, developers, hosts, or content makers. Join when buyer demand is large enough to justify the effort. Pricing lever: take rate, listing fees, or subsidy in early stages.' },
          { label: 'Platform', desc: 'Sets rules for search and matching, prices and payment, and trust. Solves the chicken-and-egg by subsidising one side, seeding supply, or piggybacking on an existing user base. Captures value via the less price-sensitive side.' },
          { label: 'Consumer side', desc: 'Buyers, players, riders, readers. Join when producer variety and quality cross a threshold. Their participation is what producers came for — closing the loop.' },
          { label: 'Cross-side feedback', desc: 'More producers raise consumer value, which attracts more consumers, which attracts more producers. Strong feedback plus single-homing tilts the market toward winner-take-all; weak feedback or easy multi-homing supports several platforms.' }
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
      }
    },
    m08: {
      id: 'm08', number: '08', topic: 'Make vs Buy',
      title: 'The Boundary of the Firm',
      hint: 'Pull an activity inside only when the market would punish you for the relationship-specific bets it requires.',
      kicker: 'Coase and Williamson · transaction costs, asset specificity, and the hold-up problem.',
      coreIdea: {
        text: 'Markets coordinate by price; firms coordinate by authority. Each has a cost. You should make rather than buy when transacting in the open market would be more expensive than running the activity yourself — typically because the activity demands relationship-specific investments, repeats often under uncertainty, and would expose you to hold-up by a thin set of counterparties. When those conditions are absent, the market is faster, cheaper and more disciplined than your own org chart.',
        attr: 'after Coase (1937) and Williamson'
      },
      diagram: {
        type: 'decision-tree',
        title: 'Where to draw the firm’s boundary',
        intro: 'Walk a candidate activity down the tree. The price mechanism is the default — only step inside the firm when the transaction itself would misbehave on the open market.',
        nodes: [
          { id: 'n1', question: 'Is the activity strategically core — a source of differentiation, learning or rents?', branches: [{ label: 'No — it is generic, commoditised input', leadsTo: 'Buy. Use the market; let suppliers compete on price and innovation.' }, { label: 'Yes — it shapes how you compete', leadsTo: 'n2' }] },
          { id: 'n2', question: 'Does it require relationship-specific assets — dedicated capacity, custom tooling, co-located plant, proprietary know-how?', branches: [{ label: 'Low specificity — assets are redeployable', leadsTo: 'Buy with a standard contract. Switching is cheap; the market disciplines the supplier.' }, { label: 'High specificity — once built, the asset only has value in this relationship', leadsTo: 'n3' }] },
          { id: 'n3', question: 'Is the supplier market thin and the future hard to specify — few credible counterparties, high uncertainty, frequent re-negotiation?', branches: [{ label: 'Thick market, low uncertainty', leadsTo: 'Buy with safeguards. Long-term contract, dual sourcing, or reciprocal hostages.' }, { label: 'Thin market, high uncertainty — hold-up risk is real', leadsTo: 'n4' }] },
          { id: 'n4', question: 'Can you absorb the activity without losing the market’s scale, focus and incentive intensity?', branches: [{ label: 'No — internalising would dull incentives or sub-scale the activity', leadsTo: 'Ally. Joint venture, equity stake, or deep partnership — share the specific assets, share the risk.' }, { label: 'Yes — you can run it at scale and keep it sharp', leadsTo: 'Make. Bring it inside; coordinate by authority rather than by price.' }] }
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
      }
    }
  }
};

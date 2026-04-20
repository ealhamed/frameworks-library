// ME · CD51 · Marketplace Environment · Prof David P. Myatt
module.exports = {
  code: 'me',
  courseCode: 'CD51',
  courseName: 'Marketplace Environment',
  courseShort: 'ME',
  courseDisplayName: 'Marketplace Environment',
  courseAccent: '--c-me',
  professor: 'Prof David P. Myatt',
  frameworksTag: 'Mechanisms worth naming',
  frameworksHeading: 'The levers in the machine.',
  school: 'London Business School',
  cohort: 'EMBA Dubai 2027',
  arc: {
    tagline: 'Supply. Demand. Power.',
    pullquote: 'First read the market mechanism, then trace the shocks, then locate where the power sits — and ask whether it belongs there.',
    attr: 'the course, in one line',
    blocks: [
      { label: 'I · The Market Mechanism', modules: ['m01', 'm02', 'm03'] },
      { label: 'II · Power, Strategy & Rents', modules: ['m04', 'm05', 'm06'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Orientation · Gains from Trade',
      title: 'Why Trade Happens',
      hint: 'Prices are not imposed. They emerge from private valuations and costs.',
      kicker: 'Myatt · the most important market mechanism is the one you already live inside.',
      coreIdea: {
        text: 'A trade happens whenever a buyer\'s valuation exceeds a seller\'s cost and they can agree on a price between the two. Every question in the course — market power, elasticity, regulation — rests on this one mechanism. Understand it and you understand why markets exist; miss it and you will always be shouting at prices.',
        attr: 'after Myatt'
      },
      diagram: {
        type: 'network',
        title: 'Broker-mediated trade.',
        intro: 'Buyers and sellers with private information. The broker matches them.',
        center: 'broker',
        satellites: [
          { label: 'Buyer A' },
          { label: 'Seller A' },
          { label: 'Buyer B' },
          { label: 'Seller B' }
        ]
      },
      frameworks: [
        { name: 'Price-Mediated Exchange', author: 'Myatt', components: ['buyer valuation', 'seller cost', 'negotiated price', 'gain from trade'], rule: 'Trade occurs when V > C. Surplus = V − C, split between parties.' },
        { name: 'Information Frictions', author: 'Myatt', components: ['private information', 'search cost', 'trust'], rule: 'Hidden information narrows the set of trades that happen. Brokers exist to fix that.' }
      ],
      apply: {
        title: 'Any real-world deal you are running.',
        steps: [
          { strong: 'State the buyer\'s valuation.', rest: 'What would they pay at most?' },
          { strong: 'State your cost.', rest: 'What is the lowest you would accept?' },
          { strong: 'Locate the price.', rest: 'Somewhere between the two. Bargaining power decides where.' }
        ]
      },
      eli5: {
        title: 'You and the coffee cart.',
        body: [
          'You\'d pay up to £8 for a coffee. It costs the cart £4 to make. A deal at £6 is £2 surplus for each of you. If the cart knew your £8, they\'d push to £7.99. If you knew their £4, you\'d push to £4.01. Markets without information asymmetries are knife-fights; real markets are slightly dull and that\'s what lets trade happen.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Production Choices in Frictionless Marketplaces · Myatt & Galeotti',
        title: 'What a frictionless market looks like.',
        prose: 'No real market is frictionless — but every real market gets read against one that is. That is the whole point of the benchmark: it tells you where the friction sits, and how much of your margin lives there. Supply, demand and equilibrium prices all start from this reference, then deform.',
        kicker: 'Start with how a price emerges. Everything else is perturbation.'
      }
    },

    m02: {
      id: 'm02', number: '02', topic: 'Foundations of Supply & Demand',
      title: 'Supply, Demand & the Cost Taxonomy',
      hint: 'Fixed, variable, marginal, sunk. Only one of these is relevant to supply decisions.',
      kicker: 'Marginal cost is the supply curve. Demand is the distribution of willingness-to-pay.',
      coreIdea: {
        text: 'A firm supplies where price meets marginal cost. The market supply curve is the aggregated marginal costs of all firms, sorted lowest to highest. The demand curve is the distribution of buyer willingness-to-pay, also sorted. Where they cross is the equilibrium — the price at which every mutually beneficial trade happens, and no more.',
        attr: 'after Myatt'
      },
      diagram: {
        type: 'curve-invertedU',
        title: 'Supply meets demand.',
        intro: 'Downward demand, upward supply, intersection at equilibrium price and quantity.',
        xAxis: 'quantity',
        yAxis: 'price',
        peakLabel: 'equilibrium'
      },
      frameworks: [
        { name: 'Cost Taxonomy', author: 'Myatt', components: ['Fixed', 'Variable', 'Marginal', 'Sunk'], rule: 'Short-run: produce if P ≥ AVC. Long-run: enter if P ≥ AC. Always supply where P = MC.' },
        { name: 'Demand Curve', author: 'Myatt', components: ['distribution of valuations', 'choke price', 'market size'], rule: 'Quantity demanded at price P = count of buyers with valuation ≥ P.' },
        { name: 'Perfect Competition', author: 'Classical', components: ['many small firms', 'homogeneous product', 'free entry'], rule: 'In equilibrium, P = MC. Consumer + producer surplus is maximised.' }
      ],
      apply: {
        title: 'Looking at any new market opportunity.',
        steps: [
          { strong: 'Sketch the supply curve.', rest: 'Who can supply, at what marginal cost?' },
          { strong: 'Sketch the demand curve.', rest: 'Who values this, at what price?' },
          { strong: 'Find the intersection.', rest: 'That is the price you should expect, absent market power.' }
        ]
      },
      eli5: {
        title: 'Concert tickets.',
        body: [
          'The band can play one show. 100 fans want tickets: 10 would pay £100, 20 would pay £50, 30 would pay £30, 40 would pay £10. The arena has 50 seats.',
          'The clearing price is £30 — the willingness-to-pay of the 50th fan. Everyone above that gets surplus; the band captures revenue; nobody below pays.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Myatt & Galeotti',
        title: 'Production choices in frictionless marketplaces.',
        prose: 'The cost taxonomy — fixed, variable, marginal, sunk — is the single framework that makes all supply decisions tractable. The common management mistake is to use fixed or sunk costs to justify staying in a market where marginal cost is above price. That is always wrong.',
        kicker: 'Supply where P = MC. Ignore sunk costs.'
      }
    },

    m03: {
      id: 'm03', number: '03', topic: 'Shocks & Elasticity',
      title: 'When Something Moves',
      hint: 'Elasticity decides whether a shock shows up as price or as quantity.',
      kicker: 'Every intervention has a deadweight loss — know who bears it.',
      coreIdea: {
        text: 'Markets move when supply or demand shifts. The magnitude of the price and quantity response depends on elasticity — how sensitive each side is. Inelastic markets pass shocks into price; elastic markets pass them into quantity. Government interventions (tax, subsidy, tariff) create deadweight loss, and the incidence of that loss splits based on the same elasticity.',
        attr: 'after Myatt & Galeotti'
      },
      diagram: {
        type: 'curve-s',
        title: 'The shock transmission.',
        intro: 'A supply or demand shift moves the equilibrium. How much of the move is price vs quantity depends on the slopes.',
        xLabels: { left: 'quantity', right: 'quantity' },
        yLabel: 'price'
      },
      frameworks: [
        { name: 'Shock Propagation', author: 'Galeotti', components: ['Supply shocks (cost, tech, regulation)', 'Demand shocks (income, preferences)'], rule: 'Supply ↑ → price ↓, quantity ↑. Demand ↑ → both rise.' },
        { name: 'Price Elasticity', author: 'Mankiw-Taylor', components: ['E = %ΔQ / %ΔP', 'elastic |E| > 1', 'inelastic |E| < 1'], rule: 'Markup rule: (P − MC) / P = 1 / |E|.' },
        { name: 'Government Interventions', author: 'Myatt', components: ['taxes', 'subsidies', 'price controls', 'tariffs'], rule: 'Any price away from equilibrium creates deadweight loss. Incidence splits by elasticity.' },
        { name: 'Substitutes & Complements', author: 'Galeotti', components: ['cross-price elasticity'], rule: 'Shocks ripple into related markets. Substitutes gain; complements lose.' }
      ],
      apply: {
        title: 'When a shock hits your industry.',
        steps: [
          { strong: 'Supply or demand shock?', rest: 'Which curve moved?' },
          { strong: 'How elastic is each side?', rest: 'Inelastic demand + inelastic supply = big price move, small quantity move.' },
          { strong: 'Who bears the incidence?', rest: 'The more inelastic side absorbs more of the burden.' }
        ]
      },
      eli5: {
        title: 'Bad weather destroys the wheat.',
        body: [
          'Supply falls. Bread prices rise. Because people cannot easily stop eating bread (inelastic demand), most of the shock shows up as price — not as quantity. Bread is expensive for everyone.',
          'If instead it was restaurant meals, people would just cook at home (elastic demand). Prices barely rise; volume collapses.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Supply and Demand Shocks · Galeotti',
        title: 'Elasticity determines transmission.',
        prose: 'Elastic markets adjust quantities; inelastic markets adjust prices. A manager\'s job during a shock is to know which side of the market is more elastic — because that is who is about to carry the cost.',
        kicker: 'Who moves first in the face of a shock? Whoever can.'
      }
    },

    m04: {
      id: 'm04', number: '04', topic: 'Exploiting Market Power',
      title: 'The 1/2 Rule & Cournot',
      hint: 'A monopolist sells half the competitive quantity at twice the margin.',
      kicker: 'Myatt · a handful of formulas cover most of real-world pricing decisions.',
      coreIdea: {
        text: 'When a firm has market power it is a price-maker, not a price-taker. Optimal restriction of output raises margin per unit but loses volume — the profit-maximising balance is surprisingly symmetric for linear demand: produce half the competitive output, at a price halfway between marginal cost and the choke price, capturing half the maximum surplus. Cournot extends the result to N firms.',
        attr: 'after Myatt'
      },
      diagram: {
        type: '2x2',
        title: 'Monopoly pricing.',
        intro: 'Compare competitive, monopoly and socially optimal outcomes.',
        xAxis: { label: 'quantity', lo: 'Q*/2', hi: 'Q*' },
        yAxis: { label: 'price', lo: 'MC', hi: 'P*' },
        quadrants: [
          { pos: 'tl', label: 'Consumer surplus' },
          { pos: 'tr', label: 'Deadweight loss', highlight: true },
          { pos: 'bl', label: 'Monopoly profit' },
          { pos: 'br', label: 'Lost output' }
        ]
      },
      frameworks: [
        { name: 'Monopoly Rules of Thumb', author: 'Myatt', components: ['Q* = Q_max / 2', 'P* = (P_max + MC) / 2', 'Profit = S_max / 2', 'DWL = S_max / 4'], rule: 'For linear demand, the optimum is symmetric. Half the quantity, half the surplus.' },
        { name: 'Markup Rule', author: 'Myatt', components: ['(P − MC) / P = 1 / |E|'], rule: 'Less elastic demand = higher markup. Always.' },
        { name: 'Cournot Oligopoly', author: 'Myatt', components: ['Q_i = Q_max / (N+1)', 'per-firm profit = (P_max − MC) × Q_max / (N+1)²'], rule: 'As N grows, price → MC and profits → 0.' },
        { name: 'Asymmetric Cournot', author: 'Myatt', components: ['lower cost → larger margin → bigger share'], rule: 'Cost advantages compound: market share ∝ profit margin.' }
      ],
      apply: {
        title: 'Setting a price with market power.',
        steps: [
          { strong: 'Estimate the choke price.', rest: 'Above what price would demand hit zero?' },
          { strong: 'Apply the midpoint rule.', rest: 'Price halfway between MC and choke price. Quantity half of Q_max.' },
          { strong: 'Test elasticity at that point.', rest: 'If demand is more elastic than you thought, the markup shrinks.' },
          { strong: 'Watch for entry.', rest: 'Profits attract rivals. Factor in your Cournot N.' }
        ]
      },
      eli5: {
        title: 'Coffee shop with no rivals.',
        body: [
          'You could charge £5 (few sales, huge margin) or £2 (many sales, thin margin). The magic of the monopoly midpoint rule is that the best answer is usually between — cut the quantity in half, double the margin, and you typically make more money than at either extreme.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Some Simple Rules of Thumb for Exploiting Market Power · Myatt',
        title: 'Optimal output balances volume and margin.',
        prose: 'The half-quantity / midpoint-price rule is not always exactly right — demand curves are rarely perfectly linear — but it is almost always more right than intuition. Use it as a sanity check on any pricing decision.',
        kicker: 'Half the quantity. Halfway the price. Watch the surplus split.'
      }
    },

    m05: {
      id: 'm05', number: '05', topic: 'Competition, Capabilities & Rents',
      title: 'The HHI, Economic Rents & Innovation',
      hint: 'Concentration is measurable. Rents are the return on defensible capability.',
      kicker: 'Economic rent = profit above the competitive level. All strategy is about building and defending one.',
      coreIdea: {
        text: 'In asymmetric markets, firms with lower costs (or better brands, or more users) earn economic rents — profits above the competitive level — and the Herfindahl-Hirschman Index measures how concentrated those rents are. Innovation by a leading firm amplifies the advantage; entry erodes it. Regulators pick a side.',
        attr: 'after Myatt, Porter & antitrust tradition'
      },
      diagram: {
        type: 'hexagon',
        title: 'Sources of defensible rent.',
        intro: 'Six common sources. Most durable advantage combines two or more.',
        centerLabel: { title: 'Rents', sub: 'profit above competitive' },
        vertices: [
          { label: 'Scale' },
          { label: 'Network' },
          { label: 'Brand' },
          { label: 'Switching cost' },
          { label: 'IP' },
          { label: 'Regulation' }
        ]
      },
      frameworks: [
        { name: 'Herfindahl-Hirschman Index', author: 'Antitrust theory', components: ['HHI = Σ(share)²', 'range 1/N to 1'], rule: 'FTC threshold: HHI > 2500 = highly concentrated.' },
        { name: 'Economic Rents', author: 'Porter / Myatt', components: ['profit above competitive level', 'source: cost, brand, network, IP'], rule: 'Sustainable rents require barriers to replication.' },
        { name: 'Strategic Effects of Innovation', author: 'Myatt', components: ['cost-reducing: winner takes more', 'quality-improving: demand shifts'], rule: 'Innovation by the leader widens the gap; by the follower, may not break even.' },
        { name: 'Entry & Industry Dynamics', author: 'Classical IO', components: ['expected profit vs entry cost', 'equilibrium N'], rule: 'Firms enter until marginal entrant earns zero economic profit.' },
        { name: 'Pass-Through', author: 'Myatt', components: ['% of cost change that reaches price'], rule: 'Low-elasticity demand → high pass-through (consumers pay).' }
      ],
      apply: {
        title: 'Assessing your own market position.',
        steps: [
          { strong: 'Compute the HHI.', rest: 'Sum the squared market shares. Where are you in the concentration scale?' },
          { strong: 'Name your source of rent.', rest: 'Scale, network, brand, IP, switching cost, regulation. At least one, ideally two.' },
          { strong: 'Model entry.', rest: 'At current profits, how close is the break-even entrant?' }
        ]
      },
      eli5: {
        title: 'The star player advantage.',
        body: [
          'Two tech companies. One has the best chip-design team (low cost), the other does not. In Cournot competition, the low-cost firm makes more units, at higher margin, and takes more of the market. Nothing unfair — just compounding capability advantage.',
          'Regulators watch the gap. If it grows too wide, they intervene; if innovation stays high, they often leave it alone.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Quantity Competition and Strategic Effects · Myatt',
        title: 'Capabilities create unequal profits.',
        prose: 'The firm with the cost advantage earns disproportionately more in Cournot — market share times margin — and that rent is what pays for the next round of innovation. This is why first-mover capability advantages tend to compound.',
        kicker: 'Capability → margin → share → capability. The virtuous loop of strategy.'
      }
    },

    m06: {
      id: 'm06', number: '06', topic: 'Market Structures & Regulation',
      title: 'Four Structures. One Spectrum.',
      hint: 'Perfect competition to monopoly — and the regulatory machine in between.',
      kicker: 'Network effects and winner-take-most markets are reshaping where the spectrum bends.',
      coreIdea: {
        text: 'Economists classify markets into four structures — perfect competition, monopolistic competition, oligopoly, monopoly — that span a spectrum from "no market power" to "total market power". Regulators pick where on the spectrum a market should sit, balancing static efficiency (low prices today) against dynamic efficiency (innovation tomorrow). Network effects push modern tech markets toward winner-take-most outcomes, which is why competition policy is currently being rewritten.',
        attr: 'after Industrial Organization canon'
      },
      diagram: {
        type: 'linear',
        title: 'The competition spectrum.',
        intro: 'As you move right, price falls and innovation incentives fall.',
        steps: ['Monopoly', 'Oligopoly', 'Monopolistic', 'Perfect']
      },
      frameworks: [
        { name: 'Four Market Structures', author: 'IO canon', components: ['Perfect Competition', 'Monopolistic Competition', 'Oligopoly', 'Monopoly'], rule: 'As N grows and barriers fall, price → MC and consumer surplus grows.' },
        { name: 'Efficiency Types', author: 'Microeconomic theory', components: ['Allocative: P = MC', 'Productive: at min AC'], rule: 'Perfect competition delivers both. Monopoly delivers neither.' },
        { name: 'Antitrust Policy', author: 'Legal framework', components: ['merger review', 'price-fixing', 'predatory pricing', 'exclusive dealing'], rule: 'High HHI = presumption of harm, rebuttable with efficiency evidence.' },
        { name: 'Network Effects', author: 'Modern tech economics', components: ['positive externality', 'tipping', 'lock-in'], rule: 'Network markets tip toward a single winner — unless interoperability is forced.' }
      ],
      apply: {
        title: 'Locating any market on the spectrum.',
        steps: [
          { strong: 'Count the firms.', rest: 'One, few, many, countless.' },
          { strong: 'Check product differentiation.', rest: 'Commodity or branded?' },
          { strong: 'Check entry barriers.', rest: 'Capital, regulation, network effects?' },
          { strong: 'Infer the margin.', rest: 'The further from perfect competition, the higher the sustainable margin.' }
        ]
      },
      eli5: {
        title: 'From farmers market to water company.',
        body: [
          'Farmers market: many sellers, identical produce, margins near zero. Cloud computing: three huge firms, massive scale economies, high margins. Water utility: one firm, price-regulated, monopoly profits managed by the regulator.',
          'Same product economics underneath — different market structures producing wildly different outcomes.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Myatt · Industrial Organization notes',
        title: 'Market structure and regulation.',
        prose: 'The regulator\'s question is rarely "is this a monopoly?" — it is "should we let this remain a monopoly?" The static-vs-dynamic efficiency trade-off is the core of every modern competition case, from pharma to platforms.',
        kicker: 'Consumer price vs innovation incentive — the regulator\'s trade.'
      }
    }
  }
};

// MF · CD61 · Managing the Firm · Nader Tavassoli
module.exports = {
  code: 'mf',
  courseCode: 'CD61',
  courseName: 'Managing the Firm',
  courseShort: 'MF',
  courseDisplayName: 'Managing the Firm',
  courseAccent: '--c-mf',
  professor: 'Nader Tavassoli',
  frameworksTag: 'Frameworks in this module',
  frameworksHeading: 'Named ideas to remember.',
  school: 'London Business School',
  cohort: 'EMBA Dubai 2027',
  arc: {
    tagline: 'One question. Ten modules.',
    pullquote: 'You think because you understand one you must also understand two, because one and one make two. But you forget that you must also understand and.',
    attr: 'Rumi, via the course welcome',
    blocks: [
      { label: 'I · Think in systems', modules: ['m01', 'm02'] },
      { label: 'II · The firm, whole', modules: ['m03', 'm04', 'm05', 'm06'] },
      { label: 'III · Money, digital, world', modules: ['m07', 'm08', 'm09'] },
      { label: 'IV · Heritage', modules: ['m10'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Systemic Challenges',
      title: 'Seeing the System',
      hint: 'Complex problems are not big tame problems — they have feedback loops, coupled constraints and conflicting stakeholders, and they punish linear fixes.',
      kicker: 'digital module · systems thinking · tame vs complex · journey maps and the challenge statement.',
      coreIdea: {
        text: 'Managers are trained to solve problems linearly: decompose, assign, fix. Systemic challenges refuse the treatment — causes are unknown, effects are delayed, stakeholders want different things, and yesterday\'s fix produces today\'s symptom. The escape is a pair of habits: systems thinking to see the loops and boundaries, and empathic, design-led inquiry to reframe the mess into a challenge worth solving.',
        attr: 'after Tavassoli'
      },
      diagram: {
        type: 'network',
        title: 'What makes a problem systemic.',
        intro: 'A complex challenge sits in a web, and each strand is a reason the obvious fix fails. If four or more of these apply, stop solving and start mapping.',
        center: 'CHALLENGE',
        satellites: [
          { label: 'LOOPS' },
          { label: 'DELAYS' },
          { label: 'STAKEHOLDERS' },
          { label: 'BOUNDARIES' },
          { label: 'THRESHOLDS' },
          { label: 'RESISTANCE' }
        ]
      },
      frameworks: [
        {
          name: 'Systems vs Linear Thinking',
          author: 'Tavassoli · CD61 Module 1',
          components: ['Feedback loops, not one-way causes', 'Delays between action and effect', 'System boundaries decide what you can see', 'Policy resistance: symptoms that keep returning'],
          rule: 'If the same problem keeps coming back after being "solved", the system is telling you your boundary was drawn too small.'
        },
        {
          name: 'Tame vs Complex Problems',
          author: 'CD61 Module 1, exercise 3',
          components: ['Unknown causes, uncertain outcomes', 'Cross-boundary work, coupled constraints', 'Conflicting goals, ambiguous decision rights', 'Nonlinear thresholds and feedback'],
          rule: 'A good course-project challenge ticks four or more of these. A problem that ticks none is tame — delegate it, don\'t redesign around it.'
        },
        {
          name: 'Journey Map & Challenge Statement',
          author: 'the 6i\'s: Intend',
          components: ['Zoom out: map the end-to-end journey', 'Zoom in: pick the moment-that-matters', 'Write the challenge before choosing solutions'],
          rule: 'Intend is the discipline of choosing which problem to solve. Most failed interventions solved the wrong, or merely the loudest, moment.'
        },
        {
          name: 'Empathic Inquiry',
          author: 'design thinking primer · Intuit',
          components: ['Empathy before analysis', 'Stakeholder and journey lenses', 'Human-centred reframing of the issue'],
          rule: 'The people inside the system already know where it hurts. Inquiry is cheaper than inference, and much cheaper than a wrong redesign.'
        }
      ],
      apply: {
        title: 'Opening a systemic challenge without shrinking it.',
        steps: [
          { strong: 'Score it against the checklist.', rest: 'Four or more complexity characteristics: treat as systemic. Fewer: solve it the ordinary way and move on.' },
          { strong: 'Draw the loops.', rest: 'Name the feedback loops and delays around the symptom. Ask what fix produced the current problem.' },
          { strong: 'Map the journey.', rest: 'Zoom out to the whole experience, then choose the one moment-that-matters. That moment is your beachhead.' },
          { strong: 'Write the challenge statement.', rest: 'One sentence, before any solution talk. If it names a solution, it is not a challenge statement.' },
          { strong: 'Check your decision rights.', rest: 'Pick a challenge where you hold or strongly influence the decisions — insight without authority becomes a memo.' }
        ]
      },
      eli5: {
        title: 'The traffic jam you cannot fix with one more lane.',
        body: [
          'A city widens a congested road. Two years later it is congested again — the wider road attracted more drivers. That is a system: the fix fed the problem, with a delay long enough that nobody connected the two.',
          'Companies are full of these. Sales discounts that train customers to wait for discounts. Hiring sprees that slow delivery because onboarding eats the seniors\' time. Each fix was sensible; each system pushed back.',
          'The course\'s first move is just learning to spot when you are in traffic-jam territory: loops, delays, many players with different goals. Then, instead of reaching for the obvious lane-widening, you map the journey and choose your moment carefully.'
        ]
      }
    },
    m02: {
      id: 'm02', number: '02', topic: 'Systemic Solutions',
      title: 'The 6i\'s',
      hint: 'A design process for going from messy insight to tested intervention — with named guards against averages, pet ideas and untested assumptions.',
      kicker: 'Intend to Implement · aggregation bias · "How might we" · experiments over opinions.',
      coreIdea: {
        text: 'The course\'s spine is a six-step design process: Intend the right problem, Inquire across stakeholders, Integrate insights without averaging them away, Ideate structured options, Investigate the riskiest assumptions, Implement with a plan. Each step exists because of a specific failure mode — the average customer who exists nowhere, the beloved idea nobody tested, the pilot that never scaled.',
        attr: 'after Tavassoli'
      },
      diagram: {
        type: 'linear',
        title: 'Six steps, one direction, many loops back.',
        intro: 'The sequence is real — you cannot ideate before integrating — but the process iterates: an investigation that kills an idea sends you back to the ideas pile, not to despair.',
        steps: ['Intend', 'Inquire', 'Integrate', 'Ideate', 'Investigate', 'Implement']
      },
      frameworks: [
        {
          name: 'The 6i\'s Process',
          author: 'Tavassoli',
          components: ['Intend: choose the problem', 'Inquire → Integrate: research to insight', 'Ideate → Investigate: options to evidence', 'Implement: business + implementation plan'],
          rule: 'The step managers skip is Investigate — going straight from a good idea to a rollout. The 6i\'s make de-risking a named, non-optional stage.'
        },
        {
          name: 'Aggregation Bias',
          author: 'CD61 Module 2 · beware of averages',
          components: ['Averaging across stakeholders erases the signal', 'Segments and outliers carry the insight', 'Divergent inquiry, then deliberate integration'],
          rule: 'The average of a hot shower and a cold one is comfortable. Design for named segments and moments, never for the mean respondent.'
        },
        {
          name: '"How Might We" & the Hypothesis Chain',
          author: 'CD61 Module 2, exercises 1-3',
          components: ['Insight → "How might we…?" opportunity statement', 'Solution brief per idea worth testing', '"We believe that…" testable impact hypothesis', 'Riskiest assumptions listed explicitly'],
          rule: 'Each rewrite tightens the same thought: from complaint to opportunity to bet. If it cannot be written as "We believe that…", it cannot be tested.'
        },
        {
          name: 'Experiments over Opinions',
          author: 'CD61 Module 2 · Osterwalder · Cable on safety',
          components: ['Data spots patterns; experiments call them out', 'Test high-impact, high-uncertainty assumptions first', 'Minimal viable experiments, sized to the decision', 'Psychological safety keeps learning honest'],
          rule: 'An experiment that cannot fail is theatre. Design the test around the assumption that would kill the idea, and protect the people who report bad news.'
        }
      ],
      apply: {
        title: 'Running one loop of the 6i\'s on a real challenge.',
        steps: [
          { strong: 'State what you intend.', rest: 'One challenge statement from module 1. Resist upgrading it to a solution.' },
          { strong: 'Inquire wide, integrate narrow.', rest: 'Talk to genuinely different stakeholders, then cluster insights without averaging them into mush.' },
          { strong: 'Reframe as "How might we…?"', rest: 'Write three versions at different altitudes. Pick the one that opens options rather than smuggling in an answer.' },
          { strong: 'Turn the best idea into a bet.', rest: '"We believe that [doing X] for [whom] will [impact], and we will know within [time] by [measure]."' },
          { strong: 'Test the killer assumption first.', rest: 'List assumptions, rank by impact × uncertainty, and design the smallest experiment that could change your mind.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Cable · Alive at Work, 2019',
        title: 'Why the experiments need safety to work.',
        prose: 'Tavassoli closes the digital modules with the human condition for all of this: experimentation is a learning behaviour, and people only learn out loud where it is safe to be wrong. Cable\'s neuroscience-flavoured argument gives the 6i\'s their cultural substrate — curiosity and safety are not perks, they are the operating conditions of learning-by-doing.',
        kicker: 'A team that cannot admit a failed test will simply stop running real tests.'
      },
      eli5: {
        title: 'From "someone should fix this" to a fair test.',
        body: [
          'Most workplace ideas travel a sad road: someone senior likes them, they get built, and a year later everyone quietly agrees it never worked. The 6i\'s are a longer road with better endings.',
          'First you choose the actual problem, and ask the people who live with it. Then, crucially, you do not average their answers — the finance team and the drivers want different things, and the insight lives in the difference.',
          'Then every idea has to pass the same gate: say it as "we believe that…", find the assumption most likely to kill it, and run the smallest honest test of that assumption. Ideas that survive get built. Ideas that die save you a year.'
        ]
      }
    },
    m03: {
      id: 'm03', number: '03', topic: 'Measuring Progress',
      title: 'What to Measure, What to Trade',
      hint: 'Bhutan prices tourism at high value, low volume — a state-level answer to the question every firm faces: which stakeholder trade-offs are you willing to make?',
      kicker: 'live session 1 · Bhutan tourism policy · stewardship vs extraction · short vs long term.',
      coreIdea: {
        text: 'Bhutan caps tourism not by fiat headcount but by price: a daily levy keeps volume low and value high, trading revenue today for heritage, environment and brand tomorrow. It is a measurement argument as much as a moral one — what you count (GDP, arrivals, quarterly profit) quietly decides what you optimise. Growth pursued through every stakeholder tension eventually meets one it cannot pay back.',
        attr: 'after the Bhutan pre-read'
      },
      diagram: {
        type: '2x2',
        title: 'The Bhutan choice.',
        intro: 'Volume and value per visitor are levers every business holds, not just kingdoms. Most competitors crowd into the high-volume cells; the deliberate cell is rarer and harder to copy.',
        xAxis: { label: 'Volume', lo: 'Low', hi: 'High' },
        yAxis: { label: 'Value per unit', lo: 'Low', hi: 'High' },
        quadrants: [
          { pos: 'tl', label: 'High value, low volume', highlight: true },
          { pos: 'tr', label: 'Premium at scale' },
          { pos: 'bl', label: 'Niche, starving' },
          { pos: 'br', label: 'Mass extraction' }
        ]
      },
      frameworks: [
        {
          name: 'High Value, Low Volume',
          author: 'Bhutan tourism policy',
          components: ['Price as the volume regulator', 'Externalities priced into the levy', 'Brand scarcity as compounding asset'],
          rule: 'Capping volume by price rather than quota keeps the customers you most want and makes restraint self-funding.'
        },
        {
          name: 'Stakeholder Trade-offs vs Transformation',
          author: 'Kaplan, The 360 Corporation',
          components: ['Name the tension honestly', 'Modes: ignore, trade off, innovate around', 'Sustainability as obligation AND advantage'],
          rule: 'Treating every stakeholder tension as a trade-off is lazy; treating none as one is dishonest. The skill is knowing which tensions innovation can dissolve.'
        },
        {
          name: 'Short-Term Profit vs Long-Term Performance',
          author: 'CD61 live session 1',
          components: ['What is measured gets optimised', 'Delayed costs hide in unmeasured stocks', 'Coyle: progress needs better counting'],
          rule: 'Before accepting a "profitable" strategy, ask which stock it is drawing down — trust, environment, staff, brand — and when the bill arrives.'
        },
        {
          name: 'Shadow Pricing',
          author: 'CD61 Module 3 handout',
          components: ['Marginal social value of a constraint or untraded good', 'Estimate it through stated preference, revealed preference, damage costs or experiments', 'Expect nonlinear values and trial-and-error calibration', 'Draw the boundary wide enough to expose the externality'],
          rule: 'Purpose decides what counts as progress; if something material carries no price or measure, the system will quietly value it at zero.'
        }
      ],
      apply: {
        title: 'Auditing what your growth is quietly spending.',
        steps: [
          { strong: 'List what you measure weekly.', rest: 'That list, not the mission statement, is your real strategy.' },
          { strong: 'Name the unmeasured stocks.', rest: 'Reputation, staff energy, customer trust, ecosystem health. Ask which are being drawn down to hit the measured numbers.' },
          { strong: 'Find your Bhutan lever.', rest: 'Is there a price, standard or cap that would trade volume for value your competitors cannot match?' },
          { strong: 'Sort your stakeholder tensions.', rest: 'Which are genuine trade-offs, and which could design dissolve? Only escalate the first kind.' }
        ]
      }
    },
    m04: {
      id: 'm04', number: '04', topic: 'The Corporation',
      title: 'The Corporation, Explained',
      hint: 'Five legal features turn a crowd of strangers into an immortal enterprise — and the same features fuel the shareholder-vs-stakeholder argument.',
      kicker: 'live session 2 · guilds to global giants · the double shield · primacy vs capitalism.',
      coreIdea: {
        text: 'The corporation is the most powerful tool ever invented for mobilising human effort at scale: a legal person that outlives its founders, pools strangers\' capital, and caps everyone\'s downside. Its five canonical features exist to balance investor protection with professional control — and because the privileges are granted by the state, the firm lives in permanent negotiation with society about what it owes in return.',
        attr: 'after Tavassoli, Background Note: The Corporation'
      },
      diagram: {
        type: 'pentagon',
        title: 'Five features, one machine.',
        intro: 'Remove any vertex and the machine degrades: no limited liability, no diversified investors; no transferability, no cheap capital; no separation, no professional scale.',
        vertices: [
          { label: 'Legal person', desc: 'a separate entity that outlives its owners' },
          { label: 'Double shield', desc: 'liability capped, assets locked' },
          { label: 'Transferable shares', desc: 'exit for investors, stability for the firm' },
          { label: 'Board control', desc: 'ownership separated from operations' },
          { label: 'Open system', desc: 'capital, labour, information in; value out' }
        ]
      },
      frameworks: [
        {
          name: 'Five Features of the Corporation',
          author: 'Tavassoli, Background Note',
          components: ['Separate legal personality, perpetual succession', 'Asset partitioning: the double shield', 'Transferable shares and market pricing', 'Board-centred governance, delegated management'],
          rule: 'Each feature solves a trust problem between strangers. Together they explain why corporations, not partnerships, built the modern economy.'
        },
        {
          name: 'The Double Shield',
          author: 'asset partitioning doctrine',
          components: ['Defensive: shareholders capped at their stake', 'Affirmative: firm shielded from shareholders\' creditors', 'Asset lock-in enables long-term contracting'],
          rule: 'Everyone knows limited liability; the underrated half is the reverse shield — the firm\'s assets are safe from its owners, which is what makes long-term promises credible.'
        },
        {
          name: 'Shareholder Primacy vs Stakeholder Capitalism',
          author: 'the governance debate',
          components: ['Primacy: one clear objective, accountable boards', 'Stakeholder view: licence to operate is negotiated', 'The firm as open system needs both lenses'],
          rule: 'The debate is really about time horizons: most "stakeholder" arguments are shareholder arguments with a longer clock.'
        },
        {
          name: 'Govern to the Widest Boundary',
          author: 'CD61 Module 4 handout',
          components: ['Legal: ownership, contracts and liability', 'Economic: suppliers, channels and capital', 'Social and political: affected communities and regulators', 'Reputational: what the firm is known and held responsible for'],
          rule: 'Outsourcing can move the legal boundary without moving the harm, purpose or reputation; the board and GM must govern to the widest boundary.'
        }
      ],
      apply: {
        title: 'Using corporate design as a management lens.',
        steps: [
          { strong: 'Ask what the structure protects.', rest: 'For any entity you deal with — JV, subsidiary, SPV — identify whose assets are shielded from whom. That is the deal\'s skeleton.' },
          { strong: 'Read governance as buffer design.', rest: 'The board exists to stand between investor whims and operational reality. Judge one by how well it buffers, both directions.' },
          { strong: 'Trace the licence to operate.', rest: 'List the privileges your firm enjoys and the public expectations attached. Gaps between the two are where regulation comes from.' },
          { strong: 'Restate stakeholder claims in time.', rest: 'Convert "we owe X to employees/communities" into horizon language — what happens to shareholder value in ten years if the claim is ignored?' }
        ]
      }
    },
    m05: {
      id: 'm05', number: '05', topic: 'Alignment',
      title: 'Business, Brand, Behaviour',
      hint: 'A simulation where the org chart meets the slogan: vision, values, job ads and brand promise either tell one story or leak value at every seam.',
      kicker: 'live session 3 · immersive simulation · culture shapes behaviour, behaviour shapes culture.',
      coreIdea: {
        text: 'Bring your firm\'s vision, purpose, values, a front-line job description and your brand promise — then compare them with your closest competitor\'s. The exercise bites because the documents rarely agree: the brand promises warmth while the job ad rewards throughput. Culture is what behaviour repeats, and behaviour follows what the artefacts actually incentivise, not what the poster says.',
        attr: 'after the CD61 session 3 brief'
      },
      diagram: {
        type: 'linear',
        title: 'The alignment chain.',
        intro: 'Value leaks at the seams: a vision that purpose does not serve, values the job ad ignores, a promise the front line is not staffed to keep. Walk the chain in order and mark every mismatch.',
        steps: ['Vision', 'Values', 'Roles', 'Promise']
      },
      frameworks: [
        {
          name: 'The Alignment Chain',
          author: 'CD61 live session 3',
          components: ['Vision and purpose: why we exist', 'Values: how we behave when it costs us', 'Job design: what we actually hire and reward for', 'Brand promise: what the customer was told'],
          rule: 'Audit with artefacts, not adjectives — the job ad and the slogan are evidence; the culture deck is aspiration.'
        },
        {
          name: 'Culture ⇄ Behaviour Loop',
          author: 'CD61 live session 3',
          components: ['Culture shapes behaviour through norms', 'Behaviour reshapes culture through repetition', 'Managerial style is the visible input'],
          rule: 'You cannot install a culture; you can only change the behaviours that are rewarded and let the loop do the rest.'
        },
        {
          name: 'Strategic Dashboard',
          author: 'Kaplan & Norton, via CD61 Module 5 handout',
          components: ['Financial outcomes', 'Customer objectives', 'Brand as the articulation of strategy', 'People and process measures that drive behaviour'],
          rule: 'The dashboard should expose a causal chain, not a pile of KPIs: people and processes enable the brand promise, which creates customer value and financial results.'
        }
      ],
      apply: {
        title: 'Running the artefact audit on your own firm.',
        steps: [
          { strong: 'Collect the five artefacts.', rest: 'Vision, purpose, values, one front-line job ad, the brand promise. Verbatim, not paraphrased.' },
          { strong: 'Do the same for your rival.', rest: 'The comparison exposes which of your words are category wallpaper and which are actually yours.' },
          { strong: 'Walk the chain for breaks.', rest: 'Does the job ad hire for the values? Could the person in that ad keep the promise? Mark every seam that leaks.' },
          { strong: 'Fix one artefact, not the poster.', rest: 'Change the job description or the incentive, then let repeated behaviour move the culture.' }
        ]
      }
    },
    m06: {
      id: 'm06', number: '06', topic: 'The General Manager',
      title: 'The Integrator\'s Job',
      hint: 'The GM\'s native territory is interdependence: four responsibilities, three operating-system levers, and the gap between strategy and execution.',
      kicker: 'live session 4 · Background Note: The General Manager · P&L with partial control.',
      coreIdea: {
        text: 'Specialisation makes the parts excellent and the whole expensive to coordinate — the general manager exists to manage that interdependence. The role converges on four responsibilities (performance, integration, adaptation, leadership) executed through three levers: what gets measured and believed, who decides what, and what gets rewarded. Systems thinking shows the GM what is going on; design thinking changes it.',
        attr: 'after Tavassoli, Background Note: The General Manager'
      },
      diagram: {
        type: 'network',
        title: 'One role, four pulls.',
        intro: 'The GM sits where the functions meet, holding responsibilities that pull against each other daily — this quarter\'s numbers against next year\'s capabilities, stability against adaptation.',
        center: 'GM',
        satellites: [
          { label: 'PERFORMANCE' },
          { label: 'INTEGRATION' },
          { label: 'ADAPTATION' },
          { label: 'LEADERSHIP' }
        ]
      },
      frameworks: [
        {
          name: 'Four GM Responsibilities',
          author: 'Tavassoli, Background Note',
          components: ['Performance: results now AND health later', 'Integration: reconcile goals across functions', 'Adaptation: shift the model without breaking execution', 'Leadership: credibility with every stakeholder'],
          rule: 'The job is defined by tension between the four — a GM optimising any single one is doing a functional job with a general title.'
        },
        {
          name: 'The GM\'s Operating-System Levers',
          author: 'Tavassoli, Background Note',
          components: ['Information flows: what is measured, surfaced, believed', 'Decision rights: who decides, with what inputs, when', 'Incentives & constraints: rewards and non-negotiables'],
          rule: 'GM performance shines or fails at these three levers — culture change, transformation and strategy all cash out as changes to them.'
        },
        {
          name: 'The Strategy-Execution Gap',
          author: 'CD61 live session 4',
          components: ['Strategy fails at interfaces, not in decks', 'Hand-offs and decision rights are where value leaks', 'Cross-functional cooperation is designed, not exhorted'],
          rule: 'When execution disappoints, look for an interface where two functions\' incentives disagree — the gap is almost never a motivation problem.'
        },
        {
          name: 'Gaining-Traction Cascade',
          author: 'CD61 Module 6 handout',
          components: ['Vision, purpose and strategy', 'Customer promise', 'Values, culture and signature behaviours', 'Hiring, development, systems, metrics and rewards'],
          rule: 'Use the customer journey as the cross-functional spine, then trace every promise downward until the operating system makes the required behaviour likely.'
        }
      ],
      apply: {
        title: 'Diagnosing a GM role — yours or one you aspire to.',
        steps: [
          { strong: 'Map authority against accountability.', rest: 'P&L responsibility without control of pricing, talent or capital is normal — name the gaps so you manage them deliberately.' },
          { strong: 'Audit the three levers.', rest: 'What is measured? Who really decides? What gets rewarded? Misalignment among these explains most "culture" complaints.' },
          { strong: 'Find the leaking interface.', rest: 'Pick the worst cross-functional friction and write down both sides\' incentives. The conflict is usually structural.' },
          { strong: 'Balance the two clocks.', rest: 'List what you did this month for current results and what for future capability. An empty second list is the classic GM failure.' }
        ]
      }
    },
    m07: {
      id: 'm07', number: '07', topic: 'Money',
      title: 'Money as a System',
      hint: 'From Mesopotamian ledgers to Rai stones to stablecoins: money is a coordination technology, and every innovation traded one risk for another.',
      kicker: 'live session 5 · Background Note: The Value of Money · cowrie to crypto · Rai stones exercise.',
      coreIdea: {
        text: 'Money is a system, not an object: a ledger of who owes what, made portable. It began as literal ledgers in Mesopotamia, hardened into coin, dissolved into bank entries, and is now re-becoming a ledger in digital form. Each step improved coordination and created a new failure mode — debasement, bank runs, cyber risk — because money\'s value rests on institutions and confidence, not on the token.',
        attr: 'after Tavassoli, Background Note: The Value of Money'
      },
      diagram: {
        type: 'linear',
        title: 'Five thousand years, one loop.',
        intro: 'The arc runs ledger to ledger: clay records of barley debts, stamped coins, paper claims on banks, and digital entries again. The technology changes; the trust problem is permanent.',
        steps: ['Ledger', 'Coin', 'Paper', 'Ledger']
      },
      frameworks: [
        {
          name: 'Four Functions of Money',
          author: 'monetary canon, via the Background Note',
          components: ['Medium of exchange', 'Unit of account', 'Store of value', 'Standard of deferred payment'],
          rule: 'Judge any monetary innovation — CBDC, stablecoin, loyalty point — against all four functions; most fail at least one quietly.'
        },
        {
          name: 'Money as Social Ledger',
          author: 'Rai stones · the group exercise',
          components: ['Value = community consensus on who owns what', 'The token can be immovable; the ledger moves', 'Trust and verification are the real infrastructure'],
          rule: 'Yap islanders traded ownership of stones too heavy to move — proof that money was always the ledger, never the object. Crypto rediscovered this, with electricity.'
        },
        {
          name: 'Innovation-Risk Exchange',
          author: 'Tavassoli, Background Note',
          components: ['Coinage: uniformity, then debasement', 'Bank money: elasticity, then runs', 'Digital money: efficiency, then systemic cyber risk'],
          rule: 'Every monetary upgrade solves a coordination constraint by creating a new fragility — ask what the new one is before adopting the upgrade.'
        },
        {
          name: 'Incentives Carry Meaning',
          author: 'CD61 Module 7 handout',
          components: ['Prices can reframe a moral relationship as a transaction', 'Goodhart\'s Law: a target can corrupt its measure', 'Balance goals that correct each other; separate goals that destroy each other', 'Adapt incentives to the culture and situation'],
          rule: 'Design the metric, structure and narrative together: people respond not only to the amount, but to what the incentive says the system values.'
        }
      ],
      apply: {
        title: 'Thinking about money flows like a systems manager.',
        steps: [
          { strong: 'Separate flow from stock.', rest: 'Income is a flow; wealth is a stock. Firms and households confuse them whenever a good year is spent as if permanent.' },
          { strong: 'Apply the four functions.', rest: 'For any new payment or store-of-value pitch, score it function by function against the boring bank account.' },
          { strong: 'Locate the ledger.', rest: 'Whoever maintains the ledger holds the power — banks, card networks, or a protocol. Know whose ledger your business sits on.' },
          { strong: 'Name the new fragility.', rest: 'Faster settlement, programmable payments, tokenised assets: each removes a friction that was also a shock absorber.' }
        ]
      }
    },
    m08: {
      id: 'm08', number: '08', topic: 'Digital Ecosystems',
      title: 'The Firm\'s New Boundary',
      hint: 'AIA\'s ALive platform manages customers, agents and partners in one digital ecosystem — transformation as systemic change, with data as the strategic asset.',
      kicker: 'live session 6 · AIA ALive case · ecosystems · dynamic supply-demand alignment.',
      coreIdea: {
        text: 'Digital transformation is not the IT project it is budgeted as; it is a change in where the firm ends. Platforms let a company orchestrate customers, agents and collaborators it does not employ, with data as the coordinating asset. The AIA case shows an insurer building an ecosystem beyond policies — and the management problem shifting from running functions to aligning supply and demand across a boundary that moves.',
        attr: 'after the AIA ALive case'
      },
      diagram: {
        type: 'network',
        title: 'The firm as orchestrator.',
        intro: 'In an ecosystem the centre does not own the nodes; it aligns them. The asset that does the aligning is data — who sees what, and who acts on it.',
        center: 'PLATFORM',
        satellites: [
          { label: 'CUSTOMERS' },
          { label: 'AGENTS' },
          { label: 'PARTNERS' },
          { label: 'DATA' },
          { label: 'SERVICES' }
        ]
      },
      frameworks: [
        {
          name: 'Transformation as Systemic Change',
          author: 'CD61 live session 6',
          components: ['Not a tool swap: incentives, roles and boundaries move', 'Legacy channel and platform coexist and conflict', 'Sequencing and coalition matter as much as tech'],
          rule: 'A digital initiative that changes no one\'s decision rights or incentives is an IT upgrade wearing transformation\'s badge.'
        },
        {
          name: 'Data as Strategic Asset',
          author: 'AIA ALive case',
          components: ['Proprietary behavioural data compounds', 'Value realised only when it changes decisions', 'Ecosystem partners trade access for data'],
          rule: 'Data earns the word "asset" only when a named decision improves because of it — otherwise it is cost with a roadmap.'
        },
        {
          name: 'Dynamic Supply-Demand Alignment',
          author: 'CD61 live session 6',
          components: ['Demand sensed in real time across the ecosystem', 'Supply flexes through partners, not just capacity', 'The platform captures value from the match'],
          rule: 'Ecosystems beat pipelines when matching, not making, is the scarce skill — the boundary of the firm moves to wherever the match is made.'
        },
        {
          name: 'Platform-Ecosystem Polymorphism',
          author: 'CD61 Module 8 handout',
          components: ['Integration binds parts through ownership', 'Platforms bind sides through network effects', 'Ecosystems bind partners through supermodular complementarities', 'Co-opetition separates joint value creation from competitive value capture'],
          rule: 'A firm can operate across all three forms; choose the governance mechanism that matches how value is actually created, rather than calling every digital boundary a platform.'
        }
      ],
      apply: {
        title: 'Assessing a digital initiative as a boundary decision.',
        steps: [
          { strong: 'Ask whose behaviour must change.', rest: 'List the roles — internal and external — whose daily decisions the initiative assumes will change, and what is in it for each.' },
          { strong: 'Trace the data loop.', rest: 'What is sensed, who sees it, which decision it feeds, and how the outcome flows back. A broken loop means no compounding.' },
          { strong: 'Check the channel conflict.', rest: 'AIA\'s agents were partners AND incumbents. Name who loses under your platform and how they will be carried or compensated.' },
          { strong: 'Decide where the firm now ends.', rest: 'Own, partner, or orchestrate — make the boundary choice explicitly instead of inheriting it from the org chart.' }
        ]
      }
    },
    m09: {
      id: 'm09', number: '09', topic: 'Global Growth',
      title: 'Is the World Your Oyster?',
      hint: 'M-KOPA sells solar power to off-grid customers on pay-as-you-go credit — a masterclass in scaling globally while localising ruthlessly.',
      kicker: 'live session 7 · M-KOPA case · leapfrog markets · scale vs localise · systemic risk.',
      coreIdea: {
        text: 'M-KOPA connected the world\'s poor to solar power by fusing three systems: mobile money for payments, IoT locks for credit enforcement, and doorstep distribution for trust. The case is the module\'s argument in miniature — global opportunity is real, but it is captured by firms that rebuild their model around local constraints rather than exporting a home-market formula, and every border adds systemic risks the spreadsheet does not show.',
        attr: 'after the M-KOPA case'
      },
      diagram: {
        type: '2x2',
        title: 'The globaliser\'s dilemma.',
        intro: 'Two pressures pull multinationals apart: global integration for scale, local responsiveness for fit. Where a business sits on this map should be a decision, not an accident of history.',
        xAxis: { label: 'Local responsiveness', lo: 'Standardised', hi: 'Localised' },
        yAxis: { label: 'Global integration', lo: 'Loose', hi: 'Tight' },
        quadrants: [
          { pos: 'tl', label: 'Global formula' },
          { pos: 'tr', label: 'Scale + fit', highlight: true },
          { pos: 'bl', label: 'Exporter' },
          { pos: 'br', label: 'Local federation' }
        ]
      },
      frameworks: [
        {
          name: 'Leapfrog Market Entry',
          author: 'M-KOPA case',
          components: ['Skip the missing infrastructure, don\'t wait for it', 'Bundle product with payment and trust systems', 'Unit economics built for tiny, frequent payments'],
          rule: 'M-KOPA\'s product is not a solar panel; it is a credit relationship the panel makes enforceable. In leapfrog markets the business model IS the innovation.'
        },
        {
          name: 'Scale vs Localise',
          author: 'CD61 live session 7',
          components: ['What must stay global: platform, capital, data', 'What must go local: distribution, pricing, trust', 'The seam between them is the operating model'],
          rule: 'Decide lever by lever, not company-wide — the firms that fail abroad standardised the wrong things, not too many things.'
        },
        {
          name: 'Systemic Risk Across Borders',
          author: 'CD61 live session 7',
          components: ['Currency, regulatory and political exposures couple', 'Local shocks propagate through global platforms', 'Geopolitics moves the boundary conditions'],
          rule: 'International risk is systemic, not additive: the dangerous scenario is never one country\'s problem but the correlation you imported with the platform.'
        },
        {
          name: 'Targeting for Value and Fit',
          author: 'CD61 Module 9 handout',
          components: ['Available value: potential and structural profitability', 'Risk and strategic option value', 'Ability to capture: transferable resources and business-model fit', 'Replicability of practices, complementors and firm-specific advantage'],
          rule: 'Enter where attractive value meets a model you can transfer; purpose guides the choice, but local stocks and flows decide whether you can capture it.'
        }
      ],
      apply: {
        title: 'Screening a market entry like a systems thinker.',
        steps: [
          { strong: 'Write the constraint map first.', rest: 'What is missing locally — credit, grid, logistics, trust? Each gap is a cost or a moat, depending on your model.' },
          { strong: 'Split the model at the seam.', rest: 'List what stays global and what goes local, lever by lever. Defend each choice, especially the standardised ones.' },
          { strong: 'Price the coupled risks.', rest: 'Currency, regulation, politics — ask which move together in a bad year, not which is individually likely.' },
          { strong: 'Pilot where the constraint bites hardest.', rest: 'A model that works in the hardest district usually travels; one proven in the easy capital city usually does not.' }
        ]
      }
    },
    m10: {
      id: 'm10', number: '10', topic: 'Heritage',
      title: 'Future from Heritage',
      hint: 'The closing session turns the lens around: what an organisation\'s past enables, what your own formative background built, and purpose as the through-line.',
      kicker: 'live session 8 · heritage as strategic asset · the personal professional brand.',
      coreIdea: {
        text: 'Heritage is the strategy asset most firms treat as decoration: the accumulated trust, stories and capabilities that competitors cannot buy. The same logic applies to careers — your formative background is a differentiator, not a bias to hide. The course closes by joining the two: purpose-driven leadership is heritage pointed at the future, for the firm and for you.',
        attr: 'after the CD61 closing session'
      },
      diagram: {
        type: 'linear',
        title: 'Heritage put to work.',
        intro: 'The move is the same at firm and personal scale: surface what the past built, keep what still serves, point it at a future worth reaching.',
        steps: ['Inherit', 'Select', 'Purpose', 'Act']
      },
      frameworks: [
        {
          name: 'Heritage as Strategic Asset',
          author: 'CD61 live session 8',
          components: ['Accumulated trust and story competitors cannot copy', 'Capabilities encoded in culture over decades', 'Risk: heritage as anchor instead of engine'],
          rule: 'Heritage compounds only when curated — kept alive where it differentiates, retired where it merely resists change.'
        },
        {
          name: 'The Personal Professional Brand',
          author: 'CD61 live session 8',
          components: ['Formative background as positioning, not baggage', 'Consistency between story, values and behaviour', 'Purpose as the through-line others can follow'],
          rule: 'The strongest professional brands are the least invented: they are a true origin story, edited for direction rather than image.'
        },
        {
          name: 'Brand DNA',
          author: 'CD61 Module 10 handout',
          components: ['Founder or founders', 'Place and era', 'The original act of creation', 'Shaping clients who helped define the brand'],
          rule: 'Distil the few inherited genes that form a coherent DNA, then connect them to a current customer truth so heritage becomes a source of purpose and innovation.'
        }
      ],
      apply: {
        title: 'Closing the course on yourself.',
        steps: [
          { strong: 'Write the firm\'s inheritance list.', rest: 'What do you own because of your history that a well-funded entrant could not buy? That is strategy raw material.' },
          { strong: 'Separate engine from anchor.', rest: 'For each inherited practice: does it still create value, or only comfort? Retire the anchors deliberately.' },
          { strong: 'Draft your own origin story.', rest: 'Three formative experiences, the capabilities they built, and the purpose they point to. This is the personal brand, honestly sourced.' },
          { strong: 'Point it at the course project.', rest: 'The systemic challenge you chose in module 1 should be one your heritage — firm\'s or yours — equips you to lead.' }
        ]
      }
    }
  }
};

// OM · CD59 · Operations Management · Kamalini Ramdas
module.exports = {
  code: 'om',
  courseCode: 'CD59',
  courseName: 'Operations Management',
  courseShort: 'OM',
  courseDisplayName: 'Operations Management',
  courseAccent: '--c-om',
  professor: 'Kamalini Ramdas',
  frameworksTag: 'Frameworks in this module',
  frameworksHeading: 'Named ideas to remember.',
  school: 'London Business School',
  cohort: 'EMBA Dubai 2027',
  arc: {
    tagline: 'One question. Five modules.',
    pullquote: 'See the firm as a process, find the bottleneck, and respect what variability does to everything downstream.',
    attr: 'the course, told in one line',
    blocks: [
      { label: 'I · The process view', modules: ['m01'] },
      { label: 'II · Capacity & queues', modules: ['m02', 'm03'] },
      { label: 'III · Supply chains', modules: ['m04'] },
      { label: 'IV · Quality', modules: ['m05'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Capacity',
      title: 'The Process View',
      hint: 'Operations translates the language of money into the language of making things — and every organisation is a network of processes with one slowest step.',
      kicker: 'digital module · process-flow diagrams · U = A/S · the four-step capacity analysis.',
      coreIdea: {
        text: 'Any organisation can be redrawn as inputs flowing through activities into outputs. Draw that picture honestly — including who waits, where — and capacity stops being a vague constraint: each stage has a measurable utilisation, the most loaded stage is the bottleneck, and improvement becomes arithmetic before it becomes opinion. Operations done well is a competitive weapon, not a cost centre.',
        attr: 'after Ramdas, A Note on Process Analysis'
      },
      diagram: {
        type: 'linear',
        title: 'Capacity analysis in four steps.',
        intro: 'Map the process as it is, compute each stage\'s utilisation against realistic processing rates, name the binding stage, then test what a change actually buys you. The order matters: no analysis before the diagram.',
        steps: ['Map', 'Utilise', 'Bottleneck', 'Impact']
      },
      frameworks: [
        {
          name: 'Process-Flow Diagram',
          author: 'Ramdas, A Note on Process Analysis',
          components: ['Inputs, activities, outputs', 'Sub-processes and hand-offs', 'Waiting points: what or who queues, where'],
          rule: 'You cannot fix a process you have not drawn. The waiting points you mark are usually where the money is.'
        },
        {
          name: 'Capacity Utilisation',
          author: 'CD59 Module 1',
          components: ['U = A / S per stage', 'A: arrival or demand rate', 'S: realistic maximum processing rate, not the brochure number'],
          rule: 'Define terms before computing — operations has no standardised vocabulary, and a "capacity" that ignores breaks, setups and defects flatters every stage.'
        },
        {
          name: 'Operations & Strategy',
          author: 'Porter, What is Strategy?, 1996',
          components: ['Operational effectiveness: moving toward the frontier', 'Strategic positioning: choosing a different point on it', 'Trade-offs make a position defensible'],
          rule: 'Best practice is necessary and copyable. A process configured around your chosen customer is much harder to copy.'
        },
        {
          name: 'The Focused Factory',
          author: 'Shouldice Hospital case',
          components: ['One procedure, engineered end to end', 'Patients as co-producers who walk to surgery', 'Capacity question: expand without breaking the culture'],
          rule: 'Shouldice wins by refusing variety: a process designed for one thing beats a general process at that thing on cost, quality AND experience.'
        }
      ],
      apply: {
        title: 'Turning your own operation into a diagram that earns its keep.',
        steps: [
          { strong: 'Pick a process you own.', rest: 'Inputs, activities, outputs — a page, not a manifesto. Rough is fine; honest is mandatory.' },
          { strong: 'Mark every waiting point.', rest: 'What sits idle, and who queues? Waiting is inventory wearing a disguise.' },
          { strong: 'Compute U = A/S per stage.', rest: 'Use realistic processing rates. The stage nearest 100% is your bottleneck, and it sets system capacity.' },
          { strong: 'Improve the bottleneck only.', rest: 'An hour saved anywhere else is a mirage. Re-check afterwards — the bottleneck moves.' },
          { strong: 'Ask what AI changes.', rest: 'New technology shifts S at some stages and demand A at others. Redo the arithmetic before believing any transformation slide.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Heskett & Hallowell · Shouldice Hospital Limited (Abridged)',
        title: 'The hospital that runs like a theatre.',
        prose: 'Shouldice does hernia repairs, only hernia repairs, at a fraction of typical cost with famously low recurrence and patients who reunite annually like alumni. The case is the course\'s opening argument: process design — not heroics — produces quality, and the capacity-expansion question at the end is the four-step analysis in miniature.',
        kicker: 'When the process is the product, expanding the process can break the product.'
      },
      eli5: {
        title: 'The kitchen you can finally see.',
        body: [
          'Imagine watching a restaurant kitchen from above. Orders come in, stations do their bit, food goes out. Somewhere there is one station where tickets pile up — everything the restaurant can sell in an hour is decided right there.',
          'Most organisations never look from above. They experience the pile-up as stress and call it a busy week. The process view is just the discipline of drawing the kitchen: every station, every queue, every hand-off.',
          'Once it is drawn, the fix is arithmetic. Count what arrives at each station, count what each station can really do, and the slowest ratio is the whole answer. Fix that one. Then look again, because the pile has moved.'
        ]
      }
    },
    m02: {
      id: 'm02', number: '02', topic: 'Managing Capacity',
      title: 'Little\'s Law & the Bottleneck',
      hint: 'One identity connects how many wait, how fast they arrive, and how long they stay — and the slowest stage decides what the whole system can do.',
      kicker: 'Ocean Cove case · I = R × T · capacity = min of the stages · KPIs meet strategy.',
      coreIdea: {
        text: 'A restaurant at lunch, a clinic, a visa office: each is a chain of stages, and the chain\'s capacity is the minimum of its stages\' capacities. Around that hard truth sits a soft one — the KPIs a firm tracks either serve its strategic position or quietly fight it. Little\'s Law ties the visible symptom (a crowd) to the operational causes (arrival rate, time in system) with no statistics required.',
        attr: 'after the CD59 Module 2 material'
      },
      diagram: {
        type: 'equation',
        title: 'Little\'s Law, the process physicist\'s identity.',
        intro: 'Inventory equals throughput times time-in-system. Twenty orders waiting at a kitchen that clears two a minute means a ten-minute wait — always, on average, regardless of the distribution. Know two, get the third.',
        lhs: 'I',
        rhs: 'R × T'
      },
      frameworks: [
        {
          name: 'Little\'s Law',
          author: 'Little, 1961',
          components: ['I: units in the system', 'R: throughput rate', 'T: time in system'],
          rule: 'An identity, not a model — it holds for any stable process, which makes it the fastest sanity check in operations: measure two quantities, infer the one you cannot see.'
        },
        {
          name: 'The Bottleneck Rule',
          author: 'CD59 Module 2 · Ocean Cove',
          components: ['Stage capacity = realistic rate per stage', 'System capacity = min{kitchen, waiters, tables}', 'Adding capacity off-bottleneck adds nothing'],
          rule: 'Before recommending more seats, check whether the dining room is actually the binding stage. At Ocean Cove\'s lunch, it usually is not.'
        },
        {
          name: 'Operations-Strategy Fit',
          author: 'CD59 Module 2',
          components: ['Strategic position: who you serve, on what promise', 'Operational configuration: what your process is good at', 'KPIs: what behaviour you are actually buying'],
          rule: 'Critique a KPI by asking which position it serves. A speed metric in a firm selling intimacy is a strategy leak, not a dashboard detail.'
        },
        {
          name: 'Utilisation & Congestion',
          author: 'airline scheduling illustration',
          components: ['High utilisation = an asset rarely idle', 'Rarely idle = no slack to absorb disruption', 'Delays propagate through the day'],
          rule: 'The utilisation your CFO loves and the delays your customers hate are the same number seen from two sides.'
        }
      ],
      apply: {
        title: 'Reading a congested operation without a simulation.',
        steps: [
          { strong: 'Count the crowd.', rest: 'I, the number in the system, is usually visible. It is the cheapest measurement you will ever take.' },
          { strong: 'Divide by throughput.', rest: 'T = I/R turns the crowd into a wait time. If the answer embarrasses the service promise, you have your headline.' },
          { strong: 'Locate the binding stage.', rest: 'Compute per-stage capacity and take the minimum. Intuition reliably picks the most visible stage, not the slowest one.' },
          { strong: 'Interrogate the KPIs.', rest: 'List what is measured. Ask which strategic position each metric serves. Expect at least one that serves none.' },
          { strong: 'Price the slack.', rest: 'Before pushing utilisation higher, name what the remaining idle time is currently buying you: resilience, quality, or recovery speed.' }
        ]
      },
      eli5: {
        title: 'Counting people in the queue tells you the wait.',
        body: [
          'Stand outside a coffee shop. Twelve people inside, and the barista hands over four cups a minute. You now know the wait is three minutes — without a stopwatch, without asking anyone. That is Little\'s Law: how many, how fast, how long — know two and you get the third.',
          'The second trick is knowing where the queue really comes from. The counter looks busy, but if the espresso machine can only do three cups a minute, the machine is the bottleneck and hiring another barista changes nothing.',
          'Firms make both mistakes at scale: they never count the crowd, and they expand the visible stage instead of the binding one.'
        ]
      }
    },
    m03: {
      id: 'm03', number: '03', topic: 'Waiting Lines',
      title: 'The Physics & Psychology of Waiting',
      hint: 'Waits are governed by hard laws — utilisation, variability, flexibility — and experienced through soft ones. Manage both or you manage neither.',
      kicker: 'Beau Ties case · four waiting-line truths · Maister\'s psychology · the newsvendor.',
      coreIdea: {
        text: 'Queues obey factory physics: waits explode as utilisation approaches 100%, and variability makes everything worse at every level. But customers experience waits psychologically — occupied, explained, fair waits feel shorter than they are. The cheapest capacity decision is often not another server but a managed perception, and the staffing question is always a cost trade-off, never a target picked from air.',
        attr: 'after the CD59 Module 3 material'
      },
      diagram: {
        type: '2x2',
        title: 'Where waits come from.',
        intro: 'Two dials govern every queue: how loaded the system is, and how variable arrivals and service are. The dangerous cell is the one most operations drift into while chasing efficiency.',
        xAxis: { label: 'Utilisation', lo: 'Slack', hi: 'Near 100%' },
        yAxis: { label: 'Variability', lo: 'Steady', hi: 'Spiky' },
        quadrants: [
          { pos: 'tl', label: 'Calm & costly' },
          { pos: 'tr', label: 'Waits explode', highlight: true },
          { pos: 'bl', label: 'Efficient & calm' },
          { pos: 'br', label: 'Fragile efficiency' }
        ]
      },
      frameworks: [
        {
          name: 'Four Waiting-Line Truths',
          author: 'CD59 Module 3',
          components: ['Higher utilisation, longer waits', 'The same increase hurts more from a higher base', 'More variability, worse waits at any load', 'More capacity flexibility, shorter waits'],
          rule: 'The curves differ by industry; the shapes never do. Any staffing argument that ignores the non-linearity near full utilisation is wrong before it starts.'
        },
        {
          name: 'The Psychology of Waiting',
          author: 'Maister, 1985',
          components: ['Unoccupied and uncertain waits feel longer', 'Unexplained and unfair waits feel longer', 'Anxiety stretches time; company shrinks it'],
          rule: 'Perceived waits are manageable at near-zero cost — entertain, explain, and make the queue visibly fair before you buy a single extra server.'
        },
        {
          name: 'Queueing Approximation',
          author: 'CD59 Module 3',
          components: ['Inputs: utilisation U, servers M, variability CVa and CVs', 'Output: average queue length Lq, hence wait via Little\'s Law', 'Good enough for staffing decisions'],
          rule: 'You do not need simulation to size a call centre — the approximation formula turns a target wait into a number of servers you can defend.'
        },
        {
          name: 'The Newsvendor Model',
          author: 'single-period ordering canon',
          components: ['Order once, demand uncertain', 'Overage cost vs underage cost', 'Optimal service level balances the two'],
          rule: 'When you can only order once, the question is never "what will demand be?" but "which mistake is cheaper?" — and the answer sets your order.'
        }
      ],
      apply: {
        title: 'Fixing a wait people complain about.',
        steps: [
          { strong: 'Split actual from perceived.', rest: 'Measure the real wait, then walk the queue as a customer. The complaint is usually about the experience, not the minutes.' },
          { strong: 'Deploy Maister first.', rest: 'Occupy the wait, explain it, guarantee its fairness. This costs almost nothing and often ends the complaint.' },
          { strong: 'Then do the physics.', rest: 'Compute utilisation and variability. If U is above ~85% at peak, no amount of psychology will save you.' },
          { strong: 'Buy flexibility before capacity.', rest: 'Cross-trained staff who flex to the queue beat a permanent extra server on cost, because they absorb variability.' },
          { strong: 'Frame staffing as a trade-off.', rest: 'Cost of waiting vs cost of servers, newsvendor-style. A 1-minute target is a choice with a price tag, not a virtue.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Katz, Larson & Larson · Sloan Management Review',
        title: 'Prescription for the Waiting-in-Line Blues.',
        prose: 'The paper behind the module\'s soft half: entertain, enlighten and engage the queue. Read with the Beau Ties case, it completes the argument — Beau Ties supplies the physics of a small call centre choosing staffing levels; the SMR piece supplies everything the physics cannot see.',
        kicker: 'The mirror by the lift did not make the lift faster. Complaints stopped anyway.'
      },
      eli5: {
        title: 'Why the queue feels worse than it is.',
        body: [
          'Two queues, same ten-minute wait. In one you stand in silence with no idea when your turn comes. In the other a screen says "9 minutes", someone hands you a menu, and the line visibly moves. The second wait feels half as long. Nothing about the service changed.',
          'Underneath, queues follow physics: run a system near full capacity and waits do not grow gently, they explode. And the more unpredictable the arrivals, the worse it gets at every load level.',
          'So the playbook has two moves: make the wait feel fair and occupied (cheap), and keep a little slack or flexible helpers for the spikes (worth it). Firms that skip the first move pay for the second twice.'
        ]
      }
    },
    m04: {
      id: 'm04', number: '04', topic: 'Supply Chains',
      title: 'The Bullwhip & the Shared Ledger',
      hint: 'Order variability amplifies as it travels upstream — the cure is not better forecasting but better information flow and ownership of the decision.',
      kicker: 'potato game · W\'Up Bottlery & Barilla · bullwhip causes · MTS/MTO, reorder policies.',
      coreIdea: {
        text: 'Play four stages of a supply chain with steady end-demand and watch orders at the factory swing wildly: the bullwhip is produced by the players\' own rational behaviour. Each stage forecasts from its neighbour\'s orders rather than real demand, batches, hedges against shortages — and amplifies. The fixes share one principle: let one decision-maker see one truth, from vendor-managed inventory to simply sharing the sell-through data.',
        attr: 'after Lee, Padmanabhan & Whang'
      },
      diagram: {
        type: 'linear',
        title: 'Where the whip cracks.',
        intro: 'Steady demand at the shop becomes lumpy at the depot, wild at the plant. Every hand-off adds forecast-on-forecast error, batching and gaming — amplification grows with distance from the customer.',
        steps: ['Shopper', 'Store', 'Depot', 'Plant']
      },
      frameworks: [
        {
          name: 'The Bullwhip Effect',
          author: 'Lee, Padmanabhan & Whang, 1997',
          components: ['Demand-signal processing: forecasting from orders, not demand', 'Order batching', 'Price fluctuations and forward buying', 'Shortage gaming'],
          rule: 'The whip is endogenous — four rational local behaviours produce collective madness, so exhorting people to forecast better cannot fix it.'
        },
        {
          name: 'Vendor-Managed Inventory',
          author: 'Barilla & W\'Up Bottlery cases',
          components: ['Supplier sees true sell-through', 'Supplier decides replenishment', 'Customer sets service-level guardrails'],
          rule: 'Move the ordering decision to whoever has the best information. Barilla\'s distributors resisted giving up control — the selling of VMI matters as much as the maths.'
        },
        {
          name: 'Inventory Policy Menu',
          author: 'CD59 Module 4',
          components: ['Strategic: make-to-stock vs make-to-order', 'Continuous review: reorder point R, quantity Q', 'Periodic review: order-up-to level', 'Safety stock against lead-time demand'],
          rule: 'Pick the policy before arguing the numbers: MTS buys speed with inventory risk, MTO buys certainty with waiting, and the review policy decides who checks what, when.'
        }
      ],
      apply: {
        title: 'Diagnosing amplification in a chain you sit inside.',
        steps: [
          { strong: 'Plot demand vs your orders.', rest: 'If your order variance exceeds your demand variance, you are the whip — before blaming anyone upstream.' },
          { strong: 'Name which of the four causes you commit.', rest: 'Batching for freight, hedging orders in shortages, buying ahead of promotions: all locally sensible, all amplifying.' },
          { strong: 'Share sell-through, not orders.', rest: 'The cheapest intervention is letting upstream see real demand. Information beats inventory.' },
          { strong: 'Consider moving the decision.', rest: 'VMI works when the supplier has better visibility and the customer keeps guardrails. Expect political resistance to exceed technical difficulty.' },
          { strong: 'Match policy to product.', rest: 'Steady runners: continuous review with safety stock. Lumpy or seasonal: periodic order-up-to. One-shot: newsvendor.' }
        ]
      },
      eli5: {
        title: 'Whisper down the supply chain.',
        body: [
          'Play the whisper game with numbers. The shop sells 100 units like clockwork, but rounds its order up "to be safe". The depot sees a bigger order, assumes demand is rising, and adds its own cushion. By the factory, a flat 100 has become an order for 400 — followed next month by zero.',
          'Nobody was foolish. Everyone reacted sensibly to the only number they could see: the order in front of them. That is the bullwhip — the chain amplifies its own echo.',
          'The cure is embarrassingly simple and organisationally hard: show everyone the till data, or let one party manage the whole shelf. The pasta company Barilla fought this battle in the 1990s; the potato game makes you fight it yourself.'
        ]
      }
    },
    m05: {
      id: 'm05', number: '05', topic: 'Quality',
      title: 'Quality as a System',
      hint: 'Toyota and Oberoi reach the same conclusion from opposite industries: quality is produced by standards plus empowered people, not by inspection at the end.',
      kicker: 'Toyota & Oberoi cases · jidoka, andon, kaizen · empowerment with standards · wrap-up.',
      coreIdea: {
        text: 'The Toyota Production System builds quality into the process: any worker stops the line when something is off (jidoka, via the andon cord), every task is precisely specified yet perpetually improved by the people who do it (kaizen). Oberoi Hotels reaches the same design in luxury service — rigorous standards underneath, front-line staff empowered to act on the spot. Quality is an operating system, not a department.',
        attr: 'after the Toyota and Oberoi cases'
      },
      diagram: {
        type: 'network',
        title: 'What holds quality up.',
        intro: 'No single practice produces quality; the system does. Remove standards and empowerment becomes chaos; remove empowerment and standards become theatre.',
        center: 'QUALITY',
        satellites: [
          { label: 'STANDARDS' },
          { label: 'ANDON' },
          { label: 'KAIZEN' },
          { label: 'PEOPLE' },
          { label: 'MEASUREMENT' }
        ]
      },
      frameworks: [
        {
          name: 'Toyota Production System',
          author: 'Spear & Bowen, Decoding the DNA of TPS, 1999',
          components: ['All work specified: content, sequence, timing, outcome', 'Every connection direct and unambiguous', 'Problems surfaced and solved at the lowest level, scientifically'],
          rule: 'The paradox that makes TPS hard to copy: rigid specification is exactly what enables flexibility and improvement, because you can only improve from a stable baseline.'
        },
        {
          name: 'Jidoka & Andon',
          author: 'Toyota Motor Manufacturing case',
          components: ['Authority to stop the line sits with everyone', 'Defects surface where they occur, not downstream', 'Stopping is treated as contribution, not failure'],
          rule: 'A defect passed downstream multiplies its cost at every stage. The cord is cheap; the seat-installation problem found at the dealer is not.'
        },
        {
          name: 'Empowered Service Quality',
          author: 'Oberoi Hotels case',
          components: ['Deep standards and training underneath', 'Front-line discretion to resolve and delight', 'Hiring and culture as the quality gate'],
          rule: 'Luxury service cannot be scripted at the moment of truth — so script everything up to it, then trust the person in the room.'
        }
      ],
      apply: {
        title: 'Importing the quality system without the factory.',
        steps: [
          { strong: 'Specify the work.', rest: 'Write down content, sequence, timing and expected outcome for one recurring process. Vagueness is where defects breed.' },
          { strong: 'Install an andon.', rest: 'Give everyone a costless way to flag "something is off" the moment they see it — and answer every pull fast, or the cord dies.' },
          { strong: 'Treat every defect as a process defect.', rest: 'Ask why the process allowed it, never who slipped. The Toyota question is "what about the work made this possible?"' },
          { strong: 'Pair standards with discretion.', rest: 'Define the floor precisely so people can improvise above it. Empowerment without standards is variance; standards without empowerment is theatre.' },
          { strong: 'Close the loop with kaizen.', rest: 'Small improvements, proposed by the people doing the work, tested scientifically, folded back into the standard. That is the whole engine.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Spear & Bowen · Harvard Business Review, 1999',
        title: 'Decoding the DNA of the Toyota Production System.',
        prose: 'Everyone can see Toyota\'s tools — kanban cards, andon cords — yet decades of plant tours produced few successful imitators. Spear and Bowen argue the tools are surface: the DNA is four rules for designing work, connections and improvement as continuous experiments. It reframes TPS from a manufacturing technique into a theory of organisational learning.',
        kicker: 'Visitors photographed the cords and missed the scientific method holding them up.'
      },
      eli5: {
        title: 'The line anyone can stop.',
        body: [
          'In a Toyota plant, a new worker who spots a loose bolt pulls a cord and the entire line prepares to halt. Stopping a car factory costs a fortune per minute — and Toyota decided that is still cheaper than letting one bad bolt travel.',
          'The deeper trick is what happens next: someone comes, the problem is studied where it happened, and the standard way of doing that task is improved so the bolt cannot be loose again. Thousands of these tiny fixes, compounding for decades, are the whole secret.',
          'A five-star hotel runs the same system in disguise: obsessive standards behind the scenes, and a receptionist trusted to fix your problem on the spot without asking a manager. Standards plus trust. Neither works alone.'
        ]
      }
    }
  }
};

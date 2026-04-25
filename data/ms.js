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
    tagline: 'One block. Four modules.',
    pullquote: 'Start from the customer; segment, target, and position from there.',
    attr: 'the course, told in one line',
    blocks: [
      { label: 'I · Customer-first strategy', modules: ['m01', 'm02', 'm03', 'm04'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Market Analysis',
      title: 'The 5Cs',
      hint: 'Read the market through five lenses before you decide what to sell, to whom, or for how much.',
      kicker: 'Kotler · Company, Customers, Competitors, Collaborators, Context — the situational scan that opens every marketing plan.',
      coreIdea: {
        text: 'Marketing is the management of cash flow from customers, and it starts with a clear-eyed read of the situation. Before strategy or the 4Ps, you map five forces: what your Company can do, what Customers actually need, who the Competitors are, which Collaborators sit in the value chain, and what Context (political, economic, social, technological, legal, environmental) shapes the field. Skip this scan and the rest of the plan is built on assumptions.',
        attr: 'after Kotler and the marketing-process tradition'
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
      },
      frameworks: [
        {
          name: '5Cs of Market Analysis',
          author: 'after Kotler',
          components: ['Company', 'Customers', 'Competitors', 'Collaborators', 'Context'],
          rule: 'Run all five before you set strategy — a gap in any one C produces blind spots the 4Ps cannot fix.'
        },
        {
          name: 'PESTLE / PESTE',
          author: 'strategic management tradition',
          components: ['Political', 'Economic', 'Sociocultural', 'Technological', 'Legal', 'Environmental'],
          rule: 'Context is not background noise — macro forces can invalidate an otherwise sound plan.'
        },
        {
          name: 'Customer Centricity',
          author: 'after Drucker · Ambler · Gerstner',
          components: ['Customer as unit of analysis', 'Share of wallet over market share', 'Customer portfolio over product portfolio'],
          rule: 'The aim of marketing is to know the customer so well that the product sells itself.'
        }
      ],
      apply: {
        title: 'Before you write a single slide of strategy.',
        intro: 'Work through each C in order. A sentence or two per lens is enough to surface the assumptions the rest of the plan rests on.',
        steps: [
          { strong: 'Write down what your Company can actually do.', rest: 'Capabilities, assets, cost structure. No wishful thinking.' },
          { strong: 'State what Customers value — from their words, not yours.', rest: 'Functional, economic, and psychological benefits. Check whether need and purchase reason match.' },
          { strong: 'Name the Competitors meeting the same need.', rest: 'Include substitutes. What does each one do better than you today?' },
          { strong: 'Map the Collaborators in the value chain.', rest: 'Distributors, suppliers, complementors. What keeps each one participating?' },
          { strong: 'Scan the Context for forces that could shift the rules.', rest: 'One slide of PESTLE. Flag any that would invalidate your strategy within 18 months.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Drucker · The Practice of Management',
        title: 'Marketing as the whole business seen from the customer\'s point of view.',
        prose: 'Drucker\'s formulation — that the aim of marketing is to make selling superfluous by understanding the customer so well the product fits and sells itself — is the conceptual root of the 5Cs framework. Every C is a way of checking whether that fit exists before the strategy is committed.'
      },
      eli5: {
        title: 'Scouting a neighbourhood before you open a shop.',
        body: [
          'Imagine you want to open a coffee shop. Before you sign a lease, you walk the neighbourhood. <strong>Who lives here</strong> (Customers)? <strong>What other cafes exist</strong> (Competitors)? <strong>Who supplies the beans and owns the building</strong> (Collaborators)? <strong>What do you bring</strong> (Company)? <strong>Is a new train station or rent-control law coming</strong> (Context)?',
          'Skip any one of those five walks and you are making your lease decision on guesswork. The 5Cs is just that walk, done in writing, before the plan is written.',
          'Michelin did this in reverse — they skipped the Customer C when selling tires, and only fixed it when they reframed from <em class="serif">selling rubber</em> to <em class="serif">selling kilometres at lower cost</em>.'
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
      },
      frameworks: [
        {
          name: 'CLV Formula',
          author: 'after Gupta & Lemmens',
          components: ['m = annual margin', 'r = retention rate', 'i = discount rate', 'AC = acquisition cost', 'CLV = m × r/(1+i−r) − AC'],
          rule: 'Three levers: lower AC, raise r, grow m. Retention is usually the highest-return lever.'
        },
        {
          name: 'Customer Equity',
          author: 'after Gupta & Lehmann',
          components: ['CLV × current base', '+ discounted CLV of future acquisitions', '= bottom-up firm valuation'],
          rule: 'Aggregate CLV is a sanity-check on market cap — if the maths don\'t square, growth assumptions are doing all the work.'
        },
        {
          name: 'CRM Three Strategies',
          author: 'marketing-process tradition',
          components: ['Acquisition — win new customers', 'Retention — keep existing ones', 'Expansion — grow margin per customer'],
          rule: 'Not all customers are equally valuable; allocate CRM spend where CLV improvement is largest, not where volume is highest.'
        }
      ],
      apply: {
        title: 'Diagnose one customer segment with the formula.',
        intro: 'Pick a real segment. Plug in numbers — even rough estimates reveal which lever is broken.',
        steps: [
          { strong: 'Estimate annual margin per customer (m).', rest: 'Revenue minus variable cost to serve. If you only have revenue, apply a margin rate.' },
          { strong: 'Find the retention rate (r).', rest: 'What share of customers were still active one year later? Even churn data from billing will do.' },
          { strong: 'Apply the margin multiple.', rest: 'r / (1 + i − r). At r=80%, i=10%, the multiple is 2.67 — that is how many years of margin you are buying.' },
          { strong: 'Subtract acquisition cost (AC).', rest: 'Total marketing spend ÷ new customers acquired. Compare CLV/AC to the 3× benchmark.' },
          { strong: 'Decide which lever to pull.', rest: 'Low multiple → fix retention. High AC → fix acquisition efficiency. Low m → fix pricing or cost-to-serve.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · HBR · Gupta & Lehmann · 2003',
        title: 'Customers as assets.',
        prose: 'Gupta and Lehmann show that customer equity — the sum of CLV across the base — can explain and predict stock market valuations better than traditional accounting metrics. The Blue Apron and Netflix cases in the course illustrate both sides: one where CLV analysis would have flagged the problem before the IPO, one where growth assumptions require billions of future subscribers to justify current price.',
        kicker: 'A company is worth its customers, discounted. Build the number before you pitch the story.'
      },
      eli5: {
        title: 'Buying a fruit tree vs. a piece of fruit.',
        body: [
          'When you buy a single orange you pay the shelf price. When you buy a fruit tree you pay today for every orange it will ever produce — discounted because future oranges are worth less than today\'s. <strong>CLV is the tree price.</strong>',
          'The margin multiple tells you how many seasons\' worth of fruit you are paying for. At 80% retention and 10% cost of capital, you are buying 2.67 seasons. If the tree dies in season one, you overpaid.',
          'The trap companies fall into — MoviePass, Blue Apron — is paying tree-price for trees that turn out to die in season one. The formula shows the bet before you make it.'
        ]
      }
    },
    m03: {
      id: 'm03', number: '03', topic: 'Customer Decision Journey',
      title: 'From Funnel to Loop',
      hint: 'Buying is no longer a one-way funnel - customers loop between consideration, evaluation, purchase and advocacy.',
      kicker: 'Court, Elzinga, Mulder & Vetvik (McKinsey, 2009); extended by Edelman (2010) — awareness, evaluation, purchase, experience, loyalty loop — the circular replacement for AIDA.',
      coreIdea: {
        text: 'The classic purchase funnel (AIDA) treats buying as a one-way narrowing from awareness to action. The customer decision journey replaces that line with a loop: customers move between an initial consideration set, an active evaluation where the set can grow as well as shrink, the moment of purchase, and a post-purchase experience that feeds either advocacy and a loyalty short-cut back to repurchase, or churn back to consideration. The job of marketing is to win the moments in that loop, not just push prospects down a funnel.',
        attr: 'after Court, Elzinga, Mulder & Vetvik (2009); extended by Edelman (2010)'
      },
      diagram: {
        type: 'loop',
        tag: 'The hero diagram',
        title: 'The customer decision journey, as a loop',
        intro: 'Five stages on a closed circle. The loyalty bond at stage five shortcuts back to stage one, bypassing the open market — that is the prize the funnel model could not see.',
        stages: [
          { label: 'Consider', desc: 'A trigger creates a need; the customer starts with a small set of brands already in mind from prior exposure, reputation and recent advertising. Being on this short list is the first battle.' },
          { label: 'Evaluate', desc: 'The consideration set is researched and revised — and unlike the funnel, it can grow as new options surface through search, peer reviews, ratings and social proof.' },
          { label: 'Buy', desc: 'Final choice is made at the point of sale, shaped by in-store cues, recommendations and last-minute promotions. Conversion depends on removing friction, not just persuasion.' },
          { label: 'Experience', desc: 'Use, service and support either confirm or break the promise. This is where expectations meet reality and where the next purchase is implicitly underwritten.' },
          { label: 'Bond', desc: 'Satisfied customers shortcut straight from experience back to repurchase, bypassing consideration and evaluation entirely. Advocacy at this stage triggers the Consider stage for others.' }
        ]
      },
      frameworks: [
        {
          name: 'Customer Decision Journey',
          author: 'Court, Elzinga, Mulder & Vetvik · McKinsey 2009',
          components: ['Consider', 'Evaluate', 'Buy', 'Experience', 'Bond / Loyalty loop'],
          rule: 'Map where your customers are losing faith in the loop — that is where to invest, not at top-of-funnel.'
        },
        {
          name: 'AIDA Funnel (the model being replaced)',
          author: 'Lewis · 1898',
          components: ['Awareness', 'Interest', 'Desire', 'Action'],
          rule: 'AIDA is useful for new-to-category launches; the loop model is more useful once a customer base exists and loyalty is the growth lever.'
        },
        {
          name: 'Loyalty Loop',
          author: 'Edelman · HBR 2010',
          components: ['Post-purchase bond', 'Advocacy as trigger for others\' Consider stage', 'Repurchase shortcut bypasses open evaluation'],
          rule: 'A strong loyalty loop compresses customer equity — same CLV at lower re-acquisition cost.'
        }
      ],
      apply: {
        title: 'Audit one customer journey you own.',
        intro: 'Pick a product or segment. Walk the five stages as the customer walks them.',
        steps: [
          { strong: 'Identify the trigger that opens the Consider stage.', rest: 'What event or need puts the customer into the market? Are you in the initial consideration set?' },
          { strong: 'Map the Evaluate stage for your category.', rest: 'Where do customers search? What content shapes the set? Does your brand appear — or grow or shrink?' },
          { strong: 'Audit friction at the Buy stage.', rest: 'How many steps from intent to purchase? Where do customers drop? Ease of purchase often matters more than persuasion.' },
          { strong: 'Measure the Experience gap.', rest: 'What did you promise in Evaluate? What did customers actually get? The gap here is churn.' },
          { strong: 'Design the Bond moment deliberately.', rest: 'What makes a customer skip re-evaluation on next purchase? Onboarding, loyalty mechanic, or just a product that delivers.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Court, Elzinga, Mulder & Vetvik · McKinsey Quarterly 2009',
        title: 'The consumer decision journey.',
        prose: 'Based on research across three continents and five industries, Court et al. showed that the classic funnel misrepresents how people actually buy: consideration sets grow during evaluation rather than narrowing, and post-purchase experience shapes future consideration more powerfully than advertising. The loop model redirected marketing investment from reach and awareness toward loyalty and experience.',
        kicker: 'Win the loop, not the funnel.'
      },
      eli5: {
        title: 'A hotel you return to vs. one you research every time.',
        body: [
          'Imagine booking a hotel for a work trip. The first time, you search for 20 minutes, read reviews on TripAdvisor, compare three options, and eventually click. That is the full loop — Consider, Evaluate, Buy, Experience.',
          'If the stay is great, the next trip is different. You open your phone and book the same hotel in two taps. You skipped the 20-minute evaluation entirely. <strong>That skip is the loyalty loop</strong> — and it is worth more to the hotel than any advertising.',
          'The funnel model assumes every purchase starts from scratch. The loop model says: <em class="serif">the last experience is the first step of the next journey</em>. That is why retention is marketing work, not just CRM work.'
        ]
      }
    },
    m04: {
      id: 'm04', number: '04', topic: 'Segmenting & Positioning',
      title: 'STP',
      hint: 'Markets are not monoliths. Slice them by need, choose where to play, then claim a place in the customer\'s mind.',
      kicker: 'after Smith & Kotler · segment, target, position — the three-step cascade behind every marketing strategy.',
      coreIdea: {
        text: 'Customers are heterogeneous, so averages mislead. STP is the disciplined response: segment the market into groups with common needs, target the segments where size, fit, and competitive room create the most profit, then position by defining a value proposition that lives clearly in the mind of those customers relative to alternatives. It answers the two strategy questions — where will we play, and how will we win — and sets the brief that the 4Ps must execute.',
        attr: 'after Smith and Kotler'
      },
      diagram: {
        type: 'flow',
        title: 'Segment, Target, Position',
        intro: 'A three-stage cascade. Each stage narrows the market and sharpens the choice; the output of one is the input to the next.',
        steps: [
          { label: 'Segment', desc: 'Discover and profile groups of customers with common needs. Use bases (the why — needs, motivations, behaviour) and descriptors (the who — demographics, geography) so segments are differentiable, measurable, accessible, actionable, and substantial.' },
          { label: 'Target', desc: 'Evaluate each segment on the 3Cs — customer value (size, growth, reachability), company fit (objectives, capabilities, resources), and competitive intensity (underserved needs, rivals\' strengths). Targeting is the discipline of saying no to the segments you will not serve.' },
          { label: 'Position', desc: 'Define a value proposition that places the offer in the customer\'s mind versus alternatives — for whom, what benefit, and how it differs. The positioning statement becomes the brief that drives Product, Price, Place, and Promotion.' }
        ]
      },
      frameworks: [
        {
          name: 'STP Cascade',
          author: 'after Smith (1956) & Kotler',
          components: ['Segment — discover groups with common needs', 'Target — choose where to play', 'Position — define how to win in the mind'],
          rule: 'The cascade is sequential: weak segmentation produces weak targeting, which produces a positioning statement with no real audience.'
        },
        {
          name: 'Criteria for Good Segmentation (DAMAS)',
          author: 'Kotler',
          components: ['Differentiable', 'Actionable', 'Measurable', 'Accessible', 'Substantial'],
          rule: 'A segment that fails any one of these five tests will either not be reachable or not be worth reaching.'
        },
        {
          name: 'Targeting 3Cs',
          author: 'marketing-strategy tradition',
          components: ['Customer opportunity — size, growth, reachability', 'Company fit — objectives, capabilities, resources', 'Competitive intensity — underserved needs, rivals\' strengths'],
          rule: 'Targeting is the discipline of saying no — the segments you decline define the strategy as much as the ones you choose.'
        },
        {
          name: 'Positioning Statement',
          author: 'Kotler · Lafley & Martin',
          components: ['For (target customer)', 'who (need)', 'the (product) is a (category)', 'that (core benefit)', 'unlike (alternatives), our product (point of difference)'],
          rule: 'A positioning statement is only useful if it would embarrass a competitor — vague statements are not positions.'
        }
      ],
      apply: {
        title: 'Build an STP for one offering you own.',
        steps: [
          { strong: 'List the bases first, not the descriptors.', rest: 'Start with the "why" — needs, motivations, behaviour. Demographics follow; they are how you find segments, not what defines them.' },
          { strong: 'Apply DAMAS to each candidate segment.', rest: 'Is it differentiable, actionable, measurable, accessible, and substantial? Cut any that fail two or more tests.' },
          { strong: 'Score remaining segments on the 3Cs.', rest: 'Customer opportunity, company fit, competitive intensity. Target the one with the best combined score — not just the biggest.' },
          { strong: 'Build a perceptual map of the target segment.', rest: 'Plot competitors on the two axes that matter most to that segment. Find the unoccupied position with genuine demand.' },
          { strong: 'Write one positioning statement.', rest: 'For [target], who [need], [product] is [category] that [benefit]. Unlike [alternative], it [difference]. Test: would a competitor be embarrassed by this claim?' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Lafley & Martin · Playing to Win · 2013',
        title: 'Strategy as an integrated cascade of choices.',
        prose: 'Lafley and Martin frame strategy as five nested choices — winning aspiration, where to play, how to win, capabilities, management systems — and show that STP is the marketing expression of the "where to play / how to win" pair. The Chase Sapphire Reserve case in the course is a worked example: segment (affluent millennials who travel), target (HENRYs over price-shoppers), position (premium travel rewards with aspirational identity).',
        kicker: 'Strategy without a clear target is a wish. STP converts it into a choice.'
      },
      eli5: {
        title: 'Choosing which race to enter, not just training harder.',
        body: [
          'Imagine you are a runner. You could train for sprints, marathons, or hurdles. The market is everyone who runs. <strong>Segmentation</strong> says: these groups have different needs. <strong>Targeting</strong> says: which race are you actually going to enter, given your build and the competition? <strong>Positioning</strong> says: once you\'ve chosen the race, what do you want people to say about you when you line up?',
          'Mobil did this at petrol stations: five segments of drivers, each with different needs. They targeted Road Warriors and True Blues — not Price Shoppers — and built convenience stores designed for the people who stayed longest. They said no to 20% of their volume to win a different 32%.',
          'The mistake most companies make is trying to run all three races. <em class="serif">Averages mislead.</em> The person who is 40 years old on average is two people who are 25 and 55, with completely different needs.'
        ]
      }
    }
  }
};

// CV · CD57 · Creating and Capturing Customer Value · LBS Faculty
module.exports = {
  code: 'cv',
  courseCode: 'CD57',
  courseName: 'Creating and Capturing Customer Value',
  courseShort: 'CV',
  courseDisplayName: 'Creating and Capturing Customer Value',
  courseAccent: '--c-cv',
  professor: 'LBS Faculty',
  frameworksTag: 'Frameworks in this module',
  frameworksHeading: 'Named ideas to remember.',
  school: 'London Business School',
  cohort: 'EMBA Dubai 2027',
  arc: {
    tagline: 'One block. Five modules.',
    pullquote: 'Create value for the customer, then capture your share of it: product, price, place, promotion, brand.',
    attr: 'the course, told in one line',
    blocks: [
      { label: 'I · The 4Ps and brand', modules: ['m01', 'm02', 'm03', 'm04', 'm05'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Marketing Promotion & Advertising',
      title: 'Integrated Marketing Communications',
      hint: 'One message, every channel, measured. Promotion is persuasion engineering, not creative decoration.',
      kicker: 'The self-paced opener · traditional vs digital media, storytelling and consumer psychology, and the KPIs that say whether any of it worked.',
      coreIdea: {
        text: 'Promotion walks a customer down a staircase: notice the product, want it, act. Traditional media buys reach; digital buys targeting and a measurable trail. The craft is consistency — branding, storytelling and psychology aligned so every touchpoint tells one story. The discipline is measurement: reach, engagement, conversion, return on ad spend. An ad that cannot report its KPI is a cost, not a strategy.',
        attr: 'after the CD57 Module 1 material'
      },
      diagram: {
        type: 'linear',
        title: 'The persuasion staircase.',
        intro: 'AIDA — the oldest model in advertising, and still the spine of every funnel dashboard you will ever see.',
        steps: [
          'Attention',
          'Interest',
          'Desire',
          'Action'
        ]
      },
      frameworks: [
        {
          name: 'AIDA Funnel',
          author: 'E. St. Elmo Lewis, 1898',
          components: ['Attention', 'Interest', 'Desire', 'Action'],
          rule: 'Each stage loses people — design a distinct message for the stage, not one ad that tries to do all four.'
        },
        {
          name: 'Integrated Marketing Communications',
          author: 'after Schultz',
          components: ['One positioning', 'Consistent story across channels', 'Coordinated timing'],
          rule: 'Customers meet the brand across many touchpoints but form one impression — inconsistency is self-inflicted noise.'
        },
        {
          name: 'Traditional vs Digital Media Economics',
          author: 'CD57 Module 1',
          components: ['TV: reach + emotion', 'Social: targeting + feedback loop', 'KPIs: reach, CTR, conversion, ROAS'],
          rule: 'Traditional buys awareness you cannot track; digital buys precision you can — the mix depends on which failure you can afford.'
        }
      ],
      apply: {
        title: 'Auditing a promotion plan.',
        steps: [
          { strong: 'Name the funnel stage each asset targets.', rest: 'An awareness TV spot and a retargeting ad have different jobs. Grade each against its own job.' },
          { strong: 'Read three touchpoints side by side.', rest: 'Website, social ad, packaging. If a stranger cannot tell they are one brand, integration has failed.' },
          { strong: 'Demand a KPI per objective.', rest: 'Awareness → reach; consideration → engagement; sales → conversion and ROAS. Refuse vanity metrics.' },
          { strong: 'Check the psychology is earned.', rest: 'Storytelling works when the story is about the customer’s problem — not the founder’s journey.' }
        ]
      },
      eli5: {
        title: 'A market stall with a megaphone and a clipboard.',
        body: [
          'Promotion is the megaphone: first make people <strong>look</strong>, then make them <strong>care</strong>, then make them <strong>want</strong>, then make it <strong>easy to buy</strong>. Four different jobs — most bad ads try to do all four in one breath.',
          'Digital added the clipboard: now you can count who looked, who clicked, who bought. <strong>If you are not counting, you are not marketing — you are decorating.</strong>'
        ]
      }
    },
    m02: {
      id: 'm02', number: '02', topic: 'Product',
      title: 'Product Ideation & Differentiation',
      hint: 'Listen before you build: research uncovers the need, design turns it into something rivals cannot easily copy.',
      kicker: 'Session 1 · how product ideation drives innovation, and how research — social listening, trend analysis — finds the needs worth building for.',
      coreIdea: {
        text: 'Products fail less from bad engineering than from unheard customers. Ideation starts with research — social media listening, trend analysis — to surface needs people cannot articulate in a survey. Then design does two jobs at once: solve the functional problem and differentiate, so the solution reads as yours. A product that answers a real need in a way competitors cannot quickly imitate is the only durable form of value creation.',
        attr: 'after the CD57 Module 2 material'
      },
      diagram: {
        type: 'flow',
        title: 'From signal to differentiated product.',
        intro: 'The order matters: research before ideation, ideation before design. Reversing it produces solutions hunting for problems.',
        steps: [
          { label: 'Listen', desc: 'Social media listening and trend analysis — needs surface in complaints and workarounds before they surface in surveys.' },
          { label: 'Uncover the need', desc: 'Translate signals into a job the customer is trying to get done, stated in their words.' },
          { label: 'Ideate', desc: 'Generate options against the need — volume first, judgment second.' },
          { label: 'Design & differentiate', desc: 'Solve the job in a way that carries your signature: features, experience, identity rivals cannot cheaply copy.' }
        ]
      },
      frameworks: [
        {
          name: 'Three Product Levels',
          author: 'after Kotler',
          components: ['Core benefit', 'Actual product', 'Augmented product'],
          rule: 'Customers buy the core benefit; competition happens increasingly at the augmented layer — service, warranty, experience.'
        },
        {
          name: 'Social Listening & Trend Analysis',
          author: 'CD57 Module 2',
          components: ['Unprompted customer signals', 'Complaints & workarounds', 'Trend trajectories'],
          rule: 'What customers do and complain about beats what they say in focus groups — mine the unprompted signal first.'
        },
        {
          name: 'Design-Driven Differentiation',
          author: 'innovation & design tradition',
          components: ['Functional solution', 'Distinctive experience', 'Imitation barrier'],
          rule: 'Differentiation must survive copying — design, identity and experience age better than any single feature.'
        }
      ],
      apply: {
        title: 'Before green-lighting the next product idea.',
        steps: [
          { strong: 'Show me the listening evidence.', rest: 'Which complaints, searches or workarounds say this need exists? No signal, no build.' },
          { strong: 'State the core benefit in one sentence.', rest: 'In the customer’s words, not the engineer’s. If it takes a paragraph, the idea is fuzzy.' },
          { strong: 'Name the differentiator and its half-life.', rest: 'What is ours here, and how long before a rival ships the same? Design outlasts specs.' },
          { strong: 'Prototype against the job, not the spec.', rest: 'Test whether the need gets done, not whether the feature list is complete.' }
        ]
      },
      eli5: {
        title: 'Eavesdropping your way to a better product.',
        body: [
          'Bad products start with "what can we build?" Good ones start with <strong>eavesdropping</strong>: reading what people complain about, what they duct-tape together, what they search at 2am. That is the need, in the wild.',
          'Then you build the fix — but with <strong>your signature on it</strong>, in design and experience, so when competitors copy the feature next year, customers still recognise the original.'
        ]
      }
    },
    m03: {
      id: 'm03', number: '03', topic: 'Price',
      title: 'Value-Based Pricing',
      hint: 'Cost sets the floor, competitors set the anchor, customer value sets the ceiling. Price toward the ceiling.',
      kicker: 'Session 2 · cost-based vs competitor-based vs value-based pricing, the psychology underneath, and the tactics — discounts, bundling — that fine-tune capture.',
      coreIdea: {
        text: 'Three lenses price everything. Cost-plus is safe and lazy: it guarantees margin and ignores what the customer would have paid. Competitor-based imports rivals’ mistakes. Value-based starts from what the product is worth to the buyer and captures a fair share of it. Psychology does the fine-tuning — anchors, reference prices, framing — and tactics like bundling and discounts move volume without repricing the list.',
        attr: 'after the CD57 Module 3 material'
      },
      diagram: {
        type: 'linear',
        title: 'The pricing corridor.',
        intro: 'Every viable price lives between two lines. The three strategies differ in which line they stare at.',
        steps: [
          'Cost floor',
          'Competitor anchor',
          'Customer value ceiling'
        ]
      },
      frameworks: [
        {
          name: 'Three Pricing Lenses',
          author: 'CD57 Module 3',
          components: ['Cost-based', 'Competitor-based', 'Value-based'],
          rule: 'Cost tells you whether to play, competitors tell you the neighbourhood, value tells you the price — most firms stop one lens early.'
        },
        {
          name: 'Psychology of Pricing',
          author: 'behavioural pricing tradition',
          components: ['Anchoring', 'Reference prices', 'Charm endings & framing'],
          rule: 'Customers judge prices relatively, not absolutely — control the comparison and you control the perception.'
        },
        {
          name: 'Pricing Tactics',
          author: 'discounts · bundling · versioning',
          components: ['Bundles hide unit prices', 'Discounts segment by patience', 'Versions segment by willingness to pay'],
          rule: 'Tactics let one list price serve many willingnesses to pay — capture the surplus without a public price cut.'
        }
      ],
      apply: {
        title: 'Repricing an existing product.',
        steps: [
          { strong: 'Compute the value ceiling first.', rest: 'What does the customer save or gain versus their best alternative? That number, not cost, starts the conversation.' },
          { strong: 'Use cost only as a kill switch.', rest: 'Below the floor, exit. Above it, cost has no vote on the price.' },
          { strong: 'Pick the anchor you present.', rest: 'The first number customers see reframes everything after it. Choose it; do not let the market choose for you.' },
          { strong: 'Discount by rule, not by mood.', rest: 'Every ad-hoc discount teaches customers to wait. Tie discounts to behaviour — volume, timing, commitment.' }
        ]
      },
      eli5: {
        title: 'The lemonade stand with three price tags.',
        body: [
          'You can price lemonade three ways: what it cost you plus a margin (<strong>cost</strong>), what the kid next door charges (<strong>competitor</strong>), or what a thirsty jogger in July would happily pay (<strong>value</strong>). Only the third asks the customer.',
          'The psychology bit: the jogger does not know what lemonade "should" cost — <strong>the first price they see becomes the truth</strong>. And the combo deal with cookies? That is bundling: nobody can tell what the lemonade alone costs anymore, which is exactly the point.'
        ]
      }
    },
    m04: {
      id: 'm04', number: '04', topic: 'Place',
      title: 'Channel Design',
      hint: 'Distribution is where value gets delivered or destroyed. Direct buys control and data; indirect buys reach and speed.',
      kicker: 'Session 3 · how channels create value, the direct-vs-indirect trade-off, and what e-commerce and subscriptions actually change.',
      coreIdea: {
        text: 'A channel is not logistics; it is the part of the product the customer experiences last. Intermediaries earn their margin by providing reach, assortment, and local trust you cannot cheaply replicate. Going direct buys back control, data and margin — and hands you inventory, fulfilment and acquisition costs. E-commerce and subscription models redraw the trade-off: the first shortens the path, the second turns a sale into a relationship.',
        attr: 'after the CD57 Module 4 material'
      },
      diagram: {
        type: '2x2',
        title: 'Control x reach: the channel trade-off.',
        intro: 'Direct and indirect are not rivals but positions on two axes. Most mature firms end up hybrid — deliberately or by accident.',
        xAxis: { label: 'Route to customer', lo: 'Indirect', hi: 'Direct' },
        yAxis: { label: 'What you optimise', lo: 'Reach & speed', hi: 'Control & data' },
        quadrants: [
          { pos: 'tl', label: 'Marketplace sellers' },
          { pos: 'tr', label: 'D2C / own store', highlight: true },
          { pos: 'bl', label: 'Retail distribution' },
          { pos: 'br', label: 'Hybrid / omnichannel' }
        ]
      },
      frameworks: [
        {
          name: 'Channel Value Functions',
          author: 'marketing channels tradition',
          components: ['Reach', 'Assortment & bulk-breaking', 'Local trust & service'],
          rule: 'You can eliminate the intermediary but not its functions — someone must do them, and whoever does earns the margin.'
        },
        {
          name: 'Direct vs Indirect Trade-off',
          author: 'CD57 Module 4',
          components: ['Direct: control, data, margin', 'Indirect: reach, speed, lower fixed cost', 'Channel conflict'],
          rule: 'Choose the channel by which capability you lack — and price the conflict before running both at once.'
        },
        {
          name: 'E-commerce & Subscription Models',
          author: 'CD57 Module 4',
          components: ['Shortened path to customer', 'Recurring relationship', 'Churn as the new metric'],
          rule: 'A subscription converts distribution into retention — the channel decision becomes a lifetime-value decision.'
        }
      ],
      apply: {
        title: 'Choosing (or fixing) a route to market.',
        steps: [
          { strong: 'List the functions your customer needs at purchase.', rest: 'Advice, availability, returns, financing. Then ask who performs each best.' },
          { strong: 'Price the direct dream honestly.', rest: 'D2C margin looks fat until you subtract fulfilment, returns and paid acquisition.' },
          { strong: 'Map the conflict before adding a channel.', rest: 'Your retailer notices your webshop. Decide the rules — pricing, exclusives — before they decide for you.' },
          { strong: 'For subscriptions, watch churn before growth.', rest: 'Acquisition with leaky retention is renting customers at a loss.' }
        ]
      },
      eli5: {
        title: 'Selling honey: farm gate or supermarket shelf?',
        body: [
          'Sell your honey at the farm gate and you keep every pound, meet every customer, and reach almost nobody. Put it in supermarkets and you reach everyone — but the store takes its cut, owns the shopper data, and can drop you next season.',
          '<strong>Neither is right; they buy different things.</strong> The web let you ship jars from your kitchen, and subscriptions turned honey into "a jar every month" — same product, but now the game is <strong>keeping</strong> the customer, not finding them.'
        ]
      }
    },
    m05: {
      id: 'm05', number: '05', topic: 'Branding',
      title: 'Brand Equity',
      hint: 'A brand is a shortcut in the customer’s head. It differentiates, guides choice, and compounds into long-term value.',
      kicker: 'Session 4 · what makes a brand, how it guides customer choice, and when brand activism builds trust rather than backlash.',
      coreIdea: {
        text: 'A brand is a promise the market has learned to believe. It differentiates lookalike products, guides choice under time pressure, and licenses a price premium — that stored trust is brand equity, an asset built by consistency and spent by every broken promise. Activism is the highest-stakes deposit: taking a stand builds trust when it matches the brand’s actions, and burns it when it reads as costume.',
        attr: 'after the CD57 Module 5 material'
      },
      diagram: {
        type: 'network',
        title: 'What a strong brand does all day.',
        intro: 'Four jobs, one asset. Each satellite is a function the brand performs without you paying for it again.',
        center: 'BRAND',
        satellites: [
          { label: 'DIFFERENTIATE' },
          { label: 'GUIDE CHOICE' },
          { label: 'PRICE PREMIUM' },
          { label: 'TRUST & LOYALTY' }
        ]
      },
      frameworks: [
        {
          name: 'Functions of a Brand',
          author: 'CD57 Module 5',
          components: ['Differentiation', 'Choice heuristic', 'Risk reduction for the buyer'],
          rule: 'Customers use brands to decide faster and safer — the brand earns exactly as much as the deciding it saves.'
        },
        {
          name: 'Brand Equity',
          author: 'after Aaker & Keller',
          components: ['Awareness', 'Associations', 'Perceived quality', 'Loyalty'],
          rule: 'Equity is the gap between what your product commands and what an identical unbranded one would — an asset, so manage it like one.'
        },
        {
          name: 'Brand Activism',
          author: 'CD57 Module 5',
          components: ['Stand aligned with brand actions', 'Authenticity test', 'Trust dividend or backlash'],
          rule: 'A stand only builds trust when the company’s own behaviour already backs it — activism is proof, not positioning.'
        }
      ],
      apply: {
        title: 'Managing the brand as an asset.',
        steps: [
          { strong: 'Write the promise in one line.', rest: 'What does the customer believe they get, every time? If teams answer differently, there is no brand yet.' },
          { strong: 'Audit the promise against experience.', rest: 'Every broken delivery, rude call or ugly renewal is a withdrawal from equity you paid media money to build.' },
          { strong: 'Measure the premium.', rest: 'Price your product against a private-label twin. The gap is your equity, in currency.' },
          { strong: 'Test any stand against your record.', rest: 'Before the campaign: would our own conduct survive the scrutiny the stand invites? If not, fix conduct first.' }
        ]
      },
      eli5: {
        title: 'Why you grab the same coffee cup without thinking.',
        body: [
          'In a supermarket aisle with forty coffees, you grab the one you always grab. No comparison, no reading labels. That shortcut — <strong>trust stored in a name</strong> — is the brand doing its job, and it is why the branded jar charges more than the identical one beside it.',
          'That stored trust is <strong>brand equity</strong>: built slowly by kept promises, spent instantly by broken ones. And when a brand takes a public stand, customers check one thing: <strong>does the company actually live like that?</strong> If yes, trust compounds. If no, the internet does the auditing for free.'
        ]
      }
    }
  }
};

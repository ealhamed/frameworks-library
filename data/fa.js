// FA · CD54 · Financial Accounting · Prof Arthur Kraft
module.exports = {
  code: 'fa',
  courseCode: 'CD54',
  courseName: 'Financial Accounting',
  courseShort: 'FA',
  courseDisplayName: 'Financial Accounting',
  courseAccent: '--c-fa',
  professor: 'Prof Arthur Kraft',
  frameworksTag: 'The rules on the page',
  frameworksHeading: 'The rules of the game.',
  school: 'London Business School',
  cohort: 'EMBA Dubai 2027',
  arc: {
    tagline: 'Reporting. Then decision.',
    pullquote: 'The first half teaches you to read the three statements; the second half teaches you to use the numbers to decide.',
    attr: 'the course, in one line',
    blocks: [
      { label: 'I · Reading the Numbers', modules: ['m01', 'm02', 'm03', 'm04', 'm05'] },
      { label: 'II · Using the Numbers', modules: ['m07', 'm08', 'm09', 'm10'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Accounting Basics & Financial Reports',
      title: 'The Balance Sheet Equation',
      hint: 'Assets = Liabilities + Equity. Every transaction touches two accounts.',
      kicker: 'Arthur Kraft · the three statements and the equation that keeps them honest.',
      coreIdea: {
        text: 'Accounting is a language for describing economic reality. The three statements — Balance Sheet (position), Income Statement (performance), Cash Flow (liquidity) — are held together by one equation: Assets = Liabilities + Equity. Every transaction is a double entry that keeps the equation true, and that discipline is what makes the numbers comparable.',
        attr: 'after Kraft'
      },
      diagram: {
        type: 'equation',
        title: 'The equation behind every balance sheet.',
        intro: 'Rearrange this however you like. It never breaks.',
        lhs: 'ASSETS',
        rhs: 'LIABILITIES + EQUITY'
      },
      frameworks: [
        { name: 'Three Statements', author: 'IFRS / US GAAP', components: ['Balance Sheet', 'Income Statement', 'Cash Flow Statement'], rule: 'Retained earnings flow from IS → BS. Operating cash flow starts from IS.' },
        { name: 'Double-Entry Bookkeeping', author: 'Accounting Convention', components: ['Debits', 'Credits', 'T-accounts'], rule: 'Every transaction affects at least two accounts. Debits = Credits, always.' }
      ],
      apply: {
        title: 'First pass at any annual report.',
        steps: [
          { strong: 'Start with the balance sheet.', rest: 'Assets on one side, liabilities + equity on the other. They must balance.' },
          { strong: 'Trace one transaction.', rest: 'A cash sale. Where does it appear? IS (revenue), BS (cash up, inventory down), CFS (cash inflow).' },
          { strong: 'Find the retained earnings line.', rest: 'It connects net income from the IS to owner\'s equity on the BS.' }
        ]
      },
      eli5: {
        title: 'Bank account, income stream, and the cash you actually hold.',
        body: [
          'The balance sheet is what you own minus what you owe, on one specific day. The income statement is what you earned and spent over a period. The cash flow statement is what cash actually moved — which, because of accruals, is rarely the same as what you earned.',
          'Profit is an opinion; cash is a fact. Both statements are useful — they tell different stories.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Session 1 · Kraft',
        title: 'Basics of accounting and financial reports.',
        prose: 'The balance sheet equation is the one rule that makes accounting coherent. Everything else — recognition, measurement, valuation — is a refinement of how we assign numbers to the left and right sides so they describe the business honestly.',
        kicker: 'Everything in financial accounting is a re-statement of A = L + E.'
      }
    },

    m02: {
      id: 'm02', number: '02', topic: 'Revenue Recognition & Cash Flows',
      title: 'Accruals vs. Cash',
      hint: 'Revenue when earned, expense when consumed. Not when the cheque clears.',
      kicker: 'The four revenue-recognition tests and why they matter.',
      coreIdea: {
        text: 'Cash accounting records what happened to the bank account. Accrual accounting records what happened to the business. Revenue is recognised when the goods and risks have transferred, the amount is measurable, and cash is probable — not when it is received. This is the single biggest source of profit-vs-cash divergence, and the single biggest opportunity for earnings manipulation.',
        attr: 'after IFRS 15'
      },
      diagram: {
        type: '2x2',
        title: 'Accrual × cash.',
        intro: 'Four combinations of when you recognise and when cash moves.',
        xAxis: { label: 'cash movement', lo: 'not yet', hi: 'received' },
        yAxis: { label: 'recognition', lo: 'deferred', hi: 'earned' },
        quadrants: [
          { pos: 'tl', label: 'Accrued revenue' },
          { pos: 'tr', label: 'Cash sale' },
          { pos: 'bl', label: 'Executory contract' },
          { pos: 'br', label: 'Deferred revenue', highlight: true }
        ]
      },
      frameworks: [
        { name: 'Revenue Recognition — 4 tests', author: 'IFRS 15', components: ['Risks & rewards transferred', 'No continuing involvement', 'Amount measurable', 'Cash probable'], rule: 'All four, or you cannot recognise yet.' },
        { name: 'Matching Principle', author: 'Fundamental', components: ['COGS with revenue', 'Period costs with the period'], rule: 'Recognise the expense in the period that earned the revenue.' },
        { name: 'Accruals & Deferrals', author: 'Accounting mechanics', components: ['accrued revenue / expense', 'deferred revenue / expense'], rule: 'Adjust for the gap between economic event and cash movement.' }
      ],
      apply: {
        title: 'Reading a revenue line with suspicion.',
        steps: [
          { strong: 'Ask: when did control transfer?', rest: 'If there\'s a right of return, revenue recognition waits.' },
          { strong: 'Check for estimates.', rest: 'Warranty provisions, bad debts, returns. These are judgement calls.' },
          { strong: 'Reconcile to cash.', rest: 'If reported revenue grows but operating cash does not, someone is recognising early.' }
        ]
      },
      eli5: {
        title: 'The painter and the invoice.',
        body: [
          'You paint a client\'s house on Monday and send the invoice. They pay 60 days later. Accrual accounting says you earned the revenue on Monday. Cash accounting says you earned it 60 days later.',
          'Both are "correct" — but only accrual tells you whether you made money painting, regardless of when the cheque arrived.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Session 2 · Kraft',
        title: 'Accruals and revenue recognition.',
        prose: 'The question "when is a sale a sale?" has destroyed companies (Enron, Priceline, Under Armour all stretched the answer). IFRS 15 formalises the four tests. Memorise them — they are the first sniff-test on any aggressive-looking revenue line.',
        kicker: 'Revenue is not cash. Test the four.'
      }
    },

    m03: {
      id: 'm03', number: '03', topic: 'Fixed Assets & Capitalisation',
      title: 'Capitalise or Expense',
      hint: 'Future benefit? Capitalise. Maintenance only? Expense.',
      kicker: 'The single most consequential accounting choice on most balance sheets.',
      coreIdea: {
        text: 'An expenditure with future economic benefit goes on the balance sheet and depreciates over its useful life. An expenditure that merely maintains the current state goes to the income statement immediately. This one call — capitalise or expense — moves millions of pounds between income and balance sheet, and every reader of accounts should know where the judgement sits.',
        attr: 'after IAS 16 / ASC 360'
      },
      diagram: {
        type: 'linear',
        title: 'From spend to depreciation.',
        intro: 'Four checkpoints any capital item goes through.',
        steps: ['Capitalise?', 'Measure cost', 'Depreciate', 'Dispose']
      },
      frameworks: [
        { name: 'Capitalise vs Expense', author: 'IAS 16', components: ['future economic benefit', 'past transaction', 'cost measurable'], rule: 'If all three, capitalise. Otherwise expense.' },
        { name: 'Acquisition Cost', author: 'Asset recognition', components: ['purchase price', 'duties & taxes', 'installation & labour', 'costs to ready for use'], rule: 'Capitalise all costs necessary to get the asset ready for its intended use — no more.' },
        { name: 'Repairs vs Improvements', author: 'Maintenance principle', components: ['Repair → expense', 'Improvement → capitalise'], rule: 'Does it extend life, reduce cost or increase capacity? Improvement. Otherwise repair.' },
        { name: 'Depreciation & Disposal', author: 'Matching principle', components: ['Straight-line most common', 'Useful life × salvage estimate', 'Gain/Loss = proceeds − NBV'], rule: 'Spread cost across the periods that benefit from the asset.' }
      ],
      apply: {
        title: 'When the Capex paper lands on your desk.',
        steps: [
          { strong: 'Check the three capitalisation tests.', rest: 'Future benefit? Past event? Measurable? Two out of three is not enough.' },
          { strong: 'Include the full acquisition cost.', rest: 'Installation, training, commissioning — all of it, if necessary to use the asset.' },
          { strong: 'Challenge the useful life.', rest: 'Aggressive = shorter life, higher annual expense. Conservative = longer life, lower expense.' },
          { strong: 'At disposal, book the gain or loss explicitly.', rest: 'Proceeds minus net book value. This is often material and often forgotten.' }
        ]
      },
      eli5: {
        title: 'Buying a van for your business.',
        body: [
          'The van costs £30,000 today, but it will help you earn money for the next 10 years. Expensing it all today would make this year look like a disaster and every year after a miracle. That is misleading.',
          'Instead you capitalise it — put it on the balance sheet — and depreciate £3,000 a year. Each year\'s profit reflects a fair share of the van\'s consumption.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Session 3 · Kraft',
        title: 'Capitalisation of expenses — fixed assets.',
        prose: 'The incentive for management is clear: capitalise whatever you can, because it lifts this year\'s reported earnings. The role of accounting standards is to draw the line. Know where the line is drawn, and know when a firm is walking up to it.',
        kicker: 'Capitalise future benefit. Expense maintenance. Know the difference.'
      }
    },

    m04: {
      id: 'm04', number: '04', topic: 'Intangible Assets & Goodwill',
      title: 'What You Paid For, Beyond the Tangible',
      hint: 'Generated internally? Expense. Acquired? Capitalise. Goodwill? Test for impairment.',
      kicker: 'Most of modern market value is intangible. Most of intangible value is off-balance sheet.',
      coreIdea: {
        text: 'Brands, patents, software, customer lists — the largest source of value in most modern firms is intangible. Accounting treats it unevenly: when you build it yourself, you mostly expense the spend; when you buy it, you capitalise it; when you pay more than the net assets are worth, the excess becomes goodwill. Understanding which bucket a value sits in is the difference between reading a balance sheet and being fooled by one.',
        attr: 'after IAS 38 / IFRS 3'
      },
      diagram: {
        type: '2x2',
        title: 'Internal vs. acquired. Definite vs. indefinite.',
        intro: 'Two questions decide the accounting treatment.',
        xAxis: { label: 'useful life', lo: 'definite', hi: 'indefinite' },
        yAxis: { label: 'origin', lo: 'acquired', hi: 'internal' },
        quadrants: [
          { pos: 'tl', label: 'R&D' },
          { pos: 'tr', label: 'Internal brand' },
          { pos: 'bl', label: 'Patent' },
          { pos: 'br', label: 'Goodwill', highlight: true }
        ]
      },
      frameworks: [
        { name: 'Internal vs Acquired Intangibles', author: 'IAS 38', components: ['internal → expensed', 'acquired → capitalised'], rule: 'Capital intensity looks lower if you built instead of bought.' },
        { name: 'Research vs Development', author: 'IFRS', components: ['Research: expensed', 'Development: capitalised if technically feasible and commercially viable'], rule: 'Where a firm draws this line is a judgement worth reading.' },
        { name: 'Goodwill', author: 'IFRS 3', components: ['Price paid', 'Fair value of assets acquired', 'Goodwill = excess'], rule: 'Goodwill is the premium for future earning power. Test it annually.' },
        { name: 'Impairment', author: 'Asset valuation', components: ['carrying value vs recoverable amount'], rule: 'If carrying > recoverable, write it down. Once written down, it does not come back.' }
      ],
      apply: {
        title: 'Reading intangibles on a balance sheet.',
        steps: [
          { strong: 'Separate goodwill from other intangibles.', rest: 'Goodwill = M&A premium. Others = patents, brands, software.' },
          { strong: 'Check the impairment history.', rest: 'Repeated impairments suggest overpaying for acquisitions.' },
          { strong: 'Note what is not on the balance sheet.', rest: 'Internally built brand value (Coca-Cola) does not appear anywhere.' }
        ]
      },
      eli5: {
        title: 'You built a brand. They bought a brand.',
        body: [
          'If you spent 20 years building your brand with ads, none of that spend shows up as an asset — it was all expensed year by year. The brand is real, but accounting-invisible.',
          'If someone buys your company for the brand, the buyer puts that same brand on their balance sheet at the price they paid. Same brand, two different accounting lives.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Session 4 · Kraft',
        title: 'Intangibles and cash flows.',
        prose: 'Facebook\'s $19B for WhatsApp was almost entirely goodwill — the clearest modern case study. Every M&A story eventually reduces to one question: how much of the price becomes goodwill, and whether that goodwill ever gets written down.',
        kicker: 'Goodwill is a claim about the future. Test it.'
      }
    },

    m05: {
      id: 'm05', number: '05', topic: 'Liabilities & Debt',
      title: 'Obligations, Certain and Not',
      hint: 'Probable + measurable = recognise. Possible = disclose. Remote = ignore.',
      kicker: 'The continuum from certain debt to contingent liability.',
      coreIdea: {
        text: 'Liabilities sit on a spectrum of certainty. At one end, trade payables and notes — crisp, dated, measured. At the other, warranties, lawsuits, environmental exposures — probable in aggregate, uncertain in detail. IAS 37 turns that continuum into three buckets: recognise, disclose, ignore. Where a firm places its exposures tells you how it thinks.',
        attr: 'after IAS 37'
      },
      diagram: {
        type: 'linear',
        title: 'From certain to contingent.',
        intro: 'The probability scale that determines accounting treatment.',
        steps: ['Recognise', 'Provision', 'Disclose', 'Ignore']
      },
      frameworks: [
        { name: 'Liability Recognition', author: 'IAS 37', components: ['past event', 'probable outflow', 'measurable'], rule: 'All three or nothing goes on the balance sheet.' },
        { name: 'Current vs Long-term', author: 'Present value', components: ['Current: face value', 'Long-term: present value of future cash'], rule: 'Discount obligations beyond 12 months (or sooner if the discount effect is material).' },
        { name: 'Contingent Classification', author: 'IAS 37', components: ['Remote: ignore', 'Possible: disclose in footnotes', 'Probable: book a provision'], rule: 'Three buckets. Management judgement decides which.' },
        { name: 'Provision Measurement', author: 'Liability measurement', components: ['one-off: most likely amount', 'large population: expected value'], rule: 'Review and adjust every reporting period.' }
      ],
      apply: {
        title: 'Auditing a liability section.',
        steps: [
          { strong: 'List all provisions.', rest: 'Warranties, restructuring, environmental, legal. Each is an estimate.' },
          { strong: 'Read the contingent-liability footnote.', rest: 'That is where probable-but-not-recognised risks live.' },
          { strong: 'Compare provision balance year-over-year.', rest: 'Big releases = previously over-accrued; big additions = growing risk.' }
        ]
      },
      eli5: {
        title: 'Your promises to pay later.',
        body: [
          'A supplier bill is a definite promise — recognise it in full. A warranty on 10,000 units is a statistical promise — estimate it and book a provision. A lawsuit threat that might go to trial is an uncertain promise — disclose it in a note.',
          'Accounting treats each differently, but all three are real liabilities in the business sense.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Session 5 · Kraft',
        title: 'Liabilities and debt.',
        prose: 'The hardest part of liability accounting is not recording what you owe — it is estimating what you might owe. That estimation is where management discretion lives, and where the most interesting stories in annual reports are hidden.',
        kicker: 'Read the provisions. Read the footnotes. Twice.'
      }
    },

    m07: {
      id: 'm07', number: '07', topic: 'Costs for Decisions',
      title: 'Relevant Costs, Contribution & Break-Even',
      hint: 'Sunk costs don\'t matter. Fixed overhead doesn\'t matter. Only what changes matters.',
      kicker: 'Management accounting: stop reporting, start deciding.',
      coreIdea: {
        text: 'Financial accounting tells you what happened. Management accounting tells you what to do next. The central discipline is identifying which costs will actually change with your decision — the rest (sunk costs, allocated overheads) are noise. Contribution margin, break-even analysis and relevant costing all flow from this one idea.',
        attr: 'after Likierman & Horngren'
      },
      diagram: {
        type: '2x2',
        title: 'Cost behaviour matrix.',
        intro: 'Two axes that decide how a cost behaves — and what it tells you.',
        xAxis: { label: 'relevance', lo: 'sunk', hi: 'future' },
        yAxis: { label: 'behaviour', lo: 'variable', hi: 'fixed' },
        quadrants: [
          { pos: 'tl', label: 'Sunk fixed' },
          { pos: 'tr', label: 'Avoidable fixed', highlight: true },
          { pos: 'bl', label: 'Committed spend' },
          { pos: 'br', label: 'Future variable', highlight: true }
        ]
      },
      frameworks: [
        { name: 'Fixed vs Variable Costs', author: 'Cost behaviour', components: ['Fixed: rent, salaries', 'Variable: materials, commissions'], rule: 'Contribution margin ignores fixed; decisions live here.' },
        { name: 'Contribution Margin', author: 'Decision making', components: ['CM = revenue − variable costs', 'CM ratio = CM / revenue', 'Break-even = fixed / CM ratio'], rule: 'Every extra unit contributes CM to covering fixed costs, then profit.' },
        { name: 'Relevant Costs', author: 'Incremental analysis', components: ['future, differing between options'], rule: 'Sunk costs are irrelevant. Allocated overhead is usually irrelevant.' },
        { name: 'Absorption vs Variable Costing', author: 'Inventory valuation', components: ['Absorption: fixed overhead in product cost', 'Variable: only variable costs'], rule: 'Absorption boosts reported income in periods of rising inventory. Variable is cleaner for decisions.' }
      ],
      apply: {
        title: 'Running a make-or-buy decision.',
        steps: [
          { strong: 'List every cost that changes.', rest: 'If it is the same in both options, delete it.' },
          { strong: 'Ignore sunk costs.', rest: 'The factory is built. That money is gone.' },
          { strong: 'Ignore allocated overhead.', rest: 'It is an accounting convention, not a decision input.' },
          { strong: 'Compare total relevant costs.', rest: 'Whichever is lower wins — subject to strategic considerations.' }
        ]
      },
      eli5: {
        title: 'The question: what changes if I do this?',
        body: [
          'You are deciding whether to drive or take the train. The car is already bought. The insurance is already paid. Those costs are the same either way — ignore them.',
          'The only costs that matter are petrol (variable with driving) and the train ticket. Everything else is sunk.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Session 7 · Likierman',
        title: 'Costing for decisions.',
        prose: 'CVP analysis and relevant costing are the backbone of most operating decisions — pricing, product mix, make-or-buy, outsourcing. The common mistake is including allocated overhead in the comparison, which makes every new business look unprofitable and every existing business look essential.',
        kicker: 'Only future costs that differ between options count.'
      }
    },

    m08: {
      id: 'm08', number: '08', topic: 'Budgeting & Short-term Planning',
      title: 'Sales Cascades. Cash Reveals.',
      hint: 'Start with the sales forecast. Let it flow through production to cash.',
      kicker: 'The master budget as a chain — pull on any link and the others move.',
      coreIdea: {
        text: 'A budget is a hypothesis about the year: if we sell this much at that price, we need that much inventory, that many people, and this much cash by Q3. The discipline is cascading consistently from sales through operations to cash. Variance analysis then closes the loop: what actually happened versus the plan, and why.',
        attr: 'after Horngren'
      },
      diagram: {
        type: 'linear',
        title: 'The master-budget cascade.',
        intro: 'Six links. Each one depends on the one before it.',
        steps: ['Sales', 'Production', 'Materials', 'Labour', 'Cash', 'Statements']
      },
      frameworks: [
        { name: 'Master Budget', author: 'Budget planning', components: ['sales → production → materials & labour → cash → statements'], rule: 'Sales is the driver. Everything cascades from it.' },
        { name: 'Cash Flow Forecasting', author: 'Working capital', components: ['operating cycle', 'seasonality', 'capex', 'financing'], rule: 'Convert accrual budget to cash using timing of receivables, payables, inventory.' },
        { name: 'Variance Analysis', author: 'Performance management', components: ['price', 'quantity', 'volume', 'favourable / unfavourable'], rule: 'Isolate what drove the gap. Act on the cause, not the symptom.' },
        { name: 'Flexible Budget', author: 'Cost control', components: ['budget adjusted for actual volume'], rule: 'Compare actuals to a budget that reflects what really happened, not what you planned.' }
      ],
      apply: {
        title: 'When you inherit a budget mid-year.',
        steps: [
          { strong: 'Find the sales assumption.', rest: 'Everything downstream depends on it. If that is wrong, everything is.' },
          { strong: 'Run the cash forecast forward.', rest: 'Seasonal troughs are where businesses die. Know where yours are.' },
          { strong: 'Pull recent variances.', rest: 'Price variance? Quantity variance? Each points to a different fix.' },
          { strong: 'Flex the budget.', rest: 'Compare actuals to a budget at actual volume, not the original plan. Otherwise you are punishing growth or rewarding decline.' }
        ]
      },
      eli5: {
        title: 'Planning a road trip.',
        body: [
          'You decide where you are going (sales forecast). That tells you how far to drive (production), how much petrol you need (materials), who is driving (labour), and whether you need to withdraw cash before the trip (cash flow).',
          'Get the destination wrong and nothing else matters. Get it right and the rest is arithmetic.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Session 8 · Likierman',
        title: 'Budgeting and short-term financial planning.',
        prose: 'Most budgets fail not because the numbers are wrong but because the cascade was broken — the sales team and operations were working from different sales assumptions. The master budget exists to force one story through every department.',
        kicker: 'One sales number. Everything else cascades.'
      }
    },

    m09: {
      id: 'm09', number: '09', topic: 'Information, Control & Transfer Pricing',
      title: 'Divisions, Metrics and the Price Between Them',
      hint: 'Transfer price = internal pricing = incentive design.',
      kicker: 'How you measure a division is how it will behave.',
      coreIdea: {
        text: 'Once a firm is big enough to have divisions, each division becomes a mini-firm. The price one division charges another, and the metric against which each is measured, shape behaviour more than any memo. ROI, EVA and well-chosen transfer prices align divisions with the firm; badly chosen ones pit them against each other.',
        attr: 'after Horngren & Solomons'
      },
      diagram: {
        type: 'network',
        title: 'Internal transfers.',
        intro: 'Divisions orbit the parent. Each spoke is a transfer price — the number that decides where group profit gets booked.',
        center: 'firm',
        satellites: [
          { label: 'Division A' },
          { label: 'Division B' },
          { label: 'Division C' }
        ]
      },
      frameworks: [
        { name: 'Transfer Pricing Methods', author: 'Divisional accounting', components: ['cost-based (variable, full, cost-plus)', 'market-based', 'negotiated'], rule: 'Market > negotiated > cost-plus > full cost > variable cost, for incentive alignment.' },
        { name: 'Profit vs Cost Centres', author: 'Organisation structure', components: ['Profit centre: revenue + cost', 'Cost centre: cost only'], rule: 'Transfer pricing converts cost centres into profit centres, improving accountability.' },
        { name: 'Divisional Metrics', author: 'Management control', components: ['ROI', 'Residual Income', 'EVA'], rule: 'EVA accounts for cost of capital. ROI doesn\'t. Choose accordingly.' },
        { name: 'Internal Controls', author: 'COSO / SOX', components: ['Segregation of duties', 'Authorisation', 'Reconciliation', 'Physical safeguards'], rule: 'The plumbing of corporate honesty.' }
      ],
      apply: {
        title: 'Setting up a new divisional structure.',
        steps: [
          { strong: 'Choose the metric first.', rest: 'EVA for capital-heavy divisions. ROI for asset-light.' },
          { strong: 'Set the transfer price at market if available.', rest: 'Cost-plus only if there is no market.' },
          { strong: 'Protect the control environment.', rest: 'Segregation of duties is boring and essential.' }
        ]
      },
      eli5: {
        title: 'Each division, a mini-company.',
        body: [
          'You run a factory and an assembly plant. If you treat them as one big cost pool, nobody is accountable for efficiency. If you make each a mini-company that "sells" to the other at a transfer price, both have skin in the game.',
          'But the price matters. Set it too high and assembly looks bad; too low and the factory looks bad. The sweet spot is usually whatever the market would charge.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Session 9 · Solomons',
        title: 'Transfer pricing and divisional performance.',
        prose: 'Transfer pricing is where tax, incentives and organisational structure collide. Every multinational has had to solve it more than once, usually after an audit.',
        kicker: 'The metric is the message.'
      }
    },

    m10: {
      id: 'm10', number: '10', topic: 'Performance Measurement',
      title: 'DuPont, ROIC & the EVA Question',
      hint: 'ROE tells you how much. DuPont tells you why. EVA tells you whether it was worth it.',
      kicker: 'Ratio analysis: the final exam of every financial-accounting course, for good reason.',
      coreIdea: {
        text: 'Financial statements give you thousands of numbers. Ratio analysis reduces them to a handful that tell a story. DuPont decomposes ROE into margin, turnover and leverage. EVA asks whether the return exceeded the cost of capital. Together they are the bridge from accounting to investing.',
        attr: 'after Stern & Stewart'
      },
      diagram: {
        type: 'pentagon',
        title: 'The five ratio families.',
        intro: 'Every question about a business lands in one of these five.',
        vertices: [
          { label: 'Liquidity', desc: 'can we pay next month' },
          { label: 'Solvency', desc: 'can we pay next decade' },
          { label: 'Profit', desc: 'do we make money' },
          { label: 'Efficiency', desc: 'do we use assets well' },
          { label: 'Valuation', desc: 'is it worth it' }
        ]
      },
      frameworks: [
        { name: 'DuPont Decomposition', author: 'DuPont', components: ['ROE = Net margin × Asset turnover × Equity multiplier', '(Equity multiplier = Assets / Equity)'], rule: 'Three levers for ROE. Most firms overuse one and underuse two.' },
        { name: 'Liquidity Ratios', author: 'Working capital', components: ['Current', 'Quick', 'Cash'], rule: 'Can the firm survive the next 90 days?' },
        { name: 'Solvency Ratios', author: 'Leverage', components: ['Debt/Equity', 'Debt/Assets', 'Interest coverage'], rule: 'Can the firm survive a downturn?' },
        { name: 'Efficiency Ratios', author: 'Asset utilisation', components: ['Asset turnover', 'Receivables days', 'Inventory turnover'], rule: 'How much revenue per pound of asset?' },
        { name: 'ROIC vs WACC', author: 'Value creation', components: ['ROIC = NOPAT / invested capital', 'EVA = (ROIC − WACC) × IC'], rule: 'Value is created only when ROIC exceeds WACC.' }
      ],
      apply: {
        title: 'One-page analysis of any company.',
        steps: [
          { strong: 'Run DuPont.', rest: 'Decompose ROE into margin, turnover, leverage.' },
          { strong: 'Compare to peers.', rest: 'Ratios are meaningless in isolation. Benchmark.' },
          { strong: 'Ask: does ROIC exceed WACC?', rest: 'If yes, value is being created. If no, capital is being destroyed.' },
          { strong: 'Trend the last five years.', rest: 'Direction matters more than the single-year reading.' }
        ]
      },
      eli5: {
        title: 'A report card for a company.',
        body: [
          'Liquidity ratios tell you whether the company can pay its bills this month. Solvency ratios tell you whether it can pay them in ten years. Profitability tells you whether it is making money. Efficiency tells you how hard its assets are working. Valuation tells you whether the stock is worth buying.',
          'DuPont pulls it together: a high ROE from high margin is Apple. A high ROE from high turnover is Walmart. A high ROE from high leverage is a bank.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Session 10 · Kraft',
        title: 'Performance measurement and financial analysis.',
        prose: 'Knowing the ratios is easy. Knowing which ratio matters for which industry, and what the peer benchmark actually is, is the difference between a course answer and a useful analysis.',
        kicker: 'The number only means something next to another number.'
      }
    }
  }
};

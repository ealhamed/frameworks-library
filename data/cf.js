// CF · CD58 · Corporate Finance · Prof. Christopher Hennessy & Prof. Rui Silva
module.exports = {
  code: 'cf',
  courseCode: 'CD58',
  courseName: 'Corporate Finance',
  courseShort: 'CF',
  courseDisplayName: 'Corporate Finance',
  courseAccent: '--c-cf',
  professor: 'Prof. Christopher Hennessy · Prof. Rui Silva',
  frameworksTag: 'Frameworks in this module',
  frameworksHeading: 'Named ideas to remember.',
  school: 'London Business School',
  cohort: 'EMBA Dubai 2027',
  arc: {
    tagline: 'Two blocks. Ten modules.',
    pullquote: 'Value the project with NPV, price the risk with CAPM and WACC, then choose how to finance it.',
    attr: 'the course, told in one line',
    blocks: [
      { label: 'I · Investment decisions', modules: ['m01', 'm02', 'm03', 'm04'] },
      { label: 'II · Risk, valuation & financing', modules: ['m05', 'm06', 'm07', 'm08', 'm09', 'm10'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Net Present Value & Investment Decision',
      title: 'The NPV Rule',
      hint: 'Discount every cash flow at the return investors could earn elsewhere at the same risk. Invest if the sum beats the outlay.',
      kicker: 'Hennessy · NPV measures value created — and it is priced: it shows up in market cap the day the market believes your project.',
      coreIdea: {
        text: 'A project is worth the cash it returns, shrunk by when it arrives and how risky it is. The discount rate is not what your bank charges; it is the return investors could earn on traded assets of the same risk. With no rival project and no option to wait, invest exactly when NPV > 0. One subtlety earns the module: NPV is value created, not value your current shareholders keep.',
        attr: 'after Hennessy, NPV & Capital Budgeting'
      },
      diagram: {
        type: 'equation',
        title: 'The only formula that matters this term.',
        intro: 'Every later module — cash flow, WACC, valuation, financing — is an argument about one of these inputs.',
        lhs: 'NPV',
        rhs: 'Σ CFₜ / (1 + r)ᵗ − OUTLAY'
      },
      frameworks: [
        {
          name: 'NPV Rule',
          author: 'Fisher · Hirshleifer tradition',
          components: ['Expected cash flows', 'Project cost of capital', 'Invest iff NPV > 0'],
          rule: 'Positive NPV means the project beats the market alternative at equal risk — that, not accounting profit, is value creation.'
        },
        {
          name: 'Perpetuity & Annuity Toolkit',
          author: 'incl. Gordon Growth Model',
          components: ['Perpetuity C/r', 'Growing perpetuity C₁/(r−g)', 'Annuity factor A(r,T)'],
          rule: 'Four closed forms price almost any cash-flow stream — memorise them and long horizons stop being scary.'
        },
        {
          name: 'NPVCS Decomposition',
          author: 'Hennessy',
          components: ['NPV to current shareholders', 'to current lenders', 'to new shareholders', 'to new lenders'],
          rule: 'NPV splits across claimants — a positive-NPV project can still be a bad deal for the shareholders who approve it.'
        }
      ],
      apply: {
        title: 'Before you approve any capital request.',
        steps: [
          { strong: 'Check the discount rate is a risk price.', rest: 'It must come from traded assets of similar risk — not the loan rate, not a house hurdle.' },
          { strong: 'Collapse the stream with the right closed form.', rest: 'Perpetuity, growing perpetuity, or annuity. Confirm r > g before using Gordon.' },
          { strong: 'Ask who captures the NPV.', rest: 'If financing dilutes current shareholders, compute NPVCS, not just NPV.' },
          { strong: 'Ask what the rule assumes.', rest: 'No mutually exclusive rival, no option to wait. If either exists, plain NPV > 0 is not enough.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Berk & DeMarzo · Corporate Finance, Ch. 4 & 7',
        title: 'Time value and the investment decision rules, done properly.',
        prose: 'The named course reference for this module. Chapter 4 builds the discounting machinery; Chapter 7 shows why NPV survives every alternative rule thrown at it. Read the worked examples with a calculator, not a highlighter.'
      },
      eli5: {
        title: 'Paying today for a machine that spits out cash later.',
        body: [
          'A project is a vending machine: you pay upfront, it pays you back over years. <strong>Money later is worth less than money now</strong>, because you could have invested elsewhere meanwhile. So you shrink each future payout by what the market would have paid you at the same risk — then compare the shrunken total to the price tag.',
          'If the total beats the price, buy the machine. That is the whole rule. The fine print — <strong>whose pocket the gain lands in</strong> — is what the rest of the course is about.'
        ]
      }
    },
    m02: {
      id: 'm02', number: '02', topic: 'Computing Cash Flow',
      title: 'Free Cash Flow',
      hint: 'NPV needs cash, not profit. Build the number from EBIT, strip the accounting, keep only what the project changes.',
      kicker: 'Hennessy · Cash flow is not net income — the gap is interest, depreciation, working capital and capex.',
      coreIdea: {
        text: 'The number you discount is free cash flow: after-tax operating profit, plus non-cash charges back, minus what you must reinvest in capex and working capital. Two disciplines produce it. Count only incremental flows — the ones that exist because the project does. And weight by probability: a launch case that ignores the failure branch is a forecast of luck, not of cash.',
        attr: 'after Hennessy, Cash Flow lecture'
      },
      diagram: {
        type: 'flow',
        title: 'From operating profit to the number you discount.',
        intro: 'Five moves, in order. Every valuation in this course starts by walking this bridge.',
        steps: [
          { label: 'EBIT', desc: 'Operating profit before financing. Interest stays out — financing lives in the discount rate, not the numerator.' },
          { label: '× (1 − τ)', desc: 'Tax the operating profit as if unlevered. The debt tax benefit is captured later, in WACC.' },
          { label: '+ D&A', desc: 'Depreciation is an accounting memory of old spending, not a cash outflow. Add it back.' },
          { label: '− CAPX', desc: 'Real cash out the door for plant and equipment, counted when spent — not when depreciated.' },
          { label: '− ΔNWC', desc: 'Inventory and receivables tie up cash as sales grow; recover it when the project winds down.' }
        ]
      },
      frameworks: [
        {
          name: 'Free Cash Flow Identity',
          author: 'standard corporate finance',
          components: ['EBIT(1−τ)', '+ D&A', '− CAPX', '− ΔNWC'],
          rule: 'Discount unlevered cash flow — put financing effects in the rate, never in the numerator, or you count them twice.'
        },
        {
          name: 'Incremental Cash-Flow Principle',
          author: 'after Hennessy',
          components: ['Ignore sunk costs', 'Charge opportunity costs', 'Charge cannibalization'],
          rule: 'Value the world with the project minus the world without it — nothing else belongs in the model.'
        },
        {
          name: 'Expected Cash Flow',
          author: 'probability weighting',
          components: ['Scenario flows', 'Probabilities', 'Probability-weighted mean'],
          rule: 'Discount the expectation across scenarios, not the single case the sponsor happens to believe in.'
        }
      ],
      apply: {
        title: 'Auditing a sponsor’s spreadsheet.',
        steps: [
          { strong: 'Find interest in the cash flows.', rest: 'If it is there, the model double-counts financing. Send it back.' },
          { strong: 'Hunt the sunk costs.', rest: 'R&D already spent and consultants already paid do not belong. Delete them without mercy.' },
          { strong: 'Charge the project for what it steals.', rest: 'The land it uses, the sales it takes from your existing product — both are real costs.' },
          { strong: 'Ask for the downside branch.', rest: 'One scenario is a story. Probability-weight at least two before you call it an expectation.' }
        ]
      },
      eli5: {
        title: 'Profit is opinion; cash is fact.',
        body: [
          'Accountants spread big purchases over years and book sales before the money arrives. Useful for reports, useless for deciding whether a project pays. <strong>You can only reinvest actual cash</strong>, so you rebuild the number: real money in, real money out, in the year it actually moves.',
          'And you only count money that moves <strong>because of this project</strong>. The money you already burned deciding? Gone either way. It gets no vote.'
        ]
      }
    },
    m03: {
      id: 'm03', number: '03', topic: 'Alternative Investment Criteria',
      title: 'IRR and Its Traps',
      hint: 'IRR agrees with NPV just often enough to be dangerous. Know the two conditions under which it lies.',
      kicker: 'Hennessy · IRR and NPV agree only for a conventional, standalone project — this module is about the exceptions.',
      coreIdea: {
        text: 'IRR is the discount rate that sets NPV to zero, and boards love it because it looks like a return. It breaks twice. Non-conventional cash flows produce multiple IRRs, or a borrowing-type project where a high IRR is bad news. And for mutually exclusive projects, the higher-IRR project can be the smaller-NPV one. Rank by NPV, or by incremental IRR — never by standalone IRR.',
        attr: 'after Hennessy, Lecture on IRR'
      },
      diagram: {
        type: '2x2',
        title: 'When can you trust an IRR?',
        intro: 'Two questions decide it: does the sign of the cash flows flip more than once, and are you ranking rivals? Only one cell is safe.',
        xAxis: { label: 'Cash-flow pattern', lo: 'Conventional', hi: 'Non-conventional' },
        yAxis: { label: 'Decision setting', lo: 'Ranking rivals', hi: 'Standalone' },
        quadrants: [
          { pos: 'tl', label: 'IRR works', highlight: true },
          { pos: 'tr', label: 'Multiple IRRs' },
          { pos: 'bl', label: 'Ranking fails' },
          { pos: 'br', label: 'Use NPV only' }
        ]
      },
      frameworks: [
        {
          name: 'IRR Rule & Failure Modes',
          author: 'after Hennessy',
          components: ['NPV(r*) = 0', 'Multiple sign changes → multiple roots', 'Lending vs borrowing type'],
          rule: 'An IRR is only a return if the project is lending-type with one sign change — check the pattern before quoting the number.'
        },
        {
          name: 'Incremental IRR',
          author: 'standard treatment',
          components: ['Difference the cash flows', 'IRR of the increment', 'Compare to cost of capital'],
          rule: 'To choose between rivals with IRR at all, compute the IRR of the difference — or just use NPV and go home early.'
        },
        {
          name: 'Payback & Profitability Index',
          author: 'practitioner screens',
          components: ['Years to recover outlay', 'PV per unit of capital', 'Capital rationing'],
          rule: 'Payback is a liquidity screen and PI a rationing tool — neither is an investment rule on its own.'
        }
      ],
      apply: {
        title: 'When someone leads with “the IRR is 30%”.',
        steps: [
          { strong: 'Count the sign changes.', rest: 'More than one — decommissioning costs, staged outlays — and the 30% may have siblings.' },
          { strong: 'Ask lending or borrowing.', rest: 'If cash comes in first and goes out later, you want a LOW IRR. Most audiences have never checked.' },
          { strong: 'Refuse IRR rankings.', rest: 'Scale and timing distort them. Mutually exclusive projects get ranked by NPV, full stop.' },
          { strong: 'Keep payback in its lane.', rest: 'Fine as a cash-at-risk screen. The moment it vetoes a positive-NPV project, it is destroying value.' }
        ]
      },
      eli5: {
        title: 'A percentage that flatters.',
        body: [
          'IRR answers "what return does this project earn on itself?" Sounds perfect — until you notice that a tiny project can earn <strong>a huge return on almost nothing</strong>, while a big project earns a decent return on a lot. The second one buys the yacht.',
          'NPV counts money, not percentages. <strong>When the two disagree, money wins.</strong>'
        ]
      }
    },
    m04: {
      id: 'm04', number: '04', topic: 'Debt Markets in Corporate Finance',
      title: 'Bond Pricing & the Yield Curve',
      hint: 'A bond is a bundle of promised cash flows. Price each at its own spot rate; the YTM is just the blended average.',
      kicker: 'Hennessy · Price and yield move inversely — that single fact is interest-rate risk.',
      coreIdea: {
        text: 'Debt is the cleanest laboratory for discounting: promised coupons, a face value, a date. Price each cash flow at the zero-coupon spot rate for its maturity — one flat yield is an approximation that breaks whenever the curve slopes. Yield to maturity summarises the price; it does not set it. Above the risk-free curve sits the credit spread: the market’s live estimate of default.',
        attr: 'after Hennessy, Lecture on Debt Markets'
      },
      diagram: {
        type: 'linear',
        title: 'How a bond gets its price.',
        intro: 'The market works left to right. Most people read the quote screen right to left and think YTM comes first.',
        steps: [
          'Spot rates',
          'Discount each coupon',
          'Bond price',
          'YTM (the summary)'
        ]
      },
      frameworks: [
        {
          name: 'Price–Yield Inversion',
          author: 'bond arithmetic',
          components: ['Fixed promised flows', 'Rate up → price down', 'Duration scales the move'],
          rule: 'Rates and prices are two ends of one seesaw — longer duration just means you are sitting further from the pivot.'
        },
        {
          name: 'Term Structure / Spot Rates',
          author: 'after Hennessy',
          components: ['Zero-coupon rates by maturity', 'Discount each flow at its own rate', 'Curve shape carries expectations'],
          rule: 'Use spot rates, not one flat yield, to discount a stream — the curve is the market’s price list for time.'
        },
        {
          name: 'Credit Spread',
          author: 'ratings & markets',
          components: ['Corporate yield − govt yield', 'Default probability × loss', 'Ratings as coarse bins'],
          rule: 'The spread is the market’s live default estimate — it reprices daily while ratings move in quarters.'
        }
      ],
      apply: {
        title: 'Reading a debt quote like a corporate treasurer.',
        steps: [
          { strong: 'Split the yield in two.', rest: 'Risk-free for the maturity, plus spread. Only the spread is about your firm.' },
          { strong: 'Check duration before judging risk.', rest: 'A 2% rate move hurts a 10-year bond roughly five times more than a 2-year.' },
          { strong: 'Never discount a stream at one flat rate.', rest: 'When the curve is steep, flat-rate pricing misprices every leg — arbitrage lives in that gap.' },
          { strong: 'Watch spreads, not ratings.', rest: 'The market downgrades weeks before the agencies do.' }
        ]
      },
      eli5: {
        title: 'Why old bonds go on sale.',
        body: [
          'A bond is an IOU with fixed payments. If new IOUs start paying 5% and yours pays 3%, <strong>nobody buys yours at full price</strong> — it has to go on sale until its buyer earns 5% too. Rates up, price down. Always.',
          'The <strong>yield curve</strong> is just the price of waiting, listed by how long you wait. And the extra yield on a company IOU over a government one is the market whispering <strong>how likely it thinks you are to not pay</strong>.'
        ]
      }
    },
    m05: {
      id: 'm05', number: '05', topic: 'Portfolio Theory & the CAPM',
      title: 'Beta and the CAPM',
      hint: 'Diversification kills firm-specific risk for free — so the market only pays you for the risk that survives.',
      kicker: 'Silva · Expected return is linear in beta only: r̄ᵢ = r_f + βᵢ(r̄ₘ − r_f).',
      coreIdea: {
        text: 'Hold one stock and you carry all its drama. Hold fifty and the firm-specific noise cancels — what survives is co-movement with the whole market, and that is beta. Because diversification is free, markets do not pay for risk you could cancel yourself. The CAPM turns this into a price: required return equals the risk-free rate plus beta times the market premium. That line prices every project in the course.',
        attr: 'after Silva, Portfolio Theory & the CAPM'
      },
      diagram: {
        type: 'scatter',
        title: 'The Security Market Line.',
        intro: 'Every priced asset plots on one line: beta in, required return out. Off the line is mispricing — briefly.',
        xLabel: 'beta (systematic risk)',
        yLabel: 'expected return',
        note: 'SML'
      },
      frameworks: [
        {
          name: 'Diversification',
          author: 'after Markowitz',
          components: ['Idiosyncratic risk → cancels', 'Systematic risk → remains', 'Correlation drives the math'],
          rule: 'Standard deviation is not the risk of a priced stock — only the undiversifiable part earns a premium.'
        },
        {
          name: 'Beta',
          author: 'Sharpe · Treynor lineage',
          components: ['Cov(rᵢ, rₘ) / Var(rₘ)', 'Market = 1', 'Defensive < 1 < cyclical'],
          rule: 'Beta measures how much market risk an asset adds to a diversified portfolio — that, not volatility, is what gets priced.'
        },
        {
          name: 'CAPM / Security Market Line',
          author: 'Sharpe · Lintner',
          components: ['r_f', 'β', 'Market risk premium'],
          rule: 'Required return is linear in beta only — the model behind every discount rate you will defend to a board.'
        }
      ],
      apply: {
        title: 'Setting a discount rate you can defend.',
        steps: [
          { strong: 'Start from the project, not the firm.', rest: 'The beta you need is the beta of the cash flows being priced.' },
          { strong: 'Estimate beta from comparables.', rest: 'Pure-play traded firms in the same business, unlevered — next module makes this mechanical.' },
          { strong: 'Pick the premium and declare it.', rest: 'A 1% change in the market risk premium moves valuations more than most modelling debates.' },
          { strong: 'Refuse volatility arguments.', rest: '"This stock is risky, it swings 40%" prices nothing if the swings are diversifiable.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Berk & DeMarzo · Corporate Finance, Ch. 10–12',
        title: 'From volatility to beta to the cost of capital.',
        prose: 'The full chain the videos compress: why diversification changes what risk means, how beta is estimated in practice, and where the CAPM’s assumptions creak. Worth reading before you ever unlever a comparable.'
      },
      eli5: {
        title: 'The umbrella-and-ice-cream portfolio.',
        body: [
          'Own an ice-cream stand and your income swings with the weather. Add an umbrella stand and the swings <strong>cancel each other out</strong> — same businesses, calmer total. That cancelling is free, so the market refuses to pay extra for risk you could cancel yourself.',
          'What cannot be cancelled is the risk that hits <strong>everything at once</strong> — recessions. Beta measures how hard a stock leans into those. The CAPM is just the market’s posted rate card: more beta, more required return. Nothing else earns a premium.'
        ]
      }
    },
    m06: {
      id: 'm06', number: '06', topic: 'WACC & Company Valuation',
      title: 'WACC',
      hint: 'One number blends what all your investors require — and it is the right discount rate only for projects that look like the firm.',
      kicker: 'Silva · WACC is the cost of the firm’s average asset. The trap is using it for projects that are not average.',
      coreIdea: {
        text: 'Debt and equity holders each require a return; WACC blends the two at market-value weights, with debt tax-adjusted because interest shields profit. It discounts unlevered free cash flow into enterprise value. The trap is scope: WACC prices the firm’s average risk. For a division, a private firm, or an unusual project, unlever a pure-play comparable’s beta, relever to the target, and build the rate from there.',
        attr: 'after Silva, WACC and company valuation'
      },
      diagram: {
        type: 'equation',
        title: 'The blended price of capital.',
        intro: 'Market-value weights, always. The (1 − τ) is the tax shield showing up in the rate — never in the cash flows too.',
        lhs: 'WACC',
        rhs: '(E/V)·r_E + (D/V)·r_D·(1 − τ)'
      },
      frameworks: [
        {
          name: 'WACC Identity',
          author: 'standard corporate finance',
          components: ['Market-value weights', 'Cost of equity via CAPM', 'After-tax cost of debt'],
          rule: 'Blend at market values and tax-adjust the debt leg — book weights and coupon rates both produce confident nonsense.'
        },
        {
          name: 'Unlever / Relever Beta',
          author: 'pure-play method',
          components: ['Comparable equity beta', 'Strip its leverage → asset beta', 'Relever at target D/E'],
          rule: 'Asset betas travel across firms; equity betas do not — always move risk through the unlevered form.'
        },
        {
          name: 'Divisional Cost of Capital',
          author: 'after Silva',
          components: ['Per-division comparables', 'Division-specific WACC', 'Firm WACC ≠ cost of assets'],
          rule: 'One firm-wide rate subsidises risky divisions and starves safe ones — capital flows to the wrong place by construction.'
        }
      ],
      apply: {
        title: 'Building a WACC that survives review.',
        steps: [
          { strong: 'Weight at market values.', rest: 'Equity at market cap, debt at market or fair value. Book equity is history, not price.' },
          { strong: 'Build r_E from a relevered asset beta.', rest: 'Comparables → unlever → median → relever at the target capital structure.' },
          { strong: 'Take r_D from current yields.', rest: 'The rate the firm would pay today — not the coupon on debt issued years ago.' },
          { strong: 'Match the rate to the asset.', rest: 'New business line? Different country risk? Rebuild the WACC; do not reuse the house number.' }
        ]
      },
      eli5: {
        title: 'The blended interest rate on everything you owe everyone.',
        body: [
          'A company runs on two kinds of money: borrowed (cheaper, and the tax office gives a discount on the interest) and shareholders’ (pricier, because they get paid last). <strong>WACC is the blended rate</strong> across both, weighted by how much of each you use.',
          'Any project must clear that blended bar or it makes your investors poorer. One catch: it is the bar for your <strong>average</strong> project. Using the company-wide bar for a wildly different venture is how safe divisions end up subsidising reckless ones.'
        ]
      }
    },
    m07: {
      id: 'm07', number: '07', topic: 'Company Valuation',
      title: 'Enterprise DCF',
      hint: 'Value the operations first, then split the pie: enterprise value minus net debt is what the equity is worth.',
      kicker: 'Hennessy · Equity value is Enterprise Value minus net debt — the discipline is not double-counting.',
      coreIdea: {
        text: 'Company valuation is project valuation grown up. Forecast unlevered free cash flow, discount at WACC, close the horizon with a terminal value — that is enterprise value, the worth of operations to all claimants. Subtract net debt for equity. Multiples are the cross-check, not the method. And the standard machinery silently assumes diversified owners and liquid shares; control, illiquidity and tunneling adjustments exist because reality often breaks both.',
        attr: 'after Hennessy, Company Valuation Summary'
      },
      diagram: {
        type: 'flow',
        title: 'From forecast to equity value.',
        intro: 'The order is not negotiable. Most valuation errors are steps done out of sequence or counted twice.',
        steps: [
          { label: 'Forecast FCF', desc: 'Unlevered free cash flow over an explicit horizon — usually five to ten years of defensible line items.' },
          { label: 'Terminal value', desc: 'A growing perpetuity (or exit multiple) for everything beyond the horizon. Routinely most of the value — treat g with suspicion.' },
          { label: 'Discount at WACC', desc: 'The blended rate from Module 6. The debt tax benefit lives here, not in the cash flows.' },
          { label: 'Enterprise Value', desc: 'The operations, priced for all claimants. Cross-check against comparable-company multiples.' },
          { label: '− Net debt → Equity', desc: 'Debt minus cash, at market value. What remains belongs to shareholders.' }
        ]
      },
      frameworks: [
        {
          name: 'EV–Equity Bridge',
          author: 'standard valuation',
          components: ['Enterprise value', 'Net debt', 'Equity value'],
          rule: 'Value operations for everyone, then subtract the lenders’ claim — mixing the two levels is the classic double-count.'
        },
        {
          name: 'DCF vs Multiples',
          author: 'after Hennessy',
          components: ['Intrinsic: FCF + WACC + terminal value', 'Relative: EV/EBITDA, P/E of comparables', 'Triangulate'],
          rule: 'DCF gives the reasoning, multiples give the market check — a valuation quoting only one is half a valuation.'
        },
        {
          name: 'Ownership Adjustments',
          author: 'control & liquidity effects',
          components: ['Control premium', 'Minority & illiquidity discounts', 'Tunneling risk'],
          rule: 'Standard DCF assumes diversified owners and liquid shares — price the deviation when valuing stakes, not textbook firms.'
        }
      ],
      apply: {
        title: 'Reviewing a valuation before you sign it.',
        steps: [
          { strong: 'Find the terminal value share.', rest: 'If 80% of value sits past the forecast, the model is mostly one growth assumption. Stress it.' },
          { strong: 'Check g against gravity.', rest: 'A firm growing faster than the economy forever eventually is the economy. Cap g accordingly.' },
          { strong: 'Hunt the double-count.', rest: 'Interest in the FCF, or debt subtracted twice — the two commonest ways to destroy a model quietly.' },
          { strong: 'Triangulate with multiples.', rest: 'If your DCF says 14× EBITDA and peers trade at 8×, the burden of proof is yours.' }
        ]
      },
      eli5: {
        title: 'Price the whole house, then subtract the mortgage.',
        body: [
          'To value a company, first price the whole business as if nobody owed anything — add up the cash it will generate, shrunk back to today. That is <strong>enterprise value: the house</strong>.',
          'The shareholders do not own the house free and clear; the bank has a claim. <strong>Subtract the mortgage (net debt) and what is left is the equity.</strong> Most valuation disasters are someone accidentally counting the mortgage twice — or forgetting it entirely.'
        ]
      }
    },
    m08: {
      id: 'm08', number: '08', topic: 'Application (Nike, Marriott & Yahoo cases)',
      title: 'One WACC Is Never Enough',
      hint: 'Three cases, one lesson: the cost of capital is a construction, and every construction choice moves the answer.',
      kicker: 'Darden · Nike’s verdict hinges on WACC construction choices, not on any single “right” number.',
      coreIdea: {
        text: 'Nike shows the mechanics bite: book versus market weights, stale versus current yields, which beta — each choice moves the valuation, and the analyst’s error is using any of them uncritically. Marriott shows one firm-wide WACC misallocating capital across three different-risk divisions. Yahoo shows a firm whose value is mostly stakes in other firms: value the parts, subtract, and read what the market thinks the core is worth.',
        attr: 'after the Nike, Marriott & Yahoo! case set'
      },
      diagram: {
        type: 'network',
        title: 'Three cases orbiting one question.',
        intro: 'What is the right cost of capital — and right for what, exactly?',
        center: 'COST OF CAPITAL',
        satellites: [
          { label: 'NIKE' },
          { label: 'MARRIOTT' },
          { label: 'YAHOO!' }
        ]
      },
      frameworks: [
        {
          name: 'WACC Construction Audit',
          author: 'Nike · Darden UV0010',
          components: ['Market weights', 'Current debt yields', 'Defensible beta window'],
          rule: 'Before debating the answer, audit the inputs — most WACC disagreements are construction errors wearing opinion’s clothes.'
        },
        {
          name: 'Divisional Hurdle Rates',
          author: 'Marriott case',
          components: ['Per-division comparables', 'Division WACCs', 'Capital allocation'],
          rule: 'A single hurdle rate taxes safe divisions to subsidise risky ones — the misallocation is systematic, not random.'
        },
        {
          name: 'Sum-of-the-Parts & Stub',
          author: 'Yahoo! case',
          components: ['Value each stake separately', 'Subtract from market cap', 'Read the stub'],
          rule: 'When a firm is mostly stakes, the interesting number is the stub — what the market implicitly pays for the core business.'
        }
      ],
      apply: {
        title: 'Running the case method on your own firm.',
        steps: [
          { strong: 'Rebuild your house WACC from scratch.', rest: 'Market weights, today’s yields, a beta you can defend. Compare to the official number.' },
          { strong: 'Ask who wins under one hurdle rate.', rest: 'The riskiest division always loves the firm-wide WACC. That enthusiasm is the tell.' },
          { strong: 'Sum the parts of anything diversified.', rest: 'Stakes, excess cash, non-core assets — value separately, then see what the core is really priced at.' }
        ]
      },
      eli5: {
        title: 'One thermostat for a house with three climates.',
        body: [
          'Marriott ran hotels, contract services and restaurants — three businesses with different risk. Using one company-wide discount rate is like <strong>one thermostat for a greenhouse, a freezer room and a lounge</strong>: every room ends up wrong.',
          'Nike adds the quieter lesson: two analysts with the same data can build different WACCs, and <strong>the construction choices — not the formula — decide the verdict</strong>. Yahoo adds the party trick: subtract the pieces a company owns of other companies, and see what the market pays for the actual business. Sometimes it is almost nothing.'
        ]
      }
    },
    m09: {
      id: 'm09', number: '09', topic: 'Optimal Financing',
      title: 'Capital Structure: MM to Trade-off',
      hint: 'Start where financing is irrelevant, then add taxes and distress back one at a time — the optimum lives between them.',
      kicker: 'Hennessy · MM is a benchmark, not advice: leverage matters only through taxes, distress and incentives.',
      coreIdea: {
        text: 'Modigliani–Miller proves that in a perfect market the debt–equity split cannot change firm value — slicing the pizza differently bakes no more pizza. That is the benchmark, not the advice. Taxes tilt toward debt by the PV of the interest tax shield; financial distress costs push back; debt overhang shows over-levered firms rationally skipping good projects. The trade-off theory sets leverage where the marginal shield meets marginal distress.',
        attr: 'after Hennessy, Lecture on Financing'
      },
      diagram: {
        type: 'curve-invertedU',
        title: 'The trade-off theory in one curve.',
        intro: 'Tax shields lift firm value as leverage rises — until expected distress costs bend it back down.',
        xAxis: 'leverage (D/E)',
        yAxis: 'firm value',
        peakLabel: 'optimal leverage'
      },
      frameworks: [
        {
          name: 'Modigliani–Miller Irrelevance',
          author: 'Modigliani & Miller, 1958',
          components: ['Perfect markets', 'V_L = V_U', 'Leverage repackages risk, not value'],
          rule: 'If leverage seems to create value, name the imperfection doing the work — MM guarantees there is one.'
        },
        {
          name: 'Interest Tax Shield',
          author: 'MM with taxes',
          components: ['Interest deductibility', 'PV of shield ≈ τ·D (perpetual)', 'Captured in WACC'],
          rule: 'Debt’s advantage is exactly the PV of taxes not paid — no more, and only while there is profit to shield.'
        },
        {
          name: 'Trade-off Theory & Debt Overhang',
          author: 'incl. Myers, 1977',
          components: ['Distress costs cap leverage', 'Optimal D/E at the margin', 'Overhang: NPV>0 projects skipped'],
          rule: 'Past the peak, leverage destroys value twice — through expected distress and through the good projects the overhang kills.'
        }
      ],
      apply: {
        title: 'Sizing leverage for a real firm.',
        steps: [
          { strong: 'Start from MM and name the frictions.', rest: 'Taxes, distress, agency. If none apply, the financing debate is theatre.' },
          { strong: 'Estimate the shield honestly.', rest: 'It is only worth τ·D while profits exist to shield — cyclical firms carry smaller effective shields.' },
          { strong: 'Price distress before it prices you.', rest: 'Customers, suppliers and engineers flee a shaky balance sheet long before default.' },
          { strong: 'Check for overhang.', rest: 'If new projects mostly bail out old lenders, shareholders will rationally starve good investments.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Berk & DeMarzo · Corporate Finance, Ch. 14–16',
        title: 'Capital structure from irrelevance to trade-off, with the proofs.',
        prose: 'The clean derivation of MM, the tax-shield arithmetic, and the distress-cost evidence the lecture compresses into a curve. Read Chapter 16 for why the peak of that curve is wide, not a point.'
      },
      eli5: {
        title: 'Slicing pizza and playing with fire.',
        body: [
          'MM’s insight: cutting a pizza into more slices does not create more pizza. Splitting the same business between lenders and shareholders <strong>cannot by itself change what the business is worth</strong>.',
          'The real world adds two things. The tax office <strong>subsidises borrowing</strong> — interest is deductible, so debt bakes a slightly bigger pizza. But too much debt and the kitchen catches fire: customers flee, talent leaves, good projects die. Optimal leverage is where the subsidy still beats the fire risk.'
        ]
      }
    },
    m10: {
      id: 'm10', number: '10', topic: 'Optimal Financing (continued)',
      title: 'The Pecking Order',
      hint: 'Watch what firms do, not what the trade-off says: internal cash first, then debt, equity only as a last resort.',
      kicker: 'Hennessy · Profitable firms borrowing least is the fact the trade-off theory cannot explain — the pecking order can.',
      coreIdea: {
        text: 'Managers know more than markets, and financing choices leak that knowledge. Issue equity and investors infer the shares are dear — the price drops on the announcement itself. So firms fund in order: internal cash, then debt, equity last. It explains why the most profitable firms borrow least. Agency costs cut both ways: debt disciplines managers who waste free cash, and tempts shareholders near distress into asset substitution.',
        attr: 'after Hennessy, financing & distress lectures'
      },
      diagram: {
        type: 'linear',
        title: 'The financing queue.',
        intro: 'Each step down the queue leaks more information and costs more. Firms descend only as far as they must.',
        steps: [
          'Internal cash',
          'Debt',
          'Hybrids',
          'Equity — last'
        ]
      },
      frameworks: [
        {
          name: 'Pecking Order',
          author: 'Myers & Majluf, 1984',
          components: ['Asymmetric information', 'Adverse selection in equity', 'Internal → debt → equity'],
          rule: 'Selling shares tells the market you think they are overpriced — so equity is the financing of last resort.'
        },
        {
          name: 'Issuance as Signal',
          author: 'signalling literature',
          components: ['Announcement effects', 'Equity issues → price drop', 'Buybacks & debt → confidence'],
          rule: 'The financing announcement is information before a single dollar moves — price the signal, not just the security.'
        },
        {
          name: 'Agency Costs of Debt & Equity',
          author: 'incl. Jensen, 1986',
          components: ['Free-cash-flow discipline', 'Asset substitution near distress', 'Value of financial slack'],
          rule: 'Debt is both the discipline that stops empire-building and the hazard that tempts gambling — dose accordingly.'
        }
      ],
      apply: {
        title: 'Choosing how to fund the next big move.',
        steps: [
          { strong: 'Exhaust boring money first.', rest: 'Retained earnings carry no announcement effect and no fees. Use them.' },
          { strong: 'Price the signal before the security.', rest: 'An equity issue at a "fair" price still costs the announcement drop. Budget for it.' },
          { strong: 'Keep slack for the option value.', rest: 'Unused debt capacity is the ability to move fast later — worth real money in a downturn.' },
          { strong: 'Watch incentives near distress.', rest: 'Levered shareholders love long shots with lenders’ money. Covenants exist because of you.' }
        ]
      },
      eli5: {
        title: 'Why selling shares feels like a used-car ad.',
        body: [
          'You know your car better than any buyer. So the moment you volunteer to sell, buyers wonder what you know that they do not — and bid less. <strong>Companies issuing shares face the same suspicion</strong>: management knows the business best, so “we’re selling equity” reads as “we think it’s expensive”.',
          'That is why firms spend their own cash first, borrow quietly second, and <strong>only sell shares when they must</strong>. The order of the queue is itself the message.'
        ]
      }
    }
  }
};

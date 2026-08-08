// GE · CD56 · The Global Economic Environment · LBS Faculty
module.exports = {
  code: 'ge',
  courseCode: 'CD56',
  courseName: 'The Global Economic Environment',
  courseShort: 'GE',
  courseDisplayName: 'The Global Economic Environment',
  courseAccent: '--c-ge',
  professor: 'LBS Faculty',
  frameworksTag: 'Frameworks in this module',
  frameworksHeading: 'Named ideas to remember.',
  school: 'London Business School',
  cohort: 'EMBA Dubai 2027',
  arc: {
    tagline: 'One question. Five modules.',
    pullquote: 'Measure the economy honestly, explain why some countries are rich, and mind the money underneath.',
    attr: 'the course, told in one line',
    blocks: [
      { label: 'I · Measure', modules: ['m01'] },
      { label: 'II · Why nations are rich', modules: ['m02', 'm03', 'm04'] },
      { label: 'III · Money', modules: ['m05'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Measurement',
      title: 'GDP, Three Ways',
      hint: 'Before comparing economies, know what GDP counts, how it is counted, and what it deliberately leaves out.',
      kicker: 'after Kuznets · expenditure, income, value added · one flow, three lenses, known blind spots.',
      coreIdea: {
        text: 'Everything an economy produces can be counted three equivalent ways: what buyers spend, what workers and owners earn, and the value each producer adds. The result is GDP, and per head at purchasing power parity it is the working proxy for living standards. It measures market production, not welfare: free goods, home production, pollution and inequality all sit outside the number, by construction.',
        attr: 'after Kuznets and the national accountants'
      },
      diagram: {
        type: 'equation',
        title: 'The national income identity.',
        intro: 'The expenditure lens: consumption, investment, government purchases, net exports. The same Y re-emerges as labour plus capital income, and as the sum of value added down the chain — the module\'s lumber-mill example lands on $4,000 all three ways.',
        lhs: 'Y',
        rhs: 'C + I + G + NX'
      },
      frameworks: [
        {
          name: 'Three Approaches to GDP',
          author: 'national accounting tradition',
          components: ['Expenditure: C + I + G + NX', 'Income: labour income + capital income', 'Value added: summed over every producer'],
          rule: 'Spending is income is value added — if your three answers differ, you double-counted an intermediate good.'
        },
        {
          name: 'Real GDP & PPP',
          author: 'Penn World Table tradition',
          components: ['Nominal vs real (base-year prices)', 'Purchasing power parity across countries', 'GDP per capita as the standard proxy'],
          rule: 'Correct for inflation over time and price levels across borders — India is $2.7T at market rates and $10.5T at PPP.'
        },
        {
          name: 'GDP\'s Blind Spots',
          author: 'CD56 Module 1',
          components: ['Consumer surplus (free digital goods)', 'Non-market and underground activity', 'Externalities priced at zero', 'Distribution invisible in a total'],
          rule: 'GDP counts what is priced. Any welfare conclusion needs at least one measure it does not contain.'
        },
        {
          name: 'Models over Data',
          author: 'CD56 Module 1',
          components: ['Correlation is not causality', 'Counterfactuals are never observed', 'Deliberate simplification as a feature'],
          rule: 'Policy questions are counterfactual questions, and only a model can hold the rest of the world fixed.'
        }
      ],
      apply: {
        title: 'When someone quotes a GDP number at you.',
        steps: [
          { strong: 'Ask real or nominal.', rest: 'A growth figure that includes inflation is a price story wearing a production costume.' },
          { strong: 'Ask market rates or PPP.', rest: 'Cross-country league tables flip depending on the answer — India is 3% of world GDP one way and 8% the other.' },
          { strong: 'Divide by people.', rest: 'Totals flatter big countries. Living standards are always per capita.' },
          { strong: 'Name what the number misses.', rest: 'Free apps, home work, pollution, who actually gets the income. If the argument depends on one of these, GDP cannot settle it.' },
          { strong: 'Separate measurement from causation.', rest: 'The data says what happened. Why it happened, and what a policy would change, needs a model.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · CD56 Module 1 · digital module',
        title: 'From measurement to theory.',
        prose: 'The module\'s quiet centrepiece is a ranking exercise: order ten countries by happiness knowing only GDP per capita. Israel, at $46K, outranks Singapore at $133K — the correlation between income and well-being is steep for poor countries and weak for rich ones. One estimate puts WhatsApp\'s uncounted consumer surplus near 1% of Dutch GDP. GDP remains the best single number we have; the module\'s point is to know exactly what kind of number it is.',
        kicker: 'GDP is a measure of production wearing a welfare costume. Useful — as long as nobody forgets the costume.'
      },
      eli5: {
        title: 'Judging a family by its shopping receipts.',
        body: [
          'GDP adds up everything a country buys and sells. That is like judging a household by its receipts: it captures a lot, and you can compare this month to last month once you strip out price rises.',
          'But receipts miss the meals cooked at home, the free games the kids play, the smoke the neighbouring factory pumps into the garden, and whether one person keeps all the pocket money.',
          'So economists use the receipts — carefully. Per person, inflation-adjusted, price-level-adjusted, and with a list of what the receipts can never show.'
        ]
      }
    },
    m02: {
      id: 'm02', number: '02', topic: 'Accumulation',
      title: 'The Solow Model',
      hint: 'Machines and diplomas obey diminishing returns — investment lifts the plateau; only productivity keeps the climb going.',
      kicker: 'Solow · diminishing returns · every investment-only growth story ends at a steady state.',
      coreIdea: {
        text: 'Economies grow by adding capital, people and productivity, and capital is the treacherous one: each extra machine adds less than the last. Investment-led growth therefore fades, stopping where new investment merely replaces depreciation — the steady state. That single mechanism explains post-war catch-up, China\'s slowdown, and why savings rates set income levels rather than long-run growth. Escaping it takes productivity, not more machines.',
        attr: 'after Solow'
      },
      diagram: {
        type: 'linear',
        title: 'The gravity of diminishing returns.',
        intro: 'The Solow conveyor. Investment builds capital, returns on each new unit shrink, and growth halts where investment only covers wear and tear. TFP growth is the one force that restarts the belt.',
        steps: [
          'Invest',
          'Accumulate',
          'Diminish',
          'Steady state'
        ]
      },
      frameworks: [
        {
          name: 'Solow Growth Model',
          author: 'Solow, 1956',
          components: ['Cobb-Douglas: Y = TFP × K^α × L^(1−α)', 'Diminishing marginal product of capital (α < 1)', 'Steady state where s·Y = δ·K', 'Convergence: capital-poor grows faster'],
          rule: 'Fast growth at low capital, zero at the steady state — sustained growth means overcoming decreasing returns.'
        },
        {
          name: 'Growth Accounting',
          author: 'Solow residual tradition',
          components: ['Capital share α ≈ 0.30–0.35', 'Contributions of capital, labour, TFP', 'TFP as the residual'],
          rule: 'Split observed growth into inputs and residual; the residual is where the long-run story lives — and it is as important as capital in explaining cross-country gaps.'
        },
        {
          name: 'Talent Allocation as Growth',
          author: 'Hsieh, Hurst, Jones & Klenow · Econometrica 2019',
          components: ['Human capital as an accumulable factor', 'Barriers: discrimination, access to education', 'Allocation of talent to the right jobs'],
          rule: 'Falling barriers to talent explain 20–40% of US per-capita growth since 1960 — allocation is a growth policy, not just fairness.'
        }
      ],
      apply: {
        title: 'Reading any country\'s growth story.',
        steps: [
          { strong: 'Locate it on the capital curve.', rest: 'Capital-poor and growing fast is convergence, not genius. Capital-rich and slowing is the steady state arriving on schedule.' },
          { strong: 'Compare savings against depreciation.', rest: 'High savings buy a higher plateau — the level rises, the long-run growth rate does not.' },
          { strong: 'Decompose the growth.', rest: 'How much is capital, labour, TFP? Investment-heavy growth with a shrinking TFP term has an expiry date.' },
          { strong: 'Check where the talent goes.', rest: 'An economy that fences its best people out of its best jobs is leaving Hsieh-Hurst-Jones-Klenow growth on the table.' },
          { strong: 'Ask what moves TFP.', rest: 'Once near the steady state, only productivity sustains growth — which is the next module\'s question.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Hsieh, Hurst, Jones & Klenow · Econometrica 2019',
        title: 'The Allocation of Talent and US Economic Growth.',
        prose: 'In 1960, 94% of American doctors were white men; by 2008, 63%. The paper treats that shift as a reallocation of talent — people who would have been brilliant doctors or lawyers were previously farming or typing — and estimates that falling barriers explain 20–40% of US per-capita growth over fifty years. It is the module\'s sharpest lesson: human capital is not just how much you train, but where the trained are allowed to go.',
        kicker: 'Half a century of growth, and up to two-fifths of it was simply letting talent through the door.'
      },
      eli5: {
        title: 'The farm that bought too many tractors.',
        body: [
          'The first tractor transforms the farm. The second helps. The tenth mostly waits its turn, and by the twentieth you are spending the whole harvest just keeping tractors repaired. That is diminishing returns, and it happens to whole economies.',
          'A country with few machines grows fast by adding them — that is why war-flattened Europe and 1990s China boomed. A country full of machines gets almost nothing from one more; it coasts at its steady state.',
          'Saving more buys a bigger farm, not a faster-growing one. The only way to keep growing forever is to farm smarter — better seeds, better methods. That is productivity, and it is the next module.'
        ]
      }
    },
    m03: {
      id: 'm03', number: '03', topic: 'Productivity',
      title: 'TFP & the Long Shadow',
      hint: 'Half the income gap between countries is not machines but how well they are used — institutions, history, and the frontier.',
      kicker: 'TFP = technology × efficiency · institutions decide what your machines are worth.',
      coreIdea: {
        text: 'Rich countries are not just better equipped; they use what they have better. That residual — total factor productivity — bundles the technology frontier with the efficiency of everything around it: courts, schools, finance, stability. Institutions are causal, not decorative: Korea split in 1950 and diverged tenfold on the same peninsula. And because ideas are non-rival, technology is the one input that escapes diminishing returns.',
        attr: 'after the CD56 Module 3 material'
      },
      diagram: {
        type: 'network',
        title: 'What hides inside the residual.',
        intro: 'TFP is measured as what is left over after capital and labour — but it is not a mystery. Each satellite is a channel that raises or wastes the output of the same machines and people.',
        center: 'TFP',
        satellites: [
          { label: 'TECHNOLOGY' },
          { label: 'RULE OF LAW' },
          { label: 'TALENT & SCHOOLS' },
          { label: 'FINANCE' },
          { label: 'STABILITY' },
          { label: 'HISTORY' }
        ]
      },
      frameworks: [
        {
          name: 'TFP: Frontier and Catch-up',
          author: 'CD56 Module 3',
          components: ['Technology: pushing the frontier out', 'Efficiency: operating closer to it', 'Low TFP = inferior tech OR wasted resources'],
          rule: 'A country can grow by inventing or by fixing how it uses what already exists — most countries have more room in the second.'
        },
        {
          name: 'Institutions as Deep Cause',
          author: 'institutional economics · North & South Korea as the experiment',
          components: ['Rule of law, regulation, finance, social insurance', 'Natural experiments over correlations', 'Aid without institutions gets consumed'],
          rule: 'Same people, same geography, different rules: a tenfold income gap in two generations. Machines pay off only inside good institutions.'
        },
        {
          name: 'Macro & Micro Inventions',
          author: 'Mokyr · Lever of Riches',
          components: ['GPTs: radical, rare, ab nihilo', 'Micro inventions: frequent refinements', 'Slow diffusion — decades, not quarters'],
          rule: 'Micro-refinements deliver most productivity; occasional GPTs reset the ceiling. Even electricity took forty years to show up in the numbers.'
        },
        {
          name: 'Displacement & Reinstatement',
          author: 'Acemoglu & Restrepo, 2019 · Autor, 2015',
          components: ['Displacement: machines take over tasks', 'Reinstatement: new tasks where labour keeps the edge', 'Polanyi\'s paradox: tacit skills resist automation'],
          rule: 'Automation is a race between the two effects. History has reinstated, which is why there are still so many jobs, but nothing guarantees the balance.'
        },
        {
          name: 'The Secular Stagnation Debate',
          author: 'Hansen 1938 · Rachel & Summers 2019 · Gordon vs the optimists',
          components: ['Symptoms: slowing growth, falling real rates', 'Gordon\'s six headwinds + Philippon\'s lost competition', 'Rebuttals: mismeasurement, J-curve diffusion'],
          rule: 'Hold both cases: R&D returns are falling (Bloom et al), but every GPT looked disappointing in its first decades.'
        }
      ],
      apply: {
        title: 'Diagnosing an economy (or a firm) that under-produces.',
        steps: [
          { strong: 'Split the gap: equipment or usage?', rest: 'If peers get more from the same inputs, your problem is TFP, and buying more inputs will not fix it.' },
          { strong: 'Audit the institutions.', rest: 'Contract enforcement, talent allocation, credit access, political stability — each one is a multiplier on everything else.' },
          { strong: 'Respect the long shadow.', rest: 'History constrains the menu: partitioned regions and extractive legacies do not reset because a plan says so.' },
          { strong: 'Fund ideas differently from machines.', rest: 'Ideas are non-rival and escape diminishing returns — R&D incentives matter most for economies near their steady state.' },
          { strong: 'Time technology soberly.', rest: 'Expect the J-curve: real gains from a GPT arrive after years of reorganisation, not in the quarter you adopt it.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Michalopoulos & Papaioannou · American Economic Review',
        title: 'The Long-Run Effects of the Scramble for Africa.',
        prose: 'Between 1870 and 1914, European control of Africa went from 10% to nearly 90%, with borders drawn in ignorance of what they cut through. Michalopoulos and Papaioannou — the latter LBS faculty — show the partition of ethnic homelands was as-good-as-random, then trace its consequences: partitioned ethnicities suffer more political violence and are poorer and less educated today. It is the course\'s cleanest demonstration that history is a causal force, not background colour.',
        kicker: 'Lines drawn on a map in 1885 still predict who is poor in 2025. That is what a long shadow means.'
      },
      eli5: {
        title: 'Two kitchens with the same oven.',
        body: [
          'Give two restaurants identical ovens and identical staff numbers. One turns out twice the meals. The difference is not equipment — it is recipes, organisation, trust between the cooks, and whether the head chef promotes the talented or the loyal.',
          'Countries work the same way. Korea split into two kitchens in 1950 with the same people and the same weather. The one with better rules now produces ten times more per person.',
          'And unlike ovens, recipes can be copied by everyone at once without wearing out. That is why ideas — not machines — are the only engine of growth that never runs out of road. The question this module leaves open is whether we are finding fewer good recipes than we used to.'
        ]
      }
    },
    m04: {
      id: 'm04', number: '04', topic: 'Trade & AI',
      title: 'Comparative Advantage',
      hint: 'Trade is positive-sum arithmetic; the politics come from who inside each country pays for the gains.',
      kicker: 'Ricardo 1817 · opportunity cost · positive-sum even when one side is better at everything.',
      coreIdea: {
        text: 'A country worse at producing everything still gains from trade, because what matters is opportunity cost, not absolute skill. Specialisation raises world output of every good; scale and competition multiply the gains. But the theories are silent on distribution, and that silence is the politics: gains spread thin across consumers, losses land hard on particular towns. AI is the same pattern arriving faster — bigger pie, concentrated shock.',
        attr: 'after Ricardo'
      },
      diagram: {
        type: 'linear',
        title: 'Three engines, one caveat.',
        intro: 'How trade enriches: Ricardo\'s specialisation, Krugman\'s economies of scale, Schumpeter\'s selection — the weak exit, the productive scale. The caveat: the last box is an average, and it says nothing about each town.',
        steps: [
          'Specialise',
          'Scale',
          'Select',
          'Richer'
        ]
      },
      frameworks: [
        {
          name: 'Comparative Advantage',
          author: 'Ricardo, 1817',
          components: ['Opportunity cost, not absolute productivity', 'Specialise where disadvantage is smallest', 'Gains from trade for both sides'],
          rule: 'In the course example North beats South at everything, yet specialisation lifts world output from 45 to 50 cars AND 150 to 200 tons of rice.'
        },
        {
          name: 'New Trade Theory',
          author: 'Krugman',
          components: ['Increasing returns to scale', 'Love of variety', 'Comparative advantage can be built'],
          rule: 'When scale drives cost, first movers lock in advantage — the intellectual license for Airbus-style industrial policy, and for its abuse.'
        },
        {
          name: 'The China Shock',
          author: 'Autor, Dorn & Hanson, 2013',
          components: ['Commuting-zone import exposure', 'Persistent local employment and wage damage', 'Aggregate gains, geographic losses'],
          rule: 'Trade\'s benefits are diffuse and its costs are local — which is why trade politics is always local politics.'
        },
        {
          name: 'AI\'s Jagged Frontier',
          author: 'Dell\'Acqua et al 2023 · Brynjolfsson et al 2025',
          components: ['Inside the frontier: skill gaps compress', 'Outside it: errors rise', 'Entry-level exposure where AI automates'],
          rule: 'AI lifts the less-experienced and trims the jobs juniors learn on — early-career employment in exposed occupations fell ~16% while totals grew.'
        }
      ],
      apply: {
        title: 'Before taking a side in any trade or AI policy argument.',
        steps: [
          { strong: 'Do the opportunity-cost arithmetic first.', rest: 'Absolute strength is irrelevant. Ask what each side gives up per unit — that alone sets who should make what.' },
          { strong: 'Name all three channels.', rest: 'Specialisation, scale, selection. A tariff argument that only mentions the first is missing two-thirds of the cost.' },
          { strong: 'Map the losers precisely.', rest: 'Aggregate welfare gains are real and so are hollowed-out towns. Policy credibility lives in acknowledging both.' },
          { strong: 'Treat strategic-industry claims with suspicion.', rest: 'New Trade Theory licenses subsidies in genuine increasing-returns industries — and gets quoted for every industry.' },
          { strong: 'Read AI evidence at two altitudes.', rest: 'Micro experiments show real gains; payroll data shows entry-level pain where AI automates. Both are true — so far.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Autor · IZA World of Labor',
        title: 'Trade and Labor Markets: Lessons from China\'s Rise.',
        prose: 'China\'s rise pulled hundreds of millions out of poverty and enriched the rich world in aggregate — while specific US commuting zones absorbed deep, persistent employment and wage losses. Autor\'s work turned "trade has distributional consequences" from a textbook aside into measured geography, one exposure dollar at a time. The parallel to AI is direct: the aggregate case is strong, the local shock is real, and pretending otherwise fuels the backlash.',
        kicker: 'The economy is not a place. The losses happen in places — and places vote.'
      },
      eli5: {
        title: 'The lawyer who still hires an assistant.',
        body: [
          'A star lawyer types faster than her assistant. She still hires one — every hour she spends typing is an hour not spent in court, where she earns fifty times more. Both are better off, even though she is better at both jobs.',
          'Countries work the same way. Even a country that is worse at making everything gains by making what it gives up least to produce, and trading for the rest. The world ends up with more of every good — the course example gets more cars AND more rice.',
          'The catch: "the country gains" is an average. The typing pool that lost the work is not the average. Trade — and now AI — makes the pie bigger while rearranging who holds the knife. Good policy takes the bigger pie and compensates the rearranged.'
        ]
      }
    },
    m05: {
      id: 'm05', number: '05', topic: 'Money & Inflation',
      title: 'Fiat, Multiplied',
      hint: 'Central banks control the base; profit-seeking banks create the rest — and 2% inflation is the porridge temperature.',
      kicker: 'Friedman, tempered · MV = PY · money is a belief with legal teeth.',
      coreIdea: {
        text: 'Modern money is inconvertible and intrinsically useless — a promise that works because taxes must be paid in it and everyone expects it to keep working. Central banks issue only the monetary base; commercial banks multiply it through lending, which is why banking crises are monetary events. Inflation should be low and stable — currently 2% — and while money growth drives inflation in the long run, the short run has many parents.',
        attr: 'after the CD56 Module 5 material'
      },
      diagram: {
        type: 'equation',
        title: 'The quantity theory, handled with care.',
        intro: 'Money times velocity equals prices times output — an identity, not a lever. Velocity moves, the central bank does not control the relevant M, and short-run inflation answers to costs and expectations too. In the long run, Friedman wins.',
        lhs: 'M × V',
        rhs: 'P × Y'
      },
      frameworks: [
        {
          name: 'Functions of Money',
          author: 'monetary economics canon · Wallace on fiat',
          components: ['Medium of exchange', 'Store of value', 'Unit of account', 'Legal tender + tax demand as the anchor'],
          rule: 'Fiat money is inconvertible and intrinsically useless; it works because someone always needs it to settle a debt the state will enforce.'
        },
        {
          name: 'The Money Multiplier',
          author: 'CD56 Module 5 · Brunnermeier & Koby on the floor',
          components: ['Outside money: cash + reserves', 'Inside money: deposits from lending', 'Multiplier = 1/r — until banks stop lending', 'Reversal rate: where cuts shrink lending (Repullo: bank-specific; euro-area sub-zero still worked)'],
          rule: '£100 of base becomes £1,000 of deposits at a 10% reserve ratio, or £0 when lending freezes — most money is a private-sector decision.'
        },
        {
          name: 'Goldilocks Inflation',
          author: 'the 2% consensus',
          components: ['Stable and low: costs vanish, planning works', 'High: shoe-leather and distorted prices', 'Deflation: also costly, policy paralysis', 'The 2% itself: born in a 1988 New Zealand TV remark, hardened into convention'],
          rule: 'Target low AND stable — far from hyperinflation, safely clear of deflation, with room for policy to manoeuvre.'
        },
        {
          name: 'The Flat Phillips Curve',
          author: 'Del Negro, Lenza, Primiceri & Tambalotti, 2020',
          components: ['Inflation decoupled from the cycle since the 1990s', 'Cause: muted pass-through of cost pressures, anchored expectations', 'MMT\'s opening: Kelton\'s deficits-until-inflation, Cochrane\'s rebuttal'],
          rule: 'Flatness is a policy achievement, not a law of nature: credible central banks earned it, deficits leaned on it, and 2021 showed it can snap back.'
        },
        {
          name: 'The Future of Money',
          author: 'Reichlin · Rey · Portes, 2025 · Fernández-Villaverde on competition',
          components: ['Bitcoin: fails the means-of-exchange test', 'CBDC: risk-free digital cash, cautious central banks', 'Stablecoins: fast, programmable, run-prone', 'Currency competition disciplines the sovereign, yet under-supplies money'],
          rule: 'The live contest is CBDC versus stablecoins; run risk and reserve opacity are the referee. Bitcoin is an asset, not money.'
        }
      ],
      apply: {
        title: 'Reading a monetary headline without being fooled.',
        steps: [
          { strong: 'Ask which money grew.', rest: 'Base money and broad money can move in opposite directions — QE proved a bigger base is not automatically more money in the economy.' },
          { strong: 'Check the multiplier\'s health.', rest: 'If banks are not lending, monetary expansion dies in reserves. Watch credit, not just the central bank\'s balance sheet.' },
          { strong: 'Split long run from short run.', rest: 'Sustained money growth means inflation eventually. This quarter\'s print answers to energy, supply chains and expectations.' },
          { strong: 'Take deflation seriously.', rest: 'Falling prices read as a discount and act as a disease — debt burdens grow, spending waits, policy loses traction.' },
          { strong: 'Judge new money by the old tests.', rest: 'Medium of exchange, store of value, unit of account. Apply the three functions to any token before the whitepaper applies its adjectives.' }
        ]
      },
      keyReading: {
        cite: 'Key reading · Reichlin · Project Syndicate, September 2025',
        title: 'Europe Needs a Euro Stablecoin.',
        prose: 'Reichlin — who teaches this course\'s central-banking session — argues stablecoins are inevitable: they provide programmable settlement rails a cautious CBDC will not, so the policy question is who issues them and against what reserves. Read alongside Rey on dollar dominance and Portes on multi-issuer run risk, it turns the course\'s money-multiplier logic loose on the newest form of inside money.',
        kicker: 'Private money is not new — deposits were always private promises. Stablecoins just changed the wrapper.'
      },
      eli5: {
        title: 'The ten-pound note that becomes a hundred.',
        body: [
          'You deposit £100. The bank keeps £10 in the vault and lends £90 to a baker, who pays a builder, who deposits it again. The bank keeps £9, lends £81. Run that forever and your £100 has become £1,000 of money in accounts — created not by the government, but by banks chasing loan profit.',
          'That is most of what money is: promises multiplied by confidence. Which is why a banking panic is not just a finance story — it makes money itself vanish.',
          'And inflation? A little, steady — 2% — keeps the machine oiled. Too much burns savings; falling prices jam the gears entirely. Central banking is mostly keeping the porridge at exactly the boring temperature.'
        ]
      }
    }
  }
};

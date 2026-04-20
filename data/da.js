// DA · CD62 · Data Analytics · Prof Kostis Christodoulou
module.exports = {
  code: 'da',
  courseCode: 'CD62',
  courseName: 'Data Analytics',
  courseShort: 'DA',
  courseDisplayName: 'Data Analytics',
  courseAccent: '--c-da',
  professor: 'Prof Kostis Christodoulou',
  frameworksTag: 'The tools on the bench',
  frameworksHeading: 'Ideas that pay rent.',
  school: 'London Business School',
  cohort: 'EMBA Dubai 2027',
  arc: {
    tagline: 'Uncertainty. Then inference. Then action.',
    pullquote: 'First learn to quantify what you do not know. Then use structured inference to narrow it. Then translate the narrowing into a decision.',
    attr: 'the course, in one line',
    blocks: [
      { label: 'I · Quantifying Uncertainty', modules: ['m01', 'm02'] },
      { label: 'II · Inference & Prediction', modules: ['m03', 'm04', 'm05'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Sampling & Confidence Intervals',
      title: 'The Range You Can Defend',
      hint: 'A point estimate is a guess. A confidence interval is a promise about a range.',
      kicker: 'Central Limit Theorem · Confidence Intervals · Standard Error.',
      coreIdea: {
        text: 'Every data-based decision rests on a sample. Every sample has noise. The central question of data analysis is not "what is the answer?" but "how wide is the range of plausible answers?" Confidence intervals give you that range in a defensible form — the standard error shrinks with sample size, and the interval widens with the confidence you demand.',
        attr: 'after the Central Limit Theorem'
      },
      diagram: {
        type: 'curve-invertedU',
        title: 'The sampling distribution.',
        intro: 'As n grows, the distribution of sample means tightens around the true population mean. That tightening is the standard error.',
        xAxis: 'sample mean',
        yAxis: 'probability',
        peakLabel: 'true mean'
      },
      frameworks: [
        { name: 'Central Limit Theorem', author: 'Statistical foundation', components: ['sample means → normal as n grows', 'SE = SD / √n'], rule: 'With n ≥ 30, the sampling distribution is normal regardless of source shape.' },
        { name: 'Confidence Intervals', author: 'Inferential statistics', components: ['point estimate ± margin of error', 'MoE = 2 × SE for 95%'], rule: 'A 95% CI means 95% of such intervals (over many samples) would contain the true parameter — not that there is a 95% probability this one does.' },
        { name: 'Standard Error', author: 'Sampling theory', components: ['SD of the sample mean', 'shrinks with √n'], rule: 'To halve the CI width, quadruple the sample.' }
      ],
      apply: {
        title: 'Reporting an uncertain number.',
        steps: [
          { strong: 'Compute the point estimate and SE.', rest: 'Mean, SD, n. Divide.' },
          { strong: 'Report the range, not the number.', rest: '"27,412 ± 1,750 bikes" tells the reader what you actually know.' },
          { strong: 'If the range is too wide, collect more data.', rest: 'There is no other lever.' }
        ]
      },
      eli5: {
        title: 'Asking 30 people what they\'ll spend.',
        body: [
          'The answer from 30 people is better than from 3, but it is not the truth. It is a sample.',
          'A confidence interval says: "based on these 30 answers, the true average is probably between £45 and £55." Wider interval = more honesty about what you do not know.'
        ]
      },
      keyReading: {
        cite: 'Key reading · OpenIntro Statistics · Chapter 4',
        title: 'Foundations for inference.',
        prose: 'The standard error is the most important number in practical statistics — more important than the mean. It is what lets you move from "here is a number" to "here is a range we can defend."',
        kicker: 'Report the range. Always.'
      }
    },

    m02: {
      id: 'm02', number: '02', topic: 'Business Experimentation',
      title: 'A/B Testing & Hypothesis Logic',
      hint: 'Random assignment kills confounding. Everything else is noise.',
      kicker: 'The only way to prove causation is to randomise.',
      coreIdea: {
        text: 'Correlation can never prove causation. A randomised experiment can. By assigning users to treatment and control by coin-flip, you make the two groups identical on average — so any difference in outcome has to come from the treatment. That one trick, first used by John Snow in 1854, is the backbone of modern A/B testing.',
        attr: 'after Snow, Fisher, and every growth team since'
      },
      diagram: {
        type: '2x2',
        title: 'Decision matrix.',
        intro: 'Two axes: is the null actually true, and did you reject it?',
        xAxis: { label: 'your decision', lo: 'fail to reject', hi: 'reject H₀' },
        yAxis: { label: 'truth', lo: 'H₀ false', hi: 'H₀ true' },
        quadrants: [
          { pos: 'tl', label: 'Correct (specificity)' },
          { pos: 'tr', label: 'Type I (false +)' },
          { pos: 'bl', label: 'Type II (false −)' },
          { pos: 'br', label: 'Correct (power)' }
        ]
      },
      frameworks: [
        { name: 'Hypothesis Test', author: 'Statistical inference', components: ['H₀ (default / null)', 't-statistic = (observed − expected) / SE', 'p-value', 'decision threshold'], rule: 'If |t| > 2 (roughly), reject H₀. Otherwise do not.' },
        { name: 'A/B Testing (RCT)', author: 'Causal inference standard', components: ['random assignment', 'treatment vs control', 'difference in means is the causal effect'], rule: 'Randomisation is the only antidote to confounding.' },
        { name: 'Type I vs Type II Error', author: 'Decision theory', components: ['Type I: false positive (α)', 'Type II: false negative (β)'], rule: 'Every threshold trades one off against the other. Pick deliberately.' }
      ],
      apply: {
        title: 'Running an experiment you will actually trust.',
        steps: [
          { strong: 'State H₀ in one sentence.', rest: '"The new button does not change click-through rate."' },
          { strong: 'Commit to sample size before starting.', rest: 'Peeking at results early destroys validity.' },
          { strong: 'Randomise the assignment.', rest: 'Not by date. Not by region. By coin-flip.' },
          { strong: 'Report effect size alongside p-value.', rest: 'Statistical significance is not business significance.' }
        ]
      },
      eli5: {
        title: 'Courtroom logic.',
        body: [
          'The null hypothesis is "not guilty." You need strong evidence (p < 0.05) to overturn it. If your data is more than 2 standard errors away from "no effect," you reject the null.',
          'A/B testing works because random assignment makes the two groups identical except for the treatment — so any difference in outcome must be caused by the thing you changed.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Uber Engineering + Snow (1854)',
        title: 'The power of randomised experiments.',
        prose: 'Snow\'s Broad Street pump analysis was the first use of quasi-random assignment to prove causation in public health. Every modern A/B testing stack is a digital re-run of the same logic.',
        kicker: 'Randomise or you will never know.'
      }
    },

    m03: {
      id: 'm03', number: '03', topic: 'Predictive Analytics I',
      title: 'Regression & Correlation',
      hint: 'Fit a line. Read the slope. Respect the residuals.',
      kicker: 'Correlation is direction; regression is magnitude.',
      coreIdea: {
        text: 'Correlation tells you whether two variables move together. Regression quantifies by how much, in what direction, per unit. The regression coefficient is the single most useful number in business analytics: "for every unit change in X, Y changes by b units, holding everything else constant." With that, you can predict, compare, and — if you controlled the right variables — start to argue about causation.',
        attr: 'after Galton & Fisher'
      },
      diagram: {
        type: 'scatter',
        title: 'Scatter, line and residual.',
        intro: 'The line is what you fit. The residuals are what you missed.',
        xLabel: 'x (years of experience)',
        yLabel: 'y (salary)',
        note: 'residual'
      },
      frameworks: [
        { name: 'Simple Linear Regression', author: 'OLS', components: ['y = a + b·x + ε', 'intercept a', 'slope b', 'residual ε'], rule: 'Minimise the sum of squared residuals. Slope = change in y per unit x.' },
        { name: 'Correlation', author: 'Pearson', components: ['r ∈ [−1, +1]', 'direction + strength'], rule: 'Correlation is not causation. Never.' },
        { name: 'Multiple Regression', author: 'Multivariate OLS', components: ['control for confounders', 'each coefficient isolates one effect', 'adjusted R² penalises complexity'], rule: 'Add variables for business logic, not for R².' },
        { name: 'Model Quality Checklist', author: 'Regression diagnostics', components: ['Adjusted R²', 'p-values and t-stats', 'coefficient signs', 'residual patterns'], rule: 'High R² + sensible signs + random residuals = a model you can defend.' }
      ],
      apply: {
        title: 'Building a usable regression.',
        steps: [
          { strong: 'Plot before you fit.', rest: 'Scatter plots reveal non-linearity, outliers, and clustering that equations hide.' },
          { strong: 'Start simple.', rest: 'One predictor, then add. Stop adding when Adjusted R² stops rising.' },
          { strong: 'Check the signs.', rest: 'If a coefficient\'s sign contradicts business sense, look for a confounder.' },
          { strong: 'Look at residuals.', rest: 'Patterns in residuals mean the model is missing something important.' }
        ]
      },
      eli5: {
        title: 'Salary vs. years of experience.',
        body: [
          'Plot each employee: years on the x-axis, salary on the y-axis. Fit a line. The line\'s slope says "each year of experience is worth £2,000." The scatter around the line is what other things (role, skill, luck) are doing.',
          'A good regression explains a lot of the scatter. A great one tells you which variables explain which part.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Session 3 · Christodoulou',
        title: 'Confounding and omitted-variable bias.',
        prose: 'If you regress exam score on study time alone, you might see a negative relationship — because smart students study less and still score higher. Add IQ as a control, and the real (positive) relationship appears. This is why multiple regression is essential for any causal claim.',
        kicker: 'Correlation without controls is a ghost story.'
      }
    },

    m04: {
      id: 'm04', number: '04', topic: 'Predictive Analytics II',
      title: 'Dummies, Interactions & Validation',
      hint: 'Encode categories. Allow slopes to differ. Train on one set, validate on another.',
      kicker: 'The shift from explaining yesterday to predicting tomorrow.',
      coreIdea: {
        text: 'Real data is categorical, conditional, and easy to overfit. Dummy variables encode categories into the regression. Interaction terms let a relationship differ by group — temperature might matter more in summer than winter. And the train/validate/test split is the one discipline that separates models that fit yesterday from models that predict tomorrow.',
        attr: 'after Hastie, Tibshirani & Friedman'
      },
      diagram: {
        type: 'curve-invertedU',
        title: 'Training vs validation error.',
        intro: 'Training error always falls as you add variables. Validation error falls, then rises. Stop at the bottom of the U.',
        xAxis: 'model complexity',
        yAxis: 'validation error',
        peakLabel: 'sweet spot'
      },
      frameworks: [
        { name: 'Dummy Variables', author: 'Categorical encoding', components: ['k categories → k−1 binary variables', 'reference category = all zeros', 'coefficient = gap vs reference'], rule: 'Interpret dummy coefficients as "difference from the reference group, other things equal".' },
        { name: 'Interaction Terms', author: 'Conditional effects', components: ['x₁ × x₂', 'effect of x₁ depends on x₂'], rule: 'Include interactions when business logic says one variable modulates another.' },
        { name: 'Overfit vs Underfit', author: 'Bias-variance tradeoff', components: ['Underfit: high bias, misses signal', 'Overfit: high variance, fits noise'], rule: 'Optimise validation error, never training error.' },
        { name: 'Train / Validate / Test', author: 'Model selection', components: ['Train ~60%: fit', 'Validate ~20%: tune', 'Test ~20%: final report'], rule: 'Never touch the test set until the end.' },
        { name: 'Lift & Gain Charts', author: 'Predictive evaluation', components: ['sort predictions', 'measure % of positives in top decile', 'lift = captured / base rate'], rule: 'Lift > 1 means your model beats random.' }
      ],
      apply: {
        title: 'Making a model generalise.',
        steps: [
          { strong: 'Add dummies for all categorical features.', rest: 'Region, product line, month, gender.' },
          { strong: 'Include interactions where business logic demands.', rest: '"Temperature effect differs by season" — let the slope differ.' },
          { strong: 'Hold out a validation set.', rest: '20% of the data. Never touch it during fitting.' },
          { strong: 'Report on the test set once.', rest: 'That is the number that predicts real-world performance.' }
        ]
      },
      eli5: {
        title: 'Memorising vs learning.',
        body: [
          'If you memorise every practice question, you will fail the real test, because the questions are different. Models do the same: a big enough model can "memorise" the training data perfectly — and then fail on new data.',
          'The validation set is the practice test you did not see while studying. It is the only honest signal of whether you actually learned.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Session 4 · Christodoulou',
        title: 'The bias-variance trade-off.',
        prose: 'Every model balances bias (missing the signal) against variance (fitting the noise). Adding complexity reduces bias but increases variance. The best model is not the most accurate on training data; it is the one that generalises best to new data.',
        kicker: 'Training error lies. Validation error tells the truth.'
      }
    },

    m05: {
      id: 'm05', number: '05', topic: 'Synthesis & Communication',
      title: 'From Data to Decision',
      hint: 'Statistical significance ≠ practical significance. Always ask both.',
      kicker: 'The last mile: turning confidence intervals into a board recommendation.',
      coreIdea: {
        text: 'An analytics project is only as good as the decision it enables. The final skill is translating a model into a recommendation a non-technical stakeholder can act on — emphasising the decision, the uncertainty, and the cost of being wrong. A model that is statistically significant but makes a £2 difference per transaction is a fascinating curiosity, not a £10M rollout.',
        attr: 'after decades of dashboards nobody used'
      },
      diagram: {
        type: 'linear',
        title: 'The analytics maturity ladder.',
        intro: 'Each rung requires the one below it.',
        steps: ['Raw', 'Reporting', 'Statistical', 'Predictive', 'Prescriptive']
      },
      frameworks: [
        { name: 'Analytics Workflow', author: 'Christodoulou', components: ['Problem → Data → Analysis → Action'], rule: 'Without the fourth step, it is homework.' },
        { name: 'Known-Unknowns', author: 'Strategic thinking', components: ['known-knowns', 'known-unknowns', 'unknown-knowns', 'unknown-unknowns'], rule: 'Use data to move unknowns into knowns. Guard against unknown-knowns (gut feels).' },
        { name: 'Data Maturity', author: 'Analytics leadership', components: ['raw → cleaned → statistical → predictive → prescriptive'], rule: 'Climb one rung at a time. Level 5 requires all four below.' },
        { name: 'Statistical vs Practical', author: 'Executive decision-making', components: ['significant: real, not noise', 'practical: worth the rollout'], rule: 'Both must be true before you act.' }
      ],
      apply: {
        title: 'Writing the one-page executive memo.',
        steps: [
          { strong: 'Lead with the decision.', rest: 'Not the method. The decision.' },
          { strong: 'State the uncertainty in business units.', rest: '"We are 95% confident profit is between £1.2M and £1.8M" — not t-statistics.' },
          { strong: 'Name the cost of being wrong.', rest: 'If the CI straddles breakeven, say so. Recommend a pilot, not a rollout.' },
          { strong: 'Leave equations in the appendix.', rest: 'The CFO is not impressed by your R².' }
        ]
      },
      eli5: {
        title: 'Translator between the data team and the CEO.',
        body: [
          'Data gives you "the mean difference is 3.2%, p = 0.03, CI [0.5, 5.9]". The CEO hears "maybe yes, maybe no, and I don\'t know what to do."',
          'Your job is the sentence that bridges them: "we are confident the new price will lift revenue — by something between 1% and 5%. At the low end it breaks even; at the high end it pays off in 8 months."'
        ]
      },
      keyReading: {
        cite: 'Key reading · Session 5 · Christodoulou',
        title: 'From data to decisions.',
        prose: 'Most analytics projects die in the hand-off. The best regression is worthless if it confuses the decision-maker. Simplicity, business context and honest communication of uncertainty are not optional — they are the whole deliverable.',
        kicker: 'What should we do? Always answer the question being asked.'
      }
    }
  }
};

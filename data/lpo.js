// LPO · CD53 · Leading People & Organisations · Prof Ben Hardy
module.exports = {
  code: 'lpo',
  courseCode: 'CD53',
  courseName: 'Leading People & Organisations',
  courseShort: 'LPO',
  courseDisplayName: 'Leading People & Organisations',
  courseAccent: '--c-lp',
  professor: 'Prof Ben Hardy',
  frameworksTag: 'Frameworks in this module',
  frameworksHeading: 'Named ideas to remember.',
  school: 'London Business School',
  cohort: 'EMBA Dubai 2027',
  arc: {
    tagline: 'Two blocks. Ten modules.',
    pullquote: 'The diagnose-first half teaches you to read an organisation; the second half teaches you to move it.',
    attr: 'the course, told in one line',
    blocks: [
      { label: 'I · Diagnose & Enable', modules: ['m01', 'm02', 'm03', 'm04', 'm05'] },
      { label: 'II · Influence & Lead',  modules: ['m06', 'm07', 'm08', 'm09', 'm10'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Executing Strategy',
      title: 'Congruence Analysis',
      hint: 'Align strategy, tasks, people, culture and PPS — friction is where they miss.',
      kicker: 'Nadler & Tushman · a five-element diagnostic for why strategy does not show up in results.',
      coreIdea: {
        text: 'When strategy does not show up in results, friction is living between the five elements. Your job is not to produce a better plan — it is to find the pair that is out of alignment and adjust until the work, the people and the culture can actually deliver the plan you already have.',
        attr: 'after Nadler & Tushman'
      },
      diagram: {
        type: 'pentagon', title: 'What to align.',
        intro: 'Each vertex is an element. Each line is a relationship you can test for friction.',
        vertices: [
          { label: 'Strategy', desc: 'the direction and how we will win' },
          { label: 'Tasks', desc: 'the work that needs doing' },
          { label: 'Culture', desc: 'shared beliefs and behaviours' },
          { label: 'People', desc: 'who does the work' },
          { label: 'PPS', desc: 'policies, process, systems' }
        ]
      },
      method: {
        title: 'Three steps. In order.',
        steps: [
          { num: '01', title: 'Describe', desc: 'Name the organisation or unit as it really is today — strategy, tasks, people, culture, PPS. Plain language. No wishful thinking.' },
          { num: '02', title: 'Analyse', desc: 'Walk each pair and ask: are these two congruent? Where they are not, friction is producing your symptom.' },
          { num: '03', title: 'Adjust', desc: 'Redesign the element that is causing the incongruence — not the element that is complaining. Then watch for second-order effects.' }
        ]
      },
      diagnostics: {
        tag: 'The eleven pairs', title: 'A question you can test.',
        intro: 'Each pair is a diagnostic. Ask the question. If the answer is "no", you have your incongruence and the adjustment tells you where to start.',
        rows: [
          { code: 's–t', q: 'Given the strategy, are these the right tasks?', fix: 'Redesign the work.' },
          { code: 's–p', q: 'Do people know the strategy? Are they committed to it?', fix: 'Share the strategy.' },
          { code: 's–c', q: 'Does the culture support the strategy?', fix: 'Adapt the culture to deliver the strategy.' },
          { code: 's–pps', q: 'Does PPS help people execute the strategy?', fix: 'Align the systems with the strategy.' },
          { code: 't–p', q: 'Do people have the right skills and motivations for the tasks?', fix: 'Place the right people.' },
          { code: 't–c', q: 'Does culture support doing the work to a high standard?', fix: 'Use culture to get work done.' },
          { code: 'c–p', q: 'Does the culture resonate with the people?', fix: 'Get culture to resonate.' },
          { code: 'pps–t', q: 'Does PPS motivate task performance?', fix: 'Redesign compensation to get the right results.' },
          { code: 'pps–t/p', q: 'Does PPS hire, promote and fire the right people doing the right things?', fix: 'Ensure those who do the work get the rewards.' },
          { code: 'pps–p', q: 'Does PPS develop people appropriately?', fix: 'Invest in development.' },
          { code: 'pps–c', q: 'Does PPS support the culture?', fix: 'Reward the culturally-appropriate behaviours.' }
        ]
      },
      apply: {
        title: 'The five steps you actually run.',
        intro: 'Used as the Module 1 individual assignment. Also the shape of any real-world diagnosis.',
        steps: [
          { strong: 'Identify a persistent problem worth fixing.', rest: 'Significant enough to warrant the effort, recurring (not a one-off), and tied to a performance outcome — missed goals, low morale, poor collaboration, client dissatisfaction.' },
          { strong: 'Describe the elements in play.', rest: 'Which two elements of the five are involved? State each as it actually is, not as you wish it were.' },
          { strong: 'Name the incongruence.', rest: 'What specifically is misaligned between the two? Put it in one sentence.' },
          { strong: 'Propose two possible adjustments.', rest: 'Different levers — not variations of the same lever. One might redesign the work; the other might change who is doing it.' },
          { strong: 'Recommend one — and say why.', rest: 'Which is more likely to fix it? Which is cheaper to try first? What is the evidence?' }
        ]
      },
      eli5: {
        title: 'The rowing boat.',
        body: [
          'Imagine a rowing boat with five things inside it. <strong>Strategy</strong> is where you are rowing. <strong>Tasks</strong> are the strokes each oar needs to make. <strong>People</strong> are the rowers. <strong>Culture</strong> is how loudly the boat shouts <em class="serif">"pull!"</em> and how it treats the rower who catches a crab. <strong>PPS</strong> is the coach\'s whistle, the training schedule, and the medal at the end.',
          'When any two of these disagree — the coach rewards raw speed while the culture mocks rowers who try too hard — the boat wobbles, no matter how good the plan on paper is.',
          'The job is never to write a better plan. It is to find the two oars pulling against each other, and fix that pair.'
        ]
      },
      frameworks: [
        { name: 'Congruence Model', author: 'Nadler & Tushman', components: ['Strategy', 'Tasks', 'People', 'Culture', 'PPS'], rule: 'Friction lives in the pair, not the element. Adjust the element causing the miss — not the one complaining.' },
        { name: 'The Eleven Pairs', author: 'Nadler & Tushman', components: ['S–T', 'S–P', 'S–C', 'S–PPS', 'T–P', 'T–C', 'C–P', 'PPS–T', 'PPS–T/P', 'PPS–P', 'PPS–C'], rule: 'Walk every pair. The first "no" is where to start.' },
        { name: 'Kerr\'s Folly', author: 'Kerr · 1975 (reprinted 1995)', components: ['what you reward', 'what you actually want', 'the gap'], rule: 'You get what you measure — not what you asked for.' }
      ],
      keyReading: {
        cite: 'Key reading · Kerr · AMJ 1975 (reprinted AME 1995)',
        title: 'On the folly of rewarding A, while hoping for B.',
        prose: 'Steven Kerr\'s classic paper names the most common source of PPS–Strategy incongruence: we measure one thing and then act surprised when people optimise for what we measured instead of what we wanted. Three everyday examples:',
        pairs: [
          { left: 'Reward individual KPIs', right: 'expect team play' },
          { left: 'Reward hitting easy targets', right: 'expect stretch and innovation' },
          { left: 'Reward cost-cutting', right: 'expect quality and care' }
        ],
        kicker: 'Watch what you measure — that is what you will get.'
      }
    },

    m02: {
      id: 'm02', number: '02', topic: 'Innovating with Intention',
      title: 'Psychological Safety & IGNITE',
      hint: 'Safety plus accountability plus a ritual for generating ideas.',
      kicker: 'Edmondson · innovation needs a room where disagreement is cheaper than silence.',
      coreIdea: {
        text: 'Innovation is not a personality type — it is a set of conditions. The room needs psychological safety so people will say their half-formed thought, and accountability so those thoughts are pushed into something useful. Combine both and you get the learning zone; miss either and you get apathy, anxiety or comfort.',
        attr: 'after Edmondson'
      },
      diagram: {
        type: '2x2',
        title: 'Safety × accountability.',
        intro: 'Two axes, four zones. You want the top-right.',
        xAxis: { label: 'accountability', lo: 'low', hi: 'high' },
        yAxis: { label: 'safety', lo: 'low', hi: 'high' },
        quadrants: [
          { pos: 'tl', label: 'Comfort' },
          { pos: 'tr', label: 'Learning', highlight: true },
          { pos: 'bl', label: 'Apathy' },
          { pos: 'br', label: 'Anxiety' }
        ]
      },
      frameworks: [
        { name: 'Psychological Safety', author: 'Edmondson', components: ['frame as learning, not execution', 'invite challenge', 'amplify the shy', 'say the second thing that comes to mind'], rule: 'Learning zone = high safety + high accountability.' },
        { name: 'IGNITE 6-step ideation', author: 'Hardy', components: ['Individual', 'Group', 'No-Judgement', 'Innovate', 'Take-notes', 'Evaluate'], rule: 'Alone first, then together, then decide.' },
        { name: '4 Leadership Challenges', author: 'Hardy', components: ['Commitment', 'Contribution', 'Coordination', 'Adaptation'], rule: 'Every follower asks four questions. Innovation needs the fourth.' }
      ],
      apply: {
        title: 'In the next meeting you run.',
        steps: [
          { strong: 'Frame the work as learning, not delivery.', rest: 'Say it out loud. It re-prices disagreement.' },
          { strong: 'Run IGNITE before you decide.', rest: '3 minutes alone, 10 minutes together, no judgement, build on ideas, take notes, evaluate at the end.' },
          { strong: 'Amplify the quietest voice.', rest: 'Name them. Ask for their concern specifically.' },
          { strong: 'Publicly say "I was wrong" once a month.', rest: 'Psychological safety is taught by behaviour, not posters.' }
        ]
      },
      eli5: {
        title: 'The open kitchen.',
        body: [
          'An open kitchen only works if chefs can say <em class="serif">"this is burning"</em> without getting yelled at. That is safety.',
          'It also only works if someone eventually plates the dish and says <em class="serif">"we ship this one."</em> That is accountability.',
          'Too much safety without accountability and nothing leaves the kitchen. Too much accountability without safety and nobody tells you the soup is salty.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Harvard Business Review · Edmondson',
        title: 'The fearless organisation.',
        prose: 'Edmondson\'s research — from her own hospital-error studies to Google\'s Project Aristotle, which built on her construct — shows that psychological safety is the single best predictor of team performance. Not talent, not tenure, not structure. Safety.',
        kicker: 'Build the room before you demand the ideas.'
      }
    },

    m03: {
      id: 'm03', number: '03', topic: 'Leading High-Performing Teams',
      title: 'Steiner, Hackman & the Diversity Paradox',
      hint: 'Teams are equations, not families. Tune the inputs.',
      kicker: 'Actual = Potential − Losses + Synergy. Manage each term.',
      coreIdea: {
        text: 'A team is not a collection of talent; it is an equation. The work the team actually produces equals its potential minus process losses plus whatever synergy emerges. Most of leadership is removing losses — unclear task, missing voice, groupthink — so that synergy can show up.',
        attr: 'after Steiner & Hackman'
      },
      diagram: {
        type: 'equation',
        title: 'The team performance equation.',
        intro: 'Steiner (1972) gave the first two terms; the + synergy extension comes from later team research (Hackman, Larson & LaFasto). Every team-leadership act is a move on one of these terms.',
        lhs: 'ACTUAL',
        rhs: 'POTENTIAL − LOSSES + SYNERGY'
      },
      frameworks: [
        { name: 'Four Founding Acts', author: 'after Hackman', components: ['Clarify the task', 'Decide who is in', 'Build relationships', 'Design the process'], rule: 'A course distillation — Hackman\'s own Leading Teams (2002) lists five conditions. Get the setup right; firefighting later is expensive.' },
        { name: 'Four Decision Failures', author: 'Hackman', components: ['Suboptimal team formation', 'Shared-information bias', 'Group polarisation', 'Groupthink'], rule: 'Knowing the failure modes is half the defence.' },
        { name: 'Diversity Paradox', author: 'Phillips et al.', components: ['Socially diverse teams feel worse', 'Socially diverse teams perform better'], rule: 'Comfort and performance are decoupled. Optimise the latter.' }
      ],
      apply: {
        title: 'Before the team even starts.',
        steps: [
          { strong: 'Clarify the task in one sentence.', rest: 'If you cannot, the team cannot.' },
          { strong: 'Decide who is in — and who is out.', rest: 'Ambiguous membership is the most common process loss.' },
          { strong: 'Build the relationship before the work.', rest: '30 minutes of personal context buys you months of trust.' },
          { strong: 'Design the process explicitly.', rest: 'Cadence, decision rule, how conflict is handled.' }
        ]
      },
      eli5: {
        title: 'The string quartet.',
        body: [
          'Four great musicians do not automatically make a great quartet. The ceiling (potential) is high, but losses eat most of it: mis-timed entries, ego about solos, bad rehearsal.',
          'A conductor\'s job is not to play better — it is to reduce losses. Once losses drop, synergy appears: a sound none of them could produce alone.',
          'And the paradox: a quartet with four different backgrounds often sounds richer than four who trained at the same conservatory, even though rehearsal feels harder.'
        ]
      },
      keyReading: {
        cite: 'Key reading · HBR · Hackman',
        title: 'Why teams don\'t work.',
        prose: 'Hackman\'s career-long finding: team failure is almost never about talent. It is about the conditions set before the first meeting — task, membership, relationships, process — and whether the leader protects those conditions once pressure arrives.',
        kicker: 'Set the conditions. Then get out of the way.'
      }
    },

    m04: {
      id: 'm04', number: '04', topic: 'Helping Them Reach Potential',
      title: 'Growth Mindset & the Pygmalion Loop',
      hint: 'Your expectations shape their performance. Both ways.',
      kicker: 'Dweck · ability grows with effort. Rosenthal · your belief does too.',
      coreIdea: {
        text: 'People perform up to — or down to — what you expect of them. The growth mindset is the belief that ability is cultivated through effort; the Pygmalion effect is the loop by which leaders\' expectations become followers\' behaviour. Together, they are a leverage point: change what you expect and watch what happens.',
        attr: 'after Dweck, Rosenthal & Jones'
      },
      diagram: {
        type: 'linear',
        title: 'The expectation chain.',
        intro: 'Your belief shapes your behaviour shapes their belief shapes their result — and their result reinforces your belief next time round.',
        steps: ['Belief', 'Behaviour', 'Their belief', 'Their result']
      },
      frameworks: [
        { name: 'Growth vs Fixed Mindset', author: 'Dweck', components: ['fixed: ability is given', 'growth: ability is made'], rule: 'Praise effort, not talent.' },
        { name: 'Pygmalion / Self-Fulfilling Prophecy', author: 'Merton (1948) · Rosenthal & Jacobson (1968)', components: ['belief → treatment → their belief → their behaviour'], rule: 'Your expectations are a management tool you are already using — usually unconsciously.' },
        { name: 'Fundamental Attribution Error', author: 'Jones & Harris', components: ['explain others by character', 'explain self by context'], rule: 'When someone underperforms, check the context before the person.' }
      ],
      apply: {
        title: 'This week, with one under-performer.',
        steps: [
          { strong: 'Name the context first.', rest: 'What is happening to them, not what is wrong with them?' },
          { strong: 'Tell them you believe they can do it.', rest: 'Explicitly. This is the Pygmalion lever.' },
          { strong: 'Praise the effort, never the genius.', rest: 'Genius is fixed; effort is trainable.' },
          { strong: 'Give them a stretch task.', rest: 'Belief without opportunity is a poster.' }
        ]
      },
      eli5: {
        title: 'Watering the plant you want.',
        body: [
          'Two seeds, same soil. You water one because you believe it will grow. You forget the other because you decided early it would not.',
          'Three months later the first is tall and the second has withered. You say <em class="serif">"I knew which one was the real plant."</em> But your belief was the water.',
          'Pygmalion is that, with people.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Mindset · Dweck',
        title: 'The new psychology of success.',
        prose: 'Dweck\'s 30 years of research show that one belief — whether ability can grow — shapes what people attempt, how they respond to setback, and how far they end up going. Leaders who install growth-mindset norms out-develop those who hire for raw talent alone.',
        kicker: 'Most people live up to the bar you hold for them — for better, and for worse.'
      }
    },

    m05: {
      id: 'm05', number: '05', topic: 'Listening, Feedback & Coaching',
      title: 'SAID, Theory U & the 5 Active-Listening Moves',
      hint: 'Separate the behaviour from the person. Go deeper than words.',
      kicker: 'Hardy · Scharmer · O\'Connor · three tools for a high-stakes conversation.',
      coreIdea: {
        text: 'Feedback lands when it is specific, separated from identity, and structured. Coaching lands when you listen past the words to the person. The tools are small — SAID, Scharmer\'s four levels, five active-listening behaviours — but the discipline is large: stop fixing, start hearing.',
        attr: 'after Hardy, Scharmer & O\'Connor'
      },
      diagram: {
        type: 'linear',
        title: 'SAID — one structured sentence.',
        intro: 'Four moves, in order. Separate behaviour from person.',
        steps: ['Situation', 'Action', 'Impact', 'Do']
      },
      frameworks: [
        { name: 'SAID Feedback Model', author: 'Hardy', components: ['Situation — specific moment', 'Action — observable behaviour', 'Impact — effect on others / work', 'Do — what to do next'], rule: 'Separate behaviour from person. Speak to the first three or four sentences.' },
        { name: 'Scharmer\'s 4 Levels of Listening', author: 'Scharmer', components: ['Downloading — I already know', 'Factual — I notice new data', 'Empathic — I feel what they feel', 'Generative — I sense where we are going'], rule: 'Most leaders listen at Level 1. Level 3 is where trust is built.' },
        { name: 'Active-Listening 5', author: 'O\'Connor', components: ['Attend', 'Withhold', 'Reflect', 'Clarify', 'Summarise'], rule: 'Don\'t rehearse your reply. Create space for theirs.' },
        { name: 'Plus / Delta', author: 'Hardy', components: ['+ what worked', 'Δ what could be even better'], rule: 'Two columns. Thirty seconds. End every meeting with it.' }
      ],
      apply: {
        title: 'In the next 1:1 you run.',
        steps: [
          { strong: 'Open with one SAID observation.', rest: 'Concrete moment. Behaviour, not character. Impact stated plainly.' },
          { strong: 'Then stop talking.', rest: 'Active listening 5. Five full seconds before you reply to anything.' },
          { strong: 'Aim for Level 3 listening at least once.', rest: '"What is going on for you, really?" — and wait.' },
          { strong: 'Close with Plus / Delta.', rest: 'One of each. On the meeting. Then on their work.' }
        ]
      },
      eli5: {
        title: 'Fixing a wobbly table.',
        body: [
          'Bad feedback says <em class="serif">"you are a wobbly person."</em> The person nods, goes away, stays wobbly.',
          'SAID says <em class="serif">"on Tuesday at the client meeting (situation), when you interrupted Sarah (action), the client lost her train of thought (impact), and next time I\'d love you to hold it until she finishes (do)."</em>',
          'One of those conversations is useful. The other is a character attack dressed as feedback.'
        ]
      },
      keyReading: {
        cite: 'Key reading · HBR · Ibarra & Scoular',
        title: 'The leader as coach.',
        prose: 'The best feedback conversations are not about delivering a verdict; they are about creating the conditions for the other person to discover their own insight. That is why structure (SAID) and depth of listening (Scharmer) matter more than the quality of your advice.',
        kicker: 'Ask, do not tell. Listen, do not rehearse.'
      }
    },

    m06: {
      id: 'm06', number: '06', topic: 'Leading an Engaged Workforce',
      title: 'ABCD, Yerkes-Dodson & the Burnout Triad',
      hint: 'Motivation has a shape. Pressure has an optimum. Burnout has a fingerprint.',
      kicker: 'Autonomy · Belonging · Competence · Direction — the four intrinsic motivators.',
      coreIdea: {
        text: 'Engagement is the difference between people showing up and people showing up with energy. The ABCD framework names four intrinsic motivators; the Yerkes-Dodson curve names the pressure range that releases them; the burnout triad names what collapses when you overshoot. Hold all three and you can diagnose a team\'s energy in a page.',
        attr: 'after Hardy · Bain · Amabile'
      },
      diagram: {
        type: 'curve-invertedU',
        title: 'The pressure-performance curve.',
        intro: 'Yerkes-Dodson: performance peaks at moderate pressure. Below is boredom; above is burnout.',
        xAxis: 'pressure',
        yAxis: 'performance',
        peakLabel: 'peak'
      },
      frameworks: [
        { name: 'ABCD Intrinsic Motivators', author: 'Hardy', components: ['Autonomy', 'Belonging', 'Competence', 'Direction'], rule: 'Diagnose which letter is missing for the person you are worried about.' },
        { name: 'Bain Engagement Pyramid', author: 'Bain & EIU', components: ['Inspired', 'Engaged', 'Satisfied', 'Dissatisfied'], rule: 'Satisfaction is the floor, not the ceiling. Aim for inspired.' },
        { name: 'Yerkes-Dodson Law', author: 'Yerkes & Dodson (1908)', components: ['boredom', 'peak', 'burnout'], rule: 'Pressure × performance is an inverted U. Manage where the team sits on the curve.' },
        { name: 'Burnout Triad', author: 'Maslach', components: ['Exhaustion', 'Cynicism', 'Inefficacy'], rule: 'All three together = burnout. Two = warning. One = tiredness.' },
        { name: 'Progress Principle', author: 'Amabile & Kramer', components: ['daily small wins'], rule: 'The single strongest predictor of a good day at work is progress on meaningful work.' }
      ],
      apply: {
        title: 'With one team member this month.',
        steps: [
          { strong: 'Map them on ABCD.', rest: 'Which letter is thin? Autonomy, belonging, competence or direction?' },
          { strong: 'Check where they sit on Yerkes-Dodson.', rest: 'Bored? Peak? Drifting toward burnout?' },
          { strong: 'Engineer a visible win this week.', rest: 'Progress principle. Small, real, theirs.' },
          { strong: 'Protect against the burnout triad.', rest: 'If you see two of {exhaustion, cynicism, inefficacy}, act. Don\'t wait for the third.' }
        ]
      },
      eli5: {
        title: 'The thermostat.',
        body: [
          'Too cold (too little pressure) and nothing moves. Too hot (too much pressure) and everything breaks. There is a band in the middle where the room actually works.',
          'Your job as a leader is to read the thermostat — and adjust one of the ABCD knobs before people start looking for the window.'
        ]
      },
      keyReading: {
        cite: 'Key reading · HBR · Amabile & Kramer',
        title: 'The progress principle.',
        prose: 'Out of 12,000 diary entries from 238 people across 7 companies, the single strongest predictor of a good day at work was not recognition or pay — it was making progress on meaningful work. Small wins compound; small setbacks corrode.',
        kicker: 'Make the next step visible. Then make it possible.'
      }
    },

    m07: {
      id: 'm07', number: '07', topic: 'Communication, Confidence & Credibility',
      title: 'Social Styles, Grice & the Culture Map',
      hint: 'You cannot not communicate. What matters is what is heard.',
      kicker: 'My world is not your world. Adjust for both.',
      coreIdea: {
        text: 'Communication is not what you say; it is what lands. Three tools help it land: knowing your default social style (and your audience\'s), honouring the four maxims of useful speech, and adjusting for where on the culture map the listener sits. Miss any of these and you will be sending signal into a room that cannot receive it.',
        attr: 'after Hardy, Grice & Meyer'
      },
      diagram: {
        type: '2x2',
        title: 'The four social styles.',
        intro: 'Assertiveness on one axis, responsiveness on the other. You default to one of four.',
        xAxis: { label: 'assertiveness', lo: 'asking', hi: 'telling' },
        yAxis: { label: 'responsiveness', lo: 'task', hi: 'people' },
        quadrants: [
          { pos: 'tl', label: 'Amiable' },
          { pos: 'tr', label: 'Expressive' },
          { pos: 'bl', label: 'Analytical' },
          { pos: 'br', label: 'Driver' }
        ]
      },
      frameworks: [
        { name: 'You cannot not communicate', author: 'Watzlawick', components: ['even silence is a message'], rule: 'Presence is the first message you send.' },
        { name: 'Social Styles 2×2', author: 'Merrill & Reid', components: ['Analytical', 'Driver', 'Amiable', 'Expressive'], rule: 'Adapt to your listener\'s style, not yours.' },
        { name: 'Grice\'s 4 Maxims', author: 'Grice (1975)', components: ['Quantity — say as much as is useful', 'Quality — be truthful', 'Relation — be relevant', 'Manner — be clear'], rule: 'Break one and the message corrodes.' },
        { name: 'Culture Map', author: 'Meyer', components: ['Communicating (high/low context)', 'Evaluating', 'Persuading', 'Leading', 'Deciding', 'Trusting', 'Disagreeing', 'Scheduling'], rule: 'Your "direct" is someone else\'s "rude". Re-calibrate.' }
      ],
      apply: {
        title: 'Before your next high-stakes message.',
        steps: [
          { strong: 'Identify your default style and theirs.', rest: 'Analytical talking to Expressive? You will bore them. Flip it.' },
          { strong: 'Check each of Grice\'s maxims.', rest: 'Is this the right amount? True? Relevant? Clearly said?' },
          { strong: 'Place the listener on the culture map.', rest: 'High-context? Less explicit. Hierarchical? Go through levels.' },
          { strong: 'Optimise for what is heard, not said.', rest: 'Sit in their chair for 60 seconds before you click send.' }
        ]
      },
      eli5: {
        title: 'Sending a letter to a town you\'ve never visited.',
        body: [
          'If the town speaks a different language, shouting will not help. If they open letters at 9pm together at dinner, sending an urgent telex at 8am is noise.',
          'Communication is 70% knowing the town.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Meyer · The Culture Map',
        title: 'Eight scales, one compass.',
        prose: 'Meyer\'s research with multinational teams shows eight reliable dimensions on which cultures differ — not in values but in communication defaults. You can be the best communicator in Amsterdam and the worst in Tokyo using the exact same words.',
        kicker: 'What is important is not what is said, but what is heard.'
      }
    },

    m08: {
      id: 'm08', number: '08', topic: 'Building & Leveraging Your Network',
      title: 'The 3-a-Week Rule & Meaningful Requests',
      hint: 'Bridging ties, not bonding ties. Three conversations a week.',
      kicker: 'Cross & Thomas · networks are built in 15-minute increments.',
      coreIdea: {
        text: 'Your network is not who you know; it is who will take a call from you on a bad day. It is built not in conferences but in habits — three deliberate outreaches a week, one bridging request at a time, mapped across seniority and difference. Most of senior-career outcome variance comes from this, and most senior people stop doing it right after the promotion that most needed it.',
        attr: 'after Cross & Thomas'
      },
      diagram: {
        type: 'network',
        title: '3 contacts a week.',
        intro: 'One old, one new, one from your cohort. Every week, for the rest of your career.',
        center: 'you',
        satellites: [
          { label: 'OLD' },
          { label: 'NEW' },
          { label: 'COHORT' }
        ]
      },
      frameworks: [
        { name: '3 / week rule', author: 'LPO course', components: ['1 old contact reactivated', '1 new contact made', '1 cohort contact reinforced', '+ 15 min daily LinkedIn'], rule: 'Consistency over intensity. Three is the number.' },
        { name: 'Meaningful Requests 6-step', author: 'Cross & Thomas', components: ['Target', 'Purpose', 'Questions', 'Ask', 'Referrals', 'Follow-up'], rule: 'A good request is small, specific, and ends with "who else?".' },
        { name: 'Network Map — seniority × difference', author: 'LPO custom', components: ['Y: seniority (yours → more senior)', 'X: difference (same as you → very different)'], rule: 'Most people over-index on same-level, same-type. Bridge deliberately.' }
      ],
      apply: {
        title: 'This week.',
        steps: [
          { strong: 'Pick the three.', rest: 'One old (lost touch), one new (not yet met), one cohort (just because).' },
          { strong: 'Make a meaningful request to one of them.', rest: 'Small, specific, ends with "who else should I talk to?".' },
          { strong: 'Map your network on seniority × difference.', rest: 'Where are the gaps? Fill those first.' },
          { strong: '15 minutes on LinkedIn, daily.', rest: 'Not scrolling. Engaging. Commenting, congratulating, asking.' }
        ]
      },
      eli5: {
        title: 'Flossing, but for people.',
        body: [
          'Networks, like teeth, rot quietly if you don\'t maintain them. You can\'t fix a decade of silence with a single lunch.',
          'Three people a week is the flossing equivalent — small, unglamorous, and the one thing that separates people who have relationships from people who have contact lists.'
        ]
      },
      keyReading: {
        cite: 'Key reading · HBR · Cross & Thomas',
        title: 'A smarter way to network.',
        prose: 'Research on how executives reach senior roles shows that the common thread is not intelligence or ambition — it is having a diverse, bridging network that they invested in before they needed it. Most high performers at middle levels miss this and rediscover it only when they\'re stuck.',
        kicker: 'Build it before you need it.'
      }
    },

    m09: {
      id: 'm09', number: '09', topic: 'Making Great Decisions',
      title: 'System 1 / System 2 & the Bias Audit',
      hint: 'Two minds. Predictable errors. Slow down on the ones that matter.',
      kicker: 'Kahneman · Bazerman · Tversky — the decision-making lineup.',
      coreIdea: {
        text: 'Every decision you make is either fast (System 1 — automatic, associative, usually fine) or slow (System 2 — deliberate, effortful, used only when pushed). The trouble is that System 1 produces predictable biases — framing, anchoring, availability, representativeness — and System 2 is often too tired to catch them. The fix is not to think harder; it is to engineer the decision.',
        attr: 'after Kahneman, Tversky & Bazerman'
      },
      diagram: {
        type: 'curve-s',
        title: 'Prospect theory.',
        intro: 'Losses feel steeper than gains. The kink at the origin is the whole point.',
        xLabels: { left: 'losses', right: 'gains' },
        yLabel: 'felt value',
        lossAversion: true
      },
      frameworks: [
        { name: 'System 1 vs System 2', author: 'Kahneman', components: ['S1: fast, automatic, intuitive', 'S2: slow, deliberate, analytical'], rule: 'Most decisions are S1. Reserve S2 for the ones that will matter in a year.' },
        { name: 'Bazerman 6 Rational Steps', author: 'Bazerman', components: ['Define', 'Criteria', 'Weight criteria', 'Options', 'Rate', 'Compute'], rule: 'A structured decision beats a brilliant one more often than not.' },
        { name: 'Motivational Biases', author: 'Kahneman', components: ['Positive illusions', 'Escalation of commitment (sunk cost)'], rule: 'You over-rate your own work and under-quit what is failing.' },
        { name: 'Cognitive Biases', author: 'Tversky & Kahneman', components: ['Framing', 'Availability', 'Anchoring', 'Representativeness'], rule: 'The frame decides more than the data. Name the frame before the decision.' },
        { name: 'Prospect Theory', author: 'Kahneman & Tversky', components: ['loss aversion ≈ 2×', 'diminishing sensitivity', 'reference-dependence'], rule: 'Losses hurt more than gains please. Design with that in mind.' }
      ],
      apply: {
        title: 'Before the next big decision.',
        steps: [
          { strong: 'Is this a System 1 or System 2 decision?', rest: 'If it will matter in a year, force yourself into System 2.' },
          { strong: 'Write down the frame.', rest: '"Gain" frames and "loss" frames lead to different choices on identical facts.' },
          { strong: 'Check your two biggest biases.', rest: 'Anchoring (first number you heard) and availability (most recent memorable example).' },
          { strong: 'Ask: what would make me reverse this in 6 months?', rest: 'If you can answer, you are not escalating. If you cannot, you are.' }
        ]
      },
      eli5: {
        title: 'Autopilot and the captain.',
        body: [
          'Most of your flying is on autopilot (System 1) — fast, efficient, and it knows the route.',
          'But autopilot has known failure modes — it does not read weather, it over-trusts its last successful flight. The captain (System 2) is slow, expensive, and easy to fatigue.',
          'Great pilots don\'t distrust autopilot; they know when to take the controls back.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Thinking, Fast and Slow · Kahneman',
        title: 'Two systems, one mind.',
        prose: 'Kahneman\'s synthesis of 40 years of research names the two modes — and names the biases each produces. It is still the best field manual on why smart people make predictably bad decisions under pressure.',
        kicker: 'Rationality is not the goal. Catching yourself being irrational is.'
      }
    },

    m10: {
      id: 'm10', number: '10', topic: 'Power & Influence',
      title: 'Cialdini\'s 6 & the Two Routes',
      hint: 'Change minds through content or through cues. Both are legitimate — to a point.',
      kicker: 'Cialdini · six repeatable levers of persuasion. Don\'t be evil.',
      coreIdea: {
        text: 'Power and influence are not the same as authority. Influence runs along two routes — central (the quality of your argument) and peripheral (the cues around it). Cialdini named six peripheral levers that are so reliable they work on you even when you know them. The leader\'s job is to use them for genuine ends and to recognise when they are being used against you.',
        attr: 'after Cialdini · Petty & Cacioppo'
      },
      diagram: {
        type: 'hexagon',
        title: 'The six principles.',
        intro: 'Six corners of a hexagon. One lever at each.',
        centerLabel: { title: 'Cialdini 6', sub: 'principles of influence' },
        vertices: [
          { label: 'Reciprocity' },
          { label: 'Commitment' },
          { label: 'Social Proof' },
          { label: 'Liking' },
          { label: 'Scarcity' },
          { label: 'Authority' }
        ]
      },
      frameworks: [
        { name: 'Two Routes to Persuasion', author: 'Petty & Cacioppo', components: ['Central — content, logic, evidence', 'Peripheral — cues, source, format'], rule: 'Under time-pressure people default to peripheral. Design your messaging for the route the receiver is actually on.' },
        { name: 'Cialdini\'s 6 Principles', author: 'Cialdini', components: ['Reciprocity', 'Commitment & consistency', 'Social proof', 'Liking', 'Scarcity', 'Authority'], rule: 'They stack. Using two is often more than twice as powerful as one.' },
        { name: 'Door-in-the-Face / Foot-in-the-Door', author: 'Cialdini (1975) · Freedman & Fraser (1966)', components: ['DITF: big-then-small (Cialdini)', 'FITD: small-then-big (Freedman & Fraser)'], rule: 'Two opposite mechanics. Both exploit commitment and consistency.' }
      ],
      apply: {
        title: 'Next time you need to change someone\'s mind.',
        steps: [
          { strong: 'Decide the route.', rest: 'If they have time and motivation, central. Otherwise peripheral.' },
          { strong: 'Pick two of the six levers.', rest: 'Not all six. That reads manipulative. Two — chosen for genuine fit.' },
          { strong: 'Check the ethics line.', rest: '"Would I be comfortable if they learned I was using this?" is the only question that matters.' },
          { strong: 'Watch for it being used on you.', rest: 'Scarcity pressure, unearned authority, reciprocity traps — the same six arrive in your inbox every day.' }
        ]
      },
      eli5: {
        title: 'The six hand-holds.',
        body: [
          'Imagine a mind as a climbing wall. There are six hand-holds people use to move another person up the wall: a favour (reciprocity), a promise (commitment), what everyone else is doing (social proof), how much they like you (liking), what\'s running out (scarcity), and who\'s saying it (authority).',
          'You can use them to help someone climb somewhere good. You can also use them to push someone off the wall. The difference is not the hand-hold — it is where you are taking them.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Influence · Cialdini',
        title: 'The psychology of persuasion.',
        prose: 'Cialdini\'s 30 years of field research distilled into six principles you will recognise in every sales pitch, political campaign and performance review you have ever sat through — including the ones you ran.',
        kicker: 'Use the levers. Don\'t become the lever.'
      }
    }
  }
};

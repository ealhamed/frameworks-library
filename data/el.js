// EL · CD28 · Executive Leadership · Teaching Fellow Lucy Ford
module.exports = {
  code: 'el',
  courseCode: 'CD28',
  courseName: 'Executive Leadership',
  courseShort: 'EL',
  courseDisplayName: 'Executive Leadership',
  courseAccent: '--c-el',
  professor: 'Lucy Ford',
  frameworksTag: 'Mirrors worth standing in front of',
  frameworksHeading: 'Things to ask yourself.',
  school: 'London Business School',
  cohort: 'EMBA Dubai 2027',
  arc: {
    tagline: 'Know yourself. Then lead others.',
    pullquote: 'Start with a mirror. Then learn your wiring. Then design the next version of yourself on purpose.',
    attr: 'the course, in one line',
    blocks: [
      { label: 'I · Know Yourself', modules: ['m01', 'm02'] },
      { label: 'II · Lead Others', modules: ['m03', 'm04', 'm05'] }
    ]
  },
  modules: {
    m01: {
      id: 'm01', number: '01', topic: 'Building Self-Awareness',
      title: 'The Johari Window',
      hint: 'You cannot lead who you cannot see.',
      kicker: 'Luft & Ingham · four panes of the self.',
      coreIdea: {
        text: 'Leadership development begins with a painful recognition: the less skilled you are at something, the less you can see it. 360-degree feedback, the Johari Window and the Dunning-Kruger effect all point at the same place — the blind spot between how you see yourself and how others see you. Closing that gap is the first move of executive leadership.',
        attr: 'after Luft, Ingham, Dunning & Kruger'
      },
      diagram: {
        type: '2x2',
        title: 'The Johari window.',
        intro: 'Four panes built from two questions: do I know it, and do others know it?',
        xAxis: { label: 'known to others', lo: 'no', hi: 'yes' },
        yAxis: { label: 'known to self', lo: 'no', hi: 'yes' },
        quadrants: [
          { pos: 'tl', label: 'Hidden self' },
          { pos: 'tr', label: 'Open area' },
          { pos: 'bl', label: 'Unknown' },
          { pos: 'br', label: 'Blind spot', highlight: true }
        ]
      },
      frameworks: [
        { name: 'Johari Window', author: 'Luft & Ingham (1955)', components: ['Open', 'Blind Spot', 'Hidden', 'Unknown'], rule: 'Grow the Open area by asking for feedback (shrinks blind spot) and disclosing more (shrinks hidden self).' },
        { name: 'Dunning-Kruger Effect', author: 'Kruger & Dunning (1999)', components: ['incompetence obscures incompetence'], rule: 'The skills to produce a good answer are the same skills needed to recognise one.' },
        { name: 'Better-Than-Average Effect', author: 'Self-perception research', components: ['most people rate themselves above average on most traits'], rule: 'Assume your self-rating is inflated. Calibrate against external data.' }
      ],
      apply: {
        title: 'Running your first 360.',
        steps: [
          { strong: 'Choose 5–7 raters across contexts.', rest: 'Boss, peers, direct reports, a client. Not just friends.' },
          { strong: 'Read without defending.', rest: 'Your first reaction will be to explain. Suppress it for 24 hours.' },
          { strong: 'Look for the pattern.', rest: 'One rater with a criticism is a data point; three raters with the same criticism is a signal.' },
          { strong: 'Write "How to work with me".', rest: 'Strengths at your best, weaknesses under pressure, idiosyncrasies. Share it.' }
        ]
      },
      eli5: {
        title: 'Seeing the back of your own head.',
        body: [
          'You think you are a great listener. Your team sees you as rushing through meetings. You think you are detail-oriented. They see micromanagement.',
          'Feedback is the mirror that shows what you cannot see alone. The trap is not lack of talent — it is the normal gap between self and other perception, and it closes only with data.'
        ]
      },
      keyReading: {
        cite: 'Key reading · What Got You Here Won\'t Get You There · Goldsmith',
        title: 'The derailment patterns of senior managers.',
        prose: 'Research on managerial derailment shows that 30% of senior managers derail within 5 years — not because of lack of talent but because strengths become weaknesses under pressure, and the skills needed at each level shift. Self-awareness is the defence.',
        kicker: 'What worked yesterday will not work tomorrow. Know the gap.'
      }
    },

    m02: {
      id: 'm02', number: '02', topic: 'Personality & Leadership Preferences',
      title: 'The Big Five (5STeP)',
      hint: 'Your wiring is mostly given. Your range is what you train.',
      kicker: 'McCrae & Costa · five dimensions that predict most leadership behaviour.',
      coreIdea: {
        text: 'Personality is the stable pattern of how you think, feel and act across situations. The Big Five — neuroticism, extraversion, openness, agreeableness, conscientiousness — are the most empirically supported taxonomy, and each dimension is a trade-off rather than a good-or-bad. Leadership is not about reshaping your personality; it is about knowing it, and training the range around the setpoint.',
        attr: 'after McCrae & Costa'
      },
      diagram: {
        type: 'pentagon',
        title: 'The five dimensions.',
        intro: 'Each vertex is a trait with a low-end and high-end trade-off.',
        vertices: [
          { label: 'Neuroticism', desc: 'calm ↔ alert to risk' },
          { label: 'Extraversion', desc: 'reserved ↔ energising' },
          { label: 'Openness', desc: 'practical ↔ creative' },
          { label: 'Agreeableness', desc: 'challenging ↔ cooperative' },
          { label: 'Conscientiousness', desc: 'flexible ↔ disciplined' }
        ]
      },
      frameworks: [
        { name: 'Big Five Model (5STeP)', author: 'McCrae & Costa', components: ['N · E · O · A · C'], rule: 'No profile is "better". Fit between profile and role determines effectiveness.' },
        { name: 'Nature vs Nurture', author: 'Personality genetics', components: ['~50% heritable', 'rest shaped by environment and experience'], rule: 'Traits are stable but not fixed. Range can be trained.' },
        { name: 'Situation Strength', author: 'Personality research', components: ['strong situations constrain behaviour', 'weak situations reveal traits'], rule: 'In a crisis, personality matters less. In ambiguity, it matters more.' }
      ],
      apply: {
        title: 'Using your Big Five profile.',
        steps: [
          { strong: 'Know your setpoint on each dimension.', rest: 'Use 5STeP or similar instrument.' },
          { strong: 'Name the trade-offs.', rest: 'High conscientiousness delivers, but can stifle experimentation. Name both sides.' },
          { strong: 'Map your team.', rest: 'Which profiles complement yours? Which add friction you should manage?' },
          { strong: 'Train the range, not the setpoint.', rest: 'You will not become an extrovert. You can learn to act extroverted for a meeting.' }
        ]
      },
      eli5: {
        title: 'You are not broken. You are built.',
        body: [
          'High neuroticism is not a flaw — it is an early-warning system. Low extraversion is not shyness — it is recharging alone. High openness is great for innovation and scattered for execution. High agreeableness creates harmony and avoids necessary conflict.',
          'The trick is knowing your wiring, choosing roles that fit it, and pairing with people who complement it.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Toegel & Barsoux · MIT Sloan Review',
        title: 'How to become a better leader.',
        prose: 'Good leaders make it look easy — but most have had to work hard on themselves, managing or compensating for potentially career-limiting traits. Development is not about reshaping personality; it is about recognising strongest tendencies and building complementary habits.',
        kicker: 'Know your wiring. Build around it.'
      }
    },

    m03: {
      id: 'm03', number: '03', topic: 'Leadership Styles & Power',
      title: 'Six Styles, One Self',
      hint: 'Directive for crises. Coaching for growth. Servant for loyalty.',
      kicker: 'Goleman · six styles you can flex between, depending on the room.',
      coreIdea: {
        text: 'Leadership is the process of influencing others to achieve shared objectives. There is no single best style — directive works in crisis but kills innovation; coaching develops talent but is slow; servant builds long-term trust but requires genuine care. The skill is not choosing your one style; it is reading the room and flexing between six.',
        attr: 'after Goleman'
      },
      diagram: {
        type: 'network',
        title: 'Six styles, one leader.',
        intro: 'Six styles radiating from the leader\'s impact. Each works in some contexts; none works in all.',
        center: 'Leader',
        satellites: [
          { label: 'Directive' },
          { label: 'Visionary' },
          { label: 'Affiliative' },
          { label: 'Participative' },
          { label: 'Coaching' },
          { label: 'Pacesetting' }
        ]
      },
      frameworks: [
        { name: 'Six Leadership Styles', author: 'Goleman-inspired', components: ['Directive', 'Visionary', 'Affiliative', 'Participative', 'Coaching', 'Pacesetting'], rule: 'Match style to context: crisis, vision, relationships, input, development, standards.' },
        { name: 'Servant Leadership', author: 'Greenleaf', components: ['genuine care for welfare', 'facilitating others\' success'], rule: 'Trust is the foundation of influence. You cannot lead people you don\'t care about.' },
        { name: 'Reading the Room', author: 'Executive practice', components: ['team capability', 'stakes and urgency', 'culture'], rule: 'Default to your natural style; flex deliberately for the context.' }
      ],
      apply: {
        title: 'Flexing styles deliberately.',
        steps: [
          { strong: 'Name your default style.', rest: 'Most of us have one or two we fall into under pressure.' },
          { strong: 'Name a style you avoid.', rest: 'Usually the opposite of your default. That is your growth edge.' },
          { strong: 'Practice one coaching conversation a week.', rest: 'Open questions. Silence. Follow-up. No solving.' },
          { strong: 'Audit last week\'s meetings.', rest: 'Which style would have worked best in each? Which did you use?' }
        ]
      },
      eli5: {
        title: 'Different songs for different rooms.',
        body: [
          'You would not play heavy metal at a funeral or a lullaby at a rock concert. Command-and-control works if the building is on fire; in normal operations, it crushes innovation.',
          'Coaching develops talent but takes time. Visionary inspires but needs substance. Servant builds trust but requires patience. Good leaders read the room and adjust the soundtrack.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Toegel & Barsoux',
        title: 'How to become a better leader.',
        prose: 'Most leaders default to the style that got them promoted — but that style will not serve every room they walk into. The work is building the range: practising the styles you don\'t naturally reach for, until the flex becomes deliberate rather than accidental.',
        kicker: 'One default. Six tools. Flex deliberately.'
      }
    },

    m04: {
      id: 'm04', number: '04', topic: 'High-Performing Teams',
      title: 'Synergy or Process Loss',
      hint: 'Right people, right processes, or you will underperform the individuals.',
      kicker: 'Hackman · teams are equations, not families.',
      coreIdea: {
        text: 'Teams can outperform individuals — more knowledge, more perspectives, more peer correction — but they can also underperform, when dominant members silence the right answer or conformity pressure produces bland consensus. The difference is process. Clarify the task, manage the conflict type, and pick a decision method that matches the trust level.',
        attr: 'after Hackman'
      },
      diagram: {
        type: '2x2',
        title: 'Expertise × psychological safety.',
        intro: 'Great teams need both: the right knowledge in the room, and the room in which it can be spoken.',
        xAxis: { label: 'psychological safety', lo: 'low', hi: 'high' },
        yAxis: { label: 'expertise use', lo: 'low', hi: 'high' },
        quadrants: [
          { pos: 'tl', label: 'Wasted talent' },
          { pos: 'tr', label: 'Synergy', highlight: true },
          { pos: 'bl', label: 'Stagnation' },
          { pos: 'br', label: 'Process loss' }
        ]
      },
      frameworks: [
        { name: 'Team Performance Model', author: 'Hackman (1998)', components: ['right people + right processes = high performing'], rule: 'Composition matters, but process matters more.' },
        { name: 'Three Types of Conflict', author: 'Team dynamics', components: ['Task — healthy', 'Relationship — toxic', 'Process — misdirects'], rule: 'Encourage task conflict. Minimise the other two.' },
        { name: 'Decision Methods', author: 'Organisational design', components: ['Consensus', 'Leader-decides', 'Majority'], rule: 'Low trust → consensus. High trust → leader-decides often fine. Majority creates aggrieved minorities.' }
      ],
      apply: {
        title: 'Starting a new team.',
        steps: [
          { strong: 'Establish norms on day one.', rest: 'Decision rule, cadence, how we handle disagreement.' },
          { strong: 'Assign clear roles.', rest: 'Facilitator, scribe, time-keeper. Reduces process conflict.' },
          { strong: 'Encourage task conflict.', rest: 'Actively ask for the dissenting view. Use structured protocols.' },
          { strong: 'Protect against groupthink.', rest: 'Write positions privately before speaking publicly.' }
        ]
      },
      eli5: {
        title: 'Orchestra vs soloist.',
        body: [
          'A soloist is limited by one person. An orchestra can make a richer sound — but only if the conductor stops the trumpets drowning out the violins.',
          'Teams outperform individuals when every voice is heard and integrated. Process loss happens when the best team member dominates, when people are afraid to disagree, or when meetings descend into chaos.'
        ]
      },
      keyReading: {
        cite: 'Key reading · Why Teams Don\'t Work · Hackman',
        title: 'Conditions before members.',
        prose: 'Hackman\'s career of team research shows failure is almost never about talent. It is about the conditions set before the first meeting — task, membership, relationships, process — and whether the leader protects those conditions once pressure arrives.',
        kicker: 'Most team failures were set up before the first meeting.'
      }
    },

    m05: {
      id: 'm05', number: '05', topic: 'Career Transitions & PDP',
      title: 'What Got You Here Won\'t Get You There',
      hint: 'Each new level requires skills the last one punished.',
      kicker: 'GAPS · the personal development plan is a change-management project on yourself.',
      coreIdea: {
        text: 'Career transitions are predictable derailment points. The behaviours that got you promoted (deep technical skill, doing the work yourself) often become liabilities at the next level (where you must delegate, coach and influence). A Personal Development Plan is not a performance review with yourself — it is a change-management project that names the old behaviour to retire, the new behaviour to install, and the supporters who will hold you to it.',
        attr: 'after Goldsmith; Alessandro Riccombeni case'
      },
      diagram: {
        type: 'linear',
        title: 'GAPS — from current self to next self.',
        intro: 'Four steps for moving from feedback data to installed behaviour.',
        steps: ['G · Global', 'A · Assess', 'P · Plan', 'S · Sustain']
      },
      frameworks: [
        { name: 'GAPS Analysis', author: 'Development planning tool', components: ['Global — current state', 'Assess — the gap', 'Plan — one specific leadership goal', 'Sustain — supporters and accountability'], rule: 'The goal must be behavioural, not generic. Not "be better"; "be comfortable initiating difficult conversations".' },
        { name: 'Riccombeni Case Lessons', author: 'Course case', components: ['strengths become weaknesses in new roles', 'advancement ≠ automatic reward', 'lead by facilitating performance'], rule: 'Every promotion requires uninstalling old software before installing new.' },
        { name: 'LBS Six Competencies', author: 'LBS framework', components: ['Know Yourself', 'Communicate Powerfully', 'Deliver Through Others', 'Solve Complex Problems', 'Lead Change', 'Digital Fluency'], rule: 'Your 360 evaluates on these six. Your PDP should target one or two.' }
      ],
      apply: {
        title: 'Writing a usable PDP.',
        steps: [
          { strong: 'Do GAPS with real feedback data.', rest: 'Not what you hope is true. What the 360 and peers actually said.' },
          { strong: 'Pick one goal, not five.', rest: 'Behavioural, specific, measurable.' },
          { strong: 'Name your supporters.', rest: 'Mentor, peer coach, trusted colleague. People who will tell you the truth.' },
          { strong: 'Build in accountability.', rest: 'Share the PDP publicly with the supporters. Schedule check-ins. Measure progress.' }
        ]
      },
      eli5: {
        title: 'Updating your operating system.',
        body: [
          'The software that made you a great individual contributor does not run well on the hardware of a management role. You were excellent at solving problems yourself; now you must solve them through others.',
          'Riccombeni had to uninstall "I have all the answers" and install "I facilitate others finding answers". Your PDP is your upgrade plan: what old beliefs retire? What new ones install? And who holds you to it when you regress?'
        ]
      },
      keyReading: {
        cite: 'Key reading · Alessandro Riccombeni case',
        title: 'Career transition and leadership evolution.',
        prose: 'Riccombeni\'s journey from brilliant engineer to struggling general manager is a study in the cost of not upgrading. His technical brilliance actively prevented others from contributing; only by stepping back did the team — and his career — start to work.',
        kicker: 'Prepare for the next job before you need it.'
      }
    }
  }
};

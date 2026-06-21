export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type QuizSet = {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  accent: string;
  icon: string;
  questions: QuizQuestion[];
};

export const QUIZZES: QuizSet[] = [
  {
    id: 'solar-system',
    title: 'The Solar System',
    level: 'Beginner',
    description: 'Test your knowledge of our cosmic neighborhood.',
    accent: 'from-amber-400 to-orange-600',
    icon: 'Sun',
    questions: [
      {
        id: 'q1',
        question: 'Which is the largest planet in our Solar System?',
        options: ['Saturn', 'Jupiter', 'Neptune', 'Earth'],
        correctIndex: 1,
        explanation: 'Jupiter is so large that all other planets could fit inside it — about 1,300 Earths would fit inside.',
      },
      {
        id: 'q2',
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mercury', 'Mars', 'Jupiter'],
        correctIndex: 2,
        explanation: 'Mars appears red due to iron oxide (rust) covering its surface.',
      },
      {
        id: 'q3',
        question: 'Which planet has the most moons?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        correctIndex:  1,
        explanation: 'Saturn leads with 146 known moons, recently overtaking Jupiter (95).',
      },
      {
        id: 'q4',
        question: 'Which planet rotates on its side?',
        options: ['Neptune', 'Uranus', 'Saturn', 'Mars'],
        correctIndex: 1,
        explanation: 'Uranus has an axial tilt of about 98° — it essentially rolls around the Sun on its side.',
      },
      {
        id: 'q5',
        question: 'How long does light take to travel from the Sun to Earth?',
        options: ['1 second', '8 minutes', '1 hour', '1 day'],
        correctIndex: 1,
        explanation: 'Light from the Sun takes about 8 minutes 20 seconds to travel the 150 million km to Earth.',
      },
      {
        id: 'q6',
        question: 'Which planet has a prominent ring system visible from Earth with a small telescope?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        correctIndex: 1,
        explanation: "Saturn's rings made of ice and rock are the most striking in the Solar System.",
      },
    ],
  },
  {
    id: 'stars-galaxies',
    title: 'Stars & Galaxies',
    level: 'Intermediate',
    description: 'How well do you know the engines of light and cosmic structure?',
    accent: 'from-cosmic-cyan to-nebula-violet',
    icon: 'Star',
    questions: [
      {
        id: 'q1',
        question: 'What process powers a star like the Sun?',
        options: ['Chemical combustion', 'Nuclear fission', 'Nuclear fusion', 'Gravitational collapse'],
        correctIndex: 2,
        explanation: 'Stars shine by fusing hydrogen into helium in their cores, converting mass into energy via E = mc².',
      },
      {
        id: 'q2',
        question: 'What type of galaxy is the Milky Way?',
        options: ['Elliptical', 'Irregular', 'Spiral', 'Lenticular'],
        correctIndex: 2,
        explanation: 'The Milky Way is a barred spiral galaxy — we live in its Orion Arm.',
      },
      {
        id: 'q3',
        question: 'What happens when a massive star runs out of fuel?',
        options: [
          'It gently fades into a white dwarf',
          'It explodes as a supernova',
          'It becomes a planet',
          'It stays the same forever',
        ],
        correctIndex: 1,
        explanation: 'Massive stars end their lives in a supernova — briefly outshining an entire galaxy — leaving behind a neutron star or black hole.',
      },
      {
        id: 'q4',
        question: "What determines a star's color?",
        options: ['Its size', 'Its age', 'Its surface temperature', 'Its distance'],
        correctIndex: 2,
        explanation: 'A star\'s color reveals its surface temperature: blue is hottest, red is coolest.',
      },
      {
        id: 'q5',
        question: 'Where are most of the heavy elements in the universe made?',
        options: ['The Big Bang', 'Inside stellar cores', 'Supernovae and neutron-star mergers', 'On planets'],
        correctIndex: 2,
        explanation: 'Elements heavier than iron, including gold and uranium, are forged in supernovae and the collision of neutron stars.',
      },
      {
        id: 'q6',
        question: 'What is the closest large galaxy to the Milky Way?',
        options: ['Triangulum Galaxy', 'Andromeda Galaxy', 'Centaurus A', 'Sombrero Galaxy'],
        correctIndex: 1,
        explanation: 'The Andromeda Galaxy is about 2.5 million light-years away and on a collision course with the Milky Way.',
      },
    ],
  },
  {
    id: 'cosmology',
    title: 'Cosmology & Frontiers',
    level: 'Advanced',
    description: 'The deepest questions about the origin and fate of the universe.',
    accent: 'from-nebula-magenta to-star-orange',
    icon: 'Atom',
    questions: [
      {
        id: 'q1',
        question: 'Approximately how old is the universe?',
        options: ['4.6 billion years', '8 billion years', '13.8 billion years', '100 billion years'],
        correctIndex: 2,
        explanation: 'The universe is about 13.8 billion years old, measured precisely from the cosmic microwave background.',
      },
      {
        id: 'q2',
        question: 'What is dark energy most directly associated with?',
        options: [
          'The rotation of galaxies',
          'The accelerating expansion of the universe',
          'The formation of black holes',
          'Gravity between planets',
        ],
        correctIndex: 1,
        explanation: 'Dark energy is the repulsive force driving the universe\'s accelerating expansion, observed in distant supernovae in 1998.',
      },
      {
        id: 'q3',
        question: 'What does general relativity describe gravity as?',
        options: [
          'A pull between masses',
          'The curvature of spacetime',
          'A form of electromagnetic force',
          'A quantum exchange of particles',
        ],
        correctIndex: 1,
        explanation: 'Einstein\'s general relativity treats gravity as the curvature of spacetime caused by mass and energy.',
      },
      {
        id: 'q4',
        question: 'What is the Cosmic Microwave Background?',
        options: [
          'Light from the first stars',
          'The afterglow of the Big Bang',
          'Radio noise from the Sun',
          'The glow of dark matter',
        ],
        correctIndex: 1,
        explanation: 'The CMB is the oldest light in the universe — the afterglow of when the universe cooled enough for light to travel freely, ~380,000 years after the Big Bang.',
      },
      {
        id: 'q5',
        question: 'Roughly what fraction of the universe is dark matter?',
        options: ['~5%', '~27%', '~68%', '~95%'],
        correctIndex: 1,
        explanation: 'Dark matter is about 27% of the universe; dark energy is ~68%; ordinary matter (everything we can see) is just ~5%.',
      },
      {
        id: 'q6',
        question: 'What was the first-ever directly imaged black hole?',
        options: ['Sagittarius A*', 'M87*', 'Cygnus X-1', 'GW150914'],
        correctIndex: 1,
        explanation: 'M87* — the supermassive black hole at the center of galaxy M87 — was the first black hole directly imaged, in April 2019.',
      },
    ],
  },
];

export type Badge = {
  id: string;
  name: string;
  icon: string;
  description: string;
  threshold: number;
  special?: 'perfect' | 'all';
};

export const BADGES: Badge[] = [
  { id: 'first-steps', name: 'First Steps', icon: 'Footprints', description: 'Complete your first quiz', threshold: 1 },
  { id: 'explorer', name: 'Cosmic Explorer', icon: 'Rocket', description: 'Complete 3 quizzes', threshold: 3 },
  { id: 'scholar', name: 'Astronomy Scholar', icon: 'GraduationCap', description: 'Score 100% on any quiz', threshold: 0, special: 'perfect' },
  { id: 'master', name: 'Master of the Cosmos', icon: 'Crown', description: 'Complete all quizzes', threshold: 3, special: 'all' },
];

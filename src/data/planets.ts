export type Planet = {
  id: string;
  name: string;
  type: string;
  color: string;
  gradient: string;
  glow: string;
  /** relative size (Earth = 1) for visualization */
  size: number;
  /** orbit radius in design units */
  orbit: number;
  /** animation duration in seconds */
  orbitSpeed: number;
  diameter: string;
  distanceFromSun: string;
  distanceKm: number;
  surfaceTemp: string;
  moons: number;
  gravity: number;
  /** Earth = 1 */
  dayLength: string;
  yearLength: string;
  description: string;
  facts: string[];
  hasRing?: boolean;
};

export const SUN: Omit<Planet, 'orbit' | 'orbitSpeed'> = {
  id: 'sun',
  name: 'The Sun',
  type: 'G-type main-sequence star',
  color: '#fbbf24',
  gradient: 'radial-gradient(circle at 35% 35%, #fff7ed, #fbbf24 35%, #f97316 65%, #b45309 100%)',
  glow: 'rgba(251, 191, 36, 0.7)',
  size: 4.2,
  diameter: '1,391,400 km',
  distanceFromSun: '0 km (center of the Solar System)',
  distanceKm: 0,
  surfaceTemp: '5,505 °C (surface) / 15,000,000 °C (core)',
  moons: 0,
  gravity: 274,
  dayLength: '25–35 Earth days (differential rotation)',
  yearLength: 'orbits the galaxy every ~230 million years',
  description:
    'The Sun is the star at the center of our Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The Sun accounts for about 99.86% of the total mass of the Solar System.',
  facts: [
    'Over one million Earths could fit inside the Sun.',
    'Light from the Sun takes about 8 minutes 20 seconds to reach Earth.',
    'The Sun fuses ~600 million tons of hydrogen every second.',
    'Its surface temperature is ~5,500 °C but its corona reaches millions of degrees.',
  ],
};

export const PLANETS: Planet[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'Terrestrial planet',
    color: '#9ca3af',
    gradient: 'radial-gradient(circle at 30% 30%, #e5e7eb, #9ca3af 50%, #4b5563 100%)',
    glow: 'rgba(156, 163, 175, 0.4)',
    size: 0.5,
    orbit: 90,
    orbitSpeed: 12,
    diameter: '4,879 km',
    distanceFromSun: '57.9 million km (0.39 AU)',
    distanceKm: 57.9e6,
    surfaceTemp: '-173 °C to 427 °C',
    moons: 0,
    gravity: 0.38,
    dayLength: '59 Earth days',
    yearLength: '88 Earth days',
    description:
      'The smallest planet in the Solar System and the closest to the Sun. Mercury has no atmosphere to retain heat, leading to the most dramatic temperature swings of any planet.',
    facts: [
      'A day on Mercury lasts longer than its year.',
      'Despite being closest to the Sun, it is not the hottest planet.',
      'Mercury has water ice in permanently shadowed polar craters.',
      'It shrinks as its iron core slowly cools.',
    ],
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'Terrestrial planet',
    color: '#fbbf24',
    gradient: 'radial-gradient(circle at 30% 30%, #fef3c7, #fbbf24 45%, #b45309 100%)',
    glow: 'rgba(251, 191, 36, 0.5)',
    size: 0.85,
    orbit: 128,
    orbitSpeed: 16,
    diameter: '12,104 km',
    distanceFromSun: '108.2 million km (0.72 AU)',
    distanceKm: 108.2e6,
    surfaceTemp: '465 °C (average)',
    moons: 0,
    gravity: 0.91,
    dayLength: '243 Earth days',
    yearLength: '225 Earth days',
    description:
      "Often called Earth's twin in size, Venus is the hottest planet due to a runaway greenhouse effect from its thick CO₂ atmosphere. It rotates backwards compared to most planets.",
    facts: [
      'Venus spins backwards relative to most planets.',
      'It is the hottest planet in the Solar System.',
      'A day on Venus is longer than its year.',
      'Its atmosphere is 96% carbon dioxide, with crushing surface pressure.',
    ],
  },
  {
    id: 'earth',
    name: 'Earth',
    type: 'Terrestrial planet',
    color: '#3b82f6',
    gradient: 'radial-gradient(circle at 30% 30%, #93c5fd, #3b82f6 45%, #1e40af 75%, #14532d 100%)',
    glow: 'rgba(59, 130, 246, 0.6)',
    size: 0.9,
    orbit: 170,
    orbitSpeed: 20,
    diameter: '12,742 km',
    distanceFromSun: '149.6 million km (1 AU)',
    distanceKm: 149.6e6,
    surfaceTemp: '-88 °C to 58 °C (average 15 °C)',
    moons: 1,
    gravity: 1,
    dayLength: '24 hours',
    yearLength: '365.25 days',
    description:
      "The only known planet to harbor life. Earth's atmosphere of nitrogen and oxygen, liquid water oceans, and protective magnetic field create the conditions for life as we know it.",
    facts: [
      'Earth is the only planet not named after a god.',
      '71% of its surface is covered by water.',
      "Earth's magnetic field protects us from solar radiation.",
      'It is the densest planet in the Solar System.',
    ],
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'Terrestrial planet',
    color: '#ef4444',
    gradient: 'radial-gradient(circle at 30% 30%, #fecaca, #ef4444 45%, #7f1d1d 100%)',
    glow: 'rgba(239, 68, 68, 0.5)',
    size: 0.62,
    orbit: 212,
    orbitSpeed: 26,
    diameter: '6,779 km',
    distanceFromSun: '227.9 million km (1.52 AU)',
    distanceKm: 227.9e6,
    surfaceTemp: '-87 °C to -5 °C',
    moons: 2,
    gravity: 0.38,
    dayLength: '24h 37min (a sol)',
    yearLength: '687 Earth days',
    description:
      'The Red Planet, colored by iron oxide dust. Mars has the largest volcano (Olympus Mons) and canyon (Valles Marineris) in the Solar System, and is a prime target in the search for past life.',
    facts: [
      'Mars hosts Olympus Mons, the tallest volcano in the Solar System (3× Everest).',
      'Its two moons, Phobos and Deimos, may be captured asteroids.',
      'Mars has seasons like Earth due to its axial tilt.',
      'Evidence suggests Mars once had flowing rivers and lakes.',
    ],
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'Gas giant',
    color: '#f59e0b',
    gradient: 'radial-gradient(circle at 30% 30%, #fef3c7, #f59e0b 40%, #b45309 75%, #78350f 100%)',
    glow: 'rgba(245, 158, 11, 0.5)',
    size: 2.4,
    orbit: 270,
    orbitSpeed: 34,
    diameter: '139,820 km',
    distanceFromSun: '778.5 million km (5.2 AU)',
    distanceKm: 778.5e6,
    surfaceTemp: '-108 °C (cloud tops)',
    moons: 95,
    gravity: 2.53,
    dayLength: '9h 56min',
    yearLength: '11.86 Earth years',
    description:
      'The largest planet, a gas giant with a Great Red Spot — a storm larger than Earth that has raged for centuries. Jupiter acts as a gravitational shield, deflecting many comets and asteroids.',
    facts: [
      'Jupiter is so large that all other planets would fit inside it.',
      "The Great Red Spot is a storm that has lasted at least 350 years.",
      'Jupiter has 95 known moons, including the four large Galilean moons.',
      'It has the shortest day of all planets despite its size.',
    ],
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'Gas giant',
    color: '#fbbf24',
    gradient: 'radial-gradient(circle at 30% 30%, #fef9c3, #fbbf24 40%, #ca8a04 80%, #713f12 100%)',
    glow: 'rgba(251, 191, 36, 0.5)',
    size: 2.1,
    orbit: 332,
    orbitSpeed: 44,
    diameter: '116,460 km',
    distanceFromSun: '1.43 billion km (9.54 AU)',
    distanceKm: 1.43e9,
    surfaceTemp: '-139 °C (cloud tops)',
    moons: 146,
    gravity: 1.07,
    dayLength: '10h 42min',
    yearLength: '29.5 Earth years',
    description:
      'Famous for its spectacular ring system made of ice and rock particles. Saturn is the least dense planet — it would float in a sufficiently large body of water.',
    facts: [
      'Saturn would float in water — it is less dense than water.',
      'Its rings span up to 282,000 km wide but are only ~10 m thick.',
      'Saturn has 146 confirmed moons, the most of any planet.',
      'Its moon Titan has lakes of liquid methane.',
    ],
    hasRing: true,
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'Ice giant',
    color: '#06b6d4',
    gradient: 'radial-gradient(circle at 30% 30%, #cffafe, #06b6d4 45%, #155e75 100%)',
    glow: 'rgba(6, 182, 212, 0.5)',
    size: 1.5,
    orbit: 388,
    orbitSpeed: 54,
    diameter: '50,724 km',
    distanceFromSun: '2.87 billion km (19.2 AU)',
    distanceKm: 2.87e9,
    surfaceTemp: '-197 °C (cloud tops)',
    moons: 28,
    gravity: 0.89,
    dayLength: '17h 14min',
    yearLength: '84 Earth years',
    description:
      'An ice giant that rotates on its side — its axis is tilted 98°, likely from an ancient collision. This causes each pole to face the Sun for 42 years at a time.',
    facts: [
      'Uranus rotates on its side with a 98° axial tilt.',
      'It was the first planet discovered with a telescope (1781).',
      'Its blue-green color comes from methane in the atmosphere.',
      'Each pole gets 42 years of continuous sunlight, then 42 of darkness.',
    ],
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'Ice giant',
    color: '#3b82f6',
    gradient: 'radial-gradient(circle at 30% 30%, #bfdbfe, #3b82f6 45%, #1e3a8a 100%)',
    glow: 'rgba(59, 130, 246, 0.6)',
    size: 1.45,
    orbit: 436,
    orbitSpeed: 64,
    diameter: '49,244 km',
    distanceFromSun: '4.50 billion km (30.05 AU)',
    distanceKm: 4.5e9,
    surfaceTemp: '-201 °C (cloud tops)',
    moons: 16,
    gravity: 1.14,
    dayLength: '16h 6min',
    yearLength: '165 Earth years',
    description:
      'The most distant planet, a windy blue ice giant. Neptune was discovered through mathematical prediction before being observed with a telescope. It has the strongest winds in the Solar System.',
    facts: [
      'Neptune has the fastest winds in the Solar System (2,100 km/h).',
      'It was discovered by mathematics before being seen in 1846.',
      'Neptune has only completed one orbit since its discovery.',
      'Its moon Triton orbits backwards and may be a captured Kuiper Belt object.',
    ],
  },
];

export const ALL_BODIES = [SUN, ...PLANETS];

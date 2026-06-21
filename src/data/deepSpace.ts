export type DeepSpaceObject = {
  id: string;
  name: string;
  category: 'galaxy' | 'nebula' | 'black-hole' | 'exoplanet';
  subType: string;
  distance: string;
  description: string;
  facts: string[];
  image: string;
  accent: string;
};

export const DEEP_SPACE_CATEGORIES = [
  {
    id: 'galaxy',
    name: 'Galaxies',
    description:
      'Vast gravitationally-bound systems of stars, gas, dust, and dark matter.',
    subTypes: [
      { id: 'spiral', name: 'Spiral Galaxies' },
      { id: 'elliptical', name: 'Elliptical Galaxies' },
      { id: 'irregular', name: 'Irregular Galaxies' },
    ],
  },
  {
    id: 'nebula',
    name: 'Nebulae',
    description: 'Interstellar clouds where stars are born, live, and die.',
    subTypes: [
      { id: 'emission', name: 'Emission Nebulae' },
      { id: 'planetary', name: 'Planetary Nebulae' },
      { id: 'reflection', name: 'Reflection Nebulae' },
    ],
  },
  {
    id: 'black-hole',
    name: 'Black Holes',
    description: 'Regions of spacetime so dense that nothing — not even light — can escape.',
    subTypes: [
      { id: 'stellar', name: 'Stellar Black Holes' },
      { id: 'supermassive', name: 'Supermassive Black Holes' },
      { id: 'event-horizon', name: 'Event Horizon Concepts' },
    ],
  },
  {
    id: 'exoplanet',
    name: 'Exoplanets',
    description: 'Planets orbiting stars beyond our Solar System.',
    subTypes: [
      { id: 'habitable', name: 'Habitable Zone Planets' },
      { id: 'super-earth', name: 'Super Earths' },
      { id: 'gas-giant', name: 'Gas Giants' },
    ],
  },
] as const;

export const DEEP_SPACE_OBJECTS: DeepSpaceObject[] = [
  {
    id: 'milky-way',
    name: 'Milky Way',
    category: 'galaxy',
    subType: 'spiral',
    distance: 'We are inside it (~100,000 ly across)',
    description:
      'Our home galaxy, a barred spiral containing 100–400 billion stars. The Solar System sits in the Orion Arm, about 26,000 light-years from the galactic center.',
    facts: [
      'Hosts a supermassive black hole — Sagittarius A* — at its center.',
      'On a clear night with no light pollution, its band is visible across the sky.',
      'It is on a collision course with the Andromeda Galaxy in ~4.5 billion years.',
    ],
    image:
      'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-blue-500 to-purple-600',
  },
  {
    id: 'andromeda',
    name: 'Andromeda Galaxy (M31)',
    category: 'galaxy',
    subType: 'spiral',
    distance: '2.537 million light-years',
    description:
      'The nearest large spiral galaxy to the Milky Way and the most distant object visible to the naked eye. Andromeda contains roughly one trillion stars.',
    facts: [
      'Visible without a telescope from dark skies as a faint smudge.',
      'It will merge with the Milky Way in ~4.5 billion years.',
      'Has its own population of satellite galaxies.',
    ],
    image:
      'https://images.pexels.com/photos/73910/pexels-photo-73910.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-cyan-500 to-blue-700',
  },
  {
    id: 'pinwheel',
    name: 'Pinwheel Galaxy (M101)',
    category: 'galaxy',
    subType: 'spiral',
    distance: '21 million light-years',
    description:
      'A face-on spiral galaxy with grand-design spiral arms dotted with bright pink star-forming regions. Its symmetry makes it a textbook spiral.',
    facts: [
      'Spans about 170,000 light-years across — larger than the Milky Way.',
      'Hosted a famous Type Ia supernova in 2011.',
      'Imaged in stunning detail by the JWST and Hubble.',
    ],
    image:
      'https://images.pexels.com/photos/2150/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-violet-500 to-fuchsia-600',
  },
  {
    id: 'm87',
    name: 'Messier 87',
    category: 'galaxy',
    subType: 'elliptical',
    distance: '53.5 million light-years',
    description:
      'A supergiant elliptical galaxy in the Virgo Cluster, home to the first black hole ever directly imaged. Its stars form a near-featureless glowing ellipsoid.',
    facts: [
      'Hosts the supermassive black hole M87* — first ever imaged (2019).',
      'Spits a 5,000-light-year jet of plasma from its core.',
      'Contains ~1 trillion stars.',
    ],
    image:
      'https://images.pexels.com/photos/957040/pexels-photo-957040.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-amber-500 to-orange-700',
  },
  {
    id: 'centaurus-a',
    name: 'Centaurus A',
    category: 'galaxy',
    subType: 'elliptical',
    distance: '13 million light-years',
    description:
      'A peculiar galaxy — an elliptical that consumed a spiral, leaving a dark dust lane across its face. One of the closest active galactic nuclei to Earth.',
    facts: [
      'Has a powerful relativistic jet from its central black hole.',
      'Its dark dust lane is the remnant of a galaxy collision.',
      'One of the closest active galaxies to the Milky Way.',
    ],
    image:
      'https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-orange-500 to-red-700',
  },
  {
    id: 'large-magellanic',
    name: 'Large Magellanic Cloud',
    category: 'galaxy',
    subType: 'irregular',
    distance: '163,000 light-years',
    description:
      'A satellite galaxy of the Milky Way, visible from the southern hemisphere. This irregular dwarf was the site of the famous SN 1987A supernova.',
    facts: [
      'The fourth largest galaxy in our Local Group.',
      'Hosts the Tarantula Nebula, the most active star-forming region nearby.',
      'Will eventually be consumed by the Milky Way.',
    ],
    image:
      'https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-pink-500 to-rose-600',
  },
  {
    id: 'orion-nebula',
    name: 'Orion Nebula (M42)',
    category: 'nebula',
    subType: 'emission',
    distance: '1,344 light-years',
    description:
      "The brightest nebula in the night sky and the nearest region of massive star formation to Earth. A glowing cloud of ionized hydrogen energized by hot young stars.",
    facts: [
      'Visible to the naked eye in the sword of Orion.',
      'Active stellar nursery forming thousands of new stars.',
      'Hosts the famous Trapezium cluster of hot young OB stars.',
    ],
    image:
      'https://images.pexels.com/photos/95706/pexels-photo-95706.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-orange-400 to-pink-600',
  },
  {
    id: 'pillars',
    name: 'Pillars of Creation',
    category: 'nebula',
    subType: 'emission',
    distance: '6,500 light-years',
    description:
      'The towering clouds of cold gas and dust in the Eagle Nebula (M16), sculpted by winds from newborn stars. JWST revealed them in breathtaking infrared clarity.',
    facts: [
      'Made iconic by Hubble in 1995 and re-imaged by JWST in 2022.',
      'Each pillar is several light-years tall.',
      'They are eroding star-forming regions inside M16.',
    ],
    image:
      'https://images.pexels.com/photos/41162/pexels-photo-41162.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-amber-400 to-purple-700',
  },
  {
    id: 'cat-eye',
    name: "Cat's Eye Nebula",
    category: 'nebula',
    subType: 'planetary',
    distance: '3,300 light-years',
    description:
      'A complex and intricate planetary nebula — not the birth of a planet, but the death throes of a Sun-like star shedding its outer layers into concentric shells.',
    facts: [
      'A dying star shedding its outer atmosphere.',
      'Reveals the far-future fate of our Sun in ~5 billion years.',
      'Has at least 11 concentric shells of gas.',
    ],
    image:
      'https://images.pexels.com/photos/73833/pexels-photo-73833.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-teal-400 to-blue-700',
  },
  {
    id: 'ring-nebula',
    name: 'Ring Nebula (M57)',
    category: 'nebula',
    subType: 'planetary',
    distance: '2,283 light-years',
    description:
      'A planetary nebula shaped like a smoke ring: the glowing outer atmosphere of a dying Sun-like star. The central white dwarf ionizes the ring.',
    facts: [
      'Shaped like a doughnut of glowing gas.',
      'The central star is a white dwarf, the exposed core of the dying star.',
      'Easily visible through a modest amateur telescope.',
    ],
    image:
      'https://images.pexels.com/photos/95708/pexels-photo-95708.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-cyan-400 to-violet-700',
  },
  {
    id: 'pleiades',
    name: 'Pleiades (M45)',
    category: 'nebula',
    subType: 'reflection',
    distance: '444 light-years',
    description:
      'The Seven Sisters — a young open star cluster wrapped in faint blue reflection nebulosity. The glow is starlight scattering off interstellar dust, not emission.',
    facts: [
      'Reflection nebulae appear blue because dust scatters blue light.',
      'Contains over 1,000 stars, but only 6–7 are naked-eye visible.',
      'One of the closest open star clusters to Earth.',
    ],
    image:
      'https://images.pexels.com/photos/95703/pexels-photo-95703.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-sky-400 to-indigo-700',
  },
  {
    id: 'witch-head',
    name: 'Witch Head Nebula (IC 2118)',
    category: 'nebula',
    subType: 'reflection',
    distance: '900 light-years',
    description:
      "A faint reflection nebula resembling a witch's profile, glowing blue from light of the nearby bright star Rigel scattering off its dust grains.",
    facts: [
      'Named for its witch-like silhouette.',
      'Glow is reflected starlight, not the nebula emitting its own light.',
      'Located near the bright star Rigel in Orion.',
    ],
    image:
      'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-blue-400 to-slate-600',
  },
  {
    id: 'cygnus-x1',
    name: 'Cygnus X-1',
    category: 'black-hole',
    subType: 'stellar',
    distance: '7,200 light-years',
    description:
      'The first black hole ever widely accepted. A stellar-mass black hole (~21 solar masses) feeding off its blue supergiant companion star in a binary system.',
    facts: [
      'First confirmed stellar black hole (1971).',
      'Subject of a famous bet between Hawking and Thorne (Hawking lost).',
      'About 21 times the mass of the Sun.',
    ],
    image:
      'https://images.pexels.com/photos/73830/pexels-photo-73830.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-red-500 to-zinc-900',
  },
  {
    id: 'sgr-a',
    name: 'Sagittarius A*',
    category: 'black-hole',
    subType: 'supermassive',
    distance: '26,000 light-years (galactic center)',
    description:
      'The supermassive black hole at the center of the Milky Way. With a mass of ~4.3 million Suns, it was the second black hole ever directly imaged by the Event Horizon Telescope.',
    facts: [
      'Imaged in 2022 — humanity\'s first direct image of our own galactic black hole.',
      'Four million times the mass of the Sun.',
      'Sits at the very center of the Milky Way.',
    ],
    image:
      'https://images.pexels.com/photos/41953/pexels-photo-41953.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-orange-500 to-black',
  },
  {
    id: 'm87-star',
    name: 'M87*',
    category: 'black-hole',
    subType: 'supermassive',
    distance: '53.5 million light-years',
    description:
      'At 6.5 billion solar masses, this supermassive black hole at the core of galaxy M87 produced the first-ever direct image of a black hole in 2019 — a glowing ring around a dark shadow.',
    facts: [
      'The very first black hole ever imaged (April 2019).',
      '6.5 billion times the mass of the Sun.',
      'Drives a relativistic jet stretching 5,000 light-years.',
    ],
    image:
      'https://images.pexels.com/photos/957040/pexels-photo-957040.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-amber-500 to-black',
  },
  {
    id: 'event-horizon-concept',
    name: 'The Event Horizon',
    category: 'black-hole',
    subType: 'event-horizon',
    distance: 'Concept — not a single object',
    description:
      'The boundary of no return around a black hole. Once crossed, nothing — not even light — has enough velocity to escape. Its size depends only on mass: a sphere of radius equal to the Schwarzschild radius.',
    facts: [
      'Crossing it is a one-way trip — nothing escapes, not even light.',
      'Its radius scales linearly with mass: ~3 km per solar mass.',
      'Near it, time itself appears to slow for an outside observer.',
    ],
    image:
      'https://images.pexels.com/photos/73833/pexels-photo-73833.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-violet-500 to-black',
  },
  {
    id: 'trappist-1e',
    name: 'TRAPPIST-1e',
    category: 'exoplanet',
    subType: 'habitable',
    distance: '40.7 light-years',
    description:
      "One of seven Earth-sized planets around the ultracool dwarf star TRAPPIST-1. TRAPPIST-1e sits in the habitable zone and may have conditions similar to Earth's — possibly even a temperate surface ocean.",
    facts: [
      'Lies inside its star\'s habitable zone.',
      'Roughly Earth-sized (0.91 Earth radii).',
      'Part of a 7-planet system where all planets could fit inside Mercury\'s orbit.',
    ],
    image:
      'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-emerald-400 to-teal-700',
  },
  {
    id: 'kepler-452b',
    name: 'Kepler-452b',
    category: 'exoplanet',
    subType: 'habitable',
    distance: '1,402 light-years',
    description:
      "Often called Earth's 'older, bigger cousin'. It orbits a Sun-like star within its habitable zone and is ~60% larger than Earth, making it a promising — if distant — candidate for rocky habitability.",
    facts: [
      'Orbits a Sun-like star in its habitable zone.',
      'About 60% larger than Earth.',
      'Receives about the same amount of energy as Earth does from the Sun.',
    ],
    image:
      'https://images.pexels.com/photos/41949/pexels-photo-41949.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-blue-400 to-emerald-700',
  },
  {
    id: 'kepler-10c',
    name: 'Kepler-10c',
    category: 'exoplanet',
    subType: 'super-earth',
    distance: '564 light-years',
    description:
      'Once nicknamed the "Mega-Earth", this super-Earth is a solid rocky world far larger and more massive than our planet, challenging assumptions that such large rocky worlds could exist.',
    facts: [
      'About 2.3 times the radius of Earth.',
      'Initially thought to be 17 Earth masses — a "Mega-Earth".',
      'A rocky world orbiting a Sun-like star every 45 days.',
    ],
    image:
      'https://images.pexels.com/photos/73833/pexels-photo-73833.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-cyan-400 to-blue-700',
  },
  {
    id: 'hd-209458b',
    name: 'HD 209458b (Osiris)',
    category: 'exoplanet',
    subType: 'gas-giant',
    distance: '159 light-years',
    description:
      'A scorching hot Jupiter — a gas giant so close to its star that its atmosphere is boiling away into space, creating a comet-like tail. The first exoplanet directly observed transiting its star.',
    facts: [
      'Nickname: "Osiris".',
      'First exoplanet seen transiting its parent star (1999).',
      'Its atmosphere is evaporating in a comet-like plume.',
    ],
    image:
      'https://images.pexels.com/photos/73833/pexels-photo-73833.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-orange-400 to-red-700',
  },
];

export type Mission = {
  id: string;
  name: string;
  agency: string;
  status: 'Active' | 'Historic' | 'Completed' | 'Ongoing';
  launched: string;
  launchedYear: number;
  destination: string;
  tagline: string;
  overview: string;
  achievements: string[];
  discoveries: string[];
  image: string;
  accent: string;
};

export const MISSIONS: Mission[] = [
  {
    id: 'apollo',
    name: 'Apollo Program',
    agency: 'NASA',
    status: 'Historic',
    launched: '1961–1972',
    launchedYear: 1961,
    destination: 'The Moon',
    tagline: 'Humanity\'s first steps on another world.',
    overview:
      'Apollo was the NASA program that landed the first humans on the Moon. Across six crewed landings between 1969 and 1972, twelve astronauts walked on the lunar surface, returning 382 kg of Moon rocks and forever changing humanity\'s sense of its place in the universe.',
    achievements: [
      'First humans to walk on the Moon (Apollo 11, July 20, 1969).',
      'Six successful crewed lunar landings.',
      'Brought back 382 kg of lunar samples.',
      'Deployed the first lunar surface science stations.',
    ],
    discoveries: [
      "The Moon rocks revealed the Moon formed from debris after a Mars-sized body slammed into the young Earth.",
      'Confirmed the Moon has no global magnetic field.',
      'Detected seismic "moonquakes" — the Moon is geologically active.',
      'Proved that humans can work, live, and travel in deep space.',
    ],
    image:
      'https://images.pexels.com/photos/73871/pexels-photo-73871.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-yellow-400 to-orange-700',
  },
  {
    id: 'voyager-1',
    name: 'Voyager 1',
    agency: 'NASA',
    status: 'Ongoing',
    launched: 'September 5, 1977',
    launchedYear: 1977,
    destination: 'Interstellar Space',
    tagline: 'The farthest human-made object, still sending signals after 45+ years.',
    overview:
      'Voyager 1 is a space probe launched to study the outer Solar System. After flybys of Jupiter and Saturn, it continued outward and, in 2012, became the first spacecraft to enter interstellar space. It still communicates with Earth from over 24 billion kilometers away.',
    achievements: [
      'First spacecraft to enter interstellar space (2012).',
      'Returned the first detailed images of Jupiter and Saturn.',
      'Took the famous "Pale Blue Dot" photo from 6 billion km away.',
      'Most distant human-made object ever.',
    ],
    discoveries: [
      'Discovered volcanic activity on Jupiter\'s moon Io — the first active volcanoes beyond Earth.',
      "Found that Saturn's moon Titan has a thick nitrogen atmosphere.",
      'Mapped Jupiter\'s ring system and many new moons.',
      'Crossed the heliopause into interstellar plasma.',
    ],
    image:
      'https://images.pexels.com/photos/95708/pexels-photo-95708.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-cyan-400 to-blue-700',
  },
  {
    id: 'voyager-2',
    name: 'Voyager 2',
    agency: 'NASA',
    status: 'Ongoing',
    launched: 'August 20, 1977',
    launchedYear: 1977,
    destination: 'Interstellar Space',
    tagline: 'The only spacecraft to visit all four giant planets.',
    overview:
      'Twin sister to Voyager 1, Voyager 2 took a grand tour trajectory that carried it past Jupiter, Saturn, and onward to Uranus and Neptune — the only spacecraft ever to visit both ice giants. It too has now entered interstellar space.',
    achievements: [
      'The only spacecraft to fly by all four outer planets.',
      'First (and only) flyby of Uranus (1986) and Neptune (1989).',
      'Second spacecraft to enter interstellar space (2018).',
      'Discovered 11 previously unknown moons.',
    ],
    discoveries: [
      "Revealed Neptune's Great Dark Spot and supersonic winds.",
      'Found that Uranus rotates on its side.',
      'Discovered rings around Uranus and Neptune.',
      'Found Triton, Neptune\'s backward-orbiting moon, likely a captured Kuiper Belt object.',
    ],
    image:
      'https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-violet-400 to-indigo-700',
  },
  {
    id: 'hubble',
    name: 'Hubble Space Telescope',
    agency: 'NASA / ESA',
    status: 'Ongoing',
    launched: 'April 24, 1990',
    launchedYear: 1990,
    destination: 'Low Earth Orbit',
    tagline: 'Three decades of the most iconic images in astronomy.',
    overview:
      'Orbiting about 540 km above Earth, Hubble has revolutionized nearly every field of astronomy. Above the distorting atmosphere, it produces razor-sharp images of planets, nebulae, and galaxies, including the famous "Deep Field" exposures that revealed thousands of galaxies in a sliver of dark sky.',
    achievements: [
      'Captured the famous "Pillars of Creation" and Deep Field images.',
      'Operated for over 30 years, serviced five times by astronauts.',
      'Revealed thousands of galaxies in the original Hubble Deep Field (1995).',
      'Provided precise data that confirmed the universe is accelerating.',
    ],
    discoveries: [
      'Helped pin down the age of the universe at ~13.8 billion years.',
      'Revealed the existence of dark energy by observing distant supernovae.',
      'Found supermassive black holes at the centers of most galaxies.',
      'Imaged protoplanetary disks around young stars — planets forming in real time.',
    ],
    image:
      'https://images.pexels.com/photos/95706/pexels-photo-95706.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-sky-400 to-purple-700',
  },
  {
    id: 'jwst',
    name: 'James Webb Space Telescope',
    agency: 'NASA / ESA / CSA',
    status: 'Active',
    launched: 'December 25, 2021',
    launchedYear: 2021,
    destination: 'Sun–Earth L2 Lagrange point',
    tagline: 'The largest, most powerful telescope ever launched into space.',
    overview:
      'JWST observes the universe primarily in infrared light, allowing it to peer through dust, see the first stars and galaxies, and characterize the atmospheres of distant exoplanets. It orbits the Sun at the L2 Lagrange point, 1.5 million km from Earth, behind a sunshield the size of a tennis court.',
    achievements: [
      'Most powerful space telescope ever built (6.5 m primary mirror).',
      'Located at the Sun-Earth L2 Lagrange point, 1.5 million km away.',
      'Successfully unfolded 344 single points of failure in deep space.',
      'Released breathtaking "first light" images in July 2022.',
    ],
    discoveries: [
      'Found galaxies more massive than expected in the very early universe, challenging cosmological models.',
      'Directly imaged exoplanet atmospheres — detecting water, CO₂, and methane.',
      'Revealed the Pillars of Creation in spectacular new infrared detail.',
      'Studied the atmospheres of TRAPPIST-1 planets for potential habitability.',
    ],
    image:
      'https://images.pexels.com/photos/73833/pexels-photo-73833.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-amber-400 to-fuchsia-700',
  },
  {
    id: 'perseverance',
    name: 'Mars Perseverance Rover',
    agency: 'NASA / JPL',
    status: 'Active',
    launched: 'July 30, 2020',
    launchedYear: 2020,
    destination: 'Mars (Jezero Crater)',
    tagline: 'Searching for signs of ancient Martian life.',
    overview:
      'Perseverance landed in Jezero Crater — a dried-up lakebed — in February 2021. It hunts for biosignatures of ancient microbial life, collects rock samples for eventual return to Earth, and deployed the Ingenuity helicopter, the first aircraft to fly on another planet.',
    achievements: [
      'Landed successfully on Mars using the "sky crane" technique.',
      'Deployed Ingenuity — first powered flight on another world (April 19, 2021).',
      'Caching rock samples for the future Mars Sample Return mission.',
      'Carries the MOXIE experiment that produced oxygen from Martian CO₂.',
    ],
    discoveries: [
      'Found Jezero Crater contained a lake and river delta billions of years ago.',
      'Detected organic molecules in Martian rocks.',
      'Ingenuity proved controlled flight is possible in the thin Martian atmosphere.',
      'Generated oxygen on Mars from atmospheric CO₂ — a first for human exploration.',
    ],
    image:
      'https://images.pexels.com/photos/73830/pexels-photo-73830.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-red-400 to-amber-700',
  },
  {
    id: 'artemis',
    name: 'Artemis Program',
    agency: 'NASA',
    status: 'Ongoing',
    launched: 'Artemis I — Nov 16, 2022',
    launchedYear: 2022,
    destination: 'The Moon and Lunar Gateway',
    tagline: 'Returning humans to the Moon — this time, to stay.',
    overview:
      'NASA\'s Artemis program aims to return astronauts to the Moon for the first time since 1972, including the first woman and first person of color. The goal is a long-term sustainable human presence on and around the Moon, paving the way for crewed missions to Mars. Artemis I flew an uncrewed Orion capsule around the Moon in 2022.',
    achievements: [
      'Artemis I: successful uncrewed flight of the Orion spacecraft around the Moon (2022).',
      'Orion traveled farther from Earth than any spacecraft rated for humans has before.',
      'Building the Lunar Gateway — a crewed outpost orbiting the Moon.',
      'Will deliver the first astronauts to the lunar south pole region.',
    ],
    discoveries: [
      'Tested the Space Launch System (SLS), the most powerful rocket ever flown.',
      'Orion captured detailed imagery of the Moon from a distant retrograde orbit.',
      'Demonstrated heat shield re-entry performance at lunar-return speeds.',
      'Setting the foundation for the first crewed missions to Mars.',
    ],
    image:
      'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-blue-400 to-violet-700',
  },
];

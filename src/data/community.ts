export const FACTS_OF_THE_DAY = [
  'Light from the Sun takes about 8 minutes 20 seconds to reach Earth.',
  'A day on Venus is longer than its year.',
  'Jupiter\'s Great Red Spot is a storm that has raged for at least 350 years.',
  'Neutron stars can spin 600 times per second.',
  'There are more stars in the universe than grains of sand on all Earth\'s beaches.',
  'Saturn is so light it would float in a bathtub.',
  'One million Earths could fit inside the Sun.',
  'The footprints on the Moon will be there for 100 million years.',
  'A single teaspoon of neutron-star material would weigh about 6 billion tons.',
  'Space is completely silent — there is no medium for sound to travel through.',
];

export type Resource = {
  title: string;
  author: string;
  rating: number;
  tag: string;
  link: string;
  accent: string;
};

export const RECOMMENDED_BOOKS: Resource[] = [
  {
    title: 'Astrophysics for People in a Hurry',
    author: 'Neil deGrasse Tyson',
    rating: 5,
    tag: 'Introduction',
    link: 'https://www.goodreads.com/book/show/32675392-astrophysics-for-people-in-a-hurry',
    accent: 'from-cosmic-cyan to-cosmic-blue',
  },
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    rating: 5,
    tag: 'Classic',
    link: 'https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time',
    accent: 'from-nebula-violet to-nebula-magenta',
  },
  {
    title: 'Cosmos',
    author: 'Carl Sagan',
    rating: 5,
    tag: 'Inspiring',
    link: 'https://www.goodreads.com/book/show/55030.Cosmos',
    accent: 'from-star-gold to-star-orange',
  },
  {
    title: 'The Martian',
    author: 'Andy Weir',
    rating: 5,
    tag: 'Fiction',
    link: 'https://www.goodreads.com/book/show/18007564-the-martian',
    accent: 'from-red-400 to-amber-600',
  },
];

export const RECOMMENDED_DOCUMENTARIES: Resource[] = [
  {
    title: 'Cosmos: A Spacetime Odyssey',
    author: 'Neil deGrasse Tyson',
    rating: 5,
    tag: 'Series',
    link: 'https://www.imdb.com/title/tt2395695/',
    accent: 'from-cosmic-blue to-nebula-violet',
  },
  {
    title: 'The Universe',
    author: 'History Channel',
    rating: 4,
    tag: 'Series',
    link: 'https://www.imdb.com/title/tt1051155/',
    accent: 'from-cyan-500 to-blue-700',
  },
  {
    title: 'Apollo 11',
    author: 'Todd Douglas Miller',
    rating: 5,
    tag: 'Documentary film',
    link: 'https://www.imdb.com/title/tt8772262/',
    accent: 'from-amber-400 to-orange-700',
  },
  {
    title: 'Challenger: The Final Flight',
    author: 'Netflix',
    rating: 4,
    tag: 'Series',
    link: 'https://www.imdb.com/title/tt12003644/',
    accent: 'from-fuchsia-500 to-red-700',
  },
];

export type AstronomyLink = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

export const ASTRONOMY_RESOURCES: AstronomyLink[] = [
  {
    title: 'NASA',
    description: 'Latest missions, imagery, and discoveries from the U.S. space agency.',
    icon: 'Rocket',
    link: 'https://www.nasa.gov',
  },
  {
    title: 'ESA - European Space Agency',
    description: 'Europe\'s hub for space science, missions, and imagery.',
    icon: 'Globe',
    link: 'https://www.esa.int',
  },
  {
    title: 'JWST News',
    description: 'Real-time news and imagery from the James Webb Space Telescope.',
    icon: 'Telescope',
    link: 'https://webb.nasa.gov',
  },
  {
    title: 'Sky & Telescope',
    description: 'Magazine for amateur astronomers — sky charts, observing tips, and news.',
    icon: 'Newspaper',
    link: 'https://skyandtelescope.org',
  },
  {
    title: 'Heavens-Above',
    description: 'Find satellites, the ISS, and bright passes of planets over your location.',
    icon: 'Satellite',
    link: 'https://www.heavens-above.com',
  },
  {
    title: 'Stellarium Web',
    description: 'A free, open-source, incredibly realistic planetarium that runs in your browser.',
    icon: 'Eye',
    link: 'https://stellarium-web.org',
  },
];

export type CosmicEvent = {
  id: string;
  epochLabel: string;
  timeAgo: string;
  title: string;
  category: 'big-bang' | 'matter' | 'stars' | 'galaxies' | 'milky-way' | 'solar' | 'life' | 'spaceflight' | 'modern';
  description: string;
  /** relative position on the timeline (0–100) */
  position: number;
  accent: string;
};

export const TIMELINE_EVENTS: CosmicEvent[] = [
  {
    id: 'big-bang',
    epochLabel: 't = 0',
    timeAgo: '13.8 billion years ago',
    title: 'The Big Bang',
    category: 'big-bang',
    description:
      'The universe begins from an unimaginably hot, dense state. Space and time themselves emerge. In the first tiny fraction of a second, the universe undergoes a period of exponential expansion called inflation, stretching quantum fluctuations to cosmic scales.',
    position: 0,
    accent: 'from-white to-amber-400',
  },
  {
    id: 'matter',
    epochLabel: 't ≈ 3 minutes',
    timeAgo: '13.8 billion years ago',
    title: 'Formation of Matter',
    category: 'matter',
    description:
      'As the universe cools, protons and neutrons bind together to form the first atomic nuclei — mostly hydrogen and helium, with a trace of lithium. The universe is still a glowing opaque plasma; light cannot travel freely yet.',
    position: 4,
    accent: 'from-cyan-400 to-blue-600',
  },
  {
    id: 'recombination',
    epochLabel: 't ≈ 380,000 yr',
    timeAgo: '13.8 billion years ago',
    title: 'Light Escapes (Cosmic Microwave Background)',
    category: 'matter',
    description:
      'The universe cools enough (~3,000 K) for electrons to combine with nuclei, forming the first neutral atoms. Photons can finally travel freely — the afterglow of this moment persists today as the Cosmic Microwave Background.',
    position: 8,
    accent: 'from-blue-400 to-indigo-600',
  },
  {
    id: 'first-stars',
    epochLabel: 't ≈ 200 million yr',
    timeAgo: '13.6 billion years ago',
    title: 'The First Stars',
    category: 'stars',
    description:
      'Gravity amplifies tiny density ripples into the first collapsing gas clouds. The "Population III" stars — massive, brilliant, and short-lived — ignite, flooding the dark universe with the first light and forging the first heavy elements.',
    position: 22,
    accent: 'from-amber-300 to-orange-600',
  },
  {
    id: 'first-galaxies',
    epochLabel: 't ≈ 400 million yr',
    timeAgo: '13.4 billion years ago',
    title: 'The First Galaxies',
    category: 'galaxies',
    description:
      "Small proto-galaxies begin to merge. JWST has spotted galaxies from this era — already surprisingly massive and structured — challenging models of how quickly the cosmos organized itself into the shapes we know.",
    position: 32,
    accent: 'from-violet-400 to-purple-700',
  },
  {
    id: 'milky-way',
    epochLabel: 't ≈ 1.5 billion yr',
    timeAgo: '12.3 billion years ago',
    title: 'The Milky Way Forms',
    category: 'milky-way',
    description:
      'Through many mergers, our galaxy takes shape. Its oldest stars, in the galactic halo, date from this era, making the Milky Way one of the oldest galaxies in the known universe — a truly ancient cosmic structure.',
    position: 45,
    accent: 'from-fuchsia-400 to-purple-700',
  },
  {
    id: 'solar-system',
    epochLabel: 't ≈ 9.2 billion yr',
    timeAgo: '4.6 billion years ago',
    title: 'Solar System Formation',
    category: 'solar',
    description:
      'A giant molecular cloud collapses into a spinning disk. The Sun ignites at the center, and planets condense from the disk around it. Earth and the other worlds of our solar system are born from leftover dust and gas.',
    position: 62,
    accent: 'from-yellow-400 to-amber-600',
  },
  {
    id: 'life',
    epochLabel: 't ≈ 10 billion yr',
    timeAgo: '3.8 billion years ago',
    title: 'Emergence of Life on Earth',
    category: 'life',
    description:
      'Within a few hundred million years of Earth cooling, the first microscopic life appears. From these humble beginnings, over billions of years, life evolves into the stunning biological complexity we see today, eventually culminating in a species curious enough to look up.',
    position: 75,
    accent: 'from-emerald-400 to-teal-700',
  },
  {
    id: 'spaceflight',
    epochLabel: 't − 67 yr',
    timeAgo: '1957 CE',
    title: 'The Space Age Begins',
    category: 'spaceflight',
    description:
      'On October 4, 1957, the Soviet Union launches Sputnik 1 — the first artificial satellite. Just 12 years later, Apollo 11 puts the first humans on the Moon. For the first time in 13.8 billion years, life leaves its planet.',
    position: 89,
    accent: 'from-sky-400 to-blue-700',
  },
  {
    id: 'modern',
    epochLabel: 'today',
    timeAgo: '2020s CE',
    title: 'Modern Astronomy',
    category: 'modern',
    description:
      'The launch of JWST, gravitational-wave observatories, and rovers on Mars open a new golden age. We have imaged black holes, mapped a billion stars, and detected thousands of exoplanets. The universe is more knowable than ever — and more mysterious.',
    position: 100,
    accent: 'from-cyan-400 via-purple-500 to-pink-500',
  },
];

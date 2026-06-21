export type Discovery = {
  id: string;
  title: string;
  category: 'Exoplanet' | 'Black Hole' | 'Gravitational Wave' | 'Webb Finding' | 'Galaxy';
  date: string;
  source: string;
  summary: string;
  detail: string;
  accent: string;
};

export const DISCOVERIES: Discovery[] = [
  {
    id: 'jwst-early-galaxies',
    title: 'JWST Spots Unexpectedly Massive Early Galaxies',
    category: 'Webb Finding',
    date: '2022',
    source: 'James Webb Space Telescope',
    summary:
      'JWST detected galaxies far more massive than standard cosmology predicts in the first 500 million years — fueling debate about galaxy formation.',
    detail:
      'Several galaxies observed by JWST appear far more massive and structured at redshifts greater than 10 than models predicted. Some researchers have proposed they could point to tweaks in cosmology or to a different early-universe mode of star formation — a finding described as the most surprising result from the telescope so far.',
    accent: 'from-amber-400 to-fuchsia-600',
  },
  {
    id: 'sgr-a-image',
    title: 'First Image of the Milky Way\'s Black Hole',
    category: 'Black Hole',
    date: '2022',
    source: 'Event Horizon Telescope',
    summary:
      'Astronomers captured the first image of Sagittarius A* — the supermassive black hole at the center of the Milky Way.',
    detail:
      'Following the 2019 image of M87*, the Event Horizon Telescope collaboration produced the image of Sagittarius A*, our galaxy\'s own central black hole of about 4.3 million solar masses. The image shows the glowing ring of gas around the black hole\'s shadow, confirming predictions of Einstein\'s general relativity.',
    accent: 'from-orange-400 to-zinc-800',
  },
  {
    id: 'gw150914',
    title: 'First Detection of Gravitational Waves',
    category: 'Gravitational Wave',
    date: '2015',
    source: 'LIGO / Virgo',
    summary:
      'Scientists directly detected gravitational waves for the first time — ripples in spacetime produced by two merging black holes.',
    detail:
      'On September 14, 2015, the twin LIGO detectors measured a tiny distortion of spacetime (smaller than a proton) produced by the merger of two black holes 1.3 billion light-years away. The detection, announced in 2016, confirmed a 100-year-old prediction of Einstein\'s general relativity and opened an entirely new way to observe the universe.',
    accent: 'from-violet-400 to-blue-700',
  },
  {
    id: 'trappist',
    title: 'Seven Earth-Sized Planets Around TRAPPIST-1',
    category: 'Exoplanet',
    date: '2017',
    source: 'ESO / TRAPPIST',
    summary:
      'Astronomers announced a system of seven Earth-sized planets around the nearby ultracool dwarf star TRAPPIST-1, three in the habitable zone.',
    detail:
      'Located about 40 light-years away, the TRAPPIST-1 system was the largest known group of Earth-sized planets orbiting a single star. At least three lie in the star\'s habitable zone, where liquid water could potentially exist, making it a prime target for atmospheric study with the JWST.',
    accent: 'from-emerald-400 to-teal-700',
  },
  {
    id: 'voyager-interstellar',
    title: 'Voyager 1 Enters Interstellar Space',
    category: 'Webb Finding',
    date: '2012',
    source: 'NASA / JPL',
    summary:
      'Voyager 1 became the first human-made object to leave the Sun\'s heliosphere and enter interstellar space.',
    detail:
      'In 2012 NASA announced that Voyager 1 had crossed the heliopause — the boundary where the Sun\'s solar wind is stopped by interstellar medium — at about 121 AU from Earth. The probe, launched in 1977, is still transmitting weak signals from over 24 billion kilometers away.',
    accent: 'from-cyan-400 to-blue-700',
  },
  {
    id: 'hd-cosmic-web',
    title: 'Giant Arc of Galaxies Challenges Cosmology',
    category: 'Galaxy',
    date: '2021',
    source: 'SDSS / Independent Surveys',
    summary:
      'Astronomers identified a vast structure of galaxies spanning 3.3 billion light-years — too large to fit in standard models.',
    detail:
      'The "Giant Arc" — a crescent of galaxies 3.3 billion light-years across, at a distance of about 9.2 billion light-years — appears too large to exist under the cosmological principle, which assumes matter is evenly distributed on the largest scales. If confirmed, it could deepen the debate about cosmic structure at the grandest scales.',
    accent: 'from-fuchsia-400 to-purple-700',
  },
];

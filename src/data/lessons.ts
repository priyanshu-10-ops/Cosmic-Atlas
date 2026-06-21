export type Lesson = {
  id: string;
  title: string;
  blurb: string;
  duration: string;
  readingTime: string;
  content: { heading: string; body: string }[];
};

export type LearningPath = {
  id: 'beginner' | 'intermediate' | 'advanced';
  name: string;
  level: string;
  description: string;
  icon: string;
  accent: string;
  lessons: Lesson[];
};

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'beginner',
    name: 'Foundations of Astronomy',
    level: 'Beginner',
    description: 'Start your cosmic journey with the essential building blocks of the universe.',
    icon: 'Sparkles',
    accent: 'from-cosmic-cyan to-cosmic-blue',
    lessons: [
      {
        id: 'what-are-stars',
        title: 'What Are Stars?',
        blurb: 'The glowing engines of the cosmos — how stars shine, form, and die.',
        duration: '12 min',
        readingTime: '4 min',
        content: [
          {
            heading: 'The nature of stars',
            body: 'A star is a luminous sphere of plasma held together by its own gravity. It shines by fusing lighter atomic nuclei into heavier ones in its core, releasing enormous energy through the most famous equation in physics: E = mc². The Sun, our nearest star, converts roughly 600 million tons of hydrogen into helium every second.',
          },
          {
            heading: 'How stars are born',
            body: 'Stars form in vast cold clouds of gas and dust called nebulae. Gravity pulls clumps of this material together until the core becomes hot and dense enough for nuclear fusion to ignite. This moment, when a new star "turns on," ends billions of years of slow gravitational collapse.',
          },
          {
            heading: 'Color tells the temperature',
            body: 'A star\'s color directly reveals its surface temperature: blue stars are the hottest (above 30,000 K), while red stars are the coolest (around 3,000 K). Our Sun, a yellow star, sits in the moderate range at about 5,500 °C.',
          },
          {
            heading: 'Why stars matter',
            body: 'Stars are cosmic factories. Every atom heavier than hydrogen and helium was forged inside a star and scattered across space when that star died. The iron in your blood and the calcium in your bones were literally made inside stars billions of years ago.',
          },
        ],
      },
      {
        id: 'how-gravity-works',
        title: 'How Gravity Works',
        blurb: "The invisible force that builds galaxies, holds solar systems together, and bends light itself.",
        duration: '15 min',
        readingTime: '5 min',
        content: [
          {
            heading: 'The universal force',
            body: 'Gravity is the attraction between any two objects with mass. It is by far the weakest of the four fundamental forces, yet it dominates the universe at large scales because it has infinite range and always attracts. The same force that pulls an apple to the ground binds the Moon in orbit.',
          },
          {
            heading: "Newton's law of gravitation",
            body: 'Isaac Newton showed that the gravitational force between two masses is proportional to the product of their masses and inversely proportional to the square of the distance between them. Double the distance, and the force drops to one-quarter.',
          },
          {
            heading: "Einstein's deeper picture",
            body: 'In 1915 Einstein reimagined gravity not as a force, but as the warping of spacetime by mass and energy. Planets orbit the Sun not because a "force" pulls them, but because they are following the straightest possible path through curved spacetime — like a marble rolling around a funnel.',
          },
          {
            heading: 'Gravity is everywhere',
            body: 'Gravity binds moons to planets, planets to stars, and stars into galaxies. It shapes the universe on the grandest scales, and at the extreme — inside black holes — it becomes so intense that not even light can escape its pull.',
          },
        ],
      },
      {
        id: 'understanding-light',
        title: 'Understanding Light',
        blurb: 'Almost everything we know about the cosmos comes to us as light. Learn how to decode it.',
        duration: '13 min',
        readingTime: '4 min',
        content: [
          {
            heading: 'Light is an electromagnetic wave',
            body: 'Visible light is just a tiny slice of the electromagnetic spectrum — which also includes radio, infrared, ultraviolet, X-rays, and gamma rays. They are all the same phenomenon, differing only in wavelength. Telescopes tuned to different wavelengths reveal entirely different universes.',
          },
          {
            heading: 'Light as a fingerprint',
            body: 'When light passes through a star or planet\'s atmosphere, atoms absorb or emit specific wavelengths, producing dark or bright spectral lines. These lines are unique to each element — like barcodes. By reading them, astronomers can determine a star\'s composition, temperature, and velocity without ever leaving Earth.',
          },
          {
            heading: 'The Doppler shift',
            body: 'When a light source moves toward you, its light is blueshifted (compressed to shorter wavelengths); when it moves away, it is redshifted. By measuring these shifts, astronomer Edwin Hubble discovered in 1929 that distant galaxies are racing away from us — the universe is expanding.',
          },
          {
            heading: 'Light is a time machine',
            body: 'Light travels at a finite speed — about 300,000 km per second. When you look at the Sun, you see it as it was 8 minutes ago. Looking at distant galaxies shows us the universe as it was billions of years in the past. Telescopes really are time machines.',
          },
        ],
      },
    ],
  },
  {
    id: 'intermediate',
    name: 'Stellar & Galactic Evolution',
    level: 'Intermediate',
    description: 'Dive deeper into how stars live and die, how galaxies form, and the engines powering the cosmos.',
    icon: 'Orbit',
    accent: 'from-nebula-violet to-nebula-magenta',
    lessons: [
      {
        id: 'stellar-evolution',
        title: 'Stellar Evolution',
        blurb: 'Follow a star across billions of years: nebula, protostar, main sequence, and its spectacular death.',
        duration: '18 min',
        readingTime: '6 min',
        content: [
          {
            heading: 'Born in a nebula',
            body: "Every star begins life in a nebula — a colossal cloud of hydrogen and helium. Denser pockets collapse under their own gravity, heating as they squeeze. When the core reaches about 10 million degrees, hydrogen fusion ignites and a protostar is born.",
          },
          {
            heading: 'The main sequence',
            body: 'A star spends most of its life on the main sequence, steadily fusing hydrogen into helium in its core. The Sun is here now, and will remain so for about another 5 billion years. A star\'s mass decides everything: how long it lives, what color it glows, and how it dies. Massive stars burn fast and die young; small stars sip their fuel for trillions of years.',
          },
          {
            heading: 'Red giants and supergiants',
            body: 'When the hydrogen in the core runs out, the core contracts and heats up while the outer layers swell outward and cool. The Sun will one day expand into a red giant, swallowing Mercury and Venus and possibly Earth. More massive stars become enormous supergiants.',
          },
          {
            heading: 'The dramatic endings',
            body: 'Low-mass stars shed their outer layers gently into a planetary nebula, leaving behind a dense white dwarf. Stars above about 8 solar masses die in a catastrophic supernova — briefly outshining an entire galaxy. Their cores collapse into neutron stars or, if massive enough, black holes.',
          },
        ],
      },
      {
        id: 'nuclear-fusion',
        title: 'Nuclear Fusion',
        blurb: 'The process that powers every star — fusing light atoms into heavier ones and releasing immense energy.',
        duration: '14 min',
        readingTime: '5 min',
        content: [
          {
            heading: 'The proton-proton chain',
            body: 'In the Sun\'s core, four hydrogen nuclei (protons) fuse through a series of steps into a single helium nucleus. The helium nucleus is slightly less massive than the four original protons — and that missing mass becomes pure energy via E = mc². This tiny conversion powers all starlight.',
          },
          {
            heading: 'Higher elements in massive stars',
            body: 'Massive stars reach temperatures hot enough to fuse progressively heavier elements: helium into carbon, carbon into oxygen, and on up through neon, magnesium, silicon — finally stopping at iron. Each stage burns faster than the last.',
          },
          {
            heading: 'Why fusion releases energy',
            body: 'Fusion releases energy only up to iron. Fusing elements lighter than iron releases energy; fusing elements heavier than iron requires energy. This is why stars stop at iron — and why heavier elements like gold and uranium can only be forged in supernovae and neutron-star mergers.',
          },
        ],
      },
      {
        id: 'galaxy-formation',
        title: 'Galaxy Formation',
        blurb: 'How dark matter, gravity, and time assembled the cosmic structures we see today.',
        duration: '16 min',
        readingTime: '5 min',
        content: [
          {
            heading: 'From tiny ripples to galaxies',
            body: 'About 380,000 years after the Big Bang, the universe was nearly uniform, but contained tiny density fluctuations. Dark matter clumped around these slightly denser regions, and ordinary hydrogen gas fell into the resulting gravity wells, forming the first small proto-galaxies.',
          },
          {
            heading: 'Galaxies grow by merging',
            body: 'Small galaxies collided and merged over billions of years, building progressively larger ones. The Milky Way is still growing today — it is in the process of shredding and absorbing the Sagittarius Dwarf Spheroidal Galaxy.',
          },
          {
            heading: 'Dark matter holds it together',
            body: 'The visible stars in a galaxy simply do not have enough mass to keep it from flying apart — galaxies rotate too fast for their luminous matter alone. We infer the existence of a massive halo of invisible dark matter surrounding every galaxy, providing the extra gravity.',
          },
        ],
      },
    ],
  },
  {
    id: 'advanced',
    name: 'Frontiers of Modern Physics',
    level: 'Advanced',
    description: 'Explore the deepest modern ideas: relativity, dark matter, dark energy, and gravitational waves.',
    icon: 'Atom',
    accent: 'from-nebula-magenta to-star-orange',
    lessons: [
      {
        id: 'general-relativity',
        title: 'General Relativity',
        blurb: "Einstein's theory that reimagined gravity as the geometry of curved spacetime itself.",
        duration: '20 min',
        readingTime: '7 min',
        content: [
          {
            heading: 'Spacetime as a fabric',
            body: 'Einstein\'s general relativity (1915) describes gravity not as a force but as the curvature of a four-dimensional fabric called spacetime. Mass and energy warp this fabric, and objects moving through it follow the curves. The physicist John Wheeler summarized it: matter tells spacetime how to curve, and curved spacetime tells matter how to move.',
          },
          {
            heading: 'Time dilation',
            body: 'Gravity slows time. A clock near a massive object ticks more slowly than one far away. GPS satellites must account for this effect — without correcting for both special and general relativity, GPS positions would drift by kilometers per day.',
          },
          {
            heading: 'Tested to perfection',
            body: 'General relativity has passed every test: it correctly predicts Mercury\'s odd orbit, the bending of starlight around the Sun during a 1919 eclipse, and the recent detection of gravitational waves. It remains humanity\'s most thoroughly verified physical theory.',
          },
          {
            heading: 'Where it breaks down',
            body: "Yet general relativity cannot be reconciled with quantum mechanics. At the center of a black hole — the singularity — both theories give infinite, meaningless answers. Unifying them into a single theory of quantum gravity is the great open problem in physics.",
          },
        ],
      },
      {
        id: 'dark-matter',
        title: 'Dark Matter',
        blurb: "The invisible 85% of the universe's matter, detected only by its gravity.",
        duration: '17 min',
        readingTime: '6 min',
        content: [
          {
            heading: 'The missing mass',
            body: 'Galaxies rotate so fast that, based on the visible matter alone, they should fly apart. Vera Rubin\'s measurements in the 1970s showed this conclusively. The simplest explanation: galaxies are embedded in huge halos of unseen matter — about five times more of it than ordinary matter.',
          },
          {
            heading: 'It barely interacts',
            body: 'Dark matter does not emit, absorb, or reflect light — hence "dark." It passes through ordinary matter almost entirely undisturbed. Yet its gravity shapes the universe: it forms the cosmic web along which galaxies cluster.',
          },
          {
            heading: 'Still a mystery',
            body: 'Despite decades of experiments deep underground, in particle accelerators, and in space, no one has directly detected a dark matter particle. Its nature remains one of the greatest unsolved problems in physics.',
          },
        ],
      },
      {
        id: 'dark-energy',
        title: 'Dark Energy',
        blurb: 'The mysterious force pushing the universe apart faster and faster.',
        duration: '16 min',
        readingTime: '5 min',
        content: [
          {
            heading: 'An accelerating expansion',
            body: 'In 1998, astronomers studying distant supernovae discovered something astonishing: the expansion of the universe is not slowing down — it is speeding up. This discovery, awarded the 2011 Nobel Prize in Physics, implies the existence of a repulsive force they named dark energy.',
          },
          {
            heading: 'The leading candidate',
            body: 'The leading explanation is the cosmological constant (Λ) — an intrinsic energy density of empty space. As space expands, more vacuum appears, carrying more dark energy with it, driving an ever-faster expansion in a runaway feedback loop.',
          },
          {
            heading: 'The cosmic pie chart',
            body: 'Current measurements suggest ordinary matter makes up only ~5% of the universe, dark matter ~27%, and dark energy ~68%. You, Earth, every star you can see — the entire familiar cosmos — is just 5% of what is really out there.',
          },
        ],
      },
      {
        id: 'gravitational-waves',
        title: 'Gravitational Waves',
        blurb: 'Ripples in spacetime itself, predicted a century ago and finally detected in 2015.',
        duration: '18 min',
        readingTime: '6 min',
        content: [
          {
            heading: 'Ripples in spacetime',
            body: 'Einstein predicted in 1916 that the acceleration of massive objects should produce gravitational waves — ripples in the fabric of spacetime itself, traveling outward at the speed of light. For a century they remained entirely theoretical.',
          },
          {
            heading: 'Caught at last',
            body: 'On September 14, 2015, the LIGO observatories detected gravitational waves for the first time, produced 1.3 billion years ago by two black holes merging. The entire signal moved the mirror less than a ten-thousandth of a proton\'s width — an almost inconceivably tiny measurement.',
          },
          {
            heading: 'A new sense for astronomy',
            body: 'Gravitational waves let us "hear" the universe in an entirely new way. They reveal events that produce no light at all — like black hole mergers — and let us probe the most violent phenomena in the cosmos, opening the era of multi-messenger astronomy.',
          },
        ],
      },
    ],
  },
];

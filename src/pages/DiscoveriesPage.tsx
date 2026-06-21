import { useState } from 'react';
import { ArrowRight, Calendar, Telescope, Zap, Atom, Globe2, Star } from 'lucide-react';
import type { NavigateFn } from '../components/types';
import { DISCOVERIES, type Discovery } from '../data/discoveries';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const CATEGORIES = ['All', 'Exoplanet', 'Black Hole', 'Gravitational Wave', 'Webb Finding', 'Galaxy'] as const;

const ICONS: Record<Discovery['category'], typeof Star> = {
  Exoplanet: Globe2,
  'Black Hole': Atom,
  'Gravitational Wave': Zap,
  'Webb Finding': Telescope,
  Galaxy: Star,
};

export default function DiscoveriesPage({ navigate }: { navigate: NavigateFn }) {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>('All');
  const list = filter === 'All' ? DISCOVERIES : DISCOVERIES.filter((d) => d.category === filter);

  return (
    <div className="animate-fade-in pt-28">
      <section className="container-x px-5 md:px-8">
        <SectionHeading
          eyebrow="Latest Discoveries"
          title={<>The cutting edge of <span className="text-gradient-cosmic">cosmic discovery</span></>}
          subtitle="Breakthrough observations across astronomy and astrophysics — gathered in one modern dashboard."
        />

        {/* STATS STRIP */}
        <Reveal className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Discoveries featured', value: String(DISCOVERIES.length), icon: Telescope },
              { label: 'Decades spanned', value: '60+', icon: Calendar },
              { label: 'Telescopes involved', value: '8+', icon: Star },
              { label: 'Cosmic frontiers', value: '5', icon: Atom },
            ].map((s) => (
              <div key={s.label} className="glass-card p-5">
                <s.icon size={18} className="text-nebula-violet mb-2" />
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* FILTERS */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === c
                  ? 'bg-nebula-purple/40 text-white shadow-glow-soft'
                  : 'glass text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* DASHBOARD GRID */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((d, i) => (
            <Reveal key={d.id} delay={(i % 3) * 80}>
              <DiscoveryCard discovery={d} />
            </Reveal>
          ))}
        </div>

        {/* FEATURED */}
        <Reveal className="mt-16">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-nebula-magenta to-cosmic-blue opacity-20 blur-[100px]" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <span className="chip mb-3">Editor's pick</span>
                <h3 className="text-2xl md:text-3xl font-bold text-gradient">
                  The dawn of multi-messenger astronomy
                </h3>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  Combining gravitational-wave detectors, light telescopes, and neutrino observatories,
                  astronomers now study the universe through multiple channels simultaneously — opening
                  an entirely new window onto the cosmos.
                </p>
              </div>
              <button onClick={() => navigate('/astrophysics')} className="btn-primary group self-start md:self-auto">
                Learn the physics
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function DiscoveryCard({ discovery: d }: { discovery: Discovery }) {
  const IconComp = ICONS[d.category];
  return (
    <div className="group glass-card overflow-hidden h-full flex flex-col">
      <div className={`relative h-2 bg-gradient-to-r ${d.accent}`} />
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-2 chip">
            <IconComp size={13} className="text-nebula-violet" />
            {d.category}
          </span>
          <span className="text-xs text-slate-500">{d.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-cosmic-cyan transition-colors leading-snug">
          {d.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1">{d.source}</p>
        <p className="text-sm text-slate-400 mt-3 leading-relaxed">{d.summary}</p>
        <p className="text-sm text-slate-500 mt-3 leading-relaxed flex-1 border-t border-white/[0.06] pt-3">
          {d.detail}
        </p>
      </div>
    </div>
  );
}

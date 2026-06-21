import { useState } from 'react';
import { ArrowRight, X, Sparkles, Ruler, BookOpen } from 'lucide-react';
import type { NavigateFn } from '../components/types';
import { DEEP_SPACE_CATEGORIES, DEEP_SPACE_OBJECTS, type DeepSpaceObject } from '../data/deepSpace';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

export default function DeepSpacePage({ navigate }: { navigate: NavigateFn }) {
  const [activeCategory, setActiveCategory] = useState<string>('galaxy');
  const [activeSubType, setActiveSubType] = useState<string | 'all'>('all');
  const [selected, setSelected] = useState<DeepSpaceObject | null>(null);

  const filtered = DEEP_SPACE_OBJECTS.filter(
    (o) =>
      o.category === activeCategory &&
      (activeSubType === 'all' || o.subType === activeSubType)
  );

  return (
    <div className="animate-fade-in pt-28">
      <section className="container-x px-5 md:px-8">
        <SectionHeading
          eyebrow="Deep Space Explorer"
          title={<>Beyond the <span className="text-gradient-cosmic">Solar System</span></>}
          subtitle="Distant galaxies, glowing nebulae, monster black holes, and Earth-like exoplanets — explore the universe far from home."
        />

        {/* CATEGORY TABS */}
        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          {DEEP_SPACE_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCategory(c.id);
                setActiveSubType('all');
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === c.id
                  ? 'glass border-nebula-purple/60 text-white shadow-glow-soft'
                  : 'glass text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="glass-card p-6 md:p-8 text-center max-w-3xl mx-auto">
            <p className="text-slate-300 md:text-lg leading-relaxed">
              {DEEP_SPACE_CATEGORIES.find((c) => c.id === activeCategory)?.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveSubType('all')}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${
                  activeSubType === 'all' ? 'bg-nebula-purple/40 text-white' : 'glass text-slate-400 hover:text-white'
                }`}
              >
                All
              </button>
              {DEEP_SPACE_CATEGORIES.find((c) => c.id === activeCategory)?.subTypes.map((st) => (
                <button
                  key={st.id}
                  onClick={() => setActiveSubType(st.id)}
                  className={`px-3 py-1 rounded-full text-xs transition-colors ${
                    activeSubType === st.id ? 'bg-nebula-purple/40 text-white' : 'glass text-slate-400 hover:text-white'
                  }`}
                >
                  {st.name}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* GRID */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((obj) => (
            <DeepSpaceCard key={obj.id} obj={obj} onOpen={() => setSelected(obj)} />
          ))}
        </div>
      </section>

      {selected && <DetailModal obj={selected} navigate={navigate} onClose={() => setSelected(null)} />}
    </div>
  );
}

function DeepSpaceCard({ obj, onOpen }: { obj: DeepSpaceObject; onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="group glass-card overflow-hidden text-left relative">
      <div className="relative h-56 overflow-hidden">
        <img
          src={obj.image}
          alt={obj.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-110 group-hover:opacity-95 transition-all duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${obj.accent} opacity-40 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/40 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span className="chip capitalize">{obj.subType.replace('-', ' ')}</span>
          <span className="text-[11px] text-slate-400">{obj.distance}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white group-hover:text-cosmic-cyan transition-colors">{obj.name}</h3>
        <p className="text-sm text-slate-400 mt-2 leading-relaxed line-clamp-3">{obj.description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-xs text-nebula-violet group-hover:gap-2 transition-all">
          Explore <ArrowRight size={12} />
        </span>
      </div>
    </button>
  );
}

function DetailModal({ obj, navigate, onClose }: { obj: DeepSpaceObject; navigate: NavigateFn; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[80] bg-space-black/80 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="glass-strong rounded-t-3xl md:rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 md:h-72 overflow-hidden">
          <img src={obj.image} alt={obj.name} className="absolute inset-0 w-full h-full object-cover opacity-80" />
          <div className={`absolute inset-0 bg-gradient-to-t ${obj.accent} opacity-50 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-white/15"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            <span className="chip capitalize mb-2">{obj.subType.replace('-', ' ')}</span>
            <h2 className="text-3xl font-bold text-white">{obj.name}</h2>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="glass rounded-xl p-4 flex items-start gap-3 mb-6">
            <Ruler size={16} className="text-nebula-violet flex-shrink-0 mt-1" />
            <div>
              <div className="text-[11px] uppercase tracking-wide text-slate-500">Distance</div>
              <div className="text-sm text-white">{obj.distance}</div>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">{obj.description}</p>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-star-gold" />
              <h3 className="text-sm font-semibold text-white">Key facts</h3>
            </div>
            <ul className="space-y-2.5">
              {obj.facts.map((f, i) => (
                <li key={i} className="text-sm text-slate-400 flex gap-3 leading-relaxed">
                  <span className="text-nebula-violet flex-shrink-0">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => navigate('/astrophysics')}
            className="btn-ghost w-full mt-7 group"
          >
            <BookOpen size={16} />
            Learn the astrophysics behind this
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

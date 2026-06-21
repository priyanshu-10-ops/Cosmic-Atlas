import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Calendar, Target, Rocket } from 'lucide-react';
import { MISSIONS, type Mission } from '../data/missions';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

export default function MissionsPage({ missionId, onSelectMission }: { missionId?: string; onSelectMission?: (id: string) => void }) {
  const initial = missionId ? MISSIONS.find((m) => m.id === missionId) : null;
  const [active, setActive] = useState<Mission | null>(initial ?? null);

  const handleSelect = (m: Mission) => {
    setActive(m);
    onSelectMission?.(m.id);
  };

  if (active) {
    return <MissionDetail mission={active} onBack={() => setActive(null)} onRelated={(id) => {
      const m = MISSIONS.find((x) => x.id === id);
      if (m) handleSelect(m);
    }} />;
  }

  return (
    <div className="animate-fade-in pt-28">
      <section className="container-x px-5 md:px-8">
        <SectionHeading
          eyebrow="Space Missions Hub"
          title={<>Humanity's <span className="text-gradient-cosmic">reach for the stars</span></>}
          subtitle="From Apollo's first footsteps on the Moon to JWST's vision of the infant universe. Explore the missions that redefined what we know."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {MISSIONS.map((m, i) => (
            <Reveal key={m.id} delay={i * 60}>
              <button
                onClick={() => setActive(m)}
                className="group glass-card overflow-hidden text-left w-full relative"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-90 transition-all duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${m.accent} opacity-40 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="chip">{m.agency}</span>
                    <span className={`chip ${m.status === 'Active' || m.status === 'Ongoing' ? '!border-emerald-500/40 text-emerald-300' : ''}`}>
                      {m.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-cosmic-cyan transition-colors">{m.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{m.launched}</p>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">{m.tagline}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs text-nebula-violet group-hover:gap-2 transition-all">
                    Read full mission <ArrowRight size={12} />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function MissionDetail({ mission, onBack, onRelated }: { mission: Mission; onBack: () => void; onRelated: (id: string) => void }) {
  return (
    <div className="animate-fade-in pt-28">
      <section className="container-x px-5 md:px-8">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8">
          <ArrowLeft size={16} /> Back to all missions
        </button>

        {/* HERO */}
        <Reveal>
          <div className="relative glass-card overflow-hidden">
            <div className="relative h-72 md:h-96 overflow-hidden">
              <img src={mission.image} alt={mission.name} className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className={`absolute inset-0 bg-gradient-to-t ${mission.accent} opacity-40 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="chip">{mission.agency}</span>
                  <span className="chip">{mission.status}</span>
                  <span className="chip capitalize">{mission.destination}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white">{mission.name}</h1>
                <p className="mt-2 text-slate-300 md:text-lg">{mission.tagline}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* META */}
        <Reveal delay={120}>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="glass-card p-5 flex items-center gap-3">
              <Calendar size={20} className="text-nebula-violet" />
              <div>
                <div className="text-[11px] uppercase tracking-wide text-slate-500">Launched</div>
                <div className="text-sm text-white">{mission.launched}</div>
              </div>
            </div>
            <div className="glass-card p-5 flex items-center gap-3">
              <Target size={20} className="text-cosmic-cyan" />
              <div>
                <div className="text-[11px] uppercase tracking-wide text-slate-500">Destination</div>
                <div className="text-sm text-white">{mission.destination}</div>
                </div>
            </div>
            <div className="glass-card p-5 flex items-center gap-3">
              <Rocket size={20} className="text-star-gold" />
              <div>
                <div className="text-[11px] uppercase tracking-wide text-slate-500">Operator</div>
                <div className="text-sm text-white">{mission.agency}</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* OVERVIEW */}
        <Reveal delay={180}>
          <div className="glass-card p-6 md:p-8 mt-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">Mission overview</h2>
            <p className="text-slate-300 leading-relaxed">{mission.overview}</p>
          </div>
        </Reveal>

        {/* ACHIEVEMENTS & DISCOVERIES */}
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <Reveal>
            <div className="glass-card p-6 md:p-8 h-full">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={18} className="text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">Key achievements</h3>
              </div>
              <ul className="space-y-3">
                {mission.achievements.map((a, i) => (
                  <li key={i} className="text-sm text-slate-400 flex gap-3 leading-relaxed">
                    <span className="text-emerald-400 flex-shrink-0">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="glass-card p-6 md:p-8 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-star-gold" />
                <h3 className="text-lg font-semibold text-white">Key discoveries</h3>
              </div>
              <ul className="space-y-3">
                {mission.discoveries.map((d, i) => (
                  <li key={i} className="text-sm text-slate-400 flex gap-3 leading-relaxed">
                    <span className="text-star-gold flex-shrink-0">→</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* RELATED */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white mb-5">Explore more missions</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {MISSIONS.filter((m) => m.id !== mission.id).slice(0, 3).map((m) => (
              <button
                key={m.id}
                onClick={() => onRelated(m.id)}
                className="group text-left glass-card p-4"
              >
                <div className="text-sm font-medium text-white group-hover:text-cosmic-cyan transition-colors">{m.name}</div>
                <div className="text-xs text-slate-500 mt-1">{m.launched}</div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

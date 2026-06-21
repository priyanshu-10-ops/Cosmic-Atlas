import { useState } from 'react';
import { ArrowRight, Moon, Thermometer, Ruler, Clock, Calendar, Globe, Sparkles } from 'lucide-react';
import type { NavigateFn } from '../components/types';
import { PLANETS, SUN, type Planet } from '../data/planets';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const SCALE = 0.42; // orbit scale inside visualization

export default function SolarSystemPage({ navigate }: { navigate: NavigateFn }) {
  const [selected, setSelected] = useState<Planet | null>(PLANETS[2]); // Earth by default

  return (
    <div className="animate-fade-in pt-28">
      <section className="container-x px-5 md:px-8">
        <SectionHeading
          eyebrow="Solar System Explorer"
          title={<>The Sun and its <span className="text-gradient-cosmic">eight planets</span></>}
          subtitle="Click any planet to open its detailed panel. Explore orbits, sizes, temperatures, moons, and the facts that make each world unique."
        />

        <div className="mt-16 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          {/* ORBIT VIEW */}
          <Reveal>
            <div className="relative glass-card p-6 md:p-8 overflow-hidden aspect-square max-w-[680px] mx-auto w-full">
              <div className="absolute inset-0 bg-grid opacity-20 mask-fade-y pointer-events-none" />
              <OrbitView onSelect={setSelected} selected={selected} />
            </div>
          </Reveal>

          {/* DETAIL PANEL */}
          <div className="lg:sticky lg:top-28">
            {selected ? (
              <PlanetPanel planet={selected} navigate={navigate} />
            ) : (
              <div className="glass-card p-8 text-center text-slate-400">
                <Globe className="mx-auto mb-3 text-nebula-violet" />
                Select a planet to see its details.
              </div>
            )}
          </div>
        </div>

        {/* QUICK PLANET STRIP */}
        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelected(null)}
            className="px-3 py-1.5 rounded-full text-xs font-medium glass hover:bg-white/10 transition-colors text-slate-300"
          >
            Reset
          </button>
          {PLANETS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selected?.id === p.id
                  ? 'glass border-nebula-purple/60 text-white'
                  : 'glass text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: p.gradient, boxShadow: `0 0 8px ${p.glow}` }}
              />
              {p.name}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function OrbitView({ onSelect, selected }: { onSelect: (p: Planet) => void; selected: Planet | null }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Sun */}
      <button
        onClick={() => onSelect(SUN as Planet)}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group"
        aria-label="The Sun"
      >
        <div
          className="rounded-full animate-pulse-glow group-hover:scale-110 transition-transform"
          style={{
            width: '46px',
            height: '46px',
            background: SUN.gradient,
            boxShadow: `0 0 40px ${SUN.glow}, 0 0 80px ${SUN.glow}`,
          }}
        />
      </button>

      {PLANETS.map((p) => {
        const radius = p.orbit * SCALE;
        const isSel = selected?.id === p.id;
        const size = Math.max(10, p.size * 12);
        return (
          <div key={p.id}>
            {/* orbit ring */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                border: `1px solid ${isSel ? 'rgba(167,139,250,0.5)' : 'rgba(255,255,255,0.06)'}`,
                boxShadow: isSel ? '0 0 30px -8px rgba(167,139,250,0.5), inset 0 0 30px -8px rgba(167,139,250,0.3)' : 'none',
              }}
            />
            {/* planet on orbit */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                animation: `spin-slow ${p.orbitSpeed * 3}s linear infinite`,
              }}
            >
              <button
                onClick={() => onSelect(p)}
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform hover:scale-150"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  background: p.gradient,
                  boxShadow: `0 0 ${size}px ${p.glow}${isSel ? `, 0 0 0 3px rgba(167,139,250,0.6)` : ''}`,
                  animation: `spin-reverse ${p.orbitSpeed * 3}s linear infinite`,
                }}
                aria-label={p.name}
              >
                {p.hasRing && (
                  <span
                    className="absolute -inset-[80%] rounded-full border border-amber-200/50"
                    style={{ transform: 'rotateX(70deg) rotateZ(-12deg)' }}
                  />
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PlanetPanel({ planet, navigate }: { planet: Planet; navigate: NavigateFn }) {
  const stats = [
    { icon: Ruler, label: 'Diameter', value: planet.diameter },
    { icon: Globe, label: 'Distance from Sun', value: planet.distanceFromSun },
    { icon: Thermometer, label: 'Surface temperature', value: planet.surfaceTemp },
    { icon: Moon, label: 'Number of moons', value: String(planet.moons) },
    { icon: Clock, label: 'Day length', value: planet.dayLength },
    { icon: Calendar, label: 'Year length', value: planet.yearLength },
  ];

  return (
    <div className="animate-scale-in">
      <div className="glass-card overflow-hidden relative">
        <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-40 ${planet.hasRing ? 'bg-amber-400/30' : ''}`} style={{ background: `radial-gradient(circle, ${planet.glow}, transparent 70%)` }} />
        <div className="p-8 relative">
          <div className="flex items-start gap-5">
            <div
              className="w-20 h-20 rounded-full flex-shrink-0 animate-pulse-glow"
              style={{ background: planet.gradient, boxShadow: `0 0 30px ${planet.glow}` }}
            />
            <div className="min-w-0">
              <span className="chip">{planet.type}</span>
              <h2 className="text-3xl font-bold text-white mt-2">{planet.name}</h2>
            </div>
          </div>

          <p className="mt-5 text-slate-300 leading-relaxed">{planet.description}</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-xl p-3 flex items-start gap-3">
                <s.icon size={16} className="mt-0.5 text-nebula-violet flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wide text-slate-500">{s.label}</div>
                  <div className="text-sm text-white mt-0.5 break-words">{s.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-star-gold" />
              <h3 className="text-sm font-semibold text-white">Fun facts</h3>
            </div>
            <ul className="space-y-2">
              {planet.facts.map((f, i) => (
                <li key={i} className="text-sm text-slate-400 flex gap-3 leading-relaxed">
                  <span className="text-nebula-violet flex-shrink-0">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => navigate('/tools')}
            className="btn-ghost w-full mt-7 group"
          >
            Calculate your weight on {planet.name}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

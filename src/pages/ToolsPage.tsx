import { useState } from 'react';
import { Calculator, Ruler, Atom, Scale, ArrowRight } from 'lucide-react';
import type { NavigateFn } from '../components/types';
import { PLANETS } from '../data/planets';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

type Tab = 'weight' | 'distance' | 'lifecycle';

export default function ToolsPage({ navigate }: { navigate: NavigateFn }) {
  const [tab, setTab] = useState<Tab>('weight');

  return (
    <div className="animate-fade-in pt-28">
      <section className="container-x px-5 md:px-8">
        <SectionHeading
          eyebrow="Interactive Learning Tools"
          title={<>Experience the <span className="text-gradient-cosmic">cosmos</span> firsthand</>}
          subtitle="Calculate your weight across the Solar System, visualize the scale of cosmic distances, and follow a star through its entire life cycle."
        />

        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {[
            { id: 'weight' as Tab, label: 'Weight Calculator', icon: Scale },
            { id: 'distance' as Tab, label: 'Distance Visualizer', icon: Ruler },
            { id: 'lifecycle' as Tab, label: 'Star Lifecycle', icon: Atom },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                tab === t.id
                  ? 'glass border-nebula-purple/60 text-white shadow-glow-soft'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              <t.icon size={16} />
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {tab === 'weight' && <WeightCalculator />}
          {tab === 'distance' && <DistanceVisualizer />}
          {tab === 'lifecycle' && <StarLifecycle />}
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => navigate('/quiz')} className="btn-primary group">
            <Calculator size={18} />
            Ready to test your knowledge?
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

/* ── Weight Calculator ── */
function WeightCalculator() {
  const [input, setInput] = useState(70);
  const weight = Number.isFinite(input) && input > 0 ? input : 0;

  return (
    <Reveal>
      <div className="glass-card p-6 md:p-8">
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          <div>
            <label className="text-sm font-medium text-white">Your weight on Earth</label>
            <div className="mt-3 relative">
              <input
                type="number"
                min={0}
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-2xl font-bold text-white focus:outline-none focus:border-nebula-purple/60 focus:ring-2 focus:ring-nebula-purple/30 transition-all"
                placeholder="70"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">kg</span>
            </div>
            <input
              type="range"
              min={5}
              max={200}
              value={Math.min(200, Math.max(5, input || 70))}
              onChange={(e) => setInput(Number(e.target.value))}
              className="w-full mt-4 accent-nebula-purple"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PLANETS.map((p) => {
              const planetWeight = weight * p.gravity;
              const pct = Math.round(p.gravity * 100);
              return (
                <div key={p.id} className="glass rounded-xl p-4 flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0"
                    style={{ background: p.gradient, boxShadow: `0 0 16px ${p.glow}` }}
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white">{p.name}</div>
                    <div className="text-lg font-bold text-gradient-cosmic">
                      {planetWeight.toFixed(1)} <span className="text-xs text-slate-500">kg</span>
                    </div>
                    <div className="text-[11px] text-slate-500">{pct}% of Earth weight</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ── Cosmic Distance Visualizer ── */
const DISTANCES = [
  {
    label: 'Earth → Moon',
    distance: '384,400 km',
    lightTime: '1.28 seconds',
    description: 'Humans have crossed this distance. Light crosses it in just over a second.',
    pct: 8,
    accent: 'from-cosmic-cyan to-cosmic-blue',
  },
  {
    label: 'Earth → Sun (1 AU)',
    distance: '149.6 million km',
    lightTime: '8 min 20 sec',
    description: 'The distance from Earth to the Sun. The baseline for measuring the Solar System.',
    pct: 20,
    accent: 'from-amber-400 to-orange-600',
  },
  {
    label: 'Solar System (Sun → Neptune)',
    distance: '4.5 billion km',
    lightTime: '4 hours 10 min',
    description: 'The edge of the planetary Solar System. Voyager 1 took 35 years to leave it.',
    pct: 42,
    accent: 'from-nebula-violet to-cosmic-blue',
  },
  {
    label: 'Milky Way (diameter)',
    distance: '~100,000 light-years',
    lightTime: '100,000 years',
    description: 'Our galaxy contains 100–400 billion stars. Light needs 100,000 years to cross it.',
    pct: 78,
    accent: 'from-nebula-magenta to-nebula-violet',
  },
  {
    label: 'Observable Universe',
    distance: '~93 billion light-years',
    lightTime: '46 billion years',
    description: 'The edge of what we can see — the limit set by the age of the universe and the speed of light.',
    pct: 100,
    accent: 'from-cosmic-blue via-nebula-violet to-nebula-magenta',
  },
];

function DistanceVisualizer() {
  const [selected, setSelected] = useState(0);
  const cur = DISTANCES[selected];

  return (
    <Reveal>
      <div className="glass-card p-6 md:p-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
          <div className="space-y-2">
            {DISTANCES.map((d, i) => (
              <button
                key={d.label}
                onClick={() => setSelected(i)}
                className={`w-full text-left p-3 rounded-xl transition-all ${
                  selected === i ? 'glass-strong border-nebula-purple/40' : 'glass hover:bg-white/[0.07]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-white">{d.label}</span>
                  <span className="text-xs text-slate-500">{d.lightTime}</span>
                </div>
                <div className="text-xs text-nebula-violet mt-1">{d.distance}</div>
              </button>
            ))}
          </div>

          <div>
            <div className="relative h-3 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${cur.accent} transition-all duration-700 rounded-full`}
                style={{ width: `${cur.pct}%` }}
              />
            </div>
            {/* scale */}
            <div className="mt-2 flex justify-between text-[10px] text-slate-600">
              <span>0</span>
              <span>1 AU</span>
              <span>Solar System</span>
              <span>Galaxy</span>
              <span>Universe</span>
            </div>

            <div className="mt-8 glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wider text-slate-500">Selected scale</div>
              <div className="text-2xl font-bold text-gradient mt-1">{cur.label}</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="glass rounded-lg p-3">
                  <div className="text-[11px] uppercase tracking-wide text-slate-500">Distance</div>
                  <div className="text-sm text-white mt-0.5">{cur.distance}</div>
                </div>
                <div className="glass rounded-lg p-3">
                  <div className="text-[11px] uppercase tracking-wide text-slate-500">Light travel time</div>
                  <div className="text-sm text-white mt-0.5">{cur.lightTime}</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">{cur.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ── Star Lifecycle Simulator ── */
const STAGES = [
  {
    id: 'nebula',
    name: 'Nebula',
    description: 'A vast cloud of cold hydrogen and helium gas slowly collapsing under its own gravity. The birthplace of stars.',
    color: 'from-pink-400 to-purple-600',
    glow: 'rgba(236,72,153,0.6)',
    next: 'Protostar',
  },
  {
    id: 'protostar',
    name: 'Protostar',
    description: 'A dense, hot, glowing ball of gas — gravity has done its work, but nuclear fusion has not yet ignited.',
    color: 'from-orange-300 to-red-500',
    glow: 'rgba(251,146,60,0.6)',
    next: 'Main Sequence',
  },
  {
    id: 'main',
    name: 'Main Sequence',
    description: 'Fusion ignites! Hydrogen fuses into helium. The star spends most of its life here — the Sun is in this stage now.',
    color: 'from-yellow-300 to-amber-500',
    glow: 'rgba(251,191,36,0.7)',
    next: 'Red Giant',
  },
  {
    id: 'giant',
    name: 'Red Giant',
    description: 'Hydrogen runs out. The core contracts, outer layers swell and cool. The Sun will one day engulf Mercury and Venus.',
    color: 'from-red-400 to-orange-600',
    glow: 'rgba(239,68,68,0.6)',
    next: 'Stellar Remnant',
  },
  {
    id: 'remnant',
    name: 'Stellar Remnant',
    description: 'The end depends on mass. Low-mass stars become white dwarfs. Massive stars die in supernovae, leaving neutron stars or black holes.',
    color: 'from-cyan-300 via-slate-300 to-black',
    glow: 'rgba(148,163,184,0.6)',
    next: null,
  },
];

const FINAL_FORMS = [
  { name: 'White Dwarf', desc: 'A glowing ember of carbon and oxygen, the size of Earth.', color: 'from-slate-200 to-blue-300' },
  { name: 'Neutron Star', desc: 'An ultra-dense sphere of neutrons, 10 km across, weighing as much as the Sun.', color: 'from-cyan-300 to-blue-500' },
  { name: 'Black Hole', desc: 'A region where gravity is so strong not even light can escape.', color: 'from-orange-500 to-black' },
];

function StarLifecycle() {
  const [stage, setStage] = useState(0);
  const cur = STAGES[stage];
  const isLast = stage === STAGES.length - 1;

  return (
    <Reveal>
      <div className="glass-card p-6 md:p-8">
        {/* star visual */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div
              className="w-40 h-40 rounded-full transition-all duration-700"
              style={{
                background: `radial-gradient(circle at 35% 35%, white, var(--star-color) 40%, transparent 75%)`,
                ['--star-color' as string]: 'rgba(255,255,255,0.3)',
                boxShadow: `0 0 80px ${cur.glow}`,
              }}
            >
              <div className={`w-full h-full rounded-full bg-gradient-to-br ${cur.color} animate-pulse-glow opacity-90`} />
            </div>
          </div>
        </div>

        {/* progress dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {STAGES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setStage(i)}
              className="group flex flex-col items-center gap-1.5"
            >
              <span
                className={`w-3 h-3 rounded-full transition-all ${
                  i === stage
                    ? 'bg-gradient-to-br from-nebula-violet to-cosmic-cyan ring-4 ring-nebula-purple/30'
                    : i < stage
                    ? 'bg-nebula-violet'
                    : 'bg-white/10'
                }`}
              />
              <span className={`text-[10px] transition-colors ${i === stage ? 'text-white' : 'text-slate-600'}`}>
                {s.name}
              </span>
            </button>
          ))}
        </div>

        {/* description */}
        <div className="glass rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cur.color} text-white mb-3`}>
            Stage {stage + 1} of {STAGES.length}
          </span>
          <h3 className="text-2xl font-bold text-white">{cur.name}</h3>
          <p className="text-slate-300 mt-3 leading-relaxed">{cur.description}</p>
        </div>

        {/* possible endings */}
        {isLast && (
          <div className="mt-8 animate-fade-up">
            <h4 className="text-sm font-semibold text-white text-center mb-4">Possible stellar remnants — depends on star mass</h4>
            <div className="grid sm:grid-cols-3 gap-3">
              {FINAL_FORMS.map((f) => (
                <div key={f.name} className="glass rounded-xl p-4 text-center">
                  <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${f.color} mb-3 animate-pulse-glow`} />
                  <div className="text-sm font-semibold text-white">{f.name}</div>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* controls */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => setStage((s) => Math.max(0, s - 1))}
            disabled={stage === 0}
            className="btn-ghost disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Previous stage
          </button>
          {!isLast ? (
            <button
              onClick={() => setStage((s) => Math.min(STAGES.length - 1, s + 1))}
              className="btn-primary group"
            >
              {cur.next}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button onClick={() => setStage(0)} className="btn-primary">
              Restart lifecycle
            </button>
          )}
        </div>
      </div>
    </Reveal>
  );
}

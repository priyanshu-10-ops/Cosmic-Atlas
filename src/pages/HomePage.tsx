import { ArrowRight, Telescope, Orbit, Atom, Clock, Rocket, Sparkles, BookOpen } from 'lucide-react';
import type { NavigateFn } from '../components/types';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import Reveal from '../components/Reveal';
import SolarSystemIllustration from '../components/SolarSystemIllustration';
import { TIMELINE_EVENTS } from '../data/timeline';
import { DEEP_SPACE_OBJECTS } from '../data/deepSpace';
import { MISSIONS } from '../data/missions';

export default function HomePage({ navigate }: { navigate: NavigateFn }) {
  const featuredDeepSpace = DEEP_SPACE_OBJECTS.slice(0, 4);
  const featuredMissions = MISSIONS.slice(0, 3);
  const timelineHighlight = TIMELINE_EVENTS[0];

  return (
    <div className="animate-fade-in">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-fade-y opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-nebula-purple/20 blur-[120px] animate-drift pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cosmic-blue/20 blur-[120px] animate-drift pointer-events-none" style={{ animationDelay: '-7s' }} />

        <div className="container-x px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="chip mb-6 border-nebula-purple/40">
                <Sparkles size={14} className="text-nebula-violet" />
                Your interactive gateway to the cosmos
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="text-white">Explore the </span>
                <span className="text-gradient-cosmic">Universe</span>
                <span className="text-white"> Beyond Earth</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Learn astronomy, astrophysics, cosmology, and the science behind the cosmos
                through interactive experiences.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
                <button onClick={() => navigate('/solar-system')} className="btn-primary group">
                  Start Exploring
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => navigate('/deep-space')} className="btn-ghost group">
                  <Telescope size={18} />
                  Discover the Universe
                </button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { label: 'Deep Space Objects', value: '20+' },
                  { label: 'Space Missions', value: '7' },
                  { label: 'Learning Lessons', value: '10' },
                ].map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-gradient-cosmic">{s.value}</div>
                    <div className="text-xs text-slate-500 mt-1 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="order-first lg:order-last">
            <SolarSystemIllustration />
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float-slow">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-nebula-violet to-transparent" />
        </div>
      </section>

      {/* FEATURE GATES */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="What you'll explore"
            title="Eight ways to journey through the cosmos"
            subtitle="Interactive modules, immersive visuals, and rigorous science — designed to make the universe approachable."
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Orbit size={22} />}
              title="Solar System"
              description="Explore the Sun and all eight planets with interactive orbits, fun facts, and detailed data."
              accent="from-amber-400/30 to-orange-700/20"
              onClick={() => navigate('/solar-system')}
            />
            <FeatureCard
              icon={<Telescope size={22} />}
              title="Deep Space"
              description="Galaxies, nebulae, black holes, and exoplanets — the universe beyond our neighborhood."
              accent="from-nebula-violet/30 to-cosmic-blue/20"
              onClick={() => navigate('/deep-space')}
            />
            <FeatureCard
              icon={<Atom size={22} />}
              title="Astrophysics"
              description="From the nature of stars to general relativity, dark matter, and gravitational waves."
              accent="from-nebula-magenta/30 to-star-orange/20"
              onClick={() => navigate('/astrophysics')}
            />
            <FeatureCard
              icon={<Clock size={22} />}
              title="Timeline of the Universe"
              description="Zoom through 13.8 billion years — from the Big Bang to modern astronomy."
              accent="from-cosmic-cyan/30 to-nebula-violet/20"
              onClick={() => navigate('/timeline')}
            />
            <FeatureCard
              icon={<Rocket size={22} />}
              title="Space Missions"
              description="Apollo, Voyager, Hubble, JWST, Perseverance, Artemis — humanity's reach for the stars."
              accent="from-cosmic-blue/30 to-nebula-violet/20"
              onClick={() => navigate('/missions')}
            />
            <FeatureCard
              icon={<Sparkles size={22} />}
              title="Latest Discoveries"
              description="Black hole images, gravitational waves, and Webb's breathtaking early findings."
              accent="from-star-gold/30 to-nebula-magenta/20"
              onClick={() => navigate('/discoveries')}
            />
            <FeatureCard
              icon={<BookOpen size={22} />}
              title="Interactive Tools"
              description="Calculate your weight on other worlds, visualize cosmic distances, simulate star lifecycles."
              accent="from-emerald-400/30 to-cosmic-cyan/20"
              onClick={() => navigate('/tools')}
            />
            <FeatureCard
              icon={<Atom size={22} />}
              title="Astronomy Quiz"
              description="Test your knowledge, earn badges, and track your progress as a cosmic explorer."
              accent="from-fuchsia-400/30 to-purple-700/20"
              onClick={() => navigate('/quiz')}
            />
          </div>
        </div>
      </section>

      {/* TIMELINE TEASER */}
      <section className="section-pad">
        <div className="container-x">
          <div className="glass-card p-8 md:p-12 overflow-hidden relative">
            <div className={`absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[100px] bg-gradient-to-br ${timelineHighlight.accent} opacity-30`} />
            <div className="grid md:grid-cols-2 gap-10 items-center relative">
              <div>
                <SectionHeading
                  eyebrow="13.8 billion years"
                  align="left"
                  title="Travel through cosmic history"
                  subtitle="From the Big Bang to modern astronomy — explore how the universe became what it is today."
                />
                <button onClick={() => navigate('/timeline')} className="btn-ghost mt-8 group">
                  Open the timeline
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <Reveal delay={150}>
                <div className="space-y-3">
                  {TIMELINE_EVENTS.slice(0, 5).map((e, i) => (
                    <button
                      key={e.id}
                      onClick={() => navigate('/timeline')}
                      className="w-full text-left flex items-center gap-4 p-3 rounded-xl glass hover:bg-white/[0.07] transition-colors group"
                      style={{ paddingLeft: `${i * 4 + 12}px` }}
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${e.accent} flex-shrink-0`} />
                      <div className="min-w-0">
                        <div className="text-xs text-slate-500">{e.epochLabel}</div>
                        <div className="text-sm font-medium text-white group-hover:text-cosmic-cyan transition-colors truncate">{e.title}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP SPACE PREVIEW */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Deep space"
              align="left"
              className="!mb-0"
              title="Wonders of the distant cosmos"
              subtitle="Galaxies, nebulae, black holes, and exoplanets — explore the universe far beyond our Solar System."
            />
            <button onClick={() => navigate('/deep-space')} className="btn-ghost group self-start md:self-auto">
              View all
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredDeepSpace.map((obj) => (
              <DeepSpaceCard key={obj.id} obj={obj} onClick={() => navigate('/deep-space')} />
            ))}
          </div>
        </div>
      </section>

      {/* MISSIONS PREVIEW */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Humanity among the stars"
              align="left"
              className="!mb-0"
              title="Iconic space missions"
              subtitle="From Apollo's first steps on the Moon to JWST's infrared vision of the early universe."
            />
            <button onClick={() => navigate('/missions')} className="btn-ghost group self-start md:self-auto">
              All missions
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {featuredMissions.map((m) => (
              <button
                key={m.id}
                onClick={() => navigate('/missions')}
                className="group text-left glass-card overflow-hidden relative"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-90 transition-all duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${m.accent} opacity-50 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="chip">{m.agency}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cosmic-cyan transition-colors">{m.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{m.launched}</p>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed line-clamp-2">{m.tagline}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <div className="relative glass-strong rounded-3xl p-10 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-aurora opacity-10" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-nebula-purple/20 blur-[120px]" />
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">
                  The universe is waiting
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                  Start your journey through space and time. Learn what stars are made of,
                  how galaxies form, and where we are going next.
                </p>
                <button onClick={() => navigate('/astrophysics')} className="btn-primary text-base group">
                  Begin learning
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function DeepSpaceCard({ obj, onClick }: { obj: (typeof DEEP_SPACE_OBJECTS)[number]; onClick: () => void }) {
  return (
    <button onClick={onClick} className="group glass-card overflow-hidden text-left relative">
      <div className="relative h-44 overflow-hidden">
        <img
          src={obj.image}
          alt={obj.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-90 transition-all duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${obj.accent} opacity-50 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <span className="chip capitalize">{obj.category.replace('-', ' ')}</span>
        <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-cosmic-cyan transition-colors">{obj.name}</h3>
        <p className="text-xs text-slate-500 mt-1">{obj.distance}</p>
        <p className="text-sm text-slate-400 mt-3 leading-relaxed line-clamp-2">{obj.description}</p>
      </div>
    </button>
  );
}

import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { NavigateFn } from '../components/types';
import { TIMELINE_EVENTS } from '../data/timeline';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

export default function TimelinePage({ navigate }: { navigate: NavigateFn }) {
  const [activeId, setActiveId] = useState<string>(TIMELINE_EVENTS[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  const active = TIMELINE_EVENTS.find((e) => e.id === activeId)!;

  return (
    <div className="animate-fade-in pt-28">
      <section className="container-x px-5 md:px-8">
        <SectionHeading
          eyebrow="Timeline of the Universe"
          title={<>13.8 billion years in <span className="text-gradient-cosmic">one scroll</span></>}
          subtitle="From the Big Bang to modern astronomy. Click any era to dive into the events that shaped our cosmos."
        />

        {/* TIMELINE TRACK */}
        <div className="mt-12 relative" ref={scrollRef}>
          <div className="relative h-2 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-aurora rounded-full transition-all duration-700"
              style={{ width: `${active.position}%` }}
            />
          </div>

          {/* Events */}
          <div className="relative mt-4">
            <div
              className="transition-all duration-700 ease-out"
              style={{
                transform: `scaleX(${1})`,
                transformOrigin: 'left',
              }}
            >
              <div className="relative h-48">
                {TIMELINE_EVENTS.map((e, i) => {
                  const isUp = i % 2 === 0;
                  const isActive = e.id === activeId;
                  return (
                    <button
                      key={e.id}
                      onClick={() => setActiveId(e.id)}
                      className="absolute -translate-x-1/2 group"
                      style={{
                        left: `${e.position}%`,
                        top: isUp ? '0' : 'auto',
                        bottom: isUp ? 'auto' : '0',
                      }}
                    >
                      <div className={`flex flex-col items-center gap-2 ${isUp ? '' : 'flex-col-reverse'}`}>
                        <div
                          className={`px-3 py-2 rounded-xl text-left transition-all max-w-[200px] ${
                            isActive
                              ? 'glass-strong border-nebula-purple/60 shadow-glow-soft'
                              : 'glass opacity-70 group-hover:opacity-100'
                          }`}
                        >
                          <div className="text-[10px] text-slate-500 uppercase tracking-wider">{e.epochLabel}</div>
                          <div className={`text-xs font-semibold leading-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                            {e.title}
                          </div>
                        </div>
                        <span
                          className={`w-3 h-3 rounded-full transition-all ${
                            isActive
                              ? 'bg-gradient-to-br from-nebula-violet to-cosmic-cyan ring-4 ring-nebula-purple/30'
                              : 'bg-slate-600 group-hover:bg-nebula-violet'
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ACTIVE EVENT DETAIL */}
        <Reveal key={active.id} className="mt-16">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br ${active.accent} opacity-30 blur-[100px]`} />
            <div className="relative grid md:grid-cols-[auto_1fr] gap-8">
              <div className="flex flex-col gap-2">
                <span className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${active.accent} font-bold text-white text-sm`}>
                  {active.epochLabel.split('=')[0].trim() || active.epochLabel}
                </span>
                <span className="text-xs text-slate-500 text-center">{active.timeAgo}</span>
              </div>
              <div>
                <span className="chip capitalize">{active.category.replace('-', ' ')}</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gradient">{active.title}</h2>
                <p className="mt-4 text-slate-300 md:text-lg leading-relaxed">{active.description}</p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  {active.position < 100 && (
                    <button
                      onClick={() => {
                        const next = TIMELINE_EVENTS.findIndex((x) => x.id === active.id) + 1;
                        if (next < TIMELINE_EVENTS.length) setActiveId(TIMELINE_EVENTS[next].id);
                      }}
                      className="btn-ghost group"
                    >
                      Next: {TIMELINE_EVENTS[Math.min(TIMELINE_EVENTS.findIndex((x) => x.id === active.id) + 1, TIMELINE_EVENTS.length - 1)].title}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                  {active.position > 0 && (
                    <button
                      onClick={() => {
                        const prev = TIMELINE_EVENTS.findIndex((x) => x.id === active.id) - 1;
                        if (prev >= 0) setActiveId(TIMELINE_EVENTS[prev].id);
                      }}
                      className="btn-ghost"
                    >
                      <ArrowLeft size={16} />
                      Previous
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Progress through eras */}
        <Reveal className="mt-10">
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider text-slate-500">Era progress</span>
              <span className="text-xs text-slate-400">
                {TIMELINE_EVENTS.findIndex((x) => x.id === active.id) + 1} / {TIMELINE_EVENTS.length}
              </span>
            </div>
            <div className="grid grid-cols-9 gap-1">
              {TIMELINE_EVENTS.map((e) => (
                <button
                  key={e.id}
                  onClick={() => setActiveId(e.id)}
                  className={`h-1.5 rounded-full transition-all ${
                    e.id === active.id
                      ? 'bg-gradient-to-r from-nebula-violet to-cosmic-cyan'
                      : 'bg-white/[0.08] hover:bg-white/[0.16]'
                  }`}
                  title={e.title}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* DEEP LINK */}
        <div className="mt-12 text-center">
          <button onClick={() => navigate('/astrophysics')} className="btn-primary group">
            Learn the physics behind these eras
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

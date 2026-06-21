import { useState } from 'react';
import { ArrowLeft, ArrowRight, Clock, CheckCircle2, Lock, BookOpen } from 'lucide-react';
import type { NavigateFn } from '../components/types';
import { LEARNING_PATHS, type Lesson } from '../data/lessons';
import { useProgress } from '../lib/useProgress';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';

export default function AstrophysicsPage({ navigate }: { navigate: NavigateFn }) {
  const { isComplete, completeLesson, completedCount, totalLessons } = useProgress();
  const [activeLesson, setActiveLesson] = useState<{ pathId: string; lesson: Lesson } | null>(null);

  if (activeLesson) {
    return (
      <LessonReader
        lesson={activeLesson.lesson}
        pathId={activeLesson.pathId}
        onBack={() => setActiveLesson(null)}
        onComplete={() => {
          completeLesson(activeLesson.pathId, activeLesson.lesson.id);
        }}
        isComplete={isComplete(activeLesson.pathId, activeLesson.lesson.id)}
      />
    );
  }

  const overallPct = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="animate-fade-in pt-28">
      <section className="container-x px-5 md:px-8">
        <SectionHeading
          eyebrow="Astrophysics Learning Center"
          title={<>From stars to <span className="text-gradient-cosmic">spacetime</span></>}
          subtitle="Structured learning paths for every level. Track your progress as you move from the basics of starlight to the frontiers of modern physics."
        />

        {/* OVERALL PROGRESS */}
        <Reveal className="mt-12">
          <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative w-20 h-20 flex-shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  fill="none"
                  stroke="url(#progressGrad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${(overallPct / 100) * 213.6} 213.6`}
                />
                <defs>
                  <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-white">{overallPct}%</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">Your learning journey</h3>
              <p className="text-sm text-slate-400 mt-1">
                You've completed <span className="text-nebula-violet font-medium">{completedCount}</span> of {totalLessons} lessons.
                Keep going to unlock the frontiers of cosmology.
              </p>
            </div>
            <button onClick={() => navigate('/quiz')} className="btn-ghost group">
              Test your knowledge
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>

        {/* LEARNING PATHS */}
        <div className="mt-12 space-y-10">
          {LEARNING_PATHS.map((path) => {
            const pathComplete = path.lessons.filter((l) => isComplete(path.id, l.id)).length;
            const pct = Math.round((pathComplete / path.lessons.length) * 100);
            return (
              <Reveal key={path.id}>
                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${path.accent} flex-shrink-0`}>
                      <Icon name={path.icon} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-white">{path.name}</h3>
                        <span className="chip">{path.level}</span>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">{path.description}</p>
                    </div>
                    <div className="md:w-40">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                        <span>{pathComplete}/{path.lessons.length} complete</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${path.accent} transition-all duration-500`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {path.lessons.map((lesson, idx) => {
                      const done = isComplete(path.id, lesson.id);
                      const prevDone = idx === 0 || isComplete(path.id, path.lessons[idx - 1].id);
                      const locked = path.id === 'advanced' && !prevDone && idx > 0;
                      return (
                        <button
                          key={lesson.id}
                          disabled={locked}
                          onClick={() => setActiveLesson({ pathId: path.id, lesson })}
                          className={`group text-left p-4 rounded-2xl transition-all ${
                            locked
                              ? 'glass opacity-50 cursor-not-allowed'
                              : 'glass hover:bg-white/[0.07] hover:border-nebula-purple/30'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] uppercase tracking-wide text-slate-500">
                              Lesson {idx + 1}
                            </span>
                            {locked ? (
                              <Lock size={14} className="text-slate-500" />
                            ) : done ? (
                              <CheckCircle2 size={16} className="text-emerald-400" />
                            ) : (
                              <Clock size={14} className="text-slate-500" />
                            )}
                          </div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-cosmic-cyan transition-colors leading-snug">
                            {lesson.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">{lesson.blurb}</p>
                          <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-500">
                            <span>{lesson.duration}</span>
                            <span>·</span>
                            <span>{lesson.readingTime} read</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function LessonReader({
  lesson,
  pathId,
  onBack,
  onComplete,
  isComplete,
}: {
  lesson: Lesson;
  pathId: string;
  onBack: () => void;
  onComplete: () => void;
  isComplete: boolean;
}) {
  return (
    <div className="animate-fade-in pt-28">
      <section className="container-x px-5 md:px-8">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8">
          <ArrowLeft size={16} /> Back to learning paths
        </button>

        <article className="max-w-3xl mx-auto">
          <Reveal>
            <span className="chip">{pathId}</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gradient">{lesson.title}</h1>
            <p className="mt-3 text-slate-400">{lesson.blurb}</p>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><Clock size={13} /> {lesson.duration}</span>
              <span>·</span>
              <span>{lesson.readingTime}</span>
            </div>
          </Reveal>

          <div className="mt-10 space-y-10">
            {lesson.content.map((section, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="glass-card p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 flex items-baseline gap-3">
                    <span className="text-nebula-violet text-sm font-mono">{String(i + 1).padStart(2, '0')}</span>
                    {section.heading}
                  </h2>
                  <p className="text-slate-300 leading-relaxed">{section.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            {isComplete ? (
              <div className="btn-ghost cursor-default">
                <CheckCircle2 size={18} className="text-emerald-400" /> Lesson completed
              </div>
            ) : (
              <button onClick={onComplete} className="btn-primary group">
                <BookOpen size={18} />
                Mark as complete
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}
            <button onClick={onBack} className="btn-ghost">
              Back to path
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

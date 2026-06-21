import { useState } from 'react';
import { ArrowRight, CheckCircle2, XCircle, Trophy, RotateCcw, Award, Star } from 'lucide-react';
import type { NavigateFn } from '../components/types';
import { QUIZZES, BADGES, type QuizSet } from '../data/quizzes';
import { useQuizScores } from '../lib/useQuizScores';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';

export default function QuizPage({ navigate }: { navigate: NavigateFn }) {
  const { scores, recordScore } = useQuizScores();
  const [active, setActive] = useState<QuizSet | null>(null);

  if (active) {
    return (
      <QuizRunner
        quiz={active}
        onExit={() => setActive(null)}
        onComplete={(pct) => recordScore(active.id, pct)}
        navigate={navigate}
      />
    );
  }

  const completedCount = Object.keys(scores).length;
  const totalBadges = BADGES.filter((b) => {
    if (b.special === 'perfect') return Object.values(scores).some((s) => s === 100);
    if (b.special === 'all') return completedCount >= QUIZZES.length;
    return completedCount >= b.threshold;
  }).length;

  return (
    <div className="animate-fade-in pt-28">
      <section className="container-x px-5 md:px-8">
        <SectionHeading
          eyebrow="Astronomy Quiz"
          title={<>Test your <span className="text-gradient-cosmic">cosmic knowledge</span></>}
          subtitle="Multiple-choice quizzes across beginner, intermediate, and advanced levels. Earn badges and track your progress as a cosmic explorer."
        />

        {/* PROGRESS + BADGES */}
        <Reveal className="mt-12">
          <div className="glass-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Your achievements</h3>
                <p className="text-sm text-slate-400 mt-1">
                  <span className="text-nebula-violet font-medium">{completedCount}</span> of {QUIZZES.length} quizzes completed ·{' '}
                  <span className="text-star-gold font-medium">{totalBadges}</span> of {BADGES.length} badges earned
                </p>
              </div>
              <div className="flex items-center gap-2">
                {BADGES.map((b) => {
                  const earned = b.special === 'perfect'
                    ? Object.values(scores).some((s) => s === 100)
                    : b.special === 'all'
                    ? completedCount >= QUIZZES.length
                    : completedCount >= b.threshold;
                  return (
                    <div
                      key={b.id}
                      className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                        earned ? 'glass border-star-gold/40' : 'glass opacity-40'
                      }`}
                      title={`${b.name} — ${b.description}`}
                    >
                      <Icon name={b.icon} size={22} className={earned ? 'text-star-gold' : 'text-slate-500'} />
                      <span className="text-[10px] text-slate-400">{b.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* QUIZ CARDS */}
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {QUIZZES.map((q, i) => {
            const score = scores[q.id];
            const completed = score !== undefined;
            return (
              <Reveal key={q.id} delay={i * 80}>
                <button
                  onClick={() => setActive(q)}
                  className="group glass-card p-6 text-left w-full relative overflow-hidden h-full"
                >
                  <div className={`absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-30 blur-3xl bg-gradient-to-br ${q.accent} group-hover:opacity-50 transition-opacity`} />
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${q.accent} mb-4`}>
                      <Icon name={q.icon} size={22} className="text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="chip">{q.level}</span>
                      {completed && (
                        <span className={`chip ${score === 100 ? '!border-star-gold/40 text-star-gold' : '!border-emerald-500/40 text-emerald-300'}`}>
                          <Trophy size={12} /> {score}%
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cosmic-cyan transition-colors">{q.title}</h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{q.description}</p>
                    <div className="text-xs text-slate-500 mt-3">{q.questions.length} questions</div>
                    <div className="mt-5 inline-flex items-center gap-1 text-xs text-nebula-violet group-hover:gap-2 transition-all">
                      {completed ? 'Retake quiz' : 'Start quiz'} <ArrowRight size={12} />
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function QuizRunner({
  quiz,
  onExit,
  onComplete,
  navigate,
}: {
  quiz: QuizSet;
  onExit: () => void;
  onComplete: (pct: number) => void;
  navigate: NavigateFn;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [done, setDone] = useState(false);

  const q = quiz.questions[idx];
  const total = quiz.questions.length;
  const score = answers.reduce((acc, a, i) => acc + (a === quiz.questions[i].correctIndex ? 1 : 0), 0);
  const pct = Math.round((score / total) * 100);

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setShowResult(true);
  };

  const handleAdvance = () => {
    setShowResult(false);
    setSelected(null);
    if (idx + 1 >= total) {
      setDone(true);
      onComplete(pct);
    } else {
      setIdx((i) => i + 1);
    }
  };

  if (done) {
    const perfect = pct === 100;
    return (
      <div className="animate-fade-in pt-28">
        <section className="container-x px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${quiz.accent} flex items-center justify-center mb-6 animate-pulse-glow ${perfect ? 'shadow-glow' : ''}`}>
              {perfect ? <Award size={44} className="text-white" /> : <Trophy size={44} className="text-white" />}
            </div>
            <span className="chip mb-4">{quiz.title}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              {pct}% correct
            </h1>
            <p className="mt-3 text-slate-300 md:text-lg">
              You answered <span className="text-white font-semibold">{score}</span> of {total} questions correctly.
            </p>
            {perfect && (
              <p className="mt-4 text-star-gold flex items-center justify-center gap-2">
                <Star size={18} /> Perfect score! You earned the Astronomy Scholar badge.
              </p>
            )}

            <div className="mt-8 glass-card p-6 text-left">
              <h3 className="text-sm font-semibold text-white mb-4">Review your answers</h3>
              <div className="space-y-3">
                {quiz.questions.map((question, i) => {
                  const userAns = answers[i];
                  const correct = userAns === question.correctIndex;
                  return (
                    <div key={question.id} className="glass rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        {correct ? (
                          <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="min-w-0">
                          <div className="text-sm text-white">{question.question}</div>
                          {!correct && (
                            <div className="text-xs text-red-300 mt-1">
                              Your answer: {question.options[userAns]}
                            </div>
                          )}
                          <div className="text-xs text-emerald-300 mt-1">
                            Correct: {question.options[question.correctIndex]}
                          </div>
                          <div className="text-xs text-slate-400 mt-2 leading-relaxed">{question.explanation}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setIdx(0);
                  setSelected(null);
                  setAnswers([]);
                  setShowResult(false);
                  setDone(false);
                }}
                className="btn-ghost group"
              >
                <RotateCcw size={16} />
                Retake this quiz
              </button>
              <button onClick={onExit} className="btn-ghost">Back to quizzes</button>
              <button onClick={() => navigate('/discoveries')} className="btn-primary group">
                Explore discoveries
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pt-28">
      <section className="container-x px-5 md:px-8">
        <div className="max-w-2xl mx-auto">
          <button onClick={onExit} className="text-sm text-slate-400 hover:text-white transition-colors mb-8">
            ← Back to quizzes
          </button>

          {/* progress */}
          <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
            <span>{quiz.title}</span>
            <span>{idx + 1} / {total}</span>
          </div>
          <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden mb-8">
            <div
              className={`h-full bg-gradient-to-r ${quiz.accent} transition-all duration-500`}
              style={{ width: `${((idx + (showResult ? 1 : 0)) / total) * 100}%` }}
            />
          </div>

          <Reveal key={q.id}>
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-white leading-snug">{q.question}</h2>

              <div className="mt-6 space-y-3">
                {q.options.map((opt, i) => {
                  const isCorrect = i === q.correctIndex;
                  const isPicked = selected === i;
                  let state = 'idle';
                  if (showResult) {
                    if (isCorrect) state = 'correct';
                    else if (isPicked) state = 'wrong';
                  } else if (isPicked) state = 'picked';
                  return (
                    <button
                      key={i}
                      disabled={showResult}
                      onClick={() => setSelected(i)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                        state === 'correct'
                          ? 'border-emerald-500/60 bg-emerald-500/10'
                          : state === 'wrong'
                          ? 'border-red-500/60 bg-red-500/10'
                          : state === 'picked'
                          ? 'border-nebula-purple/60 bg-nebula-purple/10'
                          : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20'
                      }`}
                    >
                      <span className="text-sm text-slate-200">{opt}</span>
                      {state === 'correct' && <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />}
                      {state === 'wrong' && <XCircle size={18} className="text-red-400 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <div className="mt-5 glass rounded-xl p-4 animate-fade-up">
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-1.5">Explanation</div>
                  <p className="text-sm text-slate-300 leading-relaxed">{q.explanation}</p>
                </div>
              )}

              <div className="mt-6 flex justify-end gap-3">
                {!showResult ? (
                  <button
                    onClick={handleNext}
                    disabled={selected === null}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed group"
                  >
                    {idx + 1 === total ? 'See results' : 'Next question'}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button onClick={handleAdvance} className="btn-primary group">
                    {idx + 1 === total ? 'See results' : 'Next question'}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          </Reveal>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>Current score: <span className="text-nebula-violet">{score}</span></span>
            <span>{total - idx - 1} questions remaining</span>
          </div>
        </div>
      </section>
    </div>
  );
}

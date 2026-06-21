import { useState } from 'react';
import { ArrowRight, BookOpen, Film, Link2, Mail, Sparkles, CheckCircle2, ExternalLink, Star } from 'lucide-react';
import type { NavigateFn } from '../components/types';
import {
  FACTS_OF_THE_DAY,
  RECOMMENDED_BOOKS,
  RECOMMENDED_DOCUMENTARIES,
  ASTRONOMY_RESOURCES,
} from '../data/community';
import { useNewsletter } from '../lib/useNewsletter';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';

export default function CommunityPage({ navigate }: { navigate: NavigateFn }) {
  const { subscribed, subscribe, loading } = useNewsletter();
  const [email, setEmail] = useState('');
  const [localDone] = useState(false);

  const factIdx = new Date().getDate() % FACTS_OF_THE_DAY.length;
  const fact = FACTS_OF_THE_DAY[factIdx];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    subscribe(email);
  };

  return (
    <div className="animate-fade-in pt-28">
      <section className="container-x px-5 md:px-8">
        <SectionHeading
          eyebrow="Community"
          title={<>A community of <span className="text-gradient-cosmic">curious minds</span></>}
          subtitle="Space facts, recommended reading and viewing, essential astronomy resources, and ways to stay connected with the cosmos."
        />

        {/* FACT OF THE DAY */}
        <Reveal className="mt-14">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-star-gold to-nebula-magenta opacity-20 blur-[100px]" />
            <div className="relative grid md:grid-cols-[auto_1fr] gap-6 items-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-star-gold to-star-orange flex items-center justify-center flex-shrink-0">
                <Sparkles size={36} className="text-white" />
              </div>
              <div>
                <span className="chip mb-3">Space Fact of the Day</span>
                <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
                  "{fact}"
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* NEWSLETTER */}
        <Reveal className="mt-8">
          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-aurora opacity-[0.08]" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex w-12 h-12 rounded-xl glass items-center justify-center mb-4">
                  <Mail size={22} className="text-nebula-violet" />
                </div>
                <h3 className="text-2xl font-bold text-white">Get cosmic updates</h3>
                <p className="text-slate-400 mt-2 leading-relaxed">
                  Join our newsletter for new discoveries, observing tips, and astronomy news — delivered sparingly, never spammy.
                </p>
              </div>
              <div>
                {localDone || subscribed ? (
                  <div className="glass rounded-2xl p-6 text-center">
                    <CheckCircle2 size={28} className="text-emerald-400 mx-auto mb-2" />
                    <div className="text-white font-medium">Subscription confirmed</div>
                    <p className="text-sm text-slate-400 mt-1">You're going to love what we share. Stay curious!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@galaxy.com"
                      className="flex-1 bg-white/[0.04] border border-white/10 rounded-full px-5 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-nebula-purple/60 focus:ring-2 focus:ring-nebula-purple/30 transition-all"
                    />
                    <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60 group whitespace-nowrap">
                      {loading ? 'Subscribing...' : 'Subscribe'}
                      {!loading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </form>
                )}
                <p className="text-xs text-slate-500 mt-3">No spam. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* BOOKS + DOCS GRID */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass-card p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <BookOpen size={18} className="text-cosmic-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Recommended Books</h3>
                  <p className="text-xs text-slate-500">Hand-picked reads for every level</p>
                </div>
              </div>
              <div className="space-y-3">
                {RECOMMENDED_BOOKS.map((b) => (
                  <ResourceRow key={b.title} resource={b} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="glass-card p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <Film size={18} className="text-nebula-magenta" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Recommended Documentaries</h3>
                  <p className="text-xs text-slate-500">Watch the universe come alive</p>
                </div>
              </div>
              <div className="space-y-3">
                {RECOMMENDED_DOCUMENTARIES.map((d) => (
                  <ResourceRow key={d.title} resource={d} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* RESOURCES */}
        <Reveal className="mt-12">
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                <Link2 size={18} className="text-star-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Astronomy Resources</h3>
                <p className="text-xs text-slate-500">Trusted sources to go deeper</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ASTRONOMY_RESOURCES.map((r) => (
                <a
                  key={r.title}
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-xl p-4 hover:bg-white/[0.07] hover:border-nebula-purple/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon name={r.icon} size={18} className="text-nebula-violet" />
                    <ExternalLink size={14} className="text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-cosmic-cyan transition-colors">{r.title}</div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{r.description}</p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="mt-12">
          <div className="glass-strong rounded-3xl p-10 md:p-12 text-center">
            <Sparkles size={28} className="text-star-gold mx-auto mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">Ready to test what you've learned?</h3>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto">
              Put your knowledge to the test with our interactive astronomy quizzes across three difficulty levels.
            </p>
            <button onClick={() => navigate('/quiz')} className="btn-primary mt-6 group">
              Take a quiz
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function ResourceRow({ resource }: { resource: (typeof RECOMMENDED_BOOKS)[number] }) {
  return (
    <a
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-3 rounded-xl glass hover:bg-white/[0.07] transition-colors"
    >
      <div className={`w-10 h-14 rounded-md bg-gradient-to-br ${resource.accent} flex-shrink-0 shadow-glow-soft`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="chip !py-0.5 !text-[10px]">{resource.tag}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < resource.rating ? 'text-star-gold fill-star-gold' : 'text-slate-700'}
              />
            ))}
          </div>
        </div>
        <div className="text-sm font-medium text-white group-hover:text-cosmic-cyan transition-colors mt-1 truncate">
          {resource.title}
        </div>
        <div className="text-xs text-slate-500">{resource.author}</div>
      </div>
      <ExternalLink size={14} className="text-slate-600 group-hover:text-white transition-colors flex-shrink-0" />
    </a>
  );
}

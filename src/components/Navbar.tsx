import { useEffect, useState } from 'react';
import { Menu, X, Satellite } from 'lucide-react';
import type { NavigateFn } from './types';

type NavLink = { label: string; path: string };

const LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Solar System', path: '/solar-system' },
  { label: 'Deep Space', path: '/deep-space' },
  { label: 'Astrophysics', path: '/astrophysics' },
  { label: 'Timeline', path: '/timeline' },
  { label: 'Missions', path: '/missions' },
  { label: 'Discoveries', path: '/discoveries' },
  { label: 'Community', path: '/community' },
];

export default function Navbar({
  current,
  navigate,
}: {
  current: string;
  navigate: NavigateFn;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-glass py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-x flex items-center justify-between gap-4 px-5 md:px-8">
        <button
          onClick={() => go('/')}
          className="flex items-center gap-2.5 group"
          aria-label="Cosmic Atlas home"
        >
          <span className="relative w-9 h-9 rounded-full bg-gradient-to-br from-nebula-purple to-cosmic-blue flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
            <Satellite size={18} className="text-white" />
            <span className="absolute -inset-1 rounded-full border border-aurora opacity-40 animate-spin-slower" />
          </span>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Cosmic<span className="text-gradient-cosmic">Atlas</span>
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {LINKS.map((link) => {
            const active = current === link.path || (link.path !== '/' && current.startsWith(link.path));
            return (
              <button
                key={link.path}
                onClick={() => go(link.path)}
                className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {active && (
                  <span className="absolute inset-0 rounded-full glass border border-nebula-purple/40" />
                )}
                <span className="relative">{link.label}</span>
              </button>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <button onClick={() => go('/tools')} className="btn-primary text-sm !py-2.5 !px-5">
            Start Exploring
          </button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 rounded-lg glass text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden absolute top-full inset-x-0 glass-strong border-t border-white/10 animate-fade-in">
          <div className="container-x px-5 py-4 flex flex-col gap-1">
            {LINKS.map((link) => {
              const active = current === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => go(link.path)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button onClick={() => go('/tools')} className="btn-primary text-sm mt-2 w-full">
              Start Exploring
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

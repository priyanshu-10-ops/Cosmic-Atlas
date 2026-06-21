import type { NavigateFn } from './types';
import { Satellite, Github, Twitter, Send } from 'lucide-react';

const NAV_GROUPS = [
  {
    title: 'Explore',
    links: [
      { label: 'Solar System', path: '/solar-system' },
      { label: 'Deep Space', path: '/deep-space' },
      { label: 'Astrophysics', path: '/astrophysics' },
      { label: 'Timeline', path: '/timeline' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'Missions', path: '/missions' },
      { label: 'Discoveries', path: '/discoveries' },
      { label: 'Tools', path: '/tools' },
      { label: 'Quiz', path: '/quiz' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Community', path: '/community' },
      { label: 'Home', path: '/' },
    ],
  },
];

export default function Footer({ navigate }: { navigate: NavigateFn }) {
  return (
    <footer className="relative mt-32 border-t border-white/[0.06] bg-space-deep/40 backdrop-blur-sm">
      <div className="container-x px-5 md:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-nebula-purple to-cosmic-blue flex items-center justify-center shadow-glow">
                <Satellite size={18} className="text-white" />
              </span>
              <span className="font-display font-bold text-lg text-white">
                Cosmic<span className="text-gradient-cosmic">Atlas</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              An interactive learning platform for astronomy, astrophysics, cosmology, and space
              exploration. Explore the universe beyond Earth.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Github, Twitter, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-nebula-purple/40 transition-all"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {NAV_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-sm text-slate-400 hover:text-nebula-violet transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Cosmic Atlas. Built for curiosity.
          </p>
          <p className="text-xs text-slate-500">
            Made with stardust · Data from public NASA, ESA & EHT sources
          </p>
        </div>
      </div>
    </footer>
  );
}

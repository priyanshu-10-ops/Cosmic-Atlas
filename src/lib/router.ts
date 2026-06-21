import { useEffect, useState, useCallback } from 'react';

export type RouteParams = Record<string, string>;

export type Route = {
  path: string;
  params: RouteParams;
};

const ROUTE_PATTERNS: { pattern: string; keys: string[]; regex: RegExp }[] = [
  { pattern: '/', keys: [], regex: /^\/$/ },
  { pattern: '/solar-system/:id?', keys: ['id'], regex: /^\/solar-system(?:\/([^/]+))?$/ },
  { pattern: '/deep-space/:category?', keys: ['category'], regex: /^\/deep-space(?:\/([^/]+))?$/ },
  { pattern: '/astrophysics', keys: [], regex: /^\/astrophysics$/ },
  { pattern: '/lessons/:pathId/:lessonId', keys: ['pathId', 'lessonId'], regex: /^\/lessons\/([^/]+)\/([^/]+)$/ },
  { pattern: '/timeline', keys: [], regex: /^\/timeline$/ },
  { pattern: '/missions', keys: [], regex: /^\/missions$/ },
  { pattern: '/missions/:id', keys: ['id'], regex: /^\/missions\/([^/]+)$/ },
  { pattern: '/discoveries', keys: [], regex: /^\/discoveries$/ },
  { pattern: '/quiz', keys: [], regex: /^\/quiz$/ },
  { pattern: '/tools', keys: [], regex: /^\/tools$/ },
  { pattern: '/community', keys: [], regex: /^\/community$/ },
];

function parsePath(pathname: string): Route {
  if (pathname === '' || pathname === '/') {
    return { path: '/', params: {} };
  }
  for (const r of ROUTE_PATTERNS) {
    const match = pathname.match(r.regex);
    if (match) {
      const params: RouteParams = {};
      r.keys.forEach((key, i) => {
        params[key] = decodeURIComponent(match[i + 1]);
      });
      return { path: r.pattern, params };
    }
  }
  return { path: '/', params: {} };
}

function getHashPath(): string {
  const h = window.location.hash.replace(/^#/, '');
  return h === '' ? '/' : h;
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(() => parsePath(getHashPath()));

  useEffect(() => {
    const onChange = () => {
      setRoute(parsePath(getHashPath()));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    if (window.location.hash === '') {
      window.history.replaceState(null, '', '#/');
    }
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((path: string) => {
    const target = path.startsWith('/') ? path : `/${path}`;
    if (`#${target}` !== window.location.hash) {
      window.location.hash = target;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return { route, navigate };
}

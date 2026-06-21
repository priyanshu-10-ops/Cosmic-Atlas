import { useMemo } from 'react';
import { PLANETS, SUN } from '../data/planets';

export default function SolarSystemIllustration({ interactive = false }: { interactive?: boolean }) {
  // scale orbits into the 320px viewport
  const maxOrbit = PLANETS[PLANETS.length - 1].orbit;
  const scale = 170 / maxOrbit;

  const planets = useMemo(
    () =>
      PLANETS.map((p) => ({
        ...p,
        radius: p.orbit * scale,
        diameter: Math.max(8, p.size * 8),
      })),
    [scale]
  );

  return (
    <div className="relative w-full aspect-square max-w-[440px] mx-auto preserve-3d perspective">
      {/* central glow */}
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.15),transparent_60%)] pointer-events-none" />

      {planets.map((p) => (
        <div
          key={p.id}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: '1px solid rgba(255,255,255,0.04)',
            width: `${p.radius * 2}px`,
            height: `${p.radius * 2}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* orbiting planets */}
      {planets.map((p) => (
        <div
          key={`orbit-${p.id}`}
          className="absolute inset-0 m-auto"
          style={{
            width: `${p.radius * 2}px`,
            height: `${p.radius * 2}px`,
            animation: `spin-slow ${p.orbitSpeed}s linear infinite`,
          }}
        >
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300"
            style={
              {
                width: `${p.diameter}px`,
                height: `${p.diameter}px`,
                background: p.gradient,
                boxShadow: `0 0 ${p.diameter * 0.8}px ${p.glow}`,
                ...(p.hasRing
                  ? {
                      '::after': {},
                    }
                  : {}),
              } as React.CSSProperties
            }
            data-planet={p.id}
          >
            {p.hasRing && (
              <span
                className="absolute -inset-[60%] rounded-full border border-amber-200/40"
                style={{ transform: 'rotateX(72deg) rotateZ(-15deg)' }}
              />
            )}
          </div>
        </div>
      ))}

      {/* Sun in the middle */}
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="rounded-full animate-pulse-glow"
          style={{
            width: `${SUN.size * 14}px`,
            height: `${SUN.size * 14}px`,
            background: SUN.gradient,
            boxShadow: `0 0 50px ${SUN.glow}, 0 0 100px ${SUN.glow}`,
          }}
        />
      </div>

      {!interactive && (
        <div className="absolute -bottom-2 inset-x-0 text-center pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
            Sun + 8 planets · not to scale
          </span>
        </div>
      )}
    </div>
  );
}

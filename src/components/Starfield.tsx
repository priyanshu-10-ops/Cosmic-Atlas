import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
};

type StarfieldProps = {
  density?: number;
  parallax?: boolean;
  className?: string;
};

export default function Starfield({ density = 220, parallax = true, className = '' }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let animationId = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.offsetWidth : window.innerWidth;
      const h = parent ? parent.offsetHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      generateStars(w, h);
    };

    const generateStars = (w: number, h: number) => {
      const count = Math.floor((w * h) / (9600 / Math.sqrt(density / 220))) || density;
      stars = Array.from({ length: Math.min(count, 650) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 1 + 0.2,
        size: Math.random() * 1.4 + 0.2,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
      }));
    };

    const spawnShootingStar = (w: number, h: number) => {
      if (Math.random() > 0.992) {
        const fromLeft = Math.random() > 0.5;
        const speed = Math.random() * 4 + 5;
        shootingStars.push({
          x: fromLeft ? -20 : w + 20,
          y: Math.random() * h * 0.5,
          vx: (fromLeft ? 1 : -1) * speed,
          vy: Math.random() * 2 + 1.5,
          life: 0,
          maxLife: 90 + Math.random() * 40,
        });
      }
    };

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      // gentle parallax toward mouse
      if (parallax) {
        targetRef.current.x += (mouseRef.current.x - targetRef.current.x) * 0.04;
        targetRef.current.y += (mouseRef.current.y - targetRef.current.y) * 0.04;
      }

      const now = performance.now() * 0.001;

      for (const star of stars) {
        const flicker = (Math.sin(now * star.twinkleSpeed * 50 + star.twinklePhase) + 1) * 0.5;
        const alpha = star.opacity * (0.4 + flicker * 0.6);
        const px = star.x + (targetRef.current.x - w / 2) * star.z * 0.02;
        const py = star.y + (targetRef.current.y - h / 2) * star.z * 0.02;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();

        if (star.size > 1) {
          const grad = ctx.createRadialGradient(px, py, 0, px, py, star.size * 4);
          const tints = ['rgba(180, 200, 255', 'rgba(200, 180, 255', 'rgba(180, 230, 220'];
          const c = tints[Math.floor(star.twinklePhase * 3) % 3];
          grad.addColorStop(0, `${c},${alpha * 0.4})`);
          grad.addColorStop(1, `${c},0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, star.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // shooting stars
      spawnShootingStar(w, h);
      shootingStars = shootingStars.filter((s) => s.life < s.maxLife);
      for (const s of shootingStars) {
        s.x += s.vx;
        s.y += s.vy;
        s.life++;
        const lifeFrac = s.life / s.maxLife;
        const alpha = Math.sin(lifeFrac * Math.PI) * 0.9;
        ctx.strokeStyle = `rgba(255, 240, 220, ${alpha})`;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        const tx = s.vx;
        const ty = s.vy;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - tx * 6, s.y - ty * 6);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    if (parallax) window.addEventListener('mousemove', onMouseMove);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [density, parallax]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 ${className}`}
      aria-hidden="true"
    />
  );
}

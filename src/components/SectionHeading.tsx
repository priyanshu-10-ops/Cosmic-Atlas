import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className={`flex ${align === 'center' ? 'justify-center' : ''} mb-3`}>
          <span className="chip border-nebula-purple/40 text-nebula-violet">
            <span className="w-1.5 h-1.5 rounded-full bg-nebula-violet animate-pulse-glow" />
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  );
}

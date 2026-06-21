import type { ReactNode } from 'react';
import Reveal from './Reveal';

type FeatureCardProps = {
  icon?: ReactNode;
  title: string;
  description: ReactNode;
  children?: ReactNode;
  accent?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
  children,
  accent = 'from-nebula-purple/30 to-cosmic-blue/20',
  onClick,
  className = '',
}: FeatureCardProps) {
  const Wrapper = onClick ? 'button' : ('div' as const);
  return (
    <Reveal>
      <Wrapper
        onClick={onClick}
        className={`group relative w-full text-left glass-card p-6 overflow-hidden ${className}`}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      >
        <div
          className={`absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-30 blur-3xl bg-gradient-to-br ${accent} group-hover:opacity-50 transition-opacity duration-500`}
        />
        <div className="relative">
          {icon && (
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass mb-4 text-nebula-violet group-hover:text-cosmic-cyan transition-colors">
              {icon}
            </div>
          )}
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cosmic-cyan transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
          {children}
        </div>
      </Wrapper>
    </Reveal>
  );
}

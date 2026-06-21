import {
  Sparkles,
  Orbit,
  Atom,
  Sun,
  Star,
  Rocket,
  Globe,
  Telescope,
  Newspaper,
  Satellite,
  Eye,
  Footprints,
  GraduationCap,
  Crown,
  Circle,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Orbit,
  Atom,
  Sun,
  Star,
  Rocket,
  Globe,
  Telescope,
  Newspaper,
  Satellite,
  Eye,
  Footprints,
  GraduationCap,
  Crown,
};

type IconProps = {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export default function Icon({ name, className = '', size = 20, strokeWidth = 2 }: IconProps) {
  const Comp = ICONS[name] || Circle;
  return <Comp className={className} size={size} strokeWidth={strokeWidth} />;
}

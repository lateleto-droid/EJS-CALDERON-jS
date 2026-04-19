import { Home, LayoutDashboard, PanelLeftClose, Layers, House, SquareDashedBottom, CheckCircle2, Award, Clock, DollarSign, Target, Eye, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Home,
  LayoutDashboard,
  PanelLeftClose,
  Layers,
  House,
  SquareDashedBottom,
  CheckCircle2,
  Award,
  Clock,
  DollarSign,
  Target,
  Eye,
  Heart
};

export function getIcon(name: string) {
  return iconMap[name] || Home;
}

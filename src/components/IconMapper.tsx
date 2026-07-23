import React from 'react';
import {
  Compass,
  Code,
  BrainCircuit,
  Sparkles,
  Zap,
  Eye,
  BarChart3,
  Layers,
  Building2,
  Landmark,
  Activity,
  Factory,
  ShoppingBag,
  Truck,
  HardHat,
  Building,
  GraduationCap,
  Radio,
  Briefcase,
  Cpu,
  SlidersHorizontal,
  ShieldCheck,
  Workflow,
  TrendingUp,
  Brain,
  Database,
  Cloud,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Send,
  Copy,
  Check,
  Globe,
  Sliders,
  HelpCircle,
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconMapper: React.FC<IconProps> = ({ name, className = 'w-5 h-5', size }) => {
  const props = { className, size };

  switch (name) {
    case 'Compass':
      return <Compass {...props} />;
    case 'Code':
      return <Code {...props} />;
    case 'BrainCircuit':
      return <BrainCircuit {...props} />;
    case 'Sparkles':
      return <Sparkles {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'Eye':
      return <Eye {...props} />;
    case 'BarChart3':
      return <BarChart3 {...props} />;
    case 'Layers':
      return <Layers {...props} />;
    case 'Building2':
      return <Building2 {...props} />;
    case 'Landmark':
      return <Landmark {...props} />;
    case 'Activity':
      return <Activity {...props} />;
    case 'Factory':
      return <Factory {...props} />;
    case 'ShoppingBag':
      return <ShoppingBag {...props} />;
    case 'Truck':
      return <Truck {...props} />;
    case 'HardHat':
      return <HardHat {...props} />;
    case 'Building':
      return <Building {...props} />;
    case 'GraduationCap':
      return <GraduationCap {...props} />;
    case 'Radio':
      return <Radio {...props} />;
    case 'Briefcase':
      return <Briefcase {...props} />;
    case 'Cpu':
      return <Cpu {...props} />;
    case 'SlidersHorizontal':
      return <SlidersHorizontal {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'Workflow':
      return <Workflow {...props} />;
    case 'TrendingUp':
      return <TrendingUp {...props} />;
    case 'Brain':
      return <Brain {...props} />;
    case 'Database':
      return <Database {...props} />;
    case 'Cloud':
      return <Cloud {...props} />;
    case 'Phone':
      return <Phone {...props} />;
    case 'Mail':
      return <Mail {...props} />;
    case 'MapPin':
      return <MapPin {...props} />;
    case 'Menu':
      return <Menu {...props} />;
    case 'X':
      return <X {...props} />;
    case 'ArrowRight':
      return <ArrowRight {...props} />;
    case 'CheckCircle2':
      return <CheckCircle2 {...props} />;
    case 'ChevronRight':
      return <ChevronRight {...props} />;
    case 'Send':
      return <Send {...props} />;
    case 'Copy':
      return <Copy {...props} />;
    case 'Check':
      return <Check {...props} />;
    case 'Globe':
      return <Globe {...props} />;
    case 'Sliders':
      return <Sliders {...props} />;
    default:
      return <Sparkles {...props} />;
  }
};

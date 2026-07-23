export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  items: string[];
  iconName: string;
  badge?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface TechCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface WhyChoosePillar {
  title: string;
  description: string;
  iconName: string;
}

export interface AIReadinessQuestion {
  id: string;
  question: string;
  options: { label: string; score: number; text: string }[];
}

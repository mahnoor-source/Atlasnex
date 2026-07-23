import { ServiceItem, IndustryItem, ProcessStep, TechCategory, WhyChoosePillar } from './types';

export const HERO_DATA = {
  company: 'ATLASNEX SDN. BHD.',
  headline: 'Enterprise AI Solutions That Transform Businesses',
  subheadline: 'Innovate Smarter. Automate Faster. Grow Without Limits.',
  overview:
    'ATLASNEX is a leading Artificial Intelligence solutions company helping businesses leverage the power of AI to automate operations, enhance decision-making, improve customer experiences, and accelerate digital transformation.',
  extendedOverview:
    'We design, develop, and deploy intelligent AI solutions tailored to your business objectives—combining advanced technologies with practical implementation to deliver measurable business outcomes.',
  summaryCallout:
    "Whether you're looking to streamline workflows, build intelligent applications, or integrate AI into your existing systems, ATLASNEX provides the expertise to turn your vision into reality.",
  highlights: [
    'AI Strategy & Consulting',
    'Custom AI Development',
    'Machine Learning Solutions',
    'Generative AI Applications',
    'Intelligent Automation',
    'AI Integration Services',
  ],
  // The exact Giphy URL requested by user
  heroAnimationGif:
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnVoamE4amdwemVma2szYmZwbmZ3NTBpc3E3NGp1ZGpyaW53bTZtaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WC1dsQ7R4aNdvyYpmC/giphy.gif',
};

export const ABOUT_DATA = {
  title: 'About ATLASNEX',
  subtitle: 'Building the Future with Artificial Intelligence',
  p1: 'Artificial Intelligence is reshaping the way businesses operate, compete, and grow. At ATLASNEX, we help organizations unlock the full potential of AI through innovative, scalable, and enterprise-ready solutions.',
  p2: 'Our team combines expertise in Artificial Intelligence, Machine Learning, Large Language Models (LLMs), Computer Vision, Data Analytics, and Intelligent Automation to develop solutions that solve complex business challenges and drive long-term value.',
  p3: 'From strategy and development to deployment and continuous optimization, we partner with businesses throughout their AI transformation journey.',
  stats: [
    { label: 'Core AI Domains', value: '6+' },
    { label: 'Enterprise Ready', value: '100%' },
    { label: 'Client Focus', value: 'End-to-End' },
    { label: 'Industry Reach', value: '12+ Sectors' },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-strategy-consulting',
    title: 'AI Strategy & Consulting',
    category: 'Consulting & Strategy',
    subtitle:
      'Develop a clear roadmap for AI adoption with expert guidance tailored to your business objectives.',
    description:
      'Navigating the AI landscape requires strategic precision. We assess your organizational readiness, pinpoint high-impact opportunities, and craft actionable roadmaps to ensure seamless digital transformation.',
    items: [
      'AI Readiness Assessment',
      'AI Strategy Development',
      'Digital Transformation Consulting',
      'AI Opportunity Identification',
      'Technology Advisory',
      'AI Implementation Roadmap',
    ],
    iconName: 'Compass',
    badge: 'Popular',
  },
  {
    id: 'custom-ai-development',
    title: 'Custom AI Development',
    category: 'Engineering & Software',
    subtitle:
      'Design and develop intelligent applications built specifically around your business processes.',
    description:
      'Off-the-shelf tools often fail to capture complex enterprise workflows. We construct bespoke AI software, mobile solutions, and web platforms tailored to your distinct operational DNA.',
    items: [
      'Enterprise AI Applications',
      'AI Software Development',
      'Custom AI Platforms',
      'AI-Powered Web Applications',
      'AI Mobile Solutions',
      'API Development & Integration',
    ],
    iconName: 'Code',
    badge: 'Core Focus',
  },
  {
    id: 'machine-learning-solutions',
    title: 'Machine Learning Solutions',
    category: 'Data & Analytics',
    subtitle:
      'Transform your data into intelligent business insights through advanced machine learning models.',
    description:
      'Unlock hidden patterns in your raw data. Our predictive and forecasting ML models enable proactive risk management, hyper-personalized recommendation engines, and data-driven decision support.',
    items: [
      'Predictive Analytics',
      'Forecasting Models',
      'Recommendation Engines',
      'Customer Behavior Analysis',
      'Risk Prediction',
      'Intelligent Decision Support',
    ],
    iconName: 'BrainCircuit',
  },
  {
    id: 'generative-ai-solutions',
    title: 'Generative AI Solutions',
    category: 'LLMs & GenAI',
    subtitle:
      'Harness the power of Large Language Models (LLMs) to improve productivity and automate knowledge-intensive tasks.',
    description:
      'Empower teams with state-of-the-art LLMs, custom retrieval-augmented generation (RAG), intelligent chatbots, and document processing that streamline knowledge management.',
    items: [
      'AI Chatbots',
      'AI Virtual Assistants',
      'Knowledge Management Systems',
      'AI Content Generation',
      'Intelligent Search',
      'Document Intelligence',
    ],
    iconName: 'Sparkles',
    badge: 'High Impact',
  },
  {
    id: 'intelligent-automation',
    title: 'Intelligent Automation',
    category: 'Automation',
    subtitle:
      'Automate repetitive tasks and improve operational efficiency using AI-powered workflows.',
    description:
      'Merge AI cognitive capabilities with Robotic Process Automation (RPA) to eliminate manual bottlenecks, streamline document approvals, and orchestrate complex tasks with speed.',
    items: [
      'Workflow Automation',
      'Business Process Automation',
      'Intelligent Document Processing',
      'Robotic Process Automation (RPA)',
      'Approval Workflow Automation',
      'Smart Task Orchestration',
    ],
    iconName: 'Zap',
  },
  {
    id: 'computer-vision-solutions',
    title: 'Computer Vision Solutions',
    category: 'Visual AI',
    subtitle:
      'Extract valuable insights from images and video using advanced computer vision technologies.',
    description:
      'Deploy visual intelligence for automated quality control, object detection in manufacturing, real-time video analytics, and secure identity management.',
    items: [
      'Image Recognition',
      'Object Detection',
      'Video Analytics',
      'Automated Inspection',
      'Quality Control',
      'Facial Recognition Solutions',
    ],
    iconName: 'Eye',
  },
  {
    id: 'data-analytics-bi',
    title: 'Data Analytics & Business Intelligence',
    category: 'Data & Analytics',
    subtitle:
      'Turn data into actionable insights that support better business decisions.',
    description:
      'Convert vast data streams into executive dashboards and interactive reports that deliver real-time operational visibility and forward-looking strategic intelligence.',
    items: [
      'Executive Dashboards',
      'Business Intelligence Reporting',
      'Operational Analytics',
      'Performance Monitoring',
      'Data Visualization',
      'Predictive Business Insights',
    ],
    iconName: 'BarChart3',
  },
  {
    id: 'ai-integration-services',
    title: 'AI Integration Services',
    category: 'Enterprise Infrastructure',
    subtitle: 'Integrate AI seamlessly into your existing business ecosystem.',
    description:
      'Bridge modern AI infrastructure with legacy ERP, CRM, and cloud environments, ensuring zero friction, total data compliance, and enterprise scalability.',
    items: [
      'ERP Systems',
      'CRM Platforms',
      'Enterprise Applications',
      'Cloud Infrastructure',
      'Third-Party APIs',
      'Legacy System Modernization',
    ],
    iconName: 'Layers',
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'gov',
    name: 'Government & Public Sector',
    iconName: 'Building2',
    description: 'Enhancing public service delivery, automated document verification, and smart civic infrastructure management.',
  },
  {
    id: 'finance',
    name: 'Financial Services',
    iconName: 'Landmark',
    description: 'Automated fraud detection, risk prediction modeling, algorithmic credit scoring, and compliance monitoring.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    iconName: 'Activity',
    description: 'Diagnostic computer vision, medical record intelligence, predictive patient care, and clinical research automation.',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    iconName: 'Factory',
    description: 'Predictive equipment maintenance, visual defect inspection, supply chain optimization, and smart factory control.',
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    iconName: 'ShoppingBag',
    description: 'Hyper-personalized recommendation engines, dynamic pricing algorithms, automated inventory forecasting, and AI assistants.',
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    iconName: 'Truck',
    description: 'Dynamic route optimization, warehouse automation, demand forecasting, and real-time fleet tracking analytics.',
  },
  {
    id: 'construction',
    name: 'Construction & Engineering',
    iconName: 'HardHat',
    description: 'AI safety inspection, architectural blueprint parsing, project risk forecasting, and resource scheduling.',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    iconName: 'Building',
    description: 'Property valuation modeling, tenant intelligence, automated document processing, and smart building sensors.',
  },
  {
    id: 'education',
    name: 'Education',
    iconName: 'GraduationCap',
    description: 'Adaptive AI learning platforms, automated grading assistance, institutional analytics, and student engagement.',
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    iconName: 'Radio',
    description: 'Network anomaly detection, predictive churn analytics, automated customer support, and bandwidth optimization.',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    iconName: 'Briefcase',
    description: 'Contract analysis, automated knowledge indexing, legal document intelligence, and workflow task orchestration.',
  },
  {
    id: 'smart-infra',
    name: 'Smart Infrastructure',
    iconName: 'Cpu',
    description: 'IoT sensor analytics, energy optimization algorithms, urban mobility monitoring, and automated utility management.',
  },
];

export const WHY_CHOOSE_DATA: WhyChoosePillar[] = [
  {
    title: 'AI-First Approach',
    description: 'Artificial Intelligence is at the core of every solution we design, not an afterthought or superficial wrapper.',
    iconName: 'Cpu',
  },
  {
    title: 'Tailor-Made Solutions',
    description: 'Every AI solution is customized to meet your unique operational workflows, data assets, and strategic goals.',
    iconName: 'SlidersHorizontal',
  },
  {
    title: 'Enterprise-Ready Technology',
    description: 'Secure, compliant, scalable, and cloud-native solutions designed for reliable long-term business growth.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'End-to-End Delivery',
    description: 'From initial strategy & solution design to deployment, system integration, team training, and 24/7 support.',
    iconName: 'Workflow',
  },
  {
    title: 'Business-Focused Innovation',
    description: 'We prioritize tangible metrics—delivering measurable ROI, dramatic operational efficiency, and sustainable competitive edge.',
    iconName: 'TrendingUp',
  },
];

export const TECH_DATA: TechCategory[] = [
  {
    category: 'Artificial Intelligence',
    iconName: 'Brain',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Predictive Analytics',
      'Natural Language Processing (NLP)',
      'Large Language Models (LLMs)',
    ],
  },
  {
    category: 'Automation',
    iconName: 'Zap',
    skills: [
      'Intelligent Automation',
      'Robotic Process Automation (RPA)',
      'AI Autonomous Agents',
      'Workflow Automation',
    ],
  },
  {
    category: 'Data & Analytics',
    iconName: 'Database',
    skills: [
      'Business Intelligence',
      'Data Engineering',
      'Predictive Modeling',
      'Executive Dashboard Development',
    ],
  },
  {
    category: 'Computer Vision',
    iconName: 'Eye',
    skills: [
      'Image Recognition',
      'Object Detection',
      'Video Analytics',
      'Visual Intelligence Systems',
    ],
  },
  {
    category: 'Cloud & Enterprise Technologies',
    iconName: 'Cloud',
    skills: [
      'Cloud Computing (AWS/GCP/Azure)',
      'API Integration',
      'Enterprise Software Architecture',
      'MLOps & Pipeline Deployment',
      'Scalable AI Infrastructure',
    ],
  },
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your business goals, operational challenges, and high-impact opportunities for AI adoption.',
    details: [
      'Stakeholder alignment workshops',
      'Data infrastructure audit',
      'Feasibility & ROI mapping',
    ],
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Develop a comprehensive AI roadmap aligned with your organizational objectives and technology stack.',
    details: [
      'Custom architecture blueprint',
      'Risk & security compliance check',
      'Phased rollout timeline',
    ],
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Build intelligent, secure, and scalable AI solutions tailored to your specific business requirements.',
    details: [
      'Agile model prototyping',
      'Bespoke algorithm training',
      'User-centric interface design',
    ],
  },
  {
    number: '04',
    title: 'Deployment',
    description: 'Integrate AI seamlessly into your existing systems, databases, and operational workflows.',
    details: [
      'Enterprise API integration',
      'Zero-downtime cutover',
      'Staff onboarding & training',
    ],
  },
  {
    number: '05',
    title: 'Support & Optimization',
    description: 'Provide continuous monitoring, maintenance, performance optimization, and ongoing technical support.',
    details: [
      'Real-time accuracy drift monitoring',
      'Continuous fine-tuning',
      'SLA-backed technical support',
    ],
  },
];

export const CONTACT_INFO = {
  phone: '+60 17-381 4799',
  email: 'hello@atlasnex.my',
  location: 'Kuala Lumpur, Malaysia',
  company: 'ATLASNEX SDN. BHD.',
  tagline: "Let's Build Smarter Businesses with AI",
  description:
    "Whether you're exploring Artificial Intelligence for the first time or expanding enterprise-wide AI capabilities, ATLASNEX provides the expertise, technology, and innovation needed to drive meaningful business transformation.",
};

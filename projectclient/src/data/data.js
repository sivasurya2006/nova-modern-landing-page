export const navLinks = [
  { id: 'features', label: 'Features' },
  { id: 'product', label: 'Product' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

export const trustedCompanies = [
  { name: 'Vertex', icon: '◆' },
  { name: 'Orbit', icon: '◎' },
  { name: 'Lumina', icon: '✦' },
  { name: 'Pulse', icon: '◈' },
  { name: 'Arc', icon: '◇' },
  { name: 'Nexa', icon: '⬡' },
];

export const features = [
  {
    id: 1,
    title: 'AI Task Automation',
    description: 'Let AI handle repetitive tasks while your team focuses on high-impact work that drives results.',
    icon: 'automation',
  },
  {
    id: 2,
    title: 'Smart Project Management',
    description: 'Organize, track, and deliver projects with intelligent planning tools and real-time updates.',
    icon: 'project',
  },
  {
    id: 3,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with shared workspaces, comments, and real-time editing.',
    icon: 'collaboration',
  },
  {
    id: 4,
    title: 'Real-Time Analytics',
    description: 'Get actionable insights with live dashboards and performance metrics for your team.',
    icon: 'analytics',
  },
  {
    id: 5,
    title: 'Workflow Automation',
    description: 'Build custom workflows that automate processes and eliminate bottlenecks across teams.',
    icon: 'workflow',
  },
  {
    id: 6,
    title: 'Secure Cloud Workspace',
    description: 'Enterprise-grade security with encrypted data, SSO, and compliance certifications.',
    icon: 'security',
  },
];

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Connect Your Workspace',
    description: 'Import your existing projects and connect your favorite tools in minutes. NOVA integrates with everything your team already uses.',
  },
  {
    step: '02',
    title: 'Automate Your Workflow',
    description: 'Set up intelligent automations that handle routine tasks, send notifications, and keep your projects moving forward.',
  },
  {
    step: '03',
    title: 'Grow With Insights',
    description: 'Track performance metrics, identify bottlenecks, and make data-driven decisions to continuously improve.',
  },
];

export const statistics = [
  { value: 50000, suffix: '+', label: 'Active Users', prefix: '' },
  { value: 120000, suffix: '+', label: 'Tasks Automated', prefix: '' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction', prefix: '' },
  { value: 35, suffix: '%', label: 'Avg. Productivity Boost', prefix: '' },
];

export const solutions = [
  {
    id: 'startups',
    title: 'Startups',
    icon: 'rocket',
    heading: 'Move fast without breaking things',
    description: 'NOVA helps startups ship faster with AI-powered project management and automation tools built for lean teams.',
    benefits: [
      'Rapid project setup and templating',
      'AI-powered task prioritization',
      'Lean team collaboration tools',
      'Budget-friendly scaling options',
    ],
    cta: 'Start Building',
  },
  {
    id: 'marketing',
    title: 'Marketing Teams',
    icon: 'megaphone',
    heading: 'Launch campaigns that convert',
    description: 'Plan, execute, and measure marketing campaigns with tools designed for creative teams.',
    benefits: [
      'Campaign planning and tracking',
      'Content calendar automation',
      'Performance analytics dashboards',
      'Cross-team collaboration tools',
    ],
    cta: 'Boost Your Campaigns',
  },
  {
    id: 'software',
    title: 'Software Teams',
    icon: 'code',
    heading: 'Ship better software, faster',
    description: 'Streamline your development workflow with sprint planning, bug tracking, and CI/CD integrations.',
    benefits: [
      'Agile sprint management',
      'Automated code review workflows',
      'Bug tracking and resolution',
      'Developer-friendly integrations',
    ],
    cta: 'Optimize Your Pipeline',
  },
  {
    id: 'remote',
    title: 'Remote Teams',
    icon: 'globe',
    heading: 'Stay connected, wherever you are',
    description: 'Bridge the gap between distributed teams with tools designed for asynchronous and real-time collaboration.',
    benefits: [
      'Async-first collaboration tools',
      'Time zone management features',
      'Virtual standup automation',
      'Team engagement analytics',
    ],
    cta: 'Connect Your Team',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Vertex',
    avatar: 'SJ',
    rating: 5,
    text: 'NOVA transformed how our team manages projects. The AI automation alone saved us 20 hours per week. It’s become an essential part of our workflow.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Engineering Lead',
    company: 'Orbit',
    avatar: 'MC',
    rating: 5,
    text: 'The best project management tool we’ve used. The real-time analytics help us identify bottlenecks before they become problems.',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Marketing Director',
    company: 'Lumina',
    avatar: 'ED',
    rating: 5,
    text: 'From campaign planning to performance tracking, NOVA gives our marketing team everything we need in one intelligent platform.',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CTO',
    company: 'Pulse',
    avatar: 'DP',
    rating: 5,
    text: 'NOVA’s workflow automation is incredible. We’ve automated over 80% of our repetitive tasks, freeing our engineers to focus on what matters.',
  },
];

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For individuals and small projects.',
    monthlyPrice: 9,
    annualPrice: 7,
    popular: false,
    features: [
      '5 projects',
      'Basic AI automation',
      'Task management',
      'Email support',
      '1 GB storage',
    ],
    cta: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For growing teams.',
    monthlyPrice: 24,
    annualPrice: 19,
    popular: true,
    features: [
      'Unlimited projects',
      'Advanced AI automation',
      'Analytics dashboard',
      'Team collaboration',
      'Priority support',
      '10 GB storage',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'business',
    name: 'Business',
    description: 'For larger teams and enterprises.',
    monthlyPrice: 49,
    annualPrice: 39,
    popular: false,
    features: [
      'Unlimited everything',
      'Advanced analytics',
      'Custom workflows',
      'Admin controls',
      'Dedicated support',
      'Unlimited storage',
      'SSO & security',
    ],
    cta: 'Contact Sales',
  },
];

export const faqData = [
  {
    id: 1,
    question: 'What is NOVA?',
    answer: 'NOVA is an AI-powered productivity platform that helps modern teams manage projects, automate repetitive tasks, analyze performance, and collaborate efficiently. It combines intelligent automation with intuitive project management tools.',
  },
  {
    id: 2,
    question: 'Can I try NOVA for free?',
    answer: 'Yes! NOVA offers a 14-day free trial on all plans with no credit card required. You can explore all features and see how NOVA fits your workflow before committing.',
  },
  {
    id: 3,
    question: 'Does NOVA support remote teams?',
    answer: 'Absolutely. NOVA is built with remote teams in mind. Features like async collaboration, time zone management, virtual standups, and real-time editing make it perfect for distributed teams.',
  },
  {
    id: 4,
    question: 'Can NOVA automate repetitive tasks?',
    answer: 'Yes, NOVA uses AI to identify and automate repetitive tasks in your workflow. From task assignments to status updates and notifications, NOVA can automate hundreds of routine actions.',
  },
  {
    id: 5,
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no questions asked. Your data will remain accessible for 30 days after cancellation.',
  },
  {
    id: 6,
    question: 'Is my data secure?',
    answer: 'Security is our top priority. NOVA uses enterprise-grade encryption (AES-256), SOC 2 compliance, SSO support, and regular security audits to keep your data safe.',
  },
];

export const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Integrations', href: '#' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Updates', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'FAQ', href: '#faq' },
  ],
};

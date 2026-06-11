export const metrics = [
  { value: 3, suffix: '+', label: 'Years in Operations & Systems' },
  { value: 10, suffix: '+', label: 'Automation Systems Built' },
  { text: 'ATS', label: 'Enterprise Platform Built from Scratch' },
  { value: 35, suffix: '+', label: 'Team Members Impacted' },
  { text: '1000s', label: 'Candidate Records Processed' },
  { value: 7, suffix: '+', label: 'Reporting Systems Automated' },
]

export const timeline = [
  {
    year: '2023',
    role: 'Operations Executive',
    dept: 'Sourcing',
    desc: 'Started in the trenches — executing high-volume recruitment operations. Began understanding the mechanics of hiring workflows and where human time was being consumed by repetitive tasks.',
  },
  {
    year: '2024',
    role: 'Associate',
    dept: 'Sourcing & Operations',
    desc: 'Transitioned from execution to analysis. Started identifying process bottlenecks, mapping inefficiencies, and building small automations to eliminate repetitive manual work.',
  },
  {
    year: '2025',
    role: 'Assistant Manager',
    dept: 'Sourcing & Operations',
    desc: 'Began shipping production systems using AI-assisted development. Built automation tools, internal dashboards, and workflow engines that real teams relied on daily.',
  },
  {
    year: '2026',
    role: 'Manager',
    dept: 'Automation & Operations',
    desc: 'Leading automation strategy, system design, and operational intelligence initiatives across the organization. Now the person teams call when a process needs to be eliminated.',
    current: true,
  },
]

export const caseStudies = [
  {
    id: 'zenalpha',
    tag: 'Recruitment Technology',
    title: 'ZenAlpha ATS',
    headline: 'Enterprise Recruitment Operating System',
    link: 'https://zenalpha-ats-frontend.vercel.app/',  // ADD THIS LINE
    description: 'Built a full-stack Applicant Tracking System to replace spreadsheet-based recruitment operations. Handles the complete hiring lifecycle from job creation to placement, serving the entire sourcing team.',
    problem: 'Recruitment operations ran on fragmented spreadsheets, emails, and manual processes. Pipeline visibility was zero, duplicate work was common, and leadership had no real-time data.',
    solution: 'Built a production ATS using AI-assisted development — a complete recruitment operating system with real-time pipeline visibility, automated communications, and analytics.',
    tech: ['React', 'Tailwind CSS', 'Flask', 'MongoDB Atlas', 'Supabase', 'Vercel'],
    architecture: [
      { layer: 'Frontend', items: ['React', 'Tailwind CSS'], color: 'cyan' },
      { layer: 'Backend', items: ['Flask API'], color: 'indigo' },
      { layer: 'Database', items: ['MongoDB Atlas'], color: 'green' },
      { layer: 'Storage', items: ['Supabase'], color: 'purple' },
      { layer: 'Hosting', items: ['Vercel'], color: 'orange' },
    ],
    features: [
      'Job Management & Requirements',
      'Kanban Candidate Pipeline',
      'Resume Parsing & Storage',
      'Gmail Automation Hub',
      'Analytics & Reporting Matrix',
      'CSV Export Engine',
      'Screening Questions Framework',
      'Real-Time Updates',
    ],
    impact: 'Eliminated spreadsheet chaos. Full pipeline visibility, automated email workflows, and data-driven recruiting decisions for a 35+ person team.',
    featured: true,
  },
  {
    id: 'leave-management',
    tag: 'HR Automation',
    title: 'Leave Management Platform',
    headline: 'Enterprise Leave, WFH & Comp-Off System',
    description: 'Complete workforce leave management platform built on Google Workspace. Automates leave tracking, WFH quotas, comp-off management, monthly accruals, policy enforcement, and employee self-service.',
    problem: 'HR teams manually tracked leave balances, WFH quotas, comp-off credits, and monthly accruals across spreadsheets. The process consumed hours weekly and introduced frequent errors.',
    solution: 'Built a centralized workforce management engine on Google Apps Script that automates the entire leave lifecycle — from request to approval to balance update.',
    tech: ['Google Apps Script', 'Google Forms', 'Google Sheets', 'Gmail Automation'],
    architecture: [
      { layer: 'Frontend', items: ['Google Forms', 'Google Sheets'], color: 'cyan' },
      { layer: 'Automation', items: ['Google Apps Script'], color: 'indigo' },
      { layer: 'Communication', items: ['Gmail Automation'], color: 'green' },
      { layer: 'Business Logic', items: ['Custom Policy Engine'], color: 'purple' },
    ],
    features: [
      'Full-day & Half-day Leave Processing',
      'WFH Quota Management & Enforcement',
      'Comp-Off Accrual & Redemption Engine',
      'Monthly Pro-rata Accrual Calculations',
      'Employee Self-Service Balance Requests',
      'Automated Approval Notifications',
      'Policy Violation Detection',
      'Carry-forward & Annual Rollover Logic',
    ],
    impact: 'Eliminated manual HR reconciliation. Employees self-serve balance checks. HR now has zero manual tracking overhead.',
    featured: true,
  },
  {
    id: 'recruitment-suite',
    tag: 'Operations Intelligence',
    title: 'Recruitment Automation Suite',
    headline: 'Full-Stack Recruiter Operations Platform',
    description: 'A suite of interconnected tools: automated performance reporting, workload balancing, compliance tracking, knowledge search, and operational command center — all running on Google Workspace.',
    problem: 'Performance reporting was manual and slow. Workload assignment was biased. Compliance monitoring was nonexistent. Knowledge was scattered across documents no one could find.',
    solution: 'Built five interconnected automation systems that share data, generate reports automatically, and give managers real-time operational visibility.',
    tech: ['Google Apps Script', 'Google Sheets', 'SQL', 'Power BI', 'Gmail Automation'],
    architecture: [
      { layer: 'Data Layer', items: ['Google Sheets DB', 'SQL Queries'], color: 'cyan' },
      { layer: 'Processing', items: ['Apps Script Engine'], color: 'indigo' },
      { layer: 'Analytics', items: ['Power BI Dashboards'], color: 'green' },
      { layer: 'Delivery', items: ['Gmail Auto-Reports'], color: 'purple' },
    ],
    features: [
      'Automated Weekly & Monthly Performance Reports',
      'Recruiter Leaderboards',
      'Workload Balancing & Auto-Assignment',
      'Knowledge Search Engine',
      'Compliance Tracking & Alerts',
      'AI-Generated Coaching Recommendations',
      'Data Import & Processing Pipelines',
      'Operations Command Center',
    ],
    impact: 'Reporting that took hours now runs automatically. Managers have real-time leaderboards. Workload is balanced without manual intervention.',
    featured: true,
  },
]

export const additionalProjects = [
  {
    icon: '⚖️',
    title: 'Recruitment Load Balancer',
    desc: 'Automatically calculates sourcing demand, evaluates recruiter capacity, and distributes workload without manual assignment.',
    tags: ['Automation', 'Google Apps Script'],
  },
  {
    icon: '🔍',
    title: 'Knowledge Search Engine',
    desc: 'Internal self-service search platform for instant retrieval of requirements, screening questions, positions, and clients.',
    tags: ['Search', 'Self-Service'],
  },
  {
    icon: '📋',
    title: 'Recruiter Compliance Tracker',
    desc: 'Monitors day-end reports, late submissions, duplicate entries, and leave compliance — flagging violations automatically.',
    tags: ['Compliance', 'Monitoring'],
  },
  {
    icon: '📊',
    title: 'Performance Intelligence Platform',
    desc: 'Generates weekly leaderboards, monthly insights, and AI-assisted coaching recommendations for every recruiter.',
    tags: ['Analytics', 'Reporting'],
  },
  {
    icon: '🖥️',
    title: 'Operations Command Center',
    desc: 'Unified recruiter operating dashboard with backend sync, assignment workflows, and real-time productivity monitoring.',
    tags: ['Dashboard', 'Operations'],
  },
]

export const approach = [
  { num: '01', icon: '🔍', title: 'Identify Inefficiency', desc: 'Find where human time is wasted on repetitive, automatable work.' },
  { num: '02', icon: '🗺️', title: 'Map Workflow', desc: 'Document the current state, inputs, outputs, and decision points.' },
  { num: '03', icon: '🏗️', title: 'Design System', desc: 'Architect the solution before writing a single line of code.' },
  { num: '04', icon: '🤖', title: 'Build with AI', desc: 'Use AI-assisted development to build production-grade systems faster.' },
  { num: '05', icon: '🚀', title: 'Deploy', desc: 'Ship to production with proper testing and rollback capability.' },
  { num: '06', icon: '📊', title: 'Measure Impact', desc: 'Track hours saved, errors reduced, and velocity gained.' },
  { num: '07', icon: '♾️', title: 'Improve Continuously', desc: 'Iterate based on real usage data and evolving team needs.' },
]

export const techStack = [
  {
    category: 'Automation',
    color: 'indigo',
    items: ['Google Apps Script', 'Workflow Automation', 'AI Systems Integration'],
  },
  {
    category: 'Analytics',
    color: 'cyan',
    items: ['SQL', 'Power BI', 'Excel', 'Tableau'],
  },
  {
    category: 'Platforms',
    color: 'green',
    items: ['Firebase', 'MongoDB Atlas', 'Supabase'],
  },
  {
    category: 'Frontend',
    color: 'purple',
    items: ['React', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'AI Layer',
    color: 'orange',
    items: ['Claude', 'ChatGPT', 'Gemini'],
  },
]

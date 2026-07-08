// src/data/services.js
import {
  Code2,
  Smartphone,
  Brain,
  Network,
  MessageSquare,
  Layers,
} from 'lucide-react';

export const services = [
  {
    id: 'fullstack',
    icon: Code2,
    title: 'Full Stack Web Development',
    description:
      'End-to-end web application development — from database schema and API design to pixel-perfect frontends. Built for performance, scalability, and maintainability.',
    tags: ['React.js', 'PHP', 'Node.js', 'MySQL', 'REST API'],
    accent: '#6C63FF',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Cross-platform mobile applications with Flutter that feel native on both iOS and Android. Shared codebase, full feature parity, and seamless backend integration.',
    tags: ['Flutter', 'Dart', 'iOS', 'Android', 'Firebase'],
    accent: '#38BDF8',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Integration',
    description:
      'Integrating artificial intelligence where it creates real, measurable value. From recommendation engines and NLP search to predictive analytics and automation.',
    tags: ['Python', 'Machine Learning', 'NLP', 'LLM APIs', 'Data Pipelines'],
    accent: '#A78BFA',
  },
  {
    id: 'architecture',
    icon: Network,
    title: 'System Architecture',
    description:
      'Designing systems that scale cleanly — database design, API contracts, service boundaries, caching strategies, and infrastructure planning before a single line of code.',
    tags: ['System Design', 'Database Design', 'API Design', 'Scalability'],
    accent: '#34D399',
  },
  {
    id: 'consulting',
    icon: MessageSquare,
    title: 'Technical Consulting',
    description:
      'Strategic technical guidance for startups and businesses. I help you define your technology roadmap, avoid costly architecture mistakes, and make confident build vs. buy decisions.',
    tags: ['Tech Strategy', 'Code Review', 'Architecture Review', 'Roadmapping'],
    accent: '#FB923C',
  },
  {
    id: 'custom',
    icon: Layers,
    title: 'Custom Software Solutions',
    description:
      'When off-the-shelf software isn\'t enough. I design and build tailored software products that fit your exact business workflow, integrated with your existing systems.',
    tags: ['SaaS Products', 'Internal Tools', 'Business Automation', 'Integrations'],
    accent: '#F472B6',
  },
];

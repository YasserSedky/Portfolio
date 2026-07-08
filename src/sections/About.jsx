// src/sections/About.jsx
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';

const pillars = [
  {
    number: '01',
    title: 'The Journey',
    body: `I didn't fall into software — I chose it deliberately. What started as curiosity about how websites worked evolved into a deep obsession with how systems think, communicate, and scale. Every project since has been a lesson in building things that actually work in the real world, not just in theory.`,
    accent: '#6C63FF',
  },
  {
    number: '02',
    title: 'Product Thinking',
    body: `I don't write code for its own sake. Before I touch a keyboard, I need to understand the problem: who has it, why it matters, and what success looks like. Code is the means. A product that solves a real business problem is the goal. That distinction changes everything about how I architect, prioritize, and build.`,
    accent: '#38BDF8',
  },
  {
    number: '03',
    title: 'Architecture Mindset',
    body: `The most expensive software mistakes happen before the first commit. I invest heavily in database design, API contracts, and system boundaries — because a well-designed foundation means features ship faster, bugs surface earlier, and scale doesn't require rewrites. Clean architecture isn't a luxury. It's the most practical decision you can make.`,
    accent: '#A78BFA',
  },
  {
    number: '04',
    title: 'End-to-End Ownership',
    body: `From the first wireframe to the last deployment config, I can own the entire lifecycle of a software product. Database schemas, REST APIs, frontend interfaces, mobile applications, AI integrations, cloud infrastructure — I've built all of it, and more importantly, I understand how it all connects. That breadth is what makes me dangerous with a problem.`,
    accent: '#34D399',
  },
  {
    number: '05',
    title: 'Teaching & Learning',
    body: `I've taught programming and system design to students who had never written a line of code. There's no faster way to deepen your own understanding than explaining something to someone starting from zero. It forced me to find the clearest mental models, the right analogies, and to actually know what I'm talking about — not just know how to use it.`,
    accent: '#FB923C',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[150px] pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <FadeIn className="mb-16 lg:mb-24 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-mono text-sm tracking-widest uppercase">About</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-6 tracking-tight">
            The engineer behind the work.
          </h2>
          <p className="text-text-secondary text-xl leading-relaxed">
            I build software products the way they're meant to be built — from first principles, with clarity of purpose, and without cutting corners where it matters.
          </p>
        </FadeIn>

        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {pillars.map((pillar, i) => (
            <FadeIn
              key={pillar.number}
              delay={i * 0.08}
              className={`bg-bg-surface p-8 lg:p-10 hover:bg-bg-hover transition-colors duration-300 group ${
                i === 4 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center gap-4">
                  <span
                    className="font-mono text-xs font-bold tracking-widest"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.number}
                  </span>
                  <div className="h-px flex-1" style={{ background: `${pillar.accent}20` }} />
                </div>
                <h3
                  className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-white transition-colors"
                >
                  {pillar.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-base lg:text-[15px] max-w-prose">
                  {pillar.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Pull quote */}
        <FadeIn delay={0.3} className="mt-16 lg:mt-24">
          <div className="relative border-l-2 border-accent pl-8 lg:pl-12 max-w-3xl">
            <blockquote className="text-2xl lg:text-3xl font-bold gradient-text leading-snug">
              "The goal isn't to write code. The goal is to build something that works, scales, and matters."
            </blockquote>
            <p className="mt-4 text-text-muted font-mono text-sm">— Yasser Wael Sedky</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

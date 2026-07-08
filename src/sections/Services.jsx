// src/sections/Services.jsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import Button from '../components/ui/Button';
import { services } from '../data/services';

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: `${service.accent}40` }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl border border-border bg-bg-card p-6 lg:p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-card-hover cursor-default h-full"
    >
      {/* Subtle glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 0%, ${service.accent}06, transparent 70%)` }}
      />

      {/* Icon */}
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${service.accent}10`,
          borderColor: `${service.accent}25`,
        }}
      >
        <Icon size={22} style={{ color: service.accent }} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 relative z-10">
        <h3 className="text-lg font-bold text-text-primary group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto relative z-10">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium border transition-all duration-200"
            style={{
              color: `${service.accent}cc`,
              borderColor: `${service.accent}20`,
              background: `${service.accent}08`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/3 blur-[150px] pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <FadeIn className="mb-14 lg:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-mono text-sm tracking-widest uppercase">Services</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 max-w-3xl">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4 tracking-tight">
                How I can help you build.
              </h2>
              <p className="text-text-secondary text-xl">
                Every service, designed to take a problem from definition to working software.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-20 items-stretch">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.07} className="h-full flex flex-col">
              <ServiceCard service={service} index={i} />
            </FadeIn>
          ))}
        </div>

        {/* CTA Strip */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-border-accent bg-gradient-to-br from-accent/8 to-accent-sky/5 p-10 lg:p-14 text-center">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <span className="text-accent font-mono text-sm uppercase tracking-widest">Start a Project</span>
                <h3 className="text-3xl lg:text-4xl font-black gradient-text">
                  Have an idea?
                </h3>
                <p className="text-text-secondary text-lg max-w-lg leading-relaxed">
                  Let's build it together. From the first conversation to the final deployment.
                </p>
              </div>
              <Button
                variant="primary"
                size="xl"
                onClick={scrollToContact}
                iconRight={<ArrowRight size={20} />}
              >
                Let's Build It Together
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

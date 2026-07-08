// src/sections/Hero.jsx
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';

const techStack = [
  { label: 'React.js', color: '#61DAFB' },
  { label: 'Flutter', color: '#54C5F8' },
  { label: 'PHP', color: '#8892BE' },
  { label: 'MySQL', color: '#4479A1' },
  { label: 'Python', color: '#F7CC42' },
  { label: 'AI / ML', color: '#A78BFA' },
];

const titles = [
  'Product Builder',
  'Full Stack Developer',
  'Software Engineer',
  'Software Architect',
];

const orbitItems = [
  { angle: 0, label: 'React', color: '#61DAFB', radius: 140 },
  { angle: 60, label: 'Flutter', color: '#54C5F8', radius: 140 },
  { angle: 120, label: 'Python', color: '#F7CC42', radius: 140 },
  { angle: 180, label: 'PHP', color: '#8892BE', radius: 140 },
  { angle: 240, label: 'MySQL', color: '#4479A1', radius: 140 },
  { angle: 300, label: 'AI/ML', color: '#A78BFA', radius: 140 },
];

function OrbitRing({ rotation, reverse = false, radius = 140, opacity = 0.15 }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: reverse ? 25 : 35, repeat: Infinity, ease: 'linear' }}
    >
      <div
        className="rounded-full border"
        style={{
          width: radius * 2,
          height: radius * 2,
          borderColor: `rgba(108,99,255,${opacity})`,
          borderStyle: 'dashed',
        }}
      />
    </motion.div>
  );
}

function FloatingOrbit({ items }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    >
      {items.map((item, i) => {
        const rad = (item.angle * Math.PI) / 180;
        const x = Math.cos(rad) * item.radius;
        const y = Math.sin(rad) * item.radius;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: '50%', top: '50%', x: x - 20, y: y - 12 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium border"
              style={{
                color: item.color,
                borderColor: `${item.color}30`,
                background: `${item.color}10`,
                backdropFilter: 'blur(8px)',
              }}
            >
              {item.label}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function TypewriterTitle({ titles }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, titles]);

  return (
    <span className="gradient-text-accent">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="ml-0.5"
      >
        |
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    mouseX.set((e.clientX - rect.left - centerX) / centerX * 15);
    mouseY.set((e.clientY - rect.top - centerY) / centerY * 10);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-100" />
      <div className="absolute inset-0 bg-gradient-mesh" />

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-sky/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Left — Content */}
          <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-mono font-medium">Available for new projects</span>
              </div>
            </motion.div>

            {/* Name */}
            <div className="flex flex-col gap-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text-muted font-mono text-sm tracking-widest uppercase"
              >
                Yasser Wael Sedky
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
              >
                <span className="gradient-text">Building</span>
                <br />
                <span className="gradient-text">Products.</span>
                <br />
                <span className="text-text-muted text-4xl sm:text-5xl lg:text-6xl font-bold">
                  <TypewriterTitle titles={titles} />
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-secondary text-lg leading-relaxed max-w-xl"
            >
              Building complete digital products from idea to production — through{' '}
              <span className="text-text-primary font-medium">scalable architecture</span>,{' '}
              <span className="text-text-primary font-medium">modern technologies</span>, and{' '}
              <span className="text-text-primary font-medium">AI-powered solutions</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollTo('projects')}
                iconRight={<ArrowRight size={18} />}
              >
                View My Projects
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo('contact')}
              >
                Let's Work Together
              </Button>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-3"
            >
              <p className="text-text-muted text-xs font-mono uppercase tracking-widest">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.55 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      color: tech.color,
                      borderColor: `${tech.color}25`,
                      background: `${tech.color}08`,
                    }}
                  >
                    {tech.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ x: springX, y: springY }}
            className="relative flex items-center justify-center order-1 lg:order-2 h-[380px] lg:h-[520px]"
          >
            {/* Orbit rings */}
            <OrbitRing radius={170} opacity={0.12} />
            <OrbitRing radius={120} opacity={0.18} reverse />
            <OrbitRing radius={75} opacity={0.1} />

            {/* Floating tech labels */}
            <FloatingOrbit items={orbitItems} />

            {/* Center — Profile image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-44 h-44 lg:w-56 lg:h-56 rounded-full"
            >
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/30 to-accent-sky/20 blur-xl animate-pulse-glow" />
              <div className="absolute -inset-1 rounded-full border border-accent/30" />

              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/20 shadow-glow-md bg-bg-surface flex items-center justify-center">
                <img
                  src="/images/yasser.jpg"
                  alt="Yasser Wael Sedky"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Floating info cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute left-0 lg:-left-8 top-1/4 glass-card rounded-xl px-3 py-2.5 shadow-card border border-border"
            >
              <p className="text-text-muted text-[10px] font-mono">Architecture</p>
              <p className="text-text-primary text-xs font-semibold">End-to-End</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute right-0 lg:-right-8 bottom-1/3 glass-card rounded-xl px-3 py-2.5 shadow-card border border-border"
            >
              <p className="text-text-muted text-[10px] font-mono">AI Integrated</p>
              <p className="text-text-primary text-xs font-semibold">Real Solutions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-card rounded-xl px-4 py-2.5 shadow-card border border-border whitespace-nowrap"
            >
              <p className="text-text-muted text-[10px] font-mono">Idea → Production</p>
              <p className="text-text-primary text-xs font-semibold text-center">Full Ownership</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}

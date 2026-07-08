// src/sections/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  BookOpen,
  X,
  ArrowRight,
  Database,
  Server,
  Layers,
  Cpu,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import Button from '../components/ui/Button';
import { featuredProjects, placeholderProjects } from '../data/projects';
import { GithubIcon } from '../components/icons/SocialIcons';

function TechBadge({ label }) {
  return (
    <span className="tag">{label}</span>
  );
}

function StatusBadge({ status }) {
  const colors = {
    'In Progress': 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    'Planned': 'bg-text-muted/10 border-text-muted/20 text-text-muted',
    'Live': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${colors[status] || colors['Planned']}`}>
      {status}
    </span>
  );
}

function CaseStudyModal({ project, onClose }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const sections = [
    { icon: BookOpen, label: 'Overview', content: project.description },
    { icon: Code2, label: 'The Problem', content: project.problem },
    { icon: CheckCircle2, label: 'The Solution', content: project.solution },
    { icon: Layers, label: 'Architecture', content: project.architecture },
    { icon: Database, label: 'Database Design', content: project.dbDesign },
    { icon: Server, label: 'API Design', content: project.apiDesign },
    { icon: Cpu, label: 'AI Integration', content: project.aiIntegration },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bg/80 backdrop-blur-xl" />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-4xl max-h-[88vh] bg-bg-surface border border-border-hover rounded-2xl overflow-hidden shadow-glow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6 lg:p-8 border-b border-border"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}12 0%, transparent 60%)`,
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-text-muted uppercase tracking-widest">{project.type}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black gradient-text mb-2">{project.title}</h2>
              <p className="text-text-muted text-sm">{project.tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-all duration-200 border border-border hover:border-border-hover"
            >
              <X size={18} />
            </button>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <span className="text-xs text-text-muted font-mono">Role:</span>
            <span
              className="text-xs font-mono font-medium px-3 py-1 rounded-full border"
              style={{ color: project.accentColor, borderColor: `${project.accentColor}30`, background: `${project.accentColor}10` }}
            >
              {project.role}
            </span>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto max-h-[calc(88vh-200px)] p-6 lg:p-8 flex flex-col gap-8">
          {/* Screenshots Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <BookOpen size={16} style={{ color: project.accentColor }} />
                <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Product Screenshots</h3>
              </div>
              
              <div className="relative rounded-xl overflow-hidden border border-border bg-black/40 aspect-[16/9] max-h-[400px]">
                <img
                  src={project.images[activeImgIndex]}
                  alt={`${project.title} Screenshot ${activeImgIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImgIndex(index)}
                    className={`relative w-24 aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImgIndex === index
                        ? 'border-accent shadow-glow-sm'
                        : 'border-border hover:border-border-hover'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Core sections */}
          {sections.map((section, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <section.icon size={16} style={{ color: project.accentColor }} />
                <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">{section.label}</h3>
              </div>
              <p className="text-text-muted leading-relaxed text-[15px]">{section.content}</p>
            </div>
          ))}

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Challenges</h3>
              <ul className="flex flex-col gap-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-text-muted text-sm leading-relaxed">
                    <ArrowRight size={14} className="flex-shrink-0 mt-0.5 text-text-muted/50" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Solutions</h3>
              <ul className="flex flex-col gap-2">
                {project.solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-text-muted text-sm leading-relaxed">
                    <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => <TechBadge key={t} label={t} />)}
            </div>
          </div>

          {/* Footer actions */}
          <div className="pt-4 border-t border-border flex flex-wrap gap-3">
            {project.website && project.website !== '#' && (
              <Button
                variant="primary"
                size="md"
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                iconRight={<ExternalLink size={15} />}
              >
                Visit Website
              </Button>
            )}
            {project.codeLink && (
              <Button
                variant="secondary"
                size="md"
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                iconRight={<GithubIcon size={15} />}
              >
                View Code
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FeaturedCard({ project, onCaseStudy }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-2xl overflow-hidden border border-border bg-bg-card hover:border-border-accent hover:shadow-card-hover transition-all duration-300"
    >
      {/* Gradient cover / Image */}
      <div className={`relative h-52 lg:h-64 bg-gradient-to-br ${project.color} overflow-hidden`}>
        <div className="absolute inset-0 grid-bg opacity-50 z-10 pointer-events-none" />
        {project.images && project.images.length > 0 ? (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center flex flex-col items-center gap-3">
              <div
                className="text-5xl font-black font-mono"
                style={{ color: project.accentColor }}
              >
                {project.title.slice(0, 2).toUpperCase()}
              </div>
              <div className="text-text-muted text-xs font-mono">{project.type}</div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
        {/* Shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
          <div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.2s]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8 flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-1">{project.type}</p>
            <h3 className="text-2xl font-bold text-text-primary">{project.title}</h3>
          </div>
          <span
            className="text-xs font-mono font-medium px-2.5 py-1 rounded-full border flex-shrink-0 mt-1"
            style={{ color: project.accentColor, borderColor: `${project.accentColor}30`, background: `${project.accentColor}10` }}
          >
            Featured
          </span>
        </div>

        <p className="text-text-muted text-sm leading-relaxed line-clamp-3">{project.description}</p>

        <div className="flex flex-col gap-2">
          <p className="text-text-muted text-xs font-mono uppercase tracking-widest">My Role</p>
          <p className="text-text-secondary text-sm font-medium">{project.role}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => <TechBadge key={t} label={t} />)}
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-border">
          {project.website && project.website !== '#' ? (
            <Button
              variant="primary"
              size="sm"
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              iconRight={<ExternalLink size={14} />}
              className="flex-1"
            >
              Visit Website
            </Button>
          ) : project.codeLink ? (
            <Button
              variant="primary"
              size="sm"
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              iconRight={<GithubIcon size={14} />}
              className="flex-1"
            >
              View Code
            </Button>
          ) : null}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onCaseStudy(project)}
            iconRight={<BookOpen size={14} />}
            className="flex-1"
          >
            Case Study
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function PlaceholderCard({ project, onCaseStudy }) {
  const hasActions = project.caseStudy || project.website || project.codeLink;
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-xl overflow-hidden border border-border bg-bg-card hover:border-border-hover hover:shadow-card-hover flex flex-col h-full transition-all duration-300"
    >
      {/* Mini cover */}
      <div className={`h-36 bg-gradient-to-br ${project.color} relative overflow-hidden flex-shrink-0`}>
        <div className="absolute inset-0 grid-bg opacity-30 z-10 pointer-events-none" />
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute top-3 right-3">
              <StatusBadge status={project.status} />
            </div>
            <div className="absolute bottom-3 left-4">
              <span className="text-2xl font-black font-mono text-white/20">{project.title.slice(0, 2).toUpperCase()}</span>
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
      </div>

      <div className="p-5 flex flex-col gap-3 flex-grow justify-between">
        <div className="flex flex-col gap-2">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <p className="text-text-muted text-[10px] font-mono uppercase tracking-widest">{project.type}</p>
              {project.status && <StatusBadge status={project.status} />}
            </div>
            <h3 className="text-base font-bold text-text-primary group-hover:text-white transition-colors">{project.title}</h3>
          </div>
          <p className="text-text-muted text-xs leading-relaxed line-clamp-3">{project.description}</p>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <div className="flex flex-wrap gap-1">
            {project.tech.map((t) => (
              <span key={t} className="tag-neutral px-2 py-0.5 rounded text-[10px] font-mono">{t}</span>
            ))}
          </div>

          {hasActions && (
            <div className="pt-2.5 border-t border-border/60 flex flex-col gap-2">
              {/* Case Study button */}
              {project.caseStudy && (
                <button
                  onClick={() => onCaseStudy(project)}
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-medium py-2 px-3 rounded-lg border border-accent/30 text-accent bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-200"
                >
                  <BookOpen size={12} />
                  Case Study
                </button>
              )}
              {/* Code link */}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-medium py-2 px-3 rounded-lg border border-border hover:border-border-hover text-text-muted hover:text-text-primary bg-transparent hover:bg-white/5 transition-all duration-200"
                >
                  <GithubIcon size={12} />
                  View Code
                </a>
              )}
              {/* Website link (no case study) */}
              {project.website && !project.caseStudy && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-medium py-2 px-3 rounded-lg border border-border hover:border-border-hover text-text-muted hover:text-text-primary bg-transparent hover:bg-white/5 transition-all duration-200"
                >
                  <ExternalLink size={12} />
                  Visit Website
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCase, setActiveCase] = useState(null);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-sky/3 blur-[120px] pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <FadeIn className="mb-14 lg:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-mono text-sm tracking-widest uppercase">Projects</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4 tracking-tight">
                Products I've built.
              </h2>
              <p className="text-text-secondary text-xl max-w-xl">
                Real platforms, real problems, real users — not tutorial projects.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Featured */}
        <FadeIn className="mb-4">
          <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-8">Featured Projects</h3>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {featuredProjects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <FeaturedCard project={project} onCaseStudy={setActiveCase} />
            </FadeIn>
          ))}
        </div>

        {/* More projects */}
        <FadeIn className="mb-8">
          <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest">More Projects</h3>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholderProjects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.07} className="h-full flex flex-col">
              <PlaceholderCard project={project} onCaseStudy={setActiveCase} />
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeCase && (
          <CaseStudyModal project={activeCase} onClose={() => setActiveCase(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

// src/sections/Contact.jsx
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Send,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/SocialIcons';
import FadeIn from '../components/animations/FadeIn';
import Button from '../components/ui/Button';

const contactLinks = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: 'yassersedky07@gmail.com',
    href: 'mailto:yassersedky07@gmail.com',
    color: '#6C63FF',
    description: 'Best for project inquiries',
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Phone',
    value: '+20 100 763 5462',
    href: 'tel:+201007635462',
    color: '#38BDF8',
    description: 'Available during business hours',
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+20 100 763 5462',
    href: 'https://wa.me/201007635462',
    color: '#25D366',
    description: 'Quick responses, any time',
    external: true,
  },
];

const socialLinks = [
  {
    id: 'linkedin',
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yasser-wael-sedky-a521a3326/',
    color: '#0A66C2',
  },
  {
    id: 'github',
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/YasserSedky',
    color: '#F8FAFC',
  },
];

function ContactRow({ link, index }) {
  const Icon = link.icon;
  return (
    <motion.a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ x: 4 }}
      className="group flex items-center gap-5 p-5 lg:p-6 rounded-xl border border-border hover:border-border-hover bg-bg-card hover:bg-bg-hover transition-all duration-200"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-200 group-hover:scale-110"
        style={{
          background: `${link.color}10`,
          borderColor: `${link.color}25`,
        }}
      >
        <Icon size={20} style={{ color: link.color }} />
      </div>
      <div className="flex flex-col gap-0.5 min-w-0">
        <p className="text-text-muted text-xs font-mono uppercase tracking-widest">{link.label}</p>
        <p className="text-text-primary font-medium text-sm truncate">{link.value}</p>
        <p className="text-text-muted text-xs">{link.description}</p>
      </div>
      <ArrowUpRight
        size={16}
        className="flex-shrink-0 ml-auto text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <FadeIn className="mb-14 lg:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-mono text-sm tracking-widest uppercase">Contact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4 tracking-tight">
            Let's start building.
          </h2>
          <p className="text-text-secondary text-xl max-w-lg">
            Have a project in mind? I'd love to hear about it. Let's talk about what you need and how I can help.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — Contact */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <FadeIn delay={0.05}>
              <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-4">Direct Contact</p>
            </FadeIn>
            {contactLinks.map((link, i) => (
              <ContactRow key={link.id} link={link} index={i} />
            ))}

            {/* Primary email CTA */}
            <FadeIn delay={0.3}>
              <div className="mt-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="mailto:yassersedky07@gmail.com"
                  className="w-full sm:w-auto"
                  iconRight={<Send size={16} />}
                >
                  Send Email
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right — Social + Message */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Social Links */}
            <FadeIn delay={0.15}>
              <div className="rounded-xl border border-border bg-bg-card p-6 flex flex-col gap-5">
                <p className="text-text-muted text-xs font-mono uppercase tracking-widest">Find Me Online</p>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="group flex items-center gap-3 py-2 text-text-muted hover:text-text-primary transition-all duration-200"
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-border transition-all duration-200 group-hover:border-border-hover group-hover:scale-110"
                          style={{ background: `${social.color}10` }}
                        >
                          <Icon size={15} style={{ color: social.color }} />
                        </div>
                        <span className="text-sm font-medium">{social.label}</span>
                        <ArrowUpRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            {/* Availability */}
            <FadeIn delay={0.25}>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">Available Now</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Currently open to new projects and collaborations. Let's discuss your vision.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

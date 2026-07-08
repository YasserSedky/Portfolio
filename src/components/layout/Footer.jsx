// src/components/layout/Footer.jsx
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/SocialIcons';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { href: 'https://github.com/YasserSedky', icon: GithubIcon, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/yasser-wael-sedky-a521a3326/', icon: LinkedinIcon, label: 'LinkedIn' },
  { href: 'mailto:yassersedky07@gmail.com', icon: Mail, label: 'Email' },
  { href: 'https://wa.me/201007635462', icon: MessageCircle, label: 'WhatsApp' },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="border-t border-border bg-bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center shadow-glow-sm">
                <span className="text-white font-bold text-sm font-mono">Y</span>
              </div>
              <span className="text-text-primary font-semibold">Yasser Wael Sedky</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Building complete software products from idea to production — with clean architecture, modern technology, and intelligent solutions.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary border border-border hover:border-border-hover hover:bg-white/5 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-5">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-text-muted hover:text-text-primary text-sm text-left transition-colors duration-200 w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-5">Get In Touch</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:yassersedky07@gmail.com"
                className="flex items-center gap-2 text-text-muted hover:text-text-primary text-sm transition-colors duration-200 group"
              >
                <Mail size={14} className="text-accent" />
                yassersedky07@gmail.com
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://wa.me/201007635462"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-muted hover:text-text-primary text-sm transition-colors duration-200 group"
              >
                <MessageCircle size={14} className="text-emerald-400" />
                WhatsApp
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-mono">
            © {new Date().getFullYear()} Yasser Wael Sedky. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Designed & built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}

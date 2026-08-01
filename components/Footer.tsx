'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-transparent pt-24 pb-12 overflow-hidden">
      
      {/* Subtle Top Border Gradient matching Theme */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          
          {/* Brand & Mission */}
          <div className="max-w-xs">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-4 tracking-tight"
            >
              Omparth<span className="text-purple-400">.</span>
            </motion.h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer specializing in high-performance web applications and exceptional user experiences.
            </p>
          </div>

          {/* Nav Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24">
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-purple-300/70">Navigation</h4>
              <ul className="space-y-2.5">
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-purple-300/70">Socials</h4>
              <ul className="space-y-2.5">
                {[
                  { name: 'GitHub', url: 'https://github.com/omparth' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/omparth-c-582b89245/' },
                ].map((social) => (
                  <li key={social.name}>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex items-center gap-1 text-gray-400 hover:text-purple-300 transition-colors text-sm"
                    >
                      {social.name}
                      <ArrowUpRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-xs font-mono tracking-wider order-2 md:order-1">
            © {currentYear} ALL RIGHTS RESERVED
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-purple-300 transition-all order-1 md:order-2"
          >
            Back to Top
            <span className="w-8 h-px bg-white/20 group-hover:bg-purple-400 group-hover:w-12 transition-all" />
          </button>

          <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 order-3">
            BUILT WITH <Heart size={12} className="text-purple-400 fill-purple-400/80" /> BY OMPARTH
          </div>
        </div>
      </div>
    </footer>
  );
}
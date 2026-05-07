'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030712] pt-24 pb-12 overflow-hidden">
      {/* Subtle Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          
          {/* Brand & Mission */}
          <div className="max-w-xs">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl font-bold text-white mb-4 tracking-tighter"
            >
              Omparth<span className="text-indigo-500">.</span>
            </motion.h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Full Stack Developer specializing in high-performance web applications and exceptional user experiences.
            </p>
          </div>

          {/* Nav Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24">
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">Navigation</h4>
              <ul className="space-y-2">
                {['About', 'Projects', 'Experience'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-white transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">Socials</h4>
              <ul className="space-y-2">
                {[
                  { name: 'GitHub', url: '#' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/omparth-c-582b89245/' },
                ].map((social) => (
                  <li key={social.name}>
                    <a href={social.url} className="group flex items-center gap-1 text-gray-500 hover:text-white transition-colors text-sm">
                      {social.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-xs font-mono tracking-wider order-2 md:order-1">
            © {currentYear} ALL RIGHTS RESERVED
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-all order-1 md:order-2"
          >
            Back to Top
            <span className="w-8 h-px bg-gray-800 group-hover:bg-indigo-500 group-hover:w-12 transition-all" />
          </button>

          <div className="flex items-center gap-1.5 text-xs font-mono text-gray-600 order-3">
            BUILT WITH <Heart size={12} className="text-indigo-500 fill-indigo-500" /> BY Omparth
          </div>
        </div>
      </div>
    </footer>
  );
}
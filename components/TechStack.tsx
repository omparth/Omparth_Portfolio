'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Database, 
  Globe, 
  Layout, 
  Smartphone,
  Cpu,
  Zap 
} from 'lucide-react';

export default function TechStack() {
  const technologies = [
    { name: 'React', category: 'Frontend', icon: <Code2 size={18} /> },
    { name: 'Next.js', category: 'Framework', icon: <Zap size={18} /> },
    { name: 'TypeScript', category: 'Language', icon: <Layers size={18} /> },
    { name: 'Tailwind', category: 'Styling', icon: <Layout size={18} /> },
    { name: 'Node.js', category: 'Backend', icon: <Globe size={18} /> },
    { name: 'PostgreSQL', category: 'Database', icon: <Database size={18} /> },
    { name: 'Supabase', category: 'Backend', icon: <Cpu size={18} /> },
    { name: 'Strapi', category: 'CMS', icon: <Smartphone size={18} /> },
  ];

  return (
    <section id="skills" className="relative py-24 lg:py-40 bg-transparent overflow-hidden">
      
      {/* Background Ambient Glow matching Hero/About */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            {/* Top Subheading Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 backdrop-blur-md mb-4"
            >
              <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
                02 // Tech Stack
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Expertise <span className="text-gray-500 italic font-light">&</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                Toolbelt
              </span>
            </motion.h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Modern tools I use to ship high-performance products. Focused on type-safety, 
              scalability, and exceptional user experiences.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-purple-300 uppercase tracking-widest">
              Updated 2026
            </div>
          </div>
        </div>

        {/* The Grid - Modern Glassmorphism Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-500 shadow-xl"
            >
              {/* Icon & Category */}
              <div className="flex flex-col h-full justify-between">
                <div className="mb-8 p-3 w-fit rounded-2xl bg-purple-950/50 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shadow-lg">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-400 font-mono">{tech.category}</p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Secondary Stack - Glassmorphism Tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['GraphQL', 'Vercel', 'Git', 'Figma', 'Prisma', 'Docker'].map((item) => (
            <span 
              key={item}
              className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-sm font-mono text-gray-400 hover:text-purple-300 hover:border-purple-500/30 transition-all cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
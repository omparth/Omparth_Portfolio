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
    <section id="skills" className="relative py-24 lg:py-40 bg-[#030712] overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Expertise <span className="text-gray-500">&</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Toolbelt</span>
            </motion.h2>
            <p className="text-lg text-gray-400">
              Modern tools I use to ship high-performance products. Focused on type-safety, 
              scalability, and exceptional user experiences.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="px-4 py-2 rounded-full border border-gray-800 bg-white/5 text-xs font-mono text-gray-500 uppercase tracking-widest">
              Updated 2026
            </div>
          </div>
        </div>

        {/* The Grid - Modern Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl border border-gray-900 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-indigo-500/50 transition-all duration-500"
            >
              {/* Icon & Category */}
              <div className="flex flex-col h-full justify-between">
                <div className="mb-8 p-3 w-fit rounded-2xl bg-gray-900 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-500">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-500 font-mono">{tech.category}</p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Secondary Stack - Clean Tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['GraphQL', 'Vercel', 'Git', 'Figma', 'Prisma', 'Docker'].map((item) => (
            <span 
              key={item}
              className="px-5 py-2 rounded-full border border-gray-800 text-sm text-gray-400 hover:text-white hover:border-gray-600 transition-all cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
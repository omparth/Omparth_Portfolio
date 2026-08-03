'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Database, 
  Globe, 
  Layout, 
  Smartphone,
  Cpu,
  Zap,
  AppWindow,
  Sparkles,
  Server
} from 'lucide-react';
import { useState } from 'react';

type TechItem = {
  name: string;
  category: 'Frontend' | 'Mobile' | 'Backend & DB' | 'Framework';
  icon: React.ReactNode;
  description: string;
  featured?: boolean;
  color: string;
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const technologies: TechItem[] = [
    { 
      name: 'Next.js', 
      category: 'Framework', 
      icon: <Zap size={22} />, 
      description: 'SSR, App Router & High-Performance Architecture',
      featured: true,
      color: 'from-purple-500/20 via-indigo-500/10 to-transparent'
    },
    { 
      name: 'React Native', 
      category: 'Mobile', 
      icon: <Smartphone size={22} />, 
      description: 'Cross-Platform Native Apps with Native Performance',
      featured: true,
      color: 'from-cyan-500/20 via-blue-500/10 to-transparent'
    },
    { 
      name: 'Flutter', 
      category: 'Mobile', 
      icon: <AppWindow size={22} />, 
      description: 'Pixel-perfect Mobile Apps built with Dart',
      featured: true,
      color: 'from-pink-500/20 via-purple-500/10 to-transparent'
    },
    { 
      name: 'React', 
      category: 'Frontend', 
      icon: <Code2 size={20} />, 
      description: 'UI Component Engineering',
      color: 'from-blue-500/10 to-transparent'
    },
    { 
      name: 'TypeScript', 
      category: 'Frontend', 
      icon: <Layers size={20} />, 
      description: 'Type-Safe Codebases',
      color: 'from-indigo-500/10 to-transparent'
    },
    { 
      name: 'Tailwind CSS', 
      category: 'Frontend', 
      icon: <Layout size={20} />, 
      description: 'Modern Responsive Design',
      color: 'from-teal-500/10 to-transparent'
    },
    { 
      name: 'Node.js', 
      category: 'Backend & DB', 
      icon: <Globe size={20} />, 
      description: 'Scalable Event-Driven Runtimes',
      color: 'from-emerald-500/10 to-transparent'
    },
    { 
      name: 'Express.js', 
      category: 'Backend & DB', 
      icon: <Server size={20} />, 
      description: 'Robust & Minimalist Web Framework',
      color: 'from-neutral-500/10 to-transparent'
    },
    { 
      name: 'PostgreSQL', 
      category: 'Backend & DB', 
      icon: <Database size={20} />, 
      description: 'Relational Database Design',
      color: 'from-blue-600/10 to-transparent'
    },
    { 
      name: 'Supabase', 
      category: 'Backend & DB', 
      icon: <Cpu size={20} />, 
      description: 'Realtime Auth & BaaS',
      color: 'from-emerald-600/10 to-transparent'
    },
  ];

  const categories = ['All', 'Frontend', 'Mobile', 'Backend & DB'];

  const filteredTech = activeTab === 'All' 
    ? technologies 
    : technologies.filter(t => t.category === activeTab || (activeTab === 'Frontend' && t.category === 'Framework'));

  return (
    <section id="skills" className="relative py-24 lg:py-36 bg-transparent overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 backdrop-blur-md mb-4"
            >
              <Sparkles size={12} className="text-purple-400" />
              <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
                02 // Tech Arsenal
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              Architecting with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">
                Modern Technologies
              </span>
            </motion.h2>
          </div>

          {/* Creative Tab Switcher */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeTab === cat 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-purple-300'
                }`}
              >
                {activeTab === cat && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Creative Asymmetric Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredTech.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className={`group relative p-7 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 shadow-xl ${
                  tech.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Background Dynamic Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Top Row: Icon & Category Tag */}
                <div className="flex items-center justify-between mb-6 z-10 relative">
                  <div className="p-3.5 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-300 group-hover:bg-purple-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-500">
                    {tech.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider text-purple-300/80 bg-white/5 border border-white/10">
                    {tech.category}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Corner Ambient Line Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Secondary Floating Pill Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">
            // Ecosystem & Tooling
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Dart', 'Expo', 'Android Studio', 'iOS / Swift', 'GraphQL', 'Vercel', 'Git', 'Figma', 'Prisma', 'Docker'].map((item) => (
              <span 
                key={item}
                className="px-5 py-2.5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md text-xs font-mono text-gray-300 hover:text-purple-300 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
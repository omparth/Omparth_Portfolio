'use client';

import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu } from 'lucide-react';

export default function About() {
  const skills = [
    { 
      name: 'Frontend', 
      tech: 'React, Next.js, Tailwind, Framer Motion', 
      icon: <Code2 size={20} /> 
    },
    { 
      name: 'Backend', 
      tech: 'Node.js, PostgreSQL, Prisma, Supabase', 
      icon: <Terminal size={20} /> 
    },
    { 
      name: 'Tools & AI', 
      tech: 'TypeScript, Git, AI Data Extraction, Docker', 
      icon: <Cpu size={20} /> 
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-40 px-4 bg-[#030712]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Sticky Left Sidebar for Desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <h2 className="text-sm font-mono tracking-[0.3em] text-indigo-500 uppercase mb-4">
              01 // Background
            </h2>
            <h3 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              About <span className="text-gray-500">Me.</span>
            </h3>
            <div className="mt-8 h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
          </motion.div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-12">
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="space-y-6"
  >
    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
      I’m a <span className="text-white font-medium">Full-Stack Developer</span> who builds high-performance systems where <span className="text-white font-medium">complex logic</span> meets elegant design.
    </p>
    
    <p className="text-lg text-gray-400 leading-relaxed">
      With expertise in <span className="text-white">Next.js, Node.js, and System Architecture</span>, I specialize in creating robust applications from the ground up. Whether it's building a multi-tenant <span className="text-white">Learning Management System</span> or automating data workflows using <span className="text-white">Intelligent Extraction</span>, my focus is always on writing clean, scalable code.
    </p>

    <p className="text-lg text-gray-400 leading-relaxed">
      I don't just write code; I architect solutions. From managing complex <span className="text-indigo-400 font-medium">PostgreSQL schemas</span> to crafting seamless <span className="text-indigo-400 font-medium">Framer Motion animations</span>, I bridge the gap between heavy-duty engineering and premium user experience. 
    </p>
  </motion.div>
  
  {/* Skills card mein "Tools & AI" ko change karke "System & Architecture" kar dena */}
</div>
        </div>
      </div>
    </section>
  );
}
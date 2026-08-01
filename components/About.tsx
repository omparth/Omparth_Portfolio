'use client';

import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu } from 'lucide-react';

export default function About() {

  return (
    <section id="about" className="relative py-24 lg:py-40 px-4 bg-transparent overflow-hidden">
      
      {/* Background Glow matching Hero/Projects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sticky Left Sidebar for Desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 backdrop-blur-md mb-4">
              <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
                01 // Background
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              About <span className="text-gray-500 italic font-light">Me.</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full" />
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
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                I’m a <span className="text-white font-semibold">Full-Stack Developer</span> who builds high-performance systems where <span className="text-purple-300 font-medium">complex logic</span> meets elegant design.
              </p>
              
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                With expertise in <span className="text-white">Next.js, Node.js, and System Architecture</span>, I specialize in creating robust applications from the ground up. Whether it's building a multi-tenant <span className="text-white">Learning Management System</span> or automating data workflows using <span className="text-white">Intelligent Extraction</span>, my focus is always on writing clean, scalable code.
              </p>

              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                I don't just write code; I architect solutions. From managing complex <span className="text-purple-300 font-medium">PostgreSQL schemas</span> to crafting seamless <span className="text-indigo-300 font-medium">Framer Motion animations</span>, I bridge the gap between heavy-duty engineering and premium user experience. 
              </p>
            </motion.div>

            {/* Skills Cards Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4"
            >

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
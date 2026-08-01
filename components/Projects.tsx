'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Code, Sparkles, Code2 } from 'lucide-react';
import { useRef } from 'react';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position inside projects section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 80%'],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  const projects = [
    {
      title: 'Read&Revise LMS',
      subtitle: 'Learning Management System',
      description:
        'A full-stack education platform featuring structured content flow, optimized UX, and scalable backend architecture for seamless learning.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'UI/UX'],
      live: 'https://readnrevise.in/',
      color: 'from-indigo-500 to-purple-500',
      badge: 'LMS Platform',
    },
    {
      title: 'Vendor Management',
      subtitle: 'Enterprise VMS Platform',
      description:
        'Production-level vendor ecosystem built with a focus on scalable frontend architecture and deep backend integration.',
      tags: ['Next.js', 'PostgreSQL', 'Supabase', 'SaaS'],
      live: 'https://www.openmachining.com/',
      color: 'from-cyan-500 to-blue-500',
      badge: 'Enterprise SaaS',
    },
  ];

  return (
    <section id="projects" ref={containerRef} className="relative py-24 lg:py-40 bg-transparent overflow-hidden">
      
      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Header Section */}
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
          

            <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Featured <span className="text-gray-500 italic font-light">Artifacts.</span>
            </h2>
          </motion.div>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          
          {/* 1. Center Vertical Background Line (Dark Track) */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-white/10 hidden md:block" />

          {/* 2. Dynamic Filling Line (Progress) */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 hidden md:block"
          />

          {/* 3. 3D Gradient Squircle Code Icon Node (Follows Scroll Progress) */}
          <motion.div
            style={{
              top: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            }}
            className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center -translate-y-1/2"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer Pulsing Glow Halo */}
              <span className="animate-ping absolute inline-flex h-12 w-12 rounded-[1.2rem] bg-indigo-500/30 opacity-75" />

              {/* 3D Gradient Squircle Container matching screenshot */}
              <div className="relative h-11 w-11 rounded-[1.1rem] bg-gradient-to-br from-indigo-400 via-blue-600 to-purple-600 p-[1px] shadow-[0_0_25px_rgba(99,102,241,0.5)] flex items-center justify-center">
                <div className="h-full w-full rounded-[1.05rem] bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-inner">
                  {/* White Bold Code Icon */}
                  <Code2 size={22} className="text-white stroke-[2.5]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects List */}
          <div className="space-y-16 md:space-y-28">
            {projects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Side Content (If Even) or Right Side Content (If Odd) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={`md:col-span-6 ${
                      isEven ? 'md:pr-12 lg:pr-16' : 'md:col-start-7 md:pl-12 lg:pl-16'
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 lg:p-10 transition-all duration-500 hover:border-indigo-500/40 hover:bg-white/[0.04] shadow-2xl">
                      
                      {/* Top Header Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                          <Code size={20} />
                        </div>
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20">
                          {project.badge}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">{project.subtitle}</p>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Pills */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-white font-semibold group/link hover:text-indigo-400 transition-colors"
                        >
                          Explore Live Project 
                          <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1 text-indigo-400" />
                        </a>
                      </div>

                      {/* Subtle Glass Glow */}
                      <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />
                    </div>
                  </motion.div>

                  {/* Empty Spacer Column for Desktop Alternate Grid */}
                  <div className="hidden md:block md:col-span-6" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
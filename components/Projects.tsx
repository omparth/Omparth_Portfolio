'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Read&Revise LMS',
      subtitle: 'Learning Management System',
      description:
        'A full-stack education platform featuring structured content flow, optimized UX, and scalable backend architecture for seamless learning.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'UI/UX'],
      live: 'https://readnrevise.in/',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Vendor Management',
      subtitle: 'Enterprise VMS Platform',
      description:
        'Production-level vendor ecosystem built with a focus on scalable frontend architecture and deep backend integration.',
      tags: ['Next.js', 'PostgreSQL', 'Supabase', 'SaaS'],
      live: 'https://www.openmachining.com/',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="projects" className="relative py-24 lg:py-40 bg-[#030712] overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <span className="text-indigo-500 font-mono text-sm uppercase tracking-[0.3em]">Selected Work</span>
            <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Featured <span className="text-gray-600 italic font-light">Artifacts.</span>
            </h2>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-gray-800 bg-[#0a0f1d] p-8 lg:p-12 transition-all duration-500 hover:border-gray-600">
                {/* Decorative Icon */}
                <div className={`mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-lg shadow-indigo-500/10`}>
                  <Code size={24} />
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-mono text-gray-500 uppercase tracking-wider">{project.subtitle}</p>
                  <h3 className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-full border border-gray-800 bg-white/5 px-4 py-1 text-xs font-medium text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-10 pt-8 border-t border-gray-800/50">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-semibold group/link"
                  >
                    Explore Live Project 
                    <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>

                {/* Background Accent on Hover */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-indigo-500/5 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action for more projects */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}
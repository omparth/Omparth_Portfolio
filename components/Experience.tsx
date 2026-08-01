'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Read&Revise',
      location: 'Remote',
      period: 'Sept 2025 — Present',
      description:
        'Architecting and implementing production-level features for a modern LMS. Focused on bridging the gap between complex backend logic and fluid user interfaces.',
      highlights: [
        'Next.js',
        'React',
        'Node.js',
        'PostgreSQL',
        'Supabase',
        'MongoDB',
        'Strapi CMS',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 lg:py-40 bg-transparent overflow-hidden">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto max-w-5xl px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Header Area */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 backdrop-blur-md mb-4">
                <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
                  03 // Career Path
                </span>
              </div>

              <h2 className="text-5xl font-bold text-white leading-tight tracking-tight">
                Work <br />
                <span className="text-gray-500 italic font-light">History.</span>
              </h2>
              <p className="mt-6 text-gray-400 max-w-xs leading-relaxed text-sm md:text-base">
                Building scalable solutions and learning the art of production-grade software development.
              </p>
            </motion.div>
          </div>

          {/* Experience List */}
          <div className="lg:col-span-8 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-500 shadow-xl"
              >
                {/* Header Context Badges */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-xs font-mono uppercase tracking-wider text-purple-300">
                  <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <Calendar size={14} className="text-purple-400" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    <MapPin size={14} className="text-indigo-400" /> {exp.location}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Briefcase size={16} className="text-purple-400" />
                      <p className="text-lg text-gray-300 font-medium">{exp.company}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                  {exp.description}
                </p>

                {/* Tech Highlights */}
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((tag, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-3.5 py-1.5 text-xs font-mono bg-purple-950/30 text-purple-200 rounded-lg border border-purple-500/20 group-hover:border-purple-500/40 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Left Side Glow Bar Accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-purple-500 to-indigo-500 group-hover:h-1/2 transition-all duration-500 rounded-r-full" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
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
    <section id="experience" className="relative py-24 lg:py-40 bg-[#030712] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
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
              <span className="text-indigo-500 font-mono text-sm uppercase tracking-widest mb-4 block">Career Path</span>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Work <br />
                <span className="text-gray-600">History.</span>
              </h2>
              <p className="mt-6 text-gray-400 max-w-xs leading-relaxed">
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
                className="relative group p-8 rounded-3xl border border-gray-800 bg-[#0a0f1d]/50 hover:bg-[#0a0f1d] hover:border-indigo-500/30 transition-all duration-500"
              >
                {/* Header Context */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-xs font-mono uppercase tracking-wider text-indigo-400">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Briefcase size={16} className="text-gray-500" />
                      <p className="text-lg text-gray-300 font-medium">{exp.company}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {exp.description}
                </p>

                {/* Tech Highlights */}
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((tag, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-4 py-1.5 text-xs font-medium bg-gray-900 text-gray-400 rounded-lg border border-gray-800 group-hover:border-gray-700 group-hover:text-gray-200 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle side accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-indigo-500 group-hover:h-1/2 transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
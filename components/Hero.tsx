'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] px-6 py-20 lg:py-0">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-16 items-center">

          {/* Left: Content - Span 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-xs md:text-sm font-medium w-fit mx-auto lg:mx-0"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for new projects
              </motion.div>

              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.1]">
                Fullstack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"></span>
                <br />Developer
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
                Specializing in high-performance web applications with a focus on
                <span className="text-white font-medium"> clean aesthetics </span> and
                <span className="text-white font-medium"> seamless user experiences.</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={scrollToProjects}
                className="group relative px-7 py-3.5 bg-white text-black rounded-xl font-bold overflow-hidden transition-all active:scale-95 text-sm md:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ArrowUpRight size={18} />
                </span>
                <div className="absolute inset-0 bg-indigo-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-7 py-3.5 border border-gray-800 text-white rounded-xl font-bold hover:bg-white/5 transition-all backdrop-blur-sm text-sm md:text-base"
              >
                Get in Touch
              </button>
            </div>

            {/* Micro Stats */}
            <div className="flex justify-center lg:justify-start gap-8 md:gap-12 pt-8 border-t border-gray-900/50">
              {[
                { label: 'Experience', val: '1' },
                { label: 'Projects', val: '2' },
                { label: 'Focus', val: 'Fullsatck' }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-xl md:text-2xl font-bold text-white">{stat.val}</p>
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Personal Image Visual - Span 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-[450px] lg:w-full lg:h-[520px] max-w-[380px] group">

              {/* Background Animated Rings */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="absolute w-[110%] h-[110%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-[130%] h-[130%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              </div>

              {/* Decorative Glass Cards */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [6, 8, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/10 backdrop-blur-2xl rounded-2xl border border-white/10 z-0"
              />
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [-6, -4, -6] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 backdrop-blur-2xl rounded-2xl border border-white/10 z-0"
              />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/10 bg-[#0f172a] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10 opacity-70" />
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-20 pointer-events-none"></div>

                <Image
                  src="/assets/omparth.jpg"
                  alt="Om Parth"
                  fill
                  className="object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  priority
                />

                {/* Floating Name Tag */}
                <div className="absolute bottom-5 left-5 right-5 z-30 p-4 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl transform transition-transform group-hover:translate-y-[-5px]">
                  <p className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest mb-1 font-bold">
                    Full Stack Developer
                  </p>
                  <h4 className="text-white font-bold text-lg">Omparth</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Button */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToNext}
            className="p-2.5 rounded-full border border-gray-800 text-gray-500 hover:text-white hover:border-white transition-all backdrop-blur-sm"
          >
            <ChevronDown size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 100 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollToNext = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent px-6 py-20 lg:py-0 selection:bg-purple-500 selection:text-white">
      
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12 items-center">

          {/* Left Side: Creative Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-7 text-center lg:text-left z-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/20 backdrop-blur-md self-center lg:self-start">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono tracking-wide text-purple-300">
                  Available for new projects
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05]">
                Fullstack <br />
                <span className="italic font-normal text-purple-300">Developer</span>
              </h1>

              <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
                Specializing in high-performance web applications with a focus on clean aesthetics and seamless user experiences.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={scrollToProjects}
                className="px-7 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all text-sm flex items-center gap-2 group shadow-lg"
              >
                View Work <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-7 py-3.5 rounded-full border border-white/15 text-white font-medium hover:bg-white/5 transition-all text-sm backdrop-blur-md"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>

          {/* Right Side: Photo Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end z-10">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
              }}
              className="relative w-64 h-[380px] md:w-72 md:h-[430px] lg:w-[320px] lg:h-[460px] rounded-[28px] cursor-pointer group"
            >
              <div className="relative w-full h-full rounded-[28px] overflow-hidden border border-white/10 bg-[#0c0914]/80 backdrop-blur-md shadow-2xl">
                <Image
                  src="/assets/Omparth.jpg"
                  alt="Omparth"
                  fill
                  className="object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030207] via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl">
                  <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-semibold">
                    Fullstack Developer
                  </p>
                  <h4 className="text-white font-bold text-lg mt-0.5">Omparth</h4>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <button onClick={scrollToNext} className="text-gray-500 hover:text-white transition-colors p-2">
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
}
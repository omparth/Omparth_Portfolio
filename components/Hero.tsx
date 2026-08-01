'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, ArrowUpRight, Terminal, Download } from 'lucide-react';
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

  // Resume Download Function
  const handleDownloadResume = (e: React.MouseEvent) => {
    e.stopPropagation(); // Card mouse movement event clash se bachne ke liye
    const link = document.createElement('a');
    link.href = '/assets/Omparth_Resume.pdf';
    link.download = 'Omparth_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent px-6 py-20 lg:py-0 selection:bg-purple-500 selection:text-white">
      
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12 items-center">

          {/* Left Side: Pixel Art Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-7 text-center lg:text-left z-10"
          >
            <div className="space-y-4">
              
              {/* Pixel Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-950/60 border-2 border-purple-500/40 backdrop-blur-md self-center lg:self-start rounded-none shadow-[2px_2px_0px_0px_rgba(168,85,247,0.5)]">
                <Terminal size={12} className="text-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono tracking-wider text-purple-300 uppercase">
                  STATUS: AVAILABLE_FOR_HIRE
                </span>
              </div>

              {/* Pixel Art Styled Main Heading */}
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-mono font-extrabold uppercase tracking-widest text-white leading-tight drop-shadow-[4px_4px_0px_rgba(147,51,234,0.6)]">
                  FULLSTACK
                </h1>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-mono font-bold uppercase tracking-widest text-purple-400 leading-tight drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                  &lt;DEVELOPER/&gt;
                </h1>
              </div>

              {/* Pixel Monospace Description */}
              <p className="font-mono text-gray-300 text-xs md:text-sm max-w-md mx-auto lg:mx-0 leading-relaxed tracking-wide border-l-2 border-purple-500/50 pl-3">
                &gt; Crafting high performance web applications with clean pixel aesthetics & seamless interactions.
              </p>
            </div>

            {/* Retro Pixel Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 font-mono">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-purple-500 text-white font-bold text-xs uppercase tracking-widest hover:bg-purple-600 active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
              >
                [ VIEW WORK ] <ArrowUpRight size={16} />
              </button>

              <button
                onClick={scrollToContact}
                className="px-6 py-3 bg-black/60 border-2 border-white/30 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 active:translate-x-[2px] active:translate-y-[2px] transition-all shadow-[4px_4px_0px_0px_rgba(168,85,247,0.8)]"
              >
                [ GET IN TOUCH ]
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
              className="relative w-64 h-[380px] md:w-72 md:h-[430px] lg:w-[320px] lg:h-[460px] rounded-[28px] cursor-default group"
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

                {/* Clickable Resume Label */}
                <div
                  onClick={handleDownloadResume}
                  title="Click to download Resume"
                  className="absolute bottom-4 left-4 right-4 p-3.5 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl font-mono cursor-pointer hover:bg-white/15 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-95 transition-all duration-200 group/tag flex items-center justify-between"
                >
                  <div>
                    <p className="text-[10px] text-purple-400 uppercase tracking-widest font-semibold group-hover/tag:text-purple-300 transition-colors">
                      &lt;FULLSTACK_DEV/&gt;
                    </p>
                    <h4 className="text-white font-bold text-lg mt-0.5 tracking-wider group-hover/tag:text-purple-200 transition-colors">
                      OMPARTH
                    </h4>
                  </div>
                  <Download size={18} className="text-purple-400 opacity-70 group-hover/tag:opacity-100 group-hover/tag:text-white transition-all transform group-hover/tag:translate-y-[-2px]" />
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
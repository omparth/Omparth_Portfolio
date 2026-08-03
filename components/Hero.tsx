'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight, Terminal, Download, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

// --- Modern Glassmorphism Premium Preloader ---
function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  const loadingTexts = [
    'Initializing experience...',
    'Loading visual elements...',
    'Optimizing layout & performance...',
    'Rendering interface...',
    'Welcome'
  ];

  useEffect(() => {
    // Ultra smooth progress animation loop
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 300); // Gentle exit delay
          return 100;
        }

        const increment = Math.floor(Math.random() * 5) + 2;
        const nextProgress = Math.min(prev + increment, 100);

        if (nextProgress > 85) setLoadingTextIndex(4);
        else if (nextProgress > 65) setLoadingTextIndex(3);
        else if (nextProgress > 45) setLoadingTextIndex(2);
        else if (nextProgress > 20) setLoadingTextIndex(1);

        return nextProgress;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 bg-[#07050d] flex flex-col items-center justify-center px-6 selection:bg-purple-500 selection:text-white"
    >
      {/* Soft Ambient Background Light */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-sm space-y-8 z-10 flex flex-col items-center">
        
        {/* Sleek Top Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
        
        </motion.div>

        {/* Smooth Typography Counter */}
        <div className="text-center my-4 relative">
          <h1 className="text-7xl font-extralight text-white tracking-tighter drop-shadow-[0_0_25px_rgba(168,85,247,0.3)] font-sans">
            {progress}<span className="text-purple-400 text-4xl font-light">%</span>
          </h1>
        </div>

        {/* Sleek Glass Progress Line */}
        <div className="w-full space-y-3">
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 p-[1px]">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            />
          </div>

          {/* Minimal Status Text */}
          <div className="flex items-center justify-between text-xs text-gray-400 font-light tracking-wider px-1">
            <span className="text-gray-300 font-mono text-[11px] opacity-80">{loadingTexts[loadingTextIndex]}</span>
            <span className="text-purple-400 font-mono text-[11px]">{progress}/100</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

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
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = '/assets/Omparth_Resume.pdf';
    link.download = 'Omparth_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Ultra Smooth Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <section className="relative min-h-screen flex items-center justify-center bg-transparent px-6 py-20 lg:py-0 selection:bg-purple-500 selection:text-white overflow-hidden">
        
        {/* Subtle Background Glows */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px]" />
        </div>

        <div className="container mx-auto max-w-7xl z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12 items-center">

            {/* Left Side: Pixel Art Typography */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={!isLoading ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
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
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={!isLoading ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 flex justify-center lg:justify-end z-10"
            >
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
            </motion.div>

          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <button onClick={scrollToNext} className="text-gray-500 hover:text-white transition-colors p-2">
            <ChevronDown size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
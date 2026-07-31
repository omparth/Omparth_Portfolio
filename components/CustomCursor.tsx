'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Direct Hardware acceleration translate
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [data-cursor], .group');
      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute('data-cursor');
        setCursorText(text || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden hidden md:block">
      {/* 1. Soft Ambient Spotlight Glow (Follows Mouse Smoothly) */}
      <div
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
        className={`fixed top-0 left-0 rounded-full transition-all duration-300 ease-out ${
          isHovered
            ? 'w-32 h-32 bg-indigo-500/15 blur-2xl'
            : 'w-24 h-24 bg-purple-500/10 blur-xl'
        }`}
      />

      {/* 2. Main Precision Dot + Outer Soft Glow Ring */}
      <div
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${
            isHovered ? 1.4 : 1
          })`,
        }}
        className="fixed top-0 left-0 transition-transform duration-150 ease-out flex items-center justify-center"
      >
        {/* Core Sharp Point */}
        <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_#818cf8]" />

        {/* Subtle Outer Halo */}
        <div
          className={`absolute rounded-full border transition-all duration-200 ${
            isHovered
              ? 'w-10 h-10 border-indigo-400 bg-indigo-500/10 backdrop-blur-[1px]'
              : 'w-7 h-7 border-white/30 bg-transparent'
          }`}
        />

        {/* Dynamic Label Tag */}
        {cursorText && (
          <span className="absolute top-6 left-6 px-2 py-0.5 rounded-full bg-[#0a0f1d]/90 border border-indigo-500/30 text-[9px] font-mono text-indigo-300 whitespace-nowrap shadow-xl backdrop-blur-md">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
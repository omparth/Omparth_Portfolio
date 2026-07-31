'use client';

import React, { useEffect, useRef } from 'react';

interface Star3D {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
}

export default function ParticleStar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const warpStars: Star3D[] = [];
    const numWarpStars = 250;
    const speed = 1.8;

    const initParticles = () => {
      warpStars.length = 0;
      for (let i = 0; i < numWarpStars; i++) {
        warpStars.push({
          x: (Math.random() - 0.5) * width * 2,
          y: (Math.random() - 0.5) * height * 2,
          z: Math.random() * width,
          size: Math.random() * 1.2 + 0.4,
          opacity: Math.random() * 0.7 + 0.3,
        });
      }
    };

    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      ctx.fillStyle = 'rgba(235, 225, 255, 0.8)';
      for (let i = 0; i < warpStars.length; i++) {
        const star = warpStars[i];
        star.z -= speed;

        if (star.z <= 0) {
          star.z = width;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        const k = 250 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const renderSize = Math.max(0.3, (1 - star.z / width) * star.size * 1.8);
          ctx.beginPath();
          ctx.arc(px, py, renderSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 w-full h-full">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
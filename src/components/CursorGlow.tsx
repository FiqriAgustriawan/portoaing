'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Smooth interpolation (lerp)
      x += (targetX - x) * 0.1;
      y += (targetY - y) * 0.1;

      if (glow) {
        glow.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-30 opacity-0 dark:opacity-30 mix-blend-screen transition-opacity duration-500"
      style={{
        background: 'radial-gradient(circle, rgba(245,245,244,0.15) 0%, rgba(0,0,0,0) 70%)',
        transform: 'translate3d(-400px, -400px, 0)',
        willChange: 'transform',
      }}
    />
  );
}

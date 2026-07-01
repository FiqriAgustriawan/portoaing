'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // For the large glow (follows instantly or with slight delay)
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  
  // For the small dot (follows with a spring)
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothDotX = useSpring(dotX, springConfig);
  const smoothDotY = useSpring(dotY, springConfig);

  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      glowX.set(e.clientX - 200);
      glowY.set(e.clientY - 200);
      
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [data-cursor-hover="true"]');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, dotX, dotY, glowX, glowY]);

  return (
    <>
      {/* Large Soft Glow */}
      <motion.div
        className="fixed pointer-events-none z-0 transition-opacity duration-500"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,113,108,0.04) 0%, transparent 60%)',
          x: glowX,
          y: glowY,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Small Dot / Hover Circle */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference"
        animate={{
          width: isHovered ? 32 : 5,
          height: isHovered ? 32 : 5,
          opacity: isVisible ? (isHovered ? 0.8 : 1) : 0,
          border: isHovered ? '1.5px solid var(--accent)' : '0px solid var(--text-primary)',
          backgroundColor: isHovered ? 'rgba(0,0,0,0)' : 'var(--text-primary)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5 }}
        style={{
          x: smoothDotX,
          y: smoothDotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}

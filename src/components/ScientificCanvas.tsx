import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  cluster: number;
}

export const ScientificCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Color palettes tailored to high-end AI research
    const darkColors = [
      'rgba(56, 189, 248, ',  // sky / cyan
      'rgba(129, 140, 248, ', // indigo / violet
      'rgba(52, 211, 153, ',  // emerald / bio
      'rgba(148, 163, 184, '  // slate / physics
    ];

    const lightColors = [
      'rgba(2, 132, 199, ',   // sky-600
      'rgba(99, 102, 241, ',  // indigo-500
      'rgba(5, 150, 105, ',   // emerald-600
      'rgba(71, 85, 105, '    // slate-600
    ];

    // Determine particle count based on screen size
    const isMobile = width < 768;
    const particleCount = isMobile ? 32 : 68;
    const connectionDistance = isMobile ? 90 : 135;

    const particles: Particle[] = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const cluster = i % 4;
      const radius = Math.random() * 2 + 1.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.45),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.45),
        radius,
        baseRadius: radius,
        alpha: Math.random() * 0.4 + 0.25,
        cluster
      });
    }

    // Mouse tracking with smooth interpolation
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Render loop
    let lastTime = performance.now();
    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const isLight = document.documentElement.classList.contains('light');
      const currentColors = isLight ? lightColors : darkColors;

      // Mouse smooth interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Draw faint background radial ambient field around mouse
      if (mouse.active && !isMobile) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 280
        );
        gradient.addColorStop(0, isLight ? 'rgba(2, 132, 199, 0.04)' : 'rgba(56, 189, 248, 0.045)');
        gradient.addColorStop(1, isLight ? 'rgba(2, 132, 199, 0)' : 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx * dt * 60;
          p.y += p.vy * dt * 60;

          // Wrap edges with padding
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;

          // Gentle mouse interaction
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 160;

            if (dist < maxDist && dist > 1) {
              const force = (1 - dist / maxDist) * 18;
              p.x += (dx / dist) * force * dt * 6;
              p.y += (dy / dist) * force * dt * 6;
            }
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${currentColors[p.cluster]}${p.alpha})`;
        ctx.fill();

        // Subtle glow around key nodes
        if (i % 5 === 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${currentColors[p.cluster]}${p.alpha * 0.25})`;
          ctx.fill();
        }
      }

      // Draw connection lines (neural manifold topology)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * (isLight ? 0.12 : 0.16);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${isLight ? 'rgba(71, 85, 105, ' : 'rgba(148, 163, 184, '}${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};

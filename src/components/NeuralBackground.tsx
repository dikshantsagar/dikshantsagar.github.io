import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface Signal {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
}

export const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const nodeCount = isMobile ? 32 : 68;
    const maxDistance = isMobile ? 140 : 185;

    // Palette calibrated for distinct yet elegant neural depth
    const isDark = theme === 'dark';
    const primaryRGB = isDark ? '96, 165, 250' : '37, 99, 235';     // Cobalt/Sky blue
    const secondaryRGB = isDark ? '168, 85, 247' : '99, 102, 241';  // Indigo/violet
    const accentRGB = isDark ? '56, 189, 248' : '2, 132, 199';      // Sky/cyan

    // Initialize nodes
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.28),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.28),
        radius: Math.random() * 1.4 + 1.5,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.02
      });
    }

    // Dynamic signals (action potentials traveling across synapses)
    const signals: Signal[] = [];
    const maxSignals = isMobile ? 4 : 9;

    const spawnSignal = () => {
      if (signals.length >= maxSignals || prefersReducedMotion) return;
      const from = Math.floor(Math.random() * nodes.length);
      // Find a connected neighbor
      const neighbors: number[] = [];
      for (let j = 0; j < nodes.length; j++) {
        if (from === j) continue;
        const dx = nodes[from].x - nodes[j].x;
        const dy = nodes[from].y - nodes[j].y;
        if (dx * dx + dy * dy < maxDistance * maxDistance) {
          neighbors.push(j);
        }
      }
      if (neighbors.length > 0) {
        const to = neighbors[Math.floor(Math.random() * neighbors.length)];
        signals.push({
          fromIndex: from,
          toIndex: to,
          progress: 0,
          speed: 0.008 + Math.random() * 0.012,
          color: Math.random() > 0.5 ? primaryRGB : accentRGB
        });
      }
    };

    // Smooth mouse interaction
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170,
      active: false
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Main render loop
    let lastSignalSpawn = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Random signal spawner
      if (time - lastSignalSpawn > 700) {
        spawnSignal();
        lastSignalSpawn = time;
      }

      // 1. Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Move
        n.x += n.vx;
        n.y += n.vy;

        // Wrap around soft boundaries
        if (n.x < -20) n.x = width + 20;
        else if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        else if (n.y > height + 20) n.y = -20;

        // Gentle harmonic pulse
        n.pulsePhase += n.pulseSpeed;
        const pulse = Math.sin(n.pulsePhase) * 0.5 + 0.5;

        // Mouse interaction: subtle nudge
        if (mouse.active) {
          const mdx = n.x - mouse.x;
          const mdy = n.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < mouse.radius && mDist > 0) {
            const force = (1 - mDist / mouse.radius) * 0.4;
            n.x += (mdx / mDist) * force;
            n.y += (mdy / mDist) * force;
          }
        }

        // Render node dot
        const baseAlpha = isDark ? 0.45 : 0.35;
        const currentAlpha = baseAlpha + pulse * 0.35;
        const currentRadius = n.radius + pulse * 0.6;

        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryRGB}, ${currentAlpha})`;
        ctx.fill();

        // Soft halo
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryRGB}, ${currentAlpha * 0.35})`;
        ctx.fill();
      }

      // 2. Draw synaptic connections (edges)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistance * maxDistance) {
            const dist = Math.sqrt(distSq);
            // Linear to quadratic fade: gives crisp visible lines when close
            const normDist = 1 - dist / maxDistance;
            const lineAlpha = (isDark ? 0.28 : 0.20) * normDist;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${secondaryRGB}, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Draw connection to mouse cursor if near
        if (mouse.active) {
          const mdx = nodes[i].x - mouse.x;
          const mdy = nodes[i].y - mouse.y;
          const mDistSq = mdx * mdx + mdy * mdy;
          if (mDistSq < mouse.radius * mouse.radius) {
            const mDist = Math.sqrt(mDistSq);
            const mNorm = 1 - mDist / mouse.radius;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${accentRGB}, ${(isDark ? 0.38 : 0.28) * mNorm})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      // 3. Update and draw action potential signals
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;

        if (sig.progress >= 1) {
          signals.splice(s, 1);
          continue;
        }

        const from = nodes[sig.fromIndex];
        const to = nodes[sig.toIndex];
        if (!from || !to) {
          signals.splice(s, 1);
          continue;
        }

        const sx = from.x + (to.x - from.x) * sig.progress;
        const sy = from.y + (to.y - from.y) * sig.progress;

        // Render traveling synaptic pulse
        const pulseAlpha = Math.sin(sig.progress * Math.PI) * (isDark ? 0.85 : 0.7);
        ctx.beginPath();
        ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${sig.color}, ${pulseAlpha})`;
        ctx.fill();

        // Glow tail
        ctx.beginPath();
        ctx.arc(sx, sy, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${sig.color}, ${pulseAlpha * 0.4})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle ambient crimson embers & dust particles
    const particleCount = Math.min(Math.floor((width * height) / 24000), 45);
    const particles = [];

    const colors = [
      'rgba(196, 28, 44, ',   // Rich crimson
      'rgba(168, 22, 36, ',   // Deep ruby
      'rgba(217, 37, 52, ',   // Scarlet ember
      'rgba(140, 16, 27, ',   // Dark ambient red
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        baseColor: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.35 + 0.08,
        alphaSpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        vy: -(Math.random() * 0.45 + 0.15), // float gently upward
        vx: (Math.random() - 0.5) * 0.25,
        glow: Math.random() * 8 + 3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Animate alpha
        p.alpha += p.alphaSpeed;
        if (p.alpha > 0.42) {
          p.alpha = 0.42;
          p.alphaSpeed *= -1;
        } else if (p.alpha < 0.06) {
          p.alpha = 0.06;
          p.alphaSpeed *= -1;
        }

        // Move
        p.y += p.vy;
        p.x += p.vx;

        // Wrap around
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw gentle glowing particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.baseColor}${p.alpha})`;
        ctx.shadowColor = 'rgba(196, 28, 44, 0.45)';
        ctx.shadowBlur = p.glow;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}

import { useRef, useEffect } from 'react';

export function useTilt3D(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Disable on touch devices
    if (window.matchMedia('(hover: none)').matches) return;
    const max = options.max || 8;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -max;
      const rotY = ((x - cx) / cx) * max;
      el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px)`;
      el.style.transition = 'transform 0.08s linear';
      // Ambient highlight
      const pctX = Math.round((x / rect.width) * 100);
      const pctY = Math.round((y / rect.height) * 100);
      el.style.setProperty('--mouse-x', `${pctX}%`);
      el.style.setProperty('--mouse-y', `${pctY}%`);
    };
    const handleLeave = () => {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      el.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
      el.style.setProperty('--mouse-x', '50%');
      el.style.setProperty('--mouse-y', '50%');
    };
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);
  return ref;
}

import { useEffect, useRef } from 'react';

/** Subtle blue glow that follows the cursor — CSS-driven for 60 FPS. */
const MouseFollower = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let x = -200, y = -200;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const tick = () => {
      el.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
      style={{
        background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
};

export default MouseFollower;

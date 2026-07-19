import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Small friendly AI robot widget.
 * - Minimal futuristic style, glassmorphism
 * - Occasionally waves hand
 * - Blinks eyes
 * - Every 15–20s shows a tiny "Hello!" speech bubble for 3s
 * - Low CPU: all animations CSS/keyframe-based, no continuous JS loops
 */
const AIRobot = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [waving, setWaving] = useState(false);

  // Speech bubble every 15–20s, visible for 3s
  useEffect(() => {
    let bubbleTimeout: ReturnType<typeof setTimeout>;
    let cycleTimeout: ReturnType<typeof setTimeout>;

    const showOnce = () => {
      setShowBubble(true);
      bubbleTimeout = setTimeout(() => setShowBubble(false), 3000);
      const nextDelay = 15000 + Math.random() * 5000;
      cycleTimeout = setTimeout(showOnce, nextDelay + 3000);
    };

    cycleTimeout = setTimeout(showOnce, 6000);

    // Occasional wave every 8–12s
    let waveTimeout: ReturnType<typeof setTimeout>;
    const waveCycle = () => {
      setWaving(true);
      waveTimeout = setTimeout(() => setWaving(false), 2500);
      const next = 8000 + Math.random() * 4000;
      setTimeout(waveCycle, next);
    };
    waveTimeout = setTimeout(waveCycle, 4000);

    return () => {
      clearTimeout(bubbleTimeout);
      clearTimeout(cycleTimeout);
      clearTimeout(waveTimeout);
    };
  }, []);

  return (
    <div className="fixed bottom-24 right-6 z-40 select-none pointer-events-none">
      <div className="relative flex flex-col items-end gap-2">
        <AnimatePresence>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="glass-strong px-3 py-1.5 rounded-2xl text-white text-xs font-medium shadow-soft whitespace-nowrap"
            >
              👋 Hello!
              <span className="absolute -bottom-1 right-6 w-2 h-2 bg-ink-700 rotate-45 border-r border-b border-white/10" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 18 }}
          className="glass-strong rounded-2xl p-2 shadow-soft"
          style={{ width: 80, height: 80 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
            {/* Antenna */}
            <line x1="50" y1="14" x2="50" y2="24" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
            <motion.circle
              cx="50" cy="11" r="3" fill="#3B82F6"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Head/body */}
            <rect x="22" y="24" width="56" height="46" rx="14" fill="rgba(17,25,40,0.9)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

            {/* Eyes */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.85, 0.9, 0.95, 1], ease: 'easeInOut' }}
              style={{ transformOrigin: '50px 44px' }}
            >
              <circle cx="40" cy="44" r="5" fill="#60A5FA" />
              <circle cx="60" cy="44" r="5" fill="#60A5FA" />
            </motion.g>

            {/* Mouth */}
            <motion.path
              d="M42 58 Q50 62 58 58"
              stroke="#34D399" strokeWidth="2" strokeLinecap="round" fill="none"
              animate={{ d: ['M42 58 Q50 62 58 58', 'M42 58 Q50 60 58 58', 'M42 58 Q50 62 58 58'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Left arm (static) */}
            <line x1="22" y1="56" x2="14" y2="62" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />

            {/* Right arm (waves) */}
            <motion.g
              style={{ transformOrigin: '78px 56px' }}
              animate={waving ? { rotate: [0, -35, 20, -35, 20, 0] } : { rotate: 0 }}
              transition={{ duration: waving ? 1.2 : 0.4, ease: 'easeInOut' }}
            >
              <line x1="78" y1="56" x2="86" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="87" cy="49" r="3" fill="#8B5CF6" />
            </motion.g>

            {/* Feet */}
            <rect x="34" y="72" width="10" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
            <rect x="56" y="72" width="10" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default AIRobot;

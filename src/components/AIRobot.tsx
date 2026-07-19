import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Small friendly AI assistant at bottom-right.
 * Idle: floating, blinking, gentle breathing — no speech.
 * Click: wave + smile + speech bubble (4s) then return to idle.
 * Hover: glow + scale 1.08 + pointer cursor.
 */
const AIRobot = () => {
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setActive(false), 4000);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className="fixed bottom-24 right-6 z-40 select-none">
      <div className="relative flex flex-col items-end gap-2">
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="glass-strong px-4 py-3 rounded-2xl text-white text-xs leading-relaxed shadow-soft max-w-[240px] text-right"
            >
              <div className="font-semibold text-primary-light mb-1">👋 Hello!</div>
              <div>Welcome to my portfolio.</div>
              <div>I'm Muhammad Affan's AI Assistant.</div>
              <div className="text-slate-300 mt-1">Feel free to explore my projects, experience and skills.</div>
              <span className="absolute -bottom-1.5 right-7 w-2.5 h-2.5 bg-ink-700 rotate-45 border-r border-b border-white/10" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setActive(true)}
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 0.25, ease: 'easeOut' },
          }}
          aria-label="AI Assistant"
          className="relative glass-strong rounded-2xl p-2 cursor-pointer"
          style={{
            width: 76,
            height: 76,
            boxShadow: hovering
              ? '0 0 24px rgba(59,130,246,0.45), 0 0 60px rgba(59,130,246,0.2)'
              : '0 4px 20px rgba(0,0,0,0.3)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
            {/* Breathing body via scale */}
            <motion.g
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '50px 50px' }}
            >
              {/* Antenna */}
              <line x1="50" y1="14" x2="50" y2="24" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
              <motion.circle
                cx="50" cy="11" r="3" fill="#3B82F6"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Head / body */}
              <rect x="22" y="24" width="56" height="46" rx="14" fill="rgba(17,25,40,0.92)" stroke="rgba(96,165,250,0.25)" strokeWidth="1.5" />

              {/* Eyes — blue glowing, blink */}
              <motion.g
                animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.86, 0.9, 0.94, 1], ease: 'easeInOut' }}
                style={{ transformOrigin: '50px 44px' }}
              >
                <circle cx="40" cy="44" r="5" fill="#60A5FA">
                  <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="60" cy="44" r="5" fill="#60A5FA">
                  <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
                </circle>
              </motion.g>

              {/* Mouth — smile when active, neutral otherwise */}
              <motion.path
                d={active ? 'M40 58 Q50 66 60 58' : 'M42 58 Q50 60 58 58'}
                stroke={active ? '#34D399' : '#34D399'}
                strokeWidth="2" strokeLinecap="round" fill="none"
                animate={{ d: active ? 'M40 58 Q50 66 60 58' : 'M42 58 Q50 60 58 58' }}
                transition={{ duration: 0.3 }}
              />

              {/* Left arm (static) */}
              <line x1="22" y1="56" x2="14" y2="62" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />

              {/* Right arm — waves when active */}
              <motion.g
                style={{ transformOrigin: '78px 56px' }}
                animate={active ? { rotate: [0, -40, 25, -40, 25, 0] } : { rotate: 0 }}
                transition={{ duration: active ? 1.2 : 0.4, ease: 'easeInOut' }}
              >
                <line x1="78" y1="56" x2="86" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="87" cy="49" r="3" fill="#8B5CF6" />
              </motion.g>

              {/* Feet */}
              <rect x="34" y="72" width="10" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
              <rect x="56" y="72" width="10" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
            </motion.g>
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default AIRobot;


export default AIRobot
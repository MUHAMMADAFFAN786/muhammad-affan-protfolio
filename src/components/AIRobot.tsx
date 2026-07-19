import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const AIRobot = () => {
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!active) return;

    const timer = setTimeout(() => {
      setActive(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="fixed bottom-24 right-6 z-40 select-none">
      <div className="relative flex flex-col items-end gap-2">
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="glass-strong rounded-2xl px-4 py-3 text-white text-xs leading-relaxed max-w-[240px] shadow-xl"
            >
              <div className="font-semibold text-blue-400 mb-1">
                👋 Hello!
              </div>

              <div>Welcome to my portfolio.</div>

              <div>I'm Muhammad Affan's AI Assistant.</div>

              <div className="text-slate-300 mt-1">
                Feel free to explore my projects, experience and skills.
              </div>
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
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="glass-strong rounded-2xl p-2 cursor-pointer"
          style={{
            width: 76,
            height: 76,
            boxShadow: hovering
              ? "0 0 25px rgba(59,130,246,.5)"
              : "0 5px 20px rgba(0,0,0,.35)",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.g
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformOrigin: "50px 50px",
              }}
            >
              <line
                x1="50"
                y1="14"
                x2="50"
                y2="24"
                stroke="#60A5FA"
                strokeWidth="2"
              />

              <motion.circle
                cx="50"
                cy="11"
                r="3"
                fill="#3B82F6"
                animate={{
                  opacity: [1, 0.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <rect
                x="22"
                y="24"
                width="56"
                height="46"
                rx="14"
                fill="rgba(17,25,40,.92)"
                stroke="rgba(96,165,250,.25)"
              />

              <motion.g
                animate={{
                  scaleY: [1, 1, 0.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                style={{
                  transformOrigin: "50px 44px",
                }}
              >
                <circle cx="40" cy="44" r="5" fill="#60A5FA" />
                <circle cx="60" cy="44" r="5" fill="#60A5FA" />
              </motion.g>

              <motion.path
                d={active ? "M40 58 Q50 66 60 58" : "M42 58 Q50 60 58 58"}
                stroke="#34D399"
                strokeWidth="2"
                fill="none"
              />

              <line
                x1="22"
                y1="56"
                x2="14"
                y2="62"
                stroke="rgba(255,255,255,.4)"
                strokeWidth="2.5"
              />

              <motion.g
                style={{
                  transformOrigin: "78px 56px",
                }}
                animate={
                  active
                    ? {
                        rotate: [0, -40, 25, -40, 25, 0],
                      }
                    : {
                        rotate: 0,
                      }
                }
                transition={{
                  duration: 1.2,
                }}
              >
                <line
                  x1="78"
                  y1="56"
                  x2="86"
                  y2="50"
                  stroke="rgba(255,255,255,.4)"
                  strokeWidth="2.5"
                />

                <circle
                  cx="87"
                  cy="49"
                  r="3"
                  fill="#8B5CF6"
                />
              </motion.g>

              <rect
                x="34"
                y="72"
                width="10"
                height="6"
                rx="2"
                fill="rgba(255,255,255,.15)"
              />

              <rect
                x="56"
                y="72"
                width="10"
                height="6"
                rx="2"
                fill="rgba(255,255,255,.15)"
              />
            </motion.g>
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default AIRobot;
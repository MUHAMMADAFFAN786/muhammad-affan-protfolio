import { Github, Linkedin, MessageCircle, Sparkles, ExternalLink, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Particles = () => {
  const [particles] = useState(() =>
    Array.from({ length: 28 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 6,
      color: ['#3B82F6', '#8B5CF6', '#10B981'][Math.floor(Math.random() * 3)],
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const [typed, setTyped] = useState('');
  const phrases = ['AI & Machine Learning Engineer', 'Deep Learning • Computer Vision', 'LLM Fine-Tuning • Prompt Engineering'];
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    let i = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting) {
        setTyped(phrase.slice(0, i + 1));
        i++;
        if (i === phrase.length) {
          deleting = true;
          timeout = setTimeout(tick, 1600);
          return;
        }
      } else {
        setTyped(phrase.slice(0, i - 1));
        i--;
        if (i === 0) {
          deleting = false;
          setPhraseIdx((p) => (p + 1) % phrases.length);
          timeout = setTimeout(tick, 400);
          return;
        }
      }
      timeout = setTimeout(tick, deleting ? 45 : 80);
    };
    tick();
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phraseIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden animated-gradient">
      {/* Glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-success/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '8s' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <Particles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-primary-light" />
              <span className="text-sm text-slate-200 font-medium">Open to AI/ML Internships & Collaborations</span>
            </div>

            <h1 className="text-4xl xs:text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-[1.1] tracking-tight">
              Muhammad <span className="gradient-text">Affan</span>
            </h1>

            <div className="h-9 mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200">
                {typed}
                <span className="inline-block w-1 h-6 ml-1 bg-primary-light animate-pulse align-middle" />
              </h2>
            </div>
            <div className="mb-6">
              <div className="flex items-start gap-3">
                <a
                  href="https://coeruniversity.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 rounded-full overflow-hidden bg-white p-1 hover:scale-105 transition-transform w-11 h-11"
                  aria-label="COER University"
                >
                  <img
                    src="/images/logos/Screenshot_2026-07-19_185414.png"
                    alt="COER University"
                    className="w-full h-full object-contain rounded-full"
                  />
                </a>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="text-sm text-slate-300 font-medium flex flex-wrap items-center gap-x-1.5 gap-y-0">
                    B.Tech Computer Science (AI &amp; ML)
                  </p>
                  <a
                    href="https://coeruniversity.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-slate-200 hover:text-primary-light underline-offset-2 hover:underline transition-colors w-fit"
                  >
                    COER University
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                  <p className="text-xs text-slate-500">Roorkee, Uttarakhand, India</p>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 mb-9 max-w-2xl leading-relaxed">
              Passionate AI &amp; Machine Learning Engineer focused on building intelligent systems using
              <span className="text-primary-light font-medium"> Deep Learning</span>,
              <span className="text-secondary-light font-medium"> Computer Vision</span>,
              <span className="text-success-light font-medium"> Machine Learning</span>, IoT and Full Stack technologies.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <a
                href="https://wa.me/917500786039?text=Hi%20Muhammad%20Affan,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:shadow-glow transition-all"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://github.com/MUHAMMADAFFAN786"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-black/80 hover:scale-105 hover:shadow-lg transition-all"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="mailto:malikaffan67802@gmail.com"
                className="flex items-center justify-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-blue-950/60 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:scale-105 transition-all"
              >
                <Mail size={18} />
                Email
              </a>
              <a
                href="https://linkedin.com/in/muhammad-affan-25aa533fb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all"
                style={{ background: '#0A66C2' }}
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:shadow-glow hover:scale-105 transition-all col-span-2 sm:col-span-1 sm:w-auto"
              >
                <MessageCircle size={18} />
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-48 h-60 xs:w-56 xs:h-72 sm:w-64 sm:h-80 lg:w-80 lg:h-96 animate-float">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary via-secondary to-success rounded-3xl blur-2xl opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-secondary/60 rounded-3xl transform rotate-6" />
              <img
                src="/WhatsApp_Image_2026-03-01_at_7.15.52_PM.jpeg"
                alt="Muhammad Affan — AI & ML Engineer"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-4 -left-4 glass-strong px-4 py-3 rounded-2xl flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                <span className="text-sm text-white font-medium">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1 h-2 bg-primary-light rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import { Code, Brain, Database, Wrench, Cpu, Layers, ExternalLink, Bot, Rocket, Cloud } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import TechBadge from './TechBadge';
import CoerLogo from './logos/CoerLogo';

const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.8, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="text-4xl font-extrabold gradient-text">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const skills = {
  'Programming Languages': {
    icon: <Code className="w-5 h-5" />,
    accent: 'from-primary to-primary-light',
    items: ['Python', 'Java', 'C++', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
  'Machine Learning & AI': {
    icon: <Brain className="w-5 h-5" />,
    accent: 'from-secondary to-secondary-light',
    items: [
      'TensorFlow', 'Keras', 'Scikit-learn', 'PyTorch', 'Pandas', 'NumPy',
      'OpenCV', 'CNN', 'Deep Learning', 'Computer Vision', 'Prompt Engineering',
      'LLM Fine-Tuning', 'XGBoost', 'FastAPI', 'Flask', 'Matplotlib', 'Seaborn', 'Plotly',
    ],
  },
  Databases: {
    icon: <Database className="w-5 h-5" />,
    accent: 'from-success to-success-light',
    items: ['MySQL', 'MongoDB Atlas', 'Supabase Studio'],
  },
  'Tools & Platforms': {
    icon: <Wrench className="w-5 h-5" />,
    accent: 'from-primary-light to-secondary',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Google Colab', 'Jupyter Notebook', 'UiPath', 'Microsoft Power Platform'],
  },
};

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-ink-900 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary-light font-semibold mb-2 tracking-widest text-sm">01 — ABOUT</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Transforming research into <span className="gradient-text">real-world AI</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-5">
              I'm a Computer Science and Engineering student specializing in Artificial Intelligence
              and Machine Learning at COER University, with a passion for creating intelligent, scalable
              solutions that make a real impact.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My experience spans from fine-tuning Large Language Models to architecting AI-driven systems
              that scale to thousands of users. I thrive at the intersection of AI and software engineering,
              where groundbreaking research transforms into impactful, real-world solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-[20px] p-8 shadow-soft hover:shadow-glow transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 glass-strong rounded-2xl p-1.5 hover:scale-105 transition-transform">
                <CoerLogo size={56} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">
                  <a
                    href="https://coeruniversity.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-primary-light transition-colors"
                  >
                    COER University
                    <ExternalLink size={14} className="opacity-70" />
                  </a>
                </h3>
                <p className="text-slate-200 font-medium">Computer Science &amp; Engineering (AI &amp; ML)</p>
                <p className="text-slate-400 mt-1 text-sm flex items-center gap-1">
                  Roorkee, Uttarakhand, India
                </p>
                <p className="text-slate-400 mt-1 text-sm">2024 — 2028</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 rounded-full bg-primary/15 text-primary-light text-xs font-medium">AI & ML Specialization</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary-light text-xs font-medium">Deep Learning</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {[
            { label: 'Projects', value: 5, icon: <Layers className="w-5 h-5" />, accent: 'text-primary-light' },
            { label: 'Internships', value: 2, icon: <Cpu className="w-5 h-5" />, accent: 'text-secondary-light' },
            { label: 'Technologies', value: 30, suffix: '+', icon: <Code className="w-5 h-5" />, accent: 'text-success-light' },
            { label: 'Years Learning', value: 2, suffix: '+', icon: <Brain className="w-5 h-5" />, accent: 'text-primary-light' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center hover:scale-[1.03] transition-transform">
              <div className={`flex justify-center mb-2 ${stat.accent}`}>{stat.icon}</div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-slate-400 text-sm mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, data], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass rounded-[20px] p-6 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`bg-gradient-to-br ${data.accent} p-2.5 rounded-xl text-white`}>
                    {data.icon}
                  </div>
                  <h4 className="font-bold text-white text-lg">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Tools & Development Ecosystem — embedded inside About */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
            AI Tools &amp; <span className="gradient-text">Development Ecosystem</span>
          </h3>
          <p className="text-lg text-slate-400 max-w-3xl mb-8">
            The platforms and tools I use to build, deploy, and ship AI-powered products end-to-end.
          </p>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI & Development',
                icon: <Bot className="w-5 h-5" />,
                accent: 'from-primary to-primary-light',
                items: [
                  'Bolt.new', 'Lovable', 'Emergent', 'CrewAI', 'Replit AI', 'Gamma',
                  'n8n', 'Hugging Face', 'Git', 'GitHub', 'Canva',
                  'VS Code', 'Jupyter Notebook',
                ],
              },
              {
                title: 'Design Arena',
                icon: <Rocket className="w-5 h-5" />,
                accent: 'from-secondary to-secondary-light',
                items: ['Canva', 'Figma', 'Gamma', 'Adobe Express'],
              },
              {
                title: 'Deployment',
                icon: <Cloud className="w-5 h-5" />,
                accent: 'from-success to-success-light',
                items: ['Vercel', 'Netlify', 'AWS', 'Bolt Hosting'],
              },
            ].map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
                className="glass rounded-[20px] p-7 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`bg-gradient-to-br ${group.accent} p-2.5 rounded-xl text-white`}>
                    {group.icon}
                  </div>
                  <h4 className="font-bold text-white text-lg">{group.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((name) => (
                    <TechBadge key={name} name={name} size="md" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

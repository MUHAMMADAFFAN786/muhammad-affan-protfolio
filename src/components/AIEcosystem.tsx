import { motion } from 'framer-motion';
import { Bot, Rocket, Cloud } from 'lucide-react';
import TechBadge from './TechBadge';

const groups = [
  {
    title: 'AI & Development',
    icon: <Bot className="w-5 h-5" />,
    accent: 'from-primary to-primary-light',
    items: [
      'Bolt.new', 'Lovable', 'Emergent', 'CrewAI', 'Replit AI', 'Gamma',
      'n8n', 'Hugging Face', 'Git', 'GitHub', 'Canva',
      'Visual Studio Code', 'Jupyter Notebook',
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
];

const AIEcosystem = () => (
  <section id="ecosystem" className="relative py-24 bg-ink-900 overflow-hidden">
    <div className="absolute top-1/2 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-secondary-light font-semibold mb-2 tracking-widest text-sm">03 — ECOSYSTEM</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          AI Tools &amp; <span className="gradient-text">Development Ecosystem</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-3xl">
          The platforms and tools I use to build, deploy, and ship AI-powered products end-to-end.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {groups.map((group, gi) => (
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
              <h3 className="font-bold text-white text-lg">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((name) => (
                <TechBadge key={name} name={name} size="md" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AIEcosystem;

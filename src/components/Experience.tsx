import { MapPin, Calendar, Rocket, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Machine Learning Engineering Intern',
    company: 'FlyRank AI',
    location: 'Remote',
    period: 'July 2026 – September 2026',
    description:
      'Selected for the FlyRank AI Machine Learning Engineering Internship, working on practical Machine Learning workflows, data preprocessing, model development, deployment strategies and portfolio-ready AI projects.',
    contributions: [
      'Developed machine learning workflows using Python.',
      'Built data preprocessing pipelines.',
      'Worked with TensorFlow and Scikit-learn.',
      'Used Git and GitHub for collaboration.',
      'Created production-ready AI projects.',
    ],
    stack: ['Python', 'TensorFlow', 'Scikit-learn', 'Git', 'GitHub', 'Machine Learning'],
    accent: 'from-secondary to-secondary-light',
    logoSrc: '/images/logos/Screenshot_2026-07-19_185306.png',
  },
  {
    role: 'AI/ML Trainee Intern',
    company: 'Explorin Academy',
    location: 'Roorkee, Uttarakhand, India • On-site',
    period: 'May 2025 – June 2025',
    description:
      'Completed an intensive technical training program focused on algorithmic problem-solving, database systems, and foundational AI/ML concepts through hands-on implementation and real-world case simulations.',
    contributions: [
      'Applied Data Structures & Algorithms in C++ to solve complex computational problems with optimized time complexity.',
      'Designed and executed advanced SQL queries for data retrieval, aggregation, and performance tuning.',
      'Built structured mini-projects integrating backend logic, database operations, and clean coding practices.',
      'Improved problem-solving efficiency by applying systematic debugging and algorithm optimization techniques.',
      'Collaborated in peer-driven technical sessions simulating real-world development environments.',
    ],
    stack: ['C++', 'SQL', 'DSA', 'OOP', 'Debugging', 'Problem Solving', 'Database Design'],
    accent: 'from-primary to-primary-light',
    logoSrc: '/images/logos/Screenshot_2026-07-19_185348.png',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-ink-800 overflow-hidden">
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary-light font-semibold mb-2 tracking-widest text-sm">02 — EXPERIENCE</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl">
            Designing and deploying machine learning models, LLM-powered applications, and high-performance
            software solutions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-success" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-14 md:pl-24 pb-12 last:pb-0 group"
            >
              <div className={`absolute left-2.5 md:left-6 top-1 w-5 h-5 rounded-full bg-gradient-to-br ${exp.accent} border-4 border-ink-800 shadow-glow`} />

              <div className="glass rounded-[20px] p-8 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all">
                <div className="flex items-start gap-4 mb-5">
                  <div className="glass-strong rounded-full p-2 flex-shrink-0 group-hover:scale-105 transition-transform w-20 h-20 flex items-center justify-center bg-white">
                    <img
                      src={exp.logoSrc}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain p-1.5"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-lg font-semibold gradient-text mb-3">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={15} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={15} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Rocket className="w-5 h-5 text-primary-light" />
                    <h4 className="font-bold text-white">Key Contributions</h4>
                  </div>
                  <ul className="space-y-2.5 ml-7">
                    {exp.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary-light mt-1.5 text-xs">●</span>
                        <span className="text-slate-300">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-5 h-5 text-secondary-light" />
                    <h4 className="font-bold text-white">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-7">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-slate-200 text-sm font-medium rounded-full hover:border-primary/40 hover:text-white transition-all"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

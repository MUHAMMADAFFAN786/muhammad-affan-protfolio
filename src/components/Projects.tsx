import { Rocket, Wrench, Users, FileText, Car, Droplet } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Resume Analyzer & ATS Score Predictor',
    badge: 'AI Platform • NLP • Full-Stack',
    description:
      'Built an AI-powered resume analysis platform that evaluates resumes against job descriptions, predicts ATS compatibility, identifies missing skills and provides personalized resume improvement suggestions.',
    highlights: [
      'Resume Upload with intelligent parsing and extraction.',
      'ATS Score prediction against target job descriptions.',
      'Keyword Matching between resume and job posting.',
      'Skill Gap Detection with actionable recommendations.',
      'Personalized Resume Suggestions powered by LLMs.',
      'Interactive Dashboard for tracking improvements.',
    ],
    tech: ['Python', 'FastAPI', 'Scikit-learn', 'OpenAI API', 'Supabase', 'React', 'Node.js'],
    icon: <FileText className="w-6 h-6" />,
    accent: 'from-primary to-secondary',
    glow: 'glow-blue',
  },
  {
    title: 'Smart Traffic Sign Recognition — Enhancing Road Safety with AI',
    badge: 'Deep Learning • Computer Vision • Real-Time AI',
    description:
      'Designed and implemented an end-to-end real-time traffic sign recognition system leveraging deep learning and computer vision techniques to simulate intelligent driver-assistance functionality. Integrates model inference, voice alerts, and Arduino-based hardware feedback.',
    highlights: [
      'Built and trained a CNN using TensorFlow and Keras on the GTSRB dataset for multi-class traffic sign classification.',
      'Achieved high classification accuracy through optimized preprocessing, normalization, and data augmentation.',
      'Implemented real-time detection using OpenCV video stream processing.',
      'Integrated voice-based alert system using pyttsx3 for audible driver notifications.',
      'Connected Arduino hardware (LEDs & buzzer) to simulate real-time vehicle response mechanisms.',
      'Structured the system to mimic real Advanced Driver Assistance Systems (ADAS) architecture.',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'CNN', 'Image Processing', 'Arduino', 'Real-Time Systems'],
    icon: <Car className="w-6 h-6" />,
    accent: 'from-secondary to-primary-light',
    glow: 'glow-purple',
  },
  {
    title: 'Blood Donation Website',
    badge: 'Healthcare • Frontend',
    description:
      'A frontend website designed to connect blood donors with those in need, making it easier to save lives through quick and simple interfaces.',
    highlights: [
      'Instant Signup — be a donor or request blood in a few clicks.',
      'Nearby Centers — find donation spots close to you.',
      'Eligibility Check — know if you are ready to donate.',
      'Quick, simple, and made for emergencies.',
      'Built with HTML + CSS + JavaScript (frontend only).',
    ],
    team: 'Team TEAM HYDRA: Muhammad Affan, Raman Kashyap, Krishna Pal Singh, Rachit Sharma, Roshan Upadhyay',
    mentor: 'Ankita Jaguri',
    tech: ['HTML', 'CSS', 'JavaScript', 'Healthcare', 'Frontend'],
    icon: <Droplet className="w-6 h-6" />,
    accent: 'from-success to-primary-light',
    glow: 'glow-green',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-ink-900 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary-light font-semibold mb-2 tracking-widest text-sm">03 — PROJECTS</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Engineered <span className="gradient-text">AI Systems</span> &amp; Production-Grade Apps
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl">
            A curated selection of intelligent systems and scalable software solutions built using machine
            learning, modern backend architectures, and performance-driven development practices.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-[20px] shadow-soft overflow-hidden hover:-translate-y-1 hover:shadow-glow transition-all group"
            >
              <div className={`h-1 bg-gradient-to-r ${project.accent}`} />
              <div className="p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`bg-gradient-to-br ${project.accent} p-3 rounded-xl text-white ${project.glow} group-hover:scale-110 transition-transform`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-primary-light font-semibold text-sm">{project.badge}</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Rocket className="w-5 h-5 text-primary-light" />
                    <h4 className="font-bold text-white">Key Highlights</h4>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-2.5 ml-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-secondary-light mt-1 text-xs">●</span>
                        <span className="text-slate-300 text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.team && (
                  <div className="mb-6 glass rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-success-light" />
                      <h4 className="font-bold text-white text-sm">Team</h4>
                    </div>
                    <p className="text-slate-300 text-sm">{project.team}</p>
                    {project.mentor && <p className="text-slate-400 text-sm mt-1">Mentor: {project.mentor}</p>}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-5 h-5 text-secondary-light" />
                    <h4 className="font-bold text-white">Technical Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 text-slate-200 text-sm font-medium rounded-full hover:border-primary/40 hover:text-white transition-all"
                      >
                        {t}
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

export default Projects;

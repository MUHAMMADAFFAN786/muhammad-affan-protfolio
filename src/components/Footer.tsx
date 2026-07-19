import { BrainCircuit, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-ink-900 border-t border-white/5 py-14 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-blue">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Muhammad <span className="gradient-text">Affan</span></h3>
          </div>
          <p className="text-slate-400 mb-1">AI &amp; Machine Learning Engineer</p>
          <p className="text-slate-500 italic mb-6 text-sm">"Building the future through code and artificial intelligence"</p>

          <div className="flex gap-3 mb-8">
            <a href="mailto:malikaffan67802@gmail.com" aria-label="Email" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-white hover:shadow-glow transition-all">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/MUHAMMADAFFAN786" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-white hover:shadow-glow transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/muhammad-affan-25aa533fb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-white hover:shadow-glow transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          <p className="text-slate-500 text-sm">
            Designed &amp; Developed by <span className="text-slate-300 font-medium">Muhammad Affan</span>
          </p>
          <p className="text-slate-600 text-xs mt-1">© {new Date().getFullYear()} Muhammad Affan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

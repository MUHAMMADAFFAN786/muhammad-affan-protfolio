import { Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0tMTIgMGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptLTEyIDBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl flex-1">
            <div className="mb-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Muhammad Affan
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-200 mb-6">
                AI & ML Engineer
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-3xl leading-relaxed">
              Crafting intelligent solutions with cutting-edge AI and Machine Learning technologies.
              Currently pursuing Computer Science at COER University with expertise in machine learning,
              natural language processing, and scalable web applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="mailto:malikaffan67802@gmail.com"
              className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://github.com/MUHAMMADAFFAN786"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/muhammad-affan-25aa533fb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 transition-all transform hover:scale-105 shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            </div>
            </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-80 lg:w-80 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl transform rotate-6 opacity-50"></div>
              <img
                src="/WhatsApp_Image_2026-03-01_at_7.15.52_PM.jpeg"
                alt="Muhammad Affan"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

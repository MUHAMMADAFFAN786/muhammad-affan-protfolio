import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AIRobot from './components/AIRobot';
import ScrollProgress from './components/ScrollProgress';
import MouseFollower from './components/MouseFollower';

function App() {
  // Smooth scroll behavior for anchor navigation
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-ink-900">
      <ScrollProgress />
      <MouseFollower />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AIRobot />
      <WhatsAppButton />
    </div>
  );
}

export default App;

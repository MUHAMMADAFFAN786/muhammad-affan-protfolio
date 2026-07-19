import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AIRobot from './components/AIRobot';

function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <AIRobot />
      <WhatsAppButton />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
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
import Admin from './components/admin/Admin';
import AdminButton from './components/AdminButton';

function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash);
  useEffect(() => {
    const onChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

function App() {
  const route = useHashRoute();
  const isAdmin = route.startsWith('#/admin');

  // Smooth scroll behavior for anchor navigation (portfolio only)
  useEffect(() => {
    if (isAdmin) return;
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, [isAdmin]);

  const exitAdmin = () => {
    if (window.location.hash.startsWith('#/admin')) {
      window.location.hash = '';
    }
  };

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-ink-900">
        <Admin onExit={exitAdmin} />
      </div>
    );
  }

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
      <AdminButton />
      <WhatsAppButton />
    </div>
  );
}

export default App;

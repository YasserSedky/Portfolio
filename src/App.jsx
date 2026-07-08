// src/App.jsx
import ScrollProgress from './components/layout/ScrollProgress';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="dark noise min-h-screen bg-bg text-text-primary">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />

        {/* Section dividers */}
        <div className="glow-line">
          <div className="h-px bg-border" />
        </div>

        <About />

        <div className="glow-line">
          <div className="h-px bg-border" />
        </div>

        <Projects />

        <div className="glow-line">
          <div className="h-px bg-border" />
        </div>

        <Services />

        <div className="glow-line">
          <div className="h-px bg-border" />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

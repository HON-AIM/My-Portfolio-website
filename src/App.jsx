import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Hero from './components/UI/Hero';
import About from './components/UI/About';
import Services from './components/UI/Services';
import Process from './components/UI/Process';
import Tech from './components/UI/Tech';
import Projects from './components/UI/Projects';
import Testimonials from './components/UI/Testimonials';
import Contact from './components/UI/Contact';
import Footer from './components/UI/Footer';

// Lazily loaded 3D canvas — keeps three.js out of the initial bundle.
const StarsCanvas = lazy(() => import('./components/Canvas/Stars'));
// Removed from hero for performance — available for a future 'Playground' page
// import Scene from './components/Canvas/Scene';
// import Computers from './components/Canvas/Computers';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-ink">
        {/* Hero renders its own animated bg-mesh gradient */}
        <div>
          <Navbar />
          <Hero />
        </div>
        
        {/* About section should be outside the hero pattern div but standard flow */}
        <About />
        <Services />
        <Process />
        <Tech />
        <Projects />
        <Testimonials />
        <Contact />
        
        {/* Removed from hero for performance — available for a future 'Playground' page
        <Scene>
           <Computers />
        </Scene>
        */}
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

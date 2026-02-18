import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Hero from './components/UI/Hero';
import About from './components/UI/About';
import Tech from './components/UI/Tech';
import Projects from './components/UI/Projects';
import Contact from './components/UI/Contact';
import Scene from './components/Canvas/Scene';
import StarsCanvas from './components/Canvas/Stars';
import Computers from './components/Canvas/Computers';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        {/* About section should be outside the hero pattern div but standard flow */}
        <About />
        <Tech />
        <Projects />
        <Contact />
        
        <Scene>
           <Computers />
        </Scene>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;

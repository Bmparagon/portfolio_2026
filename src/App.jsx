import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div className={`page-shell ${isLightMode ? 'theme-light' : 'theme-dark'}`}>
      <Navbar isLightMode={isLightMode} toggleMode={() => setIsLightMode((prev) => !prev)} />
      <main className="page-content">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Methodology from './pages/Methodology';
import CaseStudies from './pages/CaseStudies';
import Tech from './pages/Tech';
import ApplyNow from './pages/ApplyNow';
import Legal from './pages/Legal';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-apex-dark text-white selection:bg-apex-green/30 selection:text-apex-green">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/apply" element={<ApplyNow />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </Router>
  );
};

export default App;
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustedCompanies from './components/TrustedCompanies.jsx';
import Features from './components/Features.jsx';
import Product from './components/Product.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Statistics from './components/Statistics.jsx';
import Solutions from './components/Solutions.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import DemoModal from './components/DemoModal.jsx';
import BackToTop from './components/BackToTop.jsx';
import './App.css';

const App = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero onWatchDemo={openDemo} />
        <TrustedCompanies />
        <Features />
        <Product />
        <HowItWorks />
        <Statistics />
        <Solutions />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
      <BackToTop />
    </>
  );
};

export default App;

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HowToUseSection from './components/HowToUseSection';
import ProductSection from './components/ProductSection';
import TeamSection from './components/TeamSection';
// import InvestorsSection from './components/InvestorsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowToUseSection />
      <ProductSection />
      <TeamSection />
      {/* <InvestorsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-teal-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-in fade-in-50 slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-200">
            PhysioCorporation Prevent today<br />
            <span className="text-blue-600">protection for Tommorow </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-500">
            Transforming patient care with AI-driven solutions that connect patients, doctors, and healthcare providers in unprecedented ways.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-700 group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16 animate-in fade-in-50 slide-in-from-bottom-8 duration-1000 delay-1000">
          <img
            src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Healthcare professionals using technology"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 hover:scale-[1.02] transform"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
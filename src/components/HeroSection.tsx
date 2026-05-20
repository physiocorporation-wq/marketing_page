import React from "react";
import { ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PdfDownload from "./PdfDownload";
import physioCorporation from '../assets/PhysioCorporation.pdf'
import ServiceCardCom from "./ServiceCard";

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-16 sm:pt-20 md:pt-24 bg-gradient-to-br from-blue-50 to-teal-50 xl:min-h-screen flex items-center"
    >
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center animate-in fade-in-50 slide-in-from-bottom-8 duration-1000">
          {/* Heading */}
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-200 px-2">
            PhysioCorporation Prevent Todayy 
            <br className="hidden sm:block" />
            <span className="sm:inline block mt-2 sm:mt-0"> </span>
            <span className="text-blue-600">Protection For Tomorrow</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-500 px-4">
            Transforming User care with AI-driven solutions that connect Health
            Seekers, Health Professionals, and healthcare providers in
            unprecedented ways.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-4">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-700 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <div className="w-full sm:w-auto">
              <PdfDownload 
                label='PhysioCorporation Details' 
                pdf={physioCorporation} 
              />
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 w-full">
          <ServiceCardCom />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from "react";
import { ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import Slider from "react-slick";

const HeroSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    swipeToSlide: true,
  };
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-blue-50 to-teal-50 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-in fade-in-50 slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-200">
            Physio Corporation Prevent today
            <br />
            <span className="text-blue-600">protection for Tommorow </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-500">
            Transforming User care with AI-driven solutions that connect Health
            Seekar , Health Professionals, and healthcare providers in
            unprecedented ways.
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
        <div className="slider-container w-[90vw] sm:w-auto">
          <Slider {...settings}>
            <div>
              <div className="flex items-center justify-center w-full mt-10">
                <img
                  src={one}
                  alt="Healthcare professionals using technology"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition duration-500 transform hover:scale-105
                     w-[400px]"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-full mt-10">
                <img
                  src={two}
                  alt="Healthcare professionals using technology"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition duration-500 transform hover:scale-105
                      w-[400px]"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-full mt-10">
                <img
                  src={three}
                  alt="Healthcare professionals using technology"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition duration-500 transform hover:scale-105
                      w-[400px]"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-full mt-10">
                <img
                  src={four}
                  alt="Healthcare professionals using technology"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition duration-500 transform hover:scale-105
                    w-[400px]"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-full mt-10">
                <img
                  src={five}
                  alt="Healthcare professionals using technology"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition duration-500 transform hover:scale-105
                      w-[400px]"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-full mt-10">
                <img
                  src={six}
                  alt="Healthcare professionals using technology"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition duration-500 transform hover:scale-105
                      w-[400px]"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-full mt-10">
                <img
                  src={seven}
                  alt="Healthcare professionals using technology"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition duration-500 transform hover:scale-105
                     w-[400px]"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

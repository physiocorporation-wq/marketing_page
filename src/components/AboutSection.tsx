import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="group">
            <img
              src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Medical professionals collaborating"
              className="w-full rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-in fade-in-50 slide-in-from-right-4 duration-700">About HealthCareX</h2>
            <div className="space-y-6">
              <div className="animate-in fade-in-50 slide-in-from-right-4 duration-700 delay-200">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize access to quality healthcare by leveraging cutting-edge AI technology 
                  that bridges the gap between patients and healthcare providers, making medical care 
                  more efficient, accessible, and personalized.
                </p>
              </div>
              <div className="animate-in fade-in-50 slide-in-from-right-4 duration-700 delay-500">
                <h3 className="text-xl font-semibold text-teal-600 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  We envision a world where every individual has immediate access to intelligent 
                  healthcare solutions that not only diagnose and treat but also predict and prevent 
                  health issues before they become critical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
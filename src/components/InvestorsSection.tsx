import React from 'react';

const InvestorsSection: React.FC = () => {
  const investors = [
    { name: 'Andreessen Horowitz', logo: 'A16Z' },
    { name: 'Sequoia Capital', logo: 'SEQUOIA' },
    { name: 'GV (Google Ventures)', logo: 'GV' },
    { name: 'Kleiner Perkins', logo: 'KP' },
    { name: 'Bessemer Venture Partners', logo: 'BVP' },
    { name: 'First Round Capital', logo: 'FRC' }
  ];

  return (
    <section id="investors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Investors & Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Backed by leading venture capital firms and strategic partners who believe in our mission.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {investors.map((investor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-lg transition-all duration-300 group hover:scale-105 animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <span className="text-lg font-bold text-gray-600 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110">
                {investor.logo}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Interested in partnering with us?{' '}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-600 hover:text-blue-700 font-semibold underline hover:no-underline transition-all duration-300 hover:scale-105 inline-block"
            >
              Get in touch
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
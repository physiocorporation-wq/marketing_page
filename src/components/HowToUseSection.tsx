import React from 'react';
import { UserPlus, Users, Activity } from 'lucide-react';

const HowToUseSection: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus className="h-12 w-12 text-blue-600" />,
      title: 'Sign Up',
      description: 'Create your secure account in under 2 minutes and complete your health profile.'
    },
    {
      icon: <Users className="h-12 w-12 text-teal-600" />,
      title: 'Connect with Doctors',
      description: 'Browse and connect with verified healthcare professionals in your area or globally.'
    },
    {
      icon: <Activity className="h-12 w-12 text-green-600" />,
      title: 'Track Your Health',
      description: 'Monitor your health metrics, receive personalized insights, and stay on top of your wellness journey.'
    }
  ];

  return (
    <section id="how-to-use" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Use HealthCareX</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with our platform is simple. Follow these three easy steps to begin your healthcare transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 200 + 300}ms` }}
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 bg-gray-50 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
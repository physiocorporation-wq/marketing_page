import React from 'react';
import { Brain, Users, FileText, Shield, Clock, Zap } from 'lucide-react';

const ProductSection: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'AI Diagnosis',
      description: 'Advanced AI algorithms that assist in accurate diagnosis and treatment recommendations.'
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: 'User Tracking',
      description: 'Comprehensive User monitoring system that tracks health metrics in real-time.'
    },
    {
      icon: <FileText className="h-8 w-8 text-green-600" />,
      title: 'Share your Smart Reports',
      description: 'Automated generation of detailed medical reports and health summaries.'
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security ensuring all User data is protected and compliant.'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock health monitoring with instant alerts for critical changes.'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: 'Instant Insights',
      description: 'Real-time health insights and personalized recommendations powered by AI.'
    }
  ];

  return (
    <section id="product" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Product Overview</h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make PhysioCorporation the leading healthcare technology platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 border border-gray-200 rounded-xl hover:shadow-xl hover:border-blue-200 transition-all duration-500 group hover:-translate-y-1 animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
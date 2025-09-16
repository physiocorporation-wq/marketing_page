import React, { useState } from 'react';
import { Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import keyurImage from '../assets/keyurladani.jpeg'

const TeamSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: 'Keyur Ladani',
      role: 'Software Developer',
      image: keyurImage,
      bio: "Software Developer with 5+ years of experience building scalable web and mobile applications, specializing in modern frameworks.",
      linkedin:"https://www.linkedin.com/in/keyur-patel-0a01231b9/",
      mail:'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJpcWfzCKbHlxQFrplCMMLwrLgWrFLWJmZJXgHWlctDkccsLwhdwZfqNnntBcbnKML'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      bio: 'AI researcher and former Google Health engineer specializing in medical AI and machine learning.',
      linkedin:"https://www.linkedin.com/in/keyur-patel-0a01231b9/",
      mail:'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJpcWfzCKbHlxQFrplCMMLwrLgWrFLWJmZJXgHWlctDkccsLwhdwZfqNnntBcbnKML'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      bio: 'Product strategist with extensive background in healthcare technology and user experience design.',
      linkedin:"https://www.linkedin.com/in/keyur-patel-0a01231b9/",
      mail:'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJpcWfzCKbHlxQFrplCMMLwrLgWrFLWJmZJXgHWlctDkccsLwhdwZfqNnntBcbnKML'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      bio: 'Software architect with expertise in scalable healthcare systems and data security.',
      linkedin:"https://www.linkedin.com/in/keyur-patel-0a01231b9/",
      mail:'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJpcWfzCKbHlxQFrplCMMLwrLgWrFLWJmZJXgHWlctDkccsLwhdwZfqNnntBcbnKML'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Chief Medical Advisor',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      bio: 'Renowned cardiologist and healthcare innovation expert with 20+ years of clinical experience.',
      linkedin:"https://www.linkedin.com/in/keyur-patel-0a01231b9/",
      mail:'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJpcWfzCKbHlxQFrplCMMLwrLgWrFLWJmZJXgHWlctDkccsLwhdwZfqNnntBcbnKML'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      bio: 'Operations leader specializing in healthcare compliance and regulatory affairs.',
      linkedin:"https://www.linkedin.com/in/keyur-patel-0a01231b9/",
      mail:'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJpcWfzCKbHlxQFrplCMMLwrLgWrFLWJmZJXgHWlctDkccsLwhdwZfqNnntBcbnKML'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3));
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of healthcare professionals, engineers, and innovators are dedicated to transforming healthcare.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            disabled={currentSlide === Math.ceil(teamMembers.length / 3) - 1}
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          </button>

          {/* Team Members Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8 px-4">
                    {teamMembers.slice(slideIndex * 3, slideIndex * 3 + 3).map((member, memberIndex) => (
                      <div
                        key={memberIndex}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2"
                      >
                        <div className="mb-6 relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                        <div className="flex justify-center space-x-3">
                          <a href={member.linkedin} target='_blank' className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:scale-110">
                            <Linkedin className="h-5 w-5" />
                          </a>
                          <a href={member.mail} target='_blank' className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:scale-110">
                            <Mail className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
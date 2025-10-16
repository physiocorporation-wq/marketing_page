import React from "react";

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
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-in fade-in-50 slide-in-from-right-4 duration-700">
              About Physio Corporation
            </h2>
            <div className="space-y-6">
              <div className="animate-in fade-in-50 slide-in-from-right-4 duration-700 delay-200">
                {/* <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Mission</h3> */}
                <p className="text-gray-600 leading-relaxed">
                  Physio Corporation is a forward-thinking health and wellness
                  organization committed to reshaping public health through
                  proactive care, education, and community empowerment. Founded
                  by a multidisciplinary team of directors, we bring together
                  diverse expertise to champion the belief that “Prevention is
                  better than cure.” Our integrated ecosystem is designed to
                  make that vision a practical reality. We proudly serve
                  individuals across all age groups—from children to senior
                  citizens—and with a wide range of sectors including schools,
                  residential societies, corporates, NGOs, and government
                  bodies. Every program we offer is: <br/><br/> - ✅ Evidence-based and
                  preventive <br/> - 🌍 Culturally sensitive and inclusive <br/> - 🧠
                  Tailored to the unique needs of each community <br/><br/> Whether you're
                  seeking wellness solutions for your workplace, educational
                  institution, or neighborhood, Physio Corporation delivers
                  accessible, impactful services that promote lifelong health
                  and well-being.,
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

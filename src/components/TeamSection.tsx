import React from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import keyurImage from "../assets/keyurladani.jpeg";
import rahul from "../assets/rahul.jpeg";
import geeta from "../assets/Geeta Patel.jpeg";
import manjunath from "../assets/manjunath.jpeg";
import chandresh from "../assets/chandresh.jpeg";
import bhavesh from "../assets/bhavesh.jpeg";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Manjunath D. Raikar",
      role: "Board of Director",
      image: manjunath,
      bio: "Director with 18+ years in fitness, guiding PhysioCorporation’s mission to improve community wellness.",
      linkedin: "",
      mail: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJpcWfzCKbHlxQFrplCMMLwrLgWrFLWJmZJXgHWlctDkccsLwhdwZfqNnntBcbnKML",
      phone: "+91 72598 47188",
    },
    {
      name: "Dr. Chandresh Patel(PT)",
      role: "Head of Product",
      image: chandresh,
      bio: "Healthcare tech strategist skilled in UX and digital innovation to enhance medical product design.",
      linkedin: "https://www.linkedin.com/in/asudev-physiotherapy-clinic?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      mail: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJpcWfzCKbHlxQFrplCMMLwrLgWrFLWJmZJXgHWlctDkccsLwhdwZfqNnntBcbnKML",
      phone: "+91 97276 70895",
    },
    {
      name: "Bhavesh Patel",
      role: "VP of Engineering",
      image: bhavesh,
      bio: "Expert in building secure, scalable healthcare software systems with a strong focus on innovation.",
      linkedin: "",
      mail: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJpcWfzCKbHlxQFrplCMMLwrLgWrFLWJmZJXgHWlctDkccsLwhdwZfqNnntBcbnKML",
      phone: "+91 84011 22218",
    },
    {
      name: "Rahul Kalal",
      role: "Marketing Manager",
      image: rahul,
      bio: "Experienced marketing professional driving healthcare brand growth through strategic campaigns.",
      linkedin: "",
      mail: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJpcWfzCKbHlxQFrplCMMLwrLgWrFLWJmZJXgHWlctDkccsLwhdwZfqNnntBcbnKML",
      phone: "+91 94093 46581",
    },
    {
      name: "Mrs.  Geeta Patel",
      role: "Managing Director",
      image: geeta,
      bio: "Managing Director and Operations Lead at PhysioCorporation, oversees operations, coordination, and strategic planning, ensuring organizational efficiency, optimizing staff performance, and fostering excellence across physiotherapy and diagnostic services with strong leadership and precision.",
      linkedin: "",
      mail: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJpcWfzCKbHlxQFrplCMMLwrLgWrFLWJmZJXgHWlctDkccsLwhdwZfqNnntBcbnKML",
      phone: "+91 94093 46581",
    },
    {
      name: "Keyur Ladani",
      role: "Software Developer",
      image: keyurImage,
      bio: "Full-stack developer with 5+ years of experience crafting scalable web and mobile apps using modern tech.",
      linkedin: "https://www.linkedin.com/in/keyur-patel-0a01231b9/",
      mail: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFFKJpcWfzCKbHlxQFrplCMMLwrLgWrFLWJmZJXgHWlctDkccsLwhdwZfqNnntBcbnKML",
      phone: "+91 6352632409",
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of healthcare professionals, engineers, and
            innovators are dedicated to transforming healthcare.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2"
            >
              <div className="mb-6 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>
              <div className="flex justify-center space-x-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}

                <a
                  href={member.mail}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>

                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

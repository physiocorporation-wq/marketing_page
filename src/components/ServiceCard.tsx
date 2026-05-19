import React from "react";
import {
  Users,
  Briefcase,
  Home,
  Dumbbell,
  HeartHandshake,
  Activity,
  Footprints,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

// --- SERVICE DATA STRUCTURE ---
const services = [
  {
    name: "Community Wellness",
    icon: Users,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    name: "Corporate Wellness",
    icon: Briefcase,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
    {
    name: "Nursing & Home Care",
    icon: Home,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    name: "Sports Fitness",
    icon: Dumbbell,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    name: "Elderly & Adult Care",
    icon: HeartHandshake,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    name: "Diagnostic Support",
    icon: Activity,
    color: "text-blue-700",
    bgColor: "bg-blue-100",
  },
  {
    name: "Physiotherapy & Rehab",
    icon: Footprints,
    color: "text-gray-700",
    bgColor: "bg-gray-100",
  },
  {
    name: "Educational Institutes",
    icon: GraduationCap,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
];

// --- REUSABLE SERVICE CARD ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceCard = ({ name, Icon, color, bgColor }: any) => (
  <div className="flex flex-col my-4 items-center min-w-[230px] sm:min-w-[220px] mx-2 sm:mx-3 p-4 sm:p-6 text-center border border-gray-100 rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300">
    <div className={`p-4 rounded-full mb-4 ${bgColor} ${color}`}>
      <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
    </div>
    <h3 className="text-base sm:text-lg font-semibold text-gray-800 tracking-tight leading-snug">
      {name}
    </h3>
  </div>
);

// --- MAIN COMPONENT ---
const ServiceCardCom = () => {
  // duplicate data to create an infinite loop effect
  const repeatedServices = [...services, ...services];

  return (
    <div className="px-0 sm:px-0 py-0 sm:py-10 font-sans overflow-hidden">
      {/* Infinite Scrolling Row */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 10, // control speed (larger = slower)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {repeatedServices.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.name}
              Icon={service.icon}
              color={service.color}
              bgColor={service.bgColor}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCardCom;

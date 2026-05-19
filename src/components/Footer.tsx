import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/logo.png'

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Product', id: 'product' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/share/1Ayi5gkU77/' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://x.com/' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://in.linkedin.com/' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/physiocorporation' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            <div className="flex items-center space-x-2 mb-4 group">
              {/* <Heart className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold">PhysioCorporation</span> */}
              <img src={logo} alt="logo" className="w-40 sm:w-48 h-auto" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Revolutionizing healthcare with AI-driven solutions that make quality medical care 
              accessible, efficient, and personalized for everyone.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-200">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-500">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>info@physiocorporation.com</p>
              <p>+91 9426836894</p>
              <p>Status Elysium,near western heights app. 28 shop Dr. chandresh Patel</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 PhysioCorporation. All rights reserved. Built with care for better healthcare.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
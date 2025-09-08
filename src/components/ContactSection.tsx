import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone:""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '',phone:'' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your healthcare experience? Get in touch with our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 animate-in fade-in-50 slide-in-from-left-4 duration-700 delay-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Mobile Number
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400"
                  placeholder="Your Mobile Number"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none hover:border-gray-400"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-in fade-in-50 slide-in-from-right-4 duration-700 delay-500">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're a school, society, corporate, or individual seeking preventive care, our team is ready to connect.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group hover:bg-white hover:shadow-lg transition-all duration-300 p-4 rounded-lg hover:-translate-y-1">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@physiocorporation.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:bg-white hover:shadow-lg transition-all duration-300 p-4 rounded-lg hover:-translate-y-1">
                <div className="p-3 bg-teal-100 rounded-lg">
                  <Phone className="h-6 w-6 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 9426836894 </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:bg-white hover:shadow-lg transition-all duration-300 p-4 rounded-lg hover:-translate-y-1">
                <div className="p-3 bg-green-100 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">
                    Status Elysium,near western heights apartments,28 shop Dr chandresh Patel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
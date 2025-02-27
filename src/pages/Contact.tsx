import React from 'react';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            I'm always open to discussing new opportunities and collaborations
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            {/* Email */}
            <a 
              href="mailto:andy.bittar@outlook.com"
              className="flex items-center space-x-4 group hover:bg-teal-50 p-3 rounded-lg transition-colors"
            >
              <div className="bg-teal-50 p-3 rounded-lg group-hover:bg-white transition-colors">
                <Mail className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <span className="text-gray-600 group-hover:text-teal-600 transition-colors">
                  andy.bittar@outlook.com
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/andrew-bittar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group hover:bg-teal-50 p-3 rounded-lg transition-colors"
            >
              <div className="bg-teal-50 p-3 rounded-lg group-hover:bg-white transition-colors">
                <Linkedin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                <span className="text-gray-600 group-hover:text-teal-600 transition-colors">
                  linkedin.com/in/andrew-bittar
                </span>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:6129879386"
              className="flex items-center space-x-4 group hover:bg-teal-50 p-3 rounded-lg transition-colors"
            >
              <div className="bg-teal-50 p-3 rounded-lg group-hover:bg-white transition-colors">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <span className="text-gray-600 group-hover:text-teal-600 transition-colors">
                  (612) 987-9386
                </span>
              </div>
            </a>

            {/* Location */}
            <a 
              href="https://www.google.com/maps/place/Twin+Cities"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group hover:bg-teal-50 p-3 rounded-lg transition-colors"
            >
              <div className="bg-teal-50 p-3 rounded-lg group-hover:bg-white transition-colors">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <span className="text-gray-600 group-hover:text-teal-600 transition-colors">
                  Twin Cities, Minnesota
                </span>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/Andy-Bittar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group hover:bg-teal-50 p-3 rounded-lg transition-colors"
            >
              <div className="bg-teal-50 p-3 rounded-lg group-hover:bg-white transition-colors">
                <Github className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">GitHub</h3>
                <div>
                  <span className="text-gray-600 group-hover:text-teal-600 transition-colors">
                    github.com/Andy-Bittar
                  </span>
                  <p className="text-sm text-gray-500 mt-1">
                    Please request access if you'd like to view my projects
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Andy Bittar</h3>
            <p className="text-gray-400">
              Product Manager specializing in B2B SaaS and AI-driven solutions
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-teal-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/andrew-bittar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:andy.bittar@outlook.com"
                className="text-gray-400 hover:text-teal-500 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/Andy-Bittar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-500 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Andy Bittar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
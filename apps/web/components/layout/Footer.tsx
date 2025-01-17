import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-12 border-t border-dark-200 mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold">
            <Link href="/" className="text-green-400">
              TeamSync
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/features" className="text-gray-300 hover:text-white">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white border border-dark-200 p-3 rounded-full"
            >
              <Github size={24} color="#00E599" />
            </a>
            <a
              href="https://linkedIn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white border border-dark-200 p-3 rounded-full"
            >
              <Linkedin size={24} color="#00E599" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white border border-dark-200 p-3 rounded-full"
            >
              <Twitter size={24} color="#00E599" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} TeamSync. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

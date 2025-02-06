import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d1b2a] font-['Open_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          
          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-[#E0E1DD] text-lg font-semibold">Follow Me</h3>
            <ul className="space-y-3 flex flex-col">
              <li className="flex items-center space-x-3">
                <Instagram size={20} className="text-[#E0E1DD]" />
                <a
                  href="https://www.instagram.com/ashwaniias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E0E1DD] hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Facebook size={20} className="text-[#E0E1DD]" />
                <a
                  href="https://www.facebook.com/AshwaniKumarIAS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E0E1DD] hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Linkedin size={20} className="text-[#E0E1DD]" />
                <a
                  href="https://www.linkedin.com/in/ashwaniias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E0E1DD] hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Youtube size={20} className="text-[#E0E1DD]" />
                <a
                  href="https://www.youtube.com/@ashwaniias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E0E1DD] hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Twitter size={20} className="text-[#E0E1DD]" />
                <a
                  href="https://twitter.com/ashwaniias2010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E0E1DD] hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-[#E0E1DD] text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-[#E0E1DD]">
                <Phone size={16} className="mr-2" />
                <span>[Office Phone]</span>
              </li>
              <li className="flex items-center text-[#E0E1DD]">
                <Mail size={16} className="mr-2" />
                <span>[Email]</span>
              </li>
              <li className="flex items-center text-[#E0E1DD]">
                <MapPin size={16} className="mr-2" />
                <span>District Collectorate Office</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h3 className="text-[#E0E1DD] text-lg font-semibold">Office Hours</h3>
            <ul className="space-y-2 text-[#E0E1DD]">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 9:00 AM - 1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h3 className="text-[#E0E1DD] text-lg font-semibold">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#E0E1DD] hover:text-white transition-colors">
                  District Website
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E0E1DD] hover:text-white transition-colors">
                  Government Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E0E1DD] hover:text-white transition-colors">
                  Public Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#E0E1DD]">© {new Date().getFullYear()} All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[#E0E1DD] hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#E0E1DD] hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[#E0E1DD] hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

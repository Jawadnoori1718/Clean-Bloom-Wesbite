import React from 'react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTiktok, 
  FaArrowUp, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFilePdf 
} from 'react-icons/fa';
import { SiX } from 'react-icons/si';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative pt-12">
      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 hover:-translate-y-1"
      >
        <FaArrowUp className="text-xl" />
      </button>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-500 mb-4">Contact Us</h3>
            <div className="flex items-start space-x-3 group">
              <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
              <p className="group-hover:text-orange-400 transition-colors">
                61 Bridlington Street<br/>
                Nottingham, NG7 5BG
              </p>
            </div>
            <div className="flex items-center space-x-3 group">
              <FaPhone className="text-orange-500" />
              <a href="tel:+447375353193" className="hover:text-orange-400 transition-colors">
                (+44) 737 535 3193
              </a>
            </div>
            <div className="flex items-center space-x-3 group">
              <FaEnvelope className="text-orange-500" />
              <a href="mailto:info@cleanbloom.co.uk" className="hover:text-orange-400 transition-colors">
                info@cleanbloom.co.uk
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-500 mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {['Areas Covered', 'Become a Franchisee', 'COVID-19 Updates', 'Client Handbook'].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="block hover:text-orange-400 transition-colors group"
                >
                  <span className="group-hover:ml-2 transition-all duration-300">{link}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-500 mb-4">Resources</h3>
            <div className="space-y-2">
              {['Terms & Conditions', 'Privacy Notice', 'Cleaner Handbook', 'Key Receipt Form'].map((doc) => (
                <a 
                  key={doc} 
                  href="#" 
                  className="flex items-center space-x-2 hover:text-orange-400 transition-colors group"
                >
                  <FaFilePdf className="text-orange-500" />
                  <span className="group-hover:underline">{doc}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <FaFacebook />, color: '#1877F2', name: 'Facebook' },
                  { icon: <FaInstagram />, color: '#E1306C', name: 'Instagram' },
                  { icon: <SiX />, color: '#000000', name: 'X' },
                  { icon: <FaTiktok />, color: '#000000', name: 'TikTok' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                    style={{ color: social.color }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Legal</h3>
              <p className="text-sm">
                © 2024 Clean Bloom Ltd.<br/>
                All rights reserved
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 mt-8">
          <div className="text-center text-sm text-gray-500">
            <p>Template & Content © 2010-2025 Dofollow Ltd</p>
            <div className="mt-2 flex justify-center space-x-4">
              <span>ITC</span>
              <span>Cloudy</span>
              <span>ENG</span>
              <span>22:07 20/04/2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
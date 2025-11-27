import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavLink } from '../types';
import { LOGO_URL } from '../constants';

interface HeaderProps {
  navLinks: NavLink[];
  whatsappLink: string;
}

const Header: React.FC<HeaderProps> = ({ navLinks, whatsappLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-md z-50 border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-3">
             <img 
              src={LOGO_URL} 
              alt="IB House 02 Enterprises" 
              className="h-16 w-auto object-contain"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-amber-500 transition-colors duration-300 font-medium tracking-wide">
                {link.label}
              </a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-lg shadow-amber-900/20">
              Book Now
            </a>
          </nav>

          <button 
            className="md:hidden text-gray-300 hover:text-amber-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-gray-950/95 absolute top-24 left-0 w-full border-b border-gray-800">
            <nav className="flex flex-col space-y-4 pt-4 px-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-gray-300 hover:text-amber-500 transition-colors py-3 rounded-md text-center hover:bg-gray-900">
                  {link.label}
                </a>
              ))}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-full font-semibold transition-colors text-center shadow-lg">
                Book Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

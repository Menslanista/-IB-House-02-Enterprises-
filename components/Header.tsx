import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavLink } from '../types';
import { LOGO_URL } from '../constants';

interface HeaderProps {
  navLinks: NavLink[];
  whatsappLink: string;
}

const Header: React.FC<HeaderProps> = ({ navLinks, whatsappLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Determine header classes based on scroll state and menu state
  const headerBackground = isScrolled || isMenuOpen 
    ? 'bg-gray-950/95 shadow-md border-amber-900/30 backdrop-blur-md' 
    : 'bg-transparent border-transparent';

  const headerPadding = isScrolled ? 'py-0' : 'py-2';

  return (
    <header className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${headerBackground} ${headerPadding}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 transition-all duration-300">
          <div className="flex items-center space-x-3">
             <img 
              src={LOGO_URL} 
              alt="IB House 02 Enterprises" 
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-300 hover:text-amber-500 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
              >
                {link.label}
              </a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-lg shadow-amber-900/20 text-sm">
              Book Now
            </a>
          </nav>

          <button 
            className="md:hidden text-gray-300 hover:text-amber-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-gray-950/95 border-b border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 py-6 px-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-gray-300 hover:text-amber-500 transition-colors py-2 text-center text-lg font-medium">
                {link.label}
              </a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-full font-semibold transition-colors text-center shadow-lg mx-4 mt-2">
              Book Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
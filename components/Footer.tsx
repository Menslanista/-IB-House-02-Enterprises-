import React from 'react';
import { Share2, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import type { NavLink } from '../types';
import { SOCIAL_LINKS, LOGO_URL } from '../constants';

interface FooterProps {
  navLinks: NavLink[];
}

const Footer: React.FC<FooterProps> = ({ navLinks }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ibhouse02.com';

  const shareLinks = [
    {
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      label: 'Share on Facebook',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check+out+IB+House+02+Enterprises+for+luxury+short+stays+in+Lagos!`,
      label: 'Share on Twitter',
      color: 'hover:bg-sky-500'
    },
    {
      icon: LinkIcon,
      href: '#',
      label: 'Copy Link',
      color: 'hover:bg-gray-600',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(currentUrl);
        alert('Link copied to clipboard!');
      }
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={LOGO_URL} alt="IB House 02" className="h-12 w-auto" />
              <span className="text-xl font-bold tracking-wider text-white">IB HOUSE 02</span>
            </div>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              Premium short-stay accommodations in the heart of Lagos. Experience the perfect blend of luxury, security, and comfort at 2 Jehovah Street.
            </p>
            
            <div className="space-y-4">
              <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Follow Us</h5>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <a 
                    key={social.label} 
                    href={social.href} 
                    className="bg-gray-900 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-amber-600 transition-all duration-300 transform hover:scale-110 border border-gray-800"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-amber-600 inline-block pb-1">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {navLinks.map(link => (
                 <li key={link.href}>
                   <a href={link.href} className="hover:text-amber-500 transition-colors flex items-center group">
                     <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                     {link.label}
                   </a>
                 </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-amber-600 inline-block pb-1">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold mt-1">•</span>
                <span>2 Jehovah Street<br/>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <span className="text-amber-600 mr-2 font-bold">•</span>
                <span>+234 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center">
                <span className="text-amber-600 mr-2 font-bold">•</span>
                <span>info@ibhouse02.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Share Section & Copyright */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IB House 02 Enterprises. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 bg-gray-900/50 py-2 px-4 rounded-full border border-gray-800">
            <span className="text-gray-500 text-sm font-medium flex items-center">
              <Share2 size={14} className="mr-2" /> Share this page:
            </span>
            {shareLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={link.onClick}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 hover:text-white p-1.5 rounded-full transition-colors ${link.color}`}
                title={link.label}
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
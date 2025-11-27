
import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';

interface HeroProps {
  whatsappLink: string;
}

const Hero: React.FC<HeroProps> = ({ whatsappLink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, index) => (
          <img 
            key={src}
            src={src} 
            alt="IB House 02 Enterprises" 
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
            Experience Luxury Living in Lagos
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Premium short-stay apartments at IB House 02 Enterprises, 2 Jehovah Street, Lagos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-transform duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
              Book Your Stay
            </a>
            <a href="#rooms" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
              Explore Rooms
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-amber-400 scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

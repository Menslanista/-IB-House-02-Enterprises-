import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Features from './components/Features';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';
import { NAV_LINKS, ROOM_TYPES, AMENITIES, TESTIMONIALS, WHATSAPP_LINK, FEATURES_LIST } from './constants';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen font-sans selection:bg-amber-500 selection:text-black transition-colors duration-300 ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header 
        navLinks={NAV_LINKS} 
        whatsappLink={WHATSAPP_LINK} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />
      <main>
        <Hero whatsappLink={WHATSAPP_LINK} />
        
        <RevealOnScroll>
          <Rooms roomTypes={ROOM_TYPES} whatsappLink={WHATSAPP_LINK} />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Features features={FEATURES_LIST} />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Amenities amenities={AMENITIES} />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Testimonials testimonials={TESTIMONIALS} />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Contact whatsappLink={WHATSAPP_LINK} />
        </RevealOnScroll>
      </main>
      <Footer navLinks={NAV_LINKS} />
    </div>
  );
};

export default App;
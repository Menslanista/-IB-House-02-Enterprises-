import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Features from './components/Features';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NAV_LINKS, ROOM_TYPES, AMENITIES, TESTIMONIALS, WHATSAPP_LINK, FEATURES_LIST } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-amber-500 selection:text-black">
      <Header navLinks={NAV_LINKS} whatsappLink={WHATSAPP_LINK} />
      <main>
        <Hero whatsappLink={WHATSAPP_LINK} />
        <Rooms roomTypes={ROOM_TYPES} whatsappLink={WHATSAPP_LINK} />
        <Features features={FEATURES_LIST} />
        <Amenities amenities={AMENITIES} />
        <Testimonials testimonials={TESTIMONIALS} />
        <Contact whatsappLink={WHATSAPP_LINK} />
      </main>
      <Footer navLinks={NAV_LINKS} />
    </div>
  );
};

export default App;
import React from 'react';
import { ArrowRight, Wifi, Monitor, Coffee } from 'lucide-react';
import type { RoomType } from '../types';

interface RoomsProps {
  roomTypes: RoomType[];
  whatsappLink: string;
}

const Rooms: React.FC<RoomsProps> = ({ roomTypes, whatsappLink }) => {
  return (
    <section id="rooms" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Accommodations</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Sanctuary</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Each room is a masterpiece of design, offering the perfect blend of luxury, technology, and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room) => (
            <div key={room.name} className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10">
              <div className="relative overflow-hidden h-72">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 z-10 transition-colors duration-500"></div>
                <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent h-24 z-20"></div>
                <div className="absolute top-4 right-4 z-20 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {room.price} <span className="text-xs font-normal opacity-90">/ Night</span>
                </div>
              </div>
              
              <div className="p-8 relative z-30 -mt-6">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">{room.name}</h3>
                
                <div className="space-y-4 mb-8">
                  {room.features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex items-center text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full flex items-center justify-center bg-gray-800 hover:bg-amber-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 group/btn border border-gray-700 hover:border-amber-500"
                >
                  Book Now 
                  <ArrowRight size={18} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;

import React from 'react';
import type { Amenity } from '../types';

interface AmenitiesProps {
  amenities: Amenity[];
}

const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  return (
    <section id="amenities" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            Premium Amenities
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need for a comfortable and secure stay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.name} className="text-center p-8 bg-gray-900 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <amenity.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{amenity.name}</h3>
              <p className="text-gray-400">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;

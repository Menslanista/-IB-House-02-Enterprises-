import React from 'react';
import type { Amenity } from '../types';

interface AmenitiesProps {
  amenities: Amenity[];
}

const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  return (
    <section id="amenities" className="py-24 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-300 dark:to-amber-500 bg-clip-text text-transparent">
            Premium Amenities
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need for a comfortable and secure stay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.name} className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg dark:shadow-none">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white">
                <amenity.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{amenity.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
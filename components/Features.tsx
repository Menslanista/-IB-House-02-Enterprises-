import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import type { FeatureItem } from '../types';

interface FeaturesProps {
  features: FeatureItem[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFeature = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Zap className="text-amber-500" />;
      case 1: return <ShieldCheck className="text-amber-500" />;
      case 2: return <Sparkles className="text-amber-500" />;
      default: return <Star className="text-amber-500" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Choose <br />
              <span className="bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-200 dark:to-amber-600 bg-clip-text text-transparent">IB House 02?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We go beyond standard accommodation to provide a lifestyle. Our facility is designed with your absolute comfort and security in mind, ensuring a seamless experience from check-in to check-out.
            </p>
            <div className="hidden lg:block bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-sm dark:shadow-none">
                <div className="flex items-center space-x-2 text-amber-500 mb-2">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                </div>
                <p className="text-gray-900 dark:text-white font-semibold text-lg">"The best short-stay experience in Lagos."</p>
                <p className="text-gray-500 text-sm mt-1">Rated 5-Star by over 500 guests</p>
            </div>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-gray-50 dark:bg-gray-800 border-amber-500/50 shadow-lg shadow-amber-900/10' 
                    : 'bg-white dark:bg-gray-800/30 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/80'
                }`}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                  onClick={() => toggleFeature(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${openIndex === index ? 'bg-amber-500/10' : 'bg-gray-100 dark:bg-gray-700/50 group-hover:bg-gray-200 dark:group-hover:bg-gray-700'}`}>
                       {getIcon(index)}
                    </div>
                    <span className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-amber-600 dark:text-amber-400' : 'text-gray-900 dark:text-gray-200 group-hover:text-amber-600 dark:group-hover:text-white'}`}>
                      {feature.title}
                    </span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="text-amber-500 dark:text-amber-400 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="text-gray-400 dark:text-gray-500 group-hover:text-amber-500 dark:group-hover:text-amber-200 transition-transform duration-300" />
                  )}
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 pl-[5.5rem] text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
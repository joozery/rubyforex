import React from 'react';

const BrandBanner = () => {
  return (
    <section className="py-4 bg-gradient-to-r from-red-900 via-red-800 to-black relative overflow-hidden">
      {/* Animated Text Banner */}
      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Repeat the text multiple times for seamless scrolling */}
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <span className="text-xl md:text-2xl lg:text-3xl font-black text-gray-200 opacity-40">
                RUBY FOREX
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Overlay gradient for fade effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-transparent to-black pointer-events-none"></div>
    </section>
  );
};

export default BrandBanner;

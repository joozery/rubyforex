import { useMemo, useState, useEffect, useRef } from 'react';

// Interactive 3D background component
const BackgroundImage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (imageLoaded) {
      const fadeIn = setInterval(() => {
        setOpacity(prev => {
          if (prev >= 1) {
            clearInterval(fadeIn);
            return 1;
          }
          return prev + 0.02;
        });
      }, 50);

      return () => clearInterval(fadeIn);
    }
  }, [imageLoaded]);

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;
      
      setMousePosition({ x: deltaX * 20, y: deltaY * 20 });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      className="w-full h-full flex items-center justify-center transition-all duration-1000"
      style={{
        opacity: opacity,
      }}
    >
      <div
        ref={imageRef}
        className="bg-cover bg-center bg-no-repeat rounded-3xl transition-all duration-300 cursor-pointer interactive-3d-object"
        style={{
          backgroundImage: 'url(https://i.postimg.cc/XYwvXN8D/img-4.png)',
          width: window.innerWidth < 640 ? '280px' : window.innerWidth < 768 ? '320px' : '350px',
          height: window.innerWidth < 640 ? '280px' : window.innerWidth < 768 ? '320px' : '350px',
          filter: `brightness(${isHovered ? '1.2' : '1.1'}) contrast(${isHovered ? '1.3' : '1.2'}) saturate(0.9)`,
          transform: `
            perspective(1000px)
            rotateY(${mousePosition.x}deg)
            rotateX(${-mousePosition.y}deg)
            scale(${isHovered ? '1.05' : '1'})
            translateZ(${isHovered ? '20px' : '0px'})
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
};

export const HeroFuturistic = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] relative overflow-hidden hero-gradient-bg pt-16 sm:pt-20 lg:pt-0">
      
      {/* 3D Wave Generator Effects */}
      <div className="absolute inset-0 wave-3d-container">
        <div className="wave-3d-layer wave-layer-1"></div>
        <div className="wave-3d-layer wave-layer-2"></div>
        <div className="wave-3d-layer wave-layer-3"></div>
        <div className="wave-particles"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-center min-h-[calc(70vh-4rem)] sm:min-h-[80vh] lg:min-h-[90vh] pb-4 sm:pb-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl w-full">
          
          {/* Left Content */}
          <div className={`space-y-6 sm:space-y-8 text-center lg:text-left ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
                  RUBY
                </span>
                <br />
                <span className="text-gray-800">FOREX</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                เทรดฟอเร็กซ์อย่างมืออาชีพ<br />
                <span className="text-red-600 font-semibold">ด้วยเทคโนโลยีล้ำสมัย</span>
              </p>
            </div>

            {/* Stats with Stagger Animation */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4">
              <div className="text-center stats-item">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-xs text-gray-600">Active Traders</div>
              </div>
              <div className="text-center stats-item">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
              <div className="text-center stats-item">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">0.1s</div>
                <div className="text-xs text-gray-600">Execution</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <button className="modern-cta-primary group w-full sm:w-auto">
                <span>เริ่มเทรดเลย</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="modern-cta-secondary w-full sm:w-auto">
                <span>ดูข้อมูลเพิ่มเติม</span>
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative order-first lg:order-last ${isLoaded ? 'animate-fade-in-right' : 'opacity-0'} delay-200 mb-4 lg:mb-0`}>
            <div className="relative flex justify-center lg:justify-end">
              {/* Main 3D Image */}
              <div className="relative z-10 scale-75 sm:scale-85 md:scale-90 lg:scale-95 xl:scale-100">
                <BackgroundImage />
              </div>
              
              {/* Interactive Floating Cards - Hidden on small screens */}
              <div className="hidden sm:block absolute -top-4 sm:-top-8 -right-4 sm:-right-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 animate-float border border-gray-100 floating-card cursor-pointer">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-900">EUR/USD</div>
                    <div className="text-xs text-green-600 font-medium">+0.25%</div>
                  </div>
                </div>
                <div className="mt-1 sm:mt-2 text-xs text-gray-400">Live Rate</div>
              </div>

              <div className="hidden sm:block absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 animate-float delay-1000 border border-gray-100 floating-card cursor-pointer">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center animate-bounce-slow">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-900">Portfolio</div>
                    <div className="text-xs text-gray-500 font-medium">$125,430</div>
                  </div>
                </div>
                <div className="mt-1 sm:mt-2 text-xs text-gray-400">Total Value</div>
              </div>

              {/* Additional floating elements - Simplified for mobile */}
              <div className="hidden lg:block absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping opacity-75"></div>
              <div className="hidden lg:block absolute bottom-1/4 right-1/3 w-1 h-1 bg-red-300 rounded-full animate-pulse delay-500"></div>
              <div className="hidden lg:block absolute top-1/3 right-1/5 w-3 h-3 bg-red-200 rounded-full animate-bounce delay-1000 opacity-60"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroFuturistic;

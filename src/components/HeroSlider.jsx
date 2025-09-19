import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Shield, Award, Zap, Instagram, Facebook, Twitter, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import mbImage from '@/assets/mb.png';

const slides = [
  {
    id: 1,
    imageDescription: "A modern trading dashboard on multiple screens showing financial charts and data",
    alt: "Modern trading dashboard with financial charts",
    content: {
      th: {
        title: 'เทรด Forex กับโบรกเกอร์ชั้นนำ',
        subtitle: 'เริ่มต้นการเทรดของคุณวันนี้ด้วยแพลตฟอร์มที่เชื่อถือได้',
      },
      en: {
        title: 'Trade Forex with a Leading Broker',
        subtitle: 'Start your trading journey today with our trusted platform.',
      },
    },
  },
  {
    id: 2,
    imageDescription: "A professional discussing stock market trends on a large digital screen",
    alt: "Professional discussing stock market trends",
    content: {
      th: {
        title: 'เข้าถึงตลาดโลกได้จากทุกที่',
        subtitle: 'เทรดสินทรัพย์กว่า 1,000+ รายการ ทั้ง Forex, หุ้น, และ Crypto',
      },
      en: {
        title: 'Access Global Markets, Anywhere',
        subtitle: 'Trade 1000+ assets including Forex, Stocks, and Crypto.',
      },
    },
  },
  {
    id: 3,
    imageDescription: "Close-up of a smartphone displaying a mobile trading application with graphs",
    alt: "Mobile trading application on a smartphone",
    content: {
      th: {
        title: 'เทรดได้ทุกที่ ทุกเวลา',
        subtitle: 'ด้วยแอปพลิเคชันมือถือที่ทันสมัยและใช้งานง่าย',
      },
      en: {
        title: 'Trade Anytime, Anywhere',
        subtitle: 'With our modern and user-friendly mobile application.',
      },
    },
  },
];

const HeroSlider = ({ language }) => {
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const handleAction = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const commonContent = {
    th: {
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry\'s standard dummy text',
      exploreNow: 'Explore Now',
      scrollDown: 'Scroll down to discover more',
      socialMedia: {
        instagram: 'Instagram',
        facebook: 'Facebook', 
        twitter: 'Twitter',
        linkedin: 'Linked in'
      }
    },
    en: {
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry\'s standard dummy text',
      exploreNow: 'Explore Now',
      scrollDown: 'Scroll down to discover more',
      socialMedia: {
        instagram: 'Instagram',
        facebook: 'Facebook',
        twitter: 'Twitter', 
        linkedin: 'Linked in'
      }
    }
  };

  const t = commonContent[language];
  const slideContent = slides[currentSlide].content[language];

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-red-900">
        {/* Trading Chart Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 38, 38, 0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Animated candlestick chart */}
            <g className="opacity-30">
              {Array.from({ length: 50 }).map((_, i) => {
                const x = 100 + i * 20;
                const open = 200 + Math.sin(i * 0.3) * 100;
                const close = open + (Math.random() - 0.5) * 80;
                const high = Math.max(open, close) + Math.random() * 40;
                const low = Math.min(open, close) - Math.random() * 40;
                const isGreen = close > open;
                
                return (
                  <motion.g key={i}>
                    {/* Wick */}
                    <motion.line
                      x1={x}
                      y1={low}
                      x2={x}
                      y2={high}
                      stroke={isGreen ? "#10b981" : "#ef4444"}
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                    />
                    {/* Body */}
                    <motion.rect
                      x={x - 6}
                      y={Math.min(open, close)}
                      width="12"
                      height={Math.abs(close - open)}
                      fill={isGreen ? "#10b981" : "#ef4444"}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: i * 0.05 + 0.2, duration: 0.3 }}
                      transformOrigin="center"
                    />
                  </motion.g>
                );
              })}
            </g>
            
            {/* Moving average lines */}
            <motion.path
              d="M 100,300 Q 300,250 500,280 T 900,320 T 1100,300"
              fill="none"
              stroke="rgba(220, 38, 38, 0.6)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2, duration: 2 }}
            />
            <motion.path
              d="M 100,350 Q 300,320 500,340 T 900,360 T 1100,350"
              fill="none"
              stroke="rgba(16, 185, 129, 0.6)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2.5, duration: 2 }}
            />
          </svg>
        </div>
        
        {/* Floating data points */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                scale: 0
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
              className="absolute w-2 h-2 bg-red-500 rounded-full"
            />
          ))}
        </div>
        
        {/* Volume bars */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          {Array.from({ length: 30 }).map((_, i) => {
            const height = Math.random() * 100 + 20;
            return (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: height }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="absolute bottom-0 bg-gradient-to-t from-red-500 to-transparent"
                style={{
                  left: `${i * 3.33}%`,
                  width: '2%',
                  height: `${height}px`
                }}
              />
            );
          })}
        </div>
        
        {/* Price indicators */}
        <div className="absolute top-20 right-20 text-red-500/60 font-mono text-sm">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mb-2"
          >
            <span className="text-green-400">EUR/USD</span> 1.0845
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mb-2"
          >
            <span className="text-red-400">GBP/USD</span> 1.2654
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <span className="text-blue-400">USD/JPY</span> 149.23
          </motion.div>
        </div>
      </div>

      {/* Social Media Sidebar */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col space-y-8 text-gray-400">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="group cursor-pointer"
          >
            <div className="writing-mode-vertical text-xs tracking-[0.3em] font-light group-hover:text-red-500 transition-all duration-300 relative">
              {t.socialMedia.instagram}
              <div className="absolute -right-2 top-0 w-0.5 h-full bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            className="group cursor-pointer"
          >
            <div className="writing-mode-vertical text-xs tracking-[0.3em] font-light group-hover:text-red-500 transition-all duration-300 relative">
              {t.socialMedia.facebook}
              <div className="absolute -right-2 top-0 w-0.5 h-full bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            className="group cursor-pointer"
          >
            <div className="writing-mode-vertical text-xs tracking-[0.3em] font-light group-hover:text-red-500 transition-all duration-300 relative">
              {t.socialMedia.twitter}
              <div className="absolute -right-2 top-0 w-0.5 h-full bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            className="group cursor-pointer"
          >
            <div className="writing-mode-vertical text-xs tracking-[0.3em] font-light group-hover:text-red-500 transition-all duration-300 relative">
              {t.socialMedia.linkedin}
              <div className="absolute -right-2 top-0 w-0.5 h-full bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 60 }}
              className="text-white"
            >
              {/* Main Title */}
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="relative"
                >
                  <h1 className="text-7xl lg:text-9xl font-black leading-none">
                    <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                      RubyFX
                    </span>
                  </h1>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-red-500 to-red-700 origin-left"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex items-center mt-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                    className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center"
                  >
                    <span className="text-3xl lg:text-4xl font-bold">Ξ</span>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Subtitle */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-2xl lg:text-3xl font-light text-gray-300 mb-8 tracking-wide"
              >
                Follow Markets.
              </motion.h2>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-gray-400 text-lg mb-12 max-w-2xl leading-relaxed font-light"
              >
                {t.description}
              </motion.p>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="relative group"
              >
                <Button
                  onClick={handleAction}
                  size="lg"
                  className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg px-12 py-6 rounded-full font-semibold transition-all duration-300 group-hover:scale-105"
                >
                  <span className="relative z-10">{t.exploreNow}</span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right 3D Graphics */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 60 }}
              className="relative h-96 lg:h-[600px] flex items-center justify-center"
            >
              {/* MB Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 1, duration: 1.5, type: "spring" }}
                className="relative"
              >
                <img 
                  src={mbImage} 
                  alt="Mobile Trading App" 
                  className="w-96 h-auto lg:w-[500px] lg:h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center group cursor-pointer">
          <motion.span 
            className="text-sm text-gray-400 mb-3 tracking-wider font-light group-hover:text-red-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {t.scrollDown}
          </motion.span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-6 border-2 border-red-500 rounded-full flex items-center justify-center group-hover:border-red-400 transition-colors duration-300"
          >
            <ChevronDown className="w-4 h-4 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSlider;
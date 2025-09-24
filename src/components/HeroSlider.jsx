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
    window.open('https://client.rubyfxtrade.com/register/trader', '_blank');
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
    <section className="relative min-h-screen w-full overflow-hidden bg-white pt-20">
      {/* Minimalist Background */}
      <div className="absolute inset-0">
        {/* Subtle geometric elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-gray-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-red-50 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-red-600 rounded-full opacity-60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Minimalist Layout */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-900"
            >
              {/* Page Number */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm text-gray-400 mb-8"
              >
                01
              </motion.div>

              {/* Year */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-sm text-gray-400 mb-12"
              >
                2024
              </motion.div>

              {/* Main Title - Large and Bold */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-7xl lg:text-8xl font-black text-gray-900 leading-none">
                  <span className="block">Ruby</span>
                  <span className="block text-red-600">-FX</span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-2xl font-medium text-gray-800 mb-6"
              >
                Trading with confidence
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-gray-500 text-sm leading-relaxed max-w-md mb-12"
              >
                Professional trading platform with advanced analytics, low spreads, and 24/7 support. Join thousands of successful traders worldwide.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Button
                  onClick={handleAction}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-none font-medium transition-colors duration-200"
                >
                  Start Trading
                </Button>
              </motion.div>

              {/* Bottom Section - Trading Culture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-16"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Trading culture</h3>
                <p className="text-lg text-gray-600">Get back to basics</p>
              </motion.div>
            </motion.div>

            {/* Right Side - Minimalist Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-96 lg:h-[600px] flex items-center justify-center"
            >
              {/* Large Number - Graphic Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 1, type: "spring" }}
                className="absolute top-0 right-0 text-9xl lg:text-[12rem] font-black text-red-600 opacity-20 select-none"
                style={{ transform: 'rotate(15deg)' }}
              >
                24
              </motion.div>

              {/* Vertical Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute right-0 top-1/2 -translate-y-1/2"
              >
                <div className="text-xs text-gray-400 transform rotate-90 origin-center whitespace-nowrap">
                  Everything is the key to successful trading
                </div>
              </motion.div>

              {/* Small Detail Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-20 right-20 w-32 h-20 bg-gray-50 border border-gray-200 rounded-lg p-3"
              >
                <div className="w-full h-full bg-gradient-to-br from-red-50 to-red-100 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs text-gray-600 font-medium">Live</div>
                    <div className="text-xs text-red-600 font-bold">Trading</div>
                  </div>
                </div>
              </motion.div>

              {/* Small Graphic Accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="absolute bottom-8 right-8 w-6 h-6 bg-red-600 rounded-full"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Minimalist Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center group cursor-pointer">
          <motion.span 
            className="text-xs text-gray-400 mb-4 group-hover:text-gray-600 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
          >
            Scroll to explore
          </motion.span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-400 transition-colors duration-200"
          >
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSlider;
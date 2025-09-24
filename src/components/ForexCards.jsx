import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ForexCards = ({ language }) => {
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  const content = {
    th: {
      buyNow: 'ซื้อเลย',
      title: 'คู่สกุลเงินยอดนิยม',
      categories: {
        all: 'ทั้งหมด',
        major: 'คู่หลัก',
        minor: 'คู่รอง',
        exotic: 'คู่แปลก'
      }
    },
    en: {
      buyNow: 'Buy Now',
      title: 'Popular Currency Pairs',
      categories: {
        all: 'All',
        major: 'Major',
        minor: 'Minor',
        exotic: 'Exotic'
      }
    }
  };

  const t = content[language];

  const forexPairs = [
    {
      id: 1,
      symbol: 'EUR/USD',
      name: 'Euro / US Dollar',
      price: '1.0845',
      change: '+0.0025',
      changePercent: '+0.23%',
      volume: '2.1B',
      trend: 'up',
      color: 'green',
      category: 'major'
    },
    {
      id: 2,
      symbol: 'GBP/USD',
      name: 'British Pound / US Dollar',
      price: '1.2654',
      change: '-0.0089',
      changePercent: '-0.70%',
      volume: '1.8B',
      trend: 'down',
      color: 'yellow',
      category: 'major'
    },
    {
      id: 3,
      symbol: 'USD/JPY',
      name: 'US Dollar / Japanese Yen',
      price: '149.23',
      change: '+0.45',
      changePercent: '+0.30%',
      volume: '1.5B',
      trend: 'up',
      color: 'green',
      category: 'major'
    },
    {
      id: 4,
      symbol: 'AUD/USD',
      name: 'Australian Dollar / US Dollar',
      price: '0.6523',
      change: '+0.0012',
      changePercent: '+0.18%',
      volume: '1.2B',
      trend: 'up',
      color: 'green',
      category: 'major'
    },
    {
      id: 5,
      symbol: 'USD/CAD',
      name: 'US Dollar / Canadian Dollar',
      price: '1.3789',
      change: '-0.0034',
      changePercent: '-0.25%',
      volume: '0.9B',
      trend: 'down',
      color: 'yellow',
      category: 'major'
    },
    {
      id: 6,
      symbol: 'NZD/USD',
      name: 'New Zealand Dollar / US Dollar',
      price: '0.5923',
      change: '+0.0008',
      changePercent: '+0.14%',
      volume: '0.7B',
      trend: 'up',
      color: 'green',
      category: 'minor'
    },
    {
      id: 7,
      symbol: 'USD/CHF',
      name: 'US Dollar / Swiss Franc',
      price: '0.8756',
      change: '-0.0012',
      changePercent: '-0.14%',
      volume: '0.6B',
      trend: 'down',
      color: 'yellow',
      category: 'minor'
    },
    {
      id: 8,
      symbol: 'EUR/GBP',
      name: 'Euro / British Pound',
      price: '0.8578',
      change: '+0.0023',
      changePercent: '+0.27%',
      volume: '0.5B',
      trend: 'up',
      color: 'green',
      category: 'minor'
    },
    {
      id: 9,
      symbol: 'GBP/JPY',
      name: 'British Pound / Japanese Yen',
      price: '188.45',
      change: '-1.23',
      changePercent: '-0.65%',
      volume: '0.4B',
      trend: 'down',
      color: 'yellow',
      category: 'minor'
    },
    {
      id: 10,
      symbol: 'EUR/JPY',
      name: 'Euro / Japanese Yen',
      price: '161.78',
      change: '+0.89',
      changePercent: '+0.55%',
      volume: '0.3B',
      trend: 'up',
      color: 'green',
      category: 'minor'
    }
  ];

  const handleBuyClick = (pair) => {
    toast({
      title: `🚧 ${pair.symbol} trading feature coming soon! 🚀`
    });
  };

  // Filter forex pairs based on active category
  const filteredPairs = activeCategory === 'all' 
    ? forexPairs 
    : forexPairs.filter(pair => pair.category === activeCategory);

  // Update slides based on filtered data
  const totalSlides = Math.ceil(filteredPairs.length / 4);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  // Reset current slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeCategory]);

  const generateChartData = (trend) => {
    const points = 15;
    const data = [];
    let baseValue = trend === 'up' ? 0.4 : 0.6;
    
    for (let i = 0; i < points; i++) {
      const variation = (Math.random() - 0.5) * 0.15;
      const trendFactor = trend === 'up' ? i * 0.03 : -i * 0.03;
      const value = Math.max(0.2, Math.min(0.8, baseValue + variation + trendFactor));
      data.push({
        x: (i / (points - 1)) * 100,
        y: (1 - value) * 100
      });
    }
    return data;
  };

  const createPath = (data) => {
    return data.map((point, index) => 
      `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
    ).join(' ');
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 60 60">
            <defs>
              <pattern id="forexGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#forexGrid)" className="text-gray-400"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'th' 
              ? 'เทรดคู่สกุลเงินยอดนิยมด้วยสเปรดต่ำและความเร็วสูง พร้อมเครื่องมือวิเคราะห์ขั้นสูง'
              : 'Trade popular currency pairs with low spreads and high speed, powered by advanced analytics'
            }
          </p>
        </motion.div>

        {/* Category Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="bg-gray-100 rounded-lg p-1">
            <div className="flex space-x-1">
              {Object.entries(t.categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveCategory(key);
                    setCurrentSlide(0);
                    setIsAutoPlaying(false);
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeCategory === key
                      ? 'bg-red-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              animate={{ x: -currentSlide * 100 + '%' }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredPairs.slice(slideIndex * 4, (slideIndex + 1) * 4).map((pair, index) => (
                      <motion.div
                        key={pair.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition-colors duration-200 group relative shadow-sm hover:shadow-md"
                      >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {pair.symbol.split('/')[0].slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold text-lg">{pair.symbol}</h3>
                    <p className="text-gray-600 text-sm">{pair.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 font-bold text-xl">${pair.price}</p>
                  <div className={`flex items-center space-x-1 ${
                    pair.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {pair.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">
                      {pair.changePercent}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="mb-4 h-16 bg-gray-50 rounded-lg p-3 relative overflow-hidden border border-gray-200">
                <svg className="w-full h-full" viewBox="0 0 100 60">
                  <defs>
                    <linearGradient id={`gradient-${pair.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={pair.trend === 'up' ? '#10b981' : '#f59e0b'} />
                      <stop offset="50%" stopColor={pair.trend === 'up' ? '#059669' : '#d97706'} />
                      <stop offset="100%" stopColor={pair.trend === 'up' ? '#047857' : '#b45309'} />
                    </linearGradient>
                    <filter id={`glow-${pair.id}`}>
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Grid lines */}
                  <g stroke="rgba(0,0,0,0.1)" strokeWidth="0.5">
                    <line x1="0" y1="20" x2="100" y2="20"/>
                    <line x1="0" y1="40" x2="100" y2="40"/>
                    <line x1="25" y1="0" x2="25" y2="60"/>
                    <line x1="50" y1="0" x2="50" y2="60"/>
                    <line x1="75" y1="0" x2="75" y2="60"/>
                  </g>
                  
                  <motion.path
                    d={createPath(generateChartData(pair.trend))}
                    fill="none"
                    stroke={`url(#gradient-${pair.id})`}
                    strokeWidth="3"
                    filter={`url(#glow-${pair.id})`}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, delay: index * 0.2, ease: "easeInOut" }}
                  />
                  
                  <motion.circle
                    cx="95"
                    cy={pair.trend === 'up' ? '15' : '45'}
                    r="4"
                    fill={pair.trend === 'up' ? '#10b981' : '#f59e0b'}
                    stroke="white"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2.5 + index * 0.2 }}
                  />
                </svg>
                
                {/* Chart overlay info */}
                <div className="absolute top-2 right-3 text-xs text-slate-500 font-semibold">
                  {pair.trend === 'up' ? '↗' : '↘'}
                </div>
              </div>

              {/* Premium Card Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/50">
                <div className="text-slate-600 text-sm">
                  <span className="text-slate-500">24H Vol: </span>
                  <span className="text-slate-900 font-semibold">{pair.volume}</span>
                </div>
                <div className="text-slate-600 text-sm">
                  <span className="text-slate-500">Spread: </span>
                  <span className="text-red-600 font-semibold">0.8 pips</span>
                </div>
              </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Premium Slide Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 scale-125 shadow-lg shadow-red-500/25' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexCards;

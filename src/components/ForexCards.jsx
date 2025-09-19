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
    <section className="py-20 bg-gradient-to-b from-red-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="forexGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 38, 38, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#forexGrid)" />
          </svg>
        </div>

        {/* Floating Trading Elements */}
        {Array.from({ length: 12 }).map((_, i) => (
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
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
            className="absolute"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              background: i % 3 === 0 ? 'rgba(220, 38, 38, 0.4)' : 'rgba(16, 185, 129, 0.4)',
              clipPath: i % 2 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(0% 0%, 100% 0%, 50% 100%)'
            }}
          />
        ))}

        {/* Animated Chart Lines */}
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <motion.path
              d="M 0,200 Q 300,150 600,180 T 1200,160"
              fill="none"
              stroke="rgba(220, 38, 38, 0.5)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M 0,400 Q 300,350 600,380 T 1200,360"
              fill="none"
              stroke="rgba(16, 185, 129, 0.5)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
            <motion.path
              d="M 0,600 Q 300,550 600,580 T 1200,560"
              fill="none"
              stroke="rgba(220, 38, 38, 0.4)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 2 }}
            />
          </svg>
        </motion.div>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-red-500 to-red-700 rounded-full blur-xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-green-500 to-green-700 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            {language === 'th' 
              ? 'เทรดคู่สกุลเงินยอดนิยมด้วยสเปรดต่ำและความเร็วสูง'
              : 'Trade popular currency pairs with low spreads and high speed'
            }
          </p>
        </motion.div>

        {/* Category Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-2xl p-1 shadow-lg">
            <div className="flex space-x-1">
              {Object.entries(t.categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveCategory(key);
                    setCurrentSlide(0);
                    setIsAutoPlaying(false);
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-black text-white shadow-lg'
                      : 'text-black hover:bg-black/10'
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
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
                        className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-red-500/40 transition-all duration-300 group relative overflow-hidden shadow-xl hover:shadow-2xl"
                      >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {pair.symbol.split('/')[0].slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg tracking-wide">{pair.symbol}</h3>
                    <p className="text-gray-400 text-sm font-medium">{pair.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-xl tracking-tight">${pair.price}</p>
                  <div className={`flex items-center space-x-2 ${
                    pair.trend === 'up' ? 'text-green-400' : 'text-yellow-400'
                  }`}>
                    {pair.trend === 'up' ? (
                      <TrendingUp className="w-5 h-5" />
                    ) : (
                      <TrendingDown className="w-5 h-5" />
                    )}
                    <span className="text-sm font-semibold">
                      {pair.changePercent}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="mb-6 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-3 relative overflow-hidden border border-gray-600/20">
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
                  <g stroke="rgba(255,255,255,0.1)" strokeWidth="0.5">
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
                <div className="absolute top-1 right-2 text-xs text-gray-400 font-medium">
                  {pair.trend === 'up' ? '↗' : '↘'}
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-600/30">
                <div className="text-gray-400 text-sm">
                  <span className="text-gray-500">24H Vol: </span>
                  <span className="text-white font-semibold">{pair.volume}</span>
                </div>
                <div className="text-gray-400 text-sm">
                  <span className="text-gray-500">Spread: </span>
                  <span className="text-green-400 font-semibold">0.8 pips</span>
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

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-red-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
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

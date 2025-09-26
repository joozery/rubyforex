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

  // Update slides based on filtered data - responsive cards per slide
  const [cardsPerSlide, setCardsPerSlide] = useState(4);
  
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(2); // Mobile: 2 cards
      } else {
        setCardsPerSlide(4); // Desktop: 4 cards
      }
    };
    
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);
  
  const totalSlides = Math.ceil(filteredPairs.length / cardsPerSlide);

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
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {filteredPairs.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide).map((pair, index) => (
                      <motion.div
                        key={pair.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg p-4 sm:p-5 border border-gray-100 hover:border-red-200 transition-all duration-300 group relative shadow-sm hover:shadow-md hover:-translate-y-0.5 min-h-[180px] sm:min-h-[200px]"
                      >
                        {/* Card Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                              <span className="text-white font-bold text-xs">
                                {pair.symbol.split('/')[0].slice(0, 2)}
                              </span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-gray-900 font-bold text-sm sm:text-base truncate">{pair.symbol}</h3>
                              <p className="text-gray-500 text-xs leading-tight line-clamp-2 sm:line-clamp-none">{pair.name}</p>
                            </div>
                          </div>
                          <div className="text-right min-w-0 flex-shrink-0">
                            <p className="text-gray-900 font-bold text-sm sm:text-lg truncate">${pair.price}</p>
                            <div className={`flex items-center justify-end space-x-1 ${
                              pair.trend === 'up' ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {pair.trend === 'up' ? (
                                <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                              ) : (
                                <TrendingDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                              )}
                              <span className="text-xs font-semibold truncate">
                                {pair.changePercent}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Mini Chart */}
                        <div className="mb-3 sm:mb-4 h-12 sm:h-16 bg-gray-50 rounded-lg p-2 sm:p-3 relative overflow-hidden border border-gray-200">
                          <svg className="w-full h-full" viewBox="0 0 100 50">
                            <defs>
                              <linearGradient id={`gradient-${pair.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor={pair.trend === 'up' ? '#10b981' : '#ef4444'} />
                                <stop offset="50%" stopColor={pair.trend === 'up' ? '#059669' : '#dc2626'} />
                                <stop offset="100%" stopColor={pair.trend === 'up' ? '#047857' : '#b91c1c'} />
                              </linearGradient>
                              <filter id={`glow-${pair.id}`}>
                                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                                <feMerge> 
                                  <feMergeNode in="coloredBlur"/>
                                  <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                              </filter>
                            </defs>
                            
                            {/* Grid lines for better visibility */}
                            <g stroke="rgba(0,0,0,0.1)" strokeWidth="0.5">
                              <line x1="0" y1="12.5" x2="100" y2="12.5"/>
                              <line x1="0" y1="25" x2="100" y2="25"/>
                              <line x1="0" y1="37.5" x2="100" y2="37.5"/>
                              <line x1="25" y1="0" x2="25" y2="50"/>
                              <line x1="50" y1="0" x2="50" y2="50"/>
                              <line x1="75" y1="0" x2="75" y2="50"/>
                            </g>
                            
                            <motion.path
                              d={createPath(generateChartData(pair.trend))}
                              fill="none"
                              stroke={`url(#gradient-${pair.id})`}
                              strokeWidth="2.5"
                              filter={`url(#glow-${pair.id})`}
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 2, delay: index * 0.1, ease: "easeInOut" }}
                            />
                            
                            <motion.circle
                              cx="95"
                              cy={pair.trend === 'up' ? '15' : '35'}
                              r="3"
                              fill={pair.trend === 'up' ? '#10b981' : '#ef4444'}
                              stroke="white"
                              strokeWidth="1.5"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.4, delay: 2 + index * 0.1 }}
                            />
                          </svg>
                        </div>

                        {/* Card Footer */}
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
                            <div className="text-gray-500 min-w-0">
                              <span className="text-gray-400">Vol: </span>
                              <span className="text-gray-700 font-semibold truncate">{pair.volume}</span>
                            </div>
                            <div className="text-gray-500 min-w-0">
                              <span className="text-gray-400">Spread: </span>
                              <span className="text-red-600 font-semibold truncate">0.8</span>
                            </div>
                          </div>
                          <div className="text-gray-400 text-sm flex-shrink-0 ml-2">
                            {pair.trend === 'up' ? '↗' : '↘'}
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
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

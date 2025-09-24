import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, BarChart3, Globe, Users, ChevronLeft, ChevronRight } from 'lucide-react';

// Import sample images
import forexAnalysisImg from '@/assets/news/forex-analysis.svg';
import cryptoTradingImg from '@/assets/news/crypto-trading.svg';
import marketInsightsImg from '@/assets/news/market-insights.svg';
import tradingPlatformImg from '@/assets/news/trading-platform.svg';

const News = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const content = {
    th: {
      title: 'ข่าวสารตลาด',
      subtitle: 'ข้อมูลและวิเคราะห์ตลาดล่าสุด',
      exploreMore: 'ดูเพิ่มเติม',
      categories: {
        all: 'ทั้งหมด',
        forex: 'Forex',
        crypto: 'Crypto',
        stocks: 'หุ้น',
        commodities: 'สินค้าโภคภัณฑ์'
      },
      services: {
        forexAnalysis: {
          title: 'การวิเคราะห์ Forex',
          description: 'วิเคราะห์แนวโน้มตลาด Forex และคู่สกุลเงินหลัก พร้อมข้อมูลเชิงลึกและคำแนะนำการเทรด',
          stats: '50+',
          statsLabel: 'คู่สกุลเงินที่วิเคราะห์'
        },
        cryptoTrading: {
          title: 'การเทรด Crypto',
          description: 'ติดตามข่าวสารและแนวโน้มของตลาดคริปโตเคอร์เรนซี พร้อมการวิเคราะห์เทคนิคและพื้นฐาน',
          stats: '100+',
          statsLabel: 'เหรียญที่ติดตาม'
        },
        marketInsights: {
          title: 'ข้อมูลตลาด',
          description: 'ข้อมูลเชิงลึกเกี่ยวกับตลาดการเงินทั่วโลก รวมถึงการวิเคราะห์เศรษฐกิจและการคาดการณ์',
          stats: '24/7',
          statsLabel: 'อัปเดตข้อมูลตลอดเวลา'
        },
        tradingPlatform: {
          title: 'แพลตฟอร์มเทรด',
          description: 'เครื่องมือและแพลตฟอร์มการเทรดขั้นสูง พร้อมฟีเจอร์ที่ช่วยให้การเทรดมีประสิทธิภาพมากขึ้น',
          stats: '99.9%',
          statsLabel: 'ความเสถียรของระบบ'
        }
      }
    },
    en: {
      title: 'Market News',
      subtitle: 'Latest market data and analysis',
      exploreMore: 'Explore more',
      categories: {
        all: 'All',
        forex: 'Forex',
        crypto: 'Crypto',
        stocks: 'Stocks',
        commodities: 'Commodities'
      },
      services: {
        forexAnalysis: {
          title: 'Forex Analysis',
          description: 'Analyze Forex market trends and major currency pairs with in-depth insights and trading recommendations',
          stats: '50+',
          statsLabel: 'Currency pairs analyzed'
        },
        cryptoTrading: {
          title: 'Crypto Trading',
          description: 'Track cryptocurrency market news and trends with technical and fundamental analysis',
          stats: '100+',
          statsLabel: 'Coins tracked'
        },
        marketInsights: {
          title: 'Market Insights',
          description: 'In-depth insights into global financial markets including economic analysis and forecasts',
          stats: '24/7',
          statsLabel: 'Real-time updates'
        },
        tradingPlatform: {
          title: 'Trading Platform',
          description: 'Advanced trading tools and platforms with features that enhance trading efficiency',
          stats: '99.9%',
          statsLabel: 'System reliability'
        }
      }
    }
  };

  const t = content[language];

  const serviceCards = [
    {
      id: 'forexAnalysis',
      title: t.services.forexAnalysis.title,
      description: t.services.forexAnalysis.description,
      stats: t.services.forexAnalysis.stats,
      statsLabel: t.services.forexAnalysis.statsLabel,
      image: forexAnalysisImg,
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      icon: TrendingUp
    },
    {
      id: 'cryptoTrading',
      title: t.services.cryptoTrading.title,
      description: t.services.cryptoTrading.description,
      stats: t.services.cryptoTrading.stats,
      statsLabel: t.services.cryptoTrading.statsLabel,
      image: cryptoTradingImg,
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      icon: BarChart3
    },
    {
      id: 'marketInsights',
      title: t.services.marketInsights.title,
      description: t.services.marketInsights.description,
      stats: t.services.marketInsights.stats,
      statsLabel: t.services.marketInsights.statsLabel,
      image: marketInsightsImg,
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-900',
      icon: Globe
    },
    {
      id: 'tradingPlatform',
      title: t.services.tradingPlatform.title,
      description: t.services.tradingPlatform.description,
      stats: t.services.tradingPlatform.stats,
      statsLabel: t.services.tradingPlatform.statsLabel,
      image: tradingPlatformImg,
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      icon: Users
    }
  ];

  const categories = Object.entries(t.categories).map(([key, label]) => ({
    key,
    label
  }));

  // Slider functions
  const nextSlide = () => {
    const maxSlides = Math.ceil(serviceCards.length / 3) - 1;
    setCurrentSlide(prev => prev < maxSlides ? prev + 1 : 0);
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(serviceCards.length / 3) - 1;
    setCurrentSlide(prev => prev > 0 ? prev - 1 : maxSlides);
  };

  // Get cards for current slide
  const getCurrentSlideCards = () => {
    const startIndex = currentSlide * 3;
    return serviceCards.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-gray-500 text-sm font-medium">
              {language === 'th' ? '/ ข่าวสาร /' : '/ News /'}
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            {t.subtitle}
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full">
              {t.exploreMore}
            </Button>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.key
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Service Cards Slider */}
        <div className="relative mb-12">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <motion.div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {/* Slide 1 - First 3 cards */}
              <div className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getCurrentSlideCards().map((card, index) => {
                    const IconComponent = card.icon;
                    return (
                      <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`${card.bgColor} rounded-2xl p-6 relative overflow-hidden group cursor-pointer h-80`}
                      >
                        {/* Background Image */}
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col">
                          <div className="flex-1">
                            <h3 className={`${card.textColor} text-xl font-bold mb-3`}>
                              {card.title}
                            </h3>
                            <p className={`${card.textColor} opacity-80 text-sm leading-relaxed mb-4`}>
                              {card.description}
                            </p>
                          </div>

                          {/* Stats and Action */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <IconComponent className={`${card.textColor} opacity-60 w-4 h-4 mr-2`} />
                              <span className={`${card.textColor} opacity-60 text-xs`}>
                                {language === 'th' ? 'เรียนรู้เพิ่มเติม' : 'Learn more'}
                              </span>
                            </div>
                            
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                            >
                              <ArrowRight className="w-4 h-4 text-gray-900" />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Slide 2 - Remaining cards */}
              {serviceCards.length > 3 && (
                <div className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Fourth Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="bg-gray-50 rounded-2xl p-6 relative overflow-hidden group cursor-pointer h-80"
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full border-4 border-gray-300"></div>
                          <div className="absolute w-20 h-20 rounded-full border-2 border-gray-300"></div>
                          <div className="absolute w-12 h-12 rounded-full border border-gray-300"></div>
                        </div>
                      </div>

                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-gray-900 text-xl font-bold mb-3">
                            {language === 'th' ? 'การวิเคราะห์ตลาด' : 'Market Analysis'}
                          </h3>
                          <div className="mb-4">
                            <div className="text-4xl font-bold text-red-500 mb-1">250+</div>
                            <div className="text-gray-600 text-sm">
                              {language === 'th' ? 'ผู้ใช้งานต่อวัน' : 'Active users every day'}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <BarChart3 className="text-gray-600 w-4 h-4 mr-2" />
                            <span className="text-gray-600 text-xs">
                              {language === 'th' ? 'เรียนรู้เพิ่มเติม' : 'Learn more'}
                            </span>
                          </div>
                          
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <ArrowRight className="w-4 h-4 text-white" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Fifth Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-gray-900 rounded-2xl p-6 relative overflow-hidden group cursor-pointer h-80"
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-24 h-24 rounded-lg border-2 border-white/20 transform rotate-45"></div>
                          <div className="absolute w-16 h-16 rounded-lg border border-white/20 transform rotate-45"></div>
                          <div className="absolute w-8 h-8 rounded-lg border border-white/20 transform rotate-45"></div>
                        </div>
                      </div>

                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-white text-xl font-bold mb-3">
                            RubyFX
                          </h3>
                          <div className="mb-4">
                            <div className="text-4xl font-bold text-red-400 mb-1">5★</div>
                            <div className="text-white/60 text-sm">
                              {language === 'th' ? 'แพลตฟอร์มเทรดชั้นนำ' : 'Leading Trading Platform'}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Users className="text-white/60 w-4 h-4 mr-2" />
                            <span className="text-white/60 text-xs">
                              {language === 'th' ? 'เรียนรู้เพิ่มเติม' : 'Learn more'}
                            </span>
                          </div>
                          
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <ArrowRight className="w-4 h-4 text-white" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          {serviceCards.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {serviceCards.length > 3 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(serviceCards.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom Section - Wide Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#f97316" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              <path
                d="M0,100 Q100,50 200,100 T400,100 L400,200 L0,200 Z"
                fill="url(#waveGrad)"
                stroke="url(#waveGrad)"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-white text-2xl font-bold mb-3">
                {language === 'th' ? 'ติดตามข่าวสารตลาด' : 'Stay Updated with Market News'}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                {language === 'th' 
                  ? 'รับข้อมูลข่าวสารและวิเคราะห์ตลาดล่าสุดผ่านช่องทางต่างๆ ของเรา'
                  : 'Get the latest market news and analysis through our various channels'
                }
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">M</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">S</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">T</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">B</span>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
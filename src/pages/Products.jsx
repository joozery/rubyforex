import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  Globe, 
  Users, 
  ArrowRight, 
  Star, 
  Shield, 
  Zap,
  Coins,
  Gem,
  Activity,
  Sparkles,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const content = {
    th: {
      title: 'ผลิตภัณฑ์การลงทุน',
      subtitle: 'เลือกจากผลิตภัณฑ์การเทรดที่หลากหลายและมีคุณภาพสูง',
      categories: {
        all: 'ทั้งหมด',
        forex: 'Forex',
        crypto: 'Crypto',
        metals: 'Metals',
        stocks: 'Stocks',
        index: 'Index',
        energy: 'Energy'
      },
      products: {
        forex: {
          title: 'Forex Trading',
          description: 'เทรดคู่สกุลเงินหลักและรองจากทั่วโลก',
          features: ['สเปรดต่ำ', 'เลเวอเรจสูง', 'ตลาด 24/7', 'ความเร็วสูง'],
          icon: TrendingUp,
          color: 'from-red-500 to-red-600',
          bgColor: 'from-red-50 to-red-100',
          examples: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD']
        },
        crypto: {
          title: 'Cryptocurrency',
          description: 'เทรดคริปโตเคอร์เรนซียอดนิยมด้วยความปลอดภัยสูง',
          features: ['เหรียญยอดนิยม', 'ความปลอดภัยสูง', 'ตลาด 24/7', 'ความผันผวนสูง'],
          icon: Coins,
          color: 'from-red-500 to-red-600',
          bgColor: 'from-red-50 to-red-100',
          examples: ['BTC/USD', 'ETH/USD', 'LTC/USD', 'XRP/USD']
        },
        metals: {
          title: 'Precious Metals',
          description: 'ลงทุนในทองคำ เงิน และโลหะมีค่าอื่นๆ',
          features: ['ทองคำ', 'เงิน', 'แพลตินัม', 'ความปลอดภัย'],
          icon: Gem,
          color: 'from-red-500 to-red-600',
          bgColor: 'from-red-50 to-red-100',
          examples: ['XAU/USD', 'XAG/USD', 'XPT/USD', 'XPD/USD']
        },
        stocks: {
          title: 'Stock Trading',
          description: 'เทรดหุ้นจากตลาดหลักทั่วโลก',
          features: ['หุ้น Blue-chip', 'ตลาดโลก', 'การวิเคราะห์', 'ข้อมูลบริษัท'],
          icon: BarChart3,
          color: 'from-red-500 to-red-600',
          bgColor: 'from-red-50 to-red-100',
          examples: ['AAPL', 'GOOGL', 'TSLA', 'MSFT']
        },
        index: {
          title: 'Stock Indices',
          description: 'เทรดดัชนีหุ้นหลักจากทั่วโลก',
          features: ['S&P 500', 'NASDAQ', 'DAX', 'ความหลากหลาย'],
          icon: Activity,
          color: 'from-red-500 to-red-600',
          bgColor: 'from-red-50 to-red-100',
          examples: ['SPX500', 'NAS100', 'GER30', 'UK100']
        },
        energy: {
          title: 'Energy Trading',
          description: 'เทรดน้ำมันและพลังงานจากตลาดโลก',
          features: ['น้ำมันดิบ', 'ก๊าซธรรมชาติ', 'ตลาดโลก', 'ความผันผวน'],
          icon: Zap,
          color: 'from-red-500 to-red-600',
          bgColor: 'from-red-50 to-red-100',
          examples: ['USOIL', 'UKOIL', 'NATGAS', 'HEATING']
        }
      },
      getStarted: 'เริ่มต้นเทรด',
      learnMore: 'เรียนรู้เพิ่มเติม'
    },
    en: {
      title: 'Investment Products',
      subtitle: 'Choose from a wide range of high-quality trading products',
      categories: {
        all: 'All',
        forex: 'Forex',
        crypto: 'Crypto',
        metals: 'Metals',
        stocks: 'Stocks',
        index: 'Index',
        energy: 'Energy'
      },
      products: {
        forex: {
          title: 'Forex Trading',
          description: 'Trade major and minor currency pairs from around the world',
          features: ['Low Spreads', 'High Leverage', '24/7 Market', 'High Speed'],
          icon: TrendingUp,
          color: 'from-red-500 to-red-600',
          bgColor: 'from-red-50 to-red-100',
          examples: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD']
        },
        crypto: {
          title: 'Cryptocurrency',
          description: 'Trade popular cryptocurrencies with high security',
          features: ['Popular Coins', 'High Security', '24/7 Market', 'High Volatility'],
          icon: Coins,
          color: 'from-red-500 to-red-600',
          bgColor: 'from-red-50 to-red-100',
          examples: ['BTC/USD', 'ETH/USD', 'LTC/USD', 'XRP/USD']
        },
        metals: {
          title: 'Precious Metals',
          description: 'Invest in gold, silver and other precious metals',
          features: ['Gold', 'Silver', 'Platinum', 'Security'],
          icon: Gem,
          color: 'from-red-500 to-red-600',
          bgColor: 'from-red-50 to-red-100',
          examples: ['XAU/USD', 'XAG/USD', 'XPT/USD', 'XPD/USD']
        },
        stocks: {
          title: 'Stock Trading',
          description: 'Trade stocks from major global markets',
          features: ['Blue-chip Stocks', 'Global Markets', 'Analysis', 'Company Data'],
          icon: BarChart3,
          color: 'from-red-500 to-red-600',
          bgColor: 'from-red-50 to-red-100',
          examples: ['AAPL', 'GOOGL', 'TSLA', 'MSFT']
        },
        index: {
          title: 'Stock Indices',
          description: 'Trade major stock indices from around the world',
          features: ['S&P 500', 'NASDAQ', 'DAX', 'Diversification'],
          icon: Activity,
          color: 'from-red-500 to-red-600',
          bgColor: 'from-red-50 to-red-100',
          examples: ['SPX500', 'NAS100', 'GER30', 'UK100']
        },
        energy: {
          title: 'Energy Trading',
          description: 'Trade oil and energy from global markets',
          features: ['Crude Oil', 'Natural Gas', 'Global Markets', 'Volatility'],
          icon: Zap,
          color: 'from-red-500 to-red-600',
          bgColor: 'from-red-50 to-red-100',
          examples: ['USOIL', 'UKOIL', 'NATGAS', 'HEATING']
        }
      },
      getStarted: 'Start Trading',
      learnMore: 'Learn More'
    }
  };

  const t = content[language];
  const productKeys = Object.keys(t.products);
  const filteredProducts = activeCategory === 'all' 
    ? productKeys 
    : [activeCategory];

  return (
    <div className="min-h-screen hero-gradient-bg relative overflow-hidden">
      {/* Neon Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Neon Lines */}
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0.3)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.2)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
            </linearGradient>
            <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.2)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.3)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.2)" />
            </linearGradient>
            <filter id="neonGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Animated Neon Lines */}
          <motion.path
            d="M 0,200 Q 300,150 600,180 T 1200,160"
            fill="none"
            stroke="url(#neonGradient1)"
            strokeWidth="2"
            filter="url(#neonGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <motion.path
            d="M 0,400 Q 400,350 800,380 T 1200,360"
            fill="none"
            stroke="url(#neonGradient2)"
            strokeWidth="2"
            filter="url(#neonGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
          
          <motion.path
            d="M 0,600 Q 200,550 400,580 T 800,560 T 1200,540"
            fill="none"
            stroke="url(#neonGradient1)"
            strokeWidth="1.5"
            filter="url(#neonGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          />
        </svg>

        {/* Floating Neon Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
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
              scale: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `linear-gradient(45deg, 
                ${i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#a855f7' : '#3b82f6'}, 
                ${i % 3 === 0 ? '#dc2626' : i % 3 === 1 ? '#9333ea' : '#2563eb'})`,
              boxShadow: `0 0 10px ${i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#a855f7' : '#3b82f6'}`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10 pt-28 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-sm font-medium">
              {language === 'th' ? 'ตลาดการเงินโลก' : 'Global Financial Markets'}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2"
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-red-200">
            <div className="flex flex-wrap justify-center gap-2">
              {Object.entries(t.categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/50'
                      : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              const container = document.getElementById('products-slider');
              if (container) {
                container.scrollBy({ left: -300, behavior: 'smooth' });
              }
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-red-600 transition-colors duration-200 shadow-lg border border-red-200"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
          </button>
          
          <button
            onClick={() => {
              const container = document.getElementById('products-slider');
              if (container) {
                container.scrollBy({ left: 300, behavior: 'smooth' });
              }
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-red-600 transition-colors duration-200 shadow-lg border border-red-200"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              id="products-slider"
              className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredProducts.map((productKey, index) => {
                const product = t.products[productKey];
                const IconComponent = product.icon;
                
                return (
                  <motion.div
                    key={productKey}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex-shrink-0"
                    onMouseEnter={() => setHoveredProduct(productKey)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="w-72 sm:w-80 h-[420px] sm:h-[480px] overflow-visible">
                  <div className={`w-full h-full transform-style-preserve-3d transition-transform duration-700 shadow-lg shadow-black/50 rounded-lg ${hoveredProduct === productKey ? 'rotate-y-180' : ''}`}>
                    {/* Front Side */}
                    <div className="absolute inset-0 bg-gray-900 backface-hidden rounded-lg overflow-hidden">
                      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                        {/* Badge */}
                        <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                          <span className="text-xs text-white font-medium">{productKey.toUpperCase()}</span>
                        </div>
                        
                        {/* 3D Icon Section */}
                        <div className="flex-1 flex items-center justify-center">
                          <div className="relative">
                            <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300`}>
                              <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                            </div>
                            {/* 3D Shadow Effect */}
                            <div className={`absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${product.color} rounded-2xl blur-lg opacity-50 -z-10`}></div>
                            {/* Floating Elements */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <div className="bg-black/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-lg">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                              {product.title}
                            </h3>
                            <div className="w-4 h-4 text-red-500">
                              <svg fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
                              </svg>
                            </div>
                          </div>
                          <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                            {product.description}
                          </p>
                          
                          {/* Features List */}
                          <div className="mb-4">
                            <div className="grid grid-cols-2 gap-2">
                              {product.features.slice(0, 4).map((feature, i) => (
                                <div key={i} className="flex items-center text-xs text-gray-400">
                                  <CheckCircle className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" />
                                  <span className="truncate">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Examples */}
                          <div className="mb-4">
                            <p className="text-xs text-gray-500 mb-2 font-medium">
                              {language === 'th' ? 'ตัวอย่าง:' : 'Examples:'}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {product.examples.slice(0, 2).map((example, i) => (
                                <span key={i} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md font-mono border border-gray-700">
                                  {example}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="text-xs text-gray-400 flex items-center justify-between">
                            <span>{language === 'th' ? 'ตลาด 24/7' : '24/7 Market'}</span>
                            <span>{language === 'th' ? 'สเปรดต่ำ' : 'Low Spread'}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Circles */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute w-20 h-20 bg-red-500/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
                        <div className="absolute w-32 h-32 bg-orange-500/20 rounded-full blur-2xl bottom-10 right-10 animate-pulse" style={{animationDelay: '-800ms'}}></div>
                        <div className="absolute w-8 h-8 bg-red-600/40 rounded-full blur-lg top-20 right-20 animate-pulse" style={{animationDelay: '-1800ms'}}></div>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 bg-gray-900 backface-hidden rounded-lg overflow-hidden rotate-y-180">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          {/* Animated Border */}
                          <div className="absolute inset-0">
                            <div className="absolute w-40 h-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 animate-spin-slow"></div>
                          </div>
                          
                          {/* Back Content */}
                          <div className="absolute inset-0 bg-gray-900 rounded-lg m-0.5 flex flex-col justify-center items-center gap-6">
                            <div className="relative">
                              <div className={`w-28 h-28 bg-gradient-to-br ${product.color} rounded-3xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300`}>
                                <IconComponent className="w-14 h-14 text-white" />
                              </div>
                              {/* 3D Shadow Effect */}
                              <div className={`absolute inset-0 w-28 h-28 bg-gradient-to-br ${product.color} rounded-3xl blur-xl opacity-60 -z-10`}></div>
                              {/* Glow Effect */}
                              <div className={`absolute inset-0 w-28 h-28 bg-gradient-to-br ${product.color} rounded-3xl blur-2xl opacity-30 -z-20`}></div>
                            </div>
                            
                            <div className="text-center">
                              <strong className="text-white text-xl font-bold">{product.title}</strong>
                              <p className="text-gray-300 text-sm mt-2 mb-4">
                                {language === 'th' ? 'เริ่มเทรดเลย' : 'Start Trading'}
                              </p>
                              
                              {/* Quick Stats */}
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-black/50 rounded-lg p-2">
                                  <div className="text-red-400 font-semibold">
                                    {language === 'th' ? 'ตลาด 24/7' : '24/7 Market'}
                                  </div>
                                </div>
                                <div className="bg-black/50 rounded-lg p-2">
                                  <div className="text-red-400 font-semibold">
                                    {language === 'th' ? 'สเปรดต่ำ' : 'Low Spread'}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <div className="inline-flex flex-row items-center space-x-4 sm:space-x-6 lg:space-x-8 bg-white/80 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-red-200">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                  {language === 'th' ? 'ความปลอดภัยสูง' : 'High Security'}
                </p>
                <p className="text-gray-600 text-xs">
                  {language === 'th' ? 'การป้องกันข้อมูล' : 'Data Protection'}
                </p>
              </div>
            </div>
            
            <div className="w-8 h-px sm:w-px sm:h-8 bg-gray-300" />
            
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                  {language === 'th' ? 'ตลาด 24/7' : '24/7 Market'}
                </p>
                <p className="text-gray-600 text-xs">
                  {language === 'th' ? 'เทรดได้ตลอดเวลา' : 'Trade Anytime'}
                </p>
              </div>
            </div>
            
            <div className="w-8 h-px sm:w-px sm:h-8 bg-gray-300" />
            
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                  {language === 'th' ? 'ตลาดโลก' : 'Global Markets'}
                </p>
                <p className="text-gray-600 text-xs">
                  {language === 'th' ? 'เข้าถึงทั่วโลก' : 'Worldwide Access'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

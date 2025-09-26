import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CreditCard, Zap, Smartphone, Monitor, Clock, Sparkles, TrendingUp, Star } from 'lucide-react';

const TradingFeatures = ({ language }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const content = {
    th: {
      title: 'เทรดด้วยความมั่นใจ – บนอุปกรณ์ใดก็ได้',
      description: 'ไม่ว่าจะบนมือถือหรือเดสก์ท็อป RubyFX ทำให้การเทรดเป็นเรื่องง่ายด้วยการรองรับอุปกรณ์ครบครันและ MetaTrader 5 สนุกกับการดำเนินการที่รวดเร็วและแม่นยำ พร้อมเครื่องมืออัจฉริยะเพื่อวางแผนกลยุทธ์ด้วยความมั่นใจ เราอยู่ที่นี่ 24/7 เพื่อให้คุณไม่พลาดโอกาสทางการตลาด เทรดทุกวัน—โอกาสไม่เคยหลับ!',
      features: [
        {
          icon: Shield,
          title: 'การป้องกันยอดเงินติดลบ',
          description: 'ปกป้องเงินทุนของคุณด้วยระบบป้องกันยอดเงินติดลบ'
        },
        {
          icon: CreditCard,
          title: 'ฝาก-ถอนทันที',
          description: 'ทำรายการฝาก-ถอนได้ทันทีด้วยระบบที่รวดเร็วและปลอดภัย'
        },
        {
          icon: Zap,
          title: 'Swap ฟรี',
          description: 'เทรดได้โดยไม่ต้องเสียค่าธรรมเนียม Swap'
        }
      ]
    },
    en: {
      title: 'Trade with Confidence – On Any Device',
      description: 'Whether on mobile or desktop, RubyFX makes trading easy with full device support and MetaTrader 5. Enjoy fast, accurate execution and smart tools to plan your strategy with confidence. We\'re here 24/7, so you never miss a market opportunity. Trade every day—opportunities never sleep!',
      features: [
        {
          icon: Shield,
          title: 'Negative Balance Protection',
          description: 'Protect your capital with our negative balance protection system'
        },
        {
          icon: CreditCard,
          title: 'Instant Deposits and Withdrawals',
          description: 'Process deposits and withdrawals instantly with our fast and secure system'
        },
        {
          icon: Zap,
          title: 'Free Swap',
          description: 'Trade without paying swap fees'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Animated Trading Chart Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Grid Pattern */}
            <pattern id="tradingGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5"/>
            </pattern>
            
            {/* Gradient Definitions */}
            <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0.1)" />
              <stop offset="50%" stopColor="rgba(239, 68, 68, 0.05)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.02)" />
            </linearGradient>
            
            <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.05)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.02)" />
            </linearGradient>
            
            <linearGradient id="chartGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.05)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.02)" />
            </linearGradient>
            
            {/* Filters */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background Grid */}
          <rect width="100%" height="100%" fill="url(#tradingGrid)" />
          
          {/* Animated Trading Charts */}
          <motion.g>
            {/* Chart 1 - EUR/USD */}
            <motion.path
              d="M 0,400 Q 200,350 400,380 T 800,360 T 1200,340"
              fill="none"
              stroke="url(#chartGradient1)"
              strokeWidth="3"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            />
            
            {/* Chart 2 - GBP/USD */}
            <motion.path
              d="M 0,500 Q 200,450 400,480 T 800,460 T 1200,440"
              fill="none"
              stroke="url(#chartGradient2)"
              strokeWidth="2.5"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 3.5, delay: 1, ease: "easeInOut" }}
            />
            
            {/* Chart 3 - USD/JPY */}
            <motion.path
              d="M 0,300 Q 200,250 400,280 T 800,260 T 1200,240"
              fill="none"
              stroke="url(#chartGradient3)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 4, delay: 1.5, ease: "easeInOut" }}
            />
          </motion.g>
          
          {/* Animated Data Points */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={i * 80 + 40}
              cy={350 + Math.sin(i * 0.5) * 50}
              r="3"
              fill="rgba(239, 68, 68, 0.3)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0.8, 1],
                opacity: [0, 0.8, 0.4, 0.8]
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          ))}
          
          {/* Floating Trading Symbols */}
          {['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'USD/CAD'].map((symbol, i) => (
            <motion.text
              key={symbol}
              x={200 + i * 200}
              y={200 + Math.sin(i) * 100}
              fontSize="12"
              fill="rgba(0,0,0,0.1)"
              fontFamily="monospace"
              fontWeight="bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                y: [20, 0, -20]
              }}
              transition={{ 
                duration: 4,
                delay: i * 0.8,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              {symbol}
            </motion.text>
          ))}
          
          {/* Animated Volume Bars */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.rect
              key={i}
              x={i * 60}
              y={600}
              width="40"
              height={Math.random() * 100 + 20}
              fill="rgba(239, 68, 68, 0.1)"
              initial={{ scaleY: 0 }}
              animate={{ 
                scaleY: [0, 1, 0.8, 1],
                opacity: [0, 0.6, 0.3, 0.6]
              }}
              transition={{ 
                duration: 2.5,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 4
              }}
              transformOrigin="bottom"
            />
          ))}
        </svg>
      </div>

      {/* Interactive Trading Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Trading Indicators */}
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
              opacity: [0, 0.2, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear"
            }}
            className="absolute w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg"
            style={{
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.3)'
            }}
          />
        ))}

        {/* Animated Price Tickers */}
        {['1.0845', '1.2654', '149.23', '0.6523'].map((price, i) => (
          <motion.div
            key={price}
            initial={{ opacity: 0, x: -100 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              x: [window.innerWidth + 100, -100]
            }}
            transition={{ 
              duration: 8,
              delay: i * 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="absolute top-20 text-xs font-mono text-gray-400 bg-white/50 px-2 py-1 rounded"
            style={{ top: `${20 + i * 15}%` }}
          >
            {price}
          </motion.div>
        ))}

        {/* Subtle Gradient Overlays */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.02, scale: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.015, scale: 1 }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.01, scale: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
          className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-full text-red-600 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Trading Platform
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t.description}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div 
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-red-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                animate={{ 
                  rotateY: hoveredCard === index ? 2 : 0,
                  rotateX: hoveredCard === index ? -2 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating Particles on Hover */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <>
                      {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: Math.random() * 200 - 100,
                            y: Math.random() * 200 - 100
                          }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ 
                            duration: 2,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                          className="absolute w-1 h-1 bg-red-500 rounded-full"
                          style={{
                            left: '50%',
                            top: '50%'
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
                
                {/* Icon with Advanced Animation */}
                <div className="relative z-10 mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: hoveredCard === index ? 360 : 0,
                        scale: hoveredCard === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-red-500 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    animate={{ 
                      scale: hoveredCard === index ? 1.5 : 1,
                      opacity: hoveredCard === index ? 0.3 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3 
                    className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300"
                    animate={{ 
                      x: hoveredCard === index ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-gray-600 leading-relaxed"
                    animate={{ 
                      x: hoveredCard === index ? 3 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Decorative Elements */}
                <motion.div 
                  className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"
                  animate={{ 
                    scale: hoveredCard === index ? 1.5 : 1,
                    rotate: hoveredCard === index ? 180 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Corner Accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-red-500/10 to-transparent rounded-tl-xl"
                  animate={{ 
                    opacity: hoveredCard === index ? 1 : 0.3
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div 
            className="inline-flex items-center space-x-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl px-6 py-4 border border-gray-200 shadow-sm"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Smartphone className="w-4 h-4 text-green-600" />
              </motion.div>
              <span className="text-gray-700 font-medium text-sm">Mobile Trading</span>
            </motion.div>
            
            <motion.div 
              className="w-px h-6 bg-gray-300"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Monitor className="w-4 h-4 text-blue-600" />
              </motion.div>
              <span className="text-gray-700 font-medium text-sm">Desktop Platform</span>
            </motion.div>
            
            <motion.div 
              className="w-px h-6 bg-gray-300"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Clock className="w-4 h-4 text-orange-600" />
              </motion.div>
              <span className="text-gray-700 font-medium text-sm">24/7 Support</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingFeatures;

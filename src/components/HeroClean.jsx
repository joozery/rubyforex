import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Globe, Zap } from 'lucide-react';
import SimpleAtomBackground from './SimpleAtomBackground';

const HeroClean = ({ language }) => {
  const content = {
    th: {
      title: 'RubyFX',
      subtitle: 'แพลตฟอร์มเทรดดิ้งระดับโลก',
      description: 'เทรดด้วยความมั่นใจ พร้อมเครื่องมือวิเคราะห์ขั้นสูงและสเปรดต่ำ',
      cta: 'เริ่มเทรดเลย',
      learnMore: 'เรียนรู้เพิ่มเติม',
    },
    en: {
      title: 'RubyFX',
      subtitle: 'Global Trading Platform',
      description: 'Trade with confidence using advanced analytics and low spreads',
      cta: 'Start Trading',
      learnMore: 'Learn More',
    }
  };

  const handleStartTrading = () => {
    window.open('https://client.rubyfxtrade.com/register/trader', '_blank');
  };

  const handleLearnMore = () => {
    window.location.href = '/products';
  };

  const t = content[language];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white pt-16 md:pt-20">
      {/* Simple Atom Background */}
      <SimpleAtomBackground />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-900"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-600 text-sm font-medium mb-8"
              >
                <Zap className="w-4 h-4 mr-2" />
                Professional Trading Platform
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
              >
                <span className="text-gray-900">
                  {t.title}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-4 md:mb-6"
              >
                {t.subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-lg leading-relaxed"
              >
                {t.description}
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8"
              >
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-gray-900 mb-1">50K+</div>
                  <div className="text-xs md:text-sm text-gray-600">Active Traders</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-gray-900 mb-1">$2.4B</div>
                  <div className="text-xs md:text-sm text-gray-600">Daily Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-gray-900 mb-1">99.9%</div>
                  <div className="text-xs md:text-sm text-gray-600">Uptime</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4"
              >
                <Button
                  onClick={handleStartTrading}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t.cta}
                </Button>
                <Button
                  onClick={handleLearnMore}
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm md:text-lg transition-all duration-300"
                >
                  {t.learnMore}
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Trading Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center mt-8 lg:mt-0"
            >
              {/* Main Trading Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative w-full max-w-md"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-200 shadow-xl">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-xl flex items-center justify-center mr-3 md:mr-4">
                        <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold text-base md:text-lg">Live Trading</h3>
                        <p className="text-gray-600 text-xs md:text-sm">Real-time Data</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-600">Live</span>
                    </div>
                  </div>
                  
                  {/* Trading Stats */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="bg-green-50 rounded-lg p-3 md:p-4 border border-green-200">
                      <div className="text-lg md:text-2xl font-bold text-green-600">+24.5%</div>
                      <div className="text-xs text-green-500">This Month</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 md:p-4 border border-blue-200">
                      <div className="text-lg md:text-2xl font-bold text-blue-600">$2.4M</div>
                      <div className="text-xs text-blue-500">Portfolio</div>
                    </div>
                  </div>
                  
                  {/* Trading Pairs */}
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex justify-between items-center p-2 md:p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded flex items-center justify-center mr-2 md:mr-3">
                          <span className="text-white font-bold text-xs md:text-sm">EU</span>
                        </div>
                        <span className="font-medium text-gray-900 text-sm md:text-base">EUR/USD</span>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-900 font-semibold text-sm md:text-base">1.0845</div>
                        <div className="text-green-600 font-medium text-xs md:text-sm">+0.23%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 md:p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded flex items-center justify-center mr-2 md:mr-3">
                          <span className="text-white font-bold text-xs md:text-sm">GU</span>
                        </div>
                        <span className="font-medium text-gray-900 text-sm md:text-base">GBP/USD</span>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-900 font-semibold text-sm md:text-base">1.2654</div>
                        <div className="text-red-600 font-medium text-xs md:text-sm">-0.15%</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-xl"
                >
                  <DollarSign className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl"
                >
                  <Globe className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroClean;

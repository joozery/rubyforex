import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, TrendingUp, BarChart3, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import rubyImage from '@/assets/ruby.webp';

const MetaTraderSection = ({ language }) => {
  const { toast } = useToast();

  const content = {
    th: {
      title: 'เทรดแบบมืออาชีพด้วย',
      subtitle: 'MetaTrader 5',
      description: 'แพลตฟอร์มเทรดที่ทันสมัยที่สุด พร้อมเครื่องมือวิเคราะห์ขั้นสูงและอินเทอร์เฟซที่ใช้งานง่าย',
      downloadButton: 'ดาวน์โหลด MT5',
      features: [
        'การวิเคราะห์ขั้นสูง',
        'เทรดหลายตลาด',
        'อินเทอร์เฟซที่ทันสมัย',
        'การแจ้งเตือนแบบเรียลไทม์'
      ]
    },
    en: {
      title: 'Trade like a pro with',
      subtitle: 'MetaTrader 5',
      description: 'The most advanced trading platform with sophisticated analysis tools and user-friendly interface',
      downloadButton: 'Download MT5',
      features: [
        'Advanced Analysis',
        'Multi-Market Trading',
        'Modern Interface',
        'Real-time Alerts'
      ]
    }
  };

  const t = content[language];

  const handleDownload = () => {
    // Detect device type
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile, redirect to app stores
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) {
        window.open('https://apps.apple.com/app/metatrader-5/id413251709', '_blank');
      } else {
        window.open('https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5', '_blank');
      }
    } else {
      // For PC, show download through browser
      toast({
        title: "💻 Download MT5",
        description: "MT5 will be downloaded through your browser"
      });
      // You can add actual download link here
      window.open('https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe', '_blank');
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Sophisticated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="mtGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mtGrid)" className="text-blue-400"/>
          </svg>
        </div>
        
        {/* Floating Color Accents */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-20 left-20 w-44 h-44 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-red-500/30 to-red-600/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.06, scale: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-purple-600/15 rounded-full blur-2xl"
          />
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="mt5Grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 38, 38, 0.3)" strokeWidth="1"/>
              </pattern>
          </defs>
            <rect width="100%" height="100%" fill="url(#mt5Grid)" />
          </svg>
        </div>

        {/* Floating Trading Elements */}
        {Array.from({ length: 8 }).map((_, i) => (
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
              background: i % 2 === 0 ? 'rgba(220, 38, 38, 0.4)' : 'rgba(16, 185, 129, 0.4)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-red-500 to-red-700 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-red-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold mb-6"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                Professional Trading
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl lg:text-5xl font-black leading-tight mb-4"
              >
                {t.title}
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-red-500 to-red-600 bg-clip-text text-transparent">
                  {t.subtitle}
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-blue-100 mb-6 leading-relaxed font-light"
              >
                {t.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mb-6"
              >
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-base px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {t.downloadButton}
                </Button>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                {t.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Ruby Image with Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Ruby Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src={rubyImage} 
                alt="RubyFX Trading Platform" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </motion.div>

            {/* Floating Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute top-8 -left-6 w-20 h-40 bg-gray-800 rounded-xl border-2 border-gray-600 p-1.5"
            >
              <div className="w-full h-full bg-black rounded-xl p-2">
                <div className="text-white text-xs mb-2">EUR/USD</div>
                <div className="text-green-400 text-xs">1.0845</div>
                <div className="text-red-400 text-xs">+0.23%</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="absolute top-16 -right-6 w-20 h-40 bg-gray-800 rounded-xl border-2 border-gray-600 p-1.5"
            >
              <div className="w-full h-full bg-black rounded-xl p-2">
                <div className="text-white text-xs mb-2">GBP/USD</div>
                <div className="text-red-400 text-xs">1.2654</div>
                <div className="text-red-400 text-xs">-0.70%</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              viewport={{ once: true }}
              className="absolute bottom-8 left-3 w-20 h-40 bg-gray-800 rounded-xl border-2 border-gray-600 p-1.5"
            >
              <div className="w-full h-full bg-black rounded-xl p-2">
                <div className="text-white text-xs mb-2">USD/JPY</div>
                <div className="text-green-400 text-xs">149.23</div>
                <div className="text-green-400 text-xs">+0.30%</div>
              </div>
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              viewport={{ once: true }}
              className="absolute top-1/4 -left-3 w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center"
            >
              <TrendingUp className="w-5 h-5 text-orange-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              viewport={{ once: true }}
              className="absolute top-1/3 -right-3 w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center"
            >
              <BarChart3 className="w-5 h-5 text-red-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              viewport={{ once: true }}
              className="absolute bottom-1/4 -left-2 w-10 h-10 bg-gray-500/20 rounded-full flex items-center justify-center"
            >
              <Settings className="w-5 h-5 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetaTraderSection;


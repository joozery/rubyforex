import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Star, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Promotions = ({ language }) => {
  const { toast } = useToast();

  const content = {
    th: {
      title: 'Special Offers',
      subtitle: 'รับโบนัสและสิทธิประโยชน์เพิ่มเติม',
      welcome: {
        title: 'โบนัสต้อนรับ 100%',
        description: 'รับโบนัสสูงสุด $1,000 สำหรับการฝากเงินครั้งแรก',
        features: ['โบนัสสูงสุด 100%', 'ถอนได้จริง', 'ไม่มีค่าธรรมเนียม']
      },
      cashback: {
        title: 'Cashback รายวัน',
        description: 'รับ Cashback ทุกการเทรดไม่ว่าจะกำไรหรือขาดทุน',
        features: ['Cashback สูงสุด 15%', 'คำนวณรายวัน', 'โอนอัตโนมัติ']
      },
      vip: {
        title: 'VIP Program',
        description: 'สิทธิประโยชน์พิเศษสำหรับลูกค้า VIP',
        features: ['Account Manager ส่วนตัว', 'สเปรดพิเศษ', 'ถอนเงินเร็วขึ้น']
      },
      contest: {
        title: 'Trading Contest',
        description: 'แข่งขันเทรดรายเดือน รางวัลรวมกว่า $50,000',
        features: ['รางวัลรวม $50,000', 'แข่งขันรายเดือน', 'ไม่มีค่าสมัคร']
      },
      claimNow: 'รับโปรโมชั่น'
    },
    en: {
      title: 'Special Offers',
      subtitle: 'Get bonuses and additional benefits',
      welcome: {
        title: '100% Welcome Bonus',
        description: 'Get up to $1,000 bonus on your first deposit',
        features: ['Up to 100% bonus', 'Withdrawable', 'No fees']
      },
      cashback: {
        title: 'Daily Cashback',
        description: 'Get cashback on every trade, profit or loss',
        features: ['Up to 15% cashback', 'Daily calculation', 'Auto transfer']
      },
      vip: {
        title: 'VIP Program',
        description: 'Exclusive benefits for VIP clients',
        features: ['Personal Account Manager', 'Special spreads', 'Faster withdrawals']
      },
      contest: {
        title: 'Trading Contest',
        description: 'Monthly trading competition with $50,000+ prizes',
        features: ['$50,000 total prizes', 'Monthly competition', 'Free entry']
      },
      claimNow: 'Claim Now'
    }
  };

  const handleClaim = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const t = content[language];

  const promotions = [
    { 
      icon: Gift, 
      color: 'text-red-500', 
      bgColor: 'bg-gray-900',
      badgeColor: 'bg-red-500',
      badge: '100%',
      data: t.welcome 
    },
    { 
      icon: Star, 
      color: 'text-green-500', 
      bgColor: 'bg-gray-900',
      badgeColor: 'bg-green-500',
      badge: '15%',
      data: t.cashback 
    },
    { 
      icon: Trophy, 
      color: 'text-yellow-500', 
      bgColor: 'bg-gray-900',
      badgeColor: 'bg-yellow-500',
      badge: 'VIP',
      data: t.vip 
    },
    { 
      icon: Zap, 
      color: 'text-blue-500', 
      bgColor: 'bg-gray-900',
      badgeColor: 'bg-blue-500',
      badge: '$50K',
      data: t.contest 
    }
  ];

  return (
    <section id="promotions" className="py-20 bg-white relative overflow-hidden">
      {/* Professional Grid Background */}
      <div className="absolute inset-0">
        {/* Main Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="mainGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mainGrid)" className="text-red-400"/>
          </svg>
        </div>

        {/* Secondary Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" viewBox="0 0 50 50">
            <defs>
              <pattern id="secondaryGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#secondaryGrid)" className="text-red-500"/>
          </svg>
        </div>

        {/* Floating Triangular Shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-20 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-red-400/30"
        />
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-40 right-32 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-red-500/30"
        />
        
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-32 left-40 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[8px] border-l-transparent border-r-transparent border-b-red-400/25"
        />

        {/* Floating Green Triangular Shapes */}
        <motion.div
          animate={{ 
            y: [0, 18, 0],
            rotate: [0, -90, -180, -270, -360]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-60 right-20 w-0 h-0 border-l-[7px] border-r-[7px] border-b-[11px] border-l-transparent border-r-transparent border-b-green-400/30"
        />
        
        <motion.div
          animate={{ 
            y: [0, -16, 0],
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-20 right-40 w-0 h-0 border-l-[5px] border-r-[5px] border-b-[9px] border-l-transparent border-r-transparent border-b-green-500/25"
        />

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <pattern id="overlayGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#overlayGrid)" className="text-red-300"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-600 text-sm font-medium mb-6 border border-red-200"
          >
            {t.title}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            {t.subtitle}
          </motion.h2>
        </motion.div>

        {/* Modern Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promotions.map((promo, index) => {
            const Icon = promo.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                {/* Modern Card Design */}
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200 h-[480px] flex flex-col">
                  {/* Premium Badge */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className={`px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                      index === 0 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      index === 1 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      index === 2 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      'bg-gradient-to-r from-blue-500 to-blue-600'
                    }`}>
                      {promo.badge}
                    </div>
                  </div>

                  {/* Icon with Modern Design */}
                  <div className="flex justify-center mb-6 mt-4">
                    <div className={`relative p-4 rounded-2xl shadow-lg ${
                      index === 0 ? 'bg-gradient-to-br from-red-50 to-red-100' :
                      index === 1 ? 'bg-gradient-to-br from-green-50 to-green-100' :
                      index === 2 ? 'bg-gradient-to-br from-yellow-50 to-yellow-100' :
                      'bg-gradient-to-br from-blue-50 to-blue-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        index === 0 ? 'text-red-600' :
                        index === 1 ? 'text-green-600' :
                        index === 2 ? 'text-yellow-600' :
                        'text-blue-600'
                      }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {promo.data.title}
                    </h3>
                    
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
                      index === 0 ? 'bg-red-100 text-red-700' :
                      index === 1 ? 'bg-green-100 text-green-700' :
                      index === 2 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {index === 0 ? 'PREMIUM STATUS' :
                       index === 1 ? 'DAILY REWARDS' :
                       index === 2 ? 'VIP EXCLUSIVE' :
                       'CONTEST PRIZE'}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                      {promo.data.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      {promo.data.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center text-gray-700 text-sm mb-2">
                          <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                            index === 0 ? 'bg-red-500' :
                            index === 1 ? 'bg-green-500' :
                            index === 2 ? 'bg-yellow-500' :
                            'bg-blue-500'
                          }`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modern CTA Button */}
                  <div className="mt-auto">
                    <Button 
                      onClick={handleClaim}
                      className={`w-full text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                        index === 0 ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' :
                        index === 1 ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' :
                        index === 2 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700' :
                        'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                      }`}
                    >
                      {t.claimNow}
                    </Button>
                  </div>

                  {/* Subtle Hover Effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                    index === 0 ? 'bg-red-500' :
                    index === 1 ? 'bg-green-500' :
                    index === 2 ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
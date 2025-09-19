import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Star, Zap, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Promotions = ({ language }) => {
  const { toast } = useToast();

  const content = {
    th: {
      title: 'โปรโมชั่นพิเศษ',
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
      title: 'Special Promotions',
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
    { icon: Gift, color: 'text-red-500 bg-red-500/20', buttonColor: 'bg-red-600 hover:bg-red-700', data: t.welcome, badge: '100%' },
    { icon: Star, color: 'text-green-500 bg-green-500/20', buttonColor: 'bg-green-600 hover:bg-green-700', data: t.cashback, badge: '15%' },
    { icon: Trophy, color: 'text-yellow-500 bg-yellow-500/20', buttonColor: 'bg-yellow-600 hover:bg-yellow-700', data: t.vip, badge: 'VIP' },
    { icon: Zap, color: 'text-blue-500 bg-blue-500/20', buttonColor: 'bg-blue-600 hover:bg-blue-700', data: t.contest, badge: '$50K' }
  ];

  return (
    <section id="promotions" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-red-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="promoGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 38, 38, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#promoGrid)" />
          </svg>
        </div>

        {/* Floating Elements */}
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

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promotions.map((promo, index) => {
            const Icon = promo.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-red-500/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col group"
              >
                <div className={`absolute top-4 right-4 ${promo.buttonColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                  {promo.badge}
                </div>
                
                <div className={`w-14 h-14 ${promo.color} rounded-xl flex items-center justify-center mb-4 border border-gray-600/20`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{promo.data.title}</h3>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{promo.data.description}</p>
                
                <ul className="space-y-1 mb-6">
                  {promo.data.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={handleClaim}
                  className={`w-full ${promo.buttonColor} text-white transition-all duration-300 mt-auto hover:scale-105`}
                >
                  {t.claimNow}
                </Button>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
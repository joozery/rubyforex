import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Star, Trophy, Zap, ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Promotions = ({ language }) => {
  const content = {
    th: {
      title: 'โปรโมชั่นและโบนัส',
      subtitle: 'รับสิทธิประโยชน์พิเศษและโบนัสมากมาย',
      welcome: {
        title: 'โบนัสต้อนรับ 100%',
        description: 'รับโบนัสสูงสุด $1,000 สำหรับการฝากเงินครั้งแรก',
        badge: '100%',
        features: ['โบนัสสูงสุด 100%', 'ถอนได้จริง', 'ไม่มีค่าธรรมเนียม', 'ใช้ได้ทันที'],
        icon: Gift
      },
      cashback: {
        title: 'Cashback รายวัน',
        description: 'รับ Cashback ทุกการเทรดไม่ว่าจะกำไรหรือขาดทุน',
        badge: '15%',
        features: ['Cashback สูงสุด 15%', 'คำนวณรายวัน', 'โอนอัตโนมัติ', 'ไม่มีเงื่อนไข'],
        icon: TrendingUp
      },
      vip: {
        title: 'VIP Program',
        description: 'สิทธิประโยชน์พิเศษสำหรับลูกค้า VIP',
        badge: 'VIP',
        features: ['Account Manager ส่วนตัว', 'สเปรดพิเศษ', 'ถอนเงินเร็วขึ้น', 'สิทธิพิเศษ'],
        icon: Star
      },
      contest: {
        title: 'Trading Contest',
        description: 'แข่งขันเทรดรายเดือน รางวัลรวมกว่า $50,000',
        badge: '$50K',
        features: ['รางวัลรวม $50,000', 'แข่งขันรายเดือน', 'ไม่มีค่าสมัคร', 'รางวัลหลากหลาย'],
        icon: Trophy
      },
      referral: {
        title: 'Referral Program',
        description: 'รับคอมมิชชั่นจากการแนะนำเพื่อน',
        badge: '30%',
        features: ['คอมมิชชั่น 30%', 'รายได้ต่อเนื่อง', 'ไม่มีขีดจำกัด', 'จ่ายทุกเดือน'],
        icon: Users
      },
      deposit: {
        title: 'Deposit Bonus',
        description: 'รับโบนัสพิเศษสำหรับการฝากเงิน',
        badge: '50%',
        features: ['โบนัส 50%', 'ฝากขั้นต่ำ $100', 'ใช้ได้ 30 วัน', 'เงื่อนไขง่าย'],
        icon: Zap
      },
      getStarted: 'รับโปรโมชั่น',
      learnMore: 'เรียนรู้เพิ่มเติม',
      terms: 'เงื่อนไขและข้อตกลง',
      validUntil: 'ใช้ได้จนถึง',
      endDate: '31 ธันวาคม 2024'
    },
    en: {
      title: 'Promotions & Bonuses',
      subtitle: 'Get special benefits and amazing bonuses',
      welcome: {
        title: 'Welcome Bonus 100%',
        description: 'Get up to $1,000 bonus for your first deposit',
        badge: '100%',
        features: ['Maximum 100% bonus', 'Real withdrawal', 'No fees', 'Instant use'],
        icon: Gift
      },
      cashback: {
        title: 'Daily Cashback',
        description: 'Get cashback on every trade, win or lose',
        badge: '15%',
        features: ['Up to 15% cashback', 'Daily calculation', 'Auto transfer', 'No conditions'],
        icon: TrendingUp
      },
      vip: {
        title: 'VIP Program',
        description: 'Special benefits for VIP customers',
        badge: 'VIP',
        features: ['Personal Account Manager', 'Special spreads', 'Faster withdrawals', 'Exclusive benefits'],
        icon: Star
      },
      contest: {
        title: 'Trading Contest',
        description: 'Monthly trading competition with $50,000 total prize',
        badge: '$50K',
        features: ['$50,000 total prize', 'Monthly competition', 'No entry fee', 'Various prizes'],
        icon: Trophy
      },
      referral: {
        title: 'Referral Program',
        description: 'Earn commission by referring friends',
        badge: '30%',
        features: ['30% commission', 'Ongoing income', 'No limits', 'Monthly payments'],
        icon: Users
      },
      deposit: {
        title: 'Deposit Bonus',
        description: 'Get special bonus for deposits',
        badge: '50%',
        features: ['50% bonus', 'Minimum $100 deposit', 'Valid for 30 days', 'Easy conditions'],
        icon: Zap
      },
      getStarted: 'Get Promotion',
      learnMore: 'Learn More',
      terms: 'Terms & Conditions',
      validUntil: 'Valid until',
      endDate: 'December 31, 2024'
    }
  };

  const t = content[language];

  const promotions = [
    {
      id: 'welcome',
      title: t.welcome.title,
      description: t.welcome.description,
      badge: t.welcome.badge,
      features: t.welcome.features,
      icon: t.welcome.icon,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      id: 'cashback',
      title: t.cashback.title,
      description: t.cashback.description,
      badge: t.cashback.badge,
      features: t.cashback.features,
      icon: t.cashback.icon,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      id: 'vip',
      title: t.vip.title,
      description: t.vip.description,
      badge: t.vip.badge,
      features: t.vip.features,
      icon: t.vip.icon,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      id: 'contest',
      title: t.contest.title,
      description: t.contest.description,
      badge: t.contest.badge,
      features: t.contest.features,
      icon: t.contest.icon,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'referral',
      title: t.referral.title,
      description: t.referral.description,
      badge: t.referral.badge,
      features: t.referral.features,
      icon: t.referral.icon,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 'deposit',
      title: t.deposit.title,
      description: t.deposit.description,
      badge: t.deposit.badge,
      features: t.deposit.features,
      icon: t.deposit.icon,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo, index) => {
              const IconComponent = promo.icon;
              return (
                <motion.div
                  key={promo.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative overflow-hidden"
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 ${promo.bgColor} ${promo.textColor} text-sm font-bold rounded-full`}>
                      {promo.badge}
                    </span>
                  </div>

                  <div className={`w-16 h-16 ${promo.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 ${promo.textColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {promo.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {promo.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {promo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 ${promo.bgColor.replace('50', '500')} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex space-x-3">
                    <Button className={`bg-gradient-to-r ${promo.color} text-white hover:shadow-lg transition-all duration-300 flex-1`}>
                      {t.getStarted}
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-600">
                {t.validUntil} {t.endDate}
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              {t.terms}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default Promotions;

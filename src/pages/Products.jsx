import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Globe, Users, ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Products = ({ language }) => {
  const content = {
    th: {
      title: 'ผลิตภัณฑ์ของเรา',
      subtitle: 'เครื่องมือการเทรดที่ทันสมัยและครบครัน',
      forex: {
        title: 'Forex Trading',
        description: 'เทรดคู่สกุลเงินหลักและรอง พร้อมสเปรดต่ำและเลเวอเรจสูง',
        features: ['สเปรดต่ำ 0.1 pips', 'เลเวอเรจสูงสุด 1:500', 'การดำเนินการเร็ว', 'การวิเคราะห์ขั้นสูง']
      },
      gold: {
        title: 'Gold Trading',
        description: 'เทรดทองคำและโลหะมีค่า พร้อมราคาแบบ Real-time',
        features: ['ราคา Real-time', 'สเปรดต่ำ', 'การดำเนินการ 24/7', 'การวิเคราะห์เทคนิค']
      },
      oil: {
        title: 'Oil Trading',
        description: 'เทรดน้ำมันดิบและผลิตภัณฑ์ปิโตรเลียม',
        features: ['ราคาตลาดโลก', 'สเปรดแข่งขัน', 'การดำเนินการเร็ว', 'ข้อมูลตลาดครบถ้วน']
      },
      stocks: {
        title: 'Stock Trading',
        description: 'เทรดหุ้นจากตลาดหลักทั่วโลก',
        features: ['ตลาดหุ้นโลก', 'หุ้น Blue-chip', 'การวิเคราะห์พื้นฐาน', 'ข้อมูลบริษัท']
      },
      crypto: {
        title: 'Cryptocurrency',
        description: 'เทรดคริปโตเคอร์เรนซียอดนิยม',
        features: ['เหรียญยอดนิยม', 'ราคา Real-time', 'การวิเคราะห์เทคนิค', 'ความปลอดภัยสูง']
      },
      platform: {
        title: 'MetaTrader 5',
        description: 'แพลตฟอร์มการเทรดที่ทันสมัยและครบครัน',
        features: ['การวิเคราะห์ขั้นสูง', 'การเทรดอัตโนมัติ', 'การจัดการความเสี่ยง', 'การรายงานผล']
      },
      getStarted: 'เริ่มต้นเทรด',
      learnMore: 'เรียนรู้เพิ่มเติม'
    },
    en: {
      title: 'Our Products',
      subtitle: 'Modern and comprehensive trading tools',
      forex: {
        title: 'Forex Trading',
        description: 'Trade major and minor currency pairs with low spreads and high leverage',
        features: ['Low spreads from 0.1 pips', 'Leverage up to 1:500', 'Fast execution', 'Advanced analysis']
      },
      gold: {
        title: 'Gold Trading',
        description: 'Trade gold and precious metals with real-time pricing',
        features: ['Real-time pricing', 'Low spreads', '24/7 trading', 'Technical analysis']
      },
      oil: {
        title: 'Oil Trading',
        description: 'Trade crude oil and petroleum products',
        features: ['Global market prices', 'Competitive spreads', 'Fast execution', 'Comprehensive market data']
      },
      stocks: {
        title: 'Stock Trading',
        description: 'Trade stocks from major global markets',
        features: ['Global stock markets', 'Blue-chip stocks', 'Fundamental analysis', 'Company data']
      },
      crypto: {
        title: 'Cryptocurrency',
        description: 'Trade popular cryptocurrencies',
        features: ['Popular coins', 'Real-time pricing', 'Technical analysis', 'High security']
      },
      platform: {
        title: 'MetaTrader 5',
        description: 'Modern and comprehensive trading platform',
        features: ['Advanced analysis', 'Automated trading', 'Risk management', 'Performance reporting']
      },
      getStarted: 'Start Trading',
      learnMore: 'Learn More'
    }
  };

  const t = content[language];

  const products = [
    {
      id: 'forex',
      title: t.forex.title,
      description: t.forex.description,
      features: t.forex.features,
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'gold',
      title: t.gold.title,
      description: t.gold.description,
      features: t.gold.features,
      icon: Star,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      id: 'oil',
      title: t.oil.title,
      description: t.oil.description,
      features: t.oil.features,
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      id: 'stocks',
      title: t.stocks.title,
      description: t.stocks.description,
      features: t.stocks.features,
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      id: 'crypto',
      title: t.crypto.title,
      description: t.crypto.description,
      features: t.crypto.features,
      icon: Globe,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 'platform',
      title: t.platform.title,
      description: t.platform.description,
      features: t.platform.features,
      icon: Shield,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
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

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className={`w-16 h-16 ${product.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 ${product.textColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 ${product.bgColor.replace('50', '500')} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex space-x-3">
                    <Button className={`bg-gradient-to-r ${product.color} text-white hover:shadow-lg transition-all duration-300 flex-1`}>
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

      <Footer language={language} />
    </div>
  );
};

export default Products;

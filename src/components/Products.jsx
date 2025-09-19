import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Zap, BarChart3, Coins, Building } from 'lucide-react';

const Products = ({ language }) => {
  const content = {
    th: {
      title: 'ผลิตภัณฑ์การเทรด',
      subtitle: 'เลือกเทรดจากหลากหลายตลาดการเงิน',
      forex: {
        title: 'Forex',
        description: 'เทรดคู่สกุลเงินหลักกว่า 50 คู่',
        features: ['สเปรดต่ำสุด 0.1 pips', 'เลเวอเรจสูงสุด 1:500', 'ดำเนินการรวดเร็ว']
      },
      gold: {
        title: 'ทองคำ',
        description: 'เทรดทองคำและโลหะมีค่า',
        features: ['ไม่มีค่าคอมมิชชั่น', 'สเปรดแน่น', 'เทรดได้ 24 ชั่วโมง']
      },
      oil: {
        title: 'น้ำมัน',
        description: 'เทรดน้ำมันดิบและพลังงาน',
        features: ['ราคาเรียลไทม์', 'ไม่มีค่าธรรมเนียมซ่อน', 'เลเวอเรจยืดหยุ่น']
      },
      stocks: {
        title: 'หุ้น',
        description: 'เทรดหุ้นบริษัทชั้นนำทั่วโลก',
        features: ['หุ้นอเมริกา', 'หุ้นยุโรป', 'หุ้นเอเชีย']
      },
      indices: {
        title: 'ดัชนี',
        description: 'เทรดดัชนีหุ้นหลักทั่วโลก',
        features: ['S&P 500', 'NASDAQ', 'DAX', 'Nikkei']
      },
      crypto: {
        title: 'Cryptocurrency',
        description: 'เทรดสกุลเงินดิจิทัลยอดนิยม',
        features: ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple']
      }
    },
    en: {
      title: 'Trading Products',
      subtitle: 'Choose from diverse financial markets',
      forex: {
        title: 'Forex',
        description: 'Trade 50+ major currency pairs',
        features: ['Spreads from 0.1 pips', 'Leverage up to 1:500', 'Fast execution']
      },
      gold: {
        title: 'Gold',
        description: 'Trade gold and precious metals',
        features: ['Zero commission', 'Tight spreads', '24-hour trading']
      },
      oil: {
        title: 'Oil',
        description: 'Trade crude oil and energy',
        features: ['Real-time pricing', 'No hidden fees', 'Flexible leverage']
      },
      stocks: {
        title: 'Stocks',
        description: 'Trade leading global companies',
        features: ['US Stocks', 'European Stocks', 'Asian Stocks']
      },
      indices: {
        title: 'Indices',
        description: 'Trade major global stock indices',
        features: ['S&P 500', 'NASDAQ', 'DAX', 'Nikkei']
      },
      crypto: {
        title: 'Cryptocurrency',
        description: 'Trade popular digital currencies',
        features: ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple']
      }
    }
  };

  const t = content[language];

  const products = [
    { icon: DollarSign, color: 'text-green-600 bg-green-100', data: t.forex },
    { icon: Coins, color: 'text-yellow-600 bg-yellow-100', data: t.gold },
    { icon: Zap, color: 'text-red-600 bg-red-100', data: t.oil },
    { icon: Building, color: 'text-blue-600 bg-blue-100', data: t.stocks },
    { icon: BarChart3, color: 'text-purple-600 bg-purple-100', data: t.indices },
    { icon: TrendingUp, color: 'text-orange-600 bg-orange-100', data: t.crypto }
  ];

  return (
    <section id="products" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${product.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.data.title}</h3>
                <p className="text-gray-600 mb-6">{product.data.description}</p>
                
                <ul className="space-y-2">
                  {product.data.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
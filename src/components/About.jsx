import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe, TrendingUp, Star } from 'lucide-react';

const About = ({ language }) => {
  const content = {
    th: {
      title: 'เกี่ยวกับเรา',
      subtitle: 'โบรกเกอร์ที่เชื่อถือได้มากว่า 10 ปี',
      description: 'เราเป็นโบรกเกอร์ Forex ที่ได้รับใบอนุญาตและควบคุมโดยหน่วยงานกำกับดูแลชั้นนำ มุ่งมั่นให้บริการการเทรดที่โปร่งใสและปลอดภัยแก่ลูกค้ากว่า 500,000 คนทั่วโลก',
      stats: [
        { number: '500K+', label: 'ลูกค้าทั่วโลก' },
        { number: '10+', label: 'ปีของประสบการณ์' },
        { number: '50+', label: 'รางวัลระดับสากล' },
        { number: '24/7', label: 'การสนับสนุน' }
      ],
      features: [
        {
          icon: Shield,
          title: 'ใบอนุญาตถูกต้อง',
          description: 'ได้รับใบอนุญาตจาก CySEC, FCA และ ASIC'
        },
        {
          icon: Award,
          title: 'รางวัลมากมาย',
          description: 'ได้รับรางวัล Best Broker มาแล้วกว่า 50 รางวัล'
        },
        {
          icon: Users,
          title: 'ลูกค้าทั่วโลก',
          description: 'ให้บริการลูกค้ากว่า 500,000 คนใน 150+ ประเทศ'
        },
        {
          icon: TrendingUp,
          title: 'เทคโนโลยีล้ำสมัย',
          description: 'ใช้เทคโนโลยี AI และ Machine Learning'
        }
      ],
      licenses: 'ใบอนุญาต: CySEC (123/45), FCA (678901), ASIC (234567)'
    },
    en: {
      title: 'About Us',
      subtitle: 'Trusted broker for over 10 years',
      description: 'We are a licensed and regulated Forex broker committed to providing transparent and secure trading services to over 500,000 clients worldwide.',
      stats: [
        { number: '500K+', label: 'Global Clients' },
        { number: '10+', label: 'Years Experience' },
        { number: '50+', label: 'International Awards' },
        { number: '24/7', label: 'Support' }
      ],
      features: [
        {
          icon: Shield,
          title: 'Licensed & Regulated',
          description: 'Licensed by CySEC, FCA and ASIC'
        },
        {
          icon: Award,
          title: 'Award Winning',
          description: 'Received 50+ Best Broker awards'
        },
        {
          icon: Users,
          title: 'Global Clients',
          description: 'Serving 500,000+ clients in 150+ countries'
        },
        {
          icon: TrendingUp,
          title: 'Advanced Technology',
          description: 'Using AI and Machine Learning technology'
        }
      ],
      licenses: 'Licenses: CySEC (123/45), FCA (678901), ASIC (234567)'
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">{t.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {t.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <img class="w-full h-64 object-cover rounded-xl" alt="Modern trading office with professional traders" src="https://images.unsplash.com/photo-1605588722627-818efb8878b9" />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  {language === 'th' ? 'ทีมงานมืออาชีพ' : 'Professional Team'}
                </h3>
                <p className="text-gray-600">
                  {language === 'th' 
                    ? 'ทีมงานของเรามีประสบการณ์มากกว่า 15 ปีในตลาดการเงิน พร้อมให้คำปรึกษาและสนับสนุนลูกค้าตลอด 24 ชั่วโมง'
                    : 'Our team has over 15 years of experience in financial markets, ready to provide consultation and support to clients 24 hours a day.'
                  }
                </p>
                <div className="flex items-center space-x-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-800 font-semibold">4.9/5</span>
                  <span className="text-gray-500">
                    ({language === 'th' ? '12,000+ รีวิว' : '12,000+ reviews'})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-green-600" />
              <Globe className="w-6 h-6 text-blue-600" />
              <Award className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-gray-600">{t.licenses}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, FileText, Shield, Eye, Users, Copy, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import logo from '@/assets/logo.png';

const Footer = ({ language }) => {
  const { toast } = useToast();

  const content = {
    th: {
      company: 'บริษัท',
      products: 'ผลิตภัณฑ์',
      support: 'การสนับสนุน',
      legal: 'กฎหมาย',
      contact: 'ติดต่อเรา',
      about: 'เกี่ยวกับเรา',
      careers: 'ร่วมงานกับเรา',
      news: 'ข่าวสาร',
      forex: 'Forex',
      gold: 'ทองคำ',
      oil: 'น้ำมัน',
      stocks: 'หุ้น',
      crypto: 'Cryptocurrency',
      helpCenter: 'ศูนย์ช่วยเหลือ',
      education: 'ศูนย์การเรียนรู้',
      webinar: 'Webinar',
      ib: 'IB Program',
      copyTrading: 'Copy Trading',
      terms: 'ข้อตกลงการใช้บริการ',
      privacy: 'นโยบายความเป็นส่วนตัว',
      aml: 'นโยบาย AML',
      riskWarning: 'คำเตือนความเสี่ยง',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry',
      riskText: 'การเทรด Forex และ CFD มีความเสี่ยงสูง อาจไม่เหมาะสำหรับนักลงทุนทุกคน',
      copyright: '© 2024 RubyFX. สงวนลิขสิทธิ์ทุกประการ',
      followUs: 'ติดตามเรา',
      newsletter: 'สมัครรับข่าวสาร',
      emailPlaceholder: 'อีเมลของคุณ...',
      submit: 'ส่ง'
    },
    en: {
      company: 'Company',
      products: 'Products',
      support: 'Support',
      legal: 'Legal',
      contact: 'Contact Us',
      about: 'About Us',
      careers: 'Careers',
      news: 'News',
      forex: 'Forex',
      gold: 'Gold',
      oil: 'Oil',
      stocks: 'Stocks',
      crypto: 'Cryptocurrency',
      helpCenter: 'Help Center',
      education: 'Education',
      webinar: 'Webinars',
      ib: 'IB Program',
      copyTrading: 'Copy Trading',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      aml: 'AML Policy',
      riskWarning: 'Risk Warning',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry',
      riskText: 'Forex and CFD trading involves high risk and may not be suitable for all investors',
      copyright: '© 2024 RubyFX. All rights reserved',
      followUs: 'Follow Us',
      newsletter: 'Subscribe to our newsletter',
      emailPlaceholder: 'Your Email...',
      submit: 'Submit'
    }
  };

  const handleClick = (item) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const t = content[language];

  const footerSections = [
    {
      title: t.products,
      links: [
        { name: t.forex, icon: null },
        { name: t.gold, icon: null },
        { name: t.oil, icon: null },
        { name: t.stocks, icon: null },
        { name: t.crypto, icon: null }
      ]
    },
    {
      title: t.crypto,
      links: [
        { name: 'Bitcoin', icon: null },
        { name: 'Litecoin', icon: null },
        { name: 'Ethereum', icon: null },
        { name: 'Ripple', icon: null }
      ]
    },
    {
      title: t.support,
      links: [
        { name: 'Trade', icon: null },
        { name: 'Guides', icon: null },
        { name: 'Wallets', icon: null },
        { name: 'FAQ', icon: null }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, color: 'hover:text-blue-600' },
    { icon: Twitter, color: 'hover:text-sky-500' },
    { icon: Instagram, color: 'hover:text-pink-600' },
    { icon: Youtube, color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="footerGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 38, 38, 0.2)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerGrid)" />
          </svg>
        </div>

        {/* Floating Geometric Shapes */}
        {Array.from({ length: 15 }).map((_, i) => (
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
              background: i % 3 === 0 ? 'rgba(220, 38, 38, 0.4)' : 'rgba(16, 185, 129, 0.4)',
              clipPath: i % 2 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(0% 0%, 100% 0%, 50% 100%)'
            }}
          />
        ))}

        {/* Animated Lines */}
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <motion.path
              d="M 0,200 Q 300,150 600,180 T 1200,160"
              fill="none"
              stroke="rgba(220, 38, 38, 0.5)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M 0,400 Q 300,350 600,380 T 1200,360"
              fill="none"
              stroke="rgba(16, 185, 129, 0.5)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
            <motion.path
              d="M 0,600 Q 300,550 600,580 T 1200,560"
              fill="none"
              stroke="rgba(220, 38, 38, 0.4)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 2 }}
            />
          </svg>
        </motion.div>

        {/* Floating Particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
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
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-red-500 to-green-500 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center">
                <img 
                  src={logo} 
                  alt="RubyFX Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4 text-red-400" />
                  <span className="text-sm">info@rubyfx.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-lg font-semibold text-white">{section.title}</span>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => {
                  const Icon = link.icon;
                  return (
                    <li key={linkIndex}>
                      <button
                        onClick={() => handleClick(link.name)}
                        className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors text-sm"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{link.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-white font-semibold mb-4 block">{t.newsletter}</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleClick('social')}
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors hover:bg-gray-700`}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="space-y-4">
              <span className="text-white font-semibold block">{t.newsletter}</span>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                />
                <button
                  onClick={() => handleClick('newsletter')}
                  className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center text-white transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 text-center"
        >
          <p className="text-gray-400 text-sm">{t.copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
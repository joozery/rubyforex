import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, Shield, Award, Globe, Users, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import logo from '@/assets/logo2.png';

const Footer = ({ language }) => {
  const [email, setEmail] = useState('');
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
      terms: 'ข้อตกลงการใช้บริการ',
      privacy: 'นโยบายความเป็นส่วนตัว',
      aml: 'นโยบาย AML',
      riskWarning: 'คำเตือนความเสี่ยง',
      description: 'แพลตฟอร์มเทรดดิ้งที่ทันสมัยและเชื่อถือได้',
      riskText: 'การเทรด Forex และ CFD มีความเสี่ยงสูง อาจไม่เหมาะสำหรับนักลงทุนทุกคน',
      copyright: '© 2024 RubyFX. สงวนลิขสิทธิ์ทุกประการ',
      followUs: 'ติดตามเรา',
      newsletter: 'ข่าวสาร',
      newsletterSubtitle: 'รับข้อมูลล่าสุด',
      emailPlaceholder: 'อีเมล...',
      submit: 'ส่ง',
      trusted: 'เชื่อถือได้',
      secure: 'ปลอดภัย',
      global: 'ระดับโลก',
      community: 'ชุมชน'
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
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      aml: 'AML Policy',
      riskWarning: 'Risk Warning',
      description: 'Modern and reliable trading platform',
      riskText: 'Trading Forex and CFDs involves high risk and may not be suitable for all investors',
      copyright: '© 2024 RubyFX. All rights reserved',
      followUs: 'Follow Us',
      newsletter: 'Newsletter',
      newsletterSubtitle: 'Get latest updates',
      emailPlaceholder: 'Email...',
      submit: 'Send',
      trusted: 'Trusted',
      secure: 'Secure',
      global: 'Global',
      community: 'Community'
    }
  };

  const t = content[language];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: language === 'th' ? 'สำเร็จ!' : 'Success!',
        description: language === 'th' ? 'สมัครรับข่าวสารเรียบร้อยแล้ว' : 'Newsletter subscription successful',
      });
      setEmail('');
    }
  };

  const handleMenuClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-pink-50 opacity-80"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-10 left-10 w-2 h-2 bg-red-500 rounded-full opacity-40"
        />
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-20 right-20 w-1 h-1 bg-pink-500 rounded-full opacity-50"
        />
        
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-rose-500 rounded-full opacity-35"
        />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="footerGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerGrid)" className="text-red-300"/>
          </svg>
        </div>

        {/* Floating Lines */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"
        />

        <motion.div
          animate={{ 
            x: [0, -80, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "linear",
            delay: 10
          }}
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"
        />

        {/* Subtle Dots Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <pattern id="footerDots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerDots)" className="text-red-400"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src={logo} 
                alt="RubyFX Logo" 
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              {t.description}
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-200">
                <Facebook className="w-4 h-4 text-gray-600 hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-200">
                <Twitter className="w-4 h-4 text-gray-600 hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-200">
                <Instagram className="w-4 h-4 text-gray-600 hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-200">
                <Youtube className="w-4 h-4 text-gray-600 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-3 md:mb-4 text-sm md:text-base">{t.products}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleMenuClick('forex')}
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-200"
                >
                  {t.forex}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuClick('gold')}
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-200"
                >
                  {t.gold}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuClick('oil')}
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-200"
                >
                  {t.oil}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuClick('crypto')}
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-200"
                >
                  {t.crypto}
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-3 md:mb-4 text-sm md:text-base">{t.newsletter}</h4>
            <p className="text-gray-600 text-sm mb-4">
              {t.newsletterSubtitle}
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-2 md:space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="w-full px-3 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 text-sm"
                required
              />
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 md:py-3 text-sm"
              >
                {t.submit}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                {t.copyright}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleMenuClick('terms')}
                className="text-gray-500 hover:text-red-600 text-sm transition-colors duration-200"
              >
                {t.terms}
              </button>
              <button
                onClick={() => handleMenuClick('privacy')}
                className="text-gray-500 hover:text-red-600 text-sm transition-colors duration-200"
              >
                {t.privacy}
              </button>
              <button
                onClick={() => handleMenuClick('aml')}
                className="text-gray-500 hover:text-red-600 text-sm transition-colors duration-200"
              >
                {t.aml}
              </button>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-red-50 rounded text-center">
            <p className="text-gray-600 text-xs">
              <Shield className="w-3 h-3 inline mr-1 text-red-500" />
              {t.riskText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
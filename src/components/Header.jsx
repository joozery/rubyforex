import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, Download, User, BookOpen, TrendingUp, Gift, Phone, Users, Copy, FileText, Shield, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import logo from '@/assets/logo.png';

const Header = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const content = {
    th: {
      signUp: 'สมัครสมาชิก',
      login: 'เข้าสู่ระบบ',
      download: 'ดาวน์โหลด',
      products: 'ผลิตภัณฑ์',
      promotions: 'โปรโมชั่น',
      education: 'ศูนย์การเรียนรู้',
      news: 'ข่าวสาร',
      about: 'เกี่ยวกับเรา',
      contact: 'ติดต่อเรา',
      ib: 'IB Program',
      copyTrading: 'Copy Trading',
      terms: 'ข้อตกลง',
      privacy: 'นโยบายความเป็นส่วนตัว',
      aml: 'นโยบาย AML'
    },
    en: {
      signUp: 'Sign Up',
      login: 'Login',
      download: 'Download',
      products: 'Products',
      promotions: 'Promotions',
      education: 'Education',
      news: 'News',
      about: 'About Us',
      contact: 'Contact',
      ib: 'IB Program',
      copyTrading: 'Copy Trading',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      aml: 'AML Policy'
    }
  };

  const handleMT4Click = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleMenuClick = (item) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
    setIsMenuOpen(false);
  };

  const t = content[language];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-red-500/20"
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src={logo} 
              alt="ForexPro Logo" 
              className="w-20 h-20 object-contain"
            />
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            <motion.button 
              onClick={() => handleMenuClick('products')} 
              className="text-gray-300 hover:text-red-500 transition-all duration-300 flex items-center space-x-2 group relative"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="w-4 h-4 group-hover:text-red-500 transition-colors" />
              <span className="font-medium tracking-wide">{t.products}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></div>
            </motion.button>
            <motion.button 
              onClick={() => handleMenuClick('promotions')} 
              className="text-gray-300 hover:text-red-500 transition-all duration-300 flex items-center space-x-2 group relative"
              whileHover={{ scale: 1.05 }}
            >
              <Gift className="w-4 h-4 group-hover:text-red-500 transition-colors" />
              <span className="font-medium tracking-wide">{t.promotions}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></div>
            </motion.button>
            <motion.button 
              onClick={() => handleMenuClick('education')} 
              className="text-gray-300 hover:text-red-500 transition-all duration-300 flex items-center space-x-2 group relative"
              whileHover={{ scale: 1.05 }}
            >
              <BookOpen className="w-4 h-4 group-hover:text-red-500 transition-colors" />
              <span className="font-medium tracking-wide">{t.education}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></div>
            </motion.button>
            <motion.button 
              onClick={() => handleMenuClick('news')} 
              className="text-gray-300 hover:text-red-500 transition-all duration-300 group relative"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-medium tracking-wide">{t.news}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></div>
            </motion.button>
            <motion.button 
              onClick={() => handleMenuClick('about')} 
              className="text-gray-300 hover:text-red-500 transition-all duration-300 group relative"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-medium tracking-wide">{t.about}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></div>
            </motion.button>
            <motion.button 
              onClick={() => handleMenuClick('contact')} 
              className="text-gray-300 hover:text-red-500 transition-all duration-300 flex items-center space-x-2 group relative"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4 group-hover:text-red-500 transition-colors" />
              <span className="font-medium tracking-wide">{t.contact}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></div>
            </motion.button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={handleMT4Click} 
                variant="outline" 
                className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500 hover:text-red-400 backdrop-blur-sm transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                {t.download}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={handleMT4Click} 
                variant="ghost" 
                className="text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300"
              >
                <User className="w-4 h-4 mr-2" />
                {t.login}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={handleMT4Click} 
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white transition-all duration-300"
              >
                {t.signUp}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={toggleLanguage} 
                variant="ghost" 
                size="icon" 
                className="text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={toggleLanguage} 
                variant="ghost" 
                size="icon" 
                className="text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                variant="ghost" 
                size="icon"
                className="text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 border-t border-red-500/20 bg-black/10 backdrop-blur-sm"
          >
            <div className="flex flex-col space-y-2 mt-4">
              <Button onClick={handleMT4Click} className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white w-full justify-start p-3">
                {t.signUp}
              </Button>
              <Button onClick={handleMT4Click} variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10 w-full justify-start p-3">
                <User className="w-4 h-4 mr-2" />
                {t.login}
              </Button>
              <Button onClick={handleMT4Click} variant="ghost" className="text-gray-300 hover:text-red-400 hover:bg-red-500/10 justify-start p-3">
                <Download className="w-4 h-4 mr-2" />
                {t.download}
              </Button>
              <button onClick={() => handleMenuClick('products')} className="text-gray-300 text-left py-3 hover:text-red-400 hover:bg-red-500/10 flex items-center transition-all duration-300">
                <TrendingUp className="w-4 h-4 mr-2" />
                {t.products}
              </button>
              <button onClick={() => handleMenuClick('promotions')} className="text-gray-300 text-left py-3 hover:text-red-400 hover:bg-red-500/10 flex items-center transition-all duration-300">
                <Gift className="w-4 h-4 mr-2" />
                {t.promotions}
              </button>
              <button onClick={() => handleMenuClick('education')} className="text-gray-300 text-left py-3 hover:text-red-400 hover:bg-red-500/10 flex items-center transition-all duration-300">
                <BookOpen className="w-4 h-4 mr-2" />
                {t.education}
              </button>
              <button onClick={() => handleMenuClick('news')} className="text-gray-300 text-left py-3 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300">
                {t.news}
              </button>
              <button onClick={() => handleMenuClick('ib')} className="text-gray-300 text-left py-3 hover:text-red-400 hover:bg-red-500/10 flex items-center transition-all duration-300">
                <Users className="w-4 h-4 mr-2" />
                {t.ib}
              </button>
              <button onClick={() => handleMenuClick('copyTrading')} className="text-gray-300 text-left py-3 hover:text-red-400 hover:bg-red-500/10 flex items-center transition-all duration-300">
                <Copy className="w-4 h-4 mr-2" />
                {t.copyTrading}
              </button>
              <button onClick={() => handleMenuClick('about')} className="text-gray-300 text-left py-3 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300">
                {t.about}
              </button>
              <button onClick={() => handleMenuClick('contact')} className="text-gray-300 text-left py-3 hover:text-red-400 hover:bg-red-500/10 flex items-center transition-all duration-300">
                <Phone className="w-4 h-4 mr-2" />
                {t.contact}
              </button>
              <div className="border-t border-red-500/20 pt-4 mt-2">
                <button onClick={() => handleMenuClick('terms')} className="text-gray-400 text-left py-2 hover:text-red-400 hover:bg-red-500/10 flex items-center text-sm transition-all duration-300">
                  <FileText className="w-4 h-4 mr-2" />
                  {t.terms}
                </button>
                <button onClick={() => handleMenuClick('privacy')} className="text-gray-400 text-left py-2 hover:text-red-400 hover:bg-red-500/10 flex items-center text-sm transition-all duration-300">
                  <Eye className="w-4 h-4 mr-2" />
                  {t.privacy}
                </button>
                <button onClick={() => handleMenuClick('aml')} className="text-gray-400 text-left py-2 hover:text-red-400 hover:bg-red-500/10 flex items-center text-sm transition-all duration-300">
                  <Shield className="w-4 h-4 mr-2" />
                  {t.aml}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
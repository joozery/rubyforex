import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, Download, User, BookOpen, TrendingUp, Gift, Phone, Users, Copy, FileText, Shield, Eye, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo2.png';

const Header = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const content = {
    th: {
      home: 'หน้าหลัก',
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
      home: 'Home',
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

  const handleSignUp = () => {
    window.open('https://client.rubyfxtrade.com/register/trader', '_blank');
  };

  const handleLogin = () => {
    window.open('https://client.rubyfxtrade.com/login', '_blank');
  };

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


  const t = content[language];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="container mx-auto px-4 md:px-6 py-1">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center"
          >
            <img 
              src={logo} 
              alt="RubyFX Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6">
            <Link to="/">
              <motion.button 
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-xs md:text-sm"
                whileHover={{ scale: 1.02 }}
              >
                {t.home}
              </motion.button>
            </Link>
            <Link to="/products">
              <motion.button 
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-xs md:text-sm"
                whileHover={{ scale: 1.02 }}
              >
                {t.products}
              </motion.button>
            </Link>
            <Link to="/promotions">
              <motion.button 
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-xs md:text-sm"
                whileHover={{ scale: 1.02 }}
              >
                {t.promotions}
              </motion.button>
            </Link>
            <Link to="/news">
              <motion.button 
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-xs md:text-sm"
                whileHover={{ scale: 1.02 }}
              >
                {t.news}
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button 
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-xs md:text-sm"
                whileHover={{ scale: 1.02 }}
              >
                {t.about}
              </motion.button>
            </Link>
            <Link to="/ib-program">
              <motion.button 
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-xs md:text-sm"
                whileHover={{ scale: 1.02 }}
              >
                {t.ib}
              </motion.button>
            </Link>
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-3">
            <Link to="/">
              <motion.button 
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-xs"
                whileHover={{ scale: 1.02 }}
              >
                {t.home}
              </motion.button>
            </Link>
            <Link to="/products">
              <motion.button 
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-xs"
                whileHover={{ scale: 1.02 }}
              >
                {t.products}
              </motion.button>
            </Link>
            <Link to="/promotions">
              <motion.button 
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-xs"
                whileHover={{ scale: 1.02 }}
              >
                {t.promotions}
              </motion.button>
            </Link>
            <Link to="/news">
              <motion.button 
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-xs"
                whileHover={{ scale: 1.02 }}
              >
                {t.news}
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button 
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-xs"
                whileHover={{ scale: 1.02 }}
              >
                {t.about}
              </motion.button>
            </Link>
            <Link to="/ib-program">
              <motion.button 
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-xs"
                whileHover={{ scale: 1.02 }}
              >
                {t.ib}
              </motion.button>
            </Link>
          </nav>


          {/* Tablet Buttons */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={handleDownload} 
                variant="outline" 
                size="sm"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 rounded-full text-xs"
              >
                <Download className="w-3 h-3 mr-1" />
                {t.download}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={handleLogin} 
                variant="ghost" 
                size="sm"
                className="text-gray-600 hover:bg-gray-100 transition-colors duration-200 text-xs"
              >
                <User className="w-3 h-3 mr-1" />
                {t.login}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={handleSignUp} 
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 rounded-full text-xs"
              >
                {t.signUp}
              </Button>
            </motion.div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-2 md:space-x-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={handleDownload} 
                variant="outline" 
                size="sm"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 rounded-full"
              >
                <Download className="w-4 h-4 mr-1" />
                {t.download}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={handleLogin} 
                variant="ghost" 
                size="sm"
                className="text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              >
                <User className="w-4 h-4 mr-1" />
                {t.login}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={handleSignUp} 
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 rounded-full text-xs"
              >
                {t.signUp}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={toggleLanguage} 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Controls - Clean */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={toggleLanguage} 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                variant="ghost" 
                size="icon"
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
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
            className="md:hidden mt-4 pb-4 border-t border-gray-200 bg-white"
          >
            {/* Mobile Navigation Menu */}
            <div className="flex flex-col space-y-1 mt-4 mb-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <button className="text-gray-600 text-left py-3 hover:text-red-600 hover:bg-red-50 flex items-center transition-all duration-300 w-full">
                  <Home className="w-4 h-4 mr-2" />
                  {t.home}
                </button>
              </Link>
              <Link to="/products" onClick={() => setIsMenuOpen(false)}>
                <button className="text-gray-600 text-left py-3 hover:text-red-600 hover:bg-red-50 flex items-center transition-all duration-300 w-full">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {t.products}
                </button>
              </Link>
              <Link to="/promotions" onClick={() => setIsMenuOpen(false)}>
                <button className="text-gray-600 text-left py-3 hover:text-red-600 hover:bg-red-50 flex items-center transition-all duration-300 w-full">
                  <Gift className="w-4 h-4 mr-2" />
                  {t.promotions}
                </button>
              </Link>
              <Link to="/news" onClick={() => setIsMenuOpen(false)}>
                <button className="text-gray-600 text-left py-3 hover:text-red-600 hover:bg-red-50 flex items-center transition-all duration-300 w-full">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {t.news}
                </button>
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                <button className="text-gray-600 text-left py-3 hover:text-red-600 hover:bg-red-50 flex items-center transition-all duration-300 w-full">
                  <Shield className="w-4 h-4 mr-2" />
                  {t.about}
                </button>
              </Link>
              <Link to="/ib-program" onClick={() => setIsMenuOpen(false)}>
                <button className="text-gray-600 text-left py-3 hover:text-red-600 hover:bg-red-50 flex items-center transition-all duration-300 w-full">
                  <Users className="w-4 h-4 mr-2" />
                  {t.ib}
                </button>
              </Link>
            </div>
            
            <div className="flex flex-col space-y-2 mt-4">
              <Button onClick={handleSignUp} className="bg-red-600 hover:bg-red-700 text-white w-full justify-start p-3 rounded-full">
                {t.signUp}
              </Button>
              <Button onClick={handleLogin} variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-100 w-full justify-start p-3 rounded-full">
                <User className="w-4 h-4 mr-2" />
                {t.login}
              </Button>
              <Button onClick={handleDownload} variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 justify-start p-3 rounded-full">
                <Download className="w-4 h-4 mr-2" />
                {t.download}
              </Button>
            </div>
          </motion.div>
        )}
      </div>

    </motion.header>
  );
};

export default Header;
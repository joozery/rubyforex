import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import ForexCards from '@/components/ForexCards';
import Promotions from '@/components/Promotions';
import News from '@/components/News';
import MetaTraderSection from '@/components/MetaTraderSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [language, setLanguage] = useState('th');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'th' ? 'en' : 'th');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Helmet>
        <title>{language === 'th' ? 'โบรกเกอร์ Forex ชั้นนำ - เทรดกับเรา' : 'Leading Forex Broker - Trade with Us'}</title>
        <meta name="description" content={language === 'th' ? 'โบรกเกอร์ Forex ที่เชื่อถือได้ พร้อมแพลตฟอร์ม MT4/MT5 โบนัสพิเศษ และการศึกษาฟรี' : 'Trusted Forex broker with MT4/MT5 platforms, special bonuses, and free education'} />
      </Helmet>
      
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main>
        <HeroSlider language={language} />
        <ForexCards language={language} />
        <Promotions language={language} />
        <News language={language} />
        <MetaTraderSection language={language} />
      </main>
      <Footer language={language} />
      <Toaster />
    </div>
  );
}

export default App;
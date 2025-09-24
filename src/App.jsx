import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import Header from './components/Header';
import HeroClean from './components/HeroClean';
import ForexCards from './components/ForexCards';
import Promotions from './components/Promotions';
import News from './components/News';
import MetaTraderSection from './components/MetaTraderSection';
import Footer from './components/Footer';

// Pages
import Products from './pages/Products';
import PromotionsPage from './pages/Promotions';
import NewsPage from './pages/News';
import IBProgramPage from './pages/IBProgram';

function App() {
  const [language, setLanguage] = useState('th');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'th' ? 'en' : 'th');
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header 
          language={language} 
          toggleLanguage={toggleLanguage}
        />
        
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <HeroClean language={language} />
              <ForexCards language={language} />
              <Promotions language={language} />
              <News language={language} />
              <MetaTraderSection language={language} />
            </motion.main>
          } />
          
          {/* Products Page */}
          <Route path="/products" element={<Products language={language} />} />
          
          {/* Promotions Page */}
          <Route path="/promotions" element={<PromotionsPage language={language} />} />
          
          {/* News Page */}
          <Route path="/news" element={<NewsPage language={language} />} />
          
          {/* IB Program Page */}
          <Route path="/ib-program" element={<IBProgramPage language={language} />} />
        </Routes>
        
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
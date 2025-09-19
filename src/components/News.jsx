import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Globe, Clock, ArrowRight, Eye, MessageCircle, Share2, Bookmark, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const News = ({ language }) => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('all');

  const content = {
    th: {
      title: 'ข่าวสารตลาด',
      subtitle: 'ติดตามข่าวสารและการวิเคราะห์ตลาดล่าสุด',
      categories: {
        all: 'ทั้งหมด',
        forex: 'Forex',
        crypto: 'Crypto',
        stocks: 'หุ้น',
        commodities: 'สินค้าโภคภัณฑ์',
        economy: 'เศรษฐกิจ'
      },
      readMore: 'อ่านเพิ่มเติม',
      viewAll: 'ดูทั้งหมด',
      news: [
        {
          id: 1,
          title: 'Fed คาดว่าจะปรับลดอัตราดอกเบื้ย 0.25% ในการประชุมครั้งต่อไป',
          summary: 'นักวิเคราะห์คาดการณ์ว่า Federal Reserve จะลดอัตราดอกเบื้ยเพื่อกระตุ้นเศรษฐกิจ หลังจากที่ข้อมูลเงินเฟ้อแสดงสัญญาณที่ดีขึ้น',
          content: 'Federal Reserve กำลังพิจารณาการลดอัตราดอกเบื้ยในเดือนหน้า หลังจากที่ข้อมูลเงินเฟ้อล่าสุดแสดงให้เห็นว่าอัตราเงินเฟ้อเริ่มชะลอตัวลง...',
          time: '2 ชั่วโมงที่แล้ว',
          category: 'economy',
          author: 'RubyFX Research Team',
          views: 1250,
          comments: 23,
          image: '/api/placeholder/400/250',
          tags: ['Fed', 'ดอกเบื้ย', 'เศรษฐกิจ'],
          featured: true
        },
        {
          id: 2,
          title: 'ราคาทองคำพุ่งสูงสุดในรอบ 6 เดือน',
          summary: 'ความไม่แน่นอนทางการเมืองและเงินเฟ้อผลักดันราคาทองคำขึ้นสู่ระดับสูงสุดในรอบ 6 เดือน',
          content: 'ราคาทองคำพุ่งขึ้นอย่างต่อเนื่องในช่วงสัปดาห์ที่ผ่านมา เนื่องจากความไม่แน่นอนทางการเมืองและความกังวลเรื่องเงินเฟ้อ...',
          time: '4 ชั่วโมงที่แล้ว',
          category: 'commodities',
          author: 'Market Analyst',
          views: 980,
          comments: 15,
          image: '/api/placeholder/400/250',
          tags: ['ทองคำ', 'สินค้าโภคภัณฑ์', 'เงินเฟ้อ'],
          featured: false
        },
        {
          id: 3,
          title: 'EUR/USD แตะระดับ 1.0900 หลังข้อมูลเศรษฐกิจยุโรป',
          summary: 'ข้อมูล GDP ยุโรปที่ดีกว่าคาดหนุนค่าเงินยูโรแข็งค่าขึ้นต่อดอลลาร์สหรัฐ',
          content: 'คู่สกุลเงิน EUR/USD พุ่งขึ้นสู่ระดับ 1.0900 หลังจากที่ข้อมูล GDP ของยุโรปออกมาดีกว่าที่นักวิเคราะห์คาดการณ์ไว้...',
          time: '6 ชั่วโมงที่แล้ว',
          category: 'forex',
          author: 'Forex Expert',
          views: 756,
          comments: 8,
          image: '/api/placeholder/400/250',
          tags: ['EUR/USD', 'Forex', 'ยุโรป'],
          featured: false
        },
        {
          id: 4,
          title: 'Bitcoin แตะ $45,000 หลังข่าว ETF อนุมัติ',
          summary: 'ราคา Bitcoin พุ่งขึ้นอย่างรวดเร็วหลังข่าว ETF อนุมัติในสหรัฐอเมริกา',
          content: 'ราคา Bitcoin พุ่งขึ้นสู่ระดับ $45,000 หลังจากที่ SEC อนุมัติ Bitcoin ETF ในสหรัฐอเมริกา...',
          time: '8 ชั่วโมงที่แล้ว',
          category: 'crypto',
          author: 'Crypto Analyst',
          views: 2100,
          comments: 45,
          image: '/api/placeholder/400/250',
          tags: ['Bitcoin', 'ETF', 'Crypto'],
          featured: true
        },
        {
          id: 5,
          title: 'หุ้นเทคโนโลยีพุ่งขึ้นหลังรายได้ดีกว่าคาด',
          summary: 'หุ้นเทคโนโลยีชั้นนำพุ่งขึ้นอย่างแข็งแกร่งหลังรายได้ไตรมาสที่ 4 ดีกว่าที่นักวิเคราะห์คาดการณ์',
          content: 'หุ้นเทคโนโลยีชั้นนำในตลาดสหรัฐพุ่งขึ้นอย่างแข็งแกร่งในวันนี้ หลังจากที่บริษัทต่างๆ รายงานผลประกอบการไตรมาสที่ 4...',
          time: '10 ชั่วโมงที่แล้ว',
          category: 'stocks',
          author: 'Stock Analyst',
          views: 890,
          comments: 12,
          image: '/api/placeholder/400/250',
          tags: ['หุ้น', 'เทคโนโลยี', 'รายได้'],
          featured: false
        },
        {
          id: 6,
          title: 'ราคาน้ำมันดิบปรับตัวขึ้นหลังการผลิตลดลง',
          summary: 'ราคาน้ำมันดิบปรับตัวขึ้นหลังจากที่ OPEC+ ประกาศลดการผลิตในเดือนหน้า',
          content: 'ราคาน้ำมันดิบปรับตัวขึ้นอย่างต่อเนื่องหลังจากที่ OPEC+ ประกาศลดการผลิตในเดือนหน้า...',
          time: '12 ชั่วโมงที่แล้ว',
          category: 'commodities',
          author: 'Energy Analyst',
          views: 654,
          comments: 6,
          image: '/api/placeholder/400/250',
          tags: ['น้ำมัน', 'OPEC', 'พลังงาน'],
          featured: false
        }
      ]
    },
    en: {
      title: 'Market News',
      subtitle: 'Stay updated with latest market news and analysis',
      categories: {
        all: 'All',
        forex: 'Forex',
        crypto: 'Crypto',
        stocks: 'Stocks',
        commodities: 'Commodities',
        economy: 'Economy'
      },
      readMore: 'Read More',
      viewAll: 'View All',
      news: [
        {
          id: 1,
          title: 'Fed Expected to Cut Interest Rates by 0.25% in Next Meeting',
          summary: 'Analysts predict Federal Reserve will reduce interest rates to stimulate economy after inflation data shows positive signs',
          content: 'The Federal Reserve is considering cutting interest rates next month after the latest inflation data shows that inflation is starting to slow down...',
          time: '2 hours ago',
          category: 'economy',
          author: 'RubyFX Research Team',
          views: 1250,
          comments: 23,
          image: '/api/placeholder/400/250',
          tags: ['Fed', 'Interest Rates', 'Economy'],
          featured: true
        },
        {
          id: 2,
          title: 'Gold Prices Hit 6-Month High',
          summary: 'Political uncertainty and inflation concerns drive gold prices to their highest level in 6 months',
          content: 'Gold prices have been rising continuously over the past week due to political uncertainty and inflation concerns...',
          time: '4 hours ago',
          category: 'commodities',
          author: 'Market Analyst',
          views: 980,
          comments: 15,
          image: '/api/placeholder/400/250',
          tags: ['Gold', 'Commodities', 'Inflation'],
          featured: false
        },
        {
          id: 3,
          title: 'EUR/USD Touches 1.0900 After European Economic Data',
          summary: 'Better-than-expected European GDP data strengthens the Euro against the US Dollar',
          content: 'The EUR/USD currency pair surged to 1.0900 after European GDP data came out better than analysts expected...',
          time: '6 hours ago',
          category: 'forex',
          author: 'Forex Expert',
          views: 756,
          comments: 8,
          image: '/api/placeholder/400/250',
          tags: ['EUR/USD', 'Forex', 'Europe'],
          featured: false
        },
        {
          id: 4,
          title: 'Bitcoin Hits $45,000 After ETF Approval News',
          summary: 'Bitcoin price surged rapidly after ETF approval news in the United States',
          content: 'Bitcoin price surged to $45,000 after the SEC approved Bitcoin ETF in the United States...',
          time: '8 hours ago',
          category: 'crypto',
          author: 'Crypto Analyst',
          views: 2100,
          comments: 45,
          image: '/api/placeholder/400/250',
          tags: ['Bitcoin', 'ETF', 'Crypto'],
          featured: true
        },
        {
          id: 5,
          title: 'Tech Stocks Surge After Better-Than-Expected Earnings',
          summary: 'Leading technology stocks rose strongly after Q4 earnings beat analyst expectations',
          content: 'Leading technology stocks in the US market rose strongly today after companies reported Q4 earnings...',
          time: '10 hours ago',
          category: 'stocks',
          author: 'Stock Analyst',
          views: 890,
          comments: 12,
          image: '/api/placeholder/400/250',
          tags: ['Stocks', 'Technology', 'Earnings'],
          featured: false
        },
        {
          id: 6,
          title: 'Crude Oil Prices Rise After Production Cut Announcement',
          summary: 'Crude oil prices rose after OPEC+ announced production cuts for next month',
          content: 'Crude oil prices have been rising continuously after OPEC+ announced production cuts for next month...',
          time: '12 hours ago',
          category: 'commodities',
          author: 'Energy Analyst',
          views: 654,
          comments: 6,
          image: '/api/placeholder/400/250',
          tags: ['Oil', 'OPEC', 'Energy'],
          featured: false
        }
      ]
    }
  };

  const t = content[language];

  // Filter news based on active category
  const filteredNews = activeCategory === 'all' 
    ? t.news 
    : t.news.filter(article => article.category === activeCategory);

  // Get featured and regular news
  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  const handleReadMore = (article) => {
    toast({
      title: `📰 ${article.title}`,
      description: "This feature will be implemented soon!"
    });
  };

  const handleShare = (article) => {
    toast({
      title: "🔗 Share Article",
      description: `Sharing: ${article.title}`
    });
  };

  const handleBookmark = (article) => {
    toast({
      title: "🔖 Bookmarked",
      description: `Saved: ${article.title}`
    });
  };

  return (
    <section id="news" className="py-20 px-4 bg-gradient-to-b from-red-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="newsGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 38, 38, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#newsGrid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        {Array.from({ length: 10 }).map((_, i) => (
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
              background: i % 2 === 0 ? 'rgba(220, 38, 38, 0.4)' : 'rgba(16, 185, 129, 0.4)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
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
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1 border border-gray-600/30">
            <div className="flex space-x-1">
              {Object.entries(t.categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured News</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-600/30 hover:border-red-500/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-red-500/20 to-gray-700/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.time}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                        {t.categories[article.category]}
                      </span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleBookmark(article)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Bookmark className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleShare(article)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-400 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {article.summary}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <span>By {article.author}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {article.comments}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button 
                      onClick={() => handleReadMore(article)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105"
                    >
                      {t.readMore}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Latest News</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-600/30 hover:border-red-500/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Image Placeholder */}
                <div className="h-40 bg-gradient-to-br from-gray-600/30 to-gray-700/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gray-700/80 text-gray-300 px-2 py-1 rounded text-xs font-medium">
                      {t.categories[article.category]}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center text-white text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.time}
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-xs">By {article.author}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleBookmark(article)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Bookmark className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => handleShare(article)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Share2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {article.summary}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3 text-gray-400 text-xs">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {article.views}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        {article.comments}
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleReadMore(article)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-sm transition-all duration-300 hover:scale-105"
                  >
                    {t.readMore}
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            onClick={() => toast({ title: "📰 View All News", description: "This feature will be implemented soon!" })}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            {t.viewAll}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
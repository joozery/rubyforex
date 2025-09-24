import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp, TrendingDown, BarChart3, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const News = ({ language }) => {
  const content = {
    th: {
      title: 'ข่าวสารตลาด',
      subtitle: 'ติดตามข่าวสารและวิเคราะห์ตลาดการเงินล่าสุด',
      latest: 'ข่าวล่าสุด',
      analysis: 'การวิเคราะห์',
      market: 'ตลาด',
      readMore: 'อ่านเพิ่มเติม',
      published: 'เผยแพร่เมื่อ',
      author: 'โดย',
      category: 'หมวดหมู่',
      categories: {
        forex: 'Forex',
        gold: 'ทองคำ',
        oil: 'น้ำมัน',
        stocks: 'หุ้น',
        crypto: 'คริปโต',
        economy: 'เศรษฐกิจ'
      }
    },
    en: {
      title: 'Market News',
      subtitle: 'Stay updated with the latest financial market news and analysis',
      latest: 'Latest News',
      analysis: 'Analysis',
      market: 'Market',
      readMore: 'Read More',
      published: 'Published',
      author: 'By',
      category: 'Category',
      categories: {
        forex: 'Forex',
        gold: 'Gold',
        oil: 'Oil',
        stocks: 'Stocks',
        crypto: 'Crypto',
        economy: 'Economy'
      }
    }
  };

  const t = content[language];

  const newsArticles = [
    {
      id: 1,
      title: language === 'th' ? 'ดอลลาร์สหรัฐแข็งค่าขึ้นหลังข้อมูลเศรษฐกิจดีกว่าคาด' : 'US Dollar Strengthens After Better-Than-Expected Economic Data',
      excerpt: language === 'th' ? 'ดอลลาร์สหรัฐเพิ่มขึ้นอย่างต่อเนื่องหลังข้อมูลการจ้างงานและอัตราเงินเฟ้อออกมาดีกว่าที่คาดการณ์ไว้' : 'The US dollar continues to rise after employment and inflation data came out better than expected',
      content: language === 'th' ? 'ดอลลาร์สหรัฐเพิ่มขึ้นอย่างต่อเนื่องหลังข้อมูลการจ้างงานและอัตราเงินเฟ้อออกมาดีกว่าที่คาดการณ์ไว้ โดยดัชนีดอลลาร์เพิ่มขึ้น 0.8% ในสัปดาห์นี้' : 'The US dollar continues to rise after employment and inflation data came out better than expected, with the dollar index rising 0.8% this week',
      category: 'forex',
      author: 'John Smith',
      publishedAt: '2024-01-15',
      readTime: '5 min',
      image: '/api/placeholder/400/250',
      trending: true,
      change: '+0.8%'
    },
    {
      id: 2,
      title: language === 'th' ? 'ราคาทองคำปรับตัวขึ้นหลังความไม่แน่นอนทางการเมือง' : 'Gold Prices Rise Amid Political Uncertainty',
      excerpt: language === 'th' ? 'ราคาทองคำเพิ่มขึ้นอย่างต่อเนื่องหลังความไม่แน่นอนทางการเมืองในหลายประเทศ' : 'Gold prices continue to rise amid political uncertainty in several countries',
      content: language === 'th' ? 'ราคาทองคำเพิ่มขึ้นอย่างต่อเนื่องหลังความไม่แน่นอนทางการเมืองในหลายประเทศ โดยราคาทองคำเพิ่มขึ้น 2.3% ในสัปดาห์นี้' : 'Gold prices continue to rise amid political uncertainty in several countries, with gold prices rising 2.3% this week',
      category: 'gold',
      author: 'Sarah Johnson',
      publishedAt: '2024-01-14',
      readTime: '4 min',
      image: '/api/placeholder/400/250',
      trending: true,
      change: '+2.3%'
    },
    {
      id: 3,
      title: language === 'th' ? 'ราคาน้ำมันดิบลดลงหลังการผลิตเพิ่มขึ้น' : 'Crude Oil Prices Fall After Production Increase',
      excerpt: language === 'th' ? 'ราคาน้ำมันดิบลดลงอย่างต่อเนื่องหลังการผลิตน้ำมันเพิ่มขึ้นในหลายประเทศ' : 'Crude oil prices continue to fall after oil production increased in several countries',
      content: language === 'th' ? 'ราคาน้ำมันดิบลดลงอย่างต่อเนื่องหลังการผลิตน้ำมันเพิ่มขึ้นในหลายประเทศ โดยราคาน้ำมันดิบลดลง 1.5% ในสัปดาห์นี้' : 'Crude oil prices continue to fall after oil production increased in several countries, with crude oil prices falling 1.5% this week',
      category: 'oil',
      author: 'Mike Chen',
      publishedAt: '2024-01-13',
      readTime: '6 min',
      image: '/api/placeholder/400/250',
      trending: false,
      change: '-1.5%'
    },
    {
      id: 4,
      title: language === 'th' ? 'ตลาดหุ้นเอเชียเพิ่มขึ้นหลังข้อมูลเศรษฐกิจดี' : 'Asian Stock Markets Rise After Good Economic Data',
      excerpt: language === 'th' ? 'ตลาดหุ้นเอเชียเพิ่มขึ้นอย่างต่อเนื่องหลังข้อมูลเศรษฐกิจออกมาดีกว่าที่คาดการณ์ไว้' : 'Asian stock markets continue to rise after economic data came out better than expected',
      content: language === 'th' ? 'ตลาดหุ้นเอเชียเพิ่มขึ้นอย่างต่อเนื่องหลังข้อมูลเศรษฐกิจออกมาดีกว่าที่คาดการณ์ไว้ โดยดัชนีหุ้นเอเชียเพิ่มขึ้น 1.2% ในสัปดาห์นี้' : 'Asian stock markets continue to rise after economic data came out better than expected, with Asian stock indices rising 1.2% this week',
      category: 'stocks',
      author: 'Lisa Wang',
      publishedAt: '2024-01-12',
      readTime: '5 min',
      image: '/api/placeholder/400/250',
      trending: true,
      change: '+1.2%'
    },
    {
      id: 5,
      title: language === 'th' ? 'บิตคอยน์เพิ่มขึ้นหลังการยอมรับจากสถาบันการเงิน' : 'Bitcoin Rises After Institutional Adoption',
      excerpt: language === 'th' ? 'บิตคอยน์เพิ่มขึ้นอย่างต่อเนื่องหลังสถาบันการเงินหลายแห่งยอมรับการใช้งาน' : 'Bitcoin continues to rise after several financial institutions adopted its use',
      content: language === 'th' ? 'บิตคอยน์เพิ่มขึ้นอย่างต่อเนื่องหลังสถาบันการเงินหลายแห่งยอมรับการใช้งาน โดยราคาบิตคอยน์เพิ่มขึ้น 3.5% ในสัปดาห์นี้' : 'Bitcoin continues to rise after several financial institutions adopted its use, with Bitcoin prices rising 3.5% this week',
      category: 'crypto',
      author: 'David Kim',
      publishedAt: '2024-01-11',
      readTime: '7 min',
      image: '/api/placeholder/400/250',
      trending: true,
      change: '+3.5%'
    },
    {
      id: 6,
      title: language === 'th' ? 'เศรษฐกิจโลกเติบโตดีกว่าที่คาดการณ์' : 'Global Economy Grows Better Than Expected',
      excerpt: language === 'th' ? 'เศรษฐกิจโลกเติบโตดีกว่าที่คาดการณ์ไว้ในไตรมาสที่ผ่านมา' : 'The global economy grew better than expected in the past quarter',
      content: language === 'th' ? 'เศรษฐกิจโลกเติบโตดีกว่าที่คาดการณ์ไว้ในไตรมาสที่ผ่านมา โดย GDP โลกเพิ่มขึ้น 2.8% ในไตรมาสที่ผ่านมา' : 'The global economy grew better than expected in the past quarter, with global GDP rising 2.8% in the past quarter',
      category: 'economy',
      author: 'Robert Taylor',
      publishedAt: '2024-01-10',
      readTime: '8 min',
      image: '/api/placeholder/400/250',
      trending: true,
      change: '+2.8%'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'forex': return Globe;
      case 'gold': return TrendingUp;
      case 'oil': return BarChart3;
      case 'stocks': return TrendingUp;
      case 'crypto': return TrendingUp;
      case 'economy': return Users;
      default: return BarChart3;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'forex': return 'from-blue-500 to-blue-600';
      case 'gold': return 'from-yellow-500 to-yellow-600';
      case 'oil': return 'from-orange-500 to-orange-600';
      case 'stocks': return 'from-green-500 to-green-600';
      case 'crypto': return 'from-purple-500 to-purple-600';
      case 'economy': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

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

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => {
              const CategoryIcon = getCategoryIcon(article.category);
              const categoryColor = getCategoryColor(article.category);
              
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CategoryIcon className="w-16 h-16 text-gray-400" />
                    </div>
                    {article.trending && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          {t.latest}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="flex items-center mb-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${categoryColor} text-white text-xs font-bold rounded-full`}>
                        {t.categories[article.category]}
                      </span>
                      <span className="ml-2 text-gray-500 text-sm">
                        {article.change}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.publishedAt}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>

                    {/* Author */}
                    <div className="text-sm text-gray-500 mb-4">
                      {t.author} {article.author}
                    </div>

                    {/* Read More Button */}
                    <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg transition-all duration-300">
                      {t.readMore}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default News;

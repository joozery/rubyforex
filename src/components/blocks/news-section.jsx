import React, { useState } from 'react';

const NewsSection = ({ language = 'th' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const newsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=face",
      date: "25 Jun",
      author: "By Admin",
      comments: "Comments (05)",
      title: language === 'th' 
        ? "เทคนิคการเทรด Forex สำหรับมือใหม่" 
        : "Forex Trading Techniques for Beginners",
      description: language === 'th'
        ? "เรียนรู้พื้นฐานการเทรด Forex และเทคนิคที่สำคัญสำหรับนักลงทุนหน้าใหม่"
        : "Learn the basics of Forex trading and essential techniques for new investors"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=face",
      date: "25 Jun",
      author: "By Admin",
      comments: "Comments (05)",
      title: language === 'th'
        ? "การวิเคราะห์ตลาด Cryptocurrency"
        : "Cryptocurrency Market Analysis",
      description: language === 'th'
        ? "เข้าใจการเคลื่อนไหวของตลาดคริปโตและปัจจัยที่มีผลต่อราคา"
        : "Understand cryptocurrency market movements and factors affecting prices"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=face",
      date: "25 Jun",
      author: "By Admin",
      comments: "Comments (05)",
      title: language === 'th'
        ? "การจัดการความเสี่ยงในการลงทุน"
        : "Risk Management in Investment",
      description: language === 'th'
        ? "วิธีการจัดการความเสี่ยงและปกป้องเงินทุนในการลงทุน"
        : "Methods to manage risks and protect capital in investments"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=face",
      date: "25 Jun",
      author: "By Admin",
      comments: "Comments (05)",
      title: language === 'th'
        ? "เทรนด์ตลาดการเงินปี 2024"
        : "Financial Market Trends 2024",
      description: language === 'th'
        ? "วิเคราะห์เทรนด์และโอกาสการลงทุนในตลาดการเงินปี 2024"
        : "Analyze trends and investment opportunities in 2024 financial markets"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=face",
      date: "24 Jun",
      author: "By Admin",
      comments: "Comments (08)",
      title: language === 'th'
        ? "การวิเคราะห์เทคนิคด้วย AI"
        : "Technical Analysis with AI",
      description: language === 'th'
        ? "ใช้ปัญญาประดิษฐ์ในการวิเคราะห์กราฟและทำนายราคา"
        : "Using artificial intelligence for chart analysis and price prediction"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop&crop=face",
      date: "24 Jun",
      author: "By Admin",
      comments: "Comments (12)",
      title: language === 'th'
        ? "กลยุทธ์การเทรด Swing Trading"
        : "Swing Trading Strategies",
      description: language === 'th'
        ? "เทคนิคการเทรดระยะกลางเพื่อทำกำไรจากเทรนด์"
        : "Medium-term trading techniques to profit from trends"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=face",
      date: "23 Jun",
      author: "By Admin",
      comments: "Comments (15)",
      title: language === 'th'
        ? "การเทรด Forex ในช่วงข่าวสำคัญ"
        : "Forex Trading During Major News",
      description: language === 'th'
        ? "วิธีการเทรดอย่างปลอดภัยในช่วงที่มีข่าวเศรษฐกิจสำคัญ"
        : "How to trade safely during major economic news events"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=face",
      date: "23 Jun",
      author: "By Admin",
      comments: "Comments (07)",
      title: language === 'th'
        ? "การสร้าง Portfolio ที่สมดุล"
        : "Building a Balanced Portfolio",
      description: language === 'th'
        ? "วิธีการกระจายความเสี่ยงและสร้างพอร์ตการลงทุนที่แข็งแกร่ง"
        : "How to diversify risk and build a strong investment portfolio"
    }
  ];

  const getCardsPerSlide = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 2 : 4; // 2 cards on mobile, 4 on desktop
    }
    return 4; // Default for SSR
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(4);
  const totalSlides = Math.ceil(newsData.length / cardsPerSlide);

  // Update cards per slide on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentCards = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return newsData.slice(startIndex, startIndex + cardsPerSlide);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
            {language === 'th' ? 'ข่าวสารตลาดล่าสุด' : 'RECENT BLOG & NEWS'}
          </h2>
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl self-start sm:self-auto">
            {language === 'th' ? 'สำรวจบล็อกทั้งหมด' : 'Explore All Blog'}
          </button>
        </div>

        {/* Blog Cards Grid with Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={prevSlide}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === 0}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === totalSlides - 1}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {getCurrentCards().map((news) => (
            <article key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-40 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Date Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-black text-white px-3 py-2 rounded-lg text-sm font-bold shadow-lg transform hover:scale-105 transition-transform duration-200">
                    <div className="text-lg leading-none">{news.date.split(' ')[0]}</div>
                    <div className="text-xs leading-none">{news.date.split(' ')[1]}</div>
                  </div>
                </div>
              </div>

              {/* Meta Info Bar */}
              <div className="px-3 md:px-4 py-2 md:py-3 flex items-center text-gray-500 text-xs md:text-sm">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>{news.author}</span>
                </div>
                <span className="mx-2 text-gray-400">|</span>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  <span>{news.comments}</span>
                </div>
              </div>

              {/* Content */}
              <div className="px-3 md:px-4 pb-3 md:pb-4 bg-white">
                {/* Title */}
                <h3 className="text-gray-900 text-sm md:text-lg font-bold mb-2 md:mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                  {news.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 leading-relaxed">
                  {news.description}
                </p>

                {/* Continue Reading Button */}
                <div className="flex justify-end">
                  <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 md:px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg text-xs md:text-sm">
                    {language === 'th' ? 'อ่านต่อ' : 'Continue Reading'}
                  </button>
                </div>
              </div>
            </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;

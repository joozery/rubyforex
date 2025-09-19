import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, Users, TrendingUp, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Education = ({ language }) => {
  const { toast } = useToast();

  const content = {
    th: {
      title: 'ศูนย์การเรียนรู้',
      subtitle: 'เรียนรู้การเทรดจากผู้เชี่ยวชาญ',
      courses: {
        title: 'คอร์สเรียนออนไลน์',
        description: 'เรียนรู้การเทรดตั้งแต่พื้นฐานจนถึงขั้นสูง',
        features: ['คอร์สฟรี 20+ หลักสูตร', 'วิดีโอ HD คุณภาพสูง', 'ใบประกาศนียบัตร']
      },
      webinar: {
        title: 'Webinar สด',
        description: 'เข้าร่วม Webinar สดกับผู้เชี่ยวชาญ',
        features: ['สดทุกวันอังคาร-พฤหัส', 'Q&A กับผู้เชี่ยวชาญ', 'บันทึกการสอน']
      },
      ebook: {
        title: 'E-book ฟรี',
        description: 'ดาวน์โหลด E-book การเทรดฟรี',
        features: ['50+ หนังสือดิจิทัล', 'อัปเดตเนื้อหาใหม่', 'อ่านได้ทุกอุปกรณ์']
      },
      community: {
        title: 'ชุมชนเทรดเดอร์',
        description: 'เข้าร่วมชุมชนเทรดเดอร์ไทย',
        features: ['สมาชิก 10,000+ คน', 'แชร์ไอเดียการเทรด', 'ช่วยเหลือซึ่งกันและกัน']
      },
      analysis: {
        title: 'การวิเคราะห์ตลาด',
        description: 'รับการวิเคราะห์ตลาดรายวัน',
        features: ['วิเคราะห์เทคนิค', 'วิเคราะห์พื้นฐาน', 'สัญญาณการเทรด']
      },
      strategy: {
        title: 'กลยุทธ์การเทรด',
        description: 'เรียนรู้กลยุทธ์จากโปรเทรดเดอร์',
        features: ['Scalping Strategy', 'Swing Trading', 'Day Trading']
      },
      startLearning: 'เริ่มเรียนรู้'
    },
    en: {
      title: 'Education Center',
      subtitle: 'Learn trading from experts',
      courses: {
        title: 'Online Courses',
        description: 'Learn trading from basics to advanced',
        features: ['20+ free courses', 'HD quality videos', 'Certificates']
      },
      webinar: {
        title: 'Live Webinars',
        description: 'Join live webinars with experts',
        features: ['Live Tue-Thu', 'Expert Q&A', 'Recorded sessions']
      },
      ebook: {
        title: 'Free E-books',
        description: 'Download free trading e-books',
        features: ['50+ digital books', 'Updated content', 'Multi-device reading']
      },
      community: {
        title: 'Trader Community',
        description: 'Join our trader community',
        features: ['10,000+ members', 'Share trading ideas', 'Mutual support']
      },
      analysis: {
        title: 'Market Analysis',
        description: 'Get daily market analysis',
        features: ['Technical analysis', 'Fundamental analysis', 'Trading signals']
      },
      strategy: {
        title: 'Trading Strategies',
        description: 'Learn strategies from pro traders',
        features: ['Scalping Strategy', 'Swing Trading', 'Day Trading']
      },
      startLearning: 'Start Learning'
    }
  };

  const handleLearn = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const t = content[language];

  const educationItems = [
    { icon: BookOpen, color: 'text-blue-600 bg-blue-100', buttonColor: 'bg-blue-600 hover:bg-blue-700', data: t.courses },
    { icon: Video, color: 'text-red-600 bg-red-100', buttonColor: 'bg-red-600 hover:bg-red-700', data: t.webinar },
    { icon: FileText, color: 'text-green-600 bg-green-100', buttonColor: 'bg-green-600 hover:bg-green-700', data: t.ebook },
    { icon: Users, color: 'text-purple-600 bg-purple-100', buttonColor: 'bg-purple-600 hover:bg-purple-700', data: t.community },
    { icon: TrendingUp, color: 'text-orange-600 bg-orange-100', buttonColor: 'bg-orange-600 hover:bg-orange-700', data: t.analysis },
    { icon: Brain, color: 'text-indigo-600 bg-indigo-100', buttonColor: 'bg-indigo-600 hover:bg-indigo-700', data: t.strategy }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.data.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{item.data.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {item.data.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={handleLearn}
                  className={`w-full ${item.buttonColor} text-white transition-opacity mt-auto`}
                >
                  {t.startLearning}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
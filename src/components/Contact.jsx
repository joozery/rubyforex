import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Clock, MapPin, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = ({ language }) => {
  const { toast } = useToast();

  const content = {
    th: {
      title: 'ติดต่อเรา',
      subtitle: 'ทีมสนับสนุนพร้อมให้บริการ 24/7',
      phone: 'โทรศัพท์',
      email: 'อีเมล',
      chat: 'แชทสด',
      support: 'ศูนย์ช่วยเหลือ',
      office: 'สำนักงาน',
      hours: 'เวลาทำการ',
      phoneNumber: '+66 2-123-4567',
      emailAddress: 'support@forexpro.com',
      chatText: 'แชทสดตลอด 24 ชั่วโมง',
      supportText: 'ศูนย์ช่วยเหลือออนไลน์',
      officeAddress: '123 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพฯ 10500',
      workingHours: 'จันทร์ - ศุกร์: 8:00 - 18:00 น.',
      contactMethods: [
        {
          icon: Phone,
          title: 'โทรศัพท์',
          description: 'โทรหาเราได้ตลอด 24 ชั่วโมง',
          contact: '+66 2-123-4567',
          color: 'text-green-600 bg-green-100',
          buttonColor: 'bg-green-600 hover:bg-green-700'
        },
        {
          icon: Mail,
          title: 'อีเมล',
          description: 'ส่งอีเมลสอบถามได้ทุกเวลา',
          contact: 'support@forexpro.com',
          color: 'text-blue-600 bg-blue-100',
          buttonColor: 'bg-blue-600 hover:bg-blue-700'
        },
        {
          icon: MessageCircle,
          title: 'แชทสด',
          description: 'แชทกับเจ้าหน้าที่ได้ทันที',
          contact: 'เริ่มแชท',
          color: 'text-purple-600 bg-purple-100',
          buttonColor: 'bg-purple-600 hover:bg-purple-700'
        },
        {
          icon: Headphones,
          title: 'ศูนย์ช่วยเหลือ',
          description: 'คำถามที่พบบ่อยและคู่มือ',
          contact: 'เข้าชม',
          color: 'text-orange-600 bg-orange-100',
          buttonColor: 'bg-orange-600 hover:bg-orange-700'
        }
      ]
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Our support team is available 24/7',
      phone: 'Phone',
      email: 'Email',
      chat: 'Live Chat',
      support: 'Help Center',
      office: 'Office',
      hours: 'Working Hours',
      phoneNumber: '+66 2-123-4567',
      emailAddress: 'support@forexpro.com',
      chatText: '24/7 Live Chat',
      supportText: 'Online Help Center',
      officeAddress: '123 Silom Road, Silom, Bang Rak, Bangkok 10500',
      workingHours: 'Monday - Friday: 8:00 AM - 6:00 PM',
      contactMethods: [
        {
          icon: Phone,
          title: 'Phone',
          description: 'Call us anytime, 24/7 support',
          contact: '+66 2-123-4567',
          color: 'text-green-600 bg-green-100',
          buttonColor: 'bg-green-600 hover:bg-green-700'
        },
        {
          icon: Mail,
          title: 'Email',
          description: 'Send us an email anytime',
          contact: 'support@forexpro.com',
          color: 'text-blue-600 bg-blue-100',
          buttonColor: 'bg-blue-600 hover:bg-blue-700'
        },
        {
          icon: MessageCircle,
          title: 'Live Chat',
          description: 'Chat with our agents instantly',
          contact: 'Start Chat',
          color: 'text-purple-600 bg-purple-100',
          buttonColor: 'bg-purple-600 hover:bg-purple-700'
        },
        {
          icon: Headphones,
          title: 'Help Center',
          description: 'FAQs and user guides',
          contact: 'Visit',
          color: 'text-orange-600 bg-orange-100',
          buttonColor: 'bg-orange-600 hover:bg-orange-700'
        }
      ]
    }
  };

  const handleContact = (method) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const t = content[language];

  return (
    <section id="contact" className="py-20 px-4 bg-white">
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

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {t.contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{method.description}</p>
                  
                  <Button 
                    onClick={() => handleContact(method.title)}
                    className={`w-full ${method.buttonColor} text-white transition-opacity mt-auto`}
                  >
                    {method.contact}
                  </Button>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">{t.office}</h3>
              </div>
              <p className="text-gray-600">{t.officeAddress}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">{t.hours}</h3>
              </div>
              <p className="text-gray-600">{t.workingHours}</p>
              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <p className="text-green-800 font-semibold">
                  {language === 'th' ? 'สนับสนุนลูกค้า 24/7' : '24/7 Customer Support'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {language === 'th' ? 'ที่ตั้งสำนักงาน' : 'Office Location'}
            </h3>
            <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <p className="text-gray-800 font-semibold">
                  {language === 'th' ? 'แผนที่สำนักงาน' : 'Office Map'}
                </p>
                <p className="text-gray-500 text-sm">
                  {language === 'th' ? 'คลิกเพื่อดูแผนที่' : 'Click to view map'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
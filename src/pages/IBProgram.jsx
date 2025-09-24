import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, TrendingUp, Shield, Award, CheckCircle, ArrowRight, Mail, Phone, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Footer from '@/components/Footer';

const IBProgram = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    experience: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const content = {
    th: {
      title: 'IB Program',
      subtitle: 'เป็นพันธมิตรกับ RubyFX และรับรายได้จากการแนะนำลูกค้า',
      heroTitle: 'เริ่มต้นเป็น Introducing Broker',
      heroSubtitle: 'รับคอมมิชชั่นสูงสุด 30% จากการแนะนำลูกค้า',
      benefits: {
        title: 'สิทธิประโยชน์ของ IB',
        items: [
          {
            title: 'คอมมิชชั่นสูงสุด 30%',
            description: 'รับรายได้จากการแนะนำลูกค้า',
            icon: TrendingUp
          },
          {
            title: 'การสนับสนุนเต็มรูปแบบ',
            description: 'ทีมงานพร้อมช่วยเหลือตลอดเวลา',
            icon: Shield
          },
          {
            title: 'เครื่องมือการตลาด',
            description: 'ได้รับเครื่องมือและวัสดุการตลาด',
            icon: Award
          },
          {
            title: 'รายงานผลการดำเนินงาน',
            description: 'ติดตามผลการดำเนินงานแบบเรียลไทม์',
            icon: Star
          }
        ]
      },
      requirements: {
        title: 'ข้อกำหนดการสมัคร',
        items: [
          'มีประสบการณ์ในธุรกิจการเงิน',
          'มีเครือข่ายลูกค้าที่มีศักยภาพ',
          'เข้าใจผลิตภัณฑ์การเทรด',
          'สามารถทำงานเป็นทีมได้'
        ]
      },
      form: {
        title: 'สมัครเป็น IB',
        name: 'ชื่อ-นามสกุล',
        email: 'อีเมล',
        phone: 'เบอร์โทรศัพท์',
        company: 'บริษัท/องค์กร',
        experience: 'ประสบการณ์ในธุรกิจการเงิน',
        message: 'ข้อความเพิ่มเติม',
        submit: 'ส่งใบสมัคร',
        submitting: 'กำลังส่ง...'
      },
      success: {
        title: 'ส่งใบสมัครสำเร็จ!',
        message: 'เราจะติดต่อกลับภายใน 24 ชั่วโมง'
      }
    },
    en: {
      title: 'IB Program',
      subtitle: 'Partner with RubyFX and earn from client referrals',
      heroTitle: 'Become an Introducing Broker',
      heroSubtitle: 'Earn up to 30% commission from client referrals',
      benefits: {
        title: 'IB Benefits',
        items: [
          {
            title: 'Up to 30% Commission',
            description: 'Earn from client referrals',
            icon: TrendingUp
          },
          {
            title: 'Full Support',
            description: 'Our team is ready to help anytime',
            icon: Shield
          },
          {
            title: 'Marketing Tools',
            description: 'Get marketing tools and materials',
            icon: Award
          },
          {
            title: 'Performance Reports',
            description: 'Track performance in real-time',
            icon: Star
          }
        ]
      },
      requirements: {
        title: 'Application Requirements',
        items: [
          'Experience in financial business',
          'Network of potential clients',
          'Understanding of trading products',
          'Ability to work as a team'
        ]
      },
      form: {
        title: 'Apply as IB',
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone Number',
        company: 'Company/Organization',
        experience: 'Experience in Financial Business',
        message: 'Additional Message',
        submit: 'Submit Application',
        submitting: 'Submitting...'
      },
      success: {
        title: 'Application Submitted Successfully!',
        message: 'We will contact you within 24 hours'
      }
    }
  };

  const t = content[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: t.success.title,
        description: t.success.message
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        experience: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t.heroSubtitle}
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                <Users className="w-6 h-6 text-red-600 mr-2" />
                <span className="text-gray-700 font-medium">30% Commission</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                <span className="text-gray-700 font-medium">Full Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t.benefits.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t.requirements.title}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.requirements.items.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center bg-white rounded-xl p-6 shadow-lg"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t.form.title}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.name} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder={t.form.name}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.email} *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder={t.form.email}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.phone} *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder={t.form.phone}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.company}
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder={t.form.company}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.experience}
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder={t.form.experience}
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder={t.form.message}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg transition-all duration-300 py-3 text-lg font-medium"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {t.form.submitting}
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    {t.form.submit}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default IBProgram;

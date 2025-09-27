import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Star, 
  TrendingUp, 
  Shield, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  User, 
  Building,
  DollarSign,
  Clock,
  Globe,
  Target,
  Zap,
  Sparkles,
  Crown,
  Rocket,
  BarChart3,
  Headphones,
  FileText,
  Gift
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

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
            icon: TrendingUp,
            color: 'from-green-500 to-emerald-600'
          },
          {
            title: 'การสนับสนุนเต็มรูปแบบ',
            description: 'ทีมงานพร้อมช่วยเหลือตลอดเวลา',
            icon: Shield,
            color: 'from-blue-500 to-cyan-600'
          },
          {
            title: 'เครื่องมือการตลาด',
            description: 'ได้รับเครื่องมือและวัสดุการตลาด',
            icon: Award,
            color: 'from-purple-500 to-violet-600'
          },
          {
            title: 'รายงานผลการดำเนินงาน',
            description: 'ติดตามผลการดำเนินงานแบบเรียลไทม์',
            icon: Star,
            color: 'from-yellow-500 to-orange-600'
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
            icon: TrendingUp,
            color: 'from-green-500 to-emerald-600'
          },
          {
            title: 'Full Support',
            description: 'Our team is ready to help anytime',
            icon: Shield,
            color: 'from-blue-500 to-cyan-600'
          },
          {
            title: 'Marketing Tools',
            description: 'Get marketing tools and materials',
            icon: Award,
            color: 'from-purple-500 to-violet-600'
          },
          {
            title: 'Performance Reports',
            description: 'Track performance in real-time',
            icon: Star,
            color: 'from-yellow-500 to-orange-600'
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
            >
              <Crown className="w-5 h-5 text-red-400" />
              <span className="text-red-400 text-sm font-medium">
                {language === 'th' ? 'โปรแกรมพันธมิตร' : 'Partnership Program'}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {t.heroTitle}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              {t.heroSubtitle}
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 mb-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-8 h-8 text-green-400" />
                  <div>
                    <div className="text-2xl font-bold text-white">30%</div>
                    <div className="text-sm text-gray-300">Commission</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-blue-400" />
                  <div>
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-300">Support</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Globe className="w-8 h-8 text-purple-400" />
                  <div>
                    <div className="text-2xl font-bold text-white">Global</div>
                    <div className="text-sm text-gray-300">Reach</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                {language === 'th' ? 'เริ่มต้นเลย' : 'Get Started'}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {t.benefits.title}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {language === 'th' ? 'สิทธิประโยชน์ที่คุณจะได้รับเมื่อเป็น IB กับเรา' : 'Benefits you will receive as our IB partner'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-4 text-center">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-center">
                      {benefit.description}
                    </p>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {t.requirements.title}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {language === 'th' ? 'ข้อกำหนดเบื้องต้นสำหรับการสมัครเป็น IB' : 'Basic requirements for IB application'}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.requirements.items.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="text-white font-medium text-lg">{requirement}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                {t.form.title}
              </h2>
              <p className="text-gray-300 text-lg">
                {language === 'th' ? 'กรอกข้อมูลเพื่อสมัครเป็น IB กับเรา' : 'Fill out the form to apply as our IB partner'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
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
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder={t.form.name}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
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
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder={t.form.email}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
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
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder={t.form.phone}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    {t.form.company}
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder={t.form.company}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">
                  {t.form.experience}
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder={t.form.experience}
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-white mb-2">
                  {t.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder={t.form.message}
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white hover:shadow-lg transition-all duration-300 py-4 text-lg font-medium rounded-2xl"
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
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-red-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {language === 'th' ? 'พร้อมเริ่มต้นแล้วหรือยัง?' : 'Ready to get started?'}
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                {language === 'th' ? 'เข้าร่วมกับเราและเริ่มสร้างรายได้จากการแนะนำลูกค้า' : 'Join us and start earning from client referrals'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center space-x-2 text-white">
                  <Headphones className="w-5 h-5 text-green-400" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Free Materials</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Gift className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">Bonus Rewards</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IBProgram;
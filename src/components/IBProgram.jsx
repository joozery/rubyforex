import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, TrendingUp, Shield, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const IBProgram = ({ language, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  });

  const content = {
    th: {
      title: 'IB Program',
      subtitle: 'สมัครเป็น Introducing Broker',
      description: 'ร่วมเป็นพาร์ทเนอร์กับเราและรับค่าคอมมิชชั่นสูงสุด',
      benefits: {
        title: 'สิทธิประโยชน์',
        items: [
          'ค่าคอมมิชชั่นสูงสุด 70%',
          'การสนับสนุนตลอด 24 ชั่วโมง',
          'เครื่องมือการตลาดฟรี',
          'การฝึกอบรมและพัฒนาอย่างต่อเนื่อง',
          'ระบบรายงานที่ทันสมัย'
        ]
      },
      form: {
        firstName: 'ชื่อ',
        lastName: 'นามสกุล',
        email: 'อีเมล',
        phone: 'เบอร์โทรศัพท์',
        experience: 'ประสบการณ์การเทรด',
        message: 'ข้อความเพิ่มเติม',
        submit: 'ส่งใบสมัคร',
        required: 'กรุณากรอกข้อมูลให้ครบถ้วน'
      },
      success: 'ส่งใบสมัครเรียบร้อยแล้ว! เราจะติดต่อกลับภายใน 24 ชั่วโมง',
      error: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง'
    },
    en: {
      title: 'IB Program',
      subtitle: 'Become an Introducing Broker',
      description: 'Partner with us and earn maximum commissions',
      benefits: {
        title: 'Benefits',
        items: [
          'Up to 70% commission',
          '24/7 support',
          'Free marketing tools',
          'Continuous training and development',
          'Advanced reporting system'
        ]
      },
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone Number',
        experience: 'Trading Experience',
        message: 'Additional Message',
        submit: 'Submit Application',
        required: 'Please fill in all required fields'
      },
      success: 'Application submitted successfully! We will contact you within 24 hours',
      error: 'An error occurred. Please try again'
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
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "⚠️ " + t.form.required,
        variant: "destructive"
      });
      return;
    }

    try {
      // Here you would typically send the data to your backend
      console.log('IB Application Data:', formData);
      
      toast({
        title: "✅ " + t.success,
        description: "Thank you for your interest in our IB Program"
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        experience: '',
        message: ''
      });
      
      // Close modal after successful submission
      setTimeout(() => {
        onClose();
      }, 2000);
      
    } catch (error) {
      toast({
        title: "❌ " + t.error,
        variant: "destructive"
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">{t.title}</h2>
              <p className="text-red-100">{t.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-red-200 transition-colors p-2 rounded-full hover:bg-red-600/20"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Benefits Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.benefits.title}</h3>
              <div className="space-y-4">
                {t.benefits.items.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-2xl text-center">
                  <DollarSign className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600">70%</div>
                  <div className="text-sm text-red-700">Commission</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-blue-700">Support</div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.firstName} *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.lastName} *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.phone} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.experience}
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Experience</option>
                    <option value="beginner">Beginner (0-1 years)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="advanced">Advanced (3-5 years)</option>
                    <option value="expert">Expert (5+ years)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your trading experience and why you want to become an IB..."
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-semibold text-lg shadow-lg shadow-red-500/25"
                  >
                    {t.form.submit}
                  </Button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IBProgram;

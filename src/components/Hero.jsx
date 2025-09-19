import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = ({ language }) => {
  const { toast } = useToast();

  const content = {
    th: {
      title: 'เทรด Forex กับโบรกเกอร์ชั้นนำ',
      subtitle: 'เริ่มต้นการเทรดของคุณวันนี้ด้วยแพลตฟอร์มที่เชื่อถือได้',
      description: 'สเปรดต่ำ • ไม่มีค่าคอมมิชชั่น • โบนัสสูงสุด 100% • ถอนเงินรวดเร็ว',
      startTrading: 'เริ่มเทรดเลย',
      openDemo: 'เปิดบัญชีทดลอง',
      feature1: 'ใบอนุญาตถูกต้อง',
      feature2: 'รางวัลระดับโลก',
      feature3: 'ดำเนินการรวดเร็ว',
      feature4: 'ความปลอดภัยสูง'
    },
    en: {
      title: 'Trade Forex with Leading Broker',
      subtitle: 'Start your trading journey today with our trusted platform',
      description: 'Low Spreads • Zero Commission • Up to 100% Bonus • Fast Withdrawals',
      startTrading: 'Start Trading',
      openDemo: 'Open Demo Account',
      feature1: 'Licensed & Regulated',
      feature2: 'Award Winning',
      feature3: 'Fast Execution',
      feature4: 'Secure Trading'
    }
  };

  const handleAction = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const t = content[language];

  return (
    <section className="pt-32 pb-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                {t.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600"
              >
                {t.subtitle}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-gray-500"
              >
                {t.description}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                onClick={handleAction}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
              >
                {t.startTrading}
              </Button>
              <Button 
                onClick={handleAction}
                variant="outline" 
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 text-lg px-8 py-6"
              >
                {t.openDemo}
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-green-600">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">{t.feature1}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-yellow-500">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">{t.feature2}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-blue-600">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">{t.feature3}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-purple-600">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">{t.feature4}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-semibold">EUR/USD</span>
                  <span className="text-green-600 font-mono">1.0856</span>
                </div>
                <div className="h-32 bg-gray-100 rounded-lg flex items-end justify-between p-4">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i}
                      className="bg-blue-300 rounded-t"
                      style={{ height: `${Math.random() * 80 + 20}%`, width: '6px' }}
                    ></div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-green-500 hover:bg-green-600 text-white">BUY</Button>
                  <Button className="bg-red-500 hover:bg-red-600 text-white">SELL</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  PaintBucket, 
  ShieldCheck, 
  Eye, 
  EyeOff, 
  Lock, 
  ArrowLeft, 
  Info, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  BarChart3,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdmin } from '@/contexts/AdminContext';
import { useToast } from '@/components/ui/use-toast';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { adminLogin, isAdminAuthenticated } = useAdmin();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "ข้อมูลเข้าสู่ระบบ",
      content: "Email: admin@rubyfx.com\nPassword: password123",
      bgColor: "from-green-50 to-emerald-50",
      textColor: "text-green-800"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
      title: "ระบบจัดการการเทรด",
      content: "จัดการผลิตภัณฑ์การเทรด ลูกค้า การเงิน และการตั้งค่าต่างๆ ได้อย่างครบถ้วน",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-800"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-orange-500" />,
      title: "ความปลอดภัยสูง",
      content: "ระบบมีการรักษาความปลอดภัยสูง ข้อมูลการเงินทั้งหมดได้รับการปกป้อง",
      bgColor: "from-orange-50 to-amber-50",
      textColor: "text-orange-800"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (isAdminAuthenticated) {
      navigate('/admin');
    }
  }, [isAdminAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      const success = adminLogin(email, password);
      if (success) {
        toast({
          title: 'เข้าสู่ระบบสำเร็จ!',
          description: 'ยินดีต้อนรับสู่ระบบจัดการ RubyFX',
        });
        setTimeout(() => {
          navigate('/admin');
        }, 1000);
      } else {
        toast({
          title: 'เข้าสู่ระบบล้มเหลว!',
          description: 'ข้อมูล Admin ไม่ถูกต้อง กรุณาตรวจสอบ Email และ Password',
          variant: 'destructive',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const showLoginInfo = () => {
    toast({
      title: 'ข้อมูลเข้าสู่ระบบ',
      description: 'Email: admin@rubyfx.com | Password: password123',
    });
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - RubyFX</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-800 flex items-stretch justify-center p-0 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen md:min-h-[78vh] relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center justify-center p-10"
          >
            <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Background */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor}`}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(239,68,68,0.12),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(239,68,68,0.10),transparent_40%)]" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <motion.div
                  key={currentSlide}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-2xl bg-white/70 backdrop-blur border shadow-sm mb-6"
                >
                  {slides[currentSlide].icon}
                </motion.div>
                
                <motion.h2
                  key={`title-${currentSlide}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`text-3xl font-bold tracking-tight mb-2 ${slides[currentSlide].textColor}`}
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                <motion.p
                  key={`content-${currentSlide}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className={`text-sm max-w-md whitespace-pre-line ${slides[currentSlide].textColor}`}
                >
                  {slides[currentSlide].content}
                </motion.p>
              </div>
              
              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white shadow-lg scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center p-6 md:p-10"
          >
            <Card className="w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className="inline-flex items-center justify-center mx-auto p-3 bg-red-500/10 rounded-2xl mb-4">
                  <PaintBucket className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-2xl text-gray-900">RubyFX Admin</CardTitle>
                <CardDescription className="text-gray-600">เข้าสู่ระบบเพื่อจัดการการเทรด</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="admin@rubyfx.com"
                        required
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pr-10"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground/60">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute inset-y-0 right-2 flex items-center px-2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <a href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
                      <ArrowLeft className="h-3.5 w-3.5 mr-1" /> กลับหน้าแรก
                    </a>
                    <button 
                      type="button"
                      onClick={showLoginInfo}
                      className="text-red-500 hover:underline cursor-pointer"
                    >
                      ข้อมูลเข้าสู่ระบบ
                    </button>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                        กำลังเข้าสู่ระบบ...
                      </>
                    ) : (
                      <>
                        <Lock className="mr-2 h-4 w-4" /> Login
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AdminLoginPage;

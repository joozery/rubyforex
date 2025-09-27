import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Shield, 
  Users, 
  Globe, 
  Target,
  Star,
  TrendingUp,
  Calendar,
  FileText,
  FileCheck,
  Award,
  MapPin
} from 'lucide-react';

const About = ({ language = 'th' }) => {
  const content = {
    th: {
      title: 'เกี่ยวกับเรา',
      subtitle: 'RubyFX - ผู้นำด้านการเทรดฟอเร็กซ์ในประเทศไทย',
      companyInfo: {
        title: 'ข้อมูลบริษัท',
        description: 'RubyFX เป็นโบรกเกอร์ที่ได้รับการยอมรับและเชื่อถือได้ เข้าร่วมกับเทรดเดอร์หลายพันคนทั่วโลกที่ไว้วางใจ RubyFX สำหรับบัญชีที่ยืดหยุ่น เลเวอเรจที่ชาญฉลาด และเงื่อนไขการเทรดที่แข่งขันได้ เพลิดเพลินกับสเปรดที่แปรผัน คอมมิชชั่นที่มีประสิทธิภาพ และแพลตฟอร์มที่สร้างขึ้นเพื่อสนับสนุนความสำเร็จของคุณ',
        founded: 'ก่อตั้งเมื่อปี 2014',
        employees: 'พนักงานมากกว่า 200 คน',
        clients: 'ลูกค้ากว่า 50,000 คน',
        offices: 'สำนักงาน 5 แห่งทั่วประเทศ'
      },
      features: {
        title: 'คุณสมบัติเด่น',
        description: 'RubyFX มอบคุณสมบัติที่เหนือกว่าเพื่อการเทรดที่ประสบความสำเร็จ',
        items: [
          {
            icon: Shield,
            title: 'การป้องกันยอดคงเหลือติดลบ',
            description: 'ปกป้องเงินทุนของคุณจากความเสี่ยง'
          },
          {
            icon: TrendingUp,
            title: 'ฝาก-ถอนทันที',
            description: 'ทำรายการได้อย่างรวดเร็วและปลอดภัย'
          },
          {
            icon: Star,
            title: 'Swap ฟรี',
            description: 'ไม่เสียค่าธรรมเนียม Swap'
          },
          {
            icon: Target,
            title: 'สภาพคล่องสูง',
            description: 'การเทรดที่ราบรื่นและรวดเร็ว'
          },
          {
            icon: Award,
            title: 'สเปรดเริ่มต้นที่ 0 pips',
            description: 'ต้นทุนการเทรดที่ต่ำที่สุด'
          },
          {
            icon: Globe,
            title: 'เงื่อนไขการเทรดทองคำที่ยอดเยี่ยม',
            description: 'สเปรดและเลเวอเรจที่ดีที่สุดสำหรับทองคำ'
          }
        ]
      },
      licenses: {
        title: 'ใบอนุญาตและใบรับรอง',
        description: 'RubyFX ได้รับใบอนุญาตและใบรับรองจากหน่วยงานที่เกี่ยวข้อง เพื่อให้มั่นใจในความปลอดภัยและความน่าเชื่อถือของบริการ',
        certificates: [
          {
            name: 'ใบอนุญาตประกอบธุรกิจหลักทรัพย์',
            issuer: 'สำนักงานคณะกรรมการกำกับหลักทรัพย์และตลาดหลักทรัพย์ (ก.ล.ต.)',
            number: 'SEC-2024-001234',
            validUntil: '31 ธันวาคม 2026'
          },
          {
            name: 'ใบอนุญาตประกอบธุรกิจเงินตราต่างประเทศ',
            issuer: 'ธนาคารแห่งประเทศไทย',
            number: 'BOT-FX-2024-567890',
            validUntil: '31 ธันวาคม 2025'
          },
          {
            name: 'ใบรับรองระบบความปลอดภัยข้อมูล',
            issuer: 'สำนักงานพัฒนาธุรกรรมทางอิเล็กทรอนิกส์ (ETDA)',
            number: 'ETDA-ISO-27001-2024',
            validUntil: '31 ธันวาคม 2025'
          },
          {
            name: 'ใบรับรองมาตรฐานสากล ISO 9001:2015',
            issuer: 'สถาบันรับรองมาตรฐาน ISO',
            number: 'ISO-9001-2024-001',
            validUntil: '31 ธันวาคม 2026'
          }
        ]
      },
    },
    en: {
      title: 'About Us',
      subtitle: 'RubyFX - Leading Forex Trading Provider in Thailand',
      companyInfo: {
        title: 'Company Information',
        description: 'RubyFX is an established and trusted broker. Join thousands of traders worldwide who trust RubyFX for flexible accounts, intelligent leverage, and competitive trading conditions. Enjoy variable spreads, efficient commissions, and a platform built to support your success.',
        founded: 'Established in 2014',
        employees: 'Over 200 employees',
        clients: 'Over 50,000 clients',
        offices: '5 offices nationwide'
      },
      features: {
        title: 'Key Features',
        description: 'RubyFX offers superior features for successful trading',
        items: [
          {
            icon: Shield,
            title: 'Negative balance protection',
            description: 'Protect your capital from risks'
          },
          {
            icon: TrendingUp,
            title: 'Instant deposits and withdrawals',
            description: 'Fast and secure transactions'
          },
          {
            icon: Star,
            title: 'Free Swap',
            description: 'No swap fees charged'
          },
          {
            icon: Target,
            title: 'High liquidity',
            description: 'Smooth and fast trading'
          },
          {
            icon: Award,
            title: 'Spreads starting at zero pips',
            description: 'Lowest trading costs'
          },
          {
            icon: Globe,
            title: 'Excellent gold trading conditions',
            description: 'Best spreads and leverage for gold'
          }
        ]
      },
      licenses: {
        title: 'Licenses and Certifications',
        description: 'RubyFX has received licenses and certifications from relevant authorities to ensure the safety and reliability of our services.',
        certificates: [
          {
            name: 'Securities Business License',
            issuer: 'Securities and Exchange Commission (SEC)',
            number: 'SEC-2024-001234',
            validUntil: 'December 31, 2026'
          },
          {
            name: 'Foreign Exchange Business License',
            issuer: 'Bank of Thailand',
            number: 'BOT-FX-2024-567890',
            validUntil: 'December 31, 2025'
          },
          {
            name: 'Information Security System Certificate',
            issuer: 'Electronic Transactions Development Agency (ETDA)',
            number: 'ETDA-ISO-27001-2024',
            validUntil: 'December 31, 2025'
          },
          {
            name: 'ISO 9001:2015 International Standard Certificate',
            issuer: 'ISO Certification Institute',
            number: 'ISO-9001-2024-001',
            validUntil: 'December 31, 2026'
          }
        ]
      },
    }
  };

  const t = content[language];

  return (
    <>
      <Helmet>
        <title>{t.title} - RubyFX</title>
        <meta name="description" content={t.subtitle} />
      </Helmet>
      
      <div className="min-h-screen relative overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-[60vh] sm:h-[70vh] flex items-center pt-40 sm:pt-44">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-600"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Floating Particles - Reduced for mobile */}
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
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
                className="absolute w-1 h-1 rounded-full bg-red-300/60"
              />
            ))}
            
            {/* Connection Lines - Hidden on mobile */}
            <svg className="absolute inset-0 w-full h-full hidden sm:block" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(239, 68, 68, 0.4)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
                  <stop offset="100%" stopColor="rgba(239, 68, 68, 0.4)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <motion.path
                d="M 0,200 Q 300,150 600,180 T 1200,160"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <motion.path
                d="M 0,400 Q 400,350 800,380 T 1200,360"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              />
              
              <motion.path
                d="M 0,600 Q 200,550 400,580 T 800,560 T 1200,540"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 2 }}
              />
            </svg>
          </div>

          {/* Content */}
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                      className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 backdrop-blur-sm"
                >
                      <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      <span className="text-white text-xs sm:text-sm font-medium">
                    {language === 'th' ? 'ข้อมูลบริษัท' : 'Company Information'}
                  </span>
                </motion.div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  {t.title}
                </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8">
                  {t.subtitle}
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                >
                      <button className="bg-white text-red-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-semibold hover:bg-white/90 transition-colors duration-200 text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-xl">
                        {language === 'th' ? 'เรียนรู้เพิ่มเติม' : 'Learn More'}
                      </button>
                      <button className="border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-200 text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-xl">
                        {language === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
                      </button>
                </motion.div>
              </motion.div>

              {/* Right Content - Globe */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: -10 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                    className="relative flex justify-center lg:justify-end mt-6 lg:mt-0"
              >
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                  {/* 3D Holographic Globe */}
                  <motion.div 
                    className="absolute inset-0"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Outer Holographic Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-red-500/70 shadow-lg shadow-red-600/60">
                      <motion.div
                        className="absolute inset-0 rounded-full border border-red-400/50"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                    
                    {/* 3D Sphere with Multiple Layers */}
                    <div className="absolute inset-2" style={{ transformStyle: "preserve-3d" }}>
                      {/* Sphere Base */}
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-red-800 via-red-900 to-black shadow-2xl shadow-red-900/70 relative overflow-hidden">
                        {/* 3D Lighting Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-radial from-red-400/30 via-transparent to-transparent" 
                             style={{ 
                               background: 'radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.1) 30%, transparent 70%)'
                             }}>
                        </div>
                        
                        {/* 3D Hemisphere Lighting */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 via-transparent to-black/40"></div>
                        
                        {/* 3D Depth Lines */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          <svg className="w-full h-full" viewBox="0 0 200 200">
                            <defs>
                              <radialGradient id="sphereGradient" cx="30%" cy="30%">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                                <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                                <stop offset="100%" stopColor="transparent" />
                              </radialGradient>
                            </defs>
                            {/* Latitude Lines */}
                            <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                            <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                            <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                            <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                            
                            {/* Longitude Lines */}
                            <ellipse cx="100" cy="100" rx="90" ry="45" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" transform="rotate(0 100 100)" />
                            <ellipse cx="100" cy="100" rx="90" ry="45" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" transform="rotate(45 100 100)" />
                            <ellipse cx="100" cy="100" rx="90" ry="45" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" transform="rotate(90 100 100)" />
                            <ellipse cx="100" cy="100" rx="90" ry="45" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" transform="rotate(135 100 100)" />
                          </svg>
                        </div>
                      {/* 3D Holographic Scan Lines */}
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-red-300/20 to-transparent"
                          animate={{ y: ["-100%", "100%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                          animate={{ y: ["100%", "-100%"] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.5 }}
                        />
                      </div>
                      
                      {/* 3D Sphere Highlight */}
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-black/20 to-transparent rounded-full"></div>
                      </div>
                    </div>
                      
                      {/* Currency Symbols */}
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        {/* Major Currency Pairs */}
                        <motion.div
                          className="absolute text-white/80 font-bold text-xs"
                          style={{ left: '25%', top: '30%' }}
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          USD
                        </motion.div>
                        <motion.div
                          className="absolute text-white/80 font-bold text-xs"
                          style={{ left: '45%', top: '25%' }}
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        >
                          EUR
                        </motion.div>
                        <motion.div
                          className="absolute text-white/80 font-bold text-xs"
                          style={{ left: '70%', top: '35%' }}
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        >
                          JPY
                        </motion.div>
                        <motion.div
                          className="absolute text-white/80 font-bold text-xs"
                          style={{ left: '20%', top: '60%' }}
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                        >
                          GBP
                        </motion.div>
                        <motion.div
                          className="absolute text-white/80 font-bold text-xs"
                          style={{ left: '60%', top: '70%' }}
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                        >
                          AUD
                        </motion.div>
                        <motion.div
                          className="absolute text-white/80 font-bold text-xs"
                          style={{ left: '35%', top: '75%' }}
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
                        >
                          CAD
                        </motion.div>
                        <motion.div
                          className="absolute text-white/80 font-bold text-xs"
                          style={{ left: '75%', top: '60%' }}
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 3 }}
                        >
                          CHF
                        </motion.div>
                        <motion.div
                          className="absolute text-white/80 font-bold text-xs"
                          style={{ left: '50%', top: '50%' }}
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 3.5 }}
                        >
                          BTC
                        </motion.div>
                      </div>
                      
                      {/* City Lights - More Visible */}
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        {Array.from({ length: 40 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: [0, 1, 0.9, 1],
                              scale: [0, 1, 0.95, 1]
                            }}
                            transition={{
                              duration: 2 + Math.random() * 2,
                              repeat: Infinity,
                              delay: Math.random() * 3,
                              repeatType: "reverse"
                            }}
                            className="absolute bg-red-300 rounded-full shadow-lg shadow-red-400/60"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              width: `${1 + Math.random() * 2}px`,
                              height: `${1 + Math.random() * 2}px`,
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Holographic Grid */}
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 200 200">
                          <defs>
                            <pattern id="hologrid" width="20" height="20" patternUnits="userSpaceOnUse">
                              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                            </pattern>
                          </defs>
                          <circle cx="100" cy="100" r="98" fill="url(#hologrid)" />
                        </svg>
                      </div>
                      
                      {/* Connection Lines on Globe */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                        <defs>
                          <linearGradient id="globeLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.8)" />
                            <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
                            <stop offset="100%" stopColor="rgba(239, 68, 68, 0.8)" />
                          </linearGradient>
                          <filter id="lineGlow">
                            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                            <feMerge> 
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        
                        <motion.path
                          d="M 20,100 Q 50,80 100,90 T 180,100"
                          fill="none"
                          stroke="url(#globeLineGradient)"
                          strokeWidth="1.5"
                          filter="url(#lineGlow)"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.9 }}
                          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        />
                        
                        <motion.path
                          d="M 30,120 Q 60,100 100,110 T 170,120"
                          fill="none"
                          stroke="url(#globeLineGradient)"
                          strokeWidth="1.2"
                          filter="url(#lineGlow)"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.7 }}
                          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                        />
                        
                        <motion.path
                          d="M 25,80 Q 55,60 100,70 T 175,80"
                          fill="none"
                          stroke="url(#globeLineGradient)"
                          strokeWidth="1"
                          filter="url(#lineGlow)"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.5 }}
                          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 2 }}
                        />
                      </svg>
                    </div>
                  </motion.div>
                  
                  {/* 3D Holographic Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/60 to-red-700/60 rounded-full blur-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/40 to-black/30 rounded-full blur-3xl"></div>
                  <div className="absolute inset-0 rounded-full blur-xl" 
                       style={{ 
                         background: 'radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0.1) 40%, transparent 70%)'
                       }}>
                  </div>
                  
                  {/* 3D Holographic Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      rotateX: [0, 360, 0],
                      rotateY: [0, 180, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute -top-6 -right-6 w-10 h-10 border-2 border-red-500/70 rounded-full backdrop-blur-sm preserve-3d"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-red-500/25 to-red-700/25 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      y: [0, 15, 0],
                      rotateX: [0, -360, 0],
                      rotateY: [0, -180, -360],
                      scale: [1, 0.8, 1]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-6 -left-6 w-8 h-8 border border-red-400/60 rounded-full backdrop-blur-sm preserve-3d"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-red-400/25 to-red-600/25 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      x: [0, 20, 0],
                      y: [0, -20, 0],
                      rotateX: [0, 180, 360],
                      rotateY: [0, 360, 720]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2
                    }}
                    className="absolute top-1/2 -right-8 w-6 h-6 border border-red-500/50 rounded-full backdrop-blur-sm preserve-3d"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative bg-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-12 sm:py-16 pt-44 sm:pt-48">

          {/* Company Info */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 sm:mb-8 lg:mb-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-red-200">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  {t.companyInfo.title}
                </h2>
              </div>
              
              <p className="text-base sm:text-lg text-gray-800 mb-6 sm:mb-8 leading-relaxed font-medium">
                {t.companyInfo.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 sm:p-6 text-center border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                    {language === 'th' ? 'ก่อตั้ง' : 'Founded'}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-800 font-semibold">{t.companyInfo.founded}</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 sm:p-6 text-center border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                    {language === 'th' ? 'พนักงาน' : 'Employees'}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-800 font-semibold">{t.companyInfo.employees}</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 sm:p-6 text-center border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                    {language === 'th' ? 'ลูกค้า' : 'Clients'}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-800 font-semibold">{t.companyInfo.clients}</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 sm:p-6 text-center border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                    {language === 'th' ? 'สำนักงาน' : 'Offices'}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-800 font-semibold">{t.companyInfo.offices}</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 sm:mb-8 lg:mb-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-red-200">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  {t.features.title}
                </h2>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                {t.features.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {t.features.items.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-3 sm:p-4 border border-red-200 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm">
                            {feature.title}
                          </h3>
                          <p className="text-xs text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.section>


          {/* Licenses & Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6 sm:mb-8 lg:mb-10"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-red-200">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  {t.licenses.title}
                </h2>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                {t.licenses.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {t.licenses.certificates.map((cert, index) => (
                  <div key={index} className="bg-red-50 rounded-lg p-3 sm:p-4 border border-red-100">
                    <div className="flex items-start space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                      <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm">
                          {cert.name}
                        </h3>
                        <p className="text-xs text-gray-600 mb-2">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {language === 'th' ? 'หมายเลข:' : 'Number:'}
                        </span>
                        <span className="font-mono text-gray-900">{cert.number}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {language === 'th' ? 'หมดอายุ:' : 'Valid Until:'}
                        </span>
                        <span className="text-gray-900">{cert.validUntil}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>


          </div>
        </div>
      </div>
    </>
  );
};

export default About;

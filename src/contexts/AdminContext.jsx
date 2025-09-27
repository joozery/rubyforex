import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const AdminContext = createContext();

const STORAGE_KEYS = {
  token: 'rubyfx_admin_token',
  refresh: 'rubyfx_admin_refresh',
  profile: 'rubyfx_admin_profile',
};

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminProfile, setAdminProfile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalSales: 1250000,
    totalOrders: 156,
    totalProducts: 6,
    totalCustomers: 89
  });
  const { toast } = useToast();

  useEffect(() => {
    // Check for existing admin session
    const token = localStorage.getItem(STORAGE_KEYS.token);
    const profileStr = localStorage.getItem(STORAGE_KEYS.profile);
    if (token) {
      setIsAdmin(true);
      if (profileStr) {
        try { 
          setAdminProfile(JSON.parse(profileStr)); 
        } catch {
          // ignore invalid JSON
        }
      }
    }
  }, []);

  const adminLogin = (email, password) => {
    // Simple hardcoded admin credentials for demo
    if (email === 'admin@rubyfx.com' && password === 'password123') {
      const profile = {
        id: 1,
        name: 'RubyFX Admin',
        email: 'admin@rubyfx.com',
        role: 'admin',
        avatar: null
      };

      localStorage.setItem(STORAGE_KEYS.token, 'demo_token_' + Date.now());
      localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));

      setIsAdmin(true);
      setAdminProfile(profile);

      toast({
        title: 'เข้าสู่ระบบ Admin สำเร็จ',
        description: 'ยินดีต้อนรับสู่ระบบจัดการ RubyFX',
      });
      return true;
    } else {
      toast({
        title: 'เข้าสู่ระบบล้มเหลว',
        description: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
        variant: 'destructive',
      });
      return false;
    }
  };

  const adminLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.token);
    localStorage.removeItem(STORAGE_KEYS.refresh);
    localStorage.removeItem(STORAGE_KEYS.profile);
    setIsAdmin(false);
    setAdminProfile(null);
    toast({
      title: 'ออกจากระบบ Admin สำเร็จ',
    });
  };

  useEffect(() => {
    // Load sample orders for demo
    const sampleOrders = [
      {
        id: 1,
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        total: 50000,
        status: 'completed',
        product: 'Forex Trading',
        date: new Date().toISOString()
      },
      {
        id: 2,
        customerName: 'Jane Smith',
        customerEmail: 'jane@example.com',
        total: 75000,
        status: 'pending',
        product: 'Cryptocurrency',
        date: new Date(Date.now() - 86400000).toISOString()
      },
      {
        id: 3,
        customerName: 'Mike Johnson',
        customerEmail: 'mike@example.com',
        total: 30000,
        status: 'completed',
        product: 'Stock Trading',
        date: new Date(Date.now() - 172800000).toISOString()
      },
      {
        id: 4,
        customerName: 'Sarah Wilson',
        customerEmail: 'sarah@example.com',
        total: 45000,
        status: 'pending',
        product: 'Precious Metals',
        date: new Date(Date.now() - 259200000).toISOString()
      },
      {
        id: 5,
        customerName: 'David Brown',
        customerEmail: 'david@example.com',
        total: 60000,
        status: 'completed',
        product: 'Energy Trading',
        date: new Date(Date.now() - 345600000).toISOString()
      }
    ];
    setOrders(sampleOrders);
  }, []);

  const addOrder = (order) => {
    const newOrder = {
      ...order,
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'pending'
    };
    setOrders(prev => [...prev, newOrder]);
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status } : order
    ));
  };

  const value = {
    isAdminAuthenticated: isAdmin,
    adminProfile,
    adminLogin,
    adminLogout,
    orders,
    analytics,
    addOrder,
    updateOrderStatus,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

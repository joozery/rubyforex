import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';

// Import Admin Pages
import AdminDashboard from './AdminDashboard';
import AdminTradingProducts from './AdminTradingProducts';
import AdminClients from './AdminClients';
import AdminTransactions from './AdminTransactions';
import AdminIBProgram from './AdminIBProgram';
import AdminPromotions from './AdminPromotions';

const AdminMain = () => {
  const { isAdminAuthenticated } = useAdmin();

  // Redirect to login if not authenticated
  if (!isAdminAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <Routes>
      {/* Dashboard */}
      <Route path="/" element={<AdminDashboard />} />
      
      {/* Trading Products */}
      <Route path="/trading-products" element={<AdminTradingProducts />} />
      <Route path="/forex" element={<AdminTradingProducts />} />
      <Route path="/crypto" element={<AdminTradingProducts />} />
      <Route path="/stocks" element={<AdminTradingProducts />} />
      <Route path="/metals" element={<AdminTradingProducts />} />
      
      {/* Clients & Finance */}
      <Route path="/clients" element={<AdminClients />} />
      <Route path="/transactions" element={<AdminTransactions />} />
      <Route path="/ib-program" element={<AdminIBProgram />} />
      <Route path="/payments" element={<AdminTradingProducts />} />
      
      {/* Content & Marketing */}
      <Route path="/banners" element={<AdminTradingProducts />} />
      <Route path="/hero-slides" element={<AdminTradingProducts />} />
      <Route path="/promotions" element={<AdminPromotions />} />
      <Route path="/news" element={<AdminTradingProducts />} />
      <Route path="/reviews" element={<AdminTradingProducts />} />
      
      {/* Settings */}
      <Route path="/settings" element={<AdminTradingProducts />} />
      <Route path="/profile" element={<AdminTradingProducts />} />
      
      {/* Catch all - redirect to dashboard */}
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default AdminMain;

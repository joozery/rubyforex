import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  ArrowUpRight,
  TrendingUp,
  BarChart3,
  Activity
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useAdmin } from '@/contexts/AdminContext';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   AreaChart,
//   Area,
//   PieChart,
//   Pie,
//   Cell
// } from 'recharts';

const AdminDashboard = () => {
  const { analytics, orders } = useAdmin();
  const recentOrders = orders.slice(-5).reverse();

  const salesData = [
    { name: 'Jan', sales: 4000, trades: 120 },
    { name: 'Feb', sales: 3000, trades: 98 },
    { name: 'Mar', sales: 5000, trades: 156 },
    { name: 'Apr', sales: 4500, trades: 134 },
    { name: 'May', sales: 6000, trades: 189 },
    { name: 'Jun', sales: 5500, trades: 167 },
  ];

  const tradingData = [
    { name: 'Forex', value: 45, color: '#ef4444' },
    { name: 'Crypto', value: 30, color: '#3b82f6' },
    { name: 'Stocks', value: 15, color: '#10b981' },
    { name: 'Metals', value: 10, color: '#f59e0b' },
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - RubyFX</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">แดชบอร์ด</h1>
            <p className="text-gray-600">ภาพรวมการดำเนินงานของ RubyFX</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
              <Activity className="w-3 h-3 mr-1" />
              ระบบทำงานปกติ
            </Badge>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card className="border-l-4 border-l-red-500 bg-gradient-to-br from-red-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">ยอดเทรดทั้งหมด</CardTitle>
              <DollarSign className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">฿{analytics.totalSales.toLocaleString()}</div>
              <p className="text-xs text-gray-500 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1 text-green-500" />
                +20.1% จากเดือนที่แล้ว
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">จำนวนเทรด</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">+{analytics.totalOrders}</div>
              <p className="text-xs text-gray-500 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1 text-green-500" />
                +180.1% จากเดือนที่แล้ว
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">ผลิตภัณฑ์</CardTitle>
              <Package className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">6</div>
              <p className="text-xs text-gray-500">Forex, Crypto, Stocks, Metals, Index, Energy</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">ลูกค้า</CardTitle>
              <Users className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">+{analytics.totalCustomers}</div>
              <p className="text-xs text-gray-500 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1 text-green-500" />
                +19% จากเดือนที่แล้ว
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {/* Sales Chart */}
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                ภาพรวมยอดเทรด
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[350px] flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">ยอดเทรดรายเดือน</h3>
                  <div className="space-y-2">
                    {salesData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="font-medium text-red-600">฿{item.sales.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trading Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>การกระจายการเทรด</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-4">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                  <h3 className="text-sm font-semibold text-gray-700">การกระจายการเทรด</h3>
                </div>
              </div>
              <div className="space-y-2">
                {tradingData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>คำสั่งซื้อล่าสุด</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ลูกค้า</TableHead>
                  <TableHead>ผลิตภัณฑ์</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead className="text-right">ยอดรวม</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <div className="font-medium">{order.customerName}</div>
                      <div className="text-sm text-muted-foreground">{order.customerEmail}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{order.product || 'Forex Trading'}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={order.status === 'completed' ? 'default' : 'secondary'}
                        className={order.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {order.status === 'completed' ? 'เสร็จสิ้น' : 'รอดำเนินการ'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      ฿{order.total.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default AdminDashboard;

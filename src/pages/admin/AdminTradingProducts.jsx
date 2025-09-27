import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { TrendingUp, Plus, Edit, Trash2, Eye } from 'lucide-react';
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
import { Button } from '@/components/ui/button';

const AdminTradingProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Forex Trading',
      category: 'Forex',
      status: 'active',
      spreads: '0.5 pips',
      leverage: '1:500',
      minDeposit: '$100'
    },
    {
      id: 2,
      name: 'Cryptocurrency',
      category: 'Crypto',
      status: 'active',
      spreads: '0.1%',
      leverage: '1:100',
      minDeposit: '$50'
    },
    {
      id: 3,
      name: 'Stock Trading',
      category: 'Stocks',
      status: 'active',
      spreads: '0.05%',
      leverage: '1:20',
      minDeposit: '$200'
    },
    {
      id: 4,
      name: 'Precious Metals',
      category: 'Metals',
      status: 'active',
      spreads: '0.3 pips',
      leverage: '1:200',
      minDeposit: '$100'
    }
  ];

  return (
    <>
      <Helmet>
        <title>ผลิตภัณฑ์การเทรด - RubyFX Admin</title>
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
            <h1 className="text-3xl font-bold text-gray-900">ผลิตภัณฑ์การเทรด</h1>
            <p className="text-gray-600">จัดการผลิตภัณฑ์การเทรดทั้งหมด</p>
          </div>
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            เพิ่มผลิตภัณฑ์
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-gradient-to-br from-red-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">ผลิตภัณฑ์ทั้งหมด</CardTitle>
              <TrendingUp className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{products.length}</div>
              <p className="text-xs text-gray-500">ผลิตภัณฑ์ที่เปิดใช้งาน</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">สถานะเปิดใช้งาน</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{products.filter(p => p.status === 'active').length}</div>
              <p className="text-xs text-gray-500">ผลิตภัณฑ์ที่เปิดใช้งาน</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">หมวดหมู่</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">4</div>
              <p className="text-xs text-gray-500">Forex, Crypto, Stocks, Metals</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">เลเวอเรจสูงสุด</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">1:500</div>
              <p className="text-xs text-gray-500">Forex Trading</p>
            </CardContent>
          </Card>
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>รายการผลิตภัณฑ์</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ชื่อผลิตภัณฑ์</TableHead>
                  <TableHead>หมวดหมู่</TableHead>
                  <TableHead>สเปรด</TableHead>
                  <TableHead>เลเวอเรจ</TableHead>
                  <TableHead>เงินฝากขั้นต่ำ</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead className="text-right">การดำเนินการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.category}</Badge>
                    </TableCell>
                    <TableCell>{product.spreads}</TableCell>
                    <TableCell>{product.leverage}</TableCell>
                    <TableCell>{product.minDeposit}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={product.status === 'active' ? 'default' : 'secondary'}
                        className={product.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {product.status === 'active' ? 'เปิดใช้งาน' : 'ปิดใช้งาน'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
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

export default AdminTradingProducts;

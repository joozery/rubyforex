import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, TrendingDown, Filter, Download } from 'lucide-react';
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
import { Input } from '@/components/ui/input';

const AdminTransactions = () => {
  const transactions = [
    {
      id: 'TXN001',
      client: 'John Doe',
      product: 'Forex Trading',
      type: 'buy',
      amount: '$5,000',
      price: '1.2345',
      profit: '+$250',
      status: 'completed',
      date: '2024-03-15 10:30:00'
    },
    {
      id: 'TXN002',
      client: 'Jane Smith',
      product: 'Cryptocurrency',
      type: 'sell',
      amount: '$3,500',
      price: '0.000045',
      profit: '+$175',
      status: 'completed',
      date: '2024-03-15 09:15:00'
    },
    {
      id: 'TXN003',
      client: 'Mike Johnson',
      product: 'Stock Trading',
      type: 'buy',
      amount: '$2,000',
      price: '150.25',
      profit: '-$50',
      status: 'completed',
      date: '2024-03-15 08:45:00'
    },
    {
      id: 'TXN004',
      client: 'Sarah Wilson',
      product: 'Precious Metals',
      type: 'buy',
      amount: '$4,500',
      price: '1,850.50',
      profit: '+$225',
      status: 'pending',
      date: '2024-03-15 07:20:00'
    }
  ];

  return (
    <>
      <Helmet>
        <title>รายการเทรด - RubyFX Admin</title>
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
            <h1 className="text-3xl font-bold text-gray-900">รายการเทรด</h1>
            <p className="text-gray-600">จัดการรายการเทรดทั้งหมด</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              ส่งออกข้อมูล
            </Button>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              กรองข้อมูล
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-gradient-to-br from-green-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">รายการทั้งหมด</CardTitle>
              <ShoppingCart className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{transactions.length}</div>
              <p className="text-xs text-gray-500">รายการเทรดทั้งหมด</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">รายการเสร็จสิ้น</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{transactions.filter(t => t.status === 'completed').length}</div>
              <p className="text-xs text-gray-500">รายการที่เสร็จสิ้น</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">รอดำเนินการ</CardTitle>
              <TrendingDown className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{transactions.filter(t => t.status === 'pending').length}</div>
              <p className="text-xs text-gray-500">รายการรอดำเนินการ</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">กำไรรวม</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">+$600</div>
              <p className="text-xs text-gray-500">กำไรสุทธิวันนี้</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardHeader>
            <CardTitle>ค้นหารายการเทรด</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Input
                  placeholder="ค้นหาด้วย ID, ชื่อลูกค้า หรือผลิตภัณฑ์..."
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                กรอง
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card>
          <CardHeader>
            <CardTitle>รายการเทรด</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>ลูกค้า</TableHead>
                  <TableHead>ผลิตภัณฑ์</TableHead>
                  <TableHead>ประเภท</TableHead>
                  <TableHead>จำนวน</TableHead>
                  <TableHead>ราคา</TableHead>
                  <TableHead>กำไร/ขาดทุน</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead>วันที่</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-mono text-sm">{transaction.id}</TableCell>
                    <TableCell className="font-medium">{transaction.client}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{transaction.product}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={transaction.type === 'buy' ? 'default' : 'secondary'}
                        className={transaction.type === 'buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                      >
                        {transaction.type === 'buy' ? 'ซื้อ' : 'ขาย'}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{transaction.amount}</TableCell>
                    <TableCell className="font-mono">{transaction.price}</TableCell>
                    <TableCell className={`font-medium ${transaction.profit.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.profit}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                        className={transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      >
                        {transaction.status === 'completed' ? 'เสร็จสิ้น' : 'รอดำเนินการ'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">{transaction.date}</TableCell>
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

export default AdminTransactions;

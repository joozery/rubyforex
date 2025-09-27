import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, UserPlus, Search, Filter, Mail, Phone } from 'lucide-react';
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

const AdminClients = () => {
  const clients = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+66 81 234 5678',
      status: 'active',
      joinDate: '2024-01-15',
      totalTrades: 45,
      totalVolume: '$125,000'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+66 82 345 6789',
      status: 'active',
      joinDate: '2024-02-20',
      totalTrades: 32,
      totalVolume: '$89,500'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+66 83 456 7890',
      status: 'pending',
      joinDate: '2024-03-10',
      totalTrades: 0,
      totalVolume: '$0'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      phone: '+66 84 567 8901',
      status: 'active',
      joinDate: '2024-01-25',
      totalTrades: 78,
      totalVolume: '$245,000'
    }
  ];

  return (
    <>
      <Helmet>
        <title>ลูกค้า - RubyFX Admin</title>
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
            <h1 className="text-3xl font-bold text-gray-900">ลูกค้า</h1>
            <p className="text-gray-600">จัดการข้อมูลลูกค้าทั้งหมด</p>
          </div>
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            <UserPlus className="w-4 h-4 mr-2" />
            เพิ่มลูกค้า
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">ลูกค้าทั้งหมด</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{clients.length}</div>
              <p className="text-xs text-gray-500">ลูกค้าที่ลงทะเบียน</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">ลูกค้าที่ใช้งาน</CardTitle>
              <Users className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{clients.filter(c => c.status === 'active').length}</div>
              <p className="text-xs text-gray-500">ลูกค้าที่ใช้งานอยู่</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">รอการยืนยัน</CardTitle>
              <Users className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{clients.filter(c => c.status === 'pending').length}</div>
              <p className="text-xs text-gray-500">รอการยืนยันตัวตน</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">ยอดเทรดรวม</CardTitle>
              <Users className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">$459,500</div>
              <p className="text-xs text-gray-500">ยอดเทรดทั้งหมด</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>ค้นหาลูกค้า</CardTitle>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                กรอง
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="ค้นหาด้วยชื่อ, อีเมล หรือเบอร์โทร..."
                  className="pl-10"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clients Table */}
        <Card>
          <CardHeader>
            <CardTitle>รายการลูกค้า</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ชื่อลูกค้า</TableHead>
                  <TableHead>อีเมล</TableHead>
                  <TableHead>เบอร์โทร</TableHead>
                  <TableHead>วันที่สมัคร</TableHead>
                  <TableHead>จำนวนเทรด</TableHead>
                  <TableHead>ยอดเทรด</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead className="text-right">การดำเนินการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">{client.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>{client.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{client.phone}</span>
                      </div>
                    </TableCell>
                    <TableCell>{client.joinDate}</TableCell>
                    <TableCell>{client.totalTrades}</TableCell>
                    <TableCell className="font-medium">{client.totalVolume}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={client.status === 'active' ? 'default' : 'secondary'}
                        className={client.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      >
                        {client.status === 'active' ? 'ใช้งานอยู่' : 'รอการยืนยัน'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Phone className="w-4 h-4" />
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

export default AdminClients;

import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, DollarSign, TrendingUp, Plus, Eye, Edit } from 'lucide-react';
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

const AdminIBProgram = () => {
  const ibPartners = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      status: 'active',
      joinDate: '2024-01-15',
      totalClients: 25,
      totalCommission: '$12,500',
      commissionRate: '30%'
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com',
      status: 'active',
      joinDate: '2024-02-20',
      totalClients: 18,
      totalCommission: '$8,900',
      commissionRate: '25%'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      status: 'pending',
      joinDate: '2024-03-10',
      totalClients: 0,
      totalCommission: '$0',
      commissionRate: '20%'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IB Program - RubyFX Admin</title>
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
            <h1 className="text-3xl font-bold text-gray-900">IB Program</h1>
            <p className="text-gray-600">จัดการโปรแกรม Introducing Broker</p>
          </div>
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            เพิ่ม IB Partner
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-gradient-to-br from-red-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">IB Partners</CardTitle>
              <Award className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{ibPartners.length}</div>
              <p className="text-xs text-gray-500">IB Partners ทั้งหมด</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">IB ที่ใช้งาน</CardTitle>
              <Users className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{ibPartners.filter(ib => ib.status === 'active').length}</div>
              <p className="text-xs text-gray-500">IB ที่ใช้งานอยู่</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">ลูกค้ารวม</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{ibPartners.reduce((sum, ib) => sum + ib.totalClients, 0)}</div>
              <p className="text-xs text-gray-500">ลูกค้าจาก IB ทั้งหมด</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">คอมมิชชั่นรวม</CardTitle>
              <DollarSign className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">$21,400</div>
              <p className="text-xs text-gray-500">คอมมิชชั่นที่จ่ายแล้ว</p>
            </CardContent>
          </Card>
        </div>

        {/* IB Partners Table */}
        <Card>
          <CardHeader>
            <CardTitle>รายการ IB Partners</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ชื่อ IB</TableHead>
                  <TableHead>อีเมล</TableHead>
                  <TableHead>วันที่สมัคร</TableHead>
                  <TableHead>ลูกค้า</TableHead>
                  <TableHead>คอมมิชชั่น</TableHead>
                  <TableHead>อัตรา</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead className="text-right">การดำเนินการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ibPartners.map((partner) => (
                  <TableRow key={partner.id}>
                    <TableCell className="font-medium">{partner.name}</TableCell>
                    <TableCell>{partner.email}</TableCell>
                    <TableCell>{partner.joinDate}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>{partner.totalClients}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{partner.totalCommission}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{partner.commissionRate}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={partner.status === 'active' ? 'default' : 'secondary'}
                        className={partner.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      >
                        {partner.status === 'active' ? 'ใช้งานอยู่' : 'รอการยืนยัน'}
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
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Commission Structure */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>โครงสร้างคอมมิชชั่น</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Tier 1</p>
                    <p className="text-sm text-gray-500">0-10 ลูกค้า</p>
                  </div>
                  <Badge className="bg-red-500 text-white">20%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Tier 2</p>
                    <p className="text-sm text-gray-500">11-25 ลูกค้า</p>
                  </div>
                  <Badge className="bg-orange-500 text-white">25%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Tier 3</p>
                    <p className="text-sm text-gray-500">26+ ลูกค้า</p>
                  </div>
                  <Badge className="bg-green-500 text-white">30%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>สถิติการเติบโต</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">IB Partners ใหม่</span>
                  <span className="font-medium text-green-600">+3 เดือนนี้</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">ลูกค้าใหม่</span>
                  <span className="font-medium text-blue-600">+43 เดือนนี้</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">คอมมิชชั่นจ่าย</span>
                  <span className="font-medium text-purple-600">$21,400</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">อัตราการเติบโต</span>
                  <span className="font-medium text-red-600">+15.2%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </>
  );
};

export default AdminIBProgram;

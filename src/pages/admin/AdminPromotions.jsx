import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Upload, 
  Calendar,
  Gift,
  Star,
  Trophy,
  Zap,
  Users,
  TrendingUp,
  Save,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';

const AdminPromotions = () => {
  const { toast } = useToast();
  const [promotions, setPromotions] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPromotion, setEditingPromotion] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    titleEn: '',
    description: '',
    descriptionEn: '',
    badge: '',
    features: [''],
    icon: 'Gift',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    image: null,
    isActive: true,
    startDate: '',
    endDate: '',
    priority: 1
  });

  const iconOptions = [
    { value: 'Gift', label: 'Gift', icon: Gift },
    { value: 'Star', label: 'Star', icon: Star },
    { value: 'Trophy', label: 'Trophy', icon: Trophy },
    { value: 'Zap', label: 'Zap', icon: Zap },
    { value: 'Users', label: 'Users', icon: Users },
    { value: 'TrendingUp', label: 'TrendingUp', icon: TrendingUp }
  ];

  const colorOptions = [
    { value: 'from-red-500 to-red-600', bgColor: 'bg-red-50', textColor: 'text-red-600', label: 'Red' },
    { value: 'from-green-500 to-green-600', bgColor: 'bg-green-50', textColor: 'text-green-600', label: 'Green' },
    { value: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50', textColor: 'text-blue-600', label: 'Blue' },
    { value: 'from-yellow-500 to-yellow-600', bgColor: 'bg-yellow-50', textColor: 'text-yellow-600', label: 'Yellow' },
    { value: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50', textColor: 'text-purple-600', label: 'Purple' },
    { value: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50', textColor: 'text-orange-600', label: 'Orange' }
  ];

  // Load promotions from localStorage
  useEffect(() => {
    const savedPromotions = localStorage.getItem('rubyfx_promotions');
    if (savedPromotions) {
      setPromotions(JSON.parse(savedPromotions));
    } else {
      // Default promotions
      const defaultPromotions = [
        {
          id: '1',
          title: 'โบนัสต้อนรับ 100%',
          titleEn: 'Welcome Bonus 100%',
          description: 'รับโบนัสสูงสุด $1,000 สำหรับการฝากเงินครั้งแรก',
          descriptionEn: 'Get up to $1,000 bonus for your first deposit',
          badge: '100%',
          features: ['โบนัสสูงสุด 100%', 'ถอนได้จริง', 'ไม่มีค่าธรรมเนียม', 'ใช้ได้ทันที'],
          icon: 'Gift',
          color: 'from-red-500 to-red-600',
          bgColor: 'bg-red-50',
          textColor: 'text-red-600',
          image: null,
          isActive: true,
          startDate: '2024-01-01',
          endDate: '2024-12-31',
          priority: 1,
          createdAt: new Date().toISOString()
        }
      ];
      setPromotions(defaultPromotions);
      localStorage.setItem('rubyfx_promotions', JSON.stringify(defaultPromotions));
    }
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          image: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingPromotion) {
      // Update existing promotion
      const updatedPromotions = promotions.map(promo => 
        promo.id === editingPromotion.id 
          ? { ...formData, id: editingPromotion.id, updatedAt: new Date().toISOString() }
          : promo
      );
      setPromotions(updatedPromotions);
      localStorage.setItem('rubyfx_promotions', JSON.stringify(updatedPromotions));
      toast({
        title: "อัปเดตโปรโมชั่นสำเร็จ",
        description: "โปรโมชั่นได้รับการอัปเดตแล้ว",
      });
    } else {
      // Add new promotion
      const newPromotion = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };
      const updatedPromotions = [...promotions, newPromotion];
      setPromotions(updatedPromotions);
      localStorage.setItem('rubyfx_promotions', JSON.stringify(updatedPromotions));
      toast({
        title: "เพิ่มโปรโมชั่นสำเร็จ",
        description: "โปรโมชั่นใหม่ได้รับการเพิ่มแล้ว",
      });
    }
    
    resetForm();
    setIsDialogOpen(false);
  };

  const handleEdit = (promotion) => {
    setEditingPromotion(promotion);
    setFormData({
      title: promotion.title,
      titleEn: promotion.titleEn,
      description: promotion.description,
      descriptionEn: promotion.descriptionEn,
      badge: promotion.badge,
      features: promotion.features,
      icon: promotion.icon,
      color: promotion.color,
      bgColor: promotion.bgColor,
      textColor: promotion.textColor,
      image: promotion.image,
      isActive: promotion.isActive,
      startDate: promotion.startDate,
      endDate: promotion.endDate,
      priority: promotion.priority
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('คุณแน่ใจหรือไม่ที่จะลบโปรโมชั่นนี้?')) {
      const updatedPromotions = promotions.filter(promo => promo.id !== id);
      setPromotions(updatedPromotions);
      localStorage.setItem('rubyfx_promotions', JSON.stringify(updatedPromotions));
      toast({
        title: "ลบโปรโมชั่นสำเร็จ",
        description: "โปรโมชั่นได้รับการลบแล้ว",
      });
    }
  };

  const toggleActive = (id) => {
    const updatedPromotions = promotions.map(promo => 
      promo.id === id 
        ? { ...promo, isActive: !promo.isActive, updatedAt: new Date().toISOString() }
        : promo
    );
    setPromotions(updatedPromotions);
    localStorage.setItem('rubyfx_promotions', JSON.stringify(updatedPromotions));
    toast({
      title: "อัปเดตสถานะสำเร็จ",
      description: "สถานะโปรโมชั่นได้รับการอัปเดตแล้ว",
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      titleEn: '',
      description: '',
      descriptionEn: '',
      badge: '',
      features: [''],
      icon: 'Gift',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      image: null,
      isActive: true,
      startDate: '',
      endDate: '',
      priority: 1
    });
    setEditingPromotion(null);
  };

  const getIconComponent = (iconName) => {
    const iconOption = iconOptions.find(option => option.value === iconName);
    return iconOption ? iconOption.icon : Gift;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการโปรโมชั่น</h1>
          <p className="text-gray-600">เพิ่ม แก้ไข และลบโปรโมชั่น</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm} className="bg-red-600 hover:bg-red-700">
              <Plus className="w-4 h-4 mr-2" />
              เพิ่มโปรโมชั่น
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingPromotion ? 'แก้ไขโปรโมชั่น' : 'เพิ่มโปรโมชั่นใหม่'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Thai Title */}
                <div>
                  <Label htmlFor="title">ชื่อโปรโมชั่น (ไทย)</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="ชื่อโปรโมชั่น"
                    required
                  />
                </div>

                {/* English Title */}
                <div>
                  <Label htmlFor="titleEn">ชื่อโปรโมชั่น (อังกฤษ)</Label>
                  <Input
                    id="titleEn"
                    value={formData.titleEn}
                    onChange={(e) => handleInputChange('titleEn', e.target.value)}
                    placeholder="Promotion Title"
                    required
                  />
                </div>

                {/* Thai Description */}
                <div>
                  <Label htmlFor="description">คำอธิบาย (ไทย)</Label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="คำอธิบายโปรโมชั่น"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    rows={3}
                    required
                  />
                </div>

                {/* English Description */}
                <div>
                  <Label htmlFor="descriptionEn">คำอธิบาย (อังกฤษ)</Label>
                  <textarea
                    id="descriptionEn"
                    value={formData.descriptionEn}
                    onChange={(e) => handleInputChange('descriptionEn', e.target.value)}
                    placeholder="Promotion Description"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    rows={3}
                    required
                  />
                </div>

                {/* Badge */}
                <div>
                  <Label htmlFor="badge">Badge</Label>
                  <Input
                    id="badge"
                    value={formData.badge}
                    onChange={(e) => handleInputChange('badge', e.target.value)}
                    placeholder="100%"
                    required
                  />
                </div>

                {/* Icon */}
                <div>
                  <Label htmlFor="icon">ไอคอน</Label>
                  <select
                    id="icon"
                    value={formData.icon}
                    onChange={(e) => handleInputChange('icon', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    {iconOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Color Theme */}
                <div>
                  <Label htmlFor="color">ธีมสี</Label>
                  <select
                    id="color"
                    value={formData.color}
                    onChange={(e) => {
                      const selectedColor = colorOptions.find(option => option.value === e.target.value);
                      handleInputChange('color', e.target.value);
                      handleInputChange('bgColor', selectedColor.bgColor);
                      handleInputChange('textColor', selectedColor.textColor);
                    }}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    {colorOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Priority */}
                <div>
                  <Label htmlFor="priority">ลำดับความสำคัญ</Label>
                  <Input
                    id="priority"
                    type="number"
                    value={formData.priority}
                    onChange={(e) => handleInputChange('priority', parseInt(e.target.value))}
                    placeholder="1"
                    min="1"
                    required
                  />
                </div>

                {/* Start Date */}
                <div>
                  <Label htmlFor="startDate">วันที่เริ่มต้น</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    required
                  />
                </div>

                {/* End Date */}
                <div>
                  <Label htmlFor="endDate">วันที่สิ้นสุด</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    required
                  />
                </div>

                {/* Image Upload */}
                <div className="md:col-span-2">
                  <Label htmlFor="image">รูปภาพ</Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mb-2"
                  />
                  {formData.image && (
                    <div className="mt-2">
                      <img src={formData.image} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div>
                <Label>คุณสมบัติ</Label>
                <div className="space-y-2">
                  {formData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input
                        value={feature}
                        onChange={(e) => handleFeatureChange(index, e.target.value)}
                        placeholder="คุณสมบัติ"
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeFeature(index)}
                        disabled={formData.features.length === 1}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addFeature}
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    เพิ่มคุณสมบัติ
                  </Button>
                </div>
              </div>

              {/* Active Status */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => handleInputChange('isActive', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="isActive">แสดงโปรโมชั่น</Label>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  ยกเลิก
                </Button>
                <Button type="submit" className="bg-red-600 hover:bg-red-700">
                  <Save className="w-4 h-4 mr-2" />
                  {editingPromotion ? 'อัปเดต' : 'เพิ่ม'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Promotions List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions
          .sort((a, b) => a.priority - b.priority)
          .map((promotion) => {
            const IconComponent = getIconComponent(promotion.icon);
            return (
              <Card key={promotion.id} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${promotion.bgColor} rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${promotion.textColor}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{promotion.title}</CardTitle>
                        <Badge variant={promotion.isActive ? "default" : "secondary"}>
                          {promotion.badge}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleActive(promotion.id)}
                      >
                        {promotion.isActive ? (
                          <Eye className="w-4 h-4 text-green-600" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-gray-400" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(promotion)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(promotion.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {promotion.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{promotion.startDate} - {promotion.endDate}</span>
                    </div>
                    <span>#{promotion.priority}</span>
                  </div>
                  {promotion.image && (
                    <div className="mt-3">
                      <img 
                        src={promotion.image} 
                        alt={promotion.title} 
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
      </div>

      {promotions.length === 0 && (
        <div className="text-center py-12">
          <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">ยังไม่มีโปรโมชั่น</h3>
          <p className="text-gray-600 mb-4">เริ่มต้นด้วยการเพิ่มโปรโมชั่นแรกของคุณ</p>
          <Button onClick={() => setIsDialogOpen(true)} className="bg-red-600 hover:bg-red-700">
            <Plus className="w-4 h-4 mr-2" />
            เพิ่มโปรโมชั่น
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default AdminPromotions;
// app/gallery/photos/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Upload, 
  Eye, 
  ChevronRight, 
  Image as ImageIcon,
  Filter,
  Search,
  Grid3X3,
  List
} from 'lucide-react';

// Mock data for photo categories
const photoCategories = [
  {
    id: 1,
    title: "পৌরসভা ভবন",
    count: 24,
    image: "/api/placeholder/400/300",
    description: "আমাদের পৌরসভার আধুনিক ভবন ও অবকাঠামো",
    date: "২০২৪-০১-১৫",
    featured: true
  },
  {
    id: 2,
    title: "উদ্বোধনী অনুষ্ঠান",
    count: 18,
    image: "/api/placeholder/400/300",
    description: "বিভিন্ন প্রকল্পের উদ্বোধনী ceremony",
    date: "২০২৪-০২-২০",
    featured: true
  },
  {
    id: 3,
    title: "উন্নয়ন কাজ",
    count: 32,
    image: "/api/placeholder/400/300",
    description: "চলমান উন্নয়ন কর্মকাণ্ড",
    date: "২০২৪-০৩-১০",
    featured: false
  },
  {
    id: 4,
    title: "সামাজিক কার্যক্রম",
    count: 15,
    image: "/api/placeholder/400/300",
    description: "সমাজসেবামূলক বিভিন্ন activity",
    date: "২০২৪-০১-২৫",
    featured: false
  },
  {
    id: 5,
    title: "বার্ষিক ক্রীড়া",
    count: 27,
    image: "/api/placeholder/400/300",
    description: "বাৎসরিক sports competition",
    date: "২০২৪-০২-০৫",
    featured: true
  },
  {
    id: 6,
    title: "সাংস্কৃতিক অনুষ্ঠান",
    count: 21,
    image: "/api/placeholder/400/300",
    description: "সাংস্কৃতিক program ও performance",
    date: "২০২৪-০৩-১৫",
    featured: false
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function PhotoGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Filter categories based on search and selection
  const filteredCategories = photoCategories.filter(category => {
    const matchesSearch = category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           (selectedCategory === 'featured' && category.featured);
    
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'featured', ...Array.from(new Set(photoCategories.map(cat => cat.title)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Camera className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ফটো গ্যালারি</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              বাঘারপাড়া পৌরসভার স্মরণীয় মুহূর্তের সংগ্রহশালা
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Controls Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="ছবি বা ইভেন্ট খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              {/* View Controls */}
              <div className="flex gap-4 items-center">
                {/* View Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-white shadow-sm text-purple-600' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === 'list' 
                        ? 'bg-white shadow-sm text-purple-600' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Filter Button */}
                <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:border-purple-400 transition-colors">
                    <Filter className="w-5 h-5" />
                    <span>ফিল্টার</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'সবগুলো' : category === 'featured' ? 'ফিচার্ড' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid/List */}
          <div className="p-6">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">কোন ছবি পাওয়া যায়নি</h3>
                <p className="text-gray-500">আপনার সার্চের সাথে মিলছে এমন কোন ছবি নেই</p>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
                }
              >
                {filteredCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Image Container */}
                    <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'}`}>
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      {category.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            ফিচার্ড
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center">
                        <button className="opacity-0 hover:opacity-100 transform translate-y-4 hover:translate-y-0 transition-all bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                          <Eye className="w-6 h-6 text-purple-600" />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {category.count}টি ছবি
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{category.date}</span>
                        <button className="flex items-center gap-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors group">
                          <span>দেখুন</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Upload Section */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-t border-gray-200">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">আপনার ছবি শেয়ার করুন</h3>
                  <p className="text-gray-700">
                    বাঘারপাড়া পৌরসভা সম্পর্কিত আপনার তোলা বিশেষ মুহূর্তের ছবি আমাদের সাথে শেয়ার করুন
                  </p>
                </div>
                <button
                  onClick={() => setIsUploadModalOpen(true)}
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Upload className="w-5 h-5" />
                  <span>ছবি আপলোড করুন</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-semibold mb-4">ছবি আপলোড</h3>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">ছবি এখানে ড্রপ করুন অথবা ক্লিক করে সিলেক্ট করুন</p>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  ব্রাউজ করুন
                </button>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">শিরোনাম</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="ছবির শিরোনাম লিখুন..."
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">বর্ণনা</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={3}
                  placeholder="ছবির বর্ণনা লিখুন..."
                />
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setIsUploadModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  বাতিল
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  আপলোড করুন
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
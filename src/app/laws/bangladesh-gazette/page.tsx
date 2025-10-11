"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Calendar, 
  ExternalLink, 
  BookOpen, 
  FileText, 
  Building2,
  Clock,
  AlertCircle,
  ChevronRight,
  Play,
  Shield,
  Users
} from "lucide-react";

export default function BangladeshGazette() {
  const [query, setQuery] = useState("");
  const [ministry, setMinistry] = useState("");
  const [memoNo, setMemoNo] = useState("");
  const [date, setDate] = useState("");
  const [activeTab, setActiveTab] = useState("search");
  const [isLoading, setIsLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const recentExtrasUrl = "https://www.dpp.gov.bd/bgpress/index.php/document/extraordinary_gazettes_month_wise/2025";

  // Sample ministries for autocomplete
  const ministries = [
    "শিক্ষা মন্ত্রণালয়",
    "স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়",
    "অর্থ মন্ত্রণালয়",
    "গৃহায়ন ও গণপূর্ত মন্ত্রণালয়",
    "পররাষ্ট্র মন্ত্রণালয়",
    "যোগাযোগ মন্ত্রণালয়",
    "মহিলা ও শিশু বিষয়ক মন্ত্রণালয়"
  ];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Add to search history
    if (query && !searchHistory.includes(query)) {
      setSearchHistory(prev => [query, ...prev.slice(0, 4)]);
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (date) {
      const year = new Date(date).getFullYear();
      window.open(`https://www.dpp.gov.bd/bgpress/index.php/document/extraordinary_gazettes_month_wise/${year}`, "_blank");
    } else {
      window.open("https://www.dpp.gov.bd/bgpress/index.php/document/extraordinary_gazettes", "_blank");
    }
    
    setIsLoading(false);
  };

  const quickLinks = [
    {
      title: "গেজেট আর্কাইভ",
      description: "সমস্ত প্রকাশিত গেজেট",
      url: "https://www.dpp.gov.bd/bgpress/index.php/document/gazettes/140",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      title: "এক্সট্রাঅর্ডিনারি গেজেট",
      description: "মাসভিত্তিক তালিকা",
      url: recentExtrasUrl,
      icon: Calendar,
      color: "bg-green-500"
    },
    {
      title: "আইন ও বিচার বিভাগ",
      description: "গেজেট সম্পর্কিত তথ্য",
      url: "https://old.lawjusticediv.gov.bd/static/bangladesh_gazette.php",
      icon: Shield,
      color: "bg-purple-500"
    },
    {
      title: "বাংলাপিডিয়া",
      description: "ঐতিহাসিক তথ্য",
      url: "https://en.banglapedia.org/index.php/Bangladesh_Gazette%2C_The",
      icon: BookOpen,
      color: "bg-orange-500"
    }
  ];

  const features = [
    {
      icon: FileText,
      title: "সরকারি বিজ্ঞপ্তি",
      description: "সমস্ত সরকারি বিজ্ঞপ্তি ও নির্দেশনা"
    },
    {
      icon: Users,
      title: "নিয়োগ ও পদোন্নতি",
      description: "সরকারি চাকুরির নিয়োগ ও পদোন্নতি সংবাদ"
    },
    {
      icon: Building2,
      title: "আইন ও বিধি",
      description: "নতুন আইন ও বিধি প্রকাশনা"
    },
    {
      icon: Calendar,
      title: "সরকারি ছুটি",
      description: "বার্ষিক সরকারি ছুটির তালিকা"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <FileText className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">বাংলাদেশ গেজেট</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              সরকারিভাবে প্রকাশিত অফিসিয়াল গেজেট - আপনার সকল সরকারি তথ্যের নির্ভরযোগ্য উৎস
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                দ্রুত লিঙ্ক
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <motion.a
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                  >
                    <div className={`p-2 rounded-lg ${link.color} text-white`}>
                      <link.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm group-hover:text-blue-600">{link.title}</p>
                      <p className="text-xs text-gray-500">{link.description}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Search History */}
            {searchHistory.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  সাম্প্রতিক খোঁজা
                </h3>
                <div className="space-y-2">
                  {searchHistory.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="w-full text-left p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex">
                  {["search", "features", "info"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-4 px-6 text-center font-medium transition-all ${
                        activeTab === tab
                          ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {tab === "search" && "গেজেট খুঁজুন"}
                      {tab === "features" && "সেবাসমূহ"}
                      {tab === "info" && "গেজেট সম্পর্কে"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {activeTab === "search" && (
                    <motion.div
                      key="search"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <form onSubmit={handleSearch} className="space-y-4">
                        {/* Search Input */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            কীওয়ার্ড দিয়ে খুঁজুন
                          </label>
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              value={query}
                              onChange={(e) => setQuery(e.target.value)}
                              placeholder="গেজেট নম্বর, বিষয় বা কীওয়ার্ড লিখুন..."
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Ministry */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              মন্ত্রণালয় / বিভাগ
                            </label>
                            <select
                              value={ministry}
                              onChange={(e) => setMinistry(e.target.value)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="">সব মন্ত্রণালয়</option>
                              {ministries.map((min) => (
                                <option key={min} value={min}>{min}</option>
                              ))}
                            </select>
                          </div>

                          {/* Memo No */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              স্মারক নম্বর
                            </label>
                            <input
                              value={memoNo}
                              onChange={(e) => setMemoNo(e.target.value)}
                              placeholder="উদাহরণ: MOFA/ADM/01/2024"
                              className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>

                        {/* Date */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            তারিখ
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <motion.button
                            type="submit"
                            disabled={isLoading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
                          >
                            {isLoading ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                খুঁজছি...
                              </>
                            ) : (
                              <>
                                <Search className="w-5 h-5" />
                                গেজেট খুঁজুন
                              </>
                            )}
                          </motion.button>
                          
                          <button
                            type="button"
                            onClick={() => {
                              window.open("https://en.banglapedia.org/index.php/Bangladesh_Gazette%2C_The", "_blank");
                            }}
                            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors"
                          >
                            <BookOpen className="w-5 h-5" />
                            পরিচিতি
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  {activeTab === "features" && (
                    <motion.div
                      key="features"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature) => (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                          >
                            <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                              <feature.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "info" && (
                    <motion.div
                      key="info"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="prose max-w-none"
                    >
                      <h3 className="text-xl font-semibold mb-4">বাংলাদেশ গেজেট সম্পর্কে</h3>
                      <div className="space-y-4 text-gray-700">
                        <p>
                          বাংলাদেশ গেজেট হল সরকারিভাবে প্রকাশিত অফিসিয়াল গেজেট যেখানে সরকারি বিজ্ঞপ্তি, 
                          নিয়োগ-পদোন্নতি, সার্ভিস রুলস, আইন ও বিধি, সরকারি ছুটি ও অন্যান্য গুরুত্বপূর্ণ 
                          নির্দেশাবলি প্রকাশ করা হয়।
                        </p>
                        
                        <h4 className="font-semibold">প্রকাশনাক্রম ও ধরন</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>সাপ্তাহিক প্রকাশিত গেজেট (The Bangladesh Gazette - সাধারণত সাপ্তাহিক)</li>
                          <li>অতিরিক্ত (Extraordinary) গেজেট - জরুরি/বিশেষ বিজ্ঞপ্তি</li>
                        </ul>

                        <h4 className="font-semibold">ঐতিহাসিক পটভূমি</h4>
                        <p>
                          গেজেটটির ইতিহাস ১৯৪৭ সালের &apos;Dacca Gazette&apos; থেকে শুরু করে; স্বাধীন বাংলাদেশের পর 
                          ১৯৭৩ সালে &apos;The Bangladesh Gazette&apos; রূপে প্রতিষ্ঠিত হয়।
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Preview Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Play className="w-5 h-5 text-blue-600" />
                    সাম্প্রতিক গেজেট প্রিভিউ
                  </h3>
                  <a
                    href={recentExtrasUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    সবগুলো দেখুন
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="aspect-video border rounded-xl overflow-hidden bg-gray-50">
                  <iframe
                    src={recentExtrasUrl}
                    title="Extraordinary Gazettes - DPP"
                    className="w-full h-full"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-blue-800 font-medium">গেজেট ডাউনলোড নির্দেশিকা</p>
                      <p className="text-sm text-blue-700 mt-1">
                        প্রিভিউ থেকে পিডিএফ আইকনে ক্লিক করে অফিসিয়াল গেজেট ডাউনলোড করুন। 
                        এটি সরকারিভাবে গ্রহণযোগ্য কপি হিসেবে ব্যবহার করা যাবে।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
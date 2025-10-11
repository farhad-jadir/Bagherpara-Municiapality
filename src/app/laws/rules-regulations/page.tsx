// app/laws/bangladesh-gazette/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Search, ExternalLink, BookOpen, Scale, FileText, Download, ArrowRight, Filter, Star, Clock, Users, Shield, Building, Landmark, GraduationCap, Cpu, Leaf, BanknoteIcon } from "lucide-react";

// Types
interface Resource {
  title: string;
  href: string;
  description: string;
  category: string;
  official: boolean;
  featured?: boolean;
}

interface LawCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  laws: string[];
}

export default function BangladeshGazette() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);
  const [recentViews, setRecentViews] = useState<string[]>([]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Resources data
  const resources: Resource[] = [
    {
      title: "Bangladesh Gazette (Government Press)",
      href: "https://www.dpp.gov.bd/bgpress/index.php/document/gazettes/140",
      description: "সরকারি গেজেট (সাপ্তাহিক ও অতিরিক্ত): নতুন নোটিফিকেশন, অর্ডার, নিয়োগ ও নীতিমালা।",
      category: "official",
      official: true,
      featured: true
    },
    {
      title: "Laws of Bangladesh (BDlaws / Bangladesh Code)",
      href: "https://bdlaws.minlaw.gov.bd/",
      description: "বাংলাদেশের অফিসিয়াল আইন, অধ্যাদেশ ও রেগুলেশনসমূহ — সহজ সার্চ সুবিধাসহ।",
      category: "official",
      official: true,
      featured: true
    },
    {
      title: "Ministry of Law, Justice and Parliamentary Affairs",
      href: "https://minlaw.gov.bd/",
      description: "আইন মন্ত্রণালয়ের অফিসিয়াল ওয়েবসাইট ও নীতিমালা সংগ্রহ।",
      category: "official",
      official: true
    },
    {
      title: "Legislative & Parliamentary Affairs Division",
      href: "https://legislativediv.gov.bd/",
      description: "সংসদীয় বিল, আইন প্রণয়ন সংক্রান্ত তথ্য ও গেজেট প্রকাশনা।",
      category: "official",
      official: true
    },
    {
      title: "Law & Justice Division",
      href: "https://lawjusticediv.gov.bd/",
      description: "বিচার বিভাগ ও আইনি কাঠামো সম্পর্কিত রিসোর্স ও বিজ্ঞপ্তি।",
      category: "official",
      official: true
    },
  ];

  // Law categories with enhanced data
  const lawCategories: LawCategory[] = [
    {
      id: "constitutional",
      title: "সংবিধান ও রাষ্ট্রীয় আইন",
      description: "মৌলিক সংবিধান ও রাষ্ট্রীয় কাঠামো সম্পর্কিত আইন",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      laws: [
        "বাংলাদেশের সংবিধান, ১৯৭২",
        "Representation of the People Order",
        "Public Servants Act",
        "Right to Information Act, ২০০৯",
        "Official Secrets Act"
      ]
    },
    {
      id: "criminal",
      title: "দণ্ডবিধি ও অপরাধ আইন",
      description: "অপরাধ ও শাস্তি সম্পর্কিত আইনসমূহ",
      icon: <Scale className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      laws: [
        "Penal Code, 1860",
        "Code of Criminal Procedure, 1898",
        "Evidence Act, 1872",
        "Narcotics Control Act, 2018",
        "Digital Security Act, 2018",
        "Anti-Corruption Commission Act, 2004"
      ]
    },
    {
      id: "civil",
      title: "দেওয়ানি ও বাণিজ্যিক আইন",
      description: "বাণিজ্যিক ও দেওয়ানি মামলা সম্পর্কিত আইন",
      icon: <FileText className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      laws: [
        "Contract Act, 1872",
        "Specific Relief Act, 1877",
        "Companies Act, 1994",
        "Partnership Act, 1932",
        "Arbitration Act, 2001",
        "Consumer Rights Protection Act, ২০০৯"
      ]
    },
    {
      id: "family",
      title: "পারিবারিক ও ব্যক্তিগত আইন",
      description: "পারিবারিক সম্পর্ক ও ব্যক্তিগত বিষয়ক আইন",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      laws: [
        "Muslim Family Laws Ordinance, 1961",
        "Muslim Marriage and Divorce (Registration) Act",
        "Hindu Marriage Registration Act, 2012",
        "Christian Marriage Act, 1872",
        "Divorce Act, 1869",
        "Child Marriage Restraint Act, 2017",
        "Women and Children Repression Prevention Act, 2000"
      ]
    },
    {
      id: "land",
      title: "ভূমি ও সম্পত্তি আইন",
      description: "জমি ও সম্পত্তি সম্পর্কিত আইনসমূহ",
      icon: <Landmark className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
      laws: [
        "State Acquisition and Tenancy Act, 1950",
        "Land Reform Ordinance, 1984",
        "Acquisition and Requisition of Immovable Property Act",
        "Registration Act, 1908",
        "Survey and Settlement Act, 1958"
      ]
    },
    {
      id: "labor",
      title: "শ্রম ও কর্মসংস্থান আইন",
      description: "শ্রমিক ও কর্মসংস্থান সম্পর্কিত আইন",
      icon: <Building className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      laws: [
        "Bangladesh Labour Act, 2006",
        "Labour Rules, 2015",
        "Employment of Labour (Standing Orders) Act",
        "Industrial Relations Ordinance",
        "Factories Act, 1965"
      ]
    },
    {
      id: "environment",
      title: "পরিবেশ ও কৃষি আইন",
      description: "পরিবেশ সংরক্ষণ ও কৃষি বিষয়ক আইন",
      icon: <Leaf className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
      laws: [
        "Environment Conservation Act, 1995",
        "Forest Act, 1927",
        "Wildlife (Conservation and Security) Act, 2012",
        "Pesticide Ordinance, 1971",
        "Fisheries Ordinance, 1983"
      ]
    },
    {
      id: "technology",
      title: "তথ্যপ্রযুক্তি ও সাইবার আইন",
      description: "ডিজিটাল ও প্রযুক্তি সম্পর্কিত আইন",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      laws: [
        "Information and Communication Technology Act, 2006",
        "Digital Security Act, 2018",
        "Data Protection Act (draft)"
      ]
    },
    {
      id: "education",
      title: "শিক্ষা ও স্বাস্থ্য আইন",
      description: "শিক্ষা ও স্বাস্থ্য সেবা সম্পর্কিত আইন",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      laws: [
        "National Education Policy",
        "Medical and Dental Council Act",
        "Drug Control Ordinance, 1982",
        "Public Health (Emergency Provisions) Ordinance"
      ]
    },
    {
      id: "finance",
      title: "ব্যাংকিং, অর্থ ও রাজস্ব আইন",
      description: "আর্থিক ও রাজস্ব বিষয়ক আইনসমূহ",
      icon: <BanknoteIcon className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      laws: [
        "Income Tax Act, 2023",
        "Value Added Tax and Supplementary Duty Act, 2012",
        "Bank Companies Act, 1991",
        "Money Laundering Prevention Act",
        "Foreign Exchange Regulation Act"
      ]
    }
  ];

  // Filter resources based on search and category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = searchQuery === "" || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || 
      (selectedCategory === "official" && resource.official);
    
    return matchesSearch && matchesCategory;
  });

  // Filter categories based on search
  const filteredCategories = lawCategories.filter(category =>
    searchQuery === "" ||
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.laws.some(law => law.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Filter laws within each category based on search
  const getFilteredLaws = (laws: string[]) => {
    if (searchQuery === "") return laws.slice(0, 3);
    
    return laws
      .filter(law => law.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 3);
  };

  const handleResourceClick = (title: string) => {
    setRecentViews(prev => {
      const filtered = prev.filter(item => item !== title);
      return [title, ...filtered].slice(0, 5);
    });
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Static Header - No sticky effect */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                বাংলাদেশের আইন ও বিধিমালা
              </h1>
              <p className="text-gray-600 mt-1 text-sm">
                সরকারি গেজেট, আইন ও বিধিমালার সম্পূর্ণ ডিজিটাল সংগ্রহ
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="আইন, বিভাগ বা বিষয়বস্তু খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex justify-center md:justify-start gap-2 mt-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === "all" 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              সবগুলো
            </button>
            <button
              onClick={() => setSelectedCategory("official")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === "official" 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              সরকারি
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">১৫০+</p>
                <p className="text-sm text-gray-600">প্রধান আইন</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">৫০০+</p>
                <p className="text-sm text-gray-600">বিধিমালা</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">নিয়মিত</p>
                <p className="text-sm text-gray-600">হালনাগাদ</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Download className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">বিনামূল্যে</p>
                <p className="text-sm text-gray-600">প্রবেশযোগ্য</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search Results Info */}
        {(searchQuery || selectedCategory !== "all") && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-blue-800">সার্চ রেজাল্ট</h3>
                <p className="text-blue-600 text-sm">
                  {searchQuery && `খোঁজা হয়েছে: "${searchQuery}"`}
                  {searchQuery && selectedCategory !== "all" && " • "}
                  {selectedCategory !== "all" && `ফিল্টার: ${selectedCategory === "official" ? "সরকারি" : selectedCategory}`}
                </p>
              </div>
              <button
                onClick={clearSearch}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors"
              >
                ক্লিয়ার করুন
              </button>
            </div>
          </div>
        )}

        {/* Introduction - Hide when searching */}
        {!searchQuery && (
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-700">
                বাংলাদেশের আইন ব্যবস্থা সংবিধান, সংসদীয় আইন, অধ্যাদেশ, বিধিমালা ও
                গেজেট বিজ্ঞপ্তির মাধ্যমে পরিচালিত। নিচে বিভাগ অনুযায়ী প্রধান আইনগুলো
                সাজানো হলো — যাতে নাগরিক, আইনজীবী ও শিক্ষার্থীরা সহজে প্রাসঙ্গিক আইন
                খুঁজে পেতে পারেন।
              </p>
            </div>
          </section>
        )}

        {/* Official Resources */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-500" />
              অফিসিয়াল রিসোর্স
              {filteredResources.length > 0 && (
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                  {filteredResources.length}টি
                </span>
              )}
            </h2>
          </div>

          {filteredResources.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">কোন রিসোর্স পাওয়া যায়নি</p>
              <button
                onClick={clearSearch}
                className="mt-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                সব রিসোর্স দেখুন
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredResources.map((resource) => (
                <div
                  key={resource.href}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group cursor-pointer"
                  onClick={() => handleResourceClick(resource.title)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {resource.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {resource.official && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          <Shield className="w-3 h-3" />
                          সরকারি
                        </span>
                      )}
                      {resource.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                          <Star className="w-3 h-3" />
                          ফিচার্ড
                        </span>
                      )}
                    </div>
                    
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      ভিজিট করুন
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Law Categories */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Filter className="w-6 h-6 text-blue-600" />
              আইনের ধরন ও শ্রেণিবিন্যাস
              {filteredCategories.length > 0 && (
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                  {filteredCategories.length}টি বিভাগ
                </span>
              )}
            </h2>
          </div>

          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">কোন বিভাগ পাওয়া যায়নি</p>
              <button
                onClick={clearSearch}
                className="mt-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                সব বিভাগ দেখুন
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category) => {
                const filteredLaws = getFilteredLaws(category.laws);
                const totalFilteredLaws = searchQuery ? 
                  category.laws.filter(law => law.toLowerCase().includes(searchQuery.toLowerCase())).length : 
                  category.laws.length;

                return (
                  <div
                    key={category.id}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2">
                      {filteredLaws.map((law, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          {law}
                        </div>
                      ))}
                      
                      {totalFilteredLaws > 3 && (
                        <p className="text-blue-600 text-sm font-medium mt-2">
                          + {totalFilteredLaws - 3}টি আরও আইন
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Recently Viewed */}
        {recentViews.length > 0 && !searchQuery && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-600" />
              সম্প্রতি দেখা
            </h2>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-wrap gap-2">
                {recentViews.map((view, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                  >
                    <FileText className="w-4 h-4" />
                    {view}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Legal Notice */}
        <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Scale className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                আইনি নোটিশ
              </h3>
              <p className="text-yellow-700">
                ⚖️ এখানে প্রদত্ত তথ্যসমূহ শুধুমাত্র রেফারেন্স হিসেবে। বিস্তারিত
                জানতে অফিসিয়াল ওয়েবসাইট{" "}
                <a
                  href="https://bdlaws.minlaw.gov.bd/"
                  className="text-blue-600 underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bdlaws.minlaw.gov.bd
                </a>{" "}
                ভিজিট করুন অথবা সরকারি গেজেট দেখুন। সর্বশেষ হালনাগাদকৃত তথ্যের জন্য সরকারি সূত্র যাচাই করুন।
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
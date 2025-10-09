// app/services/trade-license/page.tsx
"use client";

import { useState } from "react";

import HeroSection from "./components/HeroSection";
import ProcessSection from "./components/ProcessSection";
import RequirementsSection from "./components/RequirementsSection";
import FeesSection from "./components/FeesSection";
import FAQSection from "./components/FAQSection";
import StatsSection from "./components/StatsSection";
import ContactSection from "./components/ContactSection";
import QuickActions from "./components/QuickActions"; // নতুন ইম্পোর্ট

export default function TradeLicense() {
  const [activeTab, setActiveTab] = useState("new");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      <div className="container mx-auto px-4 py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex">
                <button
                  className={`flex-1 py-5 px-6 text-center font-bold transition-all duration-300 ${
                    activeTab === "new"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("new")}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    <span>নতুন লাইসেন্স ইস্যু</span>
                  </div>
                </button>
                <button
                  className={`flex-1 py-5 px-6 text-center font-bold transition-all duration-300 ${
                    activeTab === "renew"
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("renew")}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    <span>লাইসেন্স নবায়ন</span>
                  </div>
                </button>
              </div>
              
              <div className="p-8">
                {activeTab === "new" ? (
                  <div className="space-y-8">
                    <div className="text-center mb-6">
                      <h2 className="text-3xl font-bold text-gray-800 mb-3">নতুন ট্রেড লাইসেন্স ইস্যু</h2>
                      <p className="text-gray-600 text-lg">আপনার নতুন ব্যবসার জন্য ট্রেড লাইসেন্স ইস্যু করুন সহজ পদ্ধতিতে</p>
                    </div>
                    <ProcessSection type="new" />
                    <RequirementsSection type="new" />
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="text-center mb-6">
                      <h2 className="text-3xl font-bold text-gray-800 mb-3">ট্রেড লাইসেন্স নবায়ন</h2>
                      <p className="text-gray-600 text-lg">বর্তমান লাইসেন্সের মেয়াদ বাড়ান দ্রুততম সময়ে</p>
                    </div>
                    <ProcessSection type="renew" />
                    <RequirementsSection type="renew" />
                  </div>
                )}
              </div>
            </div>
            
            <ContactSection />
            
          </div>
          
          {/* Right Column - Sidebar Content */}
          <div className="space-y-8">
            {/* Quick Actions Component */}
            <QuickActions />
            {/* FAQ Section */}
            <FAQSection />
            
            {/* Announcement Section */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                গুরুত্বপূর্ণ ঘোষণা
              </h2>
              <div className="space-y-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <p className="font-medium">ট্রেড লাইসেন্স ফি কাঠামো হালনাগাদ</p>
                  <p className="text-sm opacity-90">নতুন ফি কাঠামো ২০২৪ সালের ১লা জুলাই থেকে কার্যকর</p>
                </div>
                <div className="bg-white/20 p-3 rounded-lg">
                  <p className="font-medium">অনলাইন আবেদনে ১০% ছাড়</p>
                  <p className="text-sm opacity-90">অনলাইনে আবেদন করলে ফিতে বিশেষ ছাড়</p>
                </div>
              </div>
            </div>
            
            <FeesSection type="renew" />
            
            {/* Timeline Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                প্রক্রিয়া সময়সীমা
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">আবেদন জমা</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">২৪ ঘণ্টা</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">ডকুমেন্ট ভেরিফিকেশন</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">২-৩ দিন</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-700">সাইট ভিজিট</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">৩-৪ দিন</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">লাইসেন্স ইস্যু</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">১-২ দিন</span>
                </div>
                
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>মোট সময়:</strong> সাধারণত ৭-১০ কার্যদিবস
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
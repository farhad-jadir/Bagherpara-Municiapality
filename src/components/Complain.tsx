// components/Complain.tsx
"use client";

import { useState } from "react";
import { Send, User, Phone, Mail, MapPin, MessageCircle, AlertCircle, ThumbsUp, ChevronDown, ChevronUp } from "lucide-react";

interface UserData {
  name: string;
  phone: string;
  email: string;
  address: string;
  complain: string;
  comment: string;
}

export default function Complain() {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    complain: "",
    comment: ""
  });

  const [showIdentityForm, setShowIdentityForm] = useState(false);
  const [activeForm, setActiveForm] = useState<"complain" | "comment">("complain");

  const handleInputChange = (field: keyof UserData, value: string) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleComplainSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showIdentityForm) {
      setShowIdentityForm(true);
      setActiveForm("complain");
      return;
    }

    // ফর্ম validation
    if (!userData.name || !userData.phone || !userData.address || !userData.complain) {
      alert("দয়া করে সকল প্রয়োজনীয় তথ্য প্রদান করুন");
      return;
    }

    console.log("অভিযোগ জমা দেওয়া হয়েছে:", userData);
    alert("আপনার অভিযোগ সফলভাবে জমা দেওয়া হয়েছে!");
    
    // ফর্ম রিসেট
    setUserData({
      name: "",
      phone: "",
      email: "",
      address: "",
      complain: "",
      comment: ""
    });
    setShowIdentityForm(false);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showIdentityForm) {
      setShowIdentityForm(true);
      setActiveForm("comment");
      return;
    }

    // ফর্ম validation
    if (!userData.name || !userData.phone || !userData.address || !userData.comment) {
      alert("দয়া করে সকল প্রয়োজনীয় তথ্য প্রদান করুন");
      return;
    }

    console.log("মন্তব্য জমা দেওয়া হয়েছে:", userData);
    alert("আপনার মন্তব্য সফলভাবে জমা দেওয়া হয়েছে!");
    
    // ফর্ম রিসেট
    setUserData({
      name: "",
      phone: "",
      email: "",
      address: "",
      complain: "",
      comment: ""
    });
    setShowIdentityForm(false);
  };

  const toggleIdentityForm = () => {
    setShowIdentityForm(!showIdentityForm);
  };

  return (
    <div className="bg-live-gradienttow px-4 sm:px-8 md:px-12 py-8 bg-white rounded-xl shadow-2xl overflow-hidden">
      {/* হেডার */}
      <div className=".bg-live-gradienttow rounded from-purple-600 to-blue-600 py-6 text-center">
        <h1 className="text-2xl font-bold text-white">অভিযোগ ও মন্তব্য ব্যবস্থাপনা</h1>
        <p className="text-purple-100 mt-2">আপনার মূল্যবান মতামত আমাদেরকে উন্নত করতে সাহায্য করে</p>
      </div>

      {/* মূল কন্টেন্ট - দুইটি সমান ডিভ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* অভিযোগ ডিভ */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 shadow-lg border border-red-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-full">
              <AlertCircle className="text-red-600" size={24} />
            </div>
            <h2 className="text-xl font-bold text-red-800">অভিযোগ করুন</h2>
          </div>

          <form onSubmit={handleComplainSubmit} className="space-y-4">
            <div className="relative">
              <label className="block text-sm font-medium text-red-700 mb-2">
                <MessageCircle size={16} className="inline mr-1" />
                অভিযোগের বিবরণ *
              </label>
              <textarea
                required
                value={userData.complain}
                onChange={(e) => handleInputChange("complain", e.target.value)}
                rows={5}
                className="w-full px-4 py-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white"
                placeholder="আপনার অভিযোগের বিস্তারিত বিবরণ লিখুন..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {showIdentityForm && activeForm === "complain" ? "অভিযোগ জমা দিন" : "পরবর্তী ধাপ"}
            </button>
          </form>

          <div className="mt-4 p-3 bg-red-100 rounded-lg">
            <p className="text-xs text-red-700">
              ⚡ জরুরী অভিযোগের জন্য সরাসরি কল করুন: <strong>১৬৫৪৫</strong>
            </p>
          </div>
        </div>

        {/* মন্তব্য ডিভ */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <ThumbsUp className="text-green-600" size={24} />
            </div>
            <h2 className="text-xl font-bold text-green-800">মন্তব্য করুন</h2>
          </div>

          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <div className="relative">
              <label className="block text-sm font-medium text-green-700 mb-2">
                <MessageCircle size={16} className="inline mr-1" />
                মন্তব্য *
              </label>
              <textarea
                required
                value={userData.comment}
                onChange={(e) => handleInputChange("comment", e.target.value)}
                rows={5}
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                placeholder="আপনার মূল্যবান মন্তব্য লিখুন..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {showIdentityForm && activeForm === "comment" ? "মন্তব্য জমা দিন" : "পরবর্তী ধাপ"}
            </button>
          </form>

          <div className="mt-4 p-3 bg-green-100 rounded-lg">
            <p className="text-xs text-green-700">
              💡 আপনার মন্তব্য আমাদের সেবা উন্নত করতে সাহায্য করে
            </p>
          </div>
        </div>
      </div>

      {/* আপনার পরিচয় তথ্য সেকশন - ডাইনামিকভাবে show/hide হবে */}
      {showIdentityForm && (
        <div className="bg-gray-50 p-6 mt-4 rounded-xl border-t">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              আপনার পরিচয় তথ্য *
            </h3>
            <button
              onClick={toggleIdentityForm}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              {showIdentityForm ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User size={16} className="inline mr-1" />
                পুরো নাম *
              </label>
              <input
                type="text"
                required
                value={userData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="আপনার পুরো নাম লিখুন"
              />
              <User size={18} className="absolute left-3 top-11 text-gray-400" />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone size={16} className="inline mr-1" />
                মোবাইল নম্বর *
              </label>
              <input
                type="tel"
                required
                value={userData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="01XXXXXXXXX"
              />
              <Phone size={18} className="absolute left-3 top-11 text-gray-400" />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail size={16} className="inline mr-1" />
                ইমেইল ঠিকানা
              </label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="email@example.com"
              />
              <Mail size={18} className="absolute left-3 top-11 text-gray-400" />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin size={16} className="inline mr-1" />
                পূর্ণ ঠিকানা *
              </label>
              <input
                type="text"
                required
                value={userData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="গ্রাম/রোড, ওয়ার্ড নং"
              />
              <MapPin size={18} className="absolute left-3 top-11 text-gray-400" />
            </div>
          </div>

          {/* সাবমিট বাটন */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={activeForm === "complain" ? handleComplainSubmit : handleCommentSubmit}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {activeForm === "complain" ? "অভিযোগ জমা দিন" : "মন্তব্য জমা দিন"}
            </button>
          </div>

          <div className="mt-4 p-3 bg-purple-100 rounded-lg">
            <p className="text-xs text-purple-700 text-center">
              🔒 আপনার সকল তথ্য গোপন রাখা হবে এবং শুধুমাত্র পৌরসভার সংশ্লিষ্ট কর্মকর্তাদের সাথে শেয়ার করা হবে
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
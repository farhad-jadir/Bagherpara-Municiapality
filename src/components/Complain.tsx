"use client";

import { useState } from "react";
import {
  Send,
  User,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  AlertCircle,
  Shield,
  X,
} from "lucide-react";

interface UserData {
  name: string;
  phone: string;
  email: string;
  address: string;
  complain: string;
}

export default function Complain() {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    complain: "",
  });

  const [showIdentityForm, setShowIdentityForm] = useState(false);
  const [activeTab, setActiveTab] = useState<"complain" | "prevention">("complain");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof UserData, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!showIdentityForm) {
      setShowIdentityForm(true);
      return;
    }

    if (!userData.name || !userData.phone || !userData.address || !userData.complain) {
      alert("দয়া করে সকল প্রয়োজনীয় তথ্য প্রদান করুন");
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS এর মাধ্যমে ইমেইল পাঠানো
      const emailData = {
        service_id: 'service_1y71ien',
        template_id: 'template_wq5f70q',
        user_id: 'fSjXpODKqMPktWl3S',
        template_params: {
          name: userData.name,
          email: userData.email || "N/A",
          phone: userData.phone,
          message: userData.complain,
          type: activeTab === "complain" ? "অভিযোগ" : "প্রতিরোধ ব্যবস্থা",
          address: userData.address,
          date: new Date().toLocaleString('bn-BD', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        }
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert(`আপনার ${activeTab === "complain" ? "অভিযোগ" : "প্রস্তাবনা"} সফলভাবে জমা দেওয়া হয়েছে!`);

        // ফর্ম রিসেট
        setUserData({
          name: "",
          phone: "",
          email: "",
          address: "",
          complain: "",
        });
        setShowIdentityForm(false);
      } else {
        throw new Error('ইমেইল পাঠানো ব্যর্থ হয়েছে');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('বার্তা পাঠানো ব্যর্থ হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden relative">
      {/* হেডার */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-4 px-6 text-center">
        <h1 className="text-xl font-bold text-white">অভিযোগ ও প্রতিরোধমূলক ব্যবস্থা</h1>
        <p className="text-purple-100 text-sm mt-1">আপনার মতামত আমাদের জন্য গুরুত্বপূর্ণ</p>
      </div>

      {/* ট্যাব সিস্টেম */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("complain")}
          className={`flex-1 py-3 px-4 text-center font-medium transition-all ${
            activeTab === "complain"
              ? "bg-red-50 text-red-700 border-b-2 border-red-500"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <AlertCircle size={18} />
            <span>অভিযোগ</span>
          </div>
        </button>

        <button
          onClick={() => setActiveTab("prevention")}
          className={`flex-1 py-3 px-4 text-center font-medium transition-all ${
            activeTab === "prevention"
              ? "bg-green-50 text-green-700 border-b-2 border-green-500"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Shield size={18} />
            <span>প্রতিরোধ ব্যবস্থা</span>
          </div>
        </button>
      </div>

      {/* মূল কন্টেন্ট */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* টেক্সট এরিয়া */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageCircle size={16} className="inline mr-1" />
              {activeTab === "complain" ? "অভিযোগের বিবরণ *" : "প্রতিরোধমূলক প্রস্তাবনা *"}
            </label>
            <textarea
              required
              value={userData.complain}
              onChange={(e) => handleInputChange("complain", e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white resize-none"
              placeholder={
                activeTab === "complain"
                  ? "আপনার অভিযোগের বিস্তারিত বিবরণ লিখুন..."
                  : "প্রতিরোধমূলক ব্যবস্থার জন্য আপনার প্রস্তাবনা লিখুন..."
              }
            />
          </div>

          {/* ✅ বাটন কেন্দ্রাভিমুখে */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-dynamic primary w-full sm:w-60 px-6 justify-center gap-2 ${
                activeTab === "complain"
                  ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                  : "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  পাঠানো হচ্ছে...
                </>
              ) : (
                <>
                  <Send size={18} />
                  {showIdentityForm
                    ? activeTab === "complain"
                      ? "অভিযোগ জমা দিন"
                      : "প্রস্তাবনা জমা দিন"
                    : "পরবর্তী ধাপ"}
                </>
              )}
            </button>
          </div>
        </form>

        {/* তথ্য বক্স */}
        <div
          className={`mt-4 p-3 rounded-lg text-xs ${
            activeTab === "complain" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
          }`}
        >
          <p>
            {activeTab === "complain"
              ? "⚡ জরুরী অভিযোগের জন্য সরাসরি কল করুন: ১৬৫৪৫"
              : "💡 আপনার প্রস্তাবনা আমাদের সেবা উন্নত করতে সাহায্য করে"}
          </p>
        </div>

        {/* গোপনীয়তা নোটিশ */}
        <div className="mt-3 p-2 bg-purple-50 rounded-lg">
          <p className="text-xs text-purple-700 text-center">
            🔒 আপনার সকল তথ্য গোপন রাখা হবে
          </p>
        </div>
      </div>

      {/* 🧾 পরিচয় ফর্ম মডাল */}
      {showIdentityForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md mx-auto rounded-xl shadow-lg relative p-6">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowIdentityForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              আপনার পরিচয় তথ্য *
            </h3>

            <div className="space-y-3">
              <div className="relative">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  পুরো নাম *
                </label>
                <input
                  type="text"
                  required
                  value={userData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-3 py-2 pl-9 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="আপনার পুরো নাম"
                />
                <User size={16} className="absolute left-3 top-9 text-gray-400" />
              </div>

              <div className="relative">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  মোবাইল নম্বর *
                </label>
                <input
                  type="tel"
                  required
                  value={userData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full px-3 py-2 pl-9 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="01XXXXXXXXX"
                />
                <Phone size={16} className="absolute left-3 top-9 text-gray-400" />
              </div>

              <div className="relative">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  ইমেইল ঠিকানা
                </label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-2 pl-9 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="email@example.com"
                />
                <Mail size={16} className="absolute left-3 top-9 text-gray-400" />
              </div>

              <div className="relative">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  পূর্ণ ঠিকানা *
                </label>
                <input
                  type="text"
                  required
                  value={userData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full px-3 py-2 pl-9 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="গ্রাম/রোড, ওয়ার্ড নং"
                />
                <MapPin size={16} className="absolute left-3 top-9 text-gray-400" />
              </div>
            </div>

            {/* ✅ মডাল বাটন কেন্দ্রাভিমুখে */}
            <div className="flex justify-center mt-5">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`btn-dynamic secondary px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all text-white rounded-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    পাঠানো হচ্ছে...
                  </>
                ) : (
                  "জমা দিন"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
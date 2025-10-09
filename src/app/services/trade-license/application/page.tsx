// app/services/trade-license/application/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface ApplicationData {
  businessType: string;
  businessSize: string;
  licenseType: string;
  duration: string;
  calculatedFee: number;
  onlineDiscount: number;
  finalAmount: number;
  timestamp: string;
}

export default function LicenseApplication() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const licenseType = searchParams.get('type') || 'new';

  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    fatherName: "",
    motherName: "",
    nid: "",
    dateOfBirth: "",
    phone: "",
    email: "",

    // Business Information
    businessName: "",
    tradeName: "",
    businessAddress: "",
    permanentAddress: "",
    businessNature: "",

    // Documents
    hasTradeLicense: false,
    hasTinCertificate: false,
    hasBankAccount: false,

    // Agreement
    agreeToTerms: false
  });

  useEffect(() => {
    // Load saved application data from localStorage
    const savedData = localStorage.getItem('tradeLicenseApplication');
    if (savedData) {
      setApplicationData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save application to localStorage
    const completeApplication = {
      ...formData,
      applicationData,
      submittedAt: new Date().toISOString(),
      applicationId: 'TL-' + Date.now()
    };

    localStorage.setItem('submittedApplication', JSON.stringify(completeApplication));
    
    // Redirect to success page
    router.push('/services/trade-license/application/success');
  };

  const businessTypeLabels = {
    retail: "খুচরা ব্যবসা",
    wholesale: "পাইকারি ব্যবসা", 
    industry: "শিল্প প্রতিষ্ঠান",
    service: "সেবা প্রতিষ্ঠান"
  };

  const businessSizeLabels = {
    small: "ছোট",
    medium: "মাঝারি", 
    large: "বড়"
  };

  if (!applicationData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mx-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">লোড হচ্ছে...</h2>
          <p className="text-gray-600">আপনার আবেদন তথ্য প্রস্তুত করা হচ্ছে</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {licenseType === 'new' ? 'নতুন ট্রেড লাইসেন্স আবেদন' : 'ট্রেড লাইসেন্স নবায়ন আবেদন'}
          </h1>
          <p className="text-gray-600 text-lg">নিচের ফর্মটি পূরণ করে আবেদন সম্পন্ন করুন</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Application Summary */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">আবেদন সারসংক্ষেপ</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">ব্যবসার ধরন:</span>
                    <p className="font-semibold">{businessTypeLabels[applicationData.businessType as keyof typeof businessTypeLabels]}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">ব্যবসার আকার:</span>
                    <p className="font-semibold">{businessSizeLabels[applicationData.businessSize as keyof typeof businessSizeLabels]}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">লাইসেন্স ধরন:</span>
                    <p className="font-semibold">{applicationData.licenseType === 'new' ? 'নতুন' : 'নবায়ন'}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">মেয়াদ:</span>
                    <p className="font-semibold">{applicationData.duration} বছর</p>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  ব্যক্তিগত তথ্য
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      পূর্ণ নাম *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      পিতার নাম *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fatherName}
                      onChange={(e) => handleInputChange('fatherName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="পিতার নাম লিখুন"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      মাতার নাম *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.motherName}
                      onChange={(e) => handleInputChange('motherName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="মাতার নাম লিখুন"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      জাতীয় পরিচয়পত্র নম্বর *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nid}
                      onChange={(e) => handleInputChange('nid', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="NID নম্বর লিখুন"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      জন্ম তারিখ *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      মোবাইল নম্বর *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="01XXXXXXXXX"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ইমেইল ঠিকানা
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                  ব্যবসার তথ্য
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ব্যবসার নাম *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ব্যবসার আইনী নাম"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ট্রেড নাম *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.tradeName}
                      onChange={(e) => handleInputChange('tradeName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ব্যবসার প্রচলিত নাম"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ব্যবসার ঠিকানা *
                    </label>
                    <textarea
                      required
                      value={formData.businessAddress}
                      onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ব্যবসার পূর্ণ ঠিকানা"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      স্থায়ী ঠিকানা *
                    </label>
                    <textarea
                      required
                      value={formData.permanentAddress}
                      onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="আপনার স্থায়ী ঠিকানা"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ব্যবসার প্রকৃতি *
                    </label>
                    <textarea
                      required
                      value={formData.businessNature}
                      onChange={(e) => handleInputChange('businessNature', e.target.value)}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ব্যবসার বিস্তারিত বর্ণনা"
                    />
                  </div>
                </div>
              </div>

              {/* Documents Checklist */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                  </svg>
                  প্রয়োজনীয় ডকুমেন্ট
                </h3>

                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.hasTradeLicense}
                      onChange={(e) => handleInputChange('hasTradeLicense', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">বর্তমান ট্রেড লাইসেন্স (নবায়নের ক্ষেত্রে)</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.hasTinCertificate}
                      onChange={(e) => handleInputChange('hasTinCertificate', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">টিন সার্টিফিকেট</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.hasBankAccount}
                      onChange={(e) => handleInputChange('hasBankAccount', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">ব্যাংক অ্যাকাউন্ট</span>
                  </label>
                </div>
              </div>

              {/* Agreement */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    className="w-4 h-4 mt-1 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">
                    আমি ঘোষণা করছি যে উপরে প্রদত্ত সকল তথ্য সঠিক এবং সম্পূর্ণ। ভুল তথ্য প্রদানের দায়দায়িত্ব আমি নিজেই বহন করব। *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <button
                  type="submit"
                  disabled={!formData.agreeToTerms}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>আবেদন জমা দিন</span>
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar - Fee Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">ফি সারসংক্ষেপ</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">মূল ফি:</span>
                  <span className="font-semibold">{applicationData.calculatedFee.toLocaleString()} টাকা</span>
                </div>
                
                <div className="flex justify-between text-green-600">
                  <span>অনলাইন ছাড় (৫%):</span>
                  <span className="font-semibold">-{applicationData.onlineDiscount.toLocaleString()} টাকা</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-gray-800">মোট পরিশোধযোগ্য:</span>
                    <span className="text-green-600">{applicationData.finalAmount.toLocaleString()} টাকা</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg mt-4">
                  <p className="text-sm text-blue-800 text-center">
                    আবেদন জমা দেওয়ার পর পেমেন্ট অপশন দেখতে পাবেন
                  </p>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                সহায়তা
              </h4>
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• সকল ফিল্ড * চিহ্নিত হলে সেগুলো পূরণ করা বাধ্যতামূলক</li>
                <li>• আবেদন জমা দেওয়ার পর আর এডিট করা যাবে না</li>
                <li>• প্রয়োজনে হেল্পলাইন: ১৬৫৪৫</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
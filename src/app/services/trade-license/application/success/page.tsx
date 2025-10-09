// app/services/trade-license/application/success/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface SubmittedApplication {
  applicationId: string;
  submittedAt: string;
  formData: any;
  applicationData: any;
}

export default function ApplicationSuccess() {
  const [application, setApplication] = useState<SubmittedApplication | null>(null);

  useEffect(() => {
    const savedApplication = localStorage.getItem('submittedApplication');
    if (savedApplication) {
      setApplication(JSON.parse(savedApplication));
    }
  }, []);

  if (!application) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">আবেদন সফলভাবে জমা হয়েছে!</h1>
          <p className="text-gray-600 text-lg mb-6">
            আপনার ট্রেড লাইসেন্স আবেদন সফলভাবে গ্রহণ করা হয়েছে। নিচের তথ্যগুলো সংরক্ষণ করুন।
          </p>

          {/* Application Details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">আবেদন তথ্য</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">আবেদন নম্বর:</span>
                <p className="font-semibold text-blue-600">{application.applicationId}</p>
              </div>
              <div>
                <span className="text-gray-600">জমার সময়:</span>
                <p className="font-semibold">{new Date(application.submittedAt).toLocaleString('bn-BD')}</p>
              </div>
              <div>
                <span className="text-gray-600">পরিশোধযোগ্য ফি:</span>
                <p className="font-semibold text-green-600">
                  {application.applicationData.finalAmount.toLocaleString()} টাকা
                </p>
              </div>
              <div>
                <span className="text-gray-600">স্ট্যাটাস:</span>
                <p className="font-semibold text-orange-600">প্রক্রিয়াধীন</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
            <h4 className="font-semibold text-blue-800 mb-3">পরবর্তী ধাপসমূহ</h4>
            <ol className="text-blue-700 space-y-2 text-sm">
              <li>1. পেমেন্ট পৃষ্ঠায় গিয়ে ফি পরিশোধ করুন</li>
              <li>2. আবেদন নম্বর দিয়ে স্ট্যাটাস চেক করুন</li>
              <li>3. ২৪-৪৮ ঘন্টার মধ্যে লাইসেন্স ইস্যু করা হবে</li>
              <li>4. ইমেইল/SMS এর মাধ্যমে নোটিফিকেশন পাবেন</li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/trade-license/payment"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              <span>ফি পরিশোধ করুন</span>
            </Link>

            <Link
              href="/services/trade-license"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              হোমপেজে ফিরে যান
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
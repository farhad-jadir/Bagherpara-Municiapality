// app/services/trade-license/components/QuickActions.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import FeeCalculator from "./FeeCalculator";

export default function QuickActions() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showFeeCalculator, setShowFeeCalculator] = useState(false);

  const actions = [
    {
      title: "ফরম ডাউনলোড",
      description: "PDF ফরম",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bgGradient: "from-blue-50 to-blue-100 cursor-pointer",
      borderColor: "border-blue-200",
      hoverBorderColor: "hover:border-blue-300",
      iconBg: "bg-blue-100",
      hoverIconBg: "group-hover:bg-blue-200",
      onClick: () => setShowFormModal(true)
    },
    {
      title: "স্ট্যাটাস চেক",
      description: "আবেদন ট্র্যাক করুন",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgGradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      hoverBorderColor: "hover:border-green-300",
      iconBg: "bg-green-100",
      hoverIconBg: "group-hover:bg-green-200",
      href: "/application-status"
    },
    {
      title: "ফি ক্যালকুলেটর",
      description: "ফি হিসাব করুন",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bgGradient: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      hoverBorderColor: "hover:border-purple-300",
      iconBg: "bg-purple-100",
      hoverIconBg: "group-hover:bg-purple-200",
      onClick: () => setShowFeeCalculator(true)
    },
    {
      title: "গাইডলাইন",
      description: "স্টেপ বাই স্টেপ",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgGradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      hoverBorderColor: "hover:border-orange-300",
      iconBg: "bg-orange-100",
      hoverIconBg: "group-hover:bg-orange-200",
      href: "/guidelines"
    }
  ];

  const forms = [
    { name: "ট্রেড লাইসেন্স আবেদন ফরম", type: "new", size: "245 KB", url: "/forms/trade-license-application.pdf" },
    { name: "লাইসেন্স নবায়ন ফরম", type: "renew", size: "210 KB", url: "/forms/license-renewal.pdf" },
    { name: "ব্যবসা পরিবর্তন ফরম", type: "modification", size: "195 KB", url: "/forms/business-modification.pdf" },
    { name: "নাম পরিবর্তন ফরম", type: "name-change", size: "180 KB", url: "/forms/name-change.pdf" }
  ];

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          দ্রুত কাজ সম্পন্ন করুন
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actions.map((action, index) => (
            action.href ? (
              <Link
                key={index}
                href={action.href}
                className={`group bg-gradient-to-br ${action.bgGradient} p-4 rounded-xl border ${action.borderColor} ${action.hoverBorderColor} transition-all duration-300 hover:shadow-md`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`${action.iconBg} p-2 rounded-lg ${action.hoverIconBg} transition-colors`}>
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <button
                key={index}
                onClick={action.onClick}
                className={`group bg-gradient-to-br ${action.bgGradient} p-4 rounded-xl border ${action.borderColor} ${action.hoverBorderColor} transition-all duration-300 hover:shadow-md text-left`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`${action.iconBg} p-2 rounded-lg ${action.hoverIconBg} transition-colors`}>
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </div>
              </button>
            )
          ))}
        </div>
      </div>

      {/* Form Download Modal */}
      {showFormModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">ফরম ডাউনলোড</h3>
              <button
                onClick={() => setShowFormModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-4">
                {forms.map((form, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-semibold text-gray-800">{form.name}</h4>
                      <p className="text-sm text-gray-600">ফাইলের সাইজ: {form.size}</p>
                    </div>
                    <a
                      href={form.url}
                      download
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>ডাউনলোড</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowFormModal(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  বন্ধ করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fee Calculator Modal */}
      <FeeCalculator 
        isOpen={showFeeCalculator} 
        onClose={() => setShowFeeCalculator(false)} 
      />
    </>
  );
}
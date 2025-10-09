// app/services/trade-license/components/FeeCalculator.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface FeeCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeeCalculator({ isOpen, onClose }: FeeCalculatorProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    businessType: "retail",
    businessSize: "small",
    licenseType: "new",
    duration: "1"
  });

  const [calculation, setCalculation] = useState({
    baseFee: 0,
    serviceFee: 0,
    vat: 0,
    total: 0,
    yearlyFee: 0
  });

  // Complete fee structure with realistic prices
  const fees = {
    base: {
      retail: { 
        small: 2000, 
        medium: 4000, 
        large: 8000 
      },
      wholesale: { 
        small: 4000, 
        medium: 8000, 
        large: 15000 
      },
      industry: { 
        small: 6000, 
        medium: 12000, 
        large: 25000 
      },
      service: { 
        small: 3000, 
        medium: 6000, 
        large: 10000 
      }
    },
    serviceFee: 300,
    vatRate: 0.15,
    renewalDiscount: 0.10, // 10% discount for renewal
    durationMultiplier: {
      "1": 1,
      "2": 1.8,   // 10% discount for 2 years
      "3": 2.4,   // 20% discount for 3 years
      "5": 3.5    // 30% discount for 5 years
    }
  };

  // Auto-calculate when form data changes
  useEffect(() => {
    calculateFee();
  }, [formData]);

  const calculateFee = () => {
    const baseFee = fees.base[formData.businessType as keyof typeof fees.base]?.[formData.businessSize as keyof typeof fees.base.retail] || 0;
    
    // Apply renewal discount
    let adjustedBaseFee = baseFee;
    if (formData.licenseType === "renew") {
      adjustedBaseFee = baseFee * (1 - fees.renewalDiscount);
    }

    // Apply duration multiplier
    const durationMultiplier = fees.durationMultiplier[formData.duration as keyof typeof fees.durationMultiplier] || 1;
    const totalBaseFee = adjustedBaseFee * durationMultiplier;
    
    const serviceFee = fees.serviceFee;
    const vat = (totalBaseFee + serviceFee) * fees.vatRate;
    const total = totalBaseFee + serviceFee + vat;
    const yearlyFee = total / parseInt(formData.duration);

    setCalculation({
      baseFee: totalBaseFee,
      serviceFee,
      vat,
      total,
      yearlyFee
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetCalculator = () => {
    setFormData({
      businessType: "retail",
      businessSize: "small",
      licenseType: "new",
      duration: "1"
    });
  };

  // FeeCalculator.tsx-এর handleApplyNow ফাংশন আপডেট করুন
const handleApplyNow = () => {
  // Calculate final fee with online discount
  const onlineDiscount = calculation.total * 0.05; // 5% online discount
  const finalAmount = calculation.total - onlineDiscount;

  // Create application data object
  const applicationData = {
    businessType: formData.businessType,
    businessSize: formData.businessSize,
    licenseType: formData.licenseType,
    duration: formData.duration,
    calculatedFee: calculation.total,
    onlineDiscount: onlineDiscount,
    finalAmount: finalAmount,
    timestamp: new Date().toISOString()
  };

  // Save to localStorage for the application page
  localStorage.setItem('tradeLicenseApplication', JSON.stringify(applicationData));

  // Close modal
  onClose();

  // Redirect to application page after a short delay for smooth UX
  setTimeout(() => {
    router.push(`/services/trade-license/application?type=${formData.licenseType}`);
  }, 300);
};

  const businessTypeLabels = {
    retail: "খুচরা ব্যবসা",
    wholesale: "পাইকারি ব্যবসা", 
    industry: "শিল্প প্রতিষ্ঠান",
    service: "সেবা প্রতিষ্ঠান"
  };

  const businessSizeLabels = {
    small: "ছোট (বার্ষিক আয় ১০ লাখ টাকার কম)",
    medium: "মাঝারি (বার্ষিক আয় ১০-৫০ লাখ টাকা)", 
    large: "বড় (বার্ষিক আয় ৫০ লাখ টাকার বেশি)"
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">ফি ক্যালকুলেটর</h3>
            <p className="text-gray-600 text-sm mt-1">আপনার লাইসেন্স ফি স্বয়ংক্রিয়ভাবে হিসাব করুন</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="space-y-6">
            {/* Business Type with better UX */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                ব্যবসার ধরন *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(businessTypeLabels).map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => handleInputChange("businessType", value)}
                    className={`p-3 border rounded-lg text-left transition-all ${
                      formData.businessType === value
                        ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
                        : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    <div className="font-medium text-sm">{label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Business Size with better UX */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                ব্যবসার আকার *
              </label>
              <div className="space-y-2">
                {Object.entries(businessSizeLabels).map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => handleInputChange("businessSize", value)}
                    className={`w-full p-3 border rounded-lg text-left transition-all ${
                      formData.businessSize === value
                        ? "border-green-500 bg-green-50 text-green-700 shadow-sm"
                        : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    <div className="font-medium text-sm">{label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* License Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                লাইসেন্সের ধরন *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleInputChange("licenseType", "new")}
                  className={`p-4 border rounded-lg text-center transition-all ${
                    formData.licenseType === "new"
                      ? "border-purple-500 bg-purple-50 text-purple-700 shadow-sm"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  <div className="font-semibold">নতুন লাইসেন্স</div>
                  <div className="text-xs text-gray-600 mt-1">প্রথমবারের মতো</div>
                </button>
                <button
                  onClick={() => handleInputChange("licenseType", "renew")}
                  className={`p-4 border rounded-lg text-center transition-all ${
                    formData.licenseType === "renew"
                      ? "border-purple-500 bg-purple-50 text-purple-700 shadow-sm"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  <div className="font-semibold">লাইসেন্স নবায়ন</div>
                  <div className="text-xs text-gray-600 mt-1">১০% ছাড়</div>
                </button>
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                লাইসেন্সের মেয়াদ *
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { value: "1", label: "১ বছর", discount: "" },
                  { value: "2", label: "২ বছর", discount: "১০% ছাড়" },
                  { value: "3", label: "৩ বছর", discount: "২০% ছাড়" },
                  { value: "5", label: "৫ বছর", discount: "৩০% ছাড়" }
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => handleInputChange("duration", item.value)}
                    className={`p-3 border rounded-lg text-center transition-all ${
                      formData.duration === item.value
                        ? "border-orange-500 bg-orange-50 text-orange-700 shadow-sm"
                        : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    <div className="font-semibold text-sm">{item.label}</div>
                    {item.discount && (
                      <div className="text-xs text-green-600 mt-1">{item.discount}</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculation Result - Always Visible */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5">
              <h4 className="font-bold text-blue-800 mb-4 text-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                ফি হিসাব
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">মূল ফি:</span>
                  <span className="font-semibold text-gray-800">{calculation.baseFee.toLocaleString()} টাকা</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">সেবা ফি:</span>
                  <span className="font-semibold text-gray-800">{calculation.serviceFee.toLocaleString()} টাকা</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">ভ্যাট (১৫%):</span>
                  <span className="font-semibold text-gray-800">{calculation.vat.toLocaleString()} টাকা</span>
                </div>

                {formData.licenseType === "renew" && (
                  <div className="flex justify-between items-center bg-green-50 p-2 rounded">
                    <span className="text-green-700 text-sm">নবায়ন ছাড় (১০%):</span>
                    <span className="font-semibold text-green-700 text-sm">-{(calculation.baseFee / (1 - fees.renewalDiscount) * fees.renewalDiscount).toLocaleString()} টাকা</span>
                  </div>
                )}

                {formData.duration !== "1" && (
                  <div className="flex justify-between items-center bg-orange-50 p-2 rounded">
                    <span className="text-orange-700 text-sm">বহু-বার্ষিক ছাড়:</span>
                    <span className="font-semibold text-orange-700 text-sm">
                      {formData.duration === "2" ? "১০%" : 
                       formData.duration === "3" ? "২০%" : "৩০%"} ছাড়
                    </span>
                  </div>
                )}

                {/* Online Discount Preview */}
                <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
                  <span className="text-blue-700 text-sm">অনলাইন ছাড় (৫%):</span>
                  <span className="font-semibold text-blue-700 text-sm">-{(calculation.total * 0.05).toLocaleString()} টাকা</span>
                </div>

                <div className="border-t border-blue-300 pt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">সর্বমোট ফি:</span>
                    <span className="font-bold text-blue-800 text-xl">{calculation.total.toLocaleString()} টাকা</span>
                  </div>
                  
                  <div className="flex justify-between items-center bg-white p-2 rounded border">
                    <span className="text-green-700 font-semibold">অনলাইনে পরিশোধযোগ্য:</span>
                    <span className="font-bold text-green-700 text-lg">{(calculation.total * 0.95).toLocaleString()} টাকা</span>
                  </div>

                  {parseInt(formData.duration) > 1 && (
                    <div className="flex justify-between items-center text-sm mt-2">
                      <span className="text-gray-600">বার্ষিক গড় ফি:</span>
                      <span className="font-semibold text-gray-700">{calculation.yearlyFee.toLocaleString()} টাকা/বছর</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Summary Info */}
              <div className="mt-4 p-3 bg-white rounded-lg border border-blue-100">
                <p className="text-sm text-blue-800 text-center">
                  <strong>{businessTypeLabels[formData.businessType as keyof typeof businessTypeLabels]}</strong> • 
                  <strong> {businessSizeLabels[formData.businessSize as keyof typeof businessSizeLabels].split(' (')[0]}</strong> • 
                  {formData.licenseType === "new" ? " নতুন লাইসেন্স" : " লাইসেন্স নবায়ন"} • 
                  {formData.duration} বছর
                </p>
              </div>
            </div>

            {/* Help Tips */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h5 className="font-semibold text-yellow-800 mb-2 flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                সহায়ক তথ্য
              </h5>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• <strong>অনলাইনে আবেদন করলে ৫% অতিরিক্ত ছাড়</strong> পাবেন</li>
                <li>• সকল ফি VAT ও অন্যান্য ট্যাক্স অন্তর্ভুক্ত</li>
                <li>• ফি পরিশোধের ২৪ ঘন্টার মধ্যে লাইসেন্স ইস্যু করা হয়</li>
                <li>• আবেদন করার পর আপনার তথ্য সংরক্ষিত হবে</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center">
            <button
              onClick={resetCalculator}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              রিসেট করুন
            </button>
            
            <div className="flex space-x-3">
              <button
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                বন্ধ করুন
              </button>
              <button 
                onClick={handleApplyNow}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center space-x-2 shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>এখনই আবেদন করুন</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
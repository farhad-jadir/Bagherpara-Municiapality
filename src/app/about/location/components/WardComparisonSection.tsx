// app/about/location/components/WardComparisonSection.tsx
"use client";

import { useState } from 'react';

interface WardInfo {
  id: number;
  name: string;
  area: string;
  population: number;
  households: number;
  councilor: string;
  contact: string;
  landmarks: string[];
  facilities: string[];
  areaSize: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export default function WardComparisonSection() {
  const [selectedWard, setSelectedWard] = useState<number>(1);

  const wardsData: WardInfo[] = [
    {
      id: 1,
      name: "১নং ওয়ার্ড",
      area: "বাঘারপাড়া সদর (পশ্চিম আংশিক)",
      population: 18500,
      households: 4250,
      councilor: "মোঃ শহীদুল ইসলাম",
      contact: "০১৭২XXXXXXX",
      landmarks: [
        "পৌরসভা কার্যালয়",
        "বাঘারপাড়া বাজার",
        "উপজেলা স্বাস্থ্য কমপ্লেক্স",
        "বাঘারপাড়া উচ্চ বিদ্যালয়"
      ],
      facilities: [
        "স্বাস্থ্য কেন্দ্র",
        "ফায়ার স্টেশন",
        "ব্যাংক শাখা",
        "কমিউনিটি সেন্টার"
      ],
      areaSize: "২.৫ বর্গ কিমি",
      coordinates: { lat: 23.224332355266505, lng: 89.34300601169451 }
    },
    {
      id: 2,
      name: "২নং ওয়ার্ড",
      area: "বাঘারপাড়া সদর (পূর্ব আংশিক)",
      population: 16700,
      households: 3850,
      councilor: "মোঃ জাহাঙ্গীর আলম",
      contact: "০১৮২XXXXXXX",
      landmarks: [
        "বাঘারপাড়া বাজার",
        "বাঘারপাড়া মসজিদ",
        "প্রাথমিক বিদ্যালয়",
        "কমিউনিটি ক্লিনিক"
      ],
      facilities: [
        "মসজিদ",
        "প্রাথমিক বিদ্যালয়",
        "খেলার মাঠ",
        "গ্রামীণ ব্যাংক"
      ],
      areaSize: "৩.২ বর্গ কিমি",
      coordinates: { lat: 23.222371345344797, lng: 89.34715262436174 }
    },
    {
      id: 3,
      name: "৩নং ওয়ার্ড",
      area: "মিরপুর ও বাঘারপাড়া (পূর্ব আংশিক)",
      population: 14200,
      households: 3250,
      councilor: "মোঃ রবিউল ইসলাম",
      contact: "০১৯২XXXXXXX",
      landmarks: [
        "বাঘারপাড়া বাজার",
        "নদী ঘাট",
        "মাধ্যমিক বিদ্যালয়",
        "কৃষি অফিস"
      ],
      facilities: [
        "নদী বন্দর",
        "কৃষি বিপণন কেন্দ্র",
        "মাদ্রাসা",
        "স cooperatives সমিতি"
      ],
      areaSize: "৪.১ বর্গ কিমি",
      coordinates: { lat: 23.22326538184236, lng: 89.34802660278245 }
    },
    {
      id: 4,
      name: "৪নং ওয়ার্ড",
      area: "দোহাকুলা আংশিক",
      population: 15800,
      households: 3650,
      councilor: "মোঃ সোহেল রানা",
      contact: "০১৬২XXXXXXX",
      landmarks: [
        "দোহাকুলা",
        "স্বাস্থ্য উপকেন্দ্র",
        "কলেজ",
        "বাস স্ট্যান্ড"
      ],
      facilities: [
        "কলেজ",
        "লাইব্রেরি",
        "যুব উন্নয়ন কেন্দ্র",
        "পোষ্ট অফিস"
      ],
      areaSize: "৩.৮ বর্গ কিমি",
      coordinates: { lat: 23.220219770679204, lng: 89.34905049711759 }
    },
    {
      id: 5,
      name: "৫নং ওয়ার্ড",
      area: "দোহাকুলা আংশিক",
      population: 13900,
      households: 3150,
      councilor: "মোঃ ইকবাল হোসেন",
      contact: "০১৫২XXXXXXX",
      landmarks: [
        "দোহাকুলা বাজার",
        "নদী ব্রিজ",
        "প্রাইমারি স্কুল",
        "মন্দির"
      ],
      facilities: [
        "প্রাথমিক বিদ্যালয়",
        "ধর্মীয় প্রতিষ্ঠান",
        "সামাজিক সংগঠন",
        "কৃষি খামার"
      ],
      areaSize: "৪.৫ বর্গ কিমি",
      coordinates: { lat: 23.21964522989238, lng: 89.3499340446103 }
    },
    {
      id: 6,
      name: "৬ নং ওয়ার্ড",
      area: "দোহাকুলা ও পার্শ্ববর্তী",
      population: 14600,
      households: 3350,
      councilor: "মোঃ আলমগীর হোসেন",
      contact: "০১৩২XXXXXXX",
      landmarks: [
        "দোহাকুলা বাজার",
        "কমিউনিটি সেন্টার",
        "হাই স্কুল",
        "নদী পার"
      ],
      facilities: [
        "মাধ্যমিক বিদ্যালয়",
        "কমিউনিটি ক্লিনিক",
        "স cooperatives ব্যাংক",
        "খেলার মাঠ"
      ],
      areaSize: "৩.৯ বর্গ কিমি",
      coordinates: { lat: 23.217748641487454, lng: 89.34894204724353 }
    },
    {
      id: 7,
      name: "৭ নং ওয়ার্ড",
      area: "দোহাকুলা এলাকা",
      population: 16200,
      households: 3750,
      councilor: "মোঃ সাজ্জাদ হোসেন",
      contact: "০১৪২XXXXXXX",
      landmarks: [
        "দোহাকুলা বাজার",
        "মসজিদ",
        "প্রাইমারি স্কুল",
        "কৃষি ফার্ম"
      ],
      facilities: [
        "বাজার",
        "ধর্মীয় প্রতিষ্ঠান",
        "শিক্ষা প্রতিষ্ঠান",
        "কৃষি সেবা কেন্দ্র"
      ],
      areaSize: "৩.৬ বর্গ কিমি",
      coordinates: { lat: 23.21985534904642, lng: 89.34684956662257 }
    },
    {
      id: 8,
      name: "৮ নং ওয়ার্ড",
      area: "মহিরন ও আশেপাশে",
      population: 15300,
      households: 3550,
      councilor: "মোঃ নাজমুল হক",
      contact: "০১২২XXXXXXX",
      landmarks: [
        "চৌরাস্তা বাজার",
        "উপজেলা স্বাস্থ্য কমপ্লেক্স",
        "মাধ্যমিক বিদ্যালয়",
        "নদী বাঁধ"
      ],
      facilities: [
        "স্বাস্থ্য ক্লিনিক",
        "শিক্ষা প্রতিষ্ঠান",
        "সামাজিক সংগঠন",
        "বিনোদন কেন্দ্র"
      ],
      areaSize: "৪.২ বর্গ কিমি",
      coordinates: { lat: 23.21885212707627, lng: 89.34448133369943 }
    },
    {
      id: 9,
      name: "৯ নং ওয়ার্ড",
      area: "মহিরন ও পার্শ্ববর্তী",
      population: 14800,
      households: 3450,
      councilor: "মোঃ আশরাফুল ইসলাম",
      contact: "০১১২XXXXXXX",
      landmarks: [
        "প্রশিকা মোড়",
        "প্রাথমিক বিদ্যালয়",
        "মসজিদ",
        "কমিউনিটি হল"
      ],
      facilities: [
        "বাজার",
        "শিক্ষা প্রতিষ্ঠান",
        "ধর্মীয় প্রতিষ্ঠান",
        "সামাজিক কেন্দ্র"
      ],
      areaSize: "৩.৭ বর্গ কিমি",
      coordinates: { lat: 23.213514833740206, lng: 89.344972812754 }
    }
  ];

  return (
    <section className="py-12 md:py-16 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-8 md:mb-12">
          ওয়ার্ড ভিত্তিক তুলনা
        </h2>
        
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-3 md:p-4 text-left">ওয়ার্ড</th>
                  <th className="p-3 md:p-4 text-center">জনসংখ্যা</th>
                  <th className="p-3 md:p-4 text-center">পরিবার</th>
                  <th className="p-3 md:p-4 text-center">আয়তন</th>
                  <th className="p-3 md:p-4 text-center">ঘনত্ব</th>
                  <th className="p-3 md:p-4 text-center">কাউন্সিলর</th>
                </tr>
              </thead>
              <tbody>
                {wardsData.map((ward) => (
                  <tr 
                    key={ward.id} 
                    className={`border-b hover:bg-green-50 cursor-pointer transition-colors ${
                      selectedWard === ward.id ? 'bg-green-100' : ''
                    }`}
                    onClick={() => setSelectedWard(ward.id)}
                  >
                    <td className="p-3 md:p-4 font-semibold text-green-800">
                      {ward.name}
                      <div className="text-xs text-gray-600">{ward.area}</div>
                    </td>
                    <td className="p-3 md:p-4 text-center">
                      {ward.population.toLocaleString()}
                    </td>
                    <td className="p-3 md:p-4 text-center">
                      {ward.households.toLocaleString()}
                    </td>
                    <td className="p-3 md:p-4 text-center">
                      {ward.areaSize}
                    </td>
                    <td className="p-3 md:p-4 text-center">
                      {(ward.population / parseFloat(ward.areaSize)).toFixed(0)}
                    </td>
                    <td className="p-3 md:p-4 text-center text-sm">
                      {ward.councilor.split(' ')[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* সারাংশ */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {wardsData.reduce((sum, ward) => sum + ward.population, 0).toLocaleString()}
            </div>
            <div className="text-sm font-semibold text-green-800">মোট জনসংখ্যা</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {wardsData.reduce((sum, ward) => sum + ward.households, 0).toLocaleString()}
            </div>
            <div className="text-sm font-semibold text-blue-800">মোট পরিবার</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {wardsData.reduce((sum, ward) => sum + parseFloat(ward.areaSize), 0).toFixed(1)}
            </div>
            <div className="text-sm font-semibold text-purple-800">মোট আয়তন (বর্গ কিমি)</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {(wardsData.reduce((sum, ward) => sum + ward.population, 0) / 
                wardsData.reduce((sum, ward) => sum + parseFloat(ward.areaSize), 0)).toFixed(0)}
            </div>
            <div className="text-sm font-semibold text-orange-800">গড় ঘনত্ব</div>
          </div>
        </div>
      </div>
    </section>
  );
}
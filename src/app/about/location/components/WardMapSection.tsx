// app/about/location/components/WardMapSection.tsx
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

export default function WardMapSection() {
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
      contact: "০১৩۲XXXXXXX",
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
      contact: "০১৪۲XXXXXXX",
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
      contact: "০১২۲XXXXXXX",
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
      contact: "০১১۲XXXXXXX",
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

  const selectedWardData = wardsData.find(ward => ward.id === selectedWard);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <section className="py-12 md:py-16 fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* ওয়ার্ড লিস্ট */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 sticky top-4">
              <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-4 md:mb-6">
                ওয়ার্ড সমূহ
              </h2>
              <div className="space-y-2 md:space-y-3 max-h-96 overflow-y-auto">
                {wardsData.map((ward) => (
                  <button
                    key={ward.id}
                    onClick={() => setSelectedWard(ward.id)}
                    className={`w-full text-left p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-200 ${
                      selectedWard === ward.id
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-sm md:text-base">{ward.name}</div>
                        <div className="text-xs md:text-sm opacity-80 mt-1">{ward.area}</div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        selectedWard === ward.id ? 'bg-white text-green-600' : 'bg-green-600 text-white'
                      }`}>
                        {ward.population.toLocaleString()}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ম্যাপ ও বিস্তারিত */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
              {/* ওয়ার্ড ভিত্তিক গুগল ম্যাপ */}
              <div className="w-full h-48 md:h-64 bg-gray-800 relative">
                {selectedWardData && apiKey ? (
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${selectedWardData.coordinates.lat},${selectedWardData.coordinates.lng}&zoom=15&center=${selectedWardData.coordinates.lat},${selectedWardData.coordinates.lng}`}
                    title={`${selectedWardData.name} - বাঘারপাড়া পৌরসভা`}
                    className="transition-opacity duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">🗺️</div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {selectedWardData?.name} - ম্যাপ
                      </h3>
                      <p className="text-sm md:text-base opacity-90">
                        {selectedWardData?.area}
                      </p>
                      {!apiKey && (
                        <p className="text-xs mt-2 text-red-200">
                          ম্যাপ লোড করতে API key প্রয়োজন
                        </p>
                      )}
                    </div>
                  </div>
                )}
                
                {/* ওয়ার্ড তথ্য ওভারলে */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-sm md:text-base font-bold text-green-800">
                    {selectedWardData?.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    স্থানাঙ্ক: {selectedWardData?.coordinates.lat.toFixed(6)}, {selectedWardData?.coordinates.lng.toFixed(6)}
                  </div>
                </div>

                {/* গুগল ম্যাপে দেখুন বাটন */}
                {selectedWardData && (
                  <div className="absolute bottom-4 right-4">
                    <a
                      href={`https://www.google.com/maps?q=${selectedWardData.coordinates.lat},${selectedWardData.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white text-green-700 px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm font-semibold hover:bg-green-50"
                    >
                      গুগল ম্যাপে দেখুন
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>

              {/* ওয়ার্ড ডিটেইলস */}
              {selectedWardData && (
                <div className="p-4 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                    <div className="space-y-3">
                      <h3 className="text-lg md:text-xl font-bold text-green-800 mb-3">
                        মৌলিক তথ্য
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-xs text-green-600 font-semibold">জনসংখ্যা</div>
                          <div className="text-sm font-bold text-green-800">
                            {selectedWardData.population.toLocaleString()}
                          </div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-xs text-blue-600 font-semibold">পরিবার</div>
                          <div className="text-sm font-bold text-blue-800">
                            {selectedWardData.households.toLocaleString()}
                          </div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3">
                          <div className="text-xs text-purple-600 font-semibold">আয়তন</div>
                          <div className="text-sm font-bold text-purple-800">
                            {selectedWardData.areaSize}
                          </div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-3">
                          <div className="text-xs text-orange-600 font-semibold">ঘনত্ব</div>
                          <div className="text-sm font-bold text-orange-800">
                            {(selectedWardData.population / parseFloat(selectedWardData.areaSize)).toFixed(0)}/বর্গকিমি
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg md:text-xl font-bold text-green-800 mb-3">
                        কাউন্সিলর তথ্য
                      </h3>
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4">
                        <div className="font-semibold text-green-800 text-sm md:text-base">
                          {selectedWardData.councilor}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600 mt-1">
                          {selectedWardData.name} এর কাউন্সিলর
                        </div>
                        <div className="mt-2">
                          <div className="text-xs font-semibold text-gray-700">যোগাযোগ:</div>
                          <div className="text-sm text-green-700 font-medium">
                            {selectedWardData.contact}
                          </div>
                        </div>
                        <button className="mt-3 bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors text-xs w-full">
                          যোগাযোগ করুন
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* ল্যান্ডমার্কস ও সুবিধা */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h4 className="text-md md:text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <span className="bg-green-100 text-green-800 rounded-lg p-1 mr-2">📍</span>
                        গুরুত্বপূর্ণ স্থান
                      </h4>
                      <ul className="space-y-2">
                        {selectedWardData.landmarks.map((landmark, index) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-gray-700 text-sm">{landmark}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-md md:text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <span className="bg-purple-100 text-purple-800 rounded-lg p-1 mr-2">🏛️</span>
                        সুবিধা সমূহ
                      </h4>
                      <ul className="space-y-2">
                        {selectedWardData.facilities.map((facility, index) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-gray-700 text-sm">{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
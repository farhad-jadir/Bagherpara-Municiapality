// app/about/location/page.tsx
"use client";

import { useEffect, useState } from 'react';

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

export default function Location() {
  const [selectedWard, setSelectedWard] = useState<number>(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const wardsData: WardInfo[] = [
    {
      id: 1,
      name: "১নং ওয়ার্ড",
      area: "বাঘারপাড়া সদর (উত্তর অংশ)",
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
      coordinates: { lat: 23.2015, lng: 89.0087 }
    },
    {
      id: 2,
      name: "২নং ওয়ার্ড",
      area: "বাংলাবাড়ী এলাকা",
      population: 16700,
      households: 3850,
      councilor: "মোঃ জাহাঙ্গীর আলম",
      contact: "০১৮২XXXXXXX",
      landmarks: [
        "বাংলাবাড়ী বাজার",
        "বাংলাবাড়ী মসজিদ",
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
      coordinates: { lat: 23.1952, lng: 89.0153 }
    },
    {
      id: 3,
      name: "৩নং ওয়ার্ড",
      area: "জামজামি ও পার্শ্ববর্তী",
      population: 14200,
      households: 3250,
      councilor: "মোঃ রবিউল ইসলাম",
      contact: "০১৯২XXXXXXX",
      landmarks: [
        "জামজামি বাজার",
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
      coordinates: { lat: 23.1887, lng: 89.0221 }
    },
    {
      id: 4,
      name: "৪নং ওয়ার্ড",
      area: "খোজপুর ও আশেপাশে",
      population: 15800,
      households: 3650,
      councilor: "মোঃ সোহেল রানা",
      contact: "০১৬২XXXXXXX",
      landmarks: [
        "খোজপুর হাট",
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
      coordinates: { lat: 23.1823, lng: 89.0298 }
    },
    {
      id: 5,
      name: "৫নং ওয়ার্ড",
      area: "দড়িয়াপুর এলাকা",
      population: 13900,
      households: 3150,
      councilor: "মোঃ ইকবাল হোসেন",
      contact: "০১৫২XXXXXXX",
      landmarks: [
        "দড়িয়াপুর বাজার",
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
      coordinates: { lat: 23.1756, lng: 89.0364 }
    },
    {
      id: 6,
      name: "৬নং ওয়ার্ড",
      area: "ফুলহরি ও পার্শ্ববর্তী",
      population: 14600,
      households: 3350,
      councilor: "মোঃ আলমগীর হোসেন",
      contact: "০১৩২XXXXXXX",
      landmarks: [
        "ফুলহরি বাজার",
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
      coordinates: { lat: 23.1692, lng: 89.0437 }
    },
    {
      id: 7,
      name: "৭নং ওয়ার্ড",
      area: "বাহাদুরপুর এলাকা",
      population: 16200,
      households: 3750,
      councilor: "মোঃ সাজ্জাদ হোসেন",
      contact: "০১৪২XXXXXXX",
      landmarks: [
        "বাহাদুরপুর মার্কেট",
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
      coordinates: { lat: 23.1628, lng: 89.0512 }
    },
    {
      id: 8,
      name: "৮নং ওয়ার্ড",
      area: "নরিন্দ্রপুর ও আশেপাশে",
      population: 15300,
      households: 3550,
      councilor: "মোঃ নাজমুল হক",
      contact: "০১২২XXXXXXX",
      landmarks: [
        "নরিন্দ্রপুর হাট",
        "স্বাস্থ্য ক্লিনিক",
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
      coordinates: { lat: 23.1564, lng: 89.0589 }
    },
    {
      id: 9,
      name: "৯নং ওয়ার্ড",
      area: "জুগ্নি ও পার্শ্ববর্তী",
      population: 14800,
      households: 3450,
      councilor: "মোঃ আশরাফুল ইসলাম",
      contact: "০১১২XXXXXXX",
      landmarks: [
        "জুগ্নি বাজার",
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
      coordinates: { lat: 23.1501, lng: 89.0665 }
    }
  ];

  const selectedWardData = wardsData.find(ward => ward.id === selectedWard);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 fade-in">
            লোকেশন (ওয়ার্ড ভিত্তিক)
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto fade-in mb-6 md:mb-8">
            বাঘারপাড়া পৌরসভার ৯টি ওয়ার্ডের বিস্তারিত তথ্য
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 fade-in">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-2 text-sm md:text-base">
              <span className="font-semibold">মোট ওয়ার্ড:</span> ৯টি
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-2 text-sm md:text-base">
              <span className="font-semibold">মোট জনসংখ্যা:</span> ১,৪০,০০০+
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-2 text-sm md:text-base">
              <span className="font-semibold">পরিবার:</span> ৩২,০০০+
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-green-50"></path>
          </svg>
        </div>
      </section>

      {/* ওয়ার্ড সিলেকশন ও ম্যাপ */}
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
                {/* ম্যাপ প্লেসহোল্ডার */}
                <div className="bg-gradient-to-br from-green-400 to-blue-500 h-48 md:h-64 relative">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">🗺️</div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {selectedWardData?.name} - ম্যাপ
                      </h3>
                      <p className="text-sm md:text-base opacity-90">
                        {selectedWardData?.area}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-xs md:text-sm font-semibold text-green-800">
                      স্থানাঙ্ক: {selectedWardData?.coordinates.lat.toFixed(4)}, {selectedWardData?.coordinates.lng.toFixed(4)}
                    </div>
                  </div>
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

      {/* সমষ্টিগত পরিসংখ্যান */}
      <section className="py-12 md:py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-8 md:mb-12">
            সমষ্টিগত পরিসংখ্যান
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "মোট জনসংখ্যা",
                value: "১,৪০,১০০",
                description: "৯টি ওয়ার্ডে মোট",
                color: "green"
              },
              {
                title: "মোট পরিবার",
                value: "৩২,১৫০",
                description: "গড়ে ৪.৩ সদস্য/পরিবার",
                color: "blue"
              },
              {
                title: "মোট আয়তন",
                value: "৩৩.৫",
                description: "বর্গ কিলোমিটার",
                color: "purple"
              },
              {
                title: "গড় ঘনত্ব",
                value: "৪,১৮২",
                description: "প্রতি বর্গ কিমিতে",
                color: "orange"
              }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 text-center border border-green-200">
                <div className={`text-2xl md:text-3xl font-bold text-${stat.color}-600 mb-2`}>
                  {stat.value}
                </div>
                <div className="font-semibold text-green-800 text-sm md:text-base mb-1">
                  {stat.title}
                </div>
                <div className="text-xs text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ওয়ার্ড তুলনামূলক তথ্য */}
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
                  {wardsData.map((ward, index) => (
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
        </div>
      </section>

      {/* যোগাযোগ ও সহায়তা */}
      <section className="py-12 md:py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-8 md:mb-12">
            যোগাযোগ ও সহায়তা
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-bold text-green-800 mb-2">জরুরি যোগাযোগ</h3>
              <p className="text-gray-600 text-sm">
                পৌরসভা হটলাইন:<br />
                <strong>০৪২১-৫৬XXX</strong><br />
                ২৪/৭ সেবা উপলব্ধ
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">পৌরসভা কার্যালয়</h3>
              <p className="text-gray-600 text-sm">
                বাঘারপাড়া পৌরসভা<br />
                সকাল ৯টা - বিকাল ৫টা<br />
                শুক্রবার বন্ধ
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-bold text-purple-800 mb-2">অনলাইন সেবা</h3>
              <p className="text-gray-600 text-sm">
                www.bagharparamunicipality.gov.bd<br />
                info@bagharparamunicipality.gov.bd<br />
                অনলাইন ফর্ম উপলব্ধ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ফুটার */}
      <footer className="bg-green-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">বাঘারপাড়া পৌরসভা</h3>
          <p className="text-green-200 mb-2 text-sm md:text-base">ওয়ার্ড ভিত্তিক উন্নয়ন ও সেবা</p>
          <p className="text-green-300 text-xs md:text-sm">© {new Date().getFullYear()} সকল অধিকার সংরক্ষিত</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .fade-in {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
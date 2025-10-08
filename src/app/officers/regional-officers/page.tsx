// app/officers/regional-officers/page.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';

// আঞ্চলিক কর্মকর্তাদের ডেটা
const regionalOfficers = [
  {
    id: 1,
    name: "মোঃ শহীদুল ইসলাম",
    designation: "আঞ্চলিক পরিচালক",
    region: "ঢাকা বিভাগ",
    district: "ঢাকা",
    image: "/images/officers/regional-1.jpg",
    phone: "+880 1234-567890",
    email: "shahidul.dhaka@example.gov.bd",
    address: "রিজিওনাল অফিস, মতিঝিল, ঢাকা",
    joinDate: "২০২০-০৩-১৫",
    experience: "১২ বছর",
    status: "active"
  },
  {
    id: 2,
    name: "ফারহানা আক্তার",
    designation: "উপ পরিচালক",
    region: "চট্টগ্রাম বিভাগ",
    district: "চট্টগ্রাম",
    image: "/images/officers/regional-2.jpg",
    phone: "+880 1234-567891",
    email: "farhana.ctg@example.gov.bd",
    address: "আগ্রাবাদ বাণিজ্যিক এলাকা, চট্টগ্রাম",
    joinDate: "২০১৯-০৭-২২",
    experience: "৮ বছর",
    status: "active"
  },
  {
    id: 3,
    name: "রফিকুল হাসান",
    designation: "আঞ্চলিক ব্যবস্থাপক",
    region: "রাজশাহী বিভাগ",
    district: "রাজশাহী",
    image: "/images/officers/regional-3.jpg",
    phone: "+880 1234-567892",
    email: "rafiq.raj@example.gov.bd",
    address: "সাহেববাজার, রাজশাহী",
    joinDate: "২০১৮-১১-১০",
    experience: "১৫ বছর",
    status: "active"
  },
  {
    id: 4,
    name: "আনোয়ারা বেগম",
    designation: "উপ পরিচালক",
    region: "খুলনা বিভাগ",
    district: "খুলনা",
    image: "/images/officers/regional-4.jpg",
    phone: "+880 1234-567893",
    email: "anowara.khulna@example.gov.bd",
    address: "খান জাহান আলী রোড, খুলনা",
    joinDate: "২০২১-০২-২৮",
    experience: "৬ বছর",
    status: "active"
  },
  {
    id: 5,
    name: "জামাল উদ্দিন",
    designation: "আঞ্চলিক পরিচালক",
    region: "বরিশাল বিভাগ",
    district: "বরিশাল",
    image: "/images/officers/regional-5.jpg",
    phone: "+880 1234-567894",
    email: "jamal.barisal@example.gov.bd",
    address: "বাংলাবাজার, বরিশাল",
    joinDate: "২০১৭-০৯-০৫",
    experience: "১৮ বছর",
    status: "on-leave"
  },
  {
    id: 6,
    name: "নাসরিন সুলতানা",
    designation: "উপ পরিচালক",
    region: "সিলেট বিভাগ",
    district: "সিলেট",
    image: "/images/officers/regional-6.jpg",
    phone: "+880 1234-567895",
    email: "nasrin.sylhet@example.gov.bd",
    address: "জিন্দাবাজার, সিলেট",
    joinDate: "২০২০-১২-১২",
    experience: "৯ বছর",
    status: "active"
  },
  {
    id: 7,
    name: "ইকবাল হোসেন",
    designation: "আঞ্চলিক ব্যবস্থাপক",
    region: "রংপুর বিভাগ",
    district: "রংপুর",
    image: "/images/officers/regional-7.jpg",
    phone: "+880 1234-567896",
    email: "iqbal.rangpur@example.gov.bd",
    address: "কেরানীপাড়া, রংপুর",
    joinDate: "২০১৯-০৪-১৮",
    experience: "১১ বছর",
    status: "active"
  },
  {
    id: 8,
    name: "সাবrina ইয়াসমিন",
    designation: "উপ পরিচালক",
    region: "ময়মনসিংহ বিভাগ",
    district: "ময়মনসিংহ",
    image: "/images/officers/regional-8.jpg",
    phone: "+880 1234-567897",
    email: "sabrina.mym@example.gov.bd",
    address: "স্টেশন রোড, ময়মনসিংহ",
    joinDate: "২০২১-০৮-৩০",
    experience: "৫ বছর",
    status: "active"
  }
];

// বিভাগের ডেটা
const divisions = [
  "সকল বিভাগ", "ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "বরিশাল", "সিলেট", "রংপুর", "ময়মনসিংহ"
];

export default function RegionalOfficers() {
  const [selectedDivision, setSelectedDivision] = useState("সকল বিভাগ");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // ফিল্টার্ড অফিসার্স
  const filteredOfficers = regionalOfficers.filter(officer => {
    const matchesDivision = selectedDivision === "সকল বিভাগ" || officer.region.includes(selectedDivision);
    const matchesSearch = officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         officer.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         officer.district.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDivision && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-8">
      <div className="container mx-auto px-4">
        {/* হেডার সেকশন */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-bangla">
            আঞ্চলিক নির্বাহী কর্মকর্তাবৃন্দ
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-bangla leading-relaxed">
            দেশের বিভিন্ন বিভাগ ও জেলায় কর্মরত আমাদের দক্ষ আঞ্চলিক নির্বাহী কর্মকর্তাদের তালিকা।
            তারা স্থানীয় পর্যায়ে আমাদের সেবা ও কার্যক্রম পরিচালনা করছেন।
          </p>
        </div>

        {/* সার্চ ও ফিল্টার সেকশন */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* সার্চ বক্স */}
            <div className="flex-1 w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="নাম, পদবী বা জেলা অনুসারে খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 font-bangla text-lg bg-gray-50"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* বিভাগ ফিল্টার */}
            <div className="flex gap-4 items-center">
              <select
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
                className="px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 font-bangla text-lg bg-white"
              >
                {divisions.map(division => (
                  <option key={division} value={division} className="font-bangla">
                    {division}
                  </option>
                ))}
              </select>

              {/* ভিউ মোড বাটন */}
              <div className="flex bg-gray-100 rounded-2xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === "grid" ? "bg-white shadow-md text-green-600" : "text-gray-500"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === "list" ? "bg-white shadow-md text-green-600" : "text-gray-500"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* রেজাল্ট কাউন্ট */}
        <div className="mb-6">
          <p className="text-gray-600 font-bangla text-lg">
            মোট <span className="font-bold text-green-600">{filteredOfficers.length}</span> জন কর্মকর্তা পাওয়া গেছে
            {selectedDivision !== "সকল বিভাগ" && ` - ${selectedDivision} বিভাগ`}
          </p>
        </div>

        {/* কর্মকর্তাদের গ্রিড/লিস্ট ভিউ */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredOfficers.map((officer) => (
              <div
                key={officer.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* হেডার */}
                <div className="relative h-48 bg-gradient-to-br from-green-500 to-teal-600">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm mb-2 ${
                      officer.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}>
                      <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                      {officer.status === 'active' ? 'সক্রিয়' : 'ছুটিতে'}
                    </div>
                    <h3 className="text-xl font-bold font-bangla">{officer.name}</h3>
                    <p className="text-green-200">{officer.designation}</p>
                  </div>
                </div>

                {/* কন্টেন্ট */}
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold font-bangla">{officer.region}</div>
                        <div className="text-sm text-gray-500 font-bangla">{officer.district} জেলা</div>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-bangla">{officer.phone}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-bangla">অভিজ্ঞতা: {officer.experience}</span>
                    </div>
                  </div>

                  {/* একশন বাটন */}
                  <div className="flex gap-2 mt-6 pt-4 border-t border-gray-200">
                    <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-bangla text-sm">
                      প্রোফাইল
                    </button>
                    <button className="flex-1 border border-green-600 text-green-600 py-2 px-3 rounded-lg hover:bg-green-50 transition-colors duration-300 font-bangla text-sm">
                      যোগাযোগ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* লিস্ট ভিউ */
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            {filteredOfficers.map((officer, index) => (
              <div
                key={officer.id}
                className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 p-6 ${
                  index !== filteredOfficers.length - 1 ? 'border-b border-gray-200' : ''
                } hover:bg-gray-50 transition-colors duration-300`}
              >
                {/* স্ট্যাটাস ইন্ডিকেটর */}
                <div className={`w-3 h-12 rounded-full ${
                  officer.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>

                {/* কন্টেন্ট */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4 w-full">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 font-bangla">{officer.name}</h3>
                    <p className="text-green-600 font-bangla">{officer.designation}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700 font-bangla">{officer.region}</p>
                    <p className="text-gray-500 font-bangla">{officer.district} জেলা</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-gray-600 font-bangla">{officer.phone}</p>
                    <p className="text-gray-600 text-sm">{officer.email}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 font-bangla text-sm">
                      বিস্তারিত
                    </button>
                    <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors duration-300 font-bangla text-sm">
                      মেসেজ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* স্ট্যাটিস্টিক্স */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 font-bangla">
            আঞ্চলিক পরিসংখ্যান
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {divisions.slice(1).map((division, index) => {
              const officerCount = regionalOfficers.filter(o => o.region.includes(division)).length;
              const colors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-orange-50', 'bg-red-50', 'bg-teal-50', 'bg-indigo-50', 'bg-pink-50'];
              const textColors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-orange-600', 'text-red-600', 'text-teal-600', 'text-indigo-600', 'text-pink-600'];
              
              return (
                <div key={division} className={`text-center p-6 ${colors[index]} rounded-xl hover:shadow-md transition-all duration-300`}>
                  <div className={`text-3xl font-bold ${textColors[index]} mb-2`}>{officerCount}</div>
                  <div className="text-gray-600 font-bangla text-sm">{division} বিভাগ</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
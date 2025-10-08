// app/officers/office-based-officers/page.tsx
"use client";

import { useState } from 'react';

// দপ্তরভিত্তিক কর্মকর্তাদের ডেটা
const officeBasedOfficers = [
  {
    id: 1,
    name: "ড. মোঃ আলমগীর হোসেন",
    designation: "মহাপরিচালক",
    department: "প্রশাসনিক বিভাগ",
    office: "সচিবালয় কক্ষ - ৫০১",
    extension: "১০১",
    phone: "+880 1234-567800",
    email: "almgir.admin@example.gov.bd",
    floor: "৫ম তলা",
    building: "প্রধান ভবন",
    responsibilities: ["সামগ্রিক পরিচালনা", "নীতি নির্ধারণ", "বাজেট অনুমোদন"],
    joiningDate: "২০১৫-০৬-০১",
    status: "available"
  },
  {
    id: 2,
    name: "নাসরিন জাহান",
    designation: "উপ মহাপরিচালক",
    department: "অর্থ ও হিসাব বিভাগ",
    office: "আর্থিক কক্ষ - ৩০২",
    extension: "২০২",
    phone: "+880 1234-567801",
    email: "nasrin.finance@example.gov.bd",
    floor: "৩য় তলা",
    building: "প্রধান ভবন",
    responsibilities: ["বাজেট ব্যবস্থাপনা", "আর্থিক নিরীক্ষা", "বেতন বিতরণ"],
    joiningDate: "২০১৮-০৩-১৫",
    status: "available"
  },
  {
    id: 3,
    name: "ইঞ্জিনিয়ার রকিবুল হাসান",
    designation: "প্রধান প্রকৌশলী",
    department: "প্রকৌশল বিভাগ",
    office: "প্রকৌশল কক্ষ - ৪০১",
    extension: "৩০৩",
    phone: "+880 1234-567802",
    email: "rokib.engineering@example.gov.bd",
    floor: "৪র্থ তলা",
    building: "প্রকৌশল ভবন",
    responsibilities: ["প্রকল্প ব্যবস্থাপনা", "তদারকি", "প্রযুক্তিগত সুপারিশ"],
    joiningDate: "২০১৬-১১-২০",
    status: "in-meeting"
  },
  {
    id: 4,
    name: "ড. সেলিনা আক্তার",
    designation: "পরিচালক",
    department: "গবেষণা ও উন্নয়ন",
    office: "গবেষণা কক্ষ - ২০১",
    extension: "৪০৪",
    phone: "+880 1234-567803",
    email: "selina.research@example.gov.bd",
    floor: "২য় তলা",
    building: "গবেষণা ভবন",
    responsibilities: ["গবেষণা প্রকল্প", "নতুন প্রযুক্তি", "উন্নয়ন কার্যক্রম"],
    joiningDate: "২০১৯-০৮-১০",
    status: "available"
  },
  {
    id: 5,
    name: "মোঃ শহিদুল আলম",
    designation: "সহকারী পরিচালক",
    department: "মানবসম্পদ বিভাগ",
    office: "এইচআর কক্ষ - ১০৩",
    extension: "৫০৫",
    phone: "+880 1234-567804",
    email: "shahid.hr@example.gov.bd",
    floor: "১ম তলা",
    building: "প্রশাসনিক ভবন",
    responsibilities: ["নিয়োগ প্রক্রিয়া", "প্রশিক্ষণ", "কর্মী কল্যাণ"],
    joiningDate: "২০২০-০১-২৫",
    status: "on-leave"
  },
  {
    id: 6,
    name: "ফারহানা ইয়াসমিন",
    designation: "উপ পরিচালক",
    department: "আইটি বিভাগ",
    office: "আইটি ল্যাব - ১০৫",
    extension: "৬০৬",
    phone: "+880 1234-567805",
    email: "farhana.it@example.gov.bd",
    floor: "১ম তলা",
    building: "প্রযুক্তি ভবন",
    responsibilities: ["সফটওয়্যার ডেভেলপমেন্ট", "নেটওয়ার্ক ব্যবস্থাপনা", "ডাটা সুরক্ষা"],
    joiningDate: "২০২১-০৪-১২",
    status: "available"
  },
  {
    id: 7,
    name: "রফিকুল ইসলাম",
    designation: "সহকারী মহাপরিচালক",
    department: "পরিকল্পনা ও উন্নয়ন",
    office: "পরিকল্পনা কক্ষ - ৩০১",
    extension: "৭০৭",
    phone: "+880 1234-567806",
    email: "rafiq.planning@example.gov.bd",
    floor: "৩য় তলা",
    building: "পরিকল্পনা ভবন",
    responsibilities: ["কৌশলগত পরিকল্পনা", "প্রকল্প মূল্যায়ন", "উন্নয়ন মনিটরিং"],
    joiningDate: "২০১৭-০৯-০৮",
    status: "in-meeting"
  },
  {
    id: 8,
    name: "আনোয়ার হোসেন",
    designation: "পরিচালক",
    department: "প্রশিক্ষণ বিভাগ",
    office: "প্রশিক্ষণ কক্ষ - ২০৩",
    extension: "৮০৮",
    phone: "+880 1234-567807",
    email: "anwar.training@example.gov.bd",
    floor: "২য় তলা",
    building: "প্রশিক্ষণ ভবন",
    responsibilities: ["কর্মী প্রশিক্ষণ", "ক্যারিয়ার ডেভেলপমেন্ট", "দক্ষতা উন্নয়ন"],
    joiningDate: "২০১৮-১২-০৩",
    status: "available"
  }
];

// বিভাগের তালিকা
const departments = [
  "সকল বিভাগ", "প্রশাসনিক বিভাগ", "অর্থ ও হিসাব বিভাগ", "প্রকৌশল বিভাগ", 
  "গবেষণা ও উন্নয়ন", "মানবসম্পদ বিভাগ", "আইটি বিভাগ", "পরিকল্পনা ও উন্নয়ন", "প্রশিক্ষণ বিভাগ"
];

// ভবনের তালিকা
const buildings = [
  "সকল ভবন", "প্রধান ভবন", "প্রকৌশল ভবন", "গবেষণা ভবন", "প্রশাসনিক ভবন", "প্রযুক্তি ভবন", "পরিকল্পনা ভবন", "প্রশিক্ষণ ভবন"
];

// স্ট্যাটাসের তালিকা
const statuses = [
  "সকল অবস্থা", "available", "in-meeting", "on-leave"
];

export default function OfficeBasedOfficers() {
  const [selectedDepartment, setSelectedDepartment] = useState("সকল বিভাগ");
  const [selectedBuilding, setSelectedBuilding] = useState("সকল ভবন");
  const [selectedStatus, setSelectedStatus] = useState("সকল অবস্থা");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // ফিল্টার্ড অফিসার্স
  const filteredOfficers = officeBasedOfficers.filter(officer => {
    const matchesDepartment = selectedDepartment === "সকল বিভাগ" || officer.department === selectedDepartment;
    const matchesBuilding = selectedBuilding === "সকল ভবন" || officer.building === selectedBuilding;
    const matchesStatus = selectedStatus === "সকল অবস্থা" || officer.status === selectedStatus;
    const matchesSearch = officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         officer.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         officer.department.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesDepartment && matchesBuilding && matchesStatus && matchesSearch;
  });

  // স্ট্যাটাসের বাংলা নাম
  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'উপলব্ধ';
      case 'in-meeting': return 'মিটিং এ';
      case 'on-leave': return 'ছুটিতে';
      default: return status;
    }
  };

  // স্ট্যাটাস কালার
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'in-meeting': return 'bg-yellow-500';
      case 'on-leave': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        {/* হেডার সেকশন */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-bangla">
            দপ্তরভিত্তিক কর্মকর্তাবৃন্দ
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-bangla leading-relaxed">
            আমাদের প্রধান কার্যালয়ে কর্মরত দক্ষ ও অভিজ্ঞ দপ্তরভিত্তিক কর্মকর্তাদের তালিকা। 
            সরাসরি যোগাযোগের জন্য তাদের অফিস কক্ষ ও এক্সটেনশন নম্বর।
          </p>
        </div>

        {/* ফিল্টার ও সার্চ সেকশন */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
            {/* সার্চ বক্স */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2 font-bangla">
                খুঁজুন
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="নাম, পদবী বা বিভাগ অনুসারে..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 font-bangla bg-gray-50"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* বিভাগ ফিল্টার */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-bangla">
                বিভাগ
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 font-bangla bg-white"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept} className="font-bangla">
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* ভবন ফিল্টার */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-bangla">
                ভবন
              </label>
              <select
                value={selectedBuilding}
                onChange={(e) => setSelectedBuilding(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 font-bangla bg-white"
              >
                {buildings.map(building => (
                  <option key={building} value={building} className="font-bangla">
                    {building}
                  </option>
                ))}
              </select>
            </div>

            {/* ভিউ মোড */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex-1 px-4 py-3 rounded-xl transition-all duration-300 font-bangla ${
                  viewMode === "grid" 
                    ? "bg-purple-600 text-white shadow-md" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                গ্রিড
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`flex-1 px-4 py-3 rounded-xl transition-all duration-300 font-bangla ${
                  viewMode === "table" 
                    ? "bg-purple-600 text-white shadow-md" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                টেবিল
              </button>
            </div>
          </div>

          {/* স্ট্যাটাস ফিল্টার */}
          <div className="mt-4 flex flex-wrap gap-2">
            {statuses.map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-bangla text-sm ${
                  selectedStatus === status
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {status === "সকল অবস্থা" ? "সকল অবস্থা" : getStatusText(status)}
              </button>
            ))}
          </div>
        </div>

        {/* রেজাল্ট কাউন্ট */}
        <div className="mb-6">
          <p className="text-gray-600 font-bangla text-lg">
            মোট <span className="font-bold text-purple-600">{filteredOfficers.length}</span> জন কর্মকর্তা পাওয়া গেছে
          </p>
        </div>

        {/* কর্মকর্তাদের ভিউ */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {filteredOfficers.map((officer) => (
              <div
                key={officer.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* হেডার */}
                <div className="relative h-40 bg-gradient-to-br from-purple-500 to-indigo-600 p-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="relative z-10 text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`px-3 py-1 rounded-full text-sm ${getStatusColor(officer.status)}`}>
                        {getStatusText(officer.status)}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{officer.extension}</div>
                        <div className="text-purple-200 text-sm">এক্সটেনশন</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-bangla mb-1">{officer.name}</h3>
                    <p className="text-purple-200">{officer.designation}</p>
                  </div>
                </div>

                {/* কন্টেন্ট */}
                <div className="p-6">
                  <div className="space-y-4">
                    {/* বিভাগ ও ভবন */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800 font-bangla">{officer.department}</p>
                        <p className="text-sm text-gray-500 font-bangla">{officer.building}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-800 font-bangla">কক্ষ {officer.office}</p>
                        <p className="text-sm text-gray-500 font-bangla">{officer.floor}</p>
                      </div>
                    </div>

                    {/* যোগাযোগ */}
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-3 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="font-bangla">{officer.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm truncate">{officer.email}</span>
                      </div>
                    </div>

                    {/* দায়িত্ব */}
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2 font-bangla">প্রধান দায়িত্ব:</p>
                      <div className="flex flex-wrap gap-1">
                        {officer.responsibilities.slice(0, 2).map((resp, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-bangla"
                          >
                            {resp}
                          </span>
                        ))}
                        {officer.responsibilities.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bangla">
                            +{officer.responsibilities.length - 2} আরও
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* একশন বাটন */}
                  <div className="flex gap-2 mt-6 pt-4 border-t border-gray-200">
                    <button className="flex-1 bg-purple-600 text-white py-2 px-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-bangla text-sm">
                      অ্যাপয়েন্টমেন্ট
                    </button>
                    <button className="flex-1 border border-purple-600 text-purple-600 py-2 px-3 rounded-lg hover:bg-purple-50 transition-colors duration-300 font-bangla text-sm">
                      মেসেজ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* টেবিল ভিউ */
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 font-bangla">কর্মকর্তা</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 font-bangla">দপ্তর তথ্য</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 font-bangla">যোগাযোগ</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 font-bangla">অবস্থা</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 font-bangla">কার্যক্রম</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOfficers.map((officer) => (
                    <tr key={officer.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-gray-800 font-bangla">{officer.name}</p>
                          <p className="text-purple-600 font-bangla">{officer.designation}</p>
                          <p className="text-sm text-gray-500 font-bangla">{officer.department}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-bangla"><span className="font-semibold">ভবন:</span> {officer.building}</p>
                          <p className="font-bangla"><span className="font-semibold">কক্ষ:</span> {officer.office}</p>
                          <p className="font-bangla"><span className="font-semibold">তলা:</span> {officer.floor}</p>
                          <p className="font-bangla"><span className="font-semibold">এক্সটেনশন:</span> {officer.extension}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <p className="text-sm">{officer.phone}</p>
                          <p className="text-sm text-gray-600">{officer.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-2 ${getStatusColor(officer.status)}`}></div>
                          <span className="font-bangla">{getStatusText(officer.status)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-bangla text-sm">
                            যোগাযোগ
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* বিল্ডিং ম্যাপ ও স্ট্যাটিস্টিক্স */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* বিল্ডিং-wise স্ট্যাটস */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 font-bangla">ভবন অনুযায়ী কর্মকর্তা</h3>
            <div className="space-y-4">
              {buildings.slice(1).map(building => {
                const officerCount = officeBasedOfficers.filter(o => o.building === building).length;
                return (
                  <div key={building} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-bangla text-gray-700">{building}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-purple-600">{officerCount} জন</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${(officerCount / officeBasedOfficers.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* দ্রুত যোগাযোগ */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4 font-bangla">দ্রুত যোগাযোগ</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                <span className="font-bangla">সুইচবোর্ড</span>
                <span className="font-mono font-bold">+880 1234-567800</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                <span className="font-bangla">জরুরি যোগাযোগ</span>
                <span className="font-mono font-bold">+880 1234-567899</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                <span className="font-bangla">সাধারণ তথ্য</span>
                <span className="font-mono font-bold">info@example.gov.bd</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
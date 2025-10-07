// app/about/organizational-structure/page.tsx
"use client";

import { useEffect, useState } from 'react';

// টাইপ ডিফাইনিশন যোগ করুন
interface Department {
  title: string;
  name?: string;
  head?: string;
  responsibilities: string[];
  contact: string;
  email?: string;
  projects?: string[];
  revenueSources?: string[];
  facilities?: string[];
  institutions?: string[];
}

type DepartmentKey = 'mayor' | 'secretary' | 'engineering' | 'finance' | 'health' | 'education';

export default function OrganizationalStructure() {
  const [activeDepartment, setActiveDepartment] = useState<DepartmentKey>('mayor');

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

  const organizationalData: Record<DepartmentKey, Department> = {
    mayor: {
      title: "মেয়র",
      name: "মোঃ আব্দুল হালিম",
      responsibilities: [
        "পৌরসভার প্রধান নির্বাহী",
        "বাজেট অনুমোদন ও বাস্তবায়ন",
        "সকল বিভাগের সমন্বয়",
        "নাগরিক সেবা নিশ্চিতকরণ",
        "বিভিন্ন কমিটির সভাপতিত্ব"
      ],
      contact: "০১৭১XXXXXXXX",
      email: "mayor.bagharpara@gov.bd"
    },
    secretary: {
      title: "পৌর সচিব",
      name: "মোঃ রফিকুল ইসলাম",
      responsibilities: [
        "দৈনন্দিন প্রশাসনিক কার্যক্রম",
        "লেখাপড়া ও রেকর্ড সংরক্ষণ",
        "সভা ও সেশন ব্যবস্থাপনা",
        "কর্মকর্তা-কর্মচারী ব্যবস্থাপনা",
        "প্রশাসনিক রিপোর্ট প্রস্তুত"
      ],
      contact: "০১৮১XXXXXXXX",
      email: "secretary.bagharpara@gov.bd"
    },
    engineering: {
      title: "ইঞ্জিনিয়ারিং বিভাগ",
      head: "এনজিআর এম. আলমগীর",
      responsibilities: [
        "সড়ক ও সেতু নির্মাণ",
        "পানি নিষ্কাশন ব্যবস্থা",
        "ভবন নির্মাণ ও রক্ষণাবেক্ষণ",
        "ইউটিলিটি সেবা ব্যবস্থাপনা",
        "নগর পরিকল্পনা বাস্তবায়ন"
      ],
      projects: ["সড়ক উন্নয়ন", "পানি নিষ্কাশন", "ভবন নির্মাণ"],
      contact: "০১৯১XXXXXXXX"
    },
    finance: {
      title: "অর্থ ও হিসাব বিভাগ",
      head: "মোঃ সাজেদুর রহমান",
      responsibilities: [
        "বাজেট প্রস্তুতকরণ",
        "রাজস্ব আদায় ব্যবস্থাপনা",
        "হিসাব নিরীক্ষণ",
        "বেতন-ভাতা বিতরণ",
        "আর্থিক প্রতিবেদন প্রস্তুত"
      ],
      revenueSources: ["হোল্ডিং ট্যাক্স", "ট্রেড লাইসেন্স", "সেবা ফি"],
      contact: "০১৬১XXXXXXXX"
    },
    health: {
      title: "স্বাস্থ্য বিভাগ",
      head: "ডাঃ ফারহানা ইসলাম",
      responsibilities: [
        "স্বাস্থ্য সেবা প্রদান",
        "ক্লিনিক ও হাসপাতাল ব্যবস্থাপনা",
        "স্বাস্থ্য সচেতনতা কার্যক্রম",
        "পরিবেশ স্বাস্থ্য নিয়ন্ত্রণ",
        "মহামারী ব্যবস্থাপনা"
      ],
      facilities: ["স্বাস্থ্য কেন্দ্র", "ইমারজেন্সি সেবা", "টিকাদান"],
      contact: "০১৫১XXXXXXXX"
    },
    education: {
      title: "শিক্ষা ও সংস্কৃতি বিভাগ",
      head: "মোঃ কামরুজ্জামান",
      responsibilities: [
        "প্রাথমিক শিক্ষা ব্যবস্থাপনা",
        "স্কুল ও মাদ্রাসা তত্ত্বাবধান",
        "সাংস্কৃতিক কার্যক্রম",
        "লাইব্রেরি ব্যবস্থাপনা",
        "ক্রীড়া কার্যক্রম"
      ],
      institutions: ["প্রাথমিক বিদ্যালয়", "কিন্ডারগার্টেন", "লাইব্রেরি"],
      contact: "০১৩১XXXXXXXX"
    }
  };

  const councilors = [
    { name: "মোঃ শহীদুল ইসলাম", ward: "১নং ওয়ার্ড", contact: "০১৭২XXXXXXX" },
    { name: "মোঃ জাহাঙ্গীর আলম", ward: "২নং ওয়ার্ড", contact: "০১৮২XXXXXXX" },
    { name: "মোঃ রবিউল ইসলাম", ward: "৩নং ওয়ার্ড", contact: "০১৯২XXXXXXX" },
    { name: "মোঃ সোহেল রানা", ward: "৪নং ওয়ার্ড", contact: "০১৬২XXXXXXX" },
    { name: "মোঃ ইকবাল হোসেন", ward: "৫নং ওয়ার্ড", contact: "০১৫২XXXXXXX" },
    { name: "মোঃ আলমগীর হোসেন", ward: "৬নং ওয়ার্ড", contact: "০১৩২XXXXXXX" },
    { name: "মোঃ সাজ্জাদ হোসেন", ward: "৭নং ওয়ার্ড", contact: "০১৪২XXXXXXX" },
    { name: "মোঃ নাজমুল হক", ward: "৮নং ওয়ার্ড", contact: "০১২২XXXXXXX" },
    { name: "মোঃ আশরাফুল ইসলাম", ward: "৯নং ওয়ার্ড", contact: "০১১২XXXXXXX" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">বাঘারপাড়া পৌরসভার সাংগাঠনিক কাঠামো</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in">
            দক্ষ ও স্বচ্ছ প্রশাসনিক ব্যবস্থাপনা
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 fade-in">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">ওয়ার্ড:</span> ৯টি
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">কাউন্সিলর:</span> ৯ জন
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">বিভাগ:</span> ৫টি
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-purple-50"></path>
          </svg>
        </div>
      </section>

      {/* সাংগঠনিক কাঠামো চার্ট */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">সাংগঠনিক কাঠামো</h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex flex-col items-center">
              {/* মেয়র */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-6 text-center mb-8 w-full max-w-md shadow-lg">
                <div className="text-2xl font-bold mb-2">মেয়র</div>
                <div className="text-lg mb-2">মোঃ আব্দুল হালিম</div>
                <div className="text-sm opacity-90">পৌরসভার প্রধান নির্বাহী</div>
              </div>

              {/* পৌর সচিব */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl p-4 text-center w-64 shadow-md">
                  <div className="font-bold">পৌর সচিব</div>
                  <div className="text-sm">মোঃ রফিকুল ইসলাম</div>
                </div>
              </div>

              {/* বিভাগ সমূহ */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "ইঞ্জিনিয়ারিং বিভাগ", color: "from-green-500 to-blue-500", key: "engineering" as DepartmentKey },
                  { title: "অর্থ ও হিসাব বিভাগ", color: "from-yellow-500 to-orange-500", key: "finance" as DepartmentKey },
                  { title: "স্বাস্থ্য বিভাগ", color: "from-red-500 to-pink-500", key: "health" as DepartmentKey },
                  { title: "শিক্ষা ও সংস্কৃতি", color: "from-indigo-500 to-purple-500", key: "education" as DepartmentKey },
                  { title: "পরিকল্পনা বিভাগ", color: "from-teal-500 to-cyan-500", key: "engineering" as DepartmentKey },
                  { title: "কর্মকর্তা-কর্মচারী", color: "from-gray-500 to-blue-500", key: "secretary" as DepartmentKey }
                ].map((dept, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-r ${dept.color} text-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
                    onClick={() => setActiveDepartment(dept.key)}
                  >
                    <div className="font-bold text-sm">{dept.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* বিভাগীয় বিস্তারিত */}
      <section className="py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">বিভাগীয় বিস্তারিত</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">বিভাগ সমূহ</h3>
                    <div className="space-y-3">
                      {Object.entries(organizationalData).map(([key, dept]) => (
                        <button
                          key={key}
                          onClick={() => setActiveDepartment(key as DepartmentKey)}
                          className={`w-full text-left p-4 rounded-xl transition-all ${
                            activeDepartment === key 
                              ? 'bg-purple-600 text-white shadow-md' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <div className="font-semibold">{dept.title}</div>
                          <div className="text-sm opacity-80">
                            {dept.name || dept.head}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    {organizationalData[activeDepartment] && (
                      <>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-purple-800">
                              {organizationalData[activeDepartment].title}
                            </h3>
                            <p className="text-lg text-gray-600 mt-1">
                              {organizationalData[activeDepartment].name || organizationalData[activeDepartment].head}
                            </p>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg">
                              <div className="font-semibold">যোগাযোগ</div>
                              <div>{organizationalData[activeDepartment].contact}</div>
                              {organizationalData[activeDepartment].email && (
                                <div className="text-sm">{organizationalData[activeDepartment].email}</div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-800 mb-4">দায়িত্ব ও কার্যাবলী</h4>
                          <ul className="space-y-3">
                            {organizationalData[activeDepartment].responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start">
                                <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {(organizationalData[activeDepartment].projects || organizationalData[activeDepartment].revenueSources || organizationalData[activeDepartment].facilities || organizationalData[activeDepartment].institutions) && (
                          <div>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">
                              {organizationalData[activeDepartment].projects && 'চলমান প্রকল্প'}
                              {organizationalData[activeDepartment].revenueSources && 'রাজস্ব উৎস'}
                              {organizationalData[activeDepartment].facilities && 'সুবিধা সমূহ'}
                              {organizationalData[activeDepartment].institutions && 'অনুষদ সমূহ'}
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {(organizationalData[activeDepartment].projects || organizationalData[activeDepartment].revenueSources || organizationalData[activeDepartment].facilities || organizationalData[activeDepartment].institutions)?.map((item, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* কাউন্সিলরদের তালিকা */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">কাউন্সিলরবৃন্দ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {councilors.map((councilor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{councilor.name}</h3>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                    {councilor.ward}
                  </div>
                  <div className="text-gray-600 mb-4">
                    <div className="font-semibold">যোগাযোগ:</div>
                    <div>{councilor.contact}</div>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                    যোগাযোগ করুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* কমিটি ও সাব-কমিটি */}
      <section className="py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">কমিটি ও সাব-কমিটি</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "অর্থ কমিটি",
                chairperson: "মোঃ শহীদুল ইসলাম",
                members: "৫ জন",
                responsibility: "বাজেট ও অর্থ ব্যবস্থাপনা"
              },
              {
                name: "পরিকল্পনা কমিটি",
                chairperson: "মোঃ জাহাঙ্গীর আলম",
                members: "৪ জন",
                responsibility: "নগর উন্নয়ন পরিকল্পনা"
              },
              {
                name: "স্বাস্থ্য কমিটি",
                chairperson: "মোঃ রবিউল ইসলাম",
                members: "৪ জন",
                responsibility: "স্বাস্থ্য সেবা ব্যবস্থাপনা"
              },
              {
                name: "শিক্ষা কমিটি",
                chairperson: "মোঃ সোহেল রানা",
                members: "৩ জন",
                responsibility: "শিক্ষা ব্যবস্থাপনা"
              },
              {
                name: "ক্রীড়া ও সংস্কৃতি",
                chairperson: "মোঃ ইকবাল হোসেন",
                members: "৩ জন",
                responsibility: "সাংস্কৃতিক কার্যক্রম"
              },
              {
                name: "পরিবেশ কমিটি",
                chairperson: "মোঃ আলমগীর হোসেন",
                members: "৪ জন",
                responsibility: "পরিবেশ সংরক্ষণ"
              },
              {
                name: "কর্মকর্তা ব্যবস্থাপনা",
                chairperson: "মোঃ সাজ্জাদ হোসেন",
                members: "৩ জন",
                responsibility: "কর্মকর্তা-কর্মচারী"
              },
              {
                name: "ক্রয় কমিটি",
                chairperson: "মোঃ নাজমুল হক",
                members: "৪ জন",
                responsibility: "ক্রয় ও সরবরাহ"
              }
            ].map((committee, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-purple-800 mb-3">{committee.name}</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-semibold">সভাপতি:</span>
                    <span>{committee.chairperson}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">সদস্য:</span>
                    <span>{committee.members}</span>
                  </div>
                  <div>
                    <span className="font-semibold">দায়িত্ব:</span>
                    <p className="mt-1 text-gray-600">{committee.responsibility}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* যোগাযোগ তথ্য */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">যোগাযোগ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">ঠিকানা</h3>
              <p className="text-gray-600">
                বাঘারপাড়া পৌরসভা<br />
                বাঘারপাড়া, যশোর<br />
                খুলনা বিভাগ
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">ফোন</h3>
              <p className="text-gray-600">
                মেয়র কার্যালয়:<br />
                ০৪২১-৫৬XXX<br />
                সচিব কার্যালয়:<br />
                ০৪২১-৫৬XXX
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">কার্যকাল</h3>
              <p className="text-gray-600">
                শনি-বৃহস্পতি<br />
                সকাল ৯টা - বিকাল ৫টা<br />
                শুক্রবার বন্ধ
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-2">ওয়েবসাইট</h3>
              <p className="text-gray-600">
                www.bpm.gov.bd<br />
                ইমেইল:<br />
                info@bpm.gov.bd
              </p>
            </div>
          </div>
        </div>
      </section>

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
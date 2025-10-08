// app/about/organizational-structure/components/DepartmentDetailsSection.tsx
import { useState } from 'react';

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

export default function DepartmentDetailsSection() {
  const [activeDepartment, setActiveDepartment] = useState<DepartmentKey>('mayor');

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

  return (
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
  );
}
// app/officers/department-heads/page.tsx
import Image from 'next/image';

// বিভাগীয় প্রধানদের ডেটা
const departmentHeads = [
  {
    id: 1,
    name: "ড. মোঃ আব্দুল্লাহ আল মামুন",
    designation: "প্রধান প্রকৌশলী",
    department: "সিভিল ইঞ্জিনিয়ারিং বিভাগ",
    image: "/images/department-heads/head-1.jpg",
    phone: "+880 1234-567890",
    email: "mamun.ce@example.gov.bd",
    joiningDate: "২০১৮-০১-১৫"
  },
  {
    id: 2,
    name: "ড. ফাতেমা বেগম",
    designation: "উপ প্রধান প্রকৌশলী",
    department: "ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং বিভাগ",
    image: "/images/department-heads/head-2.jpg",
    phone: "+880 1234-567891",
    email: "fatema.ee@example.gov.bd",
    joiningDate: "২০১৯-০৩-২০"
  },
  {
    id: 3,
    name: "ইঞ্জিনিয়ার রফিকুল ইসলাম",
    designation: "বিভাগীয় প্রধান",
    department: "মেকানিক্যাল ইঞ্জিনিয়ারিং বিভাগ",
    image: "/images/department-heads/head-3.jpg",
    phone: "+880 1234-567892",
    email: "rafiq.me@example.gov.bd",
    joiningDate: "২০১৭-১১-০৫"
  },
  {
    id: 4,
    name: "ড. সাবিনা ইয়াসমিন",
    designation: "প্রধান স্থপতি",
    department: "আর্কিটেকচার বিভাগ",
    image: "/images/department-heads/head-4.jpg",
    phone: "+880 1234-567893",
    email: "sabina.arch@example.gov.bd",
    joiningDate: "২০২০-০৬-১২"
  },
  {
    id: 5,
    name: "ইঞ্জিনিয়ার আনিসুর রহমান",
    designation: "বিভাগীয় প্রধান",
    department: "কম্পিউটার বিজ্ঞান বিভাগ",
    image: "/images/department-heads/head-5.jpg",
    phone: "+880 1234-567894",
    email: "anis.cs@example.gov.bd",
    joiningDate: "২০১৯-০৯-২৫"
  },
  {
    id: 6,
    name: "ড. নাসরিন আক্তার",
    designation: "উপ প্রধান",
    department: "পরিবেশ প্রকৌশল বিভাগ",
    image: "/images/department-heads/head-6.jpg",
    phone: "+880 1234-567895",
    email: "nasreen.env@example.gov.bd",
    joiningDate: "২০২১-০২-১৮"
  }
];

export default function DepartmentHeads() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        {/* হেডার সেকশন */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-bangla">
            বিভাগীয় প্রধান কর্মকর্তাবৃন্দ
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-bangla">
            আমাদের দক্ষ ও অভিজ্ঞ বিভাগীয় প্রধানদের পরিচিতি যারা তাদের বিভাগের নেতৃত্ব দিয়ে প্রতিষ্ঠানকে এগিয়ে নিচ্ছেন
          </p>
        </div>

        {/* সার্চ এবং ফিল্টার সেকশন */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="বিভাগ বা নাম অনুসারে খুঁজুন..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-bangla"
              />
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-bangla shadow-md">
                খুঁজুন
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-bangla">
                ফিল্টার
              </button>
            </div>
          </div>
        </div>

        {/* বিভাগীয় প্রধানদের গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentHeads.map((head) => (
            <div
              key={head.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* প্রোফাইল ইমেজ */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {head.name.split(' ')[1].charAt(0)}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-xl font-bold text-white font-bangla">{head.name}</h3>
                  <p className="text-blue-200 font-bangla">{head.designation}</p>
                </div>
              </div>

              {/* কন্টেন্ট */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 font-bangla">
                    বিভাগ: {head.department}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-bangla">{head.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{head.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-bangla">যোগদান: {head.joiningDate}</span>
                    </div>
                  </div>
                </div>

                {/* একশন বাটন */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-bangla text-sm">
                    প্রোফাইল দেখুন
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-bangla text-sm">
                    বার্তা পাঠান
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* স্ট্যাটিস্টিক্স সেকশন */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 font-bangla">
            বিভাগীয় পরিসংখ্যান
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">০৬</div>
              <div className="text-gray-600 font-bangla">সক্রিয় বিভাগ</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">১৫+</div>
              <div className="text-gray-600 font-bangla">বছরের অভিজ্ঞতা</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">৫০+</div>
              <div className="text-gray-600 font-bangla">কর্মরত কর্মকর্তা</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">১০০%</div>
              <div className="text-gray-600 font-bangla">সন্তুষ্টি হার</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
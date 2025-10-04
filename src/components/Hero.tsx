"use client";

import Link from "next/link";
import Image from "next/image";

const notices = [
  {
    id: 1,
    text: "📝 আগামী সোমবার পৌরসভায় ফ্রি মেডিকেল ক্যাম্প অনুষ্ঠিত হবে।",
    date: "১০ অক্টোবর, ২০২৫",
    href: "/notice/1",
  },
  {
    id: 2,
    text: "🏗️ সড়ক উন্নয়ন কাজের কারণে ৫নং ওয়ার্ডে যান চলাচল আংশিক বন্ধ থাকবে।",
    date: "৮ অক্টোবর, ২০২৫",
    href: "/notice/2",
  },
  {
    id: 3,
    text: "💡 বিদ্যুৎ সংযোগ মেরামতের কাজ চলায় ২ ঘন্টা বিদ্যুৎ বিভ্রাট থাকবে।",
    date: "৬ অক্টোবর, ২০২৫",
    href: "/notice/3",
  },
];

const admin = {
  name: "জনাব আলিমুজ্জামান",
  role: "প্রশাসক, বাঘারপাড়া পৌরসভা",
  img: "/images/ac.png",
  messageLink: "/admin-message",
};

const upazilaAdmin = {
  name: "জনাব সাইফুল ইসলাম",
  role: "উপজেলা নির্বাহী অফিসার, বাঘারপাড়া উপজেলা",
  img: "/images/UNO.png",
  messageLink: "/upazila-message",
};

export default function Hero() {
  return (
    <section className="relative bg-live-gradienttow text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* Notice Card */}
        <div className="bg-white/10 backdrop-blur-md p-4 md:p-5 rounded-xl shadow-lg flex flex-col border border-white/20">
          <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">📢 নোটিশ</h1>

          <ul className="space-y-2 md:space-y-3 flex-grow">
            {notices.map((notice) => (
              <li key={notice.id} className="border-b border-white/10 pb-2 last:border-none">
                <Link href={notice.href} className="text-xs md:text-sm hover:text-yellow-300 block">
                  {notice.text}
                </Link>
                <p className="text-xs text-gray-300 mt-1">তারিখ: {notice.date}</p>
              </li>
            ))}
          </ul>

          <Link
            href="/notice"
            className="inline-block mt-3 md:mt-4 bg-yellow-400 text-black font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-lg shadow-md hover:bg-yellow-300 transition text-xs md:text-sm text-center"
          >
            সব নোটিশ দেখুন →
          </Link>
        </div>

        {/* Upazila Admin Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center text-center p-4 md:p-5 border border-white/20">
          <div className="w-full h-40 md:h-56 lg:h-64 relative mb-3 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={upazilaAdmin.img}
              alt={upazilaAdmin.name}
              fill
              className="object-cover"
              priority={false}
              loading="lazy"
            />
          </div>

          <div className="mb-3 flex-1">
            <h2 className="text-sm md:text-base font-semibold">🏛️ উপজেলা প্রশাসকের বার্তা</h2>
            <h3 className="text-sm font-semibold mt-1">{upazilaAdmin.name}</h3>
            <p className="text-xs text-gray-300 mt-1">{upazilaAdmin.role}</p>
          </div>

          <Link
            href={upazilaAdmin.messageLink}
            className="block bg-green-400 text-black font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-lg shadow-md hover:bg-green-300 text-xs md:text-sm w-full"
          >
            বার্তা পড়ুন →
          </Link>
        </div>

        {/* Municipality Admin Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center text-center p-4 md:p-5 border border-white/20">
          <div className="w-full h-40 md:h-56 lg:h-64 relative mb-3 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={admin.img}
              alt={admin.name}
              fill
              className="object-cover"
              priority={false}
              loading="lazy"
            />
          </div>

          <div className="mb-3 flex-1">
            <h2 className="text-sm md:text-base font-semibold">🏢 পৌর প্রশাসকের বার্তা</h2>
            <h3 className="text-sm font-semibold mt-1">{admin.name}</h3>
            <p className="text-xs text-gray-300 mt-1">{admin.role}</p>
          </div>

          <Link
            href={admin.messageLink}
            className="block bg-yellow-400 text-black font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-lg shadow-md hover:bg-yellow-300 text-xs md:text-sm w-full"
          >
            প্রশাসকের বার্তা →
          </Link>
        </div>

      </div>
    </section>
  );
}

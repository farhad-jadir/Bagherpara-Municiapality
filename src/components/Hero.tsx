"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// ডাইনামিক ডাটা
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

const citizenInfo = [
  "✅ নাম, পিতা/মাতার নাম",
  "✅ জাতীয় পরিচয়পত্র / জন্ম নিবন্ধন",
  "✅ ওয়ার্ড নং ও পেশা",
  "✅ রক্তের গ্রুপ ও যোগাযোগ নম্বর",
];

const admin = {
  name: "জনাব আলিমুজ্জামান",
  role: "প্রশাসক, বাঘারপাড়া পৌরসভা",
  img: "/images/ac.png",
  messageLink: "/admin-message",
};

export default function Hero() {
  return (
    <section className="relative bg-live-gradienttow text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* --------- Notice Card --------- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg flex flex-col border border-white/20 hover:border-yellow-400 transition"
        >
          <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-4 flex items-center gap-2">
            📢 নোটিশ
          </h1>

          <ul className="space-y-3 flex-grow">
            {notices.map((notice) => (
              <li
                key={notice.id}
                className="border-b border-white/10 pb-2 last:border-none"
              >
                <Link
                  href={notice.href}
                  className="text-sm hover:text-yellow-300 transition block"
                >
                  {notice.text}
                </Link>
                <p className="text-xs text-gray-300 mt-1">তারিখ: {notice.date}</p>
              </li>
            ))}
          </ul>

          <Link
            href="/notice"
            className="inline-block mt-4 bg-yellow-400 text-black font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-yellow-300 hover:scale-105 transition text-sm text-center"
          >
            সব নোটিশ দেখুন →
          </Link>
        </motion.div>

        {/* --------- Citizen Info Card --------- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="group bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg flex flex-col border border-white/20 hover:border-green-400 transition"
        >
          <h2 className="text-xl font-semibold mb-3">📝 নাগরিক তথ্য</h2>
          <p className="text-sm mb-3 text-gray-200">
            পৌরসভার উন্নয়ন কাজে আপনার সহযোগিতা প্রয়োজন। নিচের তথ্যসমূহ প্রদান করুন:
          </p>

          <ul className="text-sm text-gray-200 space-y-2 mb-4 flex-grow">
            {citizenInfo.map((info, i) => (
              <li key={i} className="flex items-center gap-2">
                {info}
              </li>
            ))}
          </ul>

          <Link
            href="/nagoric"
            className="inline-block mt-auto bg-green-400 text-black font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-green-300 hover:scale-105 transition text-sm text-center"
          >
            আপনার নাগরিক তথ্য দিন →
          </Link>
        </motion.div>

        {/* --------- Admin Card --------- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="group bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center text-center p-5 border border-white/20 hover:border-yellow-400 transition"
        >
          <div className="w-full h-56 md:h-64 relative mb-3 rounded-lg overflow-hidden shadow-lg group-hover:scale-[1.02] transition">
            <Image
              src={admin.img}
              alt={admin.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-3">
            <h3 className="text-base font-semibold">{admin.name}</h3>
            <p className="text-xs text-gray-300">{admin.role}</p>
          </div>

          <Link
            href={admin.messageLink}
            className="block bg-yellow-400 text-black font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-yellow-300 hover:scale-105 transition text-sm w-full"
          >
            প্রশাসকের বার্তা →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

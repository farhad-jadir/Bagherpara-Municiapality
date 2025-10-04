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
    <section className="relative bbg-live-gradienttow text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
        
        {/* --------- Notice Card --------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="group bg-white/10 backdrop-blur-md p-4 md:p-5 rounded-xl shadow-lg flex flex-col border border-white/20 hover:border-yellow-400 transition-all duration-300"
        >
          <h1 className="text-xl md:text-2xl font-bold leading-snug mb-3 md:mb-4 flex items-center gap-2">
            📢 নোটিশ
          </h1>

          <ul className="space-y-2 md:space-y-3 flex-grow">
            {notices.map((notice) => (
              <li
                key={notice.id}
                className="border-b border-white/10 pb-2 last:border-none"
              >
                <Link
                  href={notice.href}
                  className="text-xs md:text-sm hover:text-yellow-300 transition-colors duration-200 block"
                  prefetch={false}
                >
                  {notice.text}
                </Link>
                <p className="text-xs text-gray-300 mt-1">তারিখ: {notice.date}</p>
              </li>
            ))}
          </ul>

          <Link
            href="/notice"
            className="inline-block mt-3 md:mt-4 bg-yellow-400 text-black font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-lg shadow-md hover:bg-yellow-300 hover:scale-105 transition-all duration-200 text-xs md:text-sm text-center"
            prefetch={false}
          >
            সব নোটিশ দেখুন →
          </Link>
        </motion.div>

        {/* --------- Upazila Admin Card --------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="group bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center text-center p-4 md:p-5 border border-white/20 hover:border-green-400 transition-all duration-300"
        >
          <div className="w-full h-40 md:h-56 lg:h-64 relative mb-3 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={upazilaAdmin.img}
              alt={upazilaAdmin.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority={false}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9faHL6nsqUWCWwmCg6kYtsV4m6QAIzF5FFSJtIcOWHd3MkHq6tWgAAAAA="
            />
          </div>

          <div className="mb-3 flex-1">
            <h2 className="text-sm md:text-base font-semibold">🏛️ উপজেলা প্রশাসকের বার্তা</h2>
            <h3 className="text-sm font-semibold mt-1">{upazilaAdmin.name}</h3>
            <p className="text-xs text-gray-300 mt-1">{upazilaAdmin.role}</p>
          </div>

          <Link
            href={upazilaAdmin.messageLink}
            className="block bg-green-400 text-black font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-lg shadow-md hover:bg-green-300 hover:scale-105 transition-all duration-200 text-xs md:text-sm w-full"
            prefetch={false}
          >
            বার্তা পড়ুন →
          </Link>
        </motion.div>

        {/* --------- Municipality Admin Card --------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="group bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center text-center p-4 md:p-5 border border-white/20 hover:border-yellow-400 transition-all duration-300"
        >
          <div className="w-full h-40 md:h-56 lg:h-64 relative mb-3 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={admin.img}
              alt={admin.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority={false}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9faHL6nsqUWCWwmCg6kYtsV4m6QAIzF5FFSJtIcOWHd3MkHq6tWgAAAAA="
            />
          </div>

          <div className="mb-3 flex-1">
            <h2 className="text-sm md:text-base font-semibold">🏢 পৌর প্রশাসকের বার্তা</h2>
            <h3 className="text-sm font-semibold mt-1">{admin.name}</h3>
            <p className="text-xs text-gray-300 mt-1">{admin.role}</p>
          </div>

          <Link
            href={admin.messageLink}
            className="block bg-yellow-400 text-black font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-lg shadow-md hover:bg-yellow-300 hover:scale-105 transition-all duration-200 text-xs md:text-sm w-full"
            prefetch={false}
          >
            প্রশাসকের বার্তা →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
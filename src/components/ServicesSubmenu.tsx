// components/ServicesSubmenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
}

export default function ServicesSubmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const submenuItems: SubmenuItem[] = [
    { title: "ট্রেড লাইসেন্স ইস্যু ও নবায়ন পদ্ধতি", href: "/services/trade-license" },
    { title: "নতুন হোল্ডিং নম্বর ও হোল্ডিং ট্যাক্স প্রদান পদ্ধতি", href: "/services/holding-tax" },
    { title: "জন্ম নিবন্ধন", href: "/services/birth-registration" },
    { title: "রাস্তার বৈদ্যুতিক বাতি", href: "/services/street-lights" },
    { title: "রাস্তা নর্দমা ফুটপাত", href: "/services/roads-drains" },
    { title: "বাজার", href: "/services/market" },
    { title: "বাঘারপাড়া স্বাস্থ কমপ্লেক্স", href: "/services/health-complex" },
    { title: "কবরস্থান/শ্মশানঘাট", href: "/services/cemetery" },
    { title: "শরীর চর্চা কেন্দ্র (ব্যায়ামাগার)", href: "/services/gymnasium" },
    { title: "সামাজিক অনুষ্ঠান কেন্দ্র (কমিউনিটি সেন্টার)", href: "/services/community-center" },
    { title: "স্কুল, কলেজ ও মাদ্রাসা", href: "/services/educational-institutions" },
    { title: "পাঠাগার", href: "/services/library" },
    { title: "সঙ্গীত এবং স্কুল", href: "/services/music-school" },
    { title: "বাস টার্মিনাল", href: "/services/bus-terminal" },
    { title: "গণশৌচাগার", href: "/services/public-toilet" },
    { title: "পার্ক ও উদ্যান", href: "/services/parks-gardens" },
    { title: "খেলার মাঠ", href: "/services/playground" },
  ];

  // 3 কলামে আইটেম ভাগ করছি
  const columnSize = Math.ceil(submenuItems.length / 3);
  const columns = [
    submenuItems.slice(0, columnSize),
    submenuItems.slice(columnSize, columnSize * 2),
    submenuItems.slice(columnSize * 2),
  ];

  return (
    <div className="relative">
      <button
  onClick={() => setIsOpen(!isOpen)}
  className="relative group px-5 py-2 font-normal text-white
             
             shadow-md hover:shadow-lg
             transition-all duration-500 ease-in-out 
             overflow-hidden cursor-pointer animate-pulse-color"
  aria-expanded={isOpen}
  aria-haspopup="true"
>
  {/* 🔹 Default Text */}
  <span className="flex items-center relative z-10">
    🛎️ সেবাসমূহ
  </span>

  {/* 🔹 Hover Gradient Background */}
  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"></span>

  {/* 🔹 Hover Text */}
  <span className="absolute inset-0 flex items-center justify-center font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    🛎️ সেবাসমূহ
  </span>

  {/* 🔹 Bottom Border Animation */}
  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-red-400 group-hover:w-full transition-all duration-500"></span>
      </button>

      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="grid grid-cols-3 gap-4 p-4">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-2">
                {column.map((item: SubmenuItem) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-800 transition-colors duration-200 rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
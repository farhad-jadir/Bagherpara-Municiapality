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
        className="px-3 py-2 transition-all duration-300 hover:border-b-2 hover:border-red-600 hover:text-red-600 focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        সেবা সমূহ
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
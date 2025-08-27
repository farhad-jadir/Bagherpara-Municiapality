// components/AboutSubmenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
}

export default function AboutSubmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const submenuItems: SubmenuItem[] = [
    { title: "ইতিহাস", href: "/about/history" },
    { title: "একনজরে বাঘারপাড়া", href: "/about/overview" },
    { title: "সেবা প্রদান প্রতিশ্রুতি", href: "/about/service-commitment" },
    { title: "সাংগাঠনিক কাঠামো", href: "/about/organizational-structure" },
    { title: "লোকেশন (ওয়ার্ড ভিত্তিক)", href: "/about/location" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 transition-all duration-300 hover:border-b-2 hover:border-red-600 hover:text-red-600 focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        আমাদের সম্পর্কে
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            {submenuItems.map((item: SubmenuItem) => (
              <Link
                key={item.title}
                href={item.href}
                className="block px-4 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
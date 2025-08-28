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
      className="relative group px-2 py-2 font-normal text-white
             
             shadow-md hover:shadow-lg
             transition-all duration-500 ease-in-out 
             overflow-hidden cursor-pointer animate-pulse-color"
  aria-expanded={isOpen}
  aria-haspopup="true"
>
  {/* 🔹 Default Text */}
  <span className="flex items-center relative z-10">
    📖 আমাদের সম্পর্কে
  </span>

  {/* 🔹 Hover Gradient Background */}
  <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"></span>

  {/* 🔹 Hover Text */}
  <span className="absolute inset-0 flex items-center justify-center font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    📖 আমাদের সম্পর্কে
  </span>

  {/* 🔹 Bottom Border Animation */}
  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-emerald-500 group-hover:w-full transition-all duration-500"></span>
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
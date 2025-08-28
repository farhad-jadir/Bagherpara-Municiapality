// components/FormsSubmenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
}

export default function FormsSubmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const submenuItems: SubmenuItem[] = [
    { title: "ফরমসমূহ", href: "/forms/all-forms" },
    { title: "ফরমস পোর্টাল", href: "/forms/portal" },
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
  {/* 🔹 Text with Icon */}
  <span className="flex items-center gap-2 relative z-10 cursor-pointer">
    📑 ফরম
  </span>

  {/* 🔹 Hover Background Glow */}
  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></span>

  {/* 🔹 Text Color Animation */}
  <span className="absolute inset-0 flex items-center justify-center font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    📑 ফরম
  </span>

  {/* 🔹 Animated Border Effect */}
  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-red-500 group-hover:w-full transition-all duration-500"></span>
      </button>

      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
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
// components/LawsSubmenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
}

export default function LawsSubmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const submenuItems: SubmenuItem[] = [
    { title: "বাংলাদেশ গেজেট", href: "/laws/bangladesh-gazette" },
    { title: "আইন ও বিধিমালা", href: "/laws/rules-regulations" },
    { title: "নীতিমালা", href: "/laws/policies" },
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
    ⚖️ আইন ও নীতিমালা
  </span>

  {/* 🔹 Hover Gradient Background */}
  <span className="absolute inset-0 bg-gradient-to-r from-purple-800 to-yellow-600 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"></span>

  {/* 🔹 Hover Text */}
  <span className="absolute inset-0 flex items-center justify-center font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    ⚖️ আইন ও নীতিমালা
  </span>

  {/* 🔹 Bottom Border Animation */}
  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-400 group-hover:w-full transition-all duration-500"></span>
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
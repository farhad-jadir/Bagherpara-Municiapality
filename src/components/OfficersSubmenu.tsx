// components/OfficersSubmenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
}

export default function OfficersSubmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const submenuItems: SubmenuItem[] = [
    { title: "মাননীয় প্রশাসকের দপ্তর", href: "/officers/administrator-office" },
    { title: "বিভাগীয় প্রধান কর্মকর্তাবৃন্দ", href: "/officers/department-heads" },
    { title: "আঞ্চলিক নির্বাহী কর্মকর্তাবৃন্দ", href: "/officers/regional-officers" },
    { title: "দপ্তরভিত্তিক কর্মকর্তাবৃন্দ", href: "/officers/office-based-officers" },
  ];

  return (
    <div className="relative">
      <button
  onClick={() => setIsOpen(!isOpen)}
  className="relative group px-5 py-2 font-bold text-blue-700 
             border-2 border-blue-600 rounded-xl 
             bg-gradient-to-r from-blue-50 to-white
             shadow-md hover:shadow-lg
             transition-all duration-500 ease-in-out 
             overflow-hidden"
  aria-expanded={isOpen}
  aria-haspopup="true"
>
  {/* 🔹 Default Text */}
  <span className="flex items-center gap-2 relative z-10">
    🧑‍💼 কর্মকর্তাবৃন্দ
  </span>

  {/* 🔹 Hover Gradient Background */}
  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

  {/* 🔹 Hover Text */}
  <span className="absolute inset-0 flex items-center justify-center font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    🧑‍💼 কর্মকর্তাবৃন্দ
  </span>

  {/* 🔹 Bottom Border Animation */}
  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-cyan-400 group-hover:w-full transition-all duration-500"></span>
</button>

      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
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
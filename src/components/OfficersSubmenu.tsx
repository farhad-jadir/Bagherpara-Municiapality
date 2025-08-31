// components/OfficersSubmenu.tsx
"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
  icon: string;
  description: string;
}

export default function OfficersSubmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const submenuItems: SubmenuItem[] = [
    { 
      title: "মাননীয় প্রশাসকের দপ্তর", 
      href: "/officers/administrator-office", 
      icon: "👑",
      description: "প্রশাসকের কার্যালয় ও দপ্তর" 
    },
    { 
      title: "বিভাগীয় প্রধান কর্মকর্তাবৃন্দ", 
      href: "/officers/department-heads", 
      icon: "👨‍💼",
      description: "বিভাগীয় প্রধানদের তালিকা" 
    },
    { 
      title: "আঞ্চলিক নির্বাহী কর্মকর্তাবৃন্দ", 
      href: "/officers/regional-officers", 
      icon: "🌍",
      description: "আঞ্চলিক নির্বাহী কর্মকর্তাগণ" 
    },
    { 
      title: "দপ্তরভিত্তিক কর্মকর্তাবৃন্দ", 
      href: "/officers/office-based-officers", 
      icon: "🏢",
      description: "বিভিন্ন দপ্তরের কর্মকর্তাবৃন্দ" 
    },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="relative group px-4 py-2 font-normal text-white
                   shadow-md hover:shadow-lg
                   transition-all duration-500 ease-in-out 
                   overflow-hidden cursor-pointer "
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* 🔹 Default Text */}
        <span className="flex items-center relative z-10">
          🧑‍💼 কর্মকর্তাবৃন্দ
        </span>

        {/* 🔹 Hover Gradient Background */}
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"></span>

        {/* 🔹 Hover Text */}
        <span className="absolute inset-0 flex items-center justify-center font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          🧑‍💼 কর্মকর্তাবৃন্দ
        </span>

        {/* 🔹 Bottom Border Animation */}
        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-cyan-400 group-hover:w-full transition-all duration-500"></span>
      </button>

      
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
              কর্মকর্তাবৃন্দের তালিকা
            </h3>
            
            <div className="space-y-2">
              {submenuItems.map((item: SubmenuItem) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 group-hover:text-blue-700">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Contact Status */}
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-blue-800 font-medium">
                  📞 যোগাযোগ তথ্য
                </p>
                <span className="text-blue-600 font-bold">সক্রিয়</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: '100%' }}
                ></div>
              </div>
              <p className="text-xs text-blue-600 mt-1">
                কার্যালয় সময়: সকাল ৯টা - বিকাল ৫টা
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
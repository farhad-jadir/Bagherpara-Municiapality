// components/AboutSubmenu.tsx
"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
  icon: string;
  description: string;
}

export default function AboutSubmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const submenuItems: SubmenuItem[] = [
    { 
      title: "ইতিহাস", 
      href: "/about/history", 
      icon: "📜",
      description: "পৌরসভার ঐতিহাসিক পটভূমি" 
    },
    { 
      title: "একনজরে বাঘারপাড়া", 
      href: "/about/overview", 
      icon: "👀", 
      description: "সামগ্রিক তথ্য ও পরিসংখ্যান"
    },
    { 
      title: "সেবা প্রদান প্রতিশ্রুতি", 
      href: "/about/service-commitment", 
      icon: "🤝",
      description: "নাগরিক সেবার অঙ্গীকার"
    },
    { 
      title: "সাংগাঠনিক কাঠামো", 
      href: "/about/organizational-structure", 
      icon: "🏛️",
      description: "প্রশাসনিক কাঠামো"
    },
    { 
      title: "লোকেশন (ওয়ার্ড ভিত্তিক)", 
      href: "/about/location", 
      icon: "📍",
      description: "ওয়ার্ডভিত্তিক অবস্থান"
    }
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
        <span className="flex items-center  relative z-10">
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
        <div 
          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
              আমাদের সম্পর্কে
            </h3>
            
            <div className="space-y-2">
              {submenuItems.map((item: SubmenuItem) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-start p-3 rounded-lg hover:bg-green-50 transition-colors duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 group-hover:text-green-700">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Information Status */}
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-emerald-800 font-medium">
                  ℹ️ তথ্য হালনাগাদ
                </p>
                <span className="text-emerald-600 font-bold">সর্বশেষ</span>
              </div>
              <div className="w-full bg-emerald-200 rounded-full h-2">
                <div 
                  className="bg-emerald-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: '100%' }}
                ></div>
              </div>
              <p className="text-xs text-emerald-600 mt-1">
                ডিসেম্বর ২০২৪ পর্যন্ত হালনাগাদ
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
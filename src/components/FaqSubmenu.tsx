// components/FaqSubmenu.tsx
"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
  icon: string;
  description: string;
}

export default function FaqSubmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const submenuItems: SubmenuItem[] = [
    { 
      title: "সাধারণ প্রশ্নোত্তর", 
      href: "/faq/general", 
      icon: "❓",
      description: "সাধারণ জিজ্ঞাসিত প্রশ্ন"
    },
    { 
      title: "সেবা সম্পর্কিত FAQ", 
      href: "/faq/services", 
      icon: "🛎️",
      description: "সেবা সংক্রান্ত প্রশ্ন"
    },
    { 
      title: "ট্যাক্স ও বিল FAQ", 
      href: "/faq/taxes", 
      icon: "💰",
      description: "কর ও বিল সংক্রান্ত"
    },
    { 
      title: "ডকুমেন্টেশন FAQ", 
      href: "/faq/documentation", 
      icon: "📄",
      description: "নথিপত্র সম্পর্কিত"
    },
    { 
      title: "অনলাইন সেবা FAQ", 
      href: "/faq/online-services", 
      icon: "🌐",
      description: "অনলাইন সেবা সম্পর্কিত"
    },
    { 
      title: "শিক্ষা সংক্রান্ত FAQ", 
      href: "/faq/education", 
      icon: "🎓",
      description: "শিক্ষা বিষয়ক প্রশ্ন"
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
        <span className="flex items-center relative z-10">
          ❓ FAQ
        </span>

        {/* 🔹 Hover Gradient Background */}
        <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"></span>

        {/* 🔹 Hover Text */}
        <span className="absolute inset-0 flex items-center justify-center font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          ❓ FAQ
        </span>

        {/* 🔹 Bottom Border Animation */}
        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-cyan-400 group-hover:w-full transition-all duration-500"></span>
      </button>

      
      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-2">
              {submenuItems.map((item: SubmenuItem) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-start p-3 rounded-lg hover:bg-teal-50 transition-colors duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 group-hover:text-teal-700">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Quick Search */}
            <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-800 font-medium mb-2">
                🔍 দ্রুত খুঁজুন
              </p>
              <input
                type="text"
                placeholder="প্রশ্ন লিখুন..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
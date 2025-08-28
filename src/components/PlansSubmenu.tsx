// components/PlansSubmenu.tsx
"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
  icon: string;
  description: string;
}

export default function PlansSubmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const submenuItems: SubmenuItem[] = [
    { 
      title: "বার্ষিক উন্নয়ন পরিকল্পনা", 
      href: "/plans/annual-development", 
      icon: "📊",
      description: "বর্তমান বছরের পরিকল্পনা"
    },
    { 
      title: "পঞ্চবার্ষিকী পরিকল্পনা", 
      href: "/plans/five-year", 
      icon: "🗓️",
      description: "২০২৩-২০২৮ পরিকল্পনা"
    },
    { 
      title: "মাস্টার প্ল্যান", 
      href: "/plans/master-plan", 
      icon: "🏙️",
      description: "সামগ্রিক উন্নয়ন পরিকল্পনা"
    },
    { 
      title: "অবকাঠামো পরিকল্পনা", 
      href: "/plans/infrastructure", 
      icon: "🏗️",
      description: "রাস্তা, ব্রিজ, ভবন"
    },
    { 
      title: "পরিবেশ পরিকল্পনা", 
      href: "/plans/environment", 
      icon: "🌳",
      description: "পরিবেশ সংরক্ষণ পরিকল্পনা"
    },
    { 
      title: "ডিজিটাল পরিকল্পনা", 
      href: "/plans/digital", 
      icon: "💻",
      description: "ডিজিটাল transformation"
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
                   overflow-hidden cursor-pointer animate-pulse-color"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* 🔹 Default Text */}
        <span className="flex items-center relative z-10">
          📋 পরিকল্পনা
        </span>

        {/* 🔹 Hover Gradient Background */}
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"></span>

        {/* 🔹 Hover Text */}
        <span className="absolute inset-0 flex items-center justify-center font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          📋 পরিকল্পনা
        </span>

        {/* 🔹 Bottom Border Animation */}
        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-purple-400 group-hover:w-full transition-all duration-500"></span>
      </button>

      
      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
              উন্নয়ন পরিকল্পনা
            </h3>
            
            <div className="space-y-2">
              {submenuItems.map((item: SubmenuItem) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-start p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 group-hover:text-indigo-700">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Progress Status */}
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-blue-800 font-medium">
                  🎯 বর্তমান পরিকল্পনা অগ্রগতি
                </p>
                <span className="text-blue-600 font-bold">75%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: '75%' }}
                ></div>
              </div>
              <p className="text-xs text-blue-600 mt-1">
                বার্ষিক উন্নয়ন পরিকল্পনা ২০২৪
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
  icon?: string;
  description?: string;
}

interface ServicesSubmenuProps {
  onSelect?: () => void;
}

export default function ServicesSubmenu({ onSelect }: ServicesSubmenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const submenuItems: SubmenuItem[] = [
    { 
      title: "ট্রেড লাইসেন্স ইস্যু ও নবায়ন", 
      href: "/services/trade-license", 
      icon: "📋",
      description: "বাণিজ্যিক লাইসেন্স সেবা" 
    },
    { 
      title: "হোল্ডিং নম্বর ও ট্যাক্স", 
      href: "/services/holding-tax", 
      icon: "🏠",
      description: "হোল্ডিং সম্পর্কিত সেবা" 
    },
    { 
      title: "জন্ম নিবন্ধন", 
      href: "/services/birth-registration", 
      icon: "👶",
      description: "জন্ম নিবন্ধন সনদ" 
    },
    { 
      title: "রাস্তার বৈদ্যুতিক বাতি", 
      href: "/services/street-lights", 
      icon: "💡",
      description: "রাস্তার আলো সংক্রান্ত" 
    },
    { 
      title: "রাস্তা নর্দমা ফুটপাত", 
      href: "/services/roads-drains", 
      icon: "🛣️",
      description: "অবকাঠামো রক্ষণাবেক্ষণ" 
    },
    { 
      title: "বাজার সেবা", 
      href: "/services/market", 
      icon: "🛒",
      description: "বাজার ব্যবস্থাপনা" 
    },
    { 
      title: "স্বাস্থ্য কমপ্লেক্স", 
      href: "/services/health-complex", 
      icon: "🏥",
      description: "স্বাস্থ্য সেবা কেন্দ্র" 
    },
    { 
      title: "কবরস্থান/শ্মশানঘাট", 
      href: "/services/cemetery", 
      icon: "⚰️",
      description: "শেষকৃত্য সেবা" 
    },
    { 
      title: "ব্যায়ামাগার", 
      href: "/services/gymnasium", 
      icon: "💪",
      description: "শরীর চর্চা কেন্দ্র" 
    },
    { 
      title: "কমিউনিটি সেন্টার", 
      href: "/services/community-center", 
      icon: "🏛️",
      description: "সামাজিক অনুষ্ঠান কেন্দ্র" 
    },
    { 
      title: "শিক্ষা প্রতিষ্ঠান", 
      href: "/services/educational-institutions", 
      icon: "🎓",
      description: "স্কুল, কলেজ ও মাদ্রাসা" 
    },
    { 
      title: "পাঠাগার", 
      href: "/services/library", 
      icon: "📚",
      description: "গ্রন্থাগার সেবা" 
    },
    { 
      title: "সঙ্গীত স্কুল", 
      href: "/services/music-school", 
      icon: "🎵",
      description: "সাংস্কৃতিক শিক্ষা" 
    },
    { 
      title: "বাস টার্মিনাল", 
      href: "/services/bus-terminal", 
      icon: "🚌",
      description: "পরিবহন সেবা" 
    },
    { 
      title: "গণশৌচাগার", 
      href: "/services/public-toilet", 
      icon: "🚻",
      description: "সরকারি শৌচাগার" 
    },
    { 
      title: "পার্ক ও উদ্যান", 
      href: "/services/parks-gardens", 
      icon: "🌳",
      description: "বিনোদন কেন্দ্র" 
    },
    { 
      title: "খেলার মাঠ", 
      href: "/services/playground", 
      icon: "⚽",
      description: "ক্রীড়া সুবিধা" 
    },
  ];

  // 🔹 Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🔹 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 250);
    }
  };

  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = () => {
    setIsOpen(false);
    onSelect?.();
  };

  // 🔹 Responsive column calculation
  const getColumns = () => {
    if (isMobile) {
      return [submenuItems];
    }
    
    const columnSize = Math.ceil(submenuItems.length / 3);
    return [
      submenuItems.slice(0, columnSize),
      submenuItems.slice(columnSize, columnSize * 2),
      submenuItems.slice(columnSize * 2),
    ];
  };

  const columns = getColumns();

  return (
    <div
      ref={menuRef}
      className="relative select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🔹 Main Button */}
      <button
        type="button"
        className="relative group w-full md:w-auto px-4 py-3 md:py-2 text-white font-normal shadow-md hover:shadow-lg
                   transition-all duration-500 ease-in-out cursor-pointer border-b md:border-b-0 border-white/20 md:border-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {/* Hover Gradient Background */}
        {!isMobile && (
          <span
            className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"
          ></span>
        )}

        {/* Button Text */}
        <span className="flex items-center justify-between md:justify-start relative z-10">
          <span className="flex items-center">
            <span className="mr-2">🛎️</span>
            সেবাসমূহ
          </span>

          {/* Mobile Dropdown Arrow */}
          {isMobile && (
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>

        {/* Bottom Border Animation */}
        {!isMobile && (
          <span
            className="absolute bottom-0 left-0 w-0 h-[3px] bg-red-400 
                       group-hover:w-full transition-all duration-500"
          ></span>
        )}
      </button>

      {/* 🔹 Dropdown Menu - Updated for right alignment */}
      {isOpen && (
        <div
          className="absolute md:absolute top-full left-0 md:left-0 mt-0 md:mt-2 
                     w-full md:w-[900px] bg-white rounded-none md:rounded-lg shadow-xl border border-gray-200 
                     z-50 max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 border-b pb-2">
              নাগরিক সেবাসমূহ
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-2">
                  {column.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={handleItemClick}
                      className="flex items-start p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200 group border border-transparent hover:border-orange-200"
                    >
                      <span className="text-lg md:text-xl mr-3 flex-shrink-0">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-800 group-hover:text-orange-700 text-sm md:text-base leading-tight">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* 🔹 Service Status Section */}
            <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs md:text-sm text-orange-800 font-medium">🔄 অনলাইন সেবা স্ট্যাটাস</p>
                <span className="text-orange-600 font-bold text-sm md:text-base">সক্রিয়</span>
              </div>
              <div className="w-full bg-orange-200 rounded-full h-1.5 md:h-2">
                <div
                  className="bg-orange-600 h-1.5 md:h-2 rounded-full transition-all duration-300"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <p className="text-xs text-orange-600 mt-1">২৪/৭ অনলাইন সেবা উপলব্ধ</p>
            </div>

            {/* 🔹 Mobile Close Button */}
            {isMobile && (
              <div className="mt-4 pt-3 border-t border-gray-200">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 text-center text-red-600 font-medium hover:bg-red-50 rounded transition-colors duration-200 text-sm"
                >
                  বন্ধ করুন
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
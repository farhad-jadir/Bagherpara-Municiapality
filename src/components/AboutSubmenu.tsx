"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
  icon: string;
  description: string;
}

interface AboutSubmenuProps {
  onSelect?: () => void; // মোবাইল মেনুর জন্য কলব্যাক
}

export default function AboutSubmenu({ onSelect }: AboutSubmenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const submenuItems: SubmenuItem[] = [
    { title: "ইতিহাস", href: "/about/history", icon: "📜", description: "পৌরসভার ঐতিহাসিক পটভূমি" },
    { title: "একনজরে বাঘারপাড়া", href: "/about/overview", icon: "👀", description: "সামগ্রিক তথ্য ও পরিসংখ্যান" },
    { title: "সেবা প্রদান প্রতিশ্রুতি", href: "/about/service-commitment", icon: "🤝", description: "নাগরিক সেবার অঙ্গীকার" },
    { title: "সাংগাঠনিক কাঠামো", href: "/about/organizational-structure", icon: "🏛️", description: "প্রশাসনিক কাঠামো" },
    { title: "লোকেশন (ওয়ার্ড ভিত্তিক)", href: "/about/location", icon: "📍", description: "ওয়ার্ডভিত্তিক অবস্থান" },
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
      }, 250); // Reduced from 300ms to match FAQ
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

  return (
    <div
      ref={menuRef}
      className="relative select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🔹 Main Button - Improved hover effects */}
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
            className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"
          ></span>
        )}

        {/* Button Text */}
        <span className="flex items-center justify-between md:justify-start relative z-10">
          <span className="flex items-center">
            <span className="">📖</span>
            আমাদের সম্পর্কে
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
            className="absolute bottom-0 left-0 w-0 h-[3px] bg-emerald-400 
                       group-hover:w-full transition-all duration-500"
          ></span>
        )}
      </button>

      {/* 🔹 Dropdown Menu - Updated for right alignment */}
      {isOpen && (
        <div
          className="absolute md:absolute top-full left-0 md:left-0 mt-0 md:mt-2 
                     w-full md:min-w-80 bg-white rounded-none md:rounded-lg shadow-xl border border-gray-200 
                     z-50 max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-3 md:p-4">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b pb-2">
              আমাদের সম্পর্কে
            </h3>

            <div className="space-y-1 md:space-y-2">
              {submenuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={handleItemClick}
                  className="flex items-start p-2 md:p-3 rounded-lg hover:bg-green-50 transition-colors duration-200 group border-b md:border-b-0 border-gray-100 last:border-b-0"
                >
                  <span className="text-xl md:text-2xl mr-2 md:mr-3 flex-shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 group-hover:text-green-700 text-sm md:text-base">
                      {item.title}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* 🔹 Information Status - Improved styling */}
            <div className="mt-3 md:mt-4 p-2 md:p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs md:text-sm text-green-800 font-medium">ℹ️ তথ্য হালনাগাদ</p>
                <span className="text-green-600 font-bold text-sm md:text-base">সর্বশেষ</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-1.5 md:h-2">
                <div
                  className="bg-green-600 h-1.5 md:h-2 rounded-full transition-all duration-300"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="text-xs text-green-600 mt-1">ডিসেম্বর ২০২৪ পর্যন্ত হালনাগাদ</p>
            </div>

            {/* 🔹 Mobile Close Button */}
            {isMobile && (
              <div className="mt-3 pt-3 border-t border-gray-200">
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
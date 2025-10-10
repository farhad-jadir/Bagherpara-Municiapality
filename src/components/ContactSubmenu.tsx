"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
  icon: string;
  description: string;
}

interface ContactSubmenuProps {
  onSelect?: () => void;
}

export default function ContactSubmenu({ onSelect }: ContactSubmenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const submenuItems: SubmenuItem[] = [
    { 
      title: "ইমার্জেন্সি হটলাইন", 
      href: "/contact/emergency", 
      icon: "🚨",
      description: "২৪/৭ জরুরী যোগাযোগ"
    },
    { 
      title: "ফায়ার সার্ভিস", 
      href: "/contact/fire-service", 
      icon: "🚒",
      description: "অগ্নিনির্বাপণ সার্ভিস"
    },
    { 
      title: "পুলিশ", 
      href: "/contact/police", 
      icon: "👮",
      description: "স্থানীয় থানা"
    },
    { 
      title: "অ্যাম্বুলেন্স", 
      href: "/contact/ambulance", 
      icon: "🚑",
      description: "মেডিকেল ইমার্জেন্সি"
    },
    { 
      title: "দুর্যোগ ব্যবস্থাপনা", 
      href: "/contact/disaster-management", 
      icon: "🌪️",
      description: "প্রাকৃতিক দুর্যোগ"
    },
    { 
      title: "নাগরিক সেবা", 
      href: "/contact/citizen-services", 
      icon: "📞",
      description: "সাধারণ অভিযোগ"
    }
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

  // 🔹 শুধুমাত্র ক্লিক ইভেন্ট হ্যান্ডলার
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    onSelect?.();
  };

  return (
    <div
      ref={menuRef}
      className="relative select-none"
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
            className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"
          ></span>
        )}

        {/* Button Text */}
        <span className="flex items-center justify-between md:justify-start relative z-10">
          <span className="flex items-center">
            <span className="mr-2">🚨</span>
            জরুরী যোগাযোগ
          </span>

          {/* 🔹 শুধুমাত্র মোবাইলের জন্য ড্রপডাউন অ্যারো */}
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
            className="absolute bottom-0 left-0 w-0 h-[3px] bg-orange-400 
                       group-hover:w-full transition-all duration-500"
          ></span>
        )}
      </button>

      {/* 🔹 Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute md:absolute top-full left-0 md:left-auto md:right-0 mt-0 md:mt-2 
                     w-full md:w-80 bg-white rounded-none md:rounded-lg shadow-xl border border-gray-200 
                     z-50 max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible"
        >
          <div className="p-3 md:p-4">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b pb-2">
              জরুরী যোগাযোগ তথ্য
            </h3>

            <div className="space-y-1 md:space-y-2">
              {submenuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={handleItemClick}
                  className="flex items-start p-2 md:p-3 rounded-lg hover:bg-red-50 transition-colors duration-200 group border-b md:border-b-0 border-gray-100 last:border-b-0"
                >
                  <span className="text-xl md:text-2xl mr-2 md:mr-3 flex-shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 group-hover:text-red-700 text-sm md:text-base">
                      {item.title}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* 🔹 Emergency Alert Section */}
            <div className="mt-3 md:mt-4 p-2 md:p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs md:text-sm text-red-800 font-medium">⚡ জরুরী কল সেবা</p>
                <span className="text-red-600 font-bold text-sm md:text-base">সক্রিয়</span>
              </div>
              <div className="w-full bg-red-200 rounded-full h-1.5 md:h-2">
                <div
                  className="bg-red-600 h-1.5 md:h-2 rounded-full transition-all duration-300"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="text-xs text-red-600 mt-1">২৪ ঘন্টা সার্ভিস উপলব্ধ</p>
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
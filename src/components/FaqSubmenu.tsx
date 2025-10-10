"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
  icon: string;
  description: string;
}

interface FaqSubmenuProps {
  onSelect?: () => void;
}

export default function FaqSubmenu({ onSelect }: FaqSubmenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const submenuItems: SubmenuItem[] = [
    { title: "সাধারণ প্রশ্নোত্তর", href: "/faq/general", icon: "❓", description: "সাধারণ জিজ্ঞাসিত প্রশ্ন" },
    { title: "সেবা সম্পর্কিত FAQ", href: "/faq/services", icon: "🛎️", description: "সেবা সংক্রান্ত প্রশ্ন" },
    { title: "ট্যাক্স ও বিল FAQ", href: "/faq/taxes", icon: "💰", description: "কর ও বিল সংক্রান্ত" },
    { title: "ডকুমেন্টেশন FAQ", href: "/faq/documentation", icon: "📄", description: "নথিপত্র সম্পর্কিত" },
    { title: "অনলাইন সেবা FAQ", href: "/faq/online-services", icon: "🌐", description: "অনলাইন সেবা সম্পর্কিত" },
    { title: "শিক্ষা সংক্রান্ত FAQ", href: "/faq/education", icon: "🎓", description: "শিক্ষা বিষয়ক প্রশ্ন" },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // 🔹 শুধুমাত্র ক্লিক ইভেন্ট হ্যান্ডলার
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleSelect = () => {
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
            className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"
          ></span>
        )}

        {/* Button Text */}
        <span className="flex items-center justify-between md:justify-start relative z-10">
          <span className="flex items-center">
            <span className="mr-2">❓</span>
            FAQ
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
            className="absolute bottom-0 left-0 w-0 h-[3px] bg-cyan-400 
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
              Frequently Asked Questions
            </h3>

            <div className="space-y-1 md:space-y-2">
              {submenuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={handleSelect}
                  className="flex items-start p-2 md:p-3 rounded-lg hover:bg-teal-50 transition-colors duration-200 group border-b md:border-b-0 border-gray-100 last:border-b-0"
                >
                  <span className="text-xl md:text-2xl mr-2 md:mr-3 flex-shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 group-hover:text-teal-700 text-sm md:text-base">
                      {item.title}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* 🔹 Quick Search Box */}
            <div className="mt-3 md:mt-4 p-2 md:p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <label htmlFor="faq-search" className="text-xs md:text-sm text-gray-800 font-medium mb-2 block">
                🔍 দ্রুত খুঁজুন
              </label>
              <input
                id="faq-search"
                type="text"
                placeholder="প্রশ্ন লিখুন..."
                className="w-full px-3 py-2 text-xs md:text-sm border border-gray-300 rounded 
                           focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
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
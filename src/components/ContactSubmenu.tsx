// components/ContactSubmenu.tsx
"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
  icon: string;
  description: string;
}

export default function ContactSubmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
          🚨 জরুরী যোগাযোগ
        </span>

        {/* 🔹 Hover Gradient Background */}
        <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"></span>

        {/* 🔹 Hover Text */}
        <span className="absolute inset-0 flex items-center justify-center font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          🚨 জরুরী যোগাযোগ
        </span>

        {/* 🔹 Bottom Border Animation */}
        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-orange-400 group-hover:w-full transition-all duration-500"></span>
      </button>

      
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
              জরুরী যোগাযোগ তথ্য
            </h3>
            
            <div className="space-y-2">
              {submenuItems.map((item: SubmenuItem) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-start p-3 rounded-lg hover:bg-red-50 transition-colors duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 group-hover:text-red-700">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 font-medium">
                ⚡ সকল জরুরী কলের জন্য সরাসরি ডায়াল করুন
              </p>
              <p className="text-xs text-yellow-600 mt-1">
                ২৪ ঘন্টা সার্ভিস উপলব্ধ
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
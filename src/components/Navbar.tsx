// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AboutSubmenu from "./AboutSubmenu";
import OfficersSubmenu from "./OfficersSubmenu";
import ServicesSubmenu from "./ServicesSubmenu";
import LawsSubmenu from "./LawsSubmenu"; // নতুন কম্পোনেন্ট ইম্পোর্ট করুন

interface MenuItem {
  title: string;
  href: string;
}

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("অফিসের খবর");
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { title: "ফরম", href: "/forms" },
    { title: "গ্যালারী", href: "/gallery" },
    { title: "জরুরী যোগাযোগ", href: "/contact" },
    { title: "FAQ", href: "/faq" },
    { title: "পরিকল্পনা", href: "/plans" },
  ];

  const handleSearch = (): void => {
    if (query.trim()) {
      router.push(`/search?query=${query}&type=${category}`);
      setQuery("");
    }
  };

  return (
    <nav className="w-full shadow border-b">
      {/* 🔹 Top Header */}
      <div className="flex justify-between items-center bg-purple-800 text-white px-4 py-2 text-sm">
        <span className="font-medium animate-pulse">
          বাংলাদেশ জাতীয় তথ্য বাতায়ন
        </span>
        <div className="flex items-center gap-2">
          {/* ✅ ডাইনামিক ক্যাটেগরি */}
          <select
            value={category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
            className="text-black px-2 py-1 rounded border focus:outline-none"
          >
            <option value="অফিসের খবর">অফিসের খবর</option>
            <option value="নোটিশ">নোটিশ</option>
          </select>

          {/* ✅ সার্চ */}
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            className="px-2 py-1 rounded text-black border focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 px-3 py-1 rounded text-white hover:bg-green-700 transition-all duration-300"
          >
            Search
          </button>

          {/* ✅ ভাষা বাটন */}
          <button className="ml-2 border px-2 py-1 rounded bg-gray-100 text-black hover:bg-gray-200 transition-all duration-300">
            English
          </button>
        </div>
      </div>

      {/* 🔹 Logo + Title - ব্যাকগ্রাউন্ড ইমেজ হিসেবে লোগো */}
      <div className="flex items-center justify-center py-10 bg-white relative min-h-[500px]">
        <div className="absolute inset-0 opacity-30 ">
          <img 
            src="/logo.png" 
            alt="Background Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* টাইটেল */}
        <Link href="/" onClick={() => setActive("/")} className="relative z-10 w-full flex justify-center">
          <div className="flex items-center cursor-pointer group p-6 bg-opacity-90 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-purple-800 group-hover:text-red-600 transition-colors duration-300">
              বাঘারপাড়া পৌরসভা
            </h1>
          </div>
        </Link>
      </div>

      {/* 🔹 Main Menu */}
      <div className="bg-white border-t">
        <ul className="flex justify-center space-x-6 text-lg py-3">
          {/* আমাদের সম্পর্কে সাবমেনু */}
          <li>
            <AboutSubmenu />
          </li>
          
          {/* কর্মকর্তাবৃন্দ সাবমেনু */}
          <li>
            <OfficersSubmenu />
          </li>
          
          {/* সেবা সমূহ সাবমেনু */}
          <li>
            <ServicesSubmenu />
          </li>
          
          {/* আইন ও নীতিমালা সাবমেনু যোগ করুন */}
          <li>
            <LawsSubmenu />
          </li>
          
          {/* বাকি মেনু আইটেমগুলি */}
          {menuItems.map((item: MenuItem) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={`px-3 py-2 transition-all duration-300 ${
                  active === item.href
                    ? "border-b-2 border-red-600 text-red-600"
                    : "hover:border-b-2 hover:border-red-600 hover:text-red-600"
                }`}
                onClick={() => setActive(item.href)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
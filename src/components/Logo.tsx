"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MainHeader() {
  const [now, setNow] = useState(new Date());
  const [currentSlide, setCurrentSlide] = useState(0);

  // ঘড়ি আপডেট
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // সরকারি ছুটি তালিকা
  const holidays: { [key: string]: string } = {
    "2025-02-21": "আন্তর্জাতিক মাতৃভাষা দিবস",
    "2025-03-26": "স্বাধীনতা দিবস",
    "2025-04-14": "পহেলা বৈশাখ",
    "2025-05-01": "মে দিবস",
    "2025-12-16": "বিজয় দিবস",
  };

  const todayKey = now.toISOString().split("T")[0];
  let officeStatus: string;
  if (holidays[todayKey]) {
    officeStatus = `🚫 আজ সরকারি ছুটি (${holidays[todayKey]})`;
  } else if (now.getDay() === 5 || now.getDay() === 6) {
    officeStatus = "🚫 আজ অফিস বন্ধ (সাপ্তাহিক ছুটি)";
  } else {
    officeStatus = "✅ আজ অফিস খোলা";
  }

  const todayName = now.toLocaleDateString("bn-BD", { weekday: "long" });

  // ক্যারোজেল ছবির লিস্ট
  const images = [
    "/images/muni.png",
    "/images/UNO.png",
    "/images/ac.png",
  ];

  // Auto Slide
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, [images.length]);

  return (
    <header className="bg-live-gradient border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center py-4">
          {/* লোগো */}
          <div className="flex items-center md:col-span-1">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-lg">বাপ</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="ml-4">
                <h1 className="text-base font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                  Bagharapara Municipality
                </h1>
              </div>
            </Link>
          </div>

          {/* সময় */}
          <div className="hidden md:flex flex-col items-center md:col-span-1">
            <span className="text-sm text-gray-500">সময়</span>
            <span className="font-mono text-lg font-semibold">
              {now.toLocaleTimeString("bn-BD")}
            </span>
          </div>

          {/* তারিখ */}
          <div className="hidden md:flex flex-col items-center md:col-span-1">
            <span className="text-sm text-gray-500">তারিখ</span>
            <span className="font-semibold">
              {now.toLocaleDateString("bn-BD", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* দিন */}
          <div className="hidden md:flex flex-col items-center md:col-span-1">
            <span className="text-sm text-gray-500">দিন</span>
            <span className="font-semibold">{todayName}</span>
          </div>

          {/* অফিস */}
          <div className="hidden md:flex flex-col items-center md:col-span-1">
            <span className="text-sm text-gray-500">অফিস</span>
            <span className="font-semibold text-purple-700">{officeStatus}</span>
          </div>

          {/* ক্যারোজেল */}
          <div className="flex items-center justify-start md:justify-end md:col-span-1 bg-live-gradient rounded ">
            <div className="relative w-full md:w-64 h-40 md:h-32 overflow-hidden rounded-lg shadow-lg ">
              {images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  fill
                  className={`object-contain absolute transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* মোবাইল ভিউ */}
        <div className="md:hidden mt-3 grid grid-cols-2 gap-2">
          <div className="p-2 border rounded text-center">
            <div className="text-xs text-gray-500">সময়</div>
            <div className="font-mono font-semibold">
              {now.toLocaleTimeString("bn-BD")}
            </div>
          </div>
          <div className="p-2 border rounded text-center">
            <div className="text-xs text-gray-500">তারিখ</div>
            <div className="font-semibold">
              {now.toLocaleDateString("bn-BD", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
          </div>
          <div className="p-2 border rounded text-center">
            <div className="text-xs text-gray-500">দিন</div>
            <div className="font-semibold">{todayName}</div>
          </div>
          <div className="p-2 border rounded text-center">
            <div className="text-xs text-gray-500">অফিস</div>
            <div className="font-semibold text-purple-700">{officeStatus}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

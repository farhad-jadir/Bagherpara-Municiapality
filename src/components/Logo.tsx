"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MainHeader() {
  const [now, setNow] = useState<Date | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ক্লায়েন্ট মাউন্ট হওয়ার পর চিহ্নিত করা
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ঘড়ি আপডেট
  useEffect(() => {
    if (!isMounted) return;
    const update = () => setNow(new Date());
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, [isMounted]);

  // সরকারি ছুটি তালিকা
  const holidays: { [key: string]: string } = {
    "2025-02-21": "আন্তর্জাতিক মাতৃভাষা দিবস",
    "2025-03-26": "স্বাধীনতা দিবস",
    "2025-04-14": "পহেলা বৈশাখ",
    "2025-05-01": "মে দিবস",
    "2025-12-16": "বিজয় দিবস",
  };

  const todayKey = now ? now.toISOString().split("T")[0] : "";
  let officeStatus: string = "";
  if (!now) {
    officeStatus = "";
  } else if (holidays[todayKey]) {
    officeStatus = `🚫 আজ সরকারি ছুটি (${holidays[todayKey]})`;
  } else if (now.getDay() === 5 || now.getDay() === 6) {
    officeStatus = "🚫 আজ অফিস বন্ধ";
  } else {
    officeStatus = "✅ আজ অফিস খোলা";
  }

  const todayName = now
    ? now.toLocaleDateString("bn-BD", { weekday: "long" })
    : "";

  // ক্যারোজেল ছবির লিস্ট
  const images = [
    { src: "/images/muni.png", title: "বাঘারপাড়া পৌরসভা" },
    { src: "/images/UNO.png", title: "শোভন সরকার, ইউএনও" },
    { src: "/images/ac.png", title: "মাহির দেওয়ান, ভূমি কমিশনার" },
  ];

  // Auto Slide
  useEffect(() => {
    const slideTimer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(slideTimer);
  }, [images.length]);

  return (
    <header className="bg-live-gradient border-b">
      <div className="container mx-auto px-4">
        {/* ডেস্কটপ + বড় স্ক্রিন */}
        <div className="hidden md:flex md:items-center md:justify-between py-4 gap-4">
          {/* লোগো */}
          <Link href="/" className="flex items-center flex-shrink-0 group">
            <div className="relative">
              <div className="w-16 h-16 bg-white ml-6 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <img
                  src="/images/logo2.png"
                  alt="Logo"
                  className="w-16 h-16  object-contain"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="ml-4">
              <h1 className="text-base font-bold text-white group-hover:text-purple-700 transition-colors">
                বাঘারপাড়া পৌরসভা
              </h1>
            </div>
          </Link>

          {/* সময় / তারিখ / দিন / অফিস */}
          <div className="flex flex-1 justify-around items-center text-white">
            <div className="flex flex-col items-center">
              <span className="text-sm">সময়</span>
              <span className="font-mono font-semibold text-lg">
                {isMounted && now ? now.toLocaleTimeString("bn-BD") : ""}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm">তারিখ</span>
              <span className="font-semibold text-lg">
                {isMounted && now
                  ? now.toLocaleDateString("bn-BD", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm">দিন</span>
              <span className="font-semibold text-lg">
                {isMounted && todayName ? todayName : ""}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm">অফিস</span>
              <span className="font-semibold text-lg">
                {isMounted ? officeStatus : ""}
              </span>
            </div>
          </div>

          {/* ক্যারোজেল */}
          <div className="relative w-64 h-36 flex-shrink-0 overflow-hidden rounded-lg shadow-lg">
            {images.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-1 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* মোবাইল + ট্যাব */}
        <div className="md:hidden ">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center mb-3 justify-center">
            <div className="relative">
              <div className="w-12 h-12 mt-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg ">বাপ</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="ml-3">
              <h1 className="text-base font-bold text-white mt-2">
                বাঘারপাড়া পৌরসভা
              </h1>
            </div>
          </Link>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 border border-white rounded text-center">
              <div className="text-xs text-white">সময়</div>
              <div className="font-mono font-semibold text-white text-sm">
                {isMounted && now ? now.toLocaleTimeString("bn-BD") : ""}
              </div>
            </div>
            <div className="p-2 border border-white rounded text-center">
              <div className="text-xs text-white">তারিখ</div>
              <div className="font-semibold text-white text-sm">
                {isMounted && now
                  ? now.toLocaleDateString("bn-BD", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : ""}
              </div>
            </div>
            <div className="p-2 border border-white rounded text-center">
              <div className="text-xs text-white">দিন</div>
              <div className="font-semibold text-white text-sm">
                {isMounted && todayName ? todayName : ""}
              </div>
            </div>
            <div className="p-2 border border-white rounded text-center">
              <div className="text-xs text-white">অফিস</div>
              <div className="font-semibold text-white text-sm">
                {isMounted ? officeStatus : ""}
              </div>
            </div>
          </div>

          {/* Mobile ক্যারোজেল */}
          <div className="relative w-full h-36 mt-3 overflow-hidden rounded-lg shadow-lg">
            {images.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-1 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function MainHeader() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ক্যারোজেল ছবির লিস্ট
  const images = [
    { src: "/images/muni.png", title: "বাঘারপাড়া পৌরসভা" },
    { src: "/images/UNO.png", title: "শোভন সরকার, ইউএনও" },
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
    <header className="relative w-full h-32 md:h-40 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={images[currentSlide].src}
          alt={images[currentSlide].title}
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex items-center px-4">
        {/* Logo Left */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <img
                src="/images/logo2.png"
                alt="Logo"
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="ml-3">
            <h1 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
              বাঘারপাড়া পৌরসভা
            </h1>
          </div>
        </Link>
      </div>
    </header>
  );
}

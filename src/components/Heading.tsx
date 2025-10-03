// components/Heading.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Home, Clock, Calendar, Building2 } from "lucide-react";

type Headline = {
  id: string | number;
  text: string;
  href?: string;
  tag?: string;
  icon?: string;
  priority?: "high" | "medium" | "low";
};

interface HeadingProps {
  headlines?: Headline[];
  speedPxPerSec?: number;
  showIcon?: boolean;
  className?: string;
}

export default function Heading({
  headlines,
  speedPxPerSec = 100,
  showIcon = true,
  className = "",
}: HeadingProps) {
  const [dateTime, setDateTime] = useState<string>("");
  const [officeStatus, setOfficeStatus] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);

  // 🔹 সরকারি ছুটির দিন (ডাইনামিকভাবে আপডেট হবে)
  const holidays = useMemo(() => [
    "2025-02-21", "2025-03-17", "2025-03-26", "2025-04-14", 
    "2025-05-01", "2025-12-16", "2025-12-25"
  ], []);

  // 🔹 স্ক্রল ইফেক্ট এবং ভিজিবিলিটি
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsVisible(currentScrollY < 100 || currentScrollY < scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // 🔹 সময়/তারিখ/দিন + অফিস খোলা/বন্ধ (রিয়েল-টাইম আপডেট)
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const date = now.toLocaleDateString("bn-BD", options);
      const time = now.toLocaleTimeString("bn-BD", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      setDateTime(`${date}, ${time}`);

      const day = now.getDay();
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hour + minutes / 60;
      const todayStr = now.toISOString().split("T")[0];

      // অফিস সময়: সকাল ৯টা থেকে বিকাল ৫টা (সোম-বৃহস্পতি), শুক্রবার সকাল ৯টা থেকে দুপুর ১২টা
      if (holidays.includes(todayStr)) {
        setOfficeStatus("🔴 আজ অফিস বন্ধ (জাতীয় ছুটির দিন)");
      } else if (day === 5) { // শুক্রবার
        if (currentTime >= 9 && currentTime < 12) {
          setOfficeStatus("🟢 অফিস খোলা আছে (শুক্রবার)");
        } else if (currentTime >= 12 && currentTime < 17) {
          setOfficeStatus("🟡 জুমার বিরতি");
        } else {
          setOfficeStatus("🔴 অফিস বন্ধ");
        }
      } else if (day === 6 || day === 0) { // শনি ও রবিবার
        setOfficeStatus("🔴 আজ অফিস বন্ধ (সাপ্তাহিক ছুটি)");
      } else if (currentTime >= 9 && currentTime < 17) {
        setOfficeStatus("🟢 অফিস খোলা আছে");
      } else {
        setOfficeStatus("🔴 অফিস বন্ধ");
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000); // প্রতি সেকেন্ডে আপডেট
    return () => clearInterval(interval);
  }, [holidays]);

  // 🔹 হেডলাইন ডাটা - ডাইনামিক এবং এক্সটেন্ডেবল
  const items = useMemo<Headline[]>(() => {
    const baseItems: Headline[] =
      headlines && headlines.length > 0
        ? headlines
        : [
            {
              id: 1,
              text: "উপজেলা পরিষদের সেবা সপ্তাহ শুরু ১ সেপ্টেম্বর থেকে।",
              tag: "জরুরি",
              href: "/news/service-week",
              icon: "🚀",
              priority: "high"
            },
            {
              id: 2,
              text: "টেন্ডার নোটিশ: রাস্তা সংস্কার প্রকল্প 2025-Q3 প্রকাশিত।",
              tag: "টেন্ডার",
              href: "/tenders/2025-q3-road",
              icon: "📑",
              priority: "medium"
            },
            {
              id: 3,
              text: "নিয়োগ বিজ্ঞপ্তি: ডাটা এন্ট্রি অপারেটর (চূড়ান্ত তালিকা প্রকাশ)।",
              tag: "নিয়োগ",
              href: "/jobs/data-entry-final",
              icon: "💼",
              priority: "high"
            },
            {
              id: 4,
              text: "নতুন ট্যাক্স রেট কার্যকর ১লা জানুয়ারি থেকে।",
              tag: "আদেশ",
              href: "/tax/new-rates",
              icon: "📊",
              priority: "medium"
            },
          ];

    return [
      { 
        id: "datetime", 
        text: `${dateTime}`,
        icon: "🕒"
      },
      { 
        id: "status", 
        text: officeStatus,
        icon: officeStatus.includes("খোলা") ? "✅" : "⏸️"
      },
      ...baseItems,
    ];
  }, [headlines, dateTime, officeStatus]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = useState<number>(30);
  const [paused, setPaused] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // 🔹 অটোমেটিক ডুরেশন ক্যালকুলেশন
  useEffect(() => {
    const compute = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      const singleWidth = track.scrollWidth / 2;
      const dist = singleWidth + container.clientWidth;
      const d = Math.max(15, dist / Math.max(40, speedPxPerSec));
      setDuration(d);
    };

    compute();
    const ro = new ResizeObserver(() => compute());
    if (containerRef.current) ro.observe(containerRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [items, speedPxPerSec]);

  // 🔹 ডাইনামিক লেবেল টগল
  const [labelIndex, setLabelIndex] = useState<number>(0);
  const labels = [
    { text: "স্বাগতম", icon: "👋" },
    { text: "বাঘারপাড়া পৌরসভা", icon: "🏛️" },
    { text: "ডিজিটাল সেবা", icon: "💻" },
    { text: "নাগরিক কেন্দ্র", icon: "👥" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setLabelIndex((prev) => (prev + 1) % labels.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, labels.length]);

  // 🔹 ট্যাগ স্টাইল ম্যাপিং
  const tagStyles = {
    জরুরি: "bg-red-500 text-white border-red-600",
    টেন্ডার: "bg-blue-500 text-white border-blue-600",
    নিয়োগ: "bg-green-500 text-white border-green-600",
    আদেশ: "bg-purple-500 text-white border-purple-600",
    অফিসের: "bg-orange-500 text-white border-orange-600",
    default: "bg-gray-500 text-white border-gray-600"
  };

  const getTagStyle = (tag: string) => {
    return tagStyles[tag as keyof typeof tagStyles] || tagStyles.default;
  };

  const renderItem = (item: Headline, idx: number) => {
    const content = (
      <span className="whitespace-nowrap inline-flex items-center gap-2 px-2 py-1 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105">
        {item.icon && (
          <span className="text-sm flex-shrink-0">{item.icon}</span>
        )}
        {item.tag && (
          <span className={`px-2 py-1 rounded-full text-[10px] font-bold border ${getTagStyle(item.tag)} shadow-sm`}>
            {item.tag}
          </span>
        )}
        <span className="text-[12px] sm:text-sm font-medium tracking-wide drop-shadow-sm">
          {item.text}
        </span>
      </span>
    );

    return (
      <span key={`${item.id}-${idx}`} className="mx-2 sm:mx-4">
        {item.href ? (
          <Link
            href={item.href}
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg transition-all duration-200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {content}
          </Link>
        ) : (
          content
        )}
      </span>
    );
  };

  return (
    <div className={`w-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 text-white sticky top-0 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'} shadow-2xl shadow-purple-900/30 ${className}`}>
      {/* 🔹 মেইন হেডিং কন্টেইনার */}
      <div
        onMouseEnter={() => {
          setPaused(true);
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setPaused(false);
          setIsHovered(false);
        }}
        className="relative"
      >
        <div
          ref={containerRef}
          className="relative overflow-hidden border-y border-white/20 w-full backdrop-blur-sm bg-gradient-to-r from-purple-700/95 to-purple-600/95"
        >
          {/* Left Label - ইন্টারেক্টিভ হোম আইকন */}
          <Link 
            href="/"
            className="absolute inset-y-0 left-0 z-20 flex items-center pl-3 pr-4 sm:pl-4 sm:pr-6 bg-gradient-to-r from-purple-800 to-purple-700 border-r border-white/10 cursor-pointer hover:bg-purple-900/80 transition-all duration-300 shadow-lg group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center gap-2">
              {showIcon && (
                <Home
                  size={18}
                  className="text-yellow-300 group-hover:scale-110 group-hover:text-white transition-all duration-300"
                />
              )}
              <span className="text-xs sm:text-sm font-bold tracking-wider flex items-center gap-1">
                <span className="text-yellow-300 group-hover:text-white transition-colors duration-300">
                  {labels[labelIndex].icon}
                </span>
                <span className="bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent group-hover:from-yellow-200 group-hover:to-white transition-all duration-300">
                  {labels[labelIndex].text}
                </span>
              </span>
            </div>
          </Link>

          {/* গ্রেডিয়েন্ট মাস্ক - ইম্প্রুভড */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-purple-700 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-purple-600 to-transparent z-10" />

          {/* মার্কি ট্র্যাক - স্মুথ স্ক্রল */}
          <div className="relative">
            <div
              ref={trackRef}
              className="pl-24 sm:pl-32 md:pl-40 py-2"
              style={{
                animationName: "headline-scroll",
                animationDuration: `${duration}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationPlayState: paused ? "paused" : "running",
                willChange: "transform",
                whiteSpace: "nowrap",
                display: "inline-block",
                width: "max-content",
              }}
            >
              <span className="inline-block">
                {items.map((item, i) => renderItem(item, i))}
              </span>
              <span className="inline-block">
                {items.map((item, i) => renderItem(item, i))}
              </span>
            </div>
          </div>

          {/* রিয়েল-টাইম ইন্ডিকেটর */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20">
            <div className={`w-2 h-2 rounded-full animate-pulse ${officeStatus.includes("খোলা") ? 'bg-green-400' : 'bg-red-400'} shadow-lg`} />
          </div>
        </div>

        {/* স্কোপড কীফ্রেমস - স্মুথ অ্যানিমেশন */}
        <style jsx>{`
          @keyframes headline-scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          /* স্মুথ স্ক্রলিং ইফেক্ট */
          .smooth-scroll {
            scroll-behavior: smooth;
          }
          
          /* গ্লো ইফেক্ট */
          .glow-effect {
            box-shadow: 0 0 20px rgba(192, 132, 252, 0.3);
          }
        `}</style>
      </div>

      {/* প্রোগ্রেস বার - টাইম ইনডিকেটর */}
      <div className="w-full h-1 bg-purple-900/50 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-1000"
          style={{
            width: paused ? '100%' : '0%',
            animation: paused ? 'none' : `progress-animation ${duration}s linear infinite`
          }}
        />
        
        <style jsx>{`
          @keyframes progress-animation {
            0% { width: 0%; }
            50% { width: 100%; }
            100% { width: 0%; }
          }
        `}</style>
      </div>
    </div>
  );
}
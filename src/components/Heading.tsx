// components/Heading.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";

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

  // 🔹 সরকারি ছুটির দিন
  const holidays = useMemo(() => [
    "2025-02-21", "2025-03-17", "2025-03-26", "2025-04-14", 
    "2025-05-01", "2025-12-16", "2025-12-25"
  ], []);

  // 🔹 Debounced scroll handler - Performance improvement
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          setIsVisible(currentScrollY < 100 || currentScrollY < scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // 🔹 Optimized datetime update - Reduce frequency
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
        minute: "2-digit"
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
    // Update every 30 seconds instead of every second
    const interval = setInterval(updateDateTime, 30000);
    return () => clearInterval(interval);
  }, [holidays]);

  // 🔹 Memoized items with dependency optimization - FIXED
  const items = useMemo(() => {
    const getBaseItems = (): Headline[] => {
      if (headlines && headlines.length > 0) {
        return headlines;
      }
      
      return [
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
    };

    const baseItems = getBaseItems();

    return [
      { 
        id: "datetime", 
        text: dateTime,
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

  // 🔹 Throttled resize observer
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const compute = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      
      const singleWidth = track.scrollWidth / 2;
      const dist = singleWidth + container.clientWidth;
      const d = Math.max(15, dist / Math.max(40, speedPxPerSec));
      setDuration(d);
    };

    const throttledCompute = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(compute, 100);
    };

    compute();
    
    const ro = new ResizeObserver(throttledCompute);
    if (containerRef.current) ro.observe(containerRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    
    return () => {
      ro.disconnect();
      clearTimeout(timeoutId);
    };
  }, [speedPxPerSec]);

  // 🔹 Simplified label rotation
  const labels = useMemo(() => [
    { text: "স্বাগতম" },
    { text: "বাঘারপাড়া পৌরসভা" },
    { text: "ডিজিটাল সেবা" },
    { text: "নাগরিক কেন্দ্র", icon: "👥" }
  ], []);

  const [labelIndex, setLabelIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setLabelIndex((prev) => (prev + 1) % labels.length);
      }
    }, 4000); // Increased interval for better performance
    return () => clearInterval(interval);
  }, [isHovered, labels.length]);

  // 🔹 Memoized tag styles
  const tagStyles = useMemo(() => ({
    জরুরি: "bg-red-500 text-white border-red-600",
    টেন্ডার: "bg-blue-500 text-white border-blue-600",
    নিয়োগ: "bg-green-500 text-white border-green-600",
    আদেশ: "bg-purple-500 text-white border-purple-600",
    অফিসের: "bg-orange-500 text-white border-orange-600",
    default: "bg-gray-500 text-white border-gray-600"
  }), []);

  const getTagStyle = (tag: string) => {
    return tagStyles[tag as keyof typeof tagStyles] || tagStyles.default;
  };

  // 🔹 Memoized item renderer
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
        <span className="text-[12px] sm:text-sm font-medium tracking-wide">
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
            prefetch={false}
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
    <div className={`w-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 text-white sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} shadow-lg ${className}`}>
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
          className="relative overflow-hidden border-y border-white/20 w-full bg-gradient-to-r from-purple-700/95 to-purple-600/95"
        >
          {/* Left Label */}
          <Link 
            href="/"
            className="absolute inset-y-0 left-0 z-20 flex items-center pl-3 pr-4 sm:pl-4 sm:pr-6 bg-gradient-to-r from-purple-800 to-purple-700 border-r border-white/10 cursor-pointer hover:bg-purple-900/80 transition-all duration-300 shadow-lg group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            prefetch={false}
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

          {/* Gradient Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-purple-700 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-purple-600 to-transparent z-10" />

          {/* Marquee Track */}
          <div className="relative">
            <div
              ref={trackRef}
              className="pl-20 sm:pl-28 py-2"
              style={{
                animation: `headline-scroll ${duration}s linear infinite ${paused ? 'paused' : 'running'}`,
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

          {/* Status Indicator */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20">
            <div className={`w-2 h-2 rounded-full ${officeStatus.includes("খোলা") ? 'bg-green-400' : 'bg-red-400'} shadow-lg`} />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-purple-900/50 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300"
          style={{
            width: paused ? '100%' : '0%',
            animation: paused ? 'none' : `progress-animation ${duration}s linear infinite`
          }}
        />
      </div>

      <style jsx>{`
        @keyframes headline-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes progress-animation {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
      `}</style>
    </div>
  );
}
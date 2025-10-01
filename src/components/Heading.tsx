// components/Heading.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Megaphone } from "lucide-react";

type Headline = {
  id: string | number;
  text: string;
  href?: string;
  tag?: string;
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

  // 🔹 সরকারি ছুটির দিন
  const holidays = ["2025-02-21", "2025-03-26", "2025-04-14", "2025-12-16"];

  // 🔹 সময়/তারিখ/দিন + অফিস খোলা/বন্ধ
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
      });
      setDateTime(`${date}, ${time}`);

      const day = now.getDay();
      const hour = now.getHours();
      const todayStr = now.toISOString().split("T")[0];

      if (day === 5 || day === 6 || holidays.includes(todayStr)) {
        setOfficeStatus("🔴 আজ অফিস বন্ধ (ছুটির দিন)");
      } else if (hour >= 9 && hour < 17) {
        setOfficeStatus("🟢 অফিস খোলা আছে");
      } else {
        setOfficeStatus("🔴 অফিস বন্ধ");
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 হেডলাইন ডাটা
  const items = useMemo<Headline[]>(() => {
    const baseItems =
      headlines && headlines.length
        ? headlines
        : [
            {
              id: 1,
              text: "উপজেলা পরিষদের সেবা সপ্তাহ শুরু ১ সেপ্টেম্বর থেকে।",
              tag: "অফিসের খবর",
              href: "/news/service-week",
            },
            {
              id: 2,
              text: "টেন্ডার নোটিশ: রাস্তা সংস্কার প্রকল্প 2025-Q3 প্রকাশিত।",
              tag: "টেন্ডার",
              href: "/tenders/2025-q3-road",
            },
            {
              id: 3,
              text: "নিয়োগ বিজ্ঞপ্তি: ডাটা এন্ট্রি অপারেটর (চূড়ান্ত তালিকা প্রকাশ)।",
              tag: "নিয়োগ",
              href: "/jobs/data-entry-final",
            },
          ];

    return [
      { id: "datetime", text: `📅 ${dateTime}` },
      { id: "status", text: officeStatus },
      ...baseItems,
    ];
  }, [headlines, dateTime, officeStatus]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = useState<number>(30);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    const compute = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      const singleWidth = track.scrollWidth / 2;
      const dist = singleWidth + container.clientWidth;
      const d = Math.max(10, dist / Math.max(40, speedPxPerSec));
      setDuration(d);
    };

    compute();
    const ro = new ResizeObserver(() => compute());
    if (containerRef.current) ro.observe(containerRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [items, speedPxPerSec]);

  // 🔹 Label toggle (শিরোনাম ↔ স্বাগতম বাঘারপাড়া পৌরসভা)
  const [labelIndex, setLabelIndex] = useState<number>(0);
  const labels = ["শিরোনাম", "স্বাগতম বাঘারপাড়া পৌরসভা"];

  useEffect(() => {
    const interval = setInterval(() => {
      setLabelIndex((prev) => (prev + 1) % labels.length);
    }, 4000); // প্রতি ৪ সেকেন্ডে পরিবর্তন হবে
    return () => clearInterval(interval);
  }, []);

  const renderItem = (item: Headline, idx: number) => {
    const content = (
      <span className="whitespace-nowrap inline-flex items-center gap-2">
        {item.tag && (
          <span className="px-2 py-0.5 rounded-full text-[10px] md:text-xs lg:text-sm font-medium bg-purple-100 text-purple-700">
            {item.tag}
          </span>
        )}
        <span className="text-[11px] sm:text-sm md:text-base lg:text-lg">
          {item.text}
        </span>
      </span>
    );

    return (
      <span key={`${item.id}-${idx}`} className="mx-3 sm:mx-6">
        {item.href ? (
          <Link
            href={item.href}
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-purple-400 rounded"
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
    <div className="w-full bg-gradient-to-r from-purple-800 to-purple-600 text-white sticky top-0 z-50">
      {/* 🔹 শিরোনাম স্ক্রলিং (তারিখ/সময়/অফিস স্ট্যাটাস সহ) */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={containerRef}
          className={`relative overflow-hidden border-y border-white/10 w-full ${className}`}
        >
          {/* Left Label (toggle) */}
          <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-2 pr-3 sm:pl-4 sm:pr-5 md:pl-6 md:pr-6 lg:pl-10 bg-purple-900/40 backdrop-blur-sm">
            {showIcon && (
              <Megaphone
                size={14}
                className="mr-1 sm:mr-2 md:mr-2 opacity-90"
              />
            )}
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-wide transition-all duration-500">
              {labels[labelIndex]}
            </span>
          </div>

          {/* Fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 md:w-20 bg-gradient-to-r from-purple-800 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 md:w-20 bg-gradient-to-l from-purple-600 to-transparent" />

          {/* The marquee track */}
          <div className="relative">
            <div
              ref={trackRef}
              className="pl-20 sm:pl-28 md:pl-36"
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
        </div>

        {/* Scoped keyframes */}
        <style jsx>{`
          @keyframes headline-scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

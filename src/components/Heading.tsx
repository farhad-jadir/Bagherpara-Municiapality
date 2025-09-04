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
  const items = useMemo<Headline[]>(
    () =>
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
            {
              id: 4,
              text: "সচেতনতা: জন্মনিবন্ধন আবেদনে নতুন ভেরিফিকেশন ধাপ যুক্ত হয়েছে।",
              tag: "নোটিশ",
              href: "/notice/br-update",
            },
          ],
    [headlines]
  );

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
    <div
      className={`w-full bg-gradient-to-r from-purple-800 to-purple-600 text-white`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={containerRef}
        className={`relative overflow-hidden border-y border-white/10 w-full ${className}`}
      >
        {/* Left Label */}
        <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-2 pr-3 sm:pl-4 sm:pr-5 md:pl-6 md:pr-6 lg:pl-10 bg-purple-900/40 backdrop-blur-sm">
          {showIcon && (
            <Megaphone
              size={14}
              className="mr-1 sm:mr-2 md:mr-2 opacity-90"
            />
          )}
          <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-wide">
            শিরোনাম
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
  );
}

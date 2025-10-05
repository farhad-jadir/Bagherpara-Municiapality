// components/PublicHearingWithMap.tsx
"use client";

import { useState } from "react";
import { 
  Video, 
  Users, 
  Calendar, 
  Clock, 
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import Complain from "./Complain";

interface HearingSession {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  participants: number;
  status: "upcoming" | "live" | "completed";
  meetingLink: string;
}

export default function PublicHearingWithMap() {
  const [session] = useState<HearingSession>({
    id: 1,
    title: "বার্ষিক বাজেট গণশুনানি ২০২৪",
    date: "১৫ জুলাই ২০২৫",
    time: "সকাল ১০:০০ - দুপুর ১:০০",
    description:
      "২০২৫-২০২৬ অর্থবছরের প্রস্তাবিত বাজেট নিয়ে গণশুনানি। সকল নাগরিকদের অংশগ্রহণ সাদরভাবে গ্রহণযোগ্য।",
    participants: 156,
    status: "live",
    meetingLink: "https://calendar.app.google/4s4PpokXLy2yniKa8",
  });

  const joinGoogleMeet = () => {
    window.open(session.meetingLink, "_blank");
  };

  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 rounded-xl shadow-lg overflow-hidden">
      {/* হেডার */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl py-4 sm:py-6 text-center">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white px-2">
          অনলাইন গণশুনানি ও অভিযোগ
        </h1>
        <p className="text-blue-100 mt-2 text-sm sm:text-base px-2">
          বাঘারপাড়া পৌরসভা - নাগরিক অংশগ্রহণ
        </p>
      </div>

      {/* মূল কনটেন্ট */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 items-stretch">
        {/* বাম পাশ - গণশুনানি */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 shadow-lg border border-blue-200 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-full">
                <Video className="text-blue-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-blue-800">
                  লাইভ গণশুনানি
                </h2>
                <p className="text-blue-600 text-xs sm:text-sm">সরাসরি অংশগ্রহণ করুন</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                {session.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">তারিখ</p>
                    <p className="font-semibold text-xs sm:text-sm">{session.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">সময়</p>
                    <p className="font-semibold text-xs sm:text-sm">{session.time}</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                {session.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-green-600" />
                  <span className="font-semibold text-xs sm:text-sm">
                    {session.participants} জন অনলাইনে
                  </span>
                </div>

                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs animate-pulse w-fit">
                  লাইভ
                </span>
              </div>

              <button
                onClick={joinGoogleMeet}
                className="btn-dynamic secondary w-full py-3 text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Video size={18} />
                <span>গণশুনানিতে যোগ দিন</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </div>

          {/* ✅ নাগরিক তথ্য বাটন */}
          <div className="mt-4 sm:mt-6">
            <Link
              href="/nagoric"
              className="btn-dynamic secondary w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 text-sm text-center block"
            >
              আপনার নাগরিক তথ্য দিন →
            </Link>
          </div>
        </div>

        {/* ডান পাশ - অভিযোগ ফর্ম */}
        <div className="h-full">
          <Complain />
        </div>
      </div>
    </div>
  );
}
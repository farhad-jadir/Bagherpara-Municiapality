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
    date: "১৫ ডিসেম্বর ২০২৪",
    time: "সকাল ১০:০০ - দুপুর ১:০০",
    description: "২০২৪-২০২৫ অর্থবছরের প্রস্তাবিত বাজেট নিয়ে গণশুনানি। সকল নাগরিকদের অংশগ্রহণ সাদরভাবে গ্রহণযোগ্য।",
    participants: 156,
    status: "live",
    meetingLink: "https://calendar.app.google/4s4PpokXLy2yniKa8"
  });

  const joinGoogleMeet = () => {
    window.open(session.meetingLink, "_blank");
  };

  return (
    <div className="bg-live-gradient px-4 md:px-12 py-8 bg-white rounded-xl shadow-2xl overflow-hidden ">
      {/* হেডার */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl py-6 text-center">
        <h1 className="text-2xl font-bold text-white">অনলাইন গণশুনানি ও অভিযোগ</h1>
        <p className="text-blue-100 mt-2">বাঘারপাড়া পৌরসভা - নাগরিক অংশগ্রহণ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 min-h-[600px]">
        {/* বাম পাশ - গণশুনানি */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg border border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <Video className="text-blue-600" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-800">লাইভ গণশুনানি</h2>
              <p className="text-blue-600 text-sm">সরাসরি অংশগ্রহণ করুন</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">{session.title}</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">তারিখ</p>
                  <p className="font-semibold text-sm">{session.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">সময়</p>
                  <p className="font-semibold text-sm">{session.time}</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4">{session.description}</p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-green-600" />
                <span className="font-semibold text-sm">{session.participants} জন অনলাইনে</span>
              </div>
              
              <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs animate-pulse">
                লাইভ
              </span>
            </div>

            <button
              onClick={joinGoogleMeet}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Video size={18} />
              গণশুনানিতে যোগ দিন
              <ExternalLink size={16} />
            </button>
          </div>

          {/* ✅ Hero এর মতো নাগরিক তথ্য বাটন */}
          <Link
            href="/nagoric"
            className="block bg-green-400 text-black font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-green-300 hover:scale-105 transition text-sm text-center"
          >
            আপনার নাগরিক তথ্য দিন →
          </Link>
        </div>

        {/* ডান পাশ - অভিযোগ ফর্ম */}
        <Complain />  
      </div>
    </div>
  ); 
}

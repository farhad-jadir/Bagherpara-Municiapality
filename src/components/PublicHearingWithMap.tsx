// components/PublicHearingWithMap.tsx
"use client";

import { useState, useEffect } from "react";
import { 
  Video, 
  Users, 
  Calendar, 
  Clock, 
  MessageSquare, 
  Send, 
  ThumbsUp,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
  Mail
} from "lucide-react";

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

interface PublicComment {
  id: number;
  name: string;
  comment: string;
  time: string;
  likes: number;
}

export default function PublicHearingWithMap() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<PublicComment[]>([]);
  const [userName, setUserName] = useState("");

  // বাঘারপাড়া পৌরসভার স্থানাঙ্ক
  const municipalCoordinates = {
    lat: 23.768906,
    lng: 89.964927
  };

  // Google Maps API key from .env
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const googleMapsLink = `https://www.google.com/maps?q=${municipalCoordinates.lat},${municipalCoordinates.lng}`;

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

  // LocalStorage থেকে ইউজার নাম ও মন্তব্য লোড
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedComments = localStorage.getItem("comments");
    if (savedName) setUserName(savedName);
    if (savedComments) setComments(JSON.parse(savedComments));
  }, []);

  // মন্তব্য সাবমিট
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() && userName.trim()) {
      const newComment: PublicComment = {
        id: Date.now(),
        name: userName,
        comment: comment.trim(),
        time: new Date().toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit" }),
        likes: 0
      };

      const updatedComments = [newComment, ...comments];
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setComment("");
      localStorage.setItem("userName", userName);
    } else if (!userName.trim()) {
      alert("দয়া করে প্রথমে আপনার নাম লিখুন");
    }
  };

  // Like বাটন
  const handleLikeComment = (commentId: number) => {
    const updatedComments = comments.map(comment =>
      comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
    );
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const joinGoogleMeet = () => {
    window.open(session.meetingLink, "_blank");
  };

  const openGoogleMaps = () => {
    window.open(googleMapsLink, "_blank");
  };

  return (
    <div className="bg-live-gradient px-4 md:px-12 py-8 bg-white rounded-xl shadow-2xl overflow-hidden ">
      {/* হেডার */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl py-6 text-center">
        <h1 className="text-2xl font-bold text-white">অনলাইন গণশুনানি ও অবস্থান</h1>
        <p className="text-blue-100 mt-2">বাঘারপাড়া পৌরসভা - সকল নাগরিকের সাথে যোগাযোগ</p>
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

          {/* মন্তব্য সেকশন */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <MessageSquare size={18} />
              নাগরিকদের মন্তব্য
            </h3>

            {!userName && (
              <div className="mb-3 p-3 bg-yellow-50 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  আপনার নাম *
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                    localStorage.setItem("userName", e.target.value);
                  }}
                  placeholder="আপনার পুরো নাম লিখুন"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            )}

            <form onSubmit={handleSubmitComment} className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="আপনার মতামত লিখুন..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  disabled={!userName}
                />
                <button
                  type="submit"
                  disabled={!userName || !comment.trim()}
                  className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  <Send size={14} />
                  প্রেরণ
                </button>
              </div>
            </form>

            <div className="space-y-3 max-h-40 overflow-y-auto">
              {comments.length === 0 ? (
                <div className="text-center py-4 text-gray-500 text-sm">
                  <MessageSquare size={20} className="mx-auto mb-1 opacity-50" />
                  <p>কোনো মন্তব্য নেই</p>
                </div>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                            {comment.name.charAt(0)}
                          </div>
                          <span className="font-semibold text-sm">{comment.name}</span>
                          <span className="text-xs text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-gray-700 text-sm">{comment.comment}</p>
                      </div>
                      <button 
                        onClick={() => handleLikeComment(comment.id)}
                        className="flex items-center gap-1 text-gray-500 hover:text-blue-600 ml-2 text-xs"
                      >
                        <ThumbsUp size={12} />
                        {comment.likes}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* ডান পাশ - ইন্টারঅ্যাকটিভ ম্যাপ */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-lg border border-green-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <MapPin className="text-green-600" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-green-800">বাঘারপাড়া পৌরসভা</h2>
              <p className="text-green-600 text-sm">আমাদের অবস্থান</p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
            <div className="h-64 bg-gray-200 relative">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${municipalCoordinates.lat},${municipalCoordinates.lng}`}
              />
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">বাঘারপাড়া পৌরসভা</h3>
                  <p className="text-sm text-gray-600">জেলা: যশোর, বাংলাদেশ</p>
                </div>
                <button
                  onClick={openGoogleMaps}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm"
                >
                  <Navigation size={14} />
                  গুগল ম্যাপ
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-gray-800 mb-3">যোগাযোগ তথ্য</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin size={14} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">ঠিকানা</p>
                  <p className="text-gray-600">বাঘারপাড়া, যশোর, বাংলাদেশ</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone size={14} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium">ফোন</p>
                  <p className="text-gray-600">+৮৮০ XXXX-XXXXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail size={14} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">ইমেইল</p>
                  <p className="text-gray-600">info@bagharapara.gov.bd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

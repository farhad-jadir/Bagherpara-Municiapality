// components/PublicHearing.tsx
"use client";

import { useState, useEffect } from "react";
import { 
  Mic, 
  Video, 
  Users, 
  Calendar, 
  Clock, 
  MessageSquare, 
  Send, 
  ThumbsUp,
  ExternalLink,
  Youtube,
  Calendar as CalendarIcon
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
  youtubeLink?: string;
  calendarLink: string;
}

interface PublicComment {
  id: number;
  name: string;
  comment: string;
  time: string;
  likes: number;
}

export default function PublicHearing() {
  const [activeSession, setActiveSession] = useState<number>(1);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<PublicComment[]>([]);
  const [userName, setUserName] = useState("");

  // আজকের তারিখ নিয়ে চেকিং
  const today = new Date();
  const todayString = today.toLocaleDateString('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const [sessions] = useState<HearingSession[]>([
    {
      id: 1,
      title: "বার্ষিক বাজেট গণশুনানি ২০২৪",
      date: todayString, // আজকের তারিখ
      time: "সকাল ১০:০০ - দুপুর ১:০০",
      description: "২০২৪-২০২৫ অর্থবছরের প্রস্তাবিত বাজেট নিয়ে গণশুনানি। সকল নাগরিকদের অংশগ্রহণ সাদরভাবে গ্রহণযোগ্য।",
      participants: 156,
      status: "live",
      meetingLink: "https://meet.google.com/abc-def-ghi",
      youtubeLink: "https://youtube.com/live/abc123",
      calendarLink: "https://calendar.app.google/JJEgvmwgmafoF8U88" // আপনার গুগল ক্যালেন্ডার লিংক
    },
    {
      id: 2,
      title: "নগর উন্নয়ন পরিকল্পনা",
      date: "২০ ডিসেম্বর ২০২৪",
      time: "বিকাল ৩:০০ - ৫:০০",
      description: "নগরীর উন্নয়ন পরিকল্পনা ও ভবিষ্যৎ প্রকল্প নিয়ে আলোচনা",
      participants: 89,
      status: "upcoming",
      meetingLink: "https://meet.google.com/jkl-mno-pqr",
      calendarLink: "https://calendar.app.google/JJEgvmwgmafoF8U88"
    },
    {
      id: 3,
      title: "পরিবেশ সংরক্ষণ নীতিমালা",
      date: "৫ জানুয়ারি ২০২५",
      time: "সকাল ১১:০০ - দুপুর ১:০০",
      description: "পরিবেশ দূষণ রোধ ও নগরীকে সবুজ রাখার পরিকল্পনা",
      participants: 67,
      status: "upcoming",
      meetingLink: "https://meet.google.com/stu-vwx-yz",
      calendarLink: "https://calendar.app.google/JJEgvmwgmafoF8U88"
    }
  ]);

  const currentSession = sessions.find(session => session.id === activeSession);

  useEffect(() => {
    // localStorage থেকে ব্যবহারকারীর নাম লোড করুন
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() && userName.trim()) {
      const newComment: PublicComment = {
        id: Date.now(),
        name: userName,
        comment: comment.trim(),
        time: new Date().toLocaleTimeString('bn-BD', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        likes: 0
      };

      setComments(prev => [newComment, ...prev]);
      setComment("");
    } else if (!userName.trim()) {
      alert("দয়া করে প্রথমে আপনার নাম লিখুন");
    }
  };

  const handleLikeComment = (commentId: number) => {
    setComments(prev => prev.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  const joinGoogleMeet = () => {
    if (currentSession?.meetingLink) {
      window.open(currentSession.meetingLink, '_blank');
    }
  };

  const watchOnYouTube = () => {
    if (currentSession?.youtubeLink) {
      window.open(currentSession.youtubeLink, '_blank');
    }
  };

  const addToCalendar = () => {
    if (currentSession?.calendarLink) {
      window.open(currentSession.calendarLink, '_blank');
    }
  };

  // সেশনের status ডাইনামিকভাবে check করার function
  const checkSessionStatus = (session: HearingSession) => {
    const sessionDate = new Date(session.date);
    const now = new Date();
    
    if (sessionDate.toDateString() === now.toDateString()) {
      return "live";
    } else if (sessionDate > now) {
      return "upcoming";
    } else {
      return "completed";
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      {/* হেডার */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 text-center">
        <h1 className="text-2xl font-bold text-white">অনলাইন গণশুনানি</h1>
        <p className="text-blue-100 mt-2">সকল নাগরিকের মতামত আমাদের জন্য গুরুত্বপূর্ণ</p>
        <p className="text-blue-200 text-sm mt-1">আজকের তারিখ: {todayString}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* বাম পাশ - সেশন তালিকা */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar size={24} />
            গণশুনানি সেশন
          </h2>
          
          {sessions.map((session) => {
            const status = checkSessionStatus(session);
            return (
              <div
                key={session.id}
                onClick={() => setActiveSession(session.id)}
                className={`p-4 rounded-lg cursor-pointer transition-all border-2 ${
                  activeSession === session.id
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 bg-gray-50 hover:border-blue-300"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{session.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{session.date}</p>
                    <p className="text-sm text-gray-600">{session.time}</p>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <Users size={14} className="text-gray-500" />
                      <span className="text-xs text-gray-600">{session.participants} জন অংশগ্রহণকারী</span>
                    </div>
                  </div>
                  
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    status === "live" 
                      ? "bg-red-100 text-red-800 animate-pulse" 
                      : status === "upcoming"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}>
                    {status === "live" ? "লাইভ" : status === "upcoming" ? "আসন্ন" : "সম্পন্ন"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ডান পাশ - মেইন কন্টেন্ট */}
        <div className="lg:col-span-2 space-y-6">
          {/* লাইভ সেশন */}
          {currentSession && (
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">{currentSession.title}</h2>
                {checkSessionStatus(currentSession) === "live" && (
                  <div className="flex items-center gap-2 bg-red-100 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-red-700 font-medium">লাইভ</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg">
                  <Calendar size={20} className="text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">তারিখ</p>
                    <p className="font-semibold">{currentSession.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-white rounded-lg">
                  <Clock size={20} className="text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">সময়</p>
                    <p className="font-semibold">{currentSession.time}</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{currentSession.description}</p>

              {/* গুগল মিট, YouTube এবং ক্যালেন্ডার বাটন */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <button
                  onClick={joinGoogleMeet}
                  disabled={checkSessionStatus(currentSession) !== "live"}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  <Video size={18} />
                  গুগল মিট
                  <ExternalLink size={14} />
                </button>

                {currentSession.youtubeLink && (
                  <button
                    onClick={watchOnYouTube}
                    disabled={checkSessionStatus(currentSession) !== "live"}
                    className="flex items-center justify-center gap-2 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    <Youtube size={18} />
                    YouTube
                    <ExternalLink size={14} />
                  </button>
                )}

                <button
                  onClick={addToCalendar}
                  className="flex items-center justify-center gap-2 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <CalendarIcon size={18} />
                  ক্যালেন্ডারে যোগ
                  <ExternalLink size={14} />
                </button>
              </div>

              {/* অংশগ্রহণকারী সংখ্যা */}
              <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-green-600" />
                  <span className="font-semibold">{currentSession.participants} জন অনলাইনে আছেন</span>
                </div>
                
                {/* রিয়েল-টাইম আপডেট বাটন */}
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300"
                >
                  আপডেট করুন
                </button>
              </div>
            </div>
          )}

          {/* মন্তব্য সেকশন */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MessageSquare size={20} />
              নাগরিকদের মন্তব্য
            </h3>

            {/* ব্যবহারকারীর নাম ইনপুট */}
            {!userName && (
              <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  আপনার নাম *
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                    localStorage.setItem('userName', e.target.value);
                  }}
                  placeholder="আপনার পুরো নাম লিখুন"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {/* মন্তব্য ফর্ম */}
            <form onSubmit={handleSubmitComment} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="আপনার মূল্যবান মতামত লিখুন..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={!userName}
                />
                <button
                  type="submit"
                  disabled={!userName || !comment.trim()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  প্রেরণ
                </button>
              </div>
            </form>

            {/* মন্তব্য তালিকা */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {comments.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <MessageSquare size={32} className="mx-auto mb-2 opacity-50" />
                  <p>কোনো মন্তব্য নেই</p>
                  <p className="text-sm">প্রথম মন্তব্য করার জন্য উপরে লিখুন</p>
                </div>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                            {comment.name.charAt(0)}
                          </div>
                          <span className="font-semibold">{comment.name}</span>
                          <span className="text-xs text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-gray-700">{comment.comment}</p>
                      </div>
                      <button 
                        onClick={() => handleLikeComment(comment.id)}
                        className="flex items-center gap-1 text-gray-500 hover:text-blue-600 ml-2"
                      >
                        <ThumbsUp size={16} />
                        <span className="text-sm">{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* নিচের তথ্য সেকশন */}
      <div className="bg-gray-50 p-6 border-t">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Video size={24} className="mx-auto text-blue-600 mb-2" />
            <h4 className="font-semibold text-sm">গুগল মিট</h4>
            <p className="text-xs text-gray-600">ভিডিও কনফারেন্সিং</p>
          </div>
          
          <div className="text-center">
            <Youtube size={24} className="mx-auto text-red-600 mb-2" />
            <h4 className="font-semibold text-sm">YouTube Live</h4>
            <p className="text-xs text-gray-600">লাইভ স্ট্রিমিং</p>
          </div>
          
          <div className="text-center">
            <CalendarIcon size={24} className="mx-auto text-green-600 mb-2" />
            <h4 className="font-semibold text-sm">ক্যালেন্ডার</h4>
            <p className="text-xs text-gray-600">রিমাইন্ডার সেট করুন</p>
          </div>
          
          <div className="text-center">
            <Users size={24} className="mx-auto text-purple-600 mb-2" />
            <h4 className="font-semibold text-sm">সহযোগিতা</h4>
            <p className="text-xs text-gray-600">সকলের অংশগ্রহণ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
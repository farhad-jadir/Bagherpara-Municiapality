// app/about/overview/page.tsx
"use client";

import { useEffect } from 'react';

export default function Overview() {
  // স্ক্রল এনিমেশনের জন্য
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">একনজরে বাঘারপাড়া</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in">যশোর জেলার একটি ঐতিহ্যবাহী উপজেলা</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 fade-in">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">প্রতিষ্ঠা:</span> ১৯৮৩ সাল
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">আয়তন:</span> ২১৬.৭০ বর্গ কিমি
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">জনসংখ্যা:</span> ≈ ১,৮০,০০০
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-green-50"></path>
          </svg>
        </div>
      </section>

      {/* সাধারণ তথ্য */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">সাধারণ তথ্য</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                <div className="w-3 h-8 bg-green-500 rounded-full mr-3"></div>
                প্রতিষ্ঠা ও অবস্থান
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">উপজেলা প্রতিষ্ঠা:</span>
                  <span className="ml-4">১৯৮৩ সালে</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">জেলা:</span>
                  <span className="ml-4">যশোর</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">বিভাগ:</span>
                  <span className="ml-4">খুলনা</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">আয়তন:</span>
                  <span className="ml-4">২১৬.৭০ বর্গ কিলোমিটার</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">জনসংখ্যা:</span>
                  <span className="ml-4">প্রায় ১,৮০,০০০ (২০২২ সালের তথ্য অনুযায়ী)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                <div className="w-3 h-8 bg-green-500 rounded-full mr-3"></div>
                প্রশাসনিক কাঠামো
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">উপজেলা:</span>
                  <span className="ml-4">১টি</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">পৌরসভা:</span>
                  <span className="ml-4">১টি</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">ইউনিয়ন:</span>
                  <span className="ml-4">৯টি</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">মৌজা:</span>
                  <span className="ml-4">১৪৯টি</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">গ্রাম:</span>
                  <span className="ml-4">১৮৫টি</span>
                </div>
              </div>
            </div>
          </div>

          {/* ইউনিয়ন সমূহ */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">ইউনিয়ন সমূহ</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "দরাজহাট", "রায়পুর", "জামদিয়া", "ধলগ্রাম", "জহোরপুর",
                "নারিকেলবাড়িয়া", "বাসুয়াড়ি", "দোহাকুলা", "বন্দবিলা"
              ].map((union, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl text-center hover:from-green-100 hover:to-blue-100 transition-all duration-300 border border-green-200">
                  <span className="font-semibold text-green-800">{union}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ইতিহাস ও ঐতিহ্য */}
      <section className="py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">ইতিহাস ও ঐতিহ্য</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-green-700 mb-6">ঐতিহাসিক পটভূমি</h3>
              <div className="space-y-4 text-gray-700">
                <p>বাঘারপাড়া উপজেলার ইতিহাস সমৃদ্ধ ও বর্ণাঢ্য। ব্রিটিশ শাসনামলে এটি যশোর জেলার একটি গুরুত্বপূর্ণ অঞ্চল ছিল। স্থানীয় কিংবদন্তি অনুসারে, এই অঞ্চলে এক সময় প্রচুর বাঘের উপদ্রব ছিল, যা থেকে 'বাঘারপাড়া' নামটির উৎপত্তি হতে পারে।</p>
                
                <p>বাংলাদেশের মুক্তিযুদ্ধে বাঘারপাড়ার ভূমিকা উল্লেখযোগ্য। ১৯৭১ সালে এই এলাকায় পাকিস্তানি বাহিনীর বিরুদ্ধে বেশ কয়েকটি সম্মুখযুদ্ধ সংঘটিত হয়। স্থানীয় মুক্তিযোদ্ধারা এখানে সক্রিয়ভাবে অংশগ্রহণ করেন এবং অঞ্চলটিকে মুক্ত করতে গুরুত্বপূর্ণ ভূমিকা পালন করেন।</p>
                
                <p>১৯৮৩ সালে বাঘারপাড়া একটি পূর্ণাঙ্গ উপজেলা হিসেবে স্বীকৃতি পায়। এর পূর্বে এটি যশোর সদর উপজেলার অধীনস্থ একটি থানা ছিল।</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-blue-700 mb-4">ঐতিহাসিক ঘটনাবলী</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">১</span>
                    <span>ব্রিটিশ আমলে নীল চাষের জন্য খ্যাতি</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">২</span>
                    <span>১৯৭১ সালের মুক্তিযুদ্ধে সক্রিয় অংশগ্রহণ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">৩</span>
                    <span>১৯৮৩ সালে উপজেলা হিসেবে প্রতিষ্ঠা</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                <h4 className="text-xl font-bold text-yellow-700 mb-4">ঐতিহাসিক ব্যক্তিত্ব</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">১</span>
                    <span>মুক্তিযোদ্ধা কমান্ডার আব্দুল জব্বার</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">২</span>
                    <span>সাহিত্যিক ও শিক্ষাবিদ ড. আহসান হাবীব</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">৩</span>
                    <span>সমাজসেবী রহিমউদ্দিন আহমেদ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ভূগোল ও প্রাকৃতিক সম্পদ */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">ভূগোল ও প্রাকৃতিক সম্পদ</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-6">ভৌগোলিক অবস্থান</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">অক্ষাংশ:</span>
                  <span className="ml-4">২৩°১৯´ উত্তর</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">দ্রাঘিমাংশ:</span>
                  <span className="ml-4">৮৯°০০´ পূর্ব</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">সীমানা:</span>
                  <span className="ml-4">উত্তরে মাগুরা, দক্ষিণ-পশ্চিমে যশোর সদর, উত্তর-পশ্চিমে ঝিনাইদহ, পূর্বে নড়াইল</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">নদ-নদী:</span>
                  <span className="ml-4">চিত্রা</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-6">ভূ-প্রকৃতি ও জলবায়ু</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">ভূ-প্রকৃতি:</span>
                  <span className="ml-4">সমতল ও নিচু এলাকা</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">মাটির ধরন:</span>
                  <span className="ml-4">দোআঁশ ও বেলে দোআঁশ</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">গড় তাপমাত্রা:</span>
                  <span className="ml-4">গ্রীষ্মে ৩৫°C, শীতে ১২°C</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">বৃষ্টিপাত:</span>
                  <span className="ml-4">বার্ষিক গড় ১৫০০ মিমি</span>
                </div>
              </div>
            </div>
          </div>

          {/* প্রাকৃতিক সম্পদ */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">প্রাকৃতিক সম্পদ</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "মৎস্য সম্পদ", icon: "🐟", desc: "নদী ও মাছের ভাণ্ডার" },
                { name: "কৃষিজ সম্পদ", icon: "🌾", desc: "উর্বর agricultural জমি" },
                { name: "বনজ সম্পদ", icon: "🌳", desc: "বিভিন্ন প্রজাতির গাছ" },
                { name: "মৃত্তিকা সম্পদ", icon: "🏺", desc: "উচ্চমানের মাটি" }
              ].map((resource, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{resource.icon}</span>
                  </div>
                  <h4 className="font-bold text-green-800 mb-2">{resource.name}</h4>
                  <p className="text-sm text-gray-600">{resource.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* অর্থনীতি ও শিল্প */}
      <section className="py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">অর্থনীতি ও শিল্প</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">অর্থনৈতিক কর্মকাণ্ড</h3>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
              বাঘারপাড়া মূলত একটি কৃষিপ্রধান অঞ্চল। এখানকার অর্থনীতি প্রধানত কৃষি, মৎস্য চাষ ও ক্ষুদ্র শিল্পের উপর নির্ভরশীল।
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200 text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="text-xl font-bold text-green-800 mb-4">কৃষি</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>ধান</li>
                  <li>পাট</li>
                  <li>গম</li>
                  <li>আলু</li>
                  <li>শাকসবজি</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 text-center">
                <div className="text-4xl mb-4">🐠</div>
                <h4 className="text-xl font-bold text-blue-800 mb-4">মৎস্য চাষ</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>রুই, কাতলা, মৃগেল</li>
                  <li>শিং, মাগুর</li>
                  <li>পাঙ্গাশ</li>
                  <li>তেলাপিয়া</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h4 className="text-xl font-bold text-yellow-800 mb-4">শিল্প ও বাণিজ্য</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>চালকল</li>
                  <li>তেলকল</li>
                  <li>বরফকল</li>
                  <li>সার কারখানা</li>
                  <li>কুটির শিল্প</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-green-800 mb-4">বাজার ও হাটবাজার</h4>
              <div className="grid grid-cols-2 gap-3">
                {["বাঘারপাড়া বাজার", "চাড়াভিটা বাজার", "খাজুরা বাজার", "নারিকেলবাড়িয়া বাজার"].map((market, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 text-center text-sm font-medium text-green-800">
                    {market}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-blue-800 mb-4">ব্যাংক ও আর্থিক প্রতিষ্ঠান</h4>
              <div className="grid grid-cols-2 gap-3">
                {["সোনালী ব্যাংক", "রূপালী ব্যাংক", "ইসলামি ব্যাংক", "ব্র্যাক ব্যাংক"].map((bank, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 text-center text-sm font-medium text-blue-800">
                    {bank}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* সংস্কৃতি ও ঐতিহ্য */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">সংস্কৃতি ও ঐতিহ্য</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-6">উৎসব ও মেলা</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "বৈশাখী মেলা", desc: "বাংলা নববর্ষ উদযাপন" },
                  { name: "চৈত্র সংক্রান্তি", desc: "বসন্ত বিদায় উৎসব" },
                  { name: "নবান্ন উৎসব", desc: "নতুন ফসল কাটার উৎসব" },
                  { name: "ঈদ ও পূজা ", desc: "ধর্মীয় উৎসব" }
                ].map((festival, index) => (
                  <div key={index} className="bg-green-50 rounded-xl p-4 text-center hover:bg-green-100 transition-colors">
                    <h4 className="font-bold text-green-800 mb-2">{festival.name}</h4>
                    <p className="text-sm text-gray-600">{festival.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-6">লোকশিল্প ও হস্তশিল্প</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "মাটির শিল্প", desc: "স্থানীয় মৃৎশিল্প" },
                  { name: "বাঁশের ", desc: "বাঁশের কারুশিল্প" },
                  { name: "নকশী কাঁথা", desc: "পারম্পরিক সূচিশিল্প" },
                  { name: "শোলার শিল্প", desc: "শোলার নানা " }
                ].map((craft, index) => (
                  <div key={index} className="bg-blue-50 rounded-xl p-4 text-center hover:bg-blue-100 transition-colors">
                    <h4 className="font-bold text-blue-800 mb-2">{craft.name}</h4>
                    <p className="text-sm text-gray-600">{craft.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-6">স্থানীয় খাবার</h3>
              <div className="space-y-3">
                {["পাটালি গুড়ের পায়েস", "খেজুরের রস ও গুড়", "স্থানীয় মাছের ভর্তা", "নানা ধরনের পিঠা"].map((food, index) => (
                  <div key={index} className="flex items-center bg-yellow-50 rounded-lg p-3">
                    <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">🍛</span>
                    <span className="text-gray-700">{food}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-6">লোকসংগীত ও নৃত্য</h3>
              <div className="space-y-3">
                {["ভাটিয়ালি গান", "জারি গান", "বাউল গান", "লেটো গান"].map((music, index) => (
                  <div key={index} className="flex items-center bg-purple-50 rounded-lg p-3">
                    <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">🎵</span>
                    <span className="text-gray-700">{music}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* পর্যটন ও দর্শনীয় স্থান */}
      <section className="py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">পর্যটন ও দর্শনীয় স্থান</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "বাঘারপাড়া জমিদার বাড়ি",
                description: "ঐতিহাসিক জমিদার বাড়ি যা ব্রিটিশ আমলে নির্মিত",
                type: "ঐতিহাসিক স্থাপনা"
              },
              {
                name: "চিত্রা নদীর তীর",
                description: "প্রাকৃতিক সৌন্দর্যের জন্য বিখ্যাত",
                type: "প্রাকৃতিক দৃশ্য"
              },
              {
                name: "বাংলাবাড়ী মসজিদ",
                description: "প্রাচীন স্থাপত্য শৈলীর মসজিদ",
                type: "ধর্মীয় স্থাপনা"
              },
              {
                name: "মুক্তিযুদ্ধ স্মৃতিসৌধ",
                description: "১৯৭১ সালের মুক্তিযুদ্ধের স্মৃতিবিজড়িত স্থান",
                type: "স্মৃতিসৌধ"
              },
              {
                name: "স্থানীয় হাটবাজার",
                description: "গ্রামীণ সংস্কৃতি ও জীবনযাপন প্রত্যক্ষ করার স্থান",
                type: "সাংস্কৃতিক"
              },
              {
                name: "চিত্রা নদী",
                description: "বিখ্যাত চিত্র নদীর অংশবিশেষ",
                type: "প্রাকৃতিক"
              }
            ].map((place, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-green-200">
                <div className="h-40 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center relative">
                  <span className="text-white text-xl font-bold text-center px-4 z-10">{place.name}</span>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-green-700 font-semibold mb-2 bg-green-100 inline-block px-3 py-1 rounded-full">
                    {place.type}
                  </div>
                  <p className="text-gray-700">{place.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">যাতায়াত ব্যবস্থা</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">🚌</span>
                  <span>যশোর থেকে বাস বা সিএনজি যোগে বাঘারপাড়া</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">🚗</span>
                  <span>ঢাকা থেকে যশোর হয়ে বাঘারপাড়া</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">🚲</span>
                  <span>স্থানীয়ভাবে রিকশা, অটোরিকশা ও ভ্যানগাড়ি</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">থাকার ব্যবস্থা</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">🏨</span>
                  <span>বাঘারপাড়া উপজেলা পরিষদ ডাকবাংলো</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">🛌</span>
                  <span>স্থানীয় হোটেল ও গেস্ট হাউস</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">🏢</span>
                  <span>যশোর শহরে থাকার উন্নত ব্যবস্থা</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .fade-in {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
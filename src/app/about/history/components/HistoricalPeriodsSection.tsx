// app/about/history/components/HistoricalPeriodsSection.tsx
"use client";

import { useState } from 'react';

interface HistoricalEvent {
  year: string;
  title: string;
  description: string;
  significance: string;
}

export default function HistoricalPeriodsSection() {
  const [activePeriod, setActivePeriod] = useState<string>('establishment');

  const historicalEvents: HistoricalEvent[] = [
    {
      year: "১৯৮৩",
      title: "বাঘারপাড়া উপজেলা প্রতিষ্ঠা",
      description: "বাঘারপাড়া উপজেলা হিসেবে আনুষ্ঠানিকভাবে প্রতিষ্ঠিত হয়। এর পূর্বে এটি যশোর সদর উপজেলার অধীনস্থ একটি থানা ছিল।",
      significance: "উপজেলা হিসেবে আনুষ্ঠানিক যাত্রা শুরু"
    },
    {
      year: "২০০২",
      title: "বাঘারপাড়া পৌরসভা প্রতিষ্ঠা",
      description: "সরকারি আদেশে বাঘারপাড়া পৌরসভা প্রতিষ্ঠিত হয়। প্রথম নির্বাচনের মাধ্যমে আনুষ্ঠানিকভাবে পৌরসভা কার্যক্রম শুরু হয়।",
      significance: "স্থানীয় সরকার ব্যবস্থার আনুষ্ঠানিক সূচনা"
    },
    {
      year: "২০০৩",
      title: "প্রথম পৌরসভা নির্বাচন",
      description: "বাঘারপাড়া পৌরসভার প্রথম নির্বাচন অনুষ্ঠিত হয় এবং প্রথম মেয়র ও কাউন্সিলরগণ দায়িত্বভার গ্রহণ করেন।",
      significance: "গণতান্ত্রিক স্থানীয় সরকার ব্যবস্থার সূচনা"
    },
    {
      year: "২০০৫",
      title: "প্রথম উন্নয়ন পরিকল্পনা গ্রহণ",
      description: "পৌরসভার প্রথম পঞ্চবার্ষিকী উন্নয়ন পরিকল্পনা গ্রহণ করা হয়। রাস্তা, ড্রেনেজ সিস্টেম এবং বাজার ব্যবস্থাপনার উন্নয়ন ঘটে।",
      significance: "ব্যাপক অবকাঠামোগত উন্নয়নের সূচনা"
    },
    {
      year: "২০০৮",
      title: "স্বাস্থ্য ও শিক্ষা খাতের সম্প্রসারণ",
      description: "পৌরসভার উদ্যোগে একাধিক প্রাথমিক বিদ্যালয় এবং স্বাস্থ্য কেন্দ্র প্রতিষ্ঠা করা হয়। শিক্ষা ও স্বাস্থ্য সেবা সাধারণ মানুষের দোরগোড়ায় পৌঁছে দেওয়া হয়।",
      significance: "সামাজিক খাতের উন্নয়ন"
    },
    {
      year: "২০১১",
      title: "দ্বিতীয় পৌরসভা নির্বাচন",
      description: "দ্বিতীয় পৌরসভা নির্বাচন অনুষ্ঠিত হয় এবং নতুন মেয়র ও কাউন্সিলরগণ দায়িত্বভার গ্রহণ করেন।",
      significance: "গণতান্ত্রিক প্রক্রিয়ার ধারাবাহিকতা"
    },
    {
      year: "২০১৫",
      title: "ডিজিটালাইজেশন শুরু",
      description: "পৌরসভার কার্যক্রম ডিজিটালাইজেশন প্রক্রিয়া শুরু হয়। কম্পিউটারাইজড রেকর্ড ব্যবস্থাপনা এবং অনলাইন সেবা প্রদানের প্রাথমিক পর্যায় শুরু।",
      significance: "আধুনিক প্রযুক্তির সাথে সংযুক্তি"
    },
    {
      year: "২০১৬",
      title: "তৃতীয় পৌরসভা নির্বাচন",
      description: "তৃতীয় পৌরসভা নির্বাচন অনুষ্ঠিত হয়। এই নির্বাচনে বর্তমান মেয়র মোঃ আব্দুল হালিম প্রথমবারের মতো মেয়র নির্বাচিত হন।",
      significance: "নতুন নেতৃত্বের আবির্ভাব"
    },
    {
      year: "২০২০",
      title: "আধুনিক পৌরসভা হিসেবে উন্নয়ন",
      description: "ডিজিটাল বাংলাদেশের অংশ হিসেবে পৌরসভার সকল সেবা অনলাইনে available করা হয়। স্মার্ট সিটি প্রকল্পের আওতায় বিভিন্ন আধুনিক সুযোগ-সুবিধা চালু করা হয়।",
      significance: "সম্পূর্ণ ডিজিটাল ও আধুনিক সেবা প্রদান"
    },
    {
      year: "২০২১",
      title: "চতুর্থ পৌরসভা নির্বাচন",
      description: "চতুর্থ পৌরসভা নির্বাচন অনুষ্ঠিত হয় এবং মোঃ আব্দুল হালিম পুনরায় মেয়র নির্বাচিত হন।",
      significance: "ধারাবাহিক উন্নয়ন ও স্থিতিশীলতা"
    }
  ];

  const historicalPeriods = [
    {
      id: 'pre-establishment',
      name: 'প্রাক-প্রতিষ্ঠা কাল',
      description: 'পৌরসভা প্রতিষ্ঠার পূর্বের সময়কাল'
    },
    {
      id: 'establishment',
      name: 'প্রতিষ্ঠা পর্ব (২০০২-২০০৫)',
      description: 'পৌরসভা প্রতিষ্ঠা ও প্রাথমিক উন্নয়ন'
    },
    {
      id: 'development',
      name: 'উন্নয়ন পর্ব (২০০৫-২০১৫)',
      description: 'অবকাঠামো ও সামাজিক উন্নয়ন'
    },
    {
      id: 'modern',
      name: 'আধুনিক যুগ (২০১৫-বর্তমান)',
      description: 'ডিজিটালাইজেশন ও সমন্বিত উন্নয়ন'
    }
  ];

  const currentPeriod = historicalPeriods.find(period => period.id === activePeriod);

  return (
    <section className="py-12 md:py-16 bg-white fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">
          ঐতিহাসিক সময়কাল
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex overflow-x-auto pb-4 mb-8 gap-2">
            {historicalPeriods.map((period) => (
              <button
                key={period.id}
                onClick={() => setActivePeriod(period.id)}
                className={`flex-shrink-0 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activePeriod === period.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="font-semibold text-sm text-nowrap">{period.name}</div>
              </button>
            ))}
          </div>

          {currentPeriod && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-amber-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-amber-800 mb-4">
                    {currentPeriod.name}
                  </h3>
                  <p className="text-gray-700 mb-6 text-sm md:text-base">
                    {currentPeriod.description}
                  </p>
                  
                  <div className="space-y-4">
                    {historicalEvents
                      .filter(event => {
                        const year = parseInt(event.year);
                        switch(currentPeriod.id) {
                          case 'pre-establishment': return year < 2002;
                          case 'establishment': return year >= 2002 && year <= 2005;
                          case 'development': return year >= 2005 && year <= 2015;
                          case 'modern': return year >= 2015;
                          default: return false;
                        }
                      })
                      .map((event, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 border border-amber-200">
                          <div className="flex items-start gap-3">
                            <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {event.year}
                            </div>
                            <div>
                              <h4 className="font-semibold text-amber-800 text-sm md:text-base">{event.title}</h4>
                              <p className="text-gray-600 text-xs md:text-sm mt-1">{event.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div>
                  <div className="bg-white rounded-xl p-6 border border-amber-200 mb-6">
                    <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg flex items-center justify-center">
                      <div className="text-center text-amber-700">
                        <div className="text-4xl mb-2">🏛️</div>
                        <div className="font-semibold">{currentPeriod.name}</div>
                        <div className="text-sm opacity-75 mt-1">ঐতিহাসিক দৃশ্য</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-amber-800 text-lg">মূল বৈশিষ্ট্য</h4>
                    {currentPeriod.id === 'pre-establishment' && (
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          ১৯৮৩ সালে উপজেলা প্রতিষ্ঠা
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          স্থানীয় সরকারের প্রাথমিক কাঠামো
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          পৌরসভা প্রতিষ্ঠার প্রস্তুতি
                        </li>
                      </ul>
                    )}
                    {currentPeriod.id === 'establishment' && (
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          ২০০২ সালে পৌরসভা প্রতিষ্ঠা
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          ২০০৩ সালে প্রথম নির্বাচন
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          প্রাতিষ্ঠানিক কাঠামো গঠন
                        </li>
                      </ul>
                    )}
                    {currentPeriod.id === 'development' && (
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          অবকাঠামো উন্নয়ন
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          শিক্ষা-স্বাস্থ্য সেবা সম্প্রসারণ
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          একাধিক নির্বাচন সম্পন্ন
                        </li>
                      </ul>
                    )}
                    {currentPeriod.id === 'modern' && (
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          ডিজিটালাইজেশন সম্প্রসারণ
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          স্মার্ট সিটি প্রকল্প
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          পরিবেশবান্ধব উন্নয়ন
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
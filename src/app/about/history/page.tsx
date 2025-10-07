// app/about/history/page.tsx
"use client";

import { useEffect, useState } from 'react';

interface HistoricalEvent {
  year: string;
  title: string;
  description: string;
  significance: string;
}

interface KeyPerson {
  name: string;
  role: string;
  period: string;
  contribution: string;
  image?: string;
}

export default function History() {
  const [activePeriod, setActivePeriod] = useState<string>('establishment');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const keyPersons: KeyPerson[] = [
    {
      name: "মোঃ আব্দুল হালিম",
      role: "বর্তমান মেয়র",
      period: "২০১৬-বর্তমান",
      contribution: "ডিজিটালাইজেশন সম্প্রসারণ, অবকাঠামো উন্নয়ন, এবং স্বচ্ছতা বৃদ্ধি। তার নেতৃত্বে পৌরসভা আধুনিক রূপ লাভ করে।"
    },
    {
      name: "মোঃ রফিকুল ইসলাম",
      role: "পৌর সচিব",
      period: "২০১৮-বর্তমান",
      contribution: "প্রশাসনিক সংস্কার এবং জনসেবার মান উন্নয়ন। ডিজিটাল সিস্টেম চালু করতে গুরুত্বপূর্ণ ভূমিকা পালন করেন।"
    },
    {
      name: "প্রথম মেয়র (২০০৩-২০০৮)",
      role: "প্রথম নির্বাচিত মেয়র",
      period: "২০০৩-২০০৮",
      contribution: "পৌরসভার ভিত্তি প্রতিষ্ঠা এবং প্রাতিষ্ঠানিক কাঠামো গড়ে তোলা। প্রথম উন্নয়ন পরিকল্পনা বাস্তবায়ন।"
    },
    {
      name: "দ্বিতীয় মেয়র (২০০৮-২০১১)",
      role: "দ্বিতীয় মেয়র",
      period: "২০০৮-২০১১",
      contribution: "শিক্ষা ও স্বাস্থ্য খাতের উন্নয়ন, সামাজিক অবকাঠামো সম্প্রসারণ।"
    },
    {
      name: "তৃতীয় মেয়র (২০১১-২০১৬)",
      role: "তৃতীয় মেয়র",
      period: "২০১১-২০১৬",
      contribution: "অবকাঠামো উন্নয়ন এবং অর্থনৈতিক প্রবৃদ্ধি ত্বরান্বিতকরণ।"
    },
    {
      name: "ডাঃ ফারহানা ইসলাম",
      role: "স্বাস্থ্য বিভাগ প্রধান",
      period: "২০১৫-বর্তমান",
      contribution: "স্বাস্থ্য সেবার মানোন্নয়ন এবং কমিউনিটি হেলথ প্রোগ্রাম চালু। সকল ওয়ার্ডে স্বাস্থ্য সেবা পৌঁছে দেওয়া।"
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 fade-in">
            বাঘারপাড়া পৌরসভার ইতিহাস
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto fade-in mb-6 md:mb-8">
            ২০০২ সালে প্রতিষ্ঠিত - গৌরবময় যাত্রার দুই দশক
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 fade-in">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-2 text-sm md:text-base">
              <span className="font-semibold">প্রতিষ্ঠা:</span> ২০০২ সালে
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-2 text-sm md:text-base">
              <span className="font-semibold">প্রথম নির্বাচন:</span> ২০০৩ সালে
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-2 text-sm md:text-base">
              <span className="font-semibold">ওয়ার্ড:</span> ৯টি
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-2 text-sm md:text-base">
              <span className="font-semibold">মেয়র:</span> ৪ জন
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-amber-50"></path>
          </svg>
        </div>
      </section>

      {/* কালপঞ্জি */}
      <section className="py-12 md:py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">
            ঐতিহাসিক কালপঞ্জি (২০০২-বর্তমান)
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
              <div className="relative">
                {/* টাইমলাইন */}
                <div className="space-y-8">
                  {historicalEvents.map((event, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
                      {/* বছর */}
                      <div className="flex-shrink-0 w-full md:w-32">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg p-3 text-center shadow-md">
                          <div className="text-lg md:text-xl font-bold">{event.year}</div>
                        </div>
                      </div>
                      
                      {/* কন্টেন্ট */}
                      <div className="flex-1 bg-amber-50 rounded-xl p-4 md:p-6 border border-amber-200">
                        <h3 className="text-lg md:text-xl font-bold text-amber-800 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-700 mb-3 text-sm md:text-base">
                          {event.description}
                        </p>
                        <div className="bg-white rounded-lg p-3 border border-amber-300">
                          <div className="text-xs font-semibold text-amber-600 mb-1">ঐতিহাসিক গুরুত্ব:</div>
                          <div className="text-sm text-amber-800">{event.significance}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* টাইমলাইন লাইন */}
                <div className="hidden md:block absolute left-40 top-0 bottom-0 w-1 bg-amber-300 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ঐতিহাসিক সময়কাল */}
      <section className="py-12 md:py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">
            ঐতিহাসিক সময়কাল
          </h2>
          
          <div className="max-w-6xl mx-auto">
            {/* পিরিয়ড সিলেক্টর */}
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

            {/* নির্বাচিত পিরিয়ডের বিস্তারিত */}
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
                    
                    {/* সময়কাল ভিত্তিক ঘটনাবলী */}
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
                    {/* ঐতিহাসিক ছবি/ভিজুয়াল */}
                    <div className="bg-white rounded-xl p-6 border border-amber-200 mb-6">
                      <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg flex items-center justify-center">
                        <div className="text-center text-amber-700">
                          <div className="text-4xl mb-2">🏛️</div>
                          <div className="font-semibold">{currentPeriod.name}</div>
                          <div className="text-sm opacity-75 mt-1">ঐতিহাসিক দৃশ্য</div>
                        </div>
                      </div>
                    </div>

                    {/* সময়কালের বৈশিষ্ট্য */}
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

      {/* গুরুত্বপূর্ণ ব্যক্তিত্ব */}
      <section className="py-12 md:py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">
            গুরুত্বপূর্ণ ব্যক্তিত্ব
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {keyPersons.map((person, index) => (
              <div key={index} className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 border border-amber-100">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">{person.name.split(' ')[1]?.charAt(0) || person.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-amber-800 mb-2">{person.name}</h3>
                  <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs md:text-sm font-semibold inline-block mb-2">
                    {person.role}
                  </div>
                  <div className="text-gray-600 text-xs md:text-sm mb-3">
                    <span className="font-semibold">কার্যকাল:</span> {person.period}
                  </div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {person.contribution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ঐতিহাসিক সাফল্য ও অর্জন */}
      <section className="py-12 md:py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">
            ঐতিহাসিক সাফল্য ও অর্জন
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🏛️",
                title: "স্থানীয় সরকার শক্তিশালীকরণ",
                description: "২০ বছরেরও বেশি সময় ধরে স্থানীয় সরকার ব্যবস্থা শক্তিশালী করা"
              },
              {
                icon: "📈",
                title: "অর্থনৈতিক প্রবৃদ্ধি",
                description: "স্থানীয় ব্যবসা-বাণিজ্য ও শিল্পের ব্যাপক উন্নয়ন"
              },
              {
                icon: "🎓",
                title: "শিক্ষার প্রসার",
                description: "সাক্ষরতার হার বৃদ্ধি এবং শিক্ষা প্রতিষ্ঠান প্রতিষ্ঠা"
              },
              {
                icon: "🏥",
                title: "স্বাস্থ্য সেবা সম্প্রসারণ",
                description: "সকল ওয়ার্ডে স্বাস্থ্য সেবা পৌঁছে দেওয়া"
              },
              {
                icon: "🛣️",
                title: "অবকাঠামো উন্নয়ন",
                description: "সড়ক পাকা করা এবং ড্রেনেজ সিস্টেম উন্নয়ন"
              },
              {
                icon: "💻",
                title: "ডিজিটালাইজেশন",
                description: "অনলাইন সেবা চালু এবং ডিজিটাল রেকর্ড ব্যবস্থাপনা"
              },
              {
                icon: "🌳",
                title: "পরিবেশ সংরক্ষণ",
                description: "গাছ রোপণ এবং বর্জ্য ব্যবস্থাপনা সিস্টেম"
              },
              {
                icon: "🤝",
                title: "সামাজিক উন্নয়ন",
                description: "সমাজের সকল স্তরের মানুষের অংশগ্রহণ নিশ্চিতকরণ"
              }
            ].map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 md:p-6 text-center border border-amber-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <h3 className="font-semibold text-amber-800 text-sm md:text-base mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ঐতিহাসিক দলিল ও আর্কাইভ */}
      <section className="py-12 md:py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">
            ঐতিহাসিক দলিল ও আর্কাইভ
          </h2>
          
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-amber-800 mb-4">সংরক্ষিত দলিল</h3>
                <ul className="space-y-3">
                  {[
                    "প্রতিষ্ঠার আদেশপত্র (২০০২)",
                    "প্রথম নির্বাচনের রেকর্ড (২০০৩)",
                    "মূল ভূমি রেকর্ড",
                    "প্রথম বাজেট দলিল",
                    "উন্নয়ন প্রকল্পের নথি",
                    "নির্বাচনী দলিলপত্র"
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center text-sm md:text-base">
                      <span className="bg-amber-100 text-amber-800 rounded-lg p-1 mr-3">📄</span>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-amber-800 mb-4">ফটো আর্কাইভ</h3>
                <ul className="space-y-3">
                  {[
                    "প্রথম পৌরসভা ভবন",
                    "ঐতিহাসিক স্থাপনা",
                    "উন্নয়ন কাজের ছবি",
                    "সামাজিক অনুষ্ঠান",
                    "প্রাক্তন মেয়রদের সংগ্রহ",
                    "নির্বাচনী প্রচারণা"
                  ].map((photo, index) => (
                    <li key={index} className="flex items-center text-sm md:text-base">
                      <span className="bg-amber-100 text-amber-800 rounded-lg p-1 mr-3">🖼️</span>
                      <span className="text-gray-700">{photo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-800 text-sm md:text-base text-center">
                <strong>আর্কাইভ পরিদর্শন:</strong> গবেষক ও আগ্রহী ব্যক্তিগণ পূর্বানুমতি সাপেক্ষে ঐতিহাসিক দলিল পরিদর্শন করতে পারেন।
              </p>
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
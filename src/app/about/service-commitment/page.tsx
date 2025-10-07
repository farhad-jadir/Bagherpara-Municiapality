// app/about/service-commitment/page.tsx
"use client";

import { useEffect } from 'react';

export default function ServiceCommitment() {
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

  const services = [
    {
      service: "জন্ম নিবন্ধন সনদ",
      time: "৭ কার্যদিবস",
      documents: "জন্ম সনদ, মাতা-পিতার জাতীয়তা সনদ"
    },
    {
      service: "চারিত্রিক সনদ",
      time: "১০ কার্যদিবস",
      documents: "২ কপি পাসপোর্ট সাইজ ছবি, আবেদন ফর্ম"
    },
    {
      service: "আয়ের সনদ",
      time: "৫ কার্যদিবস",
      documents: "জাতীয় পরিচয়পত্র, আবেদন ফর্ম"
    },
    {
      service: "বাসস্থানের সনদ",
      time: "৭ কার্যদিবস",
      documents: "ইউটিলিটি বিল, ভোটার আইডি"
    },
    {
      service: "নামজারি সেবা",
      time: "৩০ কার্যদিবস",
      documents: "দলিল, খতিয়ান, ট্যাক্স রসিদ"
    },
    {
      service: "বয়স্ক ভাতা",
      time: "১৫ কার্যদিবস",
      documents: "বয়স প্রমাণ, জাতীয় পরিচয়পত্র"
    }
  ];

  const commitments = [
    {
      icon: "⚡",
      title: "দ্রুত সেবা",
      description: "সকল ধরনের সেবা নির্ধারিত সময়ের মধ্যে প্রদান করা হবে"
    },
    {
      icon: "🔍",
      title: "স্বচ্ছতা",
      description: "সেবা প্রক্রিয়া সম্পূর্ণ স্বচ্ছ ও পর্যবেক্ষণযোগ্য হবে"
    },
    {
      icon: "👥",
      title: "সুবিধাবঞ্চিতদের অগ্রাধিকার",
      description: "দুস্থ ও সুবিধাবঞ্চিত জনগোষ্ঠীকে অগ্রাধিকার ভিত্তিতে সেবা প্রদান"
    },
    {
      icon: "💼",
      title: "জবাবদিহিতা",
      description: "সেবা প্রদানকারী কর্মকর্তাদের জবাবদিহিতা নিশ্চিত করা"
    },
    {
      icon: "📱",
      title: "ডিজিটাল সেবা",
      description: "ডিজিটাল পদ্ধতিতে সেবা প্রদান ও তথ্য প্রাপ্তি সহজীকরণ"
    },
    {
      icon: "🤝",
      title: "জনগণের অংশগ্রহণ",
      description: "সেবা উন্নয়নে জনগণের মতামত ও অংশগ্রহণ নিশ্চিত করা"
    }
  ];

  const digitalServices = [
    {
      title: "অনলাইন আবেদন",
      description: "বাসায় বসেই অনলাইনে বিভিন্ন সেবার জন্য আবেদন করুন",
      link: "https://eporcha.gov.bd",
      buttonText: "আবেদন করুন"
    },
    {
      title: "সেবা ট্র্যাকিং",
      description: "আপনার আবেদনের বর্তমান অবস্থা অনলাইনে দেখুন",
      link: "#",
      buttonText: "ট্র্যাক করুন"
    },
    {
      title: "ডিজিটাল পেমেন্ট",
      description: "বিভিন্ন ফি ও কর অনলাইনে পরিশোধ করুন",
      link: "https://pay.gov.bd",
      buttonText: "পেমেন্ট করুন"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">সেবা প্রদান প্রতিশ্রুতি</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in">
            বাঘারপাড়া উপজেলা প্রশাসনের পক্ষ থেকে জনগণের সেবায় আমাদের অঙ্গীকার
          </p>
          <div className="mt-8 fade-in">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg inline-block px-6 py-3">
              <span className="font-semibold">সেবার মান:</span> দ্রুত, স্বচ্ছ ও জবাবদিহিতামূলক
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-blue-50"></path>
          </svg>
        </div>
      </section>

      {/* আমাদের প্রতিশ্রুতি */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">আমাদের প্রতিশ্রুতি</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              বাঘারপাড়া উপজেলা প্রশাসন জনসাধারণের সেবায় নিবেদিত। আমরা প্রতিশ্রুতিবদ্ধ যে আমাদের সকল সেবা 
              দ্রুত, স্বচ্ছ ও জবাবদিহিতামূলক হবে। নিম্নলিখিত ক্ষেত্রে আমাদের প্রতিশ্রুতি:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="text-4xl mb-4">{commitment.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">{commitment.title}</h3>
                <p className="text-gray-600">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* সেবার ধরন */}
      <section className="py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">প্রদত্ত সেবাসমূহ</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-lg p-2 mr-3">📄</span>
                  নাগরিক সনদ ও সার্টিফিকেট
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    জন্ম নিবন্ধন সনদ
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    মৃত্যু নিবন্ধন সনদ
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    চারিত্রিক সনদ
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    আয়ের সনদ
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    বাসস্থানের সনদ
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                  <span className="bg-green-100 text-green-800 rounded-lg p-2 mr-3">🏛️</span>
                  ভূমি সংক্রান্ত সেবা
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    নামজারি সেবা
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    খতিয়ান ও দাগ নকল
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    মিউটেশন সেবা
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    ভূমি উন্নয়ন কর আদায়
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-800 rounded-lg p-2 mr-3">👨‍👩‍👧‍👦</span>
                  সামাজিক সুরক্ষা সেবা
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    বয়স্ক ভাতা
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    বিধবা ভাতা
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    প্রতিবন্ধী ভাতা
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    মাতৃত্বকালীন ভাতা
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    কর্মসংস্থান সেবা
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
                  <span className="bg-orange-100 text-orange-800 rounded-lg p-2 mr-3">🏥</span>
                  স্বাস্থ্য ও শিক্ষা সেবা
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    স্বাস্থ্য সেবা ও পরামর্শ
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    শিক্ষা বৃত্তি ও উপবৃত্তি
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    স্কুল ভর্তি সনদ
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    স্বাস্থ্য সনদ প্রদান
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* সেবা প্রাপ্তির সময়সীমা */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">সেবা প্রাপ্তির সময়সীমা</h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-4 font-bold text-blue-800 border-b">সেবার নাম</th>
                    <th className="p-4 font-bold text-blue-800 border-b">সর্বোচ্চ সময়সীমা</th>
                    <th className="p-4 font-bold text-blue-800 border-b">প্রয়োজনীয় কাগজপত্র</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-blue-50 transition-colors">
                      <td className="p-4 font-semibold text-gray-800">{item.service}</td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {item.time}
                        </span>
                      </td>
                      <td className="p-4 text-gray-600">{item.documents}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* অভিযোগ ও পরামর্শ */}
      <section className="py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">অভিযোগ ও পরামর্শ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
                <span className="bg-red-100 text-red-800 rounded-lg p-2 mr-3">📞</span>
                অভিযোগ দাখিল
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-red-800 mb-2">হটলাইন নম্বর</h4>
                  <div className="bg-white rounded-lg p-4 border border-red-300">
                    <p className="text-2xl font-bold text-red-600">১৬১</p>
                    <p className="text-gray-600 text-sm">জাতীয় অভিযোগ বক্স</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-red-800 mb-2">ইমেইল</h4>
                  <div className="bg-white rounded-lg p-4 border border-red-300">
                    <p className="text-lg font-semibold text-red-600">bagharpara.jessore@gov.bd</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-red-800 mb-2">সরাসরি অভিযোগ</h4>
                  <p className="text-gray-700">
                    উপজেলা নির্বাহী অফিসারের কার্যালয়ে সরাসরি অভিযোগ দাখিল করতে পারেন
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                <span className="bg-green-100 text-green-800 rounded-lg p-2 mr-3">💡</span>
                পরামর্শ প্রদান
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-800 mb-2">সেবা উন্নয়ন পরামর্শ</h4>
                  <p className="text-gray-700">
                    আমাদের সেবার মান উন্নয়নে আপনার মূল্যবান পরামর্শ আমাদের কাছে গুরুত্বপূর্ণ
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-2">পরামর্শ প্রদানের মাধ্যম</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      সরাসরি উপজেলা কার্যালয়ে
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      ইমেইলের মাধ্যমে
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      ওয়েবসাইটের ফিডব্যাক ফর্ম
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-300 mt-4">
                  <p className="text-green-700 font-semibold">
                    আমরা প্রতিটি পরামর্শ গুরুত্বের সাথে বিবেচনা করি
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ডিজিটাল সেবা */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">ডিজিটাল সেবা</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {digitalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={service.link}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {service.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* আমাদের অঙ্গীকার */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">আমাদের অঙ্গীকার</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-xl leading-relaxed">
                &quot;বাঘারপাড়া উপজেলা প্রশাসন জনগণের সেবায় সর্বদা নিবেদিত। আমরা অঙ্গীকারবদ্ধ যে আমাদের 
                সকল সেবা হবে স্বচ্ছ, দ্রুত ও সহজলভ্য। প্রতিটি নাগরিকের অধিকার রক্ষা এবং তাদের 
                মৌলিক চাহিদা পূরণে আমরা কাজ করে যাব। আমাদের লক্ষ্য হলো একটি দুর্নীতিমুক্ত, 
                জবাবদিহিতামূলক ও জনবান্ধব প্রশাসন গড়ে তোলা।&quot;
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">২৪/৭</div>
                <div className="text-blue-200">হটলাইন সেবা</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">১০০%</div>
                <div className="text-blue-200">স্বচ্ছতা</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">৯৮%</div>
                <div className="text-blue-200">সন্তুষ্টি হার</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* যোগাযোগ */}
      <section className="py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">যোগাযোগ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">ঠিকানা</h3>
              <p className="text-gray-600">
                বাঘারপাড়া উপজেলা কার্যালয়<br />
                বাঘারপাড়া, যশোর<br />
                খুলনা বিভাগ, বাংলাদেশ
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">ফোন</h3>
              <p className="text-gray-600">
                উপজেলা নির্বাহী অফিসার:<br />
                +৮৮০৪২১-৫৬XXX<br />
                সেবা কেন্দ্র: ১৬১
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">ইমেইল ও ওয়েব</h3>
              <p className="text-gray-600">
                ইমেইল: bagharpara.jessore@gov.bd<br />
                ওয়েবসাইট: www.bagharpara.jessore.gov.bd
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ফুটার */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">বাঘারপাড়া উপজেলা প্রশাসন</h3>
          <p className="text-blue-200 mb-2">জনগণের সেবায় নিবেদিত</p>
          <p className="text-blue-300">© {new Date().getFullYear()} সকল অধিকার সংরক্ষিত</p>
        </div>
      </footer>

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
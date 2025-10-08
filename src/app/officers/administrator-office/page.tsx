// app/officers/administrator-office/page.tsx
"use client";

import { useEffect, useState } from 'react';

export default function AdministratorOffice() {
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const administratorInfo = {
    name: "মোঃ আব্দুল হালিম",
    designation: "মাননীয় প্রশাসক/মেয়র",
    tenure: "২০১৬-বর্তমান",
    qualifications: [
      "স্নাতকোত্তর (রাষ্ট্রবিজ্ঞান)",
      "স্থানীয় সরকার বিষয়ে বিশেষ প্রশিক্ষণ",
      "২৫+ বছর সরকারি службе অভিজ্ঞতা"
    ],
    vision: "বাঘারপাড়া পৌরসভাকে একটি আধুনিক, স্বচ্ছ ও জনবান্ধব স্থানীয় সরকার প্রতিষ্ঠান হিসেবে গড়ে তোলা",
    message: "জনগণের সেবাই আমার প্রধান লক্ষ্য। আমরা প্রতিশ্রুতিবদ্ধ যে বাঘারপাড়া পৌরসভার প্রতিটি নাগরিককে সর্বোচ্চ মানের সেবা প্রদান করা হবে। আমাদের লক্ষ্য হলো একটি দুর্নীতিমুক্ত, দক্ষ ও জবাবদিহিতামূলক প্রশাসন গড়ে তোলা।",
    contact: {
      phone: "০১৭১XXXXXXXX",
      email: "mayor.bagharpara@gov.bd",
      officeEmail: "admin@bagharpara-municipality.gov.bd"
    }
  };

  const handleSubmitMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS এর মাধ্যমে ইমেইল পাঠানো
      const emailData = {
        service_id: 'service_1y71ien',
        template_id: 'template_wq5f70q',
        user_id: 'fSjXpODKqMPktWl3S',
        template_params: {
          name: senderName,
          email: senderEmail,
          phone: senderPhone,
          message: message,
          date: new Date().toLocaleString('bn-BD', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        }
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert('আপনার বার্তা সফলভাবে পাঠানো হয়েছে। প্রশাসক দপ্তর থেকে শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।');
        
        // ফর্ম রিসেট
        setMessage('');
        setSenderName('');
        setSenderPhone('');
        setSenderEmail('');
      } else {
        throw new Error('ইমেইল পাঠানো ব্যর্থ হয়েছে');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('বার্তা পাঠানো ব্যর্থ হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
            মাননীয় প্রশাসকের দপ্তর
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in">
            জনসেবায় নিবেদিত - স্বচ্ছ ও জবাবদিহিতামূলক প্রশাসন
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-blue-50"></path>
          </svg>
        </div>
      </section>

      {/* প্রধান কন্টেন্ট */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* বাম পাশ - প্রশাসকের তথ্য */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                  <h2 className="text-3xl font-bold text-blue-800 mb-6">প্রশাসক সম্পর্কে</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">ব্যক্তিগত তথ্য</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-xl p-4">
                          <div className="text-sm text-blue-600 font-semibold mb-1">নাম</div>
                          <div className="text-lg font-bold text-blue-800">{administratorInfo.name}</div>
                        </div>
                        <div className="bg-cyan-50 rounded-xl p-4">
                          <div className="text-sm text-cyan-600 font-semibold mb-1">পদবী</div>
                          <div className="text-lg font-bold text-cyan-800">{administratorInfo.designation}</div>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4">
                          <div className="text-sm text-green-600 font-semibold mb-1">কার্যকাল</div>
                          <div className="text-lg font-bold text-green-800">{administratorInfo.tenure}</div>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4">
                          <div className="text-sm text-purple-600 font-semibold mb-1">যোগাযোগ</div>
                          <div className="text-lg font-bold text-purple-800">{administratorInfo.contact.phone}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">দর্শন ও লক্ষ্য</h3>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {administratorInfo.vision}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">যোগ্যতা ও অভিজ্ঞতা</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {administratorInfo.qualifications.map((qual, index) => (
                          <div key={index} className="flex items-center bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                              {index + 1}
                            </div>
                            <span className="text-gray-700 font-medium">{qual}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* প্রশাসক বরাবর বার্তা বক্স */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-blue-800 mb-6">প্রশাসক বরাবর বার্তা পাঠান</h2>
                  <p className="text-gray-600 mb-6">
                    আপনার মতামত, পরামর্শ, অভিযোগ বা কোনো সমস্যা সরাসরি প্রশাসক বরাবর লিখুন। আমরা আপনার বার্তার গুরুত্বের সাথে মূল্যায়ন করব।
                  </p>
                  
                  <form onSubmit={handleSubmitMessage} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          আপনার নাম <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="আপনার পূর্ণ নাম লিখুন"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          মোবাইল নম্বর <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={senderPhone}
                          onChange={(e) => setSenderPhone(e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="01XXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        ইমেইল ঠিকানা <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        আপনার বার্তা <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="আপনার বার্তা বিস্তারিত লিখুন... (পরামর্শ, অভিযোগ, বা কোনো সমস্যা)"
                      />
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <div className="flex items-start">
                        <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">
                          ℹ️
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-1">দ্রষ্টব্য:</h4>
                          <p className="text-blue-700 text-sm">
                            • আপনার বার্তা সরাসরি প্রশাসকের ইমেইলে পৌঁছাবে<br/>
                            • প্রয়োজনীয় তথ্য সহ বার্তা লিখলে দ্রুত সমাধান পাওয়া যাবে<br/>
                            • জরুরি ক্ষেত্রে সরাসরি ফোনে যোগাযোগের অনুরোধ করা হলো
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                          বার্তা পাঠানো হচ্ছে...
                        </>
                      ) : (
                        <>
                          <span>📨</span>
                          ইমেইলে বার্তা পাঠান
                          <span>→</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* ডান পাশ - প্রশাসকের ছবি ও যোগাযোগ */}
              <div className="space-y-6">
                {/* প্রশাসকের ছবি */}
                <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
                  <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-48 h-48 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-6xl font-bold">
                      {administratorInfo.name.split(' ')[2]?.charAt(0) || administratorInfo.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">{administratorInfo.name}</h3>
                  <p className="text-lg text-gray-600 mb-4">{administratorInfo.designation}</p>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="font-semibold text-blue-800 mb-1">জরুরি যোগাযোগ</div>
                      <div className="text-blue-600 font-bold text-lg">{administratorInfo.contact.phone}</div>
                    </div>
                    <div className="bg-cyan-50 rounded-xl p-4">
                      <div className="font-semibold text-cyan-800 mb-1">দপ্তর ইমেইল</div>
                      <div className="text-cyan-600 text-sm">{administratorInfo.contact.officeEmail}</div>
                    </div>
                  </div>
                </div>

                {/* কার্যকালীন সময় */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">কার্যকালীন সময়</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-semibold text-blue-800">শনি-বৃহস্পতি</span>
                      <span className="text-blue-600 font-medium">সকাল ৯টা - বিকাল ৫টা</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg">
                      <span className="font-semibold text-cyan-800">শুক্রবার</span>
                      <span className="text-cyan-600 font-medium">বিশ্রাম দিবস</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-semibold text-green-800">জনসভা দিন</span>
                      <span className="text-green-600 font-medium">রবিবার (সকাল ১০টা - ১২টা)</span>
                    </div>
                  </div>
                </div>

                {/* দ্রুত লিংক */}
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">দ্রুত লিংক</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-white/20 hover:bg-white/30 transition-colors py-3 rounded-lg font-semibold">
                      📄 নাগরিক সনদ আবেদন
                    </button>
                    <button className="w-full bg-white/20 hover:bg-white/30 transition-colors py-3 rounded-lg font-semibold">
                      🏠 হোল্ডিং ট্যাক্স পরিশোধ
                    </button>
                    <button className="w-full bg-white/20 hover:bg-white/30 transition-colors py-3 rounded-lg font-semibold">
                      📋 অভিযোগ দাখিল
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ফুটার */}
      <footer className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">মাননীয় প্রশাসকের দপ্তর</h3>
          <p className="text-blue-200 text-xl mb-2">বাঘারপাড়া পৌরসভা</p>
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
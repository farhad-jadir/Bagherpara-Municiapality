// app/about/history/components/TimelineSection.tsx
interface HistoricalEvent {
  year: string;
  title: string;
  description: string;
  significance: string;
}

export default function TimelineSection() {
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

  return (
    <section className="py-12 md:py-16 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">
          ঐতিহাসিক কালপঞ্জি (২০০২-বর্তমান)
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
            <div className="relative">
              <div className="space-y-8">
                {historicalEvents.map((event, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="flex-shrink-0 w-full md:w-32">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg p-3 text-center shadow-md">
                        <div className="text-lg md:text-xl font-bold">{event.year}</div>
                      </div>
                    </div>
                    
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
              
              <div className="hidden md:block absolute left-40 top-0 bottom-0 w-1 bg-amber-300 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
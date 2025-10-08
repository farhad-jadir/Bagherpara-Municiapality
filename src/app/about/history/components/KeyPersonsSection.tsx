// app/about/history/components/KeyPersonsSection.tsx
interface KeyPerson {
  name: string;
  role: string;
  period: string;
  contribution: string;
  image?: string;
}

export default function KeyPersonsSection() {
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

  return (
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
  );
}
// app/about/history/components/AchievementsSection.tsx
export default function AchievementsSection() {
  const achievements = [
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
  ];

  return (
    <section className="py-12 md:py-16 bg-white fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">
          ঐতিহাসিক সাফল্য ও অর্জন
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
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
  );
}
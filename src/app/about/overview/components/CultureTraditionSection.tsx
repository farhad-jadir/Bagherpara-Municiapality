// app/about/overview/components/CultureTraditionSection.tsx
export default function CultureTraditionSection() {
  const festivals = [
    { name: "বৈশাখী মেলা", desc: "বাংলা নববর্ষ উদযাপন" },
    { name: "চৈত্র সংক্রান্তি", desc: "বসন্ত বিদায় উৎসব" },
    { name: "নবান্ন উৎসব", desc: "নতুন ফসল কাটার উৎসব" },
    { name: "পূজা ও ঈদের মেলা", desc: "ধর্মীয় উৎসব" }
  ];

  const crafts = [
    { name: "মাটির শিল্প", desc: "স্থানীয় মৃৎশিল্প" },
    { name: "বাঁশের изделия", desc: "বাঁশের কারুশিল্প" },
    { name: "নকশী কাঁথা", desc: "পারম্পরিক সূচিশিল্প" },
    { name: "শোলার শিল্প", desc: "শোলার নানা изделия" }
  ];

  const foods = [
    "পাটালি গুড়ের পায়েস",
    "খেজুরের রস ও গুড়", 
    "স্থানীয় মাছের ভর্তা",
    "নানা ধরনের পিঠা"
  ];

  const musicTypes = [
    "ভাটিয়ালি গান",
    "জারি গান", 
    "বাউল গান",
    "লেটো গান"
  ];

  return (
    <section className="py-16 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">সংস্কৃতি ও ঐতিহ্য</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-6">উৎসব ও মেলা</h3>
            <div className="grid grid-cols-2 gap-4">
              {festivals.map((festival, index) => (
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
              {crafts.map((craft, index) => (
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
              {foods.map((food, index) => (
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
              {musicTypes.map((music, index) => (
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
  );
}
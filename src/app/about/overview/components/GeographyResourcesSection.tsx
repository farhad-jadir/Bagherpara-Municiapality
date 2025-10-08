// app/about/overview/components/GeographyResourcesSection.tsx
export default function GeographyResourcesSection() {
  const resources = [
    { name: "মৎস্য সম্পদ", icon: "🐟", desc: "নদী ও মাছের ভাণ্ডার" },
    { name: "কৃষিজ সম্পদ", icon: "🌾", desc: "উর্বর কৃষিজমি" },
    { name: "বনজ সম্পদ", icon: "🌳", desc: "বিভিন্ন প্রজাতির গাছ" },
    { name: "মৃত্তিকা সম্পদ", icon: "🏺", desc: "উচ্চমানের মাটি" }
  ];

  return (
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
                <span className="ml-4">উত্তরে যশোর সদর, দক্ষিণে চৌগাছা, পূর্বে ঝিকরগাছা, পশ্চিমে ভারত</span>
              </div>
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">নদ-নদী:</span>
                <span className="ml-4">ভৈরব, কপোতাক্ষ, হরি</span>
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
            {resources.map((resource, index) => (
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
  );
}
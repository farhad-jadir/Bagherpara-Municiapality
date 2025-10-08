// app/about/overview/components/TourismPlacesSection.tsx
export default function TourismPlacesSection() {
  const touristPlaces = [
    {
      name: "বাঘারপাড়া জমিদার বাড়ি",
      description: "ঐতিহাসিক জমিদার বাড়ি যা ব্রিটিশ আমলে নির্মিত",
      type: "ঐতিহাসিক স্থাপনা"
    },
    {
      name: "ভৈরব নদীর তীর",
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
      name: "কপোতাক্ষ নদ",
      description: "বিখ্যাত কপোতাক্ষ নদের অংশবিশেষ",
      type: "প্রাকৃতিক"
    }
  ];

  return (
    <section className="py-16 bg-white fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">পর্যটন ও দর্শনীয় স্থান</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {touristPlaces.map((place, index) => (
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
  );
}
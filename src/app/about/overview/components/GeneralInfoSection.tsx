// app/about/overview/components/GeneralInfoSection.tsx
export default function GeneralInfoSection() {
  const unions = [
    "বাঘারপাড়া সদর", "বাংলাবাড়ী", "জামজামি", "খোজপুর", "দড়িয়াপুর",
    "ফুলহরি", "বাহাদুরপুর", "নরিন্দ্রপুর", "জুগ্নি"
  ];

  return (
    <section className="py-16 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">সাধারণ তথ্য</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
              <div className="w-3 h-8 bg-green-500 rounded-full mr-3"></div>
              প্রতিষ্ঠা ও অবস্থান
            </h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">উপজেলা প্রতিষ্ঠা:</span>
                <span className="ml-4">১৯৮৩ সালে</span>
              </div>
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">জেলা:</span>
                <span className="ml-4">যশোর</span>
              </div>
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">বিভাগ:</span>
                <span className="ml-4">খুলনা</span>
              </div>
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">আয়তন:</span>
                <span className="ml-4">২১৬.৭০ বর্গ কিলোমিটার</span>
              </div>
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">জনসংখ্যা:</span>
                <span className="ml-4">প্রায় ১,৮০,০০০ (২০২২ সালের তথ্য অনুযায়ী)</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
              <div className="w-3 h-8 bg-green-500 rounded-full mr-3"></div>
              প্রশাসনিক কাঠামো
            </h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">উপজেলা:</span>
                <span className="ml-4">১টি</span>
              </div>
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">পৌরসভা:</span>
                <span className="ml-4">১টি</span>
              </div>
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">ইউনিয়ন:</span>
                <span className="ml-4">৯টি</span>
              </div>
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">মৌজা:</span>
                <span className="ml-4">১৪৯টি</span>
              </div>
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-32">গ্রাম:</span>
                <span className="ml-4">১৮৫টি</span>
              </div>
            </div>
          </div>
        </div>

        {/* ইউনিয়ন সমূহ */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">ইউনিয়ন সমূহ</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {unions.map((union, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl text-center hover:from-green-100 hover:to-blue-100 transition-all duration-300 border border-green-200">
                <span className="font-semibold text-green-800">{union}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
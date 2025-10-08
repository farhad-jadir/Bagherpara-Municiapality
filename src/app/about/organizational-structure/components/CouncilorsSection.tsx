// app/about/organizational-structure/components/CouncilorsSection.tsx
export default function CouncilorsSection() {
  const councilors = [
    { name: "মোঃ শহীদুল ইসলাম", ward: "১নং ওয়ার্ড", contact: "০১৭২XXXXXXX" },
    { name: "মোঃ জাহাঙ্গীর আলম", ward: "২নং ওয়ার্ড", contact: "০১৮২XXXXXXX" },
    { name: "মোঃ রবিউল ইসলাম", ward: "৩নং ওয়ার্ড", contact: "০১৯২XXXXXXX" },
    { name: "মোঃ সোহেল রানা", ward: "৪নং ওয়ার্ড", contact: "০১৬۲XXXXXXX" },
    { name: "মোঃ ইকবাল হোসেন", ward: "৫নং ওয়ার্ড", contact: "০১৫۲XXXXXXX" },
    { name: "মোঃ আলমগীর হোসেন", ward: "৬নং ওয়ার্ড", contact: "০১৩۲XXXXXXX" },
    { name: "মোঃ সাজ্জাদ হোসেন", ward: "৭নং ওয়ার্ড", contact: "০১৪۲XXXXXXX" },
    { name: "মোঃ নাজমুল হক", ward: "৮নং ওয়ার্ড", contact: "০১২۲XXXXXXX" },
    { name: "মোঃ আশরাফুল ইসলাম", ward: "৯নং ওয়ার্ড", contact: "০১১۲XXXXXXX" }
  ];

  return (
    <section className="py-16 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">কাউন্সিলরবৃন্দ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {councilors.map((councilor, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">{councilor.name}</h3>
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                  {councilor.ward}
                </div>
                <div className="text-gray-600 mb-4">
                  <div className="font-semibold">যোগাযোগ:</div>
                  <div>{councilor.contact}</div>
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                  যোগাযোগ করুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
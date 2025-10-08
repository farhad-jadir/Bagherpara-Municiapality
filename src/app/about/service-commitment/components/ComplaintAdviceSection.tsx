// app/about/service-commitment/components/ComplaintAdviceSection.tsx
export default function ComplaintAdviceSection() {
  return (
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
  );
}
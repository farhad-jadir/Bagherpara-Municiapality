// app/about/overview/components/HistoryHeritageSection.tsx
export default function HistoryHeritageSection() {
  return (
    <section className="py-16 bg-white fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">ইতিহাস ও ঐতিহ্য</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-6">ঐতিহাসিক পটভূমি</h3>
            <div className="space-y-4 text-gray-700">
              <p>বাঘারপাড়া উপজেলার ইতিহাস সমৃদ্ধ ও বর্ণাঢ্য। ব্রিটিশ শাসনামলে এটি যশোর জেলার একটি গুরুত্বপূর্ণ অঞ্চল ছিল। স্থানীয় কিংবদন্তি অনুসারে, এই অঞ্চলে এক সময় প্রচুর বাঘের উপদ্রব ছিল, যা থেকে &apos;বাঘারপাড়া&apos; নামটির উৎপত্তি হতে পারে।</p>
              
              <p>বাংলাদেশের মুক্তিযুদ্ধে বাঘারপাড়ার ভূমিকা উল্লেখযোগ্য। ১৯৭১ সালে এই এলাকায় পাকিস্তানি বাহিনীর বিরুদ্ধে বেশ কয়েকটি সম্মুখযুদ্ধ সংঘটিত হয়। স্থানীয় মুক্তিযোদ্ধারা এখানে সক্রিয়ভাবে অংশগ্রহণ করেন এবং অঞ্চলটিকে মুক্ত করতে গুরুত্বপূর্ণ ভূমিকা পালন করেন।</p>
              
              <p>১৯৮৩ সালে বাঘারপাড়া একটি পূর্ণাঙ্গ উপজেলা হিসেবে স্বীকৃতি পায়। এর পূর্বে এটি যশোর সদর উপজেলার অধীনস্থ একটি থানা ছিল।</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="text-xl font-bold text-blue-700 mb-4">ঐতিহাসিক ঘটনাবলী</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">১</span>
                  <span>ব্রিটিশ আমলে নীল চাষের জন্য খ্যাতি</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">২</span>
                  <span>১৯৭১ সালের মুক্তিযুদ্ধে সক্রিয় অংশগ্রহণ</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">৩</span>
                  <span>১৯৮৩ সালে উপজেলা হিসেবে প্রতিষ্ঠা</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
              <h4 className="text-xl font-bold text-yellow-700 mb-4">ঐতিহাসিক ব্যক্তিত্ব</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">১</span>
                  <span>মুক্তিযোদ্ধা কমান্ডার আব্দুল জব্বার</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">２</span>
                  <span>সাহিত্যিক ও শিক্ষাবিদ ড. আহসান হাবীব</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">３</span>
                  <span>সমাজসেবী রহিমউদ্দিন আহমেদ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// app/about/service-commitment/components/ServicesSection.tsx
export default function ServicesSection() {
  return (
    <section className="py-16 bg-white fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">প্রদত্ত সেবাসমূহ</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-lg p-2 mr-3">📄</span>
                নাগরিক সনদ ও সার্টিফিকেট
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  জন্ম নিবন্ধন সনদ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  মৃত্যু নিবন্ধন সনদ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  চারিত্রিক সনদ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  আয়ের সনদ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  বাসস্থানের সনদ
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                <span className="bg-green-100 text-green-800 rounded-lg p-2 mr-3">🏛️</span>
                ভূমি সংক্রান্ত সেবা
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  নামজারি সেবা
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  খতিয়ান ও দাগ নকল
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  মিউটেশন সেবা
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  ভূমি উন্নয়ন কর আদায়
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-800 rounded-lg p-2 mr-3">👨‍👩‍👧‍👦</span>
                সামাজিক সুরক্ষা সেবা
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  বয়স্ক ভাতা
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  বিধবা ভাতা
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  প্রতিবন্ধী ভাতা
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  মাতৃত্বকালীন ভাতা
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  কর্মসংস্থান সেবা
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-800 rounded-lg p-2 mr-3">🏥</span>
                স্বাস্থ্য ও শিক্ষা সেবা
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  স্বাস্থ্য সেবা ও পরামর্শ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  শিক্ষা বৃত্তি ও উপবৃত্তি
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  স্কুল ভর্তি সনদ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  স্বাস্থ্য সনদ প্রদান
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
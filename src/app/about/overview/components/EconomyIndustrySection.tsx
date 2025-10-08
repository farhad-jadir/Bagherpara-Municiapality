// app/about/overview/components/EconomyIndustrySection.tsx
export default function EconomyIndustrySection() {
  return (
    <section className="py-16 bg-white fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">অর্থনীতি ও শিল্প</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">অর্থনৈতিক কর্মকাণ্ড</h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
            বাঘারপাড়া মূলত একটি কৃষিপ্রধান অঞ্চল। এখানকার অর্থনীতি প্রধানত কৃষি, মৎস্য চাষ ও ক্ষুদ্র শিল্পের উপর নির্ভরশীল।
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="text-xl font-bold text-green-800 mb-4">কৃষি</h4>
              <ul className="space-y-2 text-gray-700">
                <li>ধান</li>
                <li>পাট</li>
                <li>গম</li>
                <li>আলু</li>
                <li>শাকসবজি</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 text-center">
              <div className="text-4xl mb-4">🐠</div>
              <h4 className="text-xl font-bold text-blue-800 mb-4">মৎস্য চাষ</h4>
              <ul className="space-y-2 text-gray-700">
                <li>রুই, কাতলা, মৃগেল</li>
                <li>শিং, মাগুর</li>
                <li>পাঙ্গাশ</li>
                <li>তেলাপিয়া</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-xl font-bold text-yellow-800 mb-4">শিল্প ও বাণিজ্য</h4>
              <ul className="space-y-2 text-gray-700">
                <li>চালকল</li>
                <li>তেলকল</li>
                <li>বরফকল</li>
                <li>সার কারখানা</li>
                <li>কুটির শিল্প</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-green-800 mb-4">বাজার ও হাটবাজার</h4>
            <div className="grid grid-cols-2 gap-3">
              {["বাঘারপাড়া বাজার", "বাংলাবাড়ী হাট", "জামজামি বাজার", "খোজপুর হাট"].map((market, index) => (
                <div key={index} className="bg-white rounded-lg p-3 text-center text-sm font-medium text-green-800">
                  {market}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">ব্যাংক ও আর্থিক প্রতিষ্ঠান</h4>
            <div className="grid grid-cols-2 gap-3">
              {["সোনালী ব্যাংক", "রূপালী ব্যাংক", "গ্রামীণ ব্যাংক", "ব্র্যাক ব্যাংক"].map((bank, index) => (
                <div key={index} className="bg-white rounded-lg p-3 text-center text-sm font-medium text-blue-800">
                  {bank}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
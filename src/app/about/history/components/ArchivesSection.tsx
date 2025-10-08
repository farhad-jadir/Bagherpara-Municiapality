// app/about/history/components/ArchivesSection.tsx
export default function ArchivesSection() {
  return (
    <section className="py-12 md:py-16 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">
          ঐতিহাসিক দলিল ও আর্কাইভ
        </h2>
        
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-amber-800 mb-4">সংরক্ষিত দলিল</h3>
              <ul className="space-y-3">
                {[
                  "প্রতিষ্ঠার আদেশপত্র (২০০২)",
                  "প্রথম নির্বাচনের রেকর্ড (২০০৩)",
                  "মূল ভূমি রেকর্ড",
                  "প্রথম বাজেট দলিল",
                  "উন্নয়ন প্রকল্পের নথি",
                  "নির্বাচনী দলিলপত্র"
                ].map((doc, index) => (
                  <li key={index} className="flex items-center text-sm md:text-base">
                    <span className="bg-amber-100 text-amber-800 rounded-lg p-1 mr-3">📄</span>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-amber-800 mb-4">ফটো আর্কাইভ</h3>
              <ul className="space-y-3">
                {[
                  "প্রথম পৌরসভা ভবন",
                  "ঐতিহাসিক স্থাপনা",
                  "উন্নয়ন কাজের ছবি",
                  "সামাজিক অনুষ্ঠান",
                  "প্রাক্তন মেয়রদের সংগ্রহ",
                  "নির্বাচনী প্রচারণা"
                ].map((photo, index) => (
                  <li key={index} className="flex items-center text-sm md:text-base">
                    <span className="bg-amber-100 text-amber-800 rounded-lg p-1 mr-3">🖼️</span>
                    <span className="text-gray-700">{photo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-amber-800 text-sm md:text-base text-center">
              <strong>আর্কাইভ পরিদর্শন:</strong> গবেষক ও আগ্রহী ব্যক্তিগণ পূর্বানুমতি সাপেক্ষে ঐতিহাসিক দলিল পরিদর্শন করতে পারেন।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
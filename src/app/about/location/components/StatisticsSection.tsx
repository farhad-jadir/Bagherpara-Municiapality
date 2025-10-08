// app/about/location/components/StatisticsSection.tsx
export default function StatisticsSection() {
  return (
    <section className="py-12 md:py-16 bg-white fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-8 md:mb-12">
          সমষ্টিগত পরিসংখ্যান
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {[
            {
              title: "মোট জনসংখ্যা",
              value: "১,৪০,১০০",
              description: "৯টি ওয়ার্ডে মোট",
              color: "green"
            },
            {
              title: "মোট পরিবার",
              value: "৩২,১৫০",
              description: "গড়ে ৪.৩ সদস্য/পরিবার",
              color: "blue"
            },
            {
              title: "মোট আয়তন",
              value: "৩৩.৫",
              description: "বর্গ কিলোমিটার",
              color: "purple"
            },
            {
              title: "গড় ঘনত্ব",
              value: "৪,১৮২",
              description: "প্রতি বর্গ কিমিতে",
              color: "orange"
            }
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 text-center border border-green-200">
              <div className={`text-2xl md:text-3xl font-bold text-${stat.color}-600 mb-2`}>
                {stat.value}
              </div>
              <div className="font-semibold text-green-800 text-sm md:text-base mb-1">
                {stat.title}
              </div>
              <div className="text-xs text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
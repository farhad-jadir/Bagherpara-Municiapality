// app/about/service-commitment/components/ServiceTimelineSection.tsx
export default function ServiceTimelineSection() {
  const services = [
    {
      service: "জন্ম নিবন্ধন সনদ",
      time: "৭ কার্যদিবস",
      documents: "জন্ম সনদ, মাতা-পিতার জাতীয়তা সনদ"
    },
    {
      service: "চারিত্রিক সনদ",
      time: "১০ কার্যদিবস",
      documents: "২ কপি পাসপোর্ট সাইজ ছবি, আবেদন ফর্ম"
    },
    {
      service: "আয়ের সনদ",
      time: "৫ কার্যদিবস",
      documents: "জাতীয় পরিচয়পত্র, আবেদন ফর্ম"
    },
    {
      service: "বাসস্থানের সনদ",
      time: "৭ কার্যদিবস",
      documents: "ইউটিলিটি বিল, ভোটার আইডি"
    },
    {
      service: "নামজারি সেবা",
      time: "৩০ কার্যদিবস",
      documents: "দলিল, খতিয়ান, ট্যাক্স রসিদ"
    },
    {
      service: "বয়স্ক ভাতা",
      time: "১৫ কার্যদিবস",
      documents: "বয়স প্রমাণ, জাতীয় পরিচয়পত্র"
    }
  ];

  return (
    <section className="py-16 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">সেবা প্রাপ্তির সময়সীমা</h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-4 font-bold text-blue-800 border-b">সেবার নাম</th>
                  <th className="p-4 font-bold text-blue-800 border-b">সর্বোচ্চ সময়সীমা</th>
                  <th className="p-4 font-bold text-blue-800 border-b">প্রয়োজনীয় কাগজপত্র</th>
                </tr>
              </thead>
              <tbody>
                {services.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-blue-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-800">{item.service}</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {item.time}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{item.documents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
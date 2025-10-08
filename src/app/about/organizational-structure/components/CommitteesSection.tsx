// app/about/organizational-structure/components/CommitteesSection.tsx
export default function CommitteesSection() {
  return (
    <section className="py-16 bg-white fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">কমিটি ও সাব-কমিটি</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "অর্থ কমিটি",
              chairperson: "মোঃ শহীদুল ইসলাম",
              members: "৫ জন",
              responsibility: "বাজেট ও অর্থ ব্যবস্থাপনা"
            },
            {
              name: "পরিকল্পনা কমিটি",
              chairperson: "মোঃ জাহাঙ্গীর আলম",
              members: "৪ জন",
              responsibility: "নগর উন্নয়ন পরিকল্পনা"
            },
            {
              name: "স্বাস্থ্য কমিটি",
              chairperson: "মোঃ রবিউল ইসলাম",
              members: "৪ জন",
              responsibility: "স্বাস্থ্য সেবা ব্যবস্থাপনা"
            },
            {
              name: "শিক্ষা কমিটি",
              chairperson: "মোঃ সোহেল রানা",
              members: "৩ জন",
              responsibility: "শিক্ষা ব্যবস্থাপনা"
            },
            {
              name: "ক্রীড়া ও সংস্কৃতি",
              chairperson: "মোঃ ইকবাল হোসেন",
              members: "৩ জন",
              responsibility: "সাংস্কৃতিক কার্যক্রম"
            },
            {
              name: "পরিবেশ কমিটি",
              chairperson: "মোঃ আলমগীর হোসেন",
              members: "৪ জন",
              responsibility: "পরিবেশ সংরক্ষণ"
            },
            {
              name: "কর্মকর্তা ব্যবস্থাপনা",
              chairperson: "মোঃ সাজ্জাদ হোসেন",
              members: "৩ জন",
              responsibility: "কর্মকর্তা-কর্মচারী"
            },
            {
              name: "ক্রয় কমিটি",
              chairperson: "মোঃ নাজমুল হক",
              members: "৪ জন",
              responsibility: "ক্রয় ও সরবরাহ"
            }
          ].map((committee, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-purple-800 mb-3">{committee.name}</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">সভাপতি:</span>
                  <span>{committee.chairperson}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">সদস্য:</span>
                  <span>{committee.members}</span>
                </div>
                <div>
                  <span className="font-semibold">দায়িত্ব:</span>
                  <p className="mt-1 text-gray-600">{committee.responsibility}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
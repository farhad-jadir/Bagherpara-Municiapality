// app/about/service-commitment/components/OurCommitmentSection.tsx
export default function OurCommitmentSection() {
  const commitments = [
    {
      icon: "⚡",
      title: "দ্রুত সেবা",
      description: "সকল ধরনের সেবা নির্ধারিত সময়ের মধ্যে প্রদান করা হবে"
    },
    {
      icon: "🔍",
      title: "স্বচ্ছতা",
      description: "সেবা প্রক্রিয়া সম্পূর্ণ স্বচ্ছ ও পর্যবেক্ষণযোগ্য হবে"
    },
    {
      icon: "👥",
      title: "সুবিধাবঞ্চিতদের অগ্রাধিকার",
      description: "দুস্থ ও সুবিধাবঞ্চিত জনগোষ্ঠীকে অগ্রাধিকার ভিত্তিতে সেবা প্রদান"
    },
    {
      icon: "💼",
      title: "জবাবদিহিতা",
      description: "সেবা প্রদানকারী কর্মকর্তাদের জবাবদিহিতা নিশ্চিত করা"
    },
    {
      icon: "📱",
      title: "ডিজিটাল সেবা",
      description: "ডিজিটাল পদ্ধতিতে সেবা প্রদান ও তথ্য প্রাপ্তি সহজীকরণ"
    },
    {
      icon: "🤝",
      title: "জনগণের অংশগ্রহণ",
      description: "সেবা উন্নয়নে জনগণের মতামত ও অংশগ্রহণ নিশ্চিত করা"
    }
  ];

  return (
    <section className="py-16 fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">আমাদের প্রতিশ্রুতি</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            বাঘারপাড়া উপজেলা প্রশাসন জনসাধারণের সেবায় নিবেদিত। আমরা প্রতিশ্রুতিবদ্ধ যে আমাদের সকল সেবা 
            দ্রুত, স্বচ্ছ ও জবাবদিহিতামূলক হবে। নিম্নলিখিত ক্ষেত্রে আমাদের প্রতিশ্রুতি:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="text-4xl mb-4">{commitment.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">{commitment.title}</h3>
              <p className="text-gray-600">{commitment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
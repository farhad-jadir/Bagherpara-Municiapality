// app/services/trade-license/components/ProcessSection.tsx
interface ProcessSectionProps {
  type: "new" | "renew";
}

export default function ProcessSection({ type }: ProcessSectionProps) {
  const newProcessSteps = [
    {
      step: 1,
      title: "আবেদন ফর্ম সংগ্রহ",
      description: "পৌরসভা অফিস থেকে আবেদন ফর্ম সংগ্রহ করুন অথবা ওয়েবসাইট থেকে ডাউনলোড করুন"
    },
    {
      step: 2,
      title: "প্রয়োজনীয় কাগজপত্র জমা",
      description: "জাতীয় পরিচয়পত্র, ব্যবসার ঠিকানা প্রমাণ, ট্যাক্স সার্টিফিকেট ইত্যাদি"
    },
    {
      step: 3,
      title: "ফি জমা",
      description: "নির্ধারিত ফি পৌরসভার ট্রেজারিতে জমা দিন"
    },
    {
      step: 4,
      title: "পরিদর্শন ও অনুমোদন",
      description: "পৌরসভার কর্মকর্তা ব্যবসার স্থান পরিদর্শন করবেন এবং অনুমোদন দেবেন"
    },
    {
      step: 5,
      title: "লাইসেন্স ইস্যু",
      description: "সমস্ত প্রক্রিয়া সম্পন্ন হলে ট্রেড লাইসেন্স ইস্যু করা হবে"
    }
  ];

  const renewProcessSteps = [
    {
      step: 1,
      title: "নবায়ন ফর্ম সংগ্রহ",
      description: "পৌরসভা অফিস থেকে নবায়ন ফর্ম সংগ্রহ করুন"
    },
    {
      step: 2,
      title: "পুরাতন লাইসেন্স ও অন্যান্য কাগজ",
      description: "পুরাতন লাইসেন্স ও প্রয়োজনীয় কাগজপত্র জমা দিন"
    },
    {
      step: 3,
      title: "নবায়ন ফি জমা",
      description: "নির্ধারিত নবায়ন ফি পৌরসভার ট্রেজারিতে জমা দিন"
    },
    {
      step: 4,
      title: "নবায়ন লাইসেন্স প্রাপ্তি",
      description: "ফি জমা দেওয়ার পর নতুন লাইসেন্স ইস্যু করা হবে"
    }
  ];

  const steps = type === "new" ? newProcessSteps : renewProcessSteps;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </span>
        {type === "new" ? "নতুন লাইসেন্স ইস্যু প্রক্রিয়া" : "লাইসেন্স নবায়ন প্রক্রিয়া"}
      </h2>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.step} className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                type === "new" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
              } font-bold`}>
                {step.step}
              </div>
              {index < steps.length - 1 && (
                <div className="w-1 h-full bg-gray-300 mt-2"></div>
              )}
            </div>
            <div className="flex-1 pb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
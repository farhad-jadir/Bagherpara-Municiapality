// app/faq/general/page.tsx
export default function GeneralFaq() {
  const faqs = [
    {
      question: "বাঘারপাড়া পৌরসভার সেবা কীভাবে পেতে পারি?",
      answer: "আপনি আমাদের ওয়েবসাইট থেকে অনলাইনে আবেদন করতে পারেন অথবা সরাসরি পৌরসভা অফিসে এসে আবেদন করতে পারেন।"
    },
    {
      question: "হোল্ডিং ট্যাক্স কীভাবে প্রদান করবেন?",
      answer: "হোল্ডিং ট্যাক্স অনলাইন through our portal or at the municipal office during working hours."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">সাধারণ প্রশ্নোত্তর</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
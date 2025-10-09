// app/services/trade-license/components/FAQSection.tsx
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "ট্রেড লাইসেন্স কি এবং কেন প্রয়োজন?",
      answer: "ট্রেড লাইসেন্স হলো একটি আইনগত অনুমতিপত্র যা কোনো নির্দিষ্ট এলাকায় ব্যবসা পরিচালনার জন্য পৌরসভা কর্তৃক ইস্যু করা হয়। এটি ব্যবসার বৈধতা প্রমাণ করে এবং স্থানীয় সরকারের রাজস্ব বৃদ্ধিতে সহায়ক।"
    },
    {
      question: "ট্রেড লাইসেন্সের মেয়াদ কতদিন?",
      answer: "ট্রেড লাইসেন্স সাধারণত এক বছরের জন্য ইস্যু করা হয়। প্রতি বছর নির্দিষ্ট সময়ের মধ্যে নবায়ন করতে হয়।"
    },
    {
      question: "আবেদন জমা দেওয়ার পর লাইসেন্স পেতে কতদিন সময় লাগে?",
      answer: "সাধারণত সকল কাগজপত্র সঠিকভাবে জমা দিলে ৭ থেকে ১০ কার্যদিবসের মধ্যে লাইসেন্স ইস্যু করা হয়।"
    },
    {
      question: "ট্রেড লাইসেন্স নবায়ন না করলে কী শাস্তি আছে?",
      answer: "ট্রেড লাইসেন্স নবায়ন না করলে জরিমানা দিতে হতে পারে এবং ব্যবসা বন্ধ পর্যন্ত হতে পারে।"
    },
    {
      question: "ব্যবসার ঠিকানা পরিবর্তন করলে কী করতে হবে?",
      answer: "ব্যবসার ঠিকানা পরিবর্তন করলে নতুন করে ট্রেড লাইসেন্সের জন্য আবেদন করতে হবে। পুরাতন লাইসেন্স বাতিল বলে গণ্য হবে।"
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        সাধারণ প্রশ্ন ও উত্তর
      </h2>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-500 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
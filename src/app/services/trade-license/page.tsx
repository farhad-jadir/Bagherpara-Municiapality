// app/services/trade-license/page.tsx
"use client";

import { useState } from "react";


export default function TradeLicensePage() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">ট্রেড লাইসেন্স</h1>

      {/* ফি ক্যালকুলেটর খোলার বাটন */}
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setIsCalculatorOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          ফি ক্যালকুলেটর খুলুন
        </button>
      </div>

      {/* FeeCalculator Modal */}
      
      {/* ট্রেড লাইসেন্স সম্পর্কে তথ্য */}
      <div className="space-y-6 max-w-3xl mx-auto text-gray-700">
        <p>
          ট্রেড লাইসেন্স হলো সরকারি অনুমোদন যা কোনো ব্যবসা বা সেবা প্রদানকারী প্রতিষ্ঠানকে
          আইনসম্মতভাবে ব্যবসা পরিচালনার সুযোগ দেয়। এটি পাবলিক ও প্রাইভেট উভয় ধরনের ব্যবসার
          জন্য আবশ্যক।
        </p>
        <p>
          লাইসেন্সের মেয়াদ সাধারণত ১ থেকে ৫ বছর পর্যন্ত হতে পারে। নবায়নের ক্ষেত্রে ১০% ছাড়
          প্রযোজ্য।
        </p>
        <p>
          ফি ক্যালকুলেটরের মাধ্যমে আপনি আপনার ব্যবসার ধরন, আকার, লাইসেন্সের ধরন এবং মেয়াদ
          অনুযায়ী স্বয়ংক্রিয়ভাবে ফি হিসাব করতে পারবেন।
        </p>
        <p>
          অনলাইনে আবেদন করলে অতিরিক্ত ৫% ছাড় পাওয়া যায়। লাইসেন্স ইস্যুর জন্য ফি পরিশোধের ২৪
          ঘন্টার মধ্যে লাইসেন্স ইস্যু করা হয়।
        </p>

        {/* সাধারণ টিপস */}
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <h2 className="font-semibold text-yellow-800 mb-2">সুবিধা ও টিপস</h2>
          <ul className="list-disc list-inside space-y-1 text-yellow-900 text-sm">
            <li>অনলাইনে আবেদন করলে অতিরিক্ত ৫% ছাড় পাবেন।</li>
            <li>ফি VAT ও অন্যান্য ট্যাক্স অন্তর্ভুক্ত।</li>
            <li>লাইসেন্স ইস্যুর জন্য ফি পরিশোধের ২৪ ঘন্টার মধ্যে লাইসেন্স ইস্যু করা হয়।</li>
            <li>আবেদন করার পর আপনার তথ্য সংরক্ষিত হবে।</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

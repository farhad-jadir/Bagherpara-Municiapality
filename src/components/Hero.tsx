"use client";

import { FaFilePdf } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left side: Title + Description */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            বাঘারপাড়া পৌরসভা
          </h1>
          <p className="text-lg mb-6">
            নাগরিক সেবা, আইন-নীতিমালা, পরিকল্পনা ও যোগাযোগ সম্পর্কিত সকল তথ্য এখানে পাওয়া যাবে।
          </p>
          <Link
            href="/"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            আরও জানুন →
          </Link>
        </div>

        {/* Right side: Office Orders Table */}
        <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
            <h2 className="text-lg font-semibold">📑 অফিস আদেশ</h2>
          </div>

          <table className="w-full text-sm md:text-base">
            <thead className="bg-gray-50">
              <tr>
                <th className="border px-3 py-2">ক্রমিক</th>
                <th className="border px-3 py-2">শিরোনাম</th>
                <th className="border px-3 py-2">তারিখ</th>
                <th className="border px-3 py-2">ডাউনলোড</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border px-3 py-2 text-center">১</td>
                <td className="border px-3 py-2">
                  বাঘারপা উপজেলার নবাগত উপজেলা ভূমি কমিশনার জনাব মাহির দেওয়ান বাঘারপাড়া পৌরসভার প্রশাসক হিসেবে দায়িত্ব পালন করবেন।
                </td>
                <td className="border px-3 py-2 text-center">২৬-০৮-২০২৫</td>
                <td className="border px-3 py-2 text-center">
                  <FaFilePdf className="text-red-600 text-xl mx-auto cursor-pointer" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-3 py-2 text-center">২</td>
                <td className="border px-3 py-2">
                  বাঘারপাড়া পৌরসভার ওয়েবসাইট ডিজাইনের জন্য ফরহাদ হোসেন জনিকে দায়িত্ব দিয়েছেন বাঘারপাড়া উপজেলা প্রশাসক জনাব শোভন সরকার
                </td>
                <td className="border px-3 py-2 text-center">২৬-০৮-২০২৫</td>
                <td className="border px-3 py-2 text-center">
                  <FaFilePdf className="text-red-600 text-xl mx-auto cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="bg-gray-100 px-4 py-2 text-right">
            <Link
              href="/office-orders"
              className="text-green-700 font-medium hover:underline"
            >
              সব অফিস আদেশ →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

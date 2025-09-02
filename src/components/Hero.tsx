"use client";

import { FaFilePdf } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const officeOrders = [
    {
      id: 1,
      title: "বাঘারপা উপজেলার নবাগত উপজেলা ভূমি কমিশনার জনাব মাহির দেওয়ান বাঘারপাড়া পৌরসভার প্রশাসক হিসেবে দায়িত্ব পালন করবেন।",
      date: "২৬-০৮-২০২৫",
      pdfLink: "/pdfs/order1.pdf",
    },
    {
      id: 2,
      title: "বাঘারপাড়া পৌরসভার ওয়েবসাইট ডিজাইনের জন্য ফরহাদ হোসেন জনিকে দায়িত্ব দিয়েছেন বাঘারপাড়া উপজেলা প্রশাসক জনাব শোভন সরকার",
      date: "২৬-০৮-২০২৫",
      pdfLink: "/pdfs/order2.pdf",
    },
  ];

  return (
    <section className="relative bg-live-gradienttow text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left side: Title + Description */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            বাঘারপাড়া পৌরসভা
          </h1>
          <p className="text-lg mb-6">
            নাগরিক সেবা, আইন-নীতিমালা, পরিকল্পনা ও যোগাযোগ সম্পর্কিত সকল তথ্য এখানে পাওয়া যাবে।
          </p>
          <Link
              href="/nagoric"
              className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition">
              আপনার নাগরিক তথ্য দিন
          </Link>

        </div>

        {/* Right side: Office Orders */}
        <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block">
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
                {officeOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="border px-3 py-2 text-center">{order.id}</td>
                    <td className="border px-3 py-2">{order.title}</td>
                    <td className="border px-3 py-2 text-center">{order.date}</td>
                    <td className="border px-3 py-2 text-center">
                      <FaFilePdf className="text-red-600 text-xl mx-auto cursor-pointer" />
                    </td>
                  </tr>
                ))}
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

          {/* Mobile Cards */}
          <div className="md:hidden p-4 space-y-4">
            {officeOrders.map((order) => (
              <div
                key={order.id}
                className="bg-gray-50 p-4 rounded-lg shadow flex flex-col"
              >
                <p className="text-black text-sm mb-2">{order.title}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-xs">{order.date}</span>
                  <FaFilePdf className="text-red-600 text-lg cursor-pointer" />
                </div>
              </div>
            ))}
            <div className="text-right">
              <Link
                href="/office-orders"
                className="text-green-700 font-medium hover:underline text-sm"
              >
                সব অফিস আদেশ →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

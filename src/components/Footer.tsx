"use client";

import Link from "next/link";

interface Route {
  name: string;
  path: string;
}

const routes: Route[] = [
  { name: "হোম", path: "/" },
  { name: "আমাদের সম্পর্কে", path: "/about" },
  { name: "ভিশন", path: "/vision" },
  { name: "যোগাযোগ", path: "/contact" },
  { name: "অফিস আদেশ", path: "/orders" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            বাঘারপাড়া পৌরসভা
          </h2>
          <p className="text-sm">
            নাগরিক সেবা, আইন-নীতিমালা, পরিকল্পনা ও যোগাযোগ সম্পর্কিত তথ্য এখানে পাওয়া যাবে।
          </p>
        </div>

        {/* Middle: Dynamic Routes */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">রুটসমূহ</h3>
          <ul className="space-y-2">
            {routes.map((route, i) => (
              <li key={i}>
                <Link
                  href={route.path}
                  className="hover:text-white transition"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">যোগাযোগ</h3>
          <p className="text-sm">📍 বাঘারপাড়া পৌরসভা</p>
          <p className="text-sm">☎️ ০১৭xxxxxxxx</p>
          <p className="text-sm">✉️ info@bpm.gov.bd</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-3 text-sm text-gray-400">
        © {new Date().getFullYear()} বাঘারপাড়া পৌরসভা | সর্বস্বত্ব সংরক্ষিত
      </div>
    </footer>
  );
}

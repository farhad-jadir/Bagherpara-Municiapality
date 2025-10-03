"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const municipalCoordinates = {
    lat: 23.22024722611398,
    lng: 89.34913694563538,
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const googleMapsLink = `https://www.google.com/maps?q=${municipalCoordinates.lat},${municipalCoordinates.lng}`;

  const teamMembers = [
    { 
      id: 1, 
      name: "ফরহাদ হোসেন জনি", 
      role: "ফুলস্ট্যাক ডেভেলপার", 
      img: "/images/jony.png",
    },
    { 
      id: 2, 
      name: "আলিমুজ্জামান", 
      role: "ফ্রন্টএন্ড ডেভেলপার", 
      img: "/images/jony.png",
    },
  ];

  if (!mounted) {
    return (
      <footer className="bg-gray-950 text-gray-300 mt-4 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="animate-pulse">লোডিং...</div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-950 text-gray-300 mt-4 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left - About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 tracking-wide">
            বাঘারপাড়া পৌরসভা
          </h2>
          <p className="text-sm leading-relaxed text-gray-400 mb-4">
            নাগরিক সেবা, আইন-নীতিমালা, পরিকল্পনা ও যোগাযোগ সম্পর্কিত তথ্য এখানে পাওয়া যাবে।
          </p>
          
          <div className="text-xs text-gray-500">
            <p>ইমেইল: info@bagharaparamunicipality.gov.bd</p>
            <p>ফোন: +৮৮০ XXX-XXXXXXX</p>
          </div>
        </div>

        {/* Middle: IT Team */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">আইটি বিভাগ</h3>
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group text-center p-3 bg-gray-900 rounded-lg shadow hover:shadow-lg hover:bg-gray-800 transition-all duration-300"
              >
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={70}
                    height={70}
                    className="rounded-full object-cover border-2 border-gray-700 group-hover:border-green-500 transition"
                  />
                </div>
                <p className="text-sm font-medium text-white mb-1">{member.name}</p>
                <p className="text-xs text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Location / Map */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">লোকেশন</h3>
          <div className="w-full h-44 rounded-xl overflow-hidden shadow-lg border border-gray-800 bg-gray-800">
            {apiKey ? (
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Bagherpara+Municipality,Jashore,Bangladesh&center=${municipalCoordinates.lat},${municipalCoordinates.lng}&zoom=15`}
                title="বাঘারপাড়া পৌরসভা লোকেশন"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                ম্যাপ লোড করতে সমস্যা হচ্ছে
              </div>
            )}
          </div>
          
          {/* Solution 1: inline-block এর পরিবর্তে inline-flex ব্যবহার */}
          <Link
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-3 text-sm font-medium text-green-400 hover:text-green-300 transition"
          >
            গুগল ম্যাপে দেখুন
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>

          {/* Solution 2: শুধু block ব্যবহার (যদি পুরো width নেয়) */}
          {/* <Link
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-sm font-medium text-green-400 hover:text-green-300 transition w-fit"
          >
            গুগল ম্যাপে দেখুন →
          </Link> */}

          {/* Solution 3: inline-block থাকতে দিলে (সবচেয়ে সহজ) */}
          {/* <Link
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-sm font-medium text-green-400 hover:text-green-300 transition"
          >
            গুগল ম্যাপে দেখুন →
          </Link> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} বাঘারপাড়া পৌরসভা | সর্বস্বত্ব সংরক্ষিত
      </div>
    </footer>
  );
}
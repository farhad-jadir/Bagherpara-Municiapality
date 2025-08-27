// components/LawsSubmenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
}

export default function LawsSubmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const submenuItems: SubmenuItem[] = [
    { title: "বাংলাদেশ গেজেট", href: "/laws/bangladesh-gazette" },
    { title: "আইন ও বিধিমালা", href: "/laws/rules-regulations" },
    { title: "নীতিমালা", href: "/laws/policies" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 transition-all duration-300 hover:border-b-2 hover:border-red-600 hover:text-red-600 focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        আইন ও নীতিমালা
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            {submenuItems.map((item: SubmenuItem) => (
              <Link
                key={item.title}
                href={item.href}
                className="block px-4 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
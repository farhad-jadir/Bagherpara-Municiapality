// components/FormsSubmenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  href: string;
}

export default function FormsSubmenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const submenuItems: SubmenuItem[] = [
    { title: "ফরমসমূহ", href: "/forms/all-forms" },
    { title: "ফরমস পোর্টাল", href: "/forms/portal" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 transition-all duration-300 hover:border-b-2 hover:border-red-600 hover:text-red-600 focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        ফরম
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
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
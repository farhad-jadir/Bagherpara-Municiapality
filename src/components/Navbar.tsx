// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AboutSubmenu from "./AboutSubmenu";
import OfficersSubmenu from "./OfficersSubmenu";
import ServicesSubmenu from "./ServicesSubmenu";
import LawsSubmenu from "./LawsSubmenu";
import FormsSubmenu from "./FormsSubmenu";
import GallerySubmenu from "./GallerySubmenu";
import ContactSubmenu from "./ContactSubmenu";
import FaqSubmenu from "./FaqSubmenu";
import PlansSubmenu from "./PlansSubmenu";
import Logo from "./Logo";
import { Globe, Menu, X } from "lucide-react";

interface MenuItem {
  title: string;
  href: string;
}

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [language, setLanguage] = useState<"bn" | "en">("bn");
  const router = useRouter();

  const menuItems: MenuItem[] = [];

  const categoryItems = [
    { title: "অফিসের খবর", href: "/office-news" },
    { title: "নোটিশ", href: "/notices" },
    { title: "টেন্ডার", href: "/tenders" },
    { title: "নিয়োগ", href: "/recruitment" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "bn" ? "en" : "bn");
  };

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* 🔹 Main Header with Logo Background */}
      <div className="relative w-full">
        {/* Logo as Background */}
        <div className="w-full">
          <Logo />
        </div>

        {/* 🔹 Hamburger Button on top of Logo */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden absolute top-10 right-4 z-20 bg-white/10 rounded-full p-2 shadow-md text-white hover:bg-purple-800 transition"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Main Navigation */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-800 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center space-x-1 py-3">
            <li><AboutSubmenu /></li>
            <li><OfficersSubmenu /></li>
            <li><ServicesSubmenu /></li>
            <li><LawsSubmenu /></li>
            <li><FormsSubmenu /></li>
            <li><GallerySubmenu /></li>
            <li><ContactSubmenu /></li>
            <li><FaqSubmenu /></li>
            <li><PlansSubmenu /></li>

            {menuItems.map((item: MenuItem) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-white hover:bg-purple-600 rounded-lg transition-all duration-200 ${
                    active === item.href ? "bg-purple-600 font-semibold" : ""
                  }`}
                  onClick={() => setActive(item.href)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white rounded-lg shadow-xl mt-2 p-4 relative z-30">
              <div className="space-y-2">
                <div className="border-b pb-2 bg-pink-800"><AboutSubmenu /></div>
                <div className="border-b pb-2 bg-pink-800"><OfficersSubmenu /></div>
                <div className="border-b pb-2 bg-pink-800"><ServicesSubmenu /></div>
                <div className="border-b pb-2 bg-pink-800"><LawsSubmenu /></div>
                <div className="border-b pb-2 bg-pink-800"><FormsSubmenu /></div>
                <div className="border-b pb-2 bg-pink-800"><GallerySubmenu /></div>
                <div className="border-b pb-2 bg-pink-800"><ContactSubmenu /></div>
                <div className="border-b pb-2 bg-pink-800"><FaqSubmenu /></div>
                <div className="border-b pb-2 bg-pink-800"><PlansSubmenu /></div>

                {menuItems.map((item: MenuItem) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                      active === item.href
                        ? "bg-purple-100 text-purple-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setActive(item.href);
                      setMenuOpen(false);
                    }}
                  >
                    {item.title}
                  </Link>
                ))}

                {/* 🌐 Language in Mobile */}
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                >
                  <Globe size={16} />
                  {language === "bn" ? "English" : "বাংলা"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

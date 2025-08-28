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
import { Search, Globe, Menu, X } from "lucide-react";

interface MenuItem {
  title: string;
  href: string;
}

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("অফিসের খবর");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { title: "জরুরী যোগাযোগ", href: "/contact" },
    { title: "FAQ", href: "/faq" },
    { title: "পরিকল্পনা", href: "/plans" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (): void => {
    if (query.trim()) {
      router.push(`/search?query=${query}&type=${category}`);
      setQuery("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className={`w-full  transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
      {/* 🔹 Top Header with Search */}
      <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* বাংলাদেশ জাতীয় তথ্য বাতায়ন */}
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="font-normal text-sm md:text-base animate-pulse">
                বাংলাদেশ জাতীয় তথ্য বাতায়ন
              </span>
            </div>

            {/* Search Section */}
            <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
              <div className="flex items-center bg-white rounded-lg overflow-hidden w-full md:w-auto">
                {/* Category Select */}
                <select
                  value={category}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
                  className="bg-gray-100 text-gray-700 px-3 py-2 border-r border-gray-300 focus:outline-none text-sm"
                >
                  <option value="অফিসের খবর">অফিসের খবর</option>
                  <option value="নোটিশ">নোটিশ</option>
                  <option value="টেন্ডার">টেন্ডার</option>
                  <option value="নিয়োগ">নিয়োগ</option>
                </select>

                {/* Search Input */}
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="খুঁজুন..."
                    value={query}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full px-4 py-2 text-gray-800 focus:outline-none text-sm"
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </div>

              {/* Language Button */}
              <button className="flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                <Globe size={16} />
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Main Header with Logo */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Title */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-lg">বাপ</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                  বাঘারপাড়া পৌরসভা
                </h1>
                <p className="text-sm text-gray-600">Bagharapara Municipality</p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navigation */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-800 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center space-x-1 py-3">
            <li>
              <AboutSubmenu />
            </li>
            <li>
              <OfficersSubmenu />
            </li>
            <li>
              <ServicesSubmenu />
            </li>
            <li>
              <LawsSubmenu />
            </li>
            <li>
              <FormsSubmenu />
            </li>
            <li>
              <GallerySubmenu />
            </li>

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
            <div className="md:hidden bg-white rounded-lg shadow-xl mt-2 p-4">
              <div className="space-y-2">
                <div className="border-b pb-2">
                  <AboutSubmenu />
                </div>
                <div className="border-b pb-2">
                  <OfficersSubmenu />
                </div>
                <div className="border-b pb-2">
                  <ServicesSubmenu />
                </div>
                <div className="border-b pb-2">
                  <LawsSubmenu />
                </div>
                <div className="border-b pb-2">
                  <FormsSubmenu />
                </div>
                <div className="border-b pb-2">
                  <GallerySubmenu />
                </div>

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
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
import { Menu, X } from "lucide-react";

interface MenuItem {
  title: string;
  href: string;
}

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const menuItems: MenuItem[] = [];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 যখন সাবমেনু থেকে কিছু সিলেক্ট হবে তখন মোবাইল মেনু হাইড করবে
  const handleSubmenuSelect = () => {
    setMenuOpen(false);
  };

  // 🔹 সাবমেনু ক্লিক হ্যান্ডলার - শুধুমাত্র ক্লিক করলে ওপেন হবে
  const handleSubmenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* 🔹 Logo section with Menu Button */}
      <div className="relative w-full">
        <div className="w-full">
          <Logo />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden absolute top-10 right-4 z-20 bg-white/10 rounded-full p-2 shadow-md text-white hover:bg-gray-800 transition"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Main Navigation */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center space-x-1 py-3">
            <li onClick={handleSubmenuClick}><AboutSubmenu /></li>
            <li onClick={handleSubmenuClick}><OfficersSubmenu /></li>
            <li onClick={handleSubmenuClick}><ServicesSubmenu /></li>
            <li onClick={handleSubmenuClick}><LawsSubmenu /></li>
            <li onClick={handleSubmenuClick}><FormsSubmenu /></li>
            <li onClick={handleSubmenuClick}><GallerySubmenu /></li>
            <li onClick={handleSubmenuClick}><ContactSubmenu /></li>
            <li onClick={handleSubmenuClick}><FaqSubmenu /></li>
            <li onClick={handleSubmenuClick}><PlansSubmenu /></li>
          </ul>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white rounded-lg shadow-xl mt-2 p-4 relative z-30">
              <div className="space-y-2">
                <div className="border-b pb-2 bg-gray-800 text-white">
                  <AboutSubmenu onSelect={handleSubmenuSelect} />
                </div>
                <div className="border-b pb-2 bg-gray-800 text-white">
                  <OfficersSubmenu onSelect={handleSubmenuSelect} />
                </div>
                <div className="border-b pb-2 bg-gray-800 text-white">
                  <ServicesSubmenu onSelect={handleSubmenuSelect} />
                </div>
                <div className="border-b pb-2 bg-gray-800 text-white">
                  <LawsSubmenu onSelect={handleSubmenuSelect} />
                </div>
                <div className="border-b pb-2 bg-gray-800 text-white">
                  <FormsSubmenu onSelect={handleSubmenuSelect} />
                </div>
                <div className="border-b pb-2 bg-gray-800 text-white">
                  <GallerySubmenu onSelect={handleSubmenuSelect} />
                </div>
                <div className="border-b pb-2 bg-gray-800 text-white">
                  <ContactSubmenu onSelect={handleSubmenuSelect} />
                </div>
                <div className="border-b pb-2 bg-gray-800 text-white">
                  <FaqSubmenu onSelect={handleSubmenuSelect} />
                </div>
                <div className="border-b pb-2 bg-gray-800 text-white">
                  <PlansSubmenu onSelect={handleSubmenuSelect} />
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
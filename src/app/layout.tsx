import "./globals.css";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "বাঘারপাড়া পৌরসভা",
  description: "ডাইনামিক ওয়েবসাইট",
  icons: {
    icon: "/images/logo2.png", // ✅ favicon যুক্ত করা হলো
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <head>
        {/* fallback বা custom favicon tag দিতে চাইলে */}
        <link rel="icon" href="/images/logo2.png" sizes="32x32" />
      </head>
      <body>
        <Heading />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

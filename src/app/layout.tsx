import "./globals.css";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "বাঘারপাড়া পৌরসভা",
  description: "ডাইনামিক ওয়েবসাইট",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>
        <Heading />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

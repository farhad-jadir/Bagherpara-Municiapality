import "./globals.css";
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

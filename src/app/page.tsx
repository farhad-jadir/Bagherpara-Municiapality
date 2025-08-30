import HeroSection from "../components/Hero";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <>
      <main className="bg-live-gradient w-full mx-auto ">
        <h2 className="text-2xl font-bold mb-4 mx-12 pt-8 text-white">স্বাগতম</h2>
        <p className="mb-8 mx-12 text-white">
          এটি বাঘারপাড়া পৌরসভার অফিসিয়াল ওয়েবসাইট। এখানে আপনি নাগরিক সেবা,
          আইন-নীতিমালা, পরিকল্পনা ও যোগাযোগ সম্পর্কিত তথ্য পাবেন।
        </p>
        <Heading className="mb-12 "
        speedPxPerSec={120}
        showIcon
        headlines={[
          { id: 1, text: "আজ ১০:৩০ টায় জনস্বাস্থ্য ক্যাম্পেইন উদ্বোধন।", tag: "নোটিশ", href: "/notice/health-campaign" },
          { id: 2, text: "ই-সার্ভিস পোর্টাল আপডেট সম্পন্ন হয়েছে।", tag: "অফিসের খবর", href: "/news/eservice-update" },
          { id: 3, text: "টেন্ডার: স্কুল ভবন নির্মাণ প্রকল্প 2025-Q4।", tag: "টেন্ডার", href: "/tenders/school-2025q4" },
        ]}
      />

        {/* ✅ Hero Section যুক্ত করা হলো */}
        <HeroSection  />
      </main>
    </>
  );
}

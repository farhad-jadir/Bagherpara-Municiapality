import HeroSection from "../components/Hero";
import Heading from "@/components/Heading";
import Complain from "@/components/Complain";
import PublicHearing from "@/components/PublicHearingWithMap";

export default function Home() {
  return (
    <>
      <main className="bg-live-gradient w-full mx-auto ">
        <h2 className="text-2xl font-bold mb-4 mx-12 pt-8 text-white">স্বাগতম</h2>
        <p className="mb-8 mx-12 text-white">
          এটি বাঘারপাড়া পৌরসভার অফিসিয়াল ওয়েবসাইট। এখানে আপনি নাগরিক সেবা,
          আইন-নীতিমালা, পরিকল্পনা ও যোগাযোগ সম্পর্কিত তথ্য পাবেন।
        </p>
        
        {/* ✅ Hero Section যুক্ত করা হলো */}
        <HeroSection  />
        <PublicHearing/>
        <Complain  />
        
      </main>
    </>
  );
}

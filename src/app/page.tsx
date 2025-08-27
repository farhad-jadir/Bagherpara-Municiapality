import HeroSection from "../components/Hero";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">স্বাগতম</h2>
        <p className="mb-8">
          এটি বাঘারপাড়া পৌরসভার অফিসিয়াল ওয়েবসাইট। এখানে আপনি নাগরিক সেবা,
          আইন-নীতিমালা, পরিকল্পনা ও যোগাযোগ সম্পর্কিত তথ্য পাবেন।
        </p>

        {/* ✅ Hero Section যুক্ত করা হলো */}
        <HeroSection />
      </main>
    </>
  );
}

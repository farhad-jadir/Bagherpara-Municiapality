import HeroSection from "../components/Hero";
import Heading from "@/components/Heading";

import PublicHearing from "@/components/PublicHearingWithMap";

export default function Home() {
  return (
    <>
      <main className="bg-live-gradient w-full mx-auto ">
        
        
        {/* ✅ Hero Section যুক্ত করা হলো */}
        <HeroSection  />
        <PublicHearing/>
        
        
      </main>
    </>
  );
}

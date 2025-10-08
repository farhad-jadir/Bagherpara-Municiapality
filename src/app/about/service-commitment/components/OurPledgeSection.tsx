// app/about/service-commitment/components/OurPledgeSection.tsx
export default function OurPledgeSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white fade-in">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">আমাদের অঙ্গীকার</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-xl leading-relaxed">
              &quot;বাঘারপাড়া উপজেলা প্রশাসন জনগণের সেবায় সর্বদা নিবেদিত। আমরা অঙ্গীকারবদ্ধ যে আমাদের 
              সকল সেবা হবে স্বচ্ছ, দ্রুত ও সহজলভ্য। প্রতিটি নাগরিকের অধিকার রক্ষা এবং তাদের 
              মৌলিক চাহিদা পূরণে আমরা কাজ করে যাব। আমাদের লক্ষ্য হলো একটি দুর্নীতিমুক্ত, 
              জবাবদিহিতামূলক ও জনবান্ধব প্রশাসন গড়ে তোলা।&quot;
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">২৪/৭</div>
              <div className="text-blue-200">হটলাইন সেবা</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">১০০%</div>
              <div className="text-blue-200">স্বচ্ছতা</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">৯৮%</div>
              <div className="text-blue-200">সন্তুষ্টি হার</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
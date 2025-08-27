// app/gallery/videos/page.tsx
export default function VideoGallery() {
  const videoCategories = [
    {
      title: "উদ্বোধনী অনুষ্ঠান",
      count: 8,
      duration: "2:45"
    },
    {
      title: "নাগরিক সেবা",
      count: 12,
      duration: "4:20"
    },
    {
      title: "উন্নয়ন প্রকল্প",
      count: 15,
      duration: "3:15"
    },
    {
      title: "সভা ও সেমিনার",
      count: 6,
      duration: "5:30"
    },
    {
      title: "সামাজিক আয়োজন",
      count: 9,
      duration: "2:50"
    },
    {
      title: "সাক্ষাৎকার",
      count: 5,
      duration: "6:45"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">ভিডিও গ্যালারি</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-purple-800">বাঘারপাড়া পৌরসভার ভিডিও সংগ্রহ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-800 flex items-center justify-center relative">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  {category.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.count}টি ভিডিও</p>
                <button className="mt-3 bg-purple-600 text-white px-4 py-1 rounded text-sm hover:bg-purple-700 transition-colors">
                  দেখুন
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-green-50 p-4 rounded-lg">
          <h3 className="text-xl font-medium mb-3 text-green-700">ইউটিউব চ্যানেল</h3>
          <p className="text-gray-600 mb-4">আমাদের ইউটিউব চ্যানেল থেকে আরও ভিডিও দেখুন</p>
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            ইউটিউব চ্যানেল
          </button>
        </div>
      </div>
    </div>
  );
}
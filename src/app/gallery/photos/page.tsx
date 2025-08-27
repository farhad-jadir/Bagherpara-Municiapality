// app/gallery/photos/page.tsx
export default function PhotoGallery() {
  const photoCategories = [
    {
      title: "পৌরসভা ভবন",
      count: 24,
      image: "/placeholder.jpg"
    },
    {
      title: "উদ্বোধনী অনুষ্ঠান",
      count: 18,
      image: "/placeholder.jpg"
    },
    {
      title: "উন্নয়ন কাজ",
      count: 32,
      image: "/placeholder.jpg"
    },
    {
      title: "সামাজিক কার্যক্রম",
      count: 15,
      image: "/placeholder.jpg"
    },
    {
      title: "বার্ষিক ক্রীড়া",
      count: 27,
      image: "/placeholder.jpg"
    },
    {
      title: "সাংস্কৃতিক অনুষ্ঠান",
      count: 21,
      image: "/placeholder.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">ফটো গ্যালারি</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-purple-800">বাঘারপাড়া পৌরসভার ফটো সংগ্রহ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">ইমেজ প্রিভিউ</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.count}টি ছবি</p>
                <button className="mt-3 bg-purple-600 text-white px-4 py-1 rounded text-sm hover:bg-purple-700 transition-colors">
                  দেখুন
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-medium mb-3 text-blue-700">ফটো আপলোড</h3>
          <p className="text-gray-600 mb-4">আপনার তোলা পৌরসভা সম্পর্কিত ছবি শেয়ার করতে চান?</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
            ছবি আপলোড করুন
          </button>
        </div>
      </div>
    </div>
  );
}
// app/plans/annual-development/page.tsx
export default function AnnualDevelopmentPlan() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">বার্ষিক উন্নয়ন পরিকল্পনা</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            ২০২৪ সালের বার্ষিক উন্নয়ন পরিকল্পনা
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800 mb-2">বাজেট</h3>
              <p className="text-2xl font-bold text-blue-600">৫.২ কোটি টাকা</p>
              <p className="text-sm text-blue-600">মোট বরাদ্দ</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-800 mb-2">অগ্রগতি</h3>
              <p className="text-2xl font-bold text-green-600">৭৫%</p>
              <p className="text-sm text-green-600">সম্পন্ন</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">মুখ্য প্রকল্পসমূহ</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>রাস্তা সংস্কার ও উন্নয়ন</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span>নর্দমা ব্যবস্থা পুনর্বাসন</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span>পার্ক ও বিনোদন কেন্দ্র নির্মাণ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
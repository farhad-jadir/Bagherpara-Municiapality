// app/forms/portal/page.tsx
export default function FormsPortal() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">ফরমস পোর্টাল</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-purple-800">অনলাইন ফরম পোর্টাল</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-blue-700">নতুন ব্যবহারকারী</h3>
            <p className="text-gray-600 mb-4">যদি আপনি প্রথমবার ব্যবহার করছেন, তাহলে নিবন্ধন করুন।</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors w-full">
              নিবন্ধন করুন
            </button>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-green-700">বিদ্যমান ব্যবহারকারী</h3>
            <p className="text-gray-600 mb-4">ইতিমধ্যে নিবন্ধিত হলে লগইন করুন।</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors w-full">
              লগইন করুন
            </button>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3 text-yellow-700">অনলাইনে পাওয়া সেবাসমূহ</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>ট্রেড লাইসেন্স আবেদন ও নবায়ন</li>
            <li>হোল্ডিং ট্যাক্স প্রদান</li>
            <li>জন্ম ও মৃত্যু নিবন্ধন</li>
            <li>নাগরিক সনদ আবেদন</li>
            <li>বিভিন্ন অনুমতি আবেদন</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-medium mb-3 text-gray-700">সাহায্য</h3>
          <p className="text-gray-600 mb-4">অনলাইন ফরম পূরণ করতে সমস্যা হলে যোগাযোগ করুন:</p>
          <div className="space-y-2">
            <p>📞 হেল্পলাইন: ০১৭XX-XXXXXX</p>
            <p>📧 ইমেইল: support@bagharapouroshova.gov.bd</p>
            <p>🕘 সময়: রবি-বৃহস্পতি, সকাল ৯টা - বিকাল ৫টা</p>
          </div>
        </div>
      </div>
    </div>
  );
}
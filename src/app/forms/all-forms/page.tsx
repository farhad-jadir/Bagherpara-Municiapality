// app/forms/all-forms/page.tsx
export default function AllForms() {
  const forms = [
    {
      category: "ট্রেড লাইসেন্স",
      items: [
        "নতুন ট্রেড লাইসেন্স আবেদন ফরম",
        "ট্রেড লাইসেন্স নবায়ন ফরম",
        "ট্রেড লাইসেন্স হস্তান্তর ফরম"
      ]
    },
    {
      category: "হোল্ডিং ট্যাক্স",
      items: [
        "নতুন হোল্ডিং নিবন্ধন ফরম",
        "হোল্ডিং ট্যাক্স প্রদান ফরম",
        "হোল্ডিং তথ্য পরিবর্তন ফরম"
      ]
    },
    {
      category: "জন্ম ও মৃত্যু নিবন্ধন",
      items: [
        "জন্ম নিবন্ধন ফরম",
        "মৃত্যু নিবন্ধন ফorম",
        "নিবন্ধন সংশোধন ফorম"
      ]
    },
    {
      category: "অন্যান্য সেবা",
      items: [
        "নাগরিক সনদ ফরম",
        "ওয়ারিশ সনদ ফরম",
        "আয়-ব্যয় সনদ ফরম",
        "ব্যবসা স্থাপনের অনুমতি ফরম"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">ফরমসমূহ</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-purple-800">বাঘারপাড়া পৌরসভার সকল ফরম</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forms.map((formCategory, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-3 text-green-700">{formCategory.category}</h3>
              <ul className="space-y-2">
                {formCategory.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex justify-between items-center p-2 hover:bg-white rounded">
                    <span>{item}</span>
                    <button className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700 transition-colors">
                      ডাউনলোড
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-medium mb-3 text-blue-700">অনলাইন ফরম জমা</h3>
          <p className="text-gray-600 mb-4">আপনি চাইলে অনলাইনেও ফরম পূরণ করে জমা দিতে পারেন।</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
            অনলাইন ফরম পোর্টাল
          </button>
        </div>
      </div>
    </div>
  );
}
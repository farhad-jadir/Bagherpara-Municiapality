// app/services/trade-license/components/FeesSection.tsx
interface FeesSectionProps {
  type: "new" | "renew";
}

export default function FeesSection({ type }: FeesSectionProps) {
  const newFees = [
    { category: "ছোট দোকান/স্টল", amount: "৫০০ টাকা" },
    { category: "মাঝারি ব্যবসা প্রতিষ্ঠান", amount: "১,০০০ টাকা" },
    { category: "বড় ব্যবসা প্রতিষ্ঠান", amount: "২,০০০ টাকা" },
    { category: "শিল্প প্রতিষ্ঠান", amount: "৫,০০০ টাকা" },
    { category: "অন্যান্য", amount: "নির্ধারিত" }
  ];

  const renewFees = [
    { category: "ছোট দোকান/স্টল", amount: "৩০০ টাকা" },
    { category: "মাঝারি ব্যবসা প্রতিষ্ঠান", amount: "৭০০ টাকা" },
    { category: "বড় ব্যবসা প্রতিষ্ঠান", amount: "১,৫০০ টাকা" },
    { category: "শিল্প প্রতিষ্ঠান", amount: "৩,০০০ টাকা" },
    { category: "অন্যান্য", amount: "নির্ধারিত" }
  ];

  const fees = type === "new" ? newFees : renewFees;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        ফি কাঠামো
      </h2>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ব্যবসার ধরণ
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {type === "new" ? "ইস্যু ফি" : "নবায়ন ফি"}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fees.map((fee, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {fee.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {fee.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>ফি কাঠামো পরিবর্তন হতে পারে। সঠিক ফি জানতে পৌরসভা অফিসে যোগাযোগ করুন।</p>
      </div>
    </section>
  );
}
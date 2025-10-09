// app/services/trade-license/components/RequirementsSection.tsx
interface RequirementsSectionProps {
  type: "new" | "renew";
}

export default function RequirementsSection({ type }: RequirementsSectionProps) {
  const newRequirements = [
    "জাতীয় পরিচয়পত্র/জন্ম নিবন্ধন সার্টিফিকেটের ফটোকপি",
    "পাসপোর্ট সাইজের রঙিন ছবি (২ কপি)",
    "ব্যবসার ঠিকানা প্রমাণের জন্য ইউটিলিটি বিল/ভাড়া চুক্তিপত্র",
    "টিন/ট্যাক্স সার্টিফিকেটের ফটোকপি",
    "ব্যবসা সম্পর্কিত অন্যান্য লাইসেন্স/পারমিট (যদি থাকে)",
    "ব্যাংক সলভেন্সি সার্টিফিকেট (প্রযোজ্য ক্ষেত্রে)"
  ];

  const renewRequirements = [
    "পুরাতন ট্রেড লাইসেন্সের মূল কপি",
    "জাতীয় পরিচয়পত্রের ফটোকপি",
    "সর্বশেষ ট্যাক্স জমার রশিদ",
    "ব্যবসা ঠিকানা প্রমাণের কাগজ (পরিবর্তন হলে)"
  ];

  const requirements = type === "new" ? newRequirements : renewRequirements;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </span>
        প্রয়োজনীয় কাগজপত্র
      </h2>
      
      <div className="bg-white rounded-xl shadow-md p-6">
        <ul className="space-y-3">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-start">
              <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 ${
                type === "new" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-700">{req}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-yellow-800 flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>দ্রষ্টব্য:</strong> সকল কাগজপত্রের সত্যায়িত ফটোকপি জমা দিতে হবে। 
              আবেদনকারীকে ব্যক্তিগতভাবে উপস্থিত হতে হবে।
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
// app/about/organizational-structure/components/OrgChartSection.tsx
import { useState } from 'react';

type DepartmentKey = 'mayor' | 'secretary' | 'engineering' | 'finance' | 'health' | 'education';

export default function OrgChartSection() {
  const [activeDepartment, setActiveDepartment] = useState<DepartmentKey>('mayor');

  return (
    <section className="py-16 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">সাংগঠনিক কাঠামো</h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex flex-col items-center">
            {/* মেয়র */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-6 text-center mb-8 w-full max-w-md shadow-lg">
              <div className="text-2xl font-bold mb-2">মেয়র</div>
              <div className="text-lg mb-2">মোঃ আব্দুল হালিম</div>
              <div className="text-sm opacity-90">পৌরসভার প্রধান নির্বাহী</div>
            </div>

            {/* পৌর সচিব */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl p-4 text-center w-64 shadow-md">
                <div className="font-bold">পৌর সচিব</div>
                <div className="text-sm">মোঃ রফিকুল ইসলাম</div>
              </div>
            </div>

            {/* বিভাগ সমূহ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "ইঞ্জিনিয়ারিং বিভাগ", color: "from-green-500 to-blue-500", key: "engineering" as DepartmentKey },
                { title: "অর্থ ও হিসাব বিভাগ", color: "from-yellow-500 to-orange-500", key: "finance" as DepartmentKey },
                { title: "স্বাস্থ্য বিভাগ", color: "from-red-500 to-pink-500", key: "health" as DepartmentKey },
                { title: "শিক্ষা ও সংস্কৃতি", color: "from-indigo-500 to-purple-500", key: "education" as DepartmentKey },
                { title: "পরিকল্পনা বিভাগ", color: "from-teal-500 to-cyan-500", key: "engineering" as DepartmentKey },
                { title: "কর্মকর্তা-কর্মচারী", color: "from-gray-500 to-blue-500", key: "secretary" as DepartmentKey }
              ].map((dept, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-r ${dept.color} text-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
                  onClick={() => setActiveDepartment(dept.key)}
                >
                  <div className="font-bold text-sm">{dept.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// app/about/organizational-structure/components/ContactInfoSection.tsx
export default function ContactInfoSection() {
  return (
    <section className="py-16 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">যোগাযোগ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">ঠিকানা</h3>
            <p className="text-gray-600">
              বাঘারপাড়া পৌরসভা<br />
              বাঘারপাড়া, যশোর<br />
              খুলনা বিভাগ
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">ফোন</h3>
            <p className="text-gray-600">
              মেয়র কার্যালয়:<br />
              ০৪২১-৫৬XXX<br />
              সচিব কার্যালয়:<br />
              ০৪২১-৫৬XXX
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🕒</span>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">কার্যকাল</h3>
            <p className="text-gray-600">
              শনি-বৃহস্পতি<br />
              সকাল ৯টা - বিকাল ৫টা<br />
              শুক্রবার বন্ধ
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold text-red-800 mb-2">ওয়েবসাইট</h3>
            <p className="text-gray-600">
              www.bpm.gov.bd<br />
              ইমেইল:<br />
              info@bpm.gov.bd
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
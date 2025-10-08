// app/about/service-commitment/components/ContactSection.tsx
export default function ContactSection() {
  return (
    <section className="py-16 bg-white fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">যোগাযোগ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">ঠিকানা</h3>
            <p className="text-gray-600">
              বাঘারপাড়া উপজেলা কার্যালয়<br />
              বাঘারপাড়া, যশোর<br />
              খুলনা বিভাগ, বাংলাদেশ
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">ফোন</h3>
            <p className="text-gray-600">
              উপজেলা নির্বাহী অফিসার:<br />
              +৮৮০৪২১-৫৬XXX<br />
              সেবা কেন্দ্র: ১৬১
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">ইমেইল ও ওয়েব</h3>
            <p className="text-gray-600">
              ইমেইল: bagharpara.jessore@gov.bd<br />
              ওয়েবসাইট: www.bagharpara.jessore.gov.bd
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
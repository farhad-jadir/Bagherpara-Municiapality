// app/about/location/components/ContactHelpSection.tsx
export default function ContactHelpSection() {
  return (
    <section className="py-12 md:py-16 bg-white fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-8 md:mb-12">
          যোগাযোগ ও সহায়তা
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-lg font-bold text-green-800 mb-2">জরুরি যোগাযোগ</h3>
            <p className="text-gray-600 text-sm">
              পৌরসভা হটলাইন:<br />
              <strong>০৪২১-৫৬XXX</strong><br />
              ২৪/৭ সেবা উপলব্ধ
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">পৌরসভা কার্যালয়</h3>
            <p className="text-gray-600 text-sm">
              বাঘারপাড়া পৌরসভা<br />
              সকাল ৯টা - বিকাল ৫টা<br />
              শুক্রবার বন্ধ
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-lg font-bold text-purple-800 mb-2">অনলাইন সেবা</h3>
            <p className="text-gray-600 text-sm">
              www.bagharparamunicipality.gov.bd<br />
              info@bagharparamunicipality.gov.bd<br />
              অনলাইন ফর্ম উপলব্ধ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
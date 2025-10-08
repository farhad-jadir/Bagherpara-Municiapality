// app/about/service-commitment/components/DigitalServicesSection.tsx
export default function DigitalServicesSection() {
  const digitalServices = [
    {
      title: "অনলাইন আবেদন",
      description: "বাসায় বসেই অনলাইনে বিভিন্ন সেবার জন্য আবেদন করুন",
      link: "https://eporcha.gov.bd",
      buttonText: "আবেদন করুন"
    },
    {
      title: "সেবা ট্র্যাকিং",
      description: "আপনার আবেদনের বর্তমান অবস্থা অনলাইনে দেখুন",
      link: "#",
      buttonText: "ট্র্যাক করুন"
    },
    {
      title: "ডিজিটাল পেমেন্ট",
      description: "বিভিন্ন ফি ও কর অনলাইনে পরিশোধ করুন",
      link: "https://pay.gov.bd",
      buttonText: "পেমেন্ট করুন"
    }
  ];

  return (
    <section className="py-16 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">ডিজিটাল সেবা</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {digitalServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href={service.link}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {service.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
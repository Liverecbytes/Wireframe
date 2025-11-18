export default function WireframeTopCompanies() {
  const companies = [
    { name: "Apple", jobs: "1,250+", rating: 4.8, successRate: "94%", location: "Cupertino, California" },
    { name: "Microsoft", jobs: "2,100+", rating: 4.7, successRate: "92%", location: "Redmond, Washington" },
    { name: "Amazon", jobs: "3,500+", rating: 4.6, successRate: "89%", location: "Seattle, Washington" },
    { name: "Google", jobs: "2,800+", rating: 4.9, successRate: "96%", location: "Mountain View, California" },
    { name: "Meta", jobs: "1,900+", rating: 4.5, successRate: "91%", location: "Menlo Park, California" },
    { name: "Tesla", jobs: "850+", rating: 4.7, successRate: "93%", location: "Austin, Texas" },
    { name: "JPMorgan Chase", jobs: "1,600+", rating: 4.4, successRate: "88%", location: "New York, New York" },
    { name: "Johnson & Johnson", jobs: "1,200+", rating: 4.6, successRate: "90%", location: "New Brunswick, New Jersey" },
    { name: "Visa", jobs: "650+", rating: 4.8, successRate: "95%", location: "Foster City, California" },
    { name: "Walmart", jobs: "4,200+", rating: 4.3, successRate: "87%", location: "Bentonville, Arkansas" },
    { name: "Coca-Cola", jobs: "780+", rating: 4.5, successRate: "89%", location: "Atlanta, Georgia" },
    { name: "Intel", jobs: "1,400+", rating: 4.6, successRate: "91%", location: "Santa Clara, California" },
  ];

  return (
    <section className="border-b-2 border-gray-300 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black border-2 border-gray-400 p-4 mb-4">
            Top Hiring Companies
          </h2>
          <p className="text-lg text-black">
            Join thousands of professionals working at leading Fortune 500 companies in the US
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {companies.map((company, index) => (
            <div key={index} className="border-2 border-gray-400 bg-white p-4">
              <div className="w-16 h-16 border-2 border-gray-400 bg-gray-100 mx-auto mb-3 flex items-center justify-center text-black text-xs">
                [Logo]
              </div>
              <h3 className="text-lg font-bold text-black mb-3 text-center">{company.name}</h3>
              <div className="text-center mb-2">
                <span className="text-sm text-black">Rating: {company.rating}/5</span>
              </div>
              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-sm border-b border-gray-200 pb-1">
                  <span className="text-black">Jobs:</span>
                  <span className="font-semibold text-black">{company.jobs}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-1">
                  <span className="text-black">Success:</span>
                  <span className="font-semibold text-black">{company.successRate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black">Location:</span>
                  <span className="font-semibold text-xs text-right text-black">{company.location}</span>
                </div>
              </div>
              <div className="text-center text-sm text-black border-t border-gray-200 pt-2">
                View Details →
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block px-8 py-3 bg-gray-800 text-white border-2 border-gray-900">
            View All Companies
          </div>
        </div>
      </div>
    </section>
  );
}


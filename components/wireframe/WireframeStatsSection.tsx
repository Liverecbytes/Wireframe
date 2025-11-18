export default function WireframeStatsSection() {
  const stats = [
    {
      number: "200,000+",
      label: "Active Jobs",
      description: "Discover opportunities across all industries",
    },
    {
      number: "50,000+",
      label: "Successful Placements",
      description: "Career transformations completed",
    },
    {
      number: "5,000+",
      label: "Companies & Recruiters",
      description: "Trusted by leading organizations",
    },
    {
      number: "1,000,000+",
      label: "Active Users",
      description: "Growing community of professionals",
    },
  ];

  return (
    <section className="border-b-2 border-gray-300 bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 border border-gray-400 text-sm mb-4 text-black">
            Trusted by Millions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black border-2 border-gray-400 p-4 mb-4">
            Join the Community That's Transforming Careers
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Millions of professionals trust LiveRec to find their dream jobs and grow their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="border-2 border-gray-400 bg-white p-6">
              <div className="w-12 h-12 border-2 border-gray-400 bg-gray-100 mb-4 flex items-center justify-center text-black text-xs">
                [Icon]
              </div>
              <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
              <h3 className="text-lg font-bold text-black mb-1">{stat.label}</h3>
              <p className="text-sm text-black">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t-2 border-gray-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-gray-400 bg-gray-100 flex items-center justify-center text-black text-xs">[icon]</div>
            <div className="text-left">
              <div className="text-sm font-semibold text-black">5,000+ Reviews</div>
              <div className="text-xs text-black">4.9/5 Average Rating</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-gray-400 bg-gray-100 flex items-center justify-center text-black text-xs">[icon]</div>
            <div className="text-left">
              <div className="text-sm font-semibold text-black">Award Winner</div>
              <div className="text-xs text-black">Best Job Portal 2024</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-gray-400 bg-gray-100 flex items-center justify-center text-black text-xs">[icon]</div>
            <div className="text-left">
              <div className="text-sm font-semibold text-black">Secure Platform</div>
              <div className="text-xs text-black">SOC 2 Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


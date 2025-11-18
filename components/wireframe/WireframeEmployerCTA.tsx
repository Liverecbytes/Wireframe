export default function WireframeEmployerCTA() {
  const cards = [
    {
      title: "Post a Job",
      description: "Reach thousands of qualified candidates instantly. Post your job opening and start receiving applications.",
      ctaText: "Get Started",
    },
    {
      title: "Find Candidates",
      description: "Search through our database of verified candidates. Filter by skills, experience, and location.",
      ctaText: "Search Now",
    },
  ];

  return (
    <section className="border-b-2 border-gray-300 bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black border-2 border-gray-400 p-4 mb-4">
            Find and Hire Top Candidates
          </h2>
          <p className="text-lg text-black">
            Connect with the best talent in the market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="border-2 border-gray-400 bg-white p-8">
              <div className="w-16 h-16 border-2 border-gray-400 bg-gray-100 mb-4 flex items-center justify-center text-black text-xs">
                [Icon]
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{card.title}</h3>
              <p className="text-black mb-4">{card.description}</p>
              <div className="px-4 py-2 border-2 border-gray-400 inline-block text-black font-semibold">
                {card.ctaText} →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function WireframeJobRecommendations() {
  const premiumCategories = [
    "Software Developer",
    "Data Scientist",
    "Product Manager",
    "UI/UX Designer",
    "DevOps Engineer",
    "Full Stack Developer",
    "Cloud Architect",
    "Data Analyst",
    "Mobile Developer",
    "Backend Developer",
    "Frontend Developer",
    "Machine Learning Engineer",
  ];

  return (
    <section className="border-b-2 border-gray-300 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black border-2 border-gray-400 p-4 mb-4">
            Get job in over hundred plus different categories
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {premiumCategories.map((category, index) => (
            <div
              key={index}
              className="px-6 py-3 border-2 border-gray-400 text-black text-sm font-medium"
            >
              {category}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block px-8 py-3 bg-gray-800 text-white border-2 border-gray-900">
            Explore More Categories
          </div>
        </div>
      </div>
    </section>
  );
}


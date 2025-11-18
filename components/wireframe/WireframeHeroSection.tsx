export default function WireframeHeroSection() {
  const recentSearches = [
    "Copywriter",
    "Game Designer",
    "Cloud Engineer",
    "User Experience",
    "Project Manager",
  ];

  return (
    <section className="border-b-2 border-gray-300 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-black border-2 border-gray-400 p-4">
                Unlock Your Career Potential
              </h1>
              <p className="text-lg text-black border border-gray-300 p-3">
                Explore countless job opportunities tailored to your skills and aspirations. Start your journey today.
              </p>
            </div>

            {/* Search Bar */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 border-2 border-gray-400 p-4 text-black">
                  Search for Jobs
                </div>
                <div className="flex-1 border-2 border-gray-400 p-4 text-black">
                  Location
                </div>
              </div>

              {/* Recent Searches */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-black">Recent Searches</p>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 border border-gray-400 text-black text-sm"
                    >
                      {search}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Image Placeholder */}
          <div className="border-2 border-dashed border-gray-400 bg-gray-100 flex items-center justify-center min-h-[400px]">
            <div className="text-black text-center">
              <div className="text-2xl mb-2">[Image]</div>
              <div className="text-sm">Visualization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


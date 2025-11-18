export default function WireframeHeader() {
  return (
    <header className="border-b-2 border-gray-300 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-black border-2 border-gray-400 px-4 py-2">
            LiveRec
          </div>
          <nav className="hidden md:flex space-x-6">
            {["Find Jobs", "Companies", "For Recruiters", "Resources"].map((item) => (
              <div key={item} className="px-3 py-1 border border-gray-400 text-black">
                {item}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 border-2 border-gray-400 text-black">Sign In</div>
            <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900">Sign Up</div>
          </div>
        </div>
      </div>
    </header>
  );
}


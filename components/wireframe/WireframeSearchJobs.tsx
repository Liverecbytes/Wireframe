"use client";

export default function WireframeSearchJobs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Similar to LinkedIn/Indeed */}
      <header className="border-b-2 border-gray-300 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-black border-2 border-gray-400 px-4 py-2">
              LiveRec
            </div>
            <nav className="hidden md:flex space-x-6">
              {["Find Jobs", "Companies", "Salary", "Resources"].map((item) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Advanced Filters (Indeed/Monster style) */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white border-2 border-gray-300 p-6 space-y-6 sticky top-20">
              {/* Filter Header */}
              <div className="border-b-2 border-gray-300 pb-4">
                <h2 className="text-xl font-bold text-black border-2 border-gray-400 px-3 py-2">
                  Filter Jobs
                </h2>
              </div>

              {/* Salary Range - Glassdoor style */}
              <div className="space-y-3">
                <h3 className="font-bold text-black border border-gray-400 px-2 py-1">
                  Salary Estimate
                </h3>
                <div className="space-y-2">
                  {["$0 - $40K", "$40K - $60K", "$60K - $80K", "$80K - $100K", "$100K+"].map((range) => (
                    <div key={range} className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-black">{range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Type - SnagJobs/Hourly style */}
              <div className="space-y-3">
                <h3 className="font-bold text-black border border-gray-400 px-2 py-1">
                  Job Type
                </h3>
                <div className="space-y-2">
                  {["Full-time", "Part-time", "Contract", "Temporary", "Internship", "Remote"].map((type) => (
                    <div key={type} className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-black">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Level - LinkedIn style */}
              <div className="space-y-3">
                <h3 className="font-bold text-black border border-gray-400 px-2 py-1">
                  Experience Level
                </h3>
                <div className="space-y-2">
                  {["Entry Level", "Mid Level", "Senior Level", "Executive"].map((level) => (
                    <div key={level} className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-black">{level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Size - Fortune companies focus */}
              <div className="space-y-3">
                <h3 className="font-bold text-black border border-gray-400 px-2 py-1">
                  Company Size
                </h3>
                <div className="space-y-2">
                  {["1-50", "51-200", "201-500", "501-1000", "1000+"].map((size) => (
                    <div key={size} className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-black">{size} employees</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location - ZipRecruiter style */}
              <div className="space-y-3">
                <h3 className="font-bold text-black border border-gray-400 px-2 py-1">
                  Location
                </h3>
                <div className="border-2 border-gray-400 p-2 mb-2">
                  <input
                    type="text"
                    placeholder="City, State or ZIP"
                    className="w-full outline-none text-black placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  {["Remote", "New York, NY", "San Francisco, CA", "Austin, TX", "Seattle, WA"].map((loc) => (
                    <div key={loc} className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-black">{loc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry - Fortune companies */}
              <div className="space-y-3">
                <h3 className="font-bold text-black border border-gray-400 px-2 py-1">
                  Industry
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {[
                    "Technology", "Finance", "Healthcare", "Retail", "Manufacturing",
                    "Consulting", "Energy", "Media", "Education", "Transportation"
                  ].map((industry) => (
                    <div key={industry} className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-black">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clear Filters Button */}
              <div className="pt-4 border-t-2 border-gray-300">
                <div className="w-full px-4 py-2 border-2 border-gray-400 text-center text-black">
                  Clear All Filters
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            {/* Search Bar - Indeed/LinkedIn hybrid */}
            <div className="bg-white border-2 border-gray-300 p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 border-2 border-gray-400 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">🔍</span>
                    <input
                      type="text"
                      placeholder="Job title, keywords, or company"
                      className="flex-1 outline-none text-black placeholder-gray-500"
                    />
                  </div>
                </div>
                <div className="flex-1 border-2 border-gray-400 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">📍</span>
                    <input
                      type="text"
                      placeholder="City, state, zip code"
                      className="flex-1 outline-none text-black placeholder-gray-500"
                    />
                  </div>
                </div>
                <div className="px-6 py-3 bg-gray-800 text-white border-2 border-gray-900">
                  Search Jobs
                </div>
              </div>
              {/* Quick Search Suggestions */}
              <div className="mt-4 flex flex-wrap gap-2">
                {["Remote", "Entry Level", "Full-time", "$60K+", "Hiring Now"].map((tag) => (
                  <div key={tag} className="px-3 py-1 border border-gray-400 text-sm text-black">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Results Header - ZipRecruiter style */}
            <div className="bg-white border-2 border-gray-300 p-4 mb-4 flex justify-between items-center">
              <div className="text-black">
                <span className="font-bold border-2 border-gray-400 px-2 py-1">12,847</span>
                <span className="ml-2">jobs found</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-black">Sort by:</span>
                <select className="border-2 border-gray-400 p-2 text-black bg-white">
                  <option>Relevance</option>
                  <option>Date Posted</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                </select>
              </div>
            </div>

            {/* Job Listings - Combined best of all platforms */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((job) => (
                <div
                  key={job}
                  className="bg-white border-2 border-gray-300 p-6 hover:border-gray-600 transition-colors cursor-pointer"
                >
                  <div className="flex gap-4">
                    {/* Company Logo Area */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 border-2 border-gray-400 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-500">Logo</span>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="flex-1 min-w-0">
                      {/* Job Title & Company - LinkedIn style */}
                      <div className="mb-2">
                        <h3 className="text-xl font-bold text-black border border-gray-400 px-2 py-1 inline-block mb-1">
                          Senior Software Engineer
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-black font-semibold border border-gray-400 px-2 py-1">
                            Google LLC
                          </span>
                          <span className="text-gray-600">⭐ 4.8</span>
                          <span className="text-gray-600">💼 Fortune 50</span>
                        </div>
                      </div>

                      {/* Location & Details - Indeed style */}
                      <div className="flex flex-wrap items-center gap-3 mb-3 text-black">
                        <span className="border border-gray-400 px-2 py-1">📍 Mountain View, CA</span>
                        <span className="border border-gray-400 px-2 py-1">💰 $150K - $200K</span>
                        <span className="border border-gray-400 px-2 py-1">⏰ Full-time</span>
                        <span className="border border-gray-400 px-2 py-1">🏠 Remote</span>
                        <span className="border border-gray-400 px-2 py-1">📅 2 days ago</span>
                      </div>

                      {/* Job Description Preview - Monster style */}
                      <p className="text-gray-700 mb-3 line-clamp-2 border-l-2 border-gray-300 pl-3">
                        We are looking for an experienced Senior Software Engineer to join our team.
                        You will work on cutting-edge projects and collaborate with top talent...
                      </p>

                      {/* Skills/Tags - ZipRecruiter style */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {["Python", "React", "AWS", "Docker", "Kubernetes"].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gray-100 border border-gray-400 text-sm text-black"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons - Indeed Quick Apply style */}
                      <div className="flex gap-2 pt-2 border-t border-gray-300">
                        <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900">
                          Quick Apply
                        </div>
                        <div className="px-4 py-2 border-2 border-gray-400 text-black">
                          Save Job
                        </div>
                        <div className="px-4 py-2 border-2 border-gray-400 text-black">
                          View Details
                        </div>
                      </div>
                    </div>

                    {/* Match Score - ZipRecruiter smart match */}
                    <div className="flex-shrink-0 text-right">
                      <div className="border-2 border-gray-400 p-3 bg-gray-50">
                        <div className="text-2xl font-bold text-black">95%</div>
                        <div className="text-sm text-gray-600">Match</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination - Standard pattern */}
            <div className="mt-6 bg-white border-2 border-gray-300 p-4 flex justify-center items-center gap-2">
              <div className="px-3 py-2 border-2 border-gray-400 text-black">Previous</div>
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className={`px-4 py-2 border-2 ${
                    num === 1 ? "bg-gray-800 text-white border-gray-900" : "border-gray-400 text-black"
                  }`}
                >
                  {num}
                </div>
              ))}
              <div className="px-3 py-2 border-2 border-gray-400 text-black">Next</div>
            </div>

            {/* Bottom CTA - SnagJobs style */}
            <div className="mt-6 bg-white border-2 border-gray-300 p-6 text-center">
              <h3 className="text-xl font-bold text-black mb-2 border-2 border-gray-400 px-3 py-2 inline-block">
                Get Job Alerts
              </h3>
              <p className="text-gray-700 mb-4">
                Never miss a job opportunity. Get notified when new jobs match your search.
              </p>
              <div className="flex gap-2 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-2 border-gray-400 p-2 text-black"
                />
                <div className="px-6 py-2 bg-gray-800 text-white border-2 border-gray-900">
                  Create Alert
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}


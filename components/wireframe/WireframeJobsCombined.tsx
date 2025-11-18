"use client";

import { useState } from "react";

export default function WireframeJobsCombined() {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b-2 border-gray-300 bg-white sticky top-0 z-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
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

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Bar Section - Indeed/LinkedIn hybrid */}
        <div className="bg-white border-2 border-gray-300 p-4 mb-4">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
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

          {/* Advanced Filters Toggle - Collapsible System */}
          <div className="border-t-2 border-gray-300 pt-4">
            <div className="flex items-center justify-between mb-3">
              <div 
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="px-4 py-2 border-2 border-gray-400 bg-gray-50 text-black font-semibold cursor-pointer hover:bg-gray-100"
              >
                {showAdvancedFilters ? "🔼 Advanced Filters" : "🔽 Advanced Filters"}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-black">Active filters:</span>
                <span className="px-2 py-1 bg-gray-200 border border-gray-400 text-black text-sm">Full-time</span>
                <span className="px-2 py-1 bg-gray-200 border border-gray-400 text-black text-sm">$100K+</span>
                <span className="px-2 py-1 bg-gray-200 border border-gray-400 text-black text-sm">Remote</span>
                <div className="px-3 py-1 border-2 border-gray-400 text-black text-sm cursor-pointer hover:bg-gray-100">Clear All</div>
              </div>
            </div>

            {/* Expanded Advanced Filters - Grid Layout - Hidden by default */}
            {showAdvancedFilters && (
            <div className="bg-gray-50 border-2 border-gray-300 p-4 space-y-4">
              {/* Row 1: Salary & Job Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Salary Range - Glassdoor style */}
                <div className="border-2 border-gray-400 p-3 bg-white">
                  <h3 className="font-bold text-black mb-3 border border-gray-400 px-2 py-1 inline-block">
                    💰 Salary Estimate
                  </h3>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {["$0-40K", "$40-60K", "$60-80K", "$80-100K", "$100K+", "All"].map((range) => (
                      <div key={range} className="flex items-center gap-2 border border-gray-400 p-2 hover:bg-gray-100 cursor-pointer">
                        <div className="w-4 h-4 border-2 border-gray-400"></div>
                        <span className="text-black text-sm">{range}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Job Type - SnagJobs/Hourly style */}
                <div className="border-2 border-gray-400 p-3 bg-white">
                  <h3 className="font-bold text-black mb-3 border border-gray-400 px-2 py-1 inline-block">
                    ⏰ Job Type
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Full-time", "Part-time", "Contract", "Temporary", "Internship", "Remote", "Hybrid"].map((type) => (
                      <div key={type} className="flex items-center gap-2 border border-gray-400 p-2 hover:bg-gray-100 cursor-pointer">
                        <div className="w-4 h-4 border-2 border-gray-400"></div>
                        <span className="text-black text-sm">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2: Experience & Company Size */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Experience Level - LinkedIn style */}
                <div className="border-2 border-gray-400 p-3 bg-white">
                  <h3 className="font-bold text-black mb-3 border border-gray-400 px-2 py-1 inline-block">
                    📊 Experience Level
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Entry Level", "Mid Level", "Senior Level", "Executive", "All Levels"].map((level) => (
                      <div key={level} className="flex items-center gap-2 border border-gray-400 p-2 hover:bg-gray-100 cursor-pointer">
                        <div className="w-4 h-4 border-2 border-gray-400"></div>
                        <span className="text-black text-sm">{level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Company Size - Fortune companies focus */}
                <div className="border-2 border-gray-400 p-3 bg-white">
                  <h3 className="font-bold text-black mb-3 border border-gray-400 px-2 py-1 inline-block">
                    🏢 Company Size
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["1-50", "51-200", "201-500", "501-1000", "1000+", "Fortune 500"].map((size) => (
                      <div key={size} className="flex items-center gap-2 border border-gray-400 p-2 hover:bg-gray-100 cursor-pointer">
                        <div className="w-4 h-4 border-2 border-gray-400"></div>
                        <span className="text-black text-sm">{size} {size !== "Fortune 500" ? "employees" : ""}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 3: Location & Industry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Location - ZipRecruiter style */}
                <div className="border-2 border-gray-400 p-3 bg-white">
                  <h3 className="font-bold text-black mb-3 border border-gray-400 px-2 py-1 inline-block">
                    📍 Location
                  </h3>
                  <div className="border-2 border-gray-400 p-2 mb-3">
                    <input
                      type="text"
                      placeholder="City, State or ZIP"
                      className="w-full outline-none text-black placeholder-gray-500"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Remote", "New York, NY", "San Francisco, CA", "Austin, TX", "Seattle, WA", "Chicago, IL"].map((loc) => (
                      <div key={loc} className="flex items-center gap-2 border border-gray-400 p-2 hover:bg-gray-100 cursor-pointer">
                        <div className="w-4 h-4 border-2 border-gray-400"></div>
                        <span className="text-black text-sm">{loc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industry - Fortune companies */}
                <div className="border-2 border-gray-400 p-3 bg-white">
                  <h3 className="font-bold text-black mb-3 border border-gray-400 px-2 py-1 inline-block">
                    🌐 Industry
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2 max-h-32 overflow-y-auto">
                    {[
                      "Technology", "Finance", "Healthcare", "Retail", "Manufacturing",
                      "Consulting", "Energy", "Media", "Education", "Transportation",
                      "Real Estate", "Hospitality", "Aerospace", "Pharmaceutical"
                    ].map((industry) => (
                      <div key={industry} className="flex items-center gap-2 border border-gray-400 p-2 hover:bg-gray-100 cursor-pointer">
                        <div className="w-4 h-4 border-2 border-gray-400"></div>
                        <span className="text-black text-sm">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 4: Additional Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Posted Date */}
                <div className="border-2 border-gray-400 p-3 bg-white">
                  <h3 className="font-bold text-black mb-3 border border-gray-400 px-2 py-1 inline-block">
                    📅 Posted Date
                  </h3>
                  <div className="space-y-2 mt-2">
                    {["Any time", "Past 24 hours", "Past week", "Past month"].map((date) => (
                      <div key={date} className="flex items-center gap-2 border border-gray-400 p-2 hover:bg-gray-100 cursor-pointer">
                        <div className="w-4 h-4 border-2 border-gray-400"></div>
                        <span className="text-black text-sm">{date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education Level */}
                <div className="border-2 border-gray-400 p-3 bg-white">
                  <h3 className="font-bold text-black mb-3 border border-gray-400 px-2 py-1 inline-block">
                    🎓 Education
                  </h3>
                  <div className="space-y-2 mt-2">
                    {["High School", "Bachelor's", "Master's", "PhD", "No requirement"].map((edu) => (
                      <div key={edu} className="flex items-center gap-2 border border-gray-400 p-2 hover:bg-gray-100 cursor-pointer">
                        <div className="w-4 h-4 border-2 border-gray-400"></div>
                        <span className="text-black text-sm">{edu}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="border-2 border-gray-400 p-3 bg-white">
                  <h3 className="font-bold text-black mb-3 border border-gray-400 px-2 py-1 inline-block">
                    ✨ Benefits
                  </h3>
                  <div className="space-y-2 mt-2">
                    {["Health Insurance", "401(k)", "Remote Work", "Stock Options", "Flexible PTO"].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 border border-gray-400 p-2 hover:bg-gray-100 cursor-pointer">
                        <div className="w-4 h-4 border-2 border-gray-400"></div>
                        <span className="text-black text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="flex justify-end gap-3 pt-3 border-t-2 border-gray-300">
                <div className="px-4 py-2 border-2 border-gray-400 text-black cursor-pointer hover:bg-gray-100">
                  Reset Filters
                </div>
                <div className="px-6 py-2 bg-gray-800 text-white border-2 border-gray-900 cursor-pointer hover:bg-gray-700">
                  Apply Filters
                </div>
              </div>
            </div>
            )}

          </div>

          {/* Quick Search Suggestions */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Remote", "Entry Level", "Full-time", "$60K+", "Hiring Now"].map((tag) => (
              <div key={tag} className="px-3 py-1 border border-gray-400 text-sm text-black hover:bg-gray-100 cursor-pointer">
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content: Job Listings (Left) + Job Details (Right) Side by Side */}
        <div className="flex gap-6 mt-6">
          {/* Left Side: Job Listings */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            {/* Results Header */}
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

            {/* Job Listings */}
            <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((job) => (
                <div
                  key={job}
                  className="bg-white border-2 border-gray-300 p-4 hover:border-gray-600 transition-colors cursor-pointer"
                >
                  <div className="flex gap-3">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 border-2 border-gray-400 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">Logo</span>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-black border border-gray-400 px-2 py-1 inline-block mb-1">
                        Senior Software Engineer
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-black font-semibold border border-gray-400 px-2 py-1 text-sm">
                          Google LLC
                        </span>
                        <span className="text-gray-600 text-sm">💼 Fortune 50</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mb-2 text-black text-sm">
                        <span className="border border-gray-400 px-2 py-1">📍 Mountain View, CA</span>
                        <span className="border border-gray-400 px-2 py-1">💰 $150K - $200K</span>
                        <span className="border border-gray-400 px-2 py-1">⏰ Full-time</span>
                        <span className="border border-gray-400 px-2 py-1">🏠 Remote</span>
                        <span className="border border-gray-400 px-2 py-1">📅 2 days ago</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2 line-clamp-2 border-l-2 border-gray-300 pl-2">
                        We are looking for an experienced Senior Software Engineer to join our team...
                      </p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {["Python", "React", "AWS"].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gray-100 border border-gray-400 text-xs text-black"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2 pt-2 border-t border-gray-300">
                        <div className="px-3 py-1 bg-gray-800 text-white border-2 border-gray-900 text-sm">
                          Quick Apply
                        </div>
                        <div className="px-3 py-1 border-2 border-gray-400 text-black text-sm">
                          Save
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-4 bg-white border-2 border-gray-300 p-4 flex justify-center items-center gap-2">
              <div className="px-3 py-2 border-2 border-gray-400 text-black text-sm">Previous</div>
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`px-4 py-2 border-2 text-sm ${
                    num === 1 ? "bg-gray-800 text-white border-gray-900" : "border-gray-400 text-black"
                  }`}
                >
                  {num}
                </div>
              ))}
              <div className="px-3 py-2 border-2 border-gray-400 text-black text-sm">Next</div>
            </div>
          </div>

          {/* Right Side: Job Details */}
          <div className="hidden lg:block w-1/2 flex-shrink-0 sticky top-32 self-start max-h-[calc(100vh-150px)] overflow-y-auto">
            <div className="bg-white border-2 border-gray-300 p-6">
              {/* Breadcrumb */}
              <nav className="mb-4 text-sm">
                <div className="flex items-center gap-2 text-black">
                  <span className="border border-gray-400 px-2 py-1">Jobs</span>
                  <span>/</span>
                  <span className="border border-gray-400 px-2 py-1">Software Engineering</span>
                  <span>/</span>
                  <span className="border border-gray-400 px-2 py-1">Senior Software Engineer</span>
                </div>
              </nav>

              {/* Job Header */}
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 border-2 border-gray-400 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">Logo</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-black mb-2 border-2 border-gray-400 px-3 py-2 inline-block">
                    Senior Software Engineer
                  </h1>
                  <h2 className="text-lg font-semibold text-black border border-gray-400 px-2 py-1 inline-block mb-2">
                    Google LLC
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 text-black text-sm">
                    <span className="border border-gray-400 px-2 py-1">💼 Fortune 50</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 text-black text-sm">
                    <span className="border border-gray-400 px-2 py-1">📍 Mountain View, CA</span>
                    <span className="border border-gray-400 px-2 py-1">💰 $150K - $200K</span>
                    <span className="border border-gray-400 px-2 py-1">⏰ Full-time</span>
                    <span className="border border-gray-400 px-2 py-1">🏠 Remote</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 mb-4 pt-4 border-t-2 border-gray-300">
                <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 text-sm font-semibold flex-1 text-center">
                  Quick Apply
                </div>
                <div className="px-4 py-2 border-2 border-gray-400 text-black text-sm">Save</div>
                <div className="px-4 py-2 border-2 border-gray-400 text-black text-sm">Share</div>
              </div>

              {/* Required Skills - Chips */}
              <div className="mb-4 pt-4 border-t-2 border-gray-300">
                <h2 className="text-lg font-bold text-black mb-3 border-2 border-gray-400 px-2 py-1 inline-block">
                  Required Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python", "Java", "React", "AWS", "Docker", "Kubernetes", 
                    "PostgreSQL", "MongoDB", "Node.js", "TypeScript", "Git", "Agile"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 border-2 border-gray-400 text-sm text-black"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="mb-4 pt-4 border-t-2 border-gray-300">
                <h2 className="text-lg font-bold text-black mb-3 border-2 border-gray-400 px-2 py-1 inline-block">
                  Experience Level
                </h2>
                <div className="border-2 border-gray-400 p-3 bg-gray-50">
                  <div className="text-base font-semibold text-black mb-1">Senior Level</div>
                  <div className="text-sm text-gray-600">5+ years of experience required</div>
                </div>
              </div>

              {/* Education Requirement */}
              <div className="mb-4 pt-4 border-t-2 border-gray-300">
                <h2 className="text-lg font-bold text-black mb-3 border-2 border-gray-400 px-2 py-1 inline-block">
                  Education Requirement
                </h2>
                <div className="space-y-2">
                  {[
                    "Bachelor's degree in Computer Science",
                    "Master's degree preferred",
                    "Equivalent work experience accepted"
                  ].map((edu, idx) => (
                    <div key={idx} className="flex items-start gap-2 border-2 border-gray-400 p-2 bg-gray-50">
                      <span className="border-2 border-gray-400 w-4 h-4 flex-shrink-0 mt-0.5"></span>
                      <span className="text-sm text-black">{edu}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4 pt-4 border-t-2 border-gray-300">
                <h2 className="text-lg font-bold text-black mb-3 border-2 border-gray-400 px-2 py-1 inline-block">
                  Benefits & Perks
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Health Insurance", "401(k) Matching", "Flexible PTO", "Remote Work",
                    "Stock Options", "Gym Membership", "Free Meals", "Learning Budget",
                    "Life Insurance", "Dental Insurance", "Vision Insurance", "Parental Leave"
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 border-2 border-gray-400 p-2 bg-gray-50">
                      <span className="border-2 border-gray-400 w-4 h-4 flex-shrink-0"></span>
                      <span className="text-sm text-black">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Description */}
              <div className="mb-4">
                <h2 className="text-xl font-bold text-black mb-3 border-2 border-gray-400 px-3 py-2 inline-block">
                  Job Description
                </h2>
                <div className="space-y-3 text-black">
                  <div className="border-l-2 border-gray-400 pl-3">
                    <h3 className="font-semibold mb-2 border border-gray-400 px-2 py-1 inline-block">
                      About the Role
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      We are seeking a talented Senior Software Engineer to join our innovative team. 
                      You will be responsible for designing, developing, and maintaining scalable software 
                      solutions that power millions of users worldwide.
                    </p>
                  </div>

                  <div className="border-l-2 border-gray-400 pl-3">
                    <h3 className="font-semibold mb-2 border border-gray-400 px-2 py-1 inline-block">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {[
                        "Design and implement scalable backend systems",
                        "Lead code reviews and mentor junior engineers",
                        "Collaborate with cross-functional teams"
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="border-2 border-gray-400 w-4 h-4 flex-shrink-0 mt-0.5"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-2 border-gray-400 pl-3">
                    <h3 className="font-semibold mb-2 border border-gray-400 px-2 py-1 inline-block">
                      Required Qualifications
                    </h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {[
                        "Bachelor's degree in Computer Science",
                        "5+ years of software engineering experience",
                        "Strong proficiency in Python, Java"
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="border-2 border-gray-400 w-4 h-4 flex-shrink-0 mt-0.5"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="mb-4 pt-4 border-t-2 border-gray-300">
                <h2 className="text-lg font-bold text-black mb-2 border-2 border-gray-400 px-2 py-1 inline-block">
                  About Google LLC
                </h2>
                <p className="text-gray-700 text-sm mb-3 border-l-2 border-gray-400 pl-3">
                  Google is a multinational technology company specializing in Internet-related services. 
                  With offices in over 50 countries, we foster innovation and creativity.
                </p>
              </div>

              {/* Apply Section */}
              <div className="pt-4 border-t-2 border-gray-300">
                <div className="space-y-2">
                  <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 text-center text-sm">
                    Quick Apply with Profile
                  </div>
                  <div className="px-4 py-2 border-2 border-gray-400 text-black text-center text-sm">
                    Upload Resume & Apply
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-300 text-xs text-gray-600 text-center">
                  <div>👥 247 applicants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


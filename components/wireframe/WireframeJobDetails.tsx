"use client";

export default function WireframeJobDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
          {/* Main Content - Left Side */}
          <main className="flex-1 min-w-0">
            {/* Breadcrumb - UX best practice */}
            <nav className="mb-4 text-sm">
              <div className="flex items-center gap-2 text-black">
                <span className="border border-gray-400 px-2 py-1">Jobs</span>
                <span>/</span>
                <span className="border border-gray-400 px-2 py-1">Software Engineering</span>
                <span>/</span>
                <span className="border border-gray-400 px-2 py-1">Senior Software Engineer</span>
              </div>
            </nav>

            {/* Job Header Card - Glassdoor/Indeed hybrid */}
            <div className="bg-white border-2 border-gray-300 p-6 mb-6">
              <div className="flex gap-6 mb-4">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 border-2 border-gray-400 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">Logo</span>
                  </div>
                </div>

                {/* Job Title & Company Info */}
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-black mb-2 border-2 border-gray-400 px-3 py-2 inline-block">
                    Senior Software Engineer
                  </h1>
                  <div className="mb-3">
                    <h2 className="text-xl font-semibold text-black border border-gray-400 px-2 py-1 inline-block mb-2">
                      Google LLC
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="text-black border border-gray-400 px-2 py-1">⭐ 4.8 Rating</span>
                      <span className="text-black border border-gray-400 px-2 py-1">💼 Fortune 50</span>
                      <span className="text-black border border-gray-400 px-2 py-1">👥 150K+ employees</span>
                      <span className="text-black border border-gray-400 px-2 py-1">🌐 Technology</span>
                    </div>
                  </div>

                  {/* Key Job Info - Indeed style */}
                  <div className="flex flex-wrap gap-3 text-black">
                    <span className="border border-gray-400 px-3 py-1">📍 Mountain View, CA</span>
                    <span className="border border-gray-400 px-3 py-1">💰 $150K - $200K/year</span>
                    <span className="border border-gray-400 px-3 py-1">⏰ Full-time</span>
                    <span className="border border-gray-400 px-3 py-1">🏠 Remote Available</span>
                    <span className="border border-gray-400 px-3 py-1">📅 Posted 2 days ago</span>
                    <span className="border border-gray-400 px-3 py-1">👀 1,247 views</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions - Indeed Quick Apply style */}
              <div className="flex gap-3 pt-4 border-t-2 border-gray-300">
                <div className="px-6 py-3 bg-gray-800 text-white border-2 border-gray-900 font-semibold">
                  Quick Apply
                </div>
                <div className="px-6 py-3 border-2 border-gray-400 text-black">
                  Save Job
                </div>
                <div className="px-6 py-3 border-2 border-gray-400 text-black">
                  Share Job
                </div>
                <div className="px-6 py-3 border-2 border-gray-400 text-black">
                  Report Job
                </div>
              </div>
            </div>

            {/* Job Description Section - Monster/Fortune style */}
            <div className="bg-white border-2 border-gray-300 p-6 mb-6">
              <h2 className="text-2xl font-bold text-black mb-4 border-2 border-gray-400 px-3 py-2 inline-block">
                Job Description
              </h2>
              
              <div className="space-y-4 text-black">
                {/* About the Role */}
                <div className="border-l-2 border-gray-400 pl-4">
                  <h3 className="text-xl font-semibold mb-2 border border-gray-400 px-2 py-1 inline-block">
                    About the Role
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We are seeking a talented Senior Software Engineer to join our innovative team. 
                    You will be responsible for designing, developing, and maintaining scalable software 
                    solutions that power millions of users worldwide. This role offers the opportunity 
                    to work on cutting-edge technologies and collaborate with industry-leading engineers.
                  </p>
                </div>

                {/* Key Responsibilities - LinkedIn style */}
                <div className="border-l-2 border-gray-400 pl-4">
                  <h3 className="text-xl font-semibold mb-3 border border-gray-400 px-2 py-1 inline-block">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Design and implement scalable backend systems using Python and Java",
                      "Lead code reviews and mentor junior engineers",
                      "Collaborate with cross-functional teams to deliver high-quality products",
                      "Optimize system performance and ensure reliability",
                      "Participate in architectural decisions and technical planning"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="border-2 border-gray-400 w-5 h-5 flex-shrink-0 mt-0.5"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Required Qualifications - Indeed style */}
                <div className="border-l-2 border-gray-400 pl-4">
                  <h3 className="text-xl font-semibold mb-3 border border-gray-400 px-2 py-1 inline-block">
                    Required Qualifications
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Bachelor's degree in Computer Science or related field (Master's preferred)",
                      "5+ years of software engineering experience",
                      "Strong proficiency in Python, Java, or similar languages",
                      "Experience with cloud platforms (AWS, GCP, or Azure)",
                      "Knowledge of distributed systems and microservices architecture"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="border-2 border-gray-400 w-5 h-5 flex-shrink-0 mt-0.5"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Preferred Qualifications */}
                <div className="border-l-2 border-gray-400 pl-4">
                  <h3 className="text-xl font-semibold mb-3 border border-gray-400 px-2 py-1 inline-block">
                    Preferred Qualifications
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Experience with Kubernetes and containerization",
                      "Contributions to open-source projects",
                      "Strong problem-solving and communication skills"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="border-2 border-gray-400 w-5 h-5 flex-shrink-0 mt-0.5"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits - Glassdoor style */}
                <div className="border-l-2 border-gray-400 pl-4">
                  <h3 className="text-xl font-semibold mb-3 border border-gray-400 px-2 py-1 inline-block">
                    Benefits & Perks
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Health Insurance", "401(k) Matching", "Flexible PTO", "Remote Work",
                      "Stock Options", "Gym Membership", "Free Meals", "Learning Budget"
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <span className="border-2 border-gray-400 w-4 h-4"></span>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Company Overview Section - Glassdoor style */}
            <div className="bg-white border-2 border-gray-300 p-6 mb-6">
              <h2 className="text-2xl font-bold text-black mb-4 border-2 border-gray-400 px-3 py-2 inline-block">
                About Google LLC
              </h2>
              <p className="text-gray-700 mb-4 border-l-2 border-gray-400 pl-4">
                Google is a multinational technology company specializing in Internet-related services 
                and products. Founded in 1998, we're committed to organizing the world's information 
                and making it universally accessible and useful. With offices in over 50 countries, 
                we foster innovation and creativity in everything we do.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t-2 border-gray-300">
                <div className="border-2 border-gray-400 p-3 text-center">
                  <div className="font-bold text-black text-lg">4.8</div>
                  <div className="text-sm text-gray-600">Company Rating</div>
                </div>
                <div className="border-2 border-gray-400 p-3 text-center">
                  <div className="font-bold text-black text-lg">150K+</div>
                  <div className="text-sm text-gray-600">Employees</div>
                </div>
                <div className="border-2 border-gray-400 p-3 text-center">
                  <div className="font-bold text-black text-lg">$300B+</div>
                  <div className="text-sm text-gray-600">Revenue</div>
                </div>
                <div className="border-2 border-gray-400 p-3 text-center">
                  <div className="font-bold text-black text-lg">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t-2 border-gray-300">
                <div className="inline-block px-6 py-2 border-2 border-gray-400 text-black">
                  View All Jobs at Google LLC
                </div>
              </div>
            </div>

            {/* Similar Jobs Section - ZipRecruiter style */}
            <div className="bg-white border-2 border-gray-300 p-6 mb-6">
              <h2 className="text-2xl font-bold text-black mb-4 border-2 border-gray-400 px-3 py-2 inline-block">
                Similar Jobs You Might Like
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((job) => (
                  <div key={job} className="border-2 border-gray-300 p-4 hover:border-gray-600 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-black border border-gray-400 px-2 py-1 inline-block mb-1">
                          Staff Software Engineer
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm text-black mt-2">
                          <span className="border border-gray-400 px-2 py-1">Microsoft</span>
                          <span className="border border-gray-400 px-2 py-1">Seattle, WA</span>
                          <span className="border border-gray-400 px-2 py-1">$180K - $220K</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="border-2 border-gray-400 p-2 bg-gray-50">
                          <div className="text-lg font-bold text-black">92%</div>
                          <div className="text-xs text-gray-600">Match</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Tips - SnagJobs/Indeed style */}
            <div className="bg-white border-2 border-gray-300 p-6">
              <h2 className="text-xl font-bold text-black mb-3 border-2 border-gray-400 px-3 py-2 inline-block">
                💡 Tips for Your Application
              </h2>
              <ul className="space-y-2 text-gray-700 border-l-2 border-gray-400 pl-4">
                {[
                  "Tailor your resume to highlight relevant experience",
                  "Include specific examples of your technical achievements",
                  "Research the company and mention what excites you",
                  "Follow up within a week if you haven't heard back"
                ].map((tip, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="border-2 border-gray-400 w-5 h-5 flex-shrink-0 mt-0.5"></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </main>

          {/* Right Sidebar - Sticky Application Card */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-20 space-y-6">
              {/* Quick Apply Card - Indeed style */}
              <div className="bg-white border-2 border-gray-300 p-6">
                <h3 className="text-xl font-bold text-black mb-4 border-2 border-gray-400 px-3 py-2">
                  Apply for this Job
                </h3>
                
                {/* Match Score */}
                <div className="mb-4 p-4 bg-gray-50 border-2 border-gray-400 text-center">
                  <div className="text-3xl font-bold text-black mb-1">95%</div>
                  <div className="text-sm text-gray-600 mb-2">Job Match Score</div>
                  <div className="text-xs text-gray-600 border-t border-gray-300 pt-2">
                    Based on your profile and experience
                  </div>
                </div>

                {/* Application Methods */}
                <div className="space-y-3">
                  <div className="px-4 py-3 bg-gray-800 text-white border-2 border-gray-900 text-center font-semibold">
                    Quick Apply with Profile
                  </div>
                  <div className="px-4 py-3 border-2 border-gray-400 text-black text-center">
                    Upload Resume & Apply
                  </div>
                  <div className="px-4 py-3 border-2 border-gray-400 text-black text-center">
                    Apply on Company Website
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t-2 border-gray-300 text-center text-sm text-gray-600">
                  <div className="mb-2">⏱️ Average response time: 3 days</div>
                  <div>👥 247 applicants</div>
                </div>
              </div>

              {/* Company Quick Stats - Glassdoor style */}
              <div className="bg-white border-2 border-gray-300 p-6">
                <h3 className="text-lg font-bold text-black mb-4 border-2 border-gray-400 px-2 py-1">
                  Company Insights
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                    <span className="text-black">Overall Rating</span>
                    <span className="font-bold text-black border border-gray-400 px-2 py-1">4.8 ⭐</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                    <span className="text-black">Work-Life Balance</span>
                    <span className="font-bold text-black border border-gray-400 px-2 py-1">4.5</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                    <span className="text-black">Culture & Values</span>
                    <span className="font-bold text-black border border-gray-400 px-2 py-1">4.7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black">Career Opportunities</span>
                    <span className="font-bold text-black border border-gray-400 px-2 py-1">4.9</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t-2 border-gray-300">
                  <div className="inline-block px-4 py-2 border-2 border-gray-400 text-black text-sm">
                    View Company Reviews
                  </div>
                </div>
              </div>

              {/* Salary Estimate - Glassdoor style */}
              <div className="bg-white border-2 border-gray-300 p-6">
                <h3 className="text-lg font-bold text-black mb-4 border-2 border-gray-400 px-2 py-1">
                  Salary Estimate
                </h3>
                <div className="mb-3 p-3 bg-gray-50 border-2 border-gray-400 text-center">
                  <div className="text-2xl font-bold text-black">$175K</div>
                  <div className="text-sm text-gray-600">Average Base Pay</div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Low</span>
                    <span className="font-semibold text-black">$150K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Median</span>
                    <span className="font-semibold text-black">$175K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>High</span>
                    <span className="font-semibold text-black">$200K</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-300 text-xs text-gray-600">
                  Based on 1,247 salaries submitted
                </div>
              </div>

              {/* Save & Share Actions */}
              <div className="bg-white border-2 border-gray-300 p-6">
                <div className="space-y-2">
                  <div className="w-full px-4 py-2 border-2 border-gray-400 text-black text-center">
                    💾 Save Job
                  </div>
                  <div className="w-full px-4 py-2 border-2 border-gray-400 text-black text-center">
                    📤 Share Job
                  </div>
                  <div className="w-full px-4 py-2 border-2 border-gray-400 text-black text-center">
                    🔔 Set Job Alert
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}


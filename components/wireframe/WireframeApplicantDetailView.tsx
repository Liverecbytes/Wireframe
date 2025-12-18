"use client";

export default function WireframeApplicantDetailView() {
  const applicant = {
    id: "APP-001",
    name: "Alex Johnson",
    headline: "Senior Product Designer • Fintech & Marketplace",
    location: "San Francisco, CA",
    phone: "(415) 555-2048",
    email: "alex.johnson@example.com",
    portfolio: "alexmakes.design",
    linkedin: "linkedin.com/in/alexjohnson",
    github: "github.com/alexjohnson",
    appliedDate: "Dec 17, 2024 at 2:45 PM",
    currentStage: "Applied",
    matchScore: 92,
    experience: "8+ years",
    noticePeriod: "2 weeks",
    salaryExpectation: "$140k - $170k base + equity",
    resume: "alex_johnson_resume.pdf"
  };

  const jobContext = {
    id: "JOB-2048",
    title: "Senior Product Designer",
    department: "Product & Design",
    location: "San Francisco, CA (Hybrid)",
    salaryRange: "$130k - $160k + equity",
    employmentType: "Full-time",
    requiredSkills: ["Product Strategy", "UX Research", "Figma", "Design Systems", "Prototyping"],
    niceToHave: ["HTML/CSS", "React", "Design Tokens"],
    description: "We're looking for a Senior Product Designer to join our growing product team. You'll work on complex fintech products, lead design initiatives, and mentor junior designers."
  };

  const experiences = [
    {
      role: "Senior Product Designer",
      company: "Stripe",
      period: "2021 - Present",
      location: "San Francisco, CA (Hybrid)",
      highlights: [
        "Led end-to-end design for payments onboarding, improving activation by 18%",
        "Partnered with PM/Eng to ship design system updates adopted across 6 teams",
        "Mentors 3 designers; introduced async research ops to speed discovery"
      ]
    },
    {
      role: "Product Designer",
      company: "Airbnb",
      period: "2018 - 2021",
      location: "Remote (Pacific Time)",
      highlights: [
        "Shipped host pricing workflow that lifted conversion by 12%",
        "Ran mixed-method research with 60+ participants across 4 countries"
      ]
    }
  ];

  const education = [
    {
      school: "University of Washington",
      degree: "B.S. Human-Centered Design & Engineering",
      years: "2012 - 2016"
    }
  ];

  const candidateSkills = [
    "Product Strategy", "UX Research", "Journey Mapping", "Interaction Design", 
    "Design Systems", "Rapid Prototyping", "Figma", "FigJam", "Miro", 
    "HTML/CSS", "JavaScript", "React (handoff)", "Design Tokens"
  ];

  const timeline = [
    { event: "Application received", date: "Dec 17, 2024 at 2:45 PM", type: "applied", note: "Cover letter included" },
    { event: "Completed UX Design Skills Assessment", date: "Dec 17, 2024 at 3:00 PM", type: "assessment", note: "Score: 88% (Passed)" },
    { event: "Profile viewed by recruiter", date: "Dec 17, 2024 at 3:15 PM", type: "viewed", note: "Viewed by Sarah M." },
    { event: "Resume downloaded", date: "Dec 17, 2024 at 3:20 PM", type: "action", note: "Downloaded by Sarah M." },
    { event: "Completed Design Thinking & Problem Solving", date: "Dec 17, 2024 at 4:30 PM", type: "assessment", note: "Score: 92% (Excellent)" },
    { event: "Completed Figma Proficiency Test", date: "Dec 17, 2024 at 5:15 PM", type: "assessment", note: "Score: 95% (Excellent)" }
  ];

  const internalNotes = [
    { author: "Sarah M. (Recruiter)", date: "Dec 17, 3:25 PM", note: "Strong portfolio! Experience at Stripe and Airbnb is exactly what we need. Recommending for shortlist.", rating: 5 },
    { author: "John D. (Hiring Manager)", date: "Dec 17, 4:10 PM", note: "Reviewed portfolio - excellent work on payments UX. Would like to interview.", rating: 5 }
  ];

  const assessmentTests = [
    {
      id: "TEST-001",
      name: "UX Design Skills Assessment",
      type: "Skills Test",
      status: "Completed",
      completedDate: "Dec 17, 2024 at 3:00 PM",
      duration: "45 minutes",
      score: 88,
      maxScore: 100,
      passingScore: 70,
      totalQuestions: 20,
      correctAnswers: 17,
      sections: [
        { name: "User Research", score: 92, questions: 5 },
        { name: "Wireframing & Prototyping", score: 85, questions: 5 },
        { name: "Design Principles", score: 90, questions: 5 },
        { name: "Usability Testing", score: 84, questions: 5 }
      ],
      sampleResponses: [
        { 
          question: "What is the primary goal of conducting user interviews?", 
          candidateAnswer: "To understand user needs, pain points, and behaviors through direct conversation",
          correctAnswer: "To understand user needs, pain points, and behaviors through direct conversation",
          isCorrect: true
        },
        { 
          question: "Which design principle emphasizes making important elements stand out?", 
          candidateAnswer: "Contrast and Hierarchy",
          correctAnswer: "Contrast and Hierarchy",
          isCorrect: true
        }
      ]
    },
    {
      id: "TEST-002",
      name: "Design Thinking & Problem Solving",
      type: "Case Study",
      status: "Completed",
      completedDate: "Dec 17, 2024 at 4:30 PM",
      duration: "60 minutes",
      score: 92,
      maxScore: 100,
      passingScore: 75,
      totalQuestions: 1,
      response: "The candidate demonstrated excellent problem-solving skills by conducting thorough user research, creating multiple design iterations, and presenting a well-structured solution with clear rationale. The final design addressed all key requirements and showed consideration for edge cases.",
      evaluatedBy: "Emily R. (Lead Designer)"
    },
    {
      id: "TEST-003",
      name: "Figma Proficiency Test",
      type: "Technical Test",
      status: "Completed",
      completedDate: "Dec 17, 2024 at 5:15 PM",
      duration: "30 minutes",
      score: 95,
      maxScore: 100,
      passingScore: 80,
      totalQuestions: 15,
      correctAnswers: 14,
      sections: [
        { name: "Components & Variants", score: 100, questions: 5 },
        { name: "Auto Layout", score: 90, questions: 5 },
        { name: "Prototyping", score: 95, questions: 5 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b-2 border-gray-300 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-black border-2 border-gray-400 px-4 py-2">LiveRec</div>
            <nav className="hidden md:flex space-x-6">
              {["Dashboard", "Jobs", "Candidates", "Analytics", "Messages"].map((item) => (
                <div key={item} className={`px-3 py-1 border ${item === "Jobs" ? "border-2 border-gray-600 bg-gray-100" : "border-gray-400"} text-black`}>
                  {item}
                </div>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 border border-gray-400 text-black">🔔 Notifications</div>
              <div className="w-10 h-10 border-2 border-gray-400 bg-gray-100 flex items-center justify-center text-gray-500">
                👤
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="border border-gray-300 px-2 py-1">Dashboard</span>
          <span>→</span>
          <span className="border border-gray-300 px-2 py-1">Jobs</span>
          <span>→</span>
          <span className="border border-gray-300 px-2 py-1">{jobContext.title}</span>
          <span>→</span>
          <span className="border border-gray-400 px-2 py-1 bg-gray-100 text-black">Applicant Profile</span>
        </div>

        {/* Applicant Header with Quick Actions */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex gap-4">
              <div className="w-24 h-24 border-2 border-gray-400 bg-gray-100 flex items-center justify-center text-gray-500 text-xl flex-shrink-0">
                Photo
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block">
                    {applicant.name}
                  </h1>
                  <span className={`px-3 py-1 text-sm border-2 bg-blue-50 border-blue-400 text-blue-800`}>
                    {applicant.currentStage}
                  </span>
                  <div className="flex items-center gap-1 border-2 border-gray-400 px-3 py-1 bg-white">
                    <span className="text-lg font-bold text-black">{applicant.matchScore}%</span>
                    <span className="text-sm text-gray-600">match</span>
                  </div>
                </div>
                <p className="text-lg text-black">{applicant.headline}</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                  <span className="border border-gray-400 px-2 py-1">📍 {applicant.location}</span>
                  <span className="border border-gray-400 px-2 py-1">💼 {applicant.experience}</span>
                  <span className="border border-gray-400 px-2 py-1">⏱️ Notice: {applicant.noticePeriod}</span>
                </div>
                <div className="text-sm text-gray-600">
                  Applied: {applicant.appliedDate}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900">Download Resume</div>
              <div className="px-4 py-2 border-2 border-gray-400 text-black">Message Candidate</div>
              <div className="px-4 py-2 border-2 border-gray-400 text-black">Schedule Interview</div>
            </div>
          </div>
        </div>

        {/* Pipeline Actions */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <h3 className="text-lg font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-4">
            Move Candidate Through Pipeline
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Applied", "Shortlisted", "Interview", "Offer", "Hired", "Rejected"].map((stage) => (
              <button
                key={stage}
                className={`px-4 py-2 border-2 ${
                  stage === applicant.currentStage
                    ? "border-blue-500 bg-blue-50 text-blue-800"
                    : stage === "Rejected"
                    ? "border-red-400 text-red-700"
                    : stage === "Hired"
                    ? "border-green-500 text-green-700"
                    : "border-gray-400 text-black hover:bg-gray-50"
                }`}
              >
                {stage === applicant.currentStage && "✓ "}
                {stage}
              </button>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <select className="border-2 border-gray-400 px-3 py-2 text-black">
              <option>Assign Recruiter...</option>
              <option>Sarah M.</option>
              <option>John D.</option>
              <option>Emily R.</option>
            </select>
            <select className="border-2 border-gray-400 px-3 py-2 text-black">
              <option>Tag Candidate...</option>
              <option>High Priority</option>
              <option>Fast Track</option>
              <option>Culture Fit</option>
            </select>
          </div>
        </div>

        {/* Main Layout: Candidate Details + Job Context Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT: Candidate Details */}
          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-300 p-6">
              <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-4">
                Candidate Profile
              </h2>

              {/* Contact Info */}
              <div className="mb-6 border-2 border-gray-200 p-4 space-y-2">
                <h3 className="font-semibold text-black mb-2">Contact Information</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Email:</span>
                    <span className="text-black border border-gray-300 px-2 py-1">{applicant.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Phone:</span>
                    <span className="text-black border border-gray-300 px-2 py-1">{applicant.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Portfolio:</span>
                    <span className="text-blue-600 underline">{applicant.portfolio}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">LinkedIn:</span>
                    <span className="text-blue-600 underline">{applicant.linkedin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">GitHub:</span>
                    <span className="text-blue-600 underline">{applicant.github}</span>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="mb-6">
                <h3 className="font-semibold text-black mb-3 border-b-2 border-gray-200 pb-2">Work Experience</h3>
                <div className="space-y-4">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="border-2 border-gray-200 p-4">
                      <div className="flex flex-wrap gap-2 items-center text-black mb-2">
                        <span className="font-semibold border border-gray-400 px-2 py-1">{exp.role}</span>
                        <span className="border border-gray-400 px-2 py-1">{exp.company}</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        {exp.period} • {exp.location}
                      </div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="border-2 border-gray-400 w-3 h-3 mt-1 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h3 className="font-semibold text-black mb-3 border-b-2 border-gray-200 pb-2">Education</h3>
                {education.map((edu, idx) => (
                  <div key={idx} className="border-2 border-gray-200 p-4">
                    <div className="font-semibold text-black">{edu.school}</div>
                    <div className="text-sm text-gray-700">{edu.degree}</div>
                    <div className="text-sm text-gray-600">{edu.years}</div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div>
                <h3 className="font-semibold text-black mb-3 border-b-2 border-gray-200 pb-2">Skills</h3>
                <div className="border-2 border-gray-200 p-4 bg-gray-50">
                  <div className="flex flex-wrap gap-2">
                    {candidateSkills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 text-sm border ${
                          jobContext.requiredSkills.includes(skill)
                            ? "border-green-400 bg-green-50 text-green-800"
                            : jobContext.niceToHave.includes(skill)
                            ? "border-blue-400 bg-blue-50 text-blue-800"
                            : "border-gray-300 text-black"
                        }`}
                      >
                        {skill}
                        {jobContext.requiredSkills.includes(skill) && " ✓"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cover Letter / Application Notes */}
            <div className="bg-white border-2 border-gray-300 p-6">
              <h3 className="font-semibold text-black mb-3 border-2 border-gray-400 px-2 py-1 inline-block">
                Cover Letter / Notes
              </h3>
              <div className="border-2 border-gray-200 p-4 text-sm text-gray-700 leading-relaxed">
                <p className="mb-3">
                  I'm excited to apply for the Senior Product Designer role at your company. My 8+ years of experience 
                  in fintech product design, particularly at Stripe where I led the payments onboarding redesign, 
                  has prepared me well for this challenge.
                </p>
                <p>
                  I'm particularly drawn to your focus on user-centered design and cross-functional collaboration. 
                  I believe my background in design systems and mentorship would be valuable to your team.
                </p>
              </div>
            </div>

            {/* Assessment Tests */}
            <div className="bg-white border-2 border-gray-300 p-6">
              <h3 className="font-semibold text-black mb-4 border-2 border-gray-400 px-2 py-1 inline-block">
                Assessment Tests ({assessmentTests.length})
              </h3>
              <div className="space-y-4">
                {assessmentTests.map((test) => (
                  <div key={test.id} className="border-2 border-gray-200 p-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                          <h4 className="font-semibold text-black text-lg">{test.name}</h4>
                          <span className={`text-xs px-2 py-1 border ${
                            test.status === 'Completed' 
                              ? 'border-green-400 bg-green-50 text-green-800' 
                              : 'border-yellow-400 bg-yellow-50 text-yellow-800'
                          }`}>
                            {test.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                          <span className="border border-gray-300 px-2 py-1">{test.type}</span>
                          <span className="border border-gray-300 px-2 py-1">⏱️ {test.duration}</span>
                          <span className="border border-gray-300 px-2 py-1">📅 {test.completedDate}</span>
                        </div>
                      </div>
                      <div className="border-2 border-gray-300 p-3 bg-gray-50 text-center min-w-[120px]">
                        <div className={`text-3xl font-bold mb-1 ${
                          test.score >= test.passingScore + 15 ? 'text-green-700' :
                          test.score >= test.passingScore ? 'text-blue-700' :
                          'text-red-700'
                        }`}>
                          {test.score}%
                        </div>
                        <div className="text-xs text-gray-600">Passing: {test.passingScore}%</div>
                      </div>
                    </div>

                    {/* Score Breakdown */}
                    <div className="mb-3 border-t-2 border-gray-200 pt-3">
                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div className="border border-gray-300 p-2 bg-gray-50">
                          <span className="text-gray-600">Total Questions:</span>
                          <span className="font-semibold text-black ml-2">{test.totalQuestions}</span>
                        </div>
                        {test.correctAnswers && (
                          <div className="border border-gray-300 p-2 bg-gray-50">
                            <span className="text-gray-600">Correct Answers:</span>
                            <span className="font-semibold text-black ml-2">{test.correctAnswers}</span>
                          </div>
                        )}
                      </div>

                      {test.sections && (
                        <div>
                          <div className="text-sm font-semibold text-black mb-2">Section-wise Performance</div>
                          <div className="space-y-2">
                            {test.sections.map((section, idx) => (
                              <div key={idx} className="border border-gray-300 p-2 bg-gray-50">
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-sm text-black">{section.name}</span>
                                  <span className="text-sm font-semibold text-black">{section.score}%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 bg-gray-200 h-2 rounded">
                                    <div 
                                      className={`h-2 rounded ${
                                        section.score >= 90 ? 'bg-green-500' :
                                        section.score >= 70 ? 'bg-blue-500' :
                                        'bg-yellow-500'
                                      }`}
                                      style={{ width: `${section.score}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-xs text-gray-600">{section.questions} Qs</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Sample Responses */}
                    {test.sampleResponses && (
                      <div className="border-t-2 border-gray-200 pt-3">
                        <div className="text-sm font-semibold text-black mb-2">Sample Responses</div>
                        <div className="space-y-3">
                          {test.sampleResponses.map((response, idx) => (
                            <div key={idx} className="border border-gray-300 p-3 bg-gray-50">
                              <div className="font-semibold text-black text-sm mb-2">Q: {response.question}</div>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-start gap-2">
                                  <span className={`font-semibold ${response.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                    {response.isCorrect ? '✓' : '✗'}
                                  </span>
                                  <div>
                                    <div className="text-gray-600">Candidate's Answer:</div>
                                    <div className="text-black">{response.candidateAnswer}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Case Study Response */}
                    {test.response && (
                      <div className="border-t-2 border-gray-200 pt-3">
                        <div className="text-sm font-semibold text-black mb-2">Evaluator's Assessment</div>
                        <div className="border border-gray-300 p-3 bg-gray-50 text-sm text-gray-700">
                          {test.response}
                        </div>
                        {test.evaluatedBy && (
                          <div className="text-xs text-gray-600 mt-2">
                            Evaluated by: {test.evaluatedBy}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="border-t-2 border-gray-200 pt-3 mt-3 flex gap-2">
                      <div className="px-3 py-2 border-2 border-gray-400 text-black text-sm text-center flex-1">
                        View Full Responses
                      </div>
                      <div className="px-3 py-2 border-2 border-gray-400 text-black text-sm text-center flex-1">
                        Download Report
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Job Context */}
          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-300 p-6 sticky top-20">
              <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-4">
                Job Context
              </h2>
              <div className="space-y-4">
                {/* Job Header */}
                <div className="border-2 border-gray-200 p-4 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-black">{jobContext.title}</h3>
                    <span className="text-sm border border-gray-400 px-2 py-1">ID: {jobContext.id}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                    <span className="border border-gray-400 px-2 py-1">📍 {jobContext.location}</span>
                    <span className="border border-gray-400 px-2 py-1">{jobContext.employmentType}</span>
                    <span className="border border-gray-400 px-2 py-1">{jobContext.department}</span>
                  </div>
                </div>

                {/* Salary Comparison */}
                <div className="border-2 border-gray-200 p-4">
                  <h4 className="font-semibold text-black mb-3">Compensation Match</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Job Offers:</span>
                      <span className="border border-gray-400 px-2 py-1 text-black">{jobContext.salaryRange}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Candidate Expects:</span>
                      <span className="border border-gray-400 px-2 py-1 text-black">{applicant.salaryExpectation}</span>
                    </div>
                    <div className="mt-2 p-2 bg-yellow-50 border border-yellow-300">
                      <span className="text-xs text-yellow-800">⚠️ Slight mismatch - candidate expects slightly higher</span>
                    </div>
                  </div>
                </div>

                {/* Job Description */}
                <div className="border-2 border-gray-200 p-4">
                  <h4 className="font-semibold text-black mb-2">Job Description</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{jobContext.description}</p>
                </div>

                {/* Skills Match */}
                <div className="border-2 border-gray-200 p-4">
                  <h4 className="font-semibold text-black mb-3">Skills Match Analysis</h4>
                  
                  <div className="mb-3">
                    <div className="text-sm text-gray-700 mb-2">Required Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {jobContext.requiredSkills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 text-xs border-2 ${
                            candidateSkills.includes(skill)
                              ? "border-green-500 bg-green-50 text-green-800"
                              : "border-red-400 bg-red-50 text-red-800"
                          }`}
                        >
                          {candidateSkills.includes(skill) ? "✓ " : "✗ "}
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-700 mb-2">Nice to Have</div>
                    <div className="flex flex-wrap gap-2">
                      {jobContext.niceToHave.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 text-xs border ${
                            candidateSkills.includes(skill)
                              ? "border-blue-400 bg-blue-50 text-blue-800"
                              : "border-gray-300 text-gray-600"
                          }`}
                        >
                          {candidateSkills.includes(skill) ? "✓ " : ""}
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 p-3 bg-green-50 border-2 border-green-300">
                    <div className="font-semibold text-green-900 text-sm">Strong Match!</div>
                    <div className="text-xs text-green-800 mt-1">
                      Candidate has all 5 required skills and 3 out of 3 nice-to-have skills
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="border-2 border-gray-200 p-4 bg-gray-50">
                  <h4 className="font-semibold text-black mb-3">Quick Actions</h4>
                  <div className="flex flex-col gap-2">
                    <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 text-center">
                      Schedule Interview
                    </div>
                    <div className="px-4 py-2 border-2 border-gray-400 text-black text-center">
                      Move to Shortlist
                    </div>
                    <div className="px-4 py-2 border-2 border-gray-400 text-black text-center">
                      View Full Job Post
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline & Activity */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <h3 className="text-lg font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-4">
            Application Timeline
          </h3>
          <div className="space-y-3">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 border-l-4 border-gray-300 pl-4 py-2">
                <div className="flex-shrink-0 w-32 text-sm text-gray-600">{item.date}</div>
                <div className="flex-1">
                  <div className="font-semibold text-black">{item.event}</div>
                  {item.note && <div className="text-sm text-gray-600">{item.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Notes & Comments */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <h3 className="text-lg font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-4">
            Internal Notes & Comments
          </h3>
          
          {/* Add Note Form */}
          <div className="mb-6 border-2 border-gray-200 p-4 bg-gray-50">
            <textarea
              placeholder="Add internal note or comment..."
              className="w-full border-2 border-gray-400 px-3 py-2 text-black min-h-24"
            ></textarea>
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-2 items-center">
                <span className="text-sm text-gray-700">Rating:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-xl cursor-pointer">⭐</span>
                ))}
              </div>
              <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900">
                Add Note
              </div>
            </div>
          </div>

          {/* Existing Notes */}
          <div className="space-y-3">
            {internalNotes.map((note, idx) => (
              <div key={idx} className="border-2 border-gray-200 p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-black">{note.author}</div>
                    <div className="text-xs text-gray-600">{note.date}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(note.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700">{note.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

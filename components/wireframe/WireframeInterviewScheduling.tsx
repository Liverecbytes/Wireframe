"use client";

export default function WireframeInterviewScheduling() {
  const candidate = {
    name: "Alex Johnson",
    role: "Senior Product Designer",
    photo: "Photo",
    email: "alex.johnson@example.com",
    phone: "(415) 555-2048",
    availability: "Mon-Thu, 9am-2pm PT",
    timezone: "Pacific Time (PT)"
  };

  const jobDetails = {
    id: "JOB-2048",
    title: "Senior Product Designer",
    department: "Product & Design"
  };

  const interviewers = [
    { name: "Sarah Martinez", role: "Senior Recruiter", email: "sarah.m@company.com", available: true },
    { name: "John Davis", role: "Hiring Manager", email: "john.d@company.com", available: true },
    { name: "Emily Roberts", role: "Lead Designer", email: "emily.r@company.com", available: false },
    { name: "Michael Chen", role: "VP of Product", email: "michael.c@company.com", available: true }
  ];

  const upcomingInterviews = [
    {
      candidate: "Michael Rodriguez",
      job: "Senior Product Designer",
      type: "Technical Interview",
      date: "Dec 20, 2024",
      time: "2:00 PM - 3:00 PM PT",
      mode: "Video",
      interviewer: "John Davis",
      status: "Confirmed",
      meetingLink: "zoom.us/j/123456789"
    },
    {
      candidate: "Sarah Chen",
      job: "Senior Product Designer",
      type: "HR Round",
      date: "Dec 21, 2024",
      time: "10:00 AM - 11:00 AM PT",
      mode: "Video",
      interviewer: "Sarah Martinez",
      status: "Confirmed",
      meetingLink: "zoom.us/j/987654321"
    },
    {
      candidate: "Emily Watson",
      job: "Product Manager",
      type: "Final Round",
      date: "Dec 22, 2024",
      time: "3:00 PM - 4:30 PM PT",
      mode: "In-person",
      interviewer: "Michael Chen",
      status: "Pending Confirmation",
      location: "HQ - Conference Room A"
    }
  ];

  const pastInterviews = [
    {
      candidate: "David Kim",
      job: "Senior Product Designer",
      type: "HR Round",
      date: "Dec 14, 2024",
      time: "11:00 AM PT",
      interviewer: "Sarah Martinez",
      outcome: "Moved to Technical Round",
      feedback: "Good cultural fit, strong communication skills"
    },
    {
      candidate: "Jennifer Lee",
      job: "UX Designer",
      type: "Technical Interview",
      date: "Dec 12, 2024",
      time: "2:00 PM PT",
      interviewer: "Emily Roberts",
      outcome: "Rejected",
      feedback: "Skills not aligned with requirements"
    }
  ];

  const interviewTemplates = [
    { name: "HR / Culture Fit", duration: "45 min", questions: 8 },
    { name: "Technical / Skills Assessment", duration: "60 min", questions: 12 },
    { name: "Final Round / Leadership", duration: "90 min", questions: 10 }
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
          <span className="border border-gray-300 px-2 py-1">{jobDetails.title}</span>
          <span>→</span>
          <span className="border border-gray-400 px-2 py-1 bg-gray-100 text-black">Schedule Interview</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6">
          {/* LEFT: Candidate Info & Quick Reference */}
          <div className="space-y-6">
            {/* Candidate Card */}
            <div className="bg-white border-2 border-gray-300 p-6">
              <h2 className="text-xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-4">
                Candidate Details
              </h2>
              <div className="flex gap-4 mb-4">
                <div className="w-20 h-20 border-2 border-gray-400 bg-gray-100 flex items-center justify-center text-gray-500">
                  {candidate.photo}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black">{candidate.name}</h3>
                  <p className="text-sm text-gray-700">{candidate.role}</p>
                  <div className="mt-2 space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">📧</span>
                      <span className="text-black">{candidate.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">📱</span>
                      <span className="text-black">{candidate.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-gray-200 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Availability:</span>
                  <span className="text-black border border-gray-300 px-2 py-1">{candidate.availability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Timezone:</span>
                  <span className="text-black border border-gray-300 px-2 py-1">{candidate.timezone}</span>
                </div>
              </div>
            </div>

            {/* Interview Templates */}
            <div className="bg-white border-2 border-gray-300 p-6">
              <h3 className="font-semibold text-black border-2 border-gray-400 px-2 py-1 inline-block mb-4">
                Interview Templates
              </h3>
              <div className="space-y-2">
                {interviewTemplates.map((template, idx) => (
                  <div key={idx} className="border-2 border-gray-200 p-3 hover:bg-gray-50 cursor-pointer">
                    <div className="font-semibold text-black">{template.name}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {template.duration} • {template.questions} questions
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Interviewers */}
            <div className="bg-white border-2 border-gray-300 p-6">
              <h3 className="font-semibold text-black border-2 border-gray-400 px-2 py-1 inline-block mb-4">
                Available Interviewers
              </h3>
              <div className="space-y-2">
                {interviewers.map((interviewer, idx) => (
                  <div key={idx} className={`border-2 p-3 ${interviewer.available ? 'border-green-300 bg-green-50' : 'border-gray-300 bg-gray-100'}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-black">{interviewer.name}</div>
                        <div className="text-sm text-gray-700">{interviewer.role}</div>
                        <div className="text-xs text-gray-600">{interviewer.email}</div>
                      </div>
                      <span className={`text-xs px-2 py-1 border ${interviewer.available ? 'border-green-500 bg-green-100 text-green-800' : 'border-gray-400 text-gray-600'}`}>
                        {interviewer.available ? '✓ Available' : 'Busy'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Schedule Interview Form */}
          <div className="bg-white border-2 border-gray-300 p-6">
            <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-6">
              Schedule New Interview
            </h2>

            <div className="space-y-6">
              {/* Interview Type */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Interview Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {["HR Round", "Technical", "Final Round"].map((type) => (
                    <div key={type} className="border-2 border-gray-400 p-3 text-center hover:bg-gray-100 cursor-pointer">
                      {type}
                    </div>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Date</label>
                  <input 
                    type="date" 
                    className="w-full border-2 border-gray-400 px-3 py-2 text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Time</label>
                  <input 
                    type="time" 
                    className="w-full border-2 border-gray-400 px-3 py-2 text-black"
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Duration</label>
                <select className="w-full border-2 border-gray-400 px-3 py-2 text-black">
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                  <option>60 minutes</option>
                  <option>90 minutes</option>
                  <option>120 minutes</option>
                </select>
              </div>

              {/* Interview Mode */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Interview Mode</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { mode: "Video", icon: "🎥" },
                    { mode: "In-person", icon: "🏢" },
                    { mode: "Phone", icon: "📞" }
                  ].map((item) => (
                    <div key={item.mode} className="border-2 border-gray-400 p-3 text-center hover:bg-gray-100 cursor-pointer">
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className="text-sm">{item.mode}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meeting Details */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Meeting Link / Location</label>
                <input 
                  type="text" 
                  placeholder="e.g., zoom.us/j/123456789 or Conference Room A"
                  className="w-full border-2 border-gray-400 px-3 py-2 text-black"
                />
              </div>

              {/* Select Interviewer(s) */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Select Interviewer(s)</label>
                <div className="space-y-2">
                  {interviewers.map((interviewer, idx) => (
                    <label key={idx} className="flex items-center gap-3 border-2 border-gray-200 p-3 hover:bg-gray-50 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" disabled={!interviewer.available} />
                      <div className="flex-1">
                        <div className="font-semibold text-black">{interviewer.name}</div>
                        <div className="text-sm text-gray-600">{interviewer.role}</div>
                      </div>
                      {!interviewer.available && (
                        <span className="text-xs text-red-600 border border-red-300 px-2 py-1 bg-red-50">
                          Not Available
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Additional Notes (Optional)</label>
                <textarea 
                  placeholder="Add any special instructions or topics to cover..."
                  className="w-full border-2 border-gray-400 px-3 py-2 text-black min-h-24"
                ></textarea>
              </div>

              {/* Auto-send Invites */}
              <div className="border-2 border-gray-200 p-4 bg-gray-50">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" defaultChecked />
                  <div>
                    <div className="font-semibold text-black">Automatically send calendar invites</div>
                    <div className="text-sm text-gray-600">
                      Email invitations will be sent to the candidate and selected interviewers
                    </div>
                  </div>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t-2 border-gray-200">
                <div className="flex-1 px-4 py-3 bg-gray-800 text-white border-2 border-gray-900 text-center cursor-pointer">
                  Schedule Interview
                </div>
                <div className="px-4 py-3 border-2 border-gray-400 text-black text-center cursor-pointer">
                  Cancel
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block">
              Upcoming Interviews
            </h2>
            <div className="flex gap-2">
              <div className="px-3 py-2 border-2 border-gray-400 text-black text-sm">View Calendar</div>
              <div className="px-3 py-2 border-2 border-gray-400 text-black text-sm">Export</div>
            </div>
          </div>
          <div className="space-y-3">
            {upcomingInterviews.map((interview, idx) => (
              <div key={idx} className="border-2 border-gray-200 p-4">
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="font-semibold text-black border border-gray-400 px-2 py-1">
                        {interview.candidate}
                      </h3>
                      <span className="text-sm border border-gray-300 px-2 py-1 text-gray-700">
                        {interview.job}
                      </span>
                      <span className={`text-sm px-2 py-1 border ${
                        interview.status === 'Confirmed' 
                          ? 'border-green-400 bg-green-50 text-green-800' 
                          : 'border-yellow-400 bg-yellow-50 text-yellow-800'
                      }`}>
                        {interview.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <div className="border border-gray-300 px-2 py-1">
                        <span className="text-gray-600">Type:</span> {interview.type}
                      </div>
                      <div className="border border-gray-300 px-2 py-1">
                        <span className="text-gray-600">📅</span> {interview.date}
                      </div>
                      <div className="border border-gray-300 px-2 py-1">
                        <span className="text-gray-600">⏰</span> {interview.time}
                      </div>
                      <div className="border border-gray-300 px-2 py-1">
                        <span className="text-gray-600">Mode:</span> {interview.mode}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <span className="text-gray-600">Interviewer:</span> {interview.interviewer}
                    </div>
                    {interview.meetingLink && (
                      <div className="mt-2 text-sm">
                        <a href="#" className="text-blue-600 underline">{interview.meetingLink}</a>
                      </div>
                    )}
                    {interview.location && (
                      <div className="mt-2 text-sm text-gray-700">
                        <span className="text-gray-600">📍</span> {interview.location}
                      </div>
                    )}
                  </div>
                  <div className="flex md:flex-col gap-2">
                    <div className="px-3 py-2 border-2 border-gray-400 text-black text-sm text-center">
                      Reschedule
                    </div>
                    <div className="px-3 py-2 border-2 border-gray-400 text-black text-sm text-center">
                      Cancel
                    </div>
                    <div className="px-3 py-2 border-2 border-gray-400 text-black text-sm text-center">
                      Details
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Interviews */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <h2 className="text-xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-4">
            Past Interviews
          </h2>
          <div className="space-y-3">
            {pastInterviews.map((interview, idx) => (
              <div key={idx} className="border-2 border-gray-200 p-4 bg-gray-50">
                <div className="flex flex-col md:flex-row md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="font-semibold text-black">{interview.candidate}</h3>
                      <span className="text-sm border border-gray-300 px-2 py-1 text-gray-700">
                        {interview.job}
                      </span>
                      <span className={`text-sm px-2 py-1 border ${
                        interview.outcome.includes('Moved') 
                          ? 'border-green-400 bg-green-100 text-green-800' 
                          : 'border-red-400 bg-red-100 text-red-800'
                      }`}>
                        {interview.outcome}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm mb-2">
                      <div className="text-gray-700">
                        <span className="text-gray-600">Type:</span> {interview.type}
                      </div>
                      <div className="text-gray-700">
                        <span className="text-gray-600">📅</span> {interview.date}
                      </div>
                      <div className="text-gray-700">
                        <span className="text-gray-600">⏰</span> {interview.time}
                      </div>
                      <div className="text-gray-700">
                        <span className="text-gray-600">👤</span> {interview.interviewer}
                      </div>
                    </div>
                    {interview.feedback && (
                      <div className="mt-2 border-l-4 border-gray-400 pl-3 text-sm text-gray-700">
                        <span className="font-semibold text-black">Feedback:</span> {interview.feedback}
                      </div>
                    )}
                  </div>
                  <div className="flex md:flex-col gap-2">
                    <div className="px-3 py-2 border-2 border-gray-400 text-black text-sm text-center">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

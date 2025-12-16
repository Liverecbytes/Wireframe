"use client";

export default function WireframeCandidateProfile() {
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
        "Ran mixed-method research with 60+ participants across 4 countries",
        "Collaborated with data science to define success metrics and dashboards"
      ]
    }
  ];

  const education = [
    {
      school: "University of Washington",
      degree: "B.S. Human-Centered Design & Engineering",
      years: "2012 - 2016",
      location: "Seattle, WA"
    }
  ];

  const skills = [
    "Product Strategy",
    "UX Research",
    "Journey Mapping",
    "Interaction Design",
    "Design Systems",
    "Rapid Prototyping",
    "Figma",
    "FigJam",
    "Miro",
    "Notion",
    "Jira",
    "Amplitude",
    "HTML/CSS",
    "JavaScript",
    "React (handoff)",
    "Design Tokens",
    "Stakeholder Communication",
    "Workshop Facilitation",
    "Mentorship",
    "Storytelling"
  ];

  const preferences = {
    desiredRoles: ["Senior Product Designer"],
    workTypes: ["Full-time"],
    workSetup: ["Hybrid"],
    salaryRange: "$140k - $170k base + equity",
    industries: ["Fintech", "Marketplace", "B2B SaaS"],
    noticePeriod: "2 weeks (currently open to interviews)",
    relocation: "255 w 94th st, Brooklyn, NY 11206",
    interviewSlots: "Mon-Thu, 9am-2pm PT"
  };

  const contact = {
    name: "Alex Johnson",
    headline: "Senior Product Designer • Fintech & Marketplace",
    location: "San Francisco, CA",
    openToWork: "Open to new roles · Prefers hybrid/remote",
    phone: "(415) 555-2048",
    email: "alex.johnson@example.com",
    portfolio: "alexmakes.design",
    linkedin: "linkedin.com/in/alexjohnson",
    resumeTemplate: "Modern Focus (selected during onboarding)",
    lastUpdated: "Profile updated 3 days ago via onboarding flow"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b-2 border-gray-300 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-black border-2 border-gray-400 px-4 py-2">LiveRec</div>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Profile Hero */}
        <div className="bg-white border-2 border-gray-300 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex gap-4">
              <div className="w-24 h-24 border-2 border-gray-400 bg-gray-100 flex items-center justify-center text-gray-500 text-xl">
                Photo
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block">
                    {contact.name}
                  </h1>
                  <span className="px-3 py-1 border-2 border-gray-400 text-black bg-gray-50">Profile complete</span>
                  <span className="px-3 py-1 border-2 border-gray-400 text-black">Phone ✓</span>
                  <span className="px-3 py-1 border-2 border-gray-400 text-black">Email ✓</span>
                </div>
                <p className="text-lg text-black">{contact.headline}</p>
                <div className="flex flex-wrap gap-2 text-sm text-black">
                  <span className="border border-gray-400 px-2 py-1">📍 {contact.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                  <span className="border border-gray-300 px-2 py-1">Last updated: {contact.lastUpdated}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900">Download Resume</div>
              <div className="px-4 py-2 border-2 border-gray-400 text-black">Share Public Profile</div>
              <div className="px-4 py-2 border-2 border-gray-400 text-black">Save Candidate</div>
              <div className="px-4 py-2 border-2 border-gray-400 text-black">Message</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Experience", value: "8+ years" },
              { label: "Preferred Compensation", value: preferences.salaryRange },
              { label: "Industries", value: preferences.industries.join(", ") }
            ].map((item) => (
              <div key={item.label} className="border-2 border-gray-300 p-4 bg-gray-50">
                <div className="text-xs uppercase tracking-wide text-gray-600">{item.label}</div>
                <div className="font-semibold text-black mt-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-6">
          {/* Main column */}
          <div className="space-y-6">
            {/* Summary */}
            <section className="bg-white border-2 border-gray-300 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block">
                  Professional Summary
                </h2>
                <span className="text-sm text-gray-600 border border-gray-300 px-2 py-1">
                  Captured during onboarding
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed border-l-2 border-gray-400 pl-4">
                Product designer focused on fintech and marketplace experiences. I pair strong UX research chops with
                crisp interaction design to simplify complex money flows. I work best in cross-functional teams where
                I can shape strategy, run discovery, and ship polished, measurable outcomes.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Figma power user", "Design systems", "Rapid testing", "Data-informed decisions", "Mentorship"].map(
                  (pill) => (
                    <span key={pill} className="border border-gray-300 px-3 py-1 text-sm text-black bg-gray-50">
                      {pill}
                    </span>
                  )
                )}
              </div>
            </section>

            {/* Work Experience */}
            <section className="bg-white border-2 border-gray-300 p-6 space-y-4">
              <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block">
                Work Experience
              </h2>
              <p className="text-sm text-gray-600">Structured from onboarding: roles, dates, and key outcomes</p>
              <div className="space-y-4">
                {experiences.map((experience) => (
                  <div key={experience.role} className="border-2 border-gray-200 p-4">
                    <div className="flex flex-wrap gap-2 items-center text-black">
                      <span className="text-lg font-semibold border border-gray-400 px-2 py-1">
                        {experience.role}
                      </span>
                      <span className="border border-gray-400 px-2 py-1">{experience.company}</span>
                      <span className="border border-gray-300 px-2 py-1 text-sm">{experience.location}</span>
                      <span className="border border-gray-300 px-2 py-1 text-sm">{experience.period}</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-gray-700">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="border-2 border-gray-400 w-4 h-4 mt-1 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="bg-white border-2 border-gray-300 p-6 space-y-4">
              <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block">Skills</h2>
              <p className="text-sm text-gray-600">Captured individually during onboarding; shown as a single list</p>
              <div className="border-2 border-gray-200 p-4 bg-gray-50">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="border border-gray-300 px-3 py-1 text-sm text-black">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Job Preferences */}
            <section className="bg-white border-2 border-gray-300 p-6 space-y-4">
              <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block">
                Job Preferences
              </h2>
              <p className="text-sm text-gray-600">
                Captured during onboarding to power matching and alerts
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-gray-200 p-4">
                  <h3 className="font-semibold text-black mb-2">Roles & Work Types</h3>
                  <div className="flex flex-wrap gap-2">
                    {preferences.desiredRoles.map((role) => (
                      <span key={role} className="border border-gray-300 px-3 py-1 text-sm text-black">
                        {role}
                      </span>
                    ))}
                    {preferences.workTypes.map((type) => (
                      <span key={type} className="border border-gray-300 px-3 py-1 text-sm text-black">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-2 border-gray-200 p-4">
                  <h3 className="font-semibold text-black mb-2">Location & Setup</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-gray-300 px-3 py-1 text-sm text-black">
                      Relocation: {preferences.relocation}
                    </span>
                  </div>
                </div>
                <div className="border-2 border-gray-200 p-4">
                  <h3 className="font-semibold text-black mb-2">Compensation & Availability</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="border-2 border-gray-400 w-4 h-4 mt-1"></span>
                      <div>
                        <div className="font-semibold text-black">Comp range</div>
                        <div>{preferences.salaryRange}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="border-2 border-gray-400 w-4 h-4 mt-1"></span>
                      <div>
                        <div className="font-semibold text-black">Interview times</div>
                        <div>{preferences.interviewSlots}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-gray-200 p-4">
                  <h3 className="font-semibold text-black mb-2">Industries & Focus</h3>
                  <div className="flex flex-wrap gap-2">
                    {preferences.industries.map((industry) => (
                      <span key={industry} className="border border-gray-300 px-3 py-1 text-sm text-black">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>


            {/* Education */}
            <section className="bg-white border-2 border-gray-300 p-6 space-y-3">
              <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block">
                Education
              </h2>
              <p className="text-sm text-gray-600">Added from onboarding</p>
              <div className="space-y-3">
                {education.map((item) => (
                  <div key={item.school} className="border-2 border-gray-200 p-4">
                    <div className="flex flex-wrap gap-2 items-center text-black">
                      <span className="font-semibold border border-gray-400 px-2 py-1">{item.school}</span>
                      <span className="border border-gray-300 px-2 py-1 text-sm">{item.degree}</span>
                      <span className="border border-gray-300 px-2 py-1 text-sm">{item.years}</span>
                      <span className="border border-gray-300 px-2 py-1 text-sm">{item.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="bg-white border-2 border-gray-300 p-5 space-y-3">
              <h3 className="text-lg font-bold text-black border-2 border-gray-400 px-2 py-1 inline-block">
                Contact & Verification
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-black">Email</span>
                  <span className="border border-gray-300 px-2 py-1 text-black">Verified</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-black">Phone</span>
                  <span className="border border-gray-300 px-2 py-1 text-black">Verified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black">Contact</span>
                  <span className="text-black">{contact.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black">Mobile</span>
                  <span className="text-black">{contact.phone}</span>
                </div>
              </div>
              <div className="pt-3 border-t-2 border-gray-200 flex flex-col gap-2">
                <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 text-center">
                  Request Interview
                </div>
                <div className="px-4 py-2 border-2 border-gray-400 text-black text-center">Copy profile link</div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 p-5 space-y-3">
              <h3 className="text-lg font-bold text-black border-2 border-gray-400 px-2 py-1 inline-block">
                Availability
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span className="text-black">Interview</span>
                  <span className="text-black">{preferences.interviewSlots}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Start</span>
                  <span className="text-black">Ready in 2 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Current U.S. Work Authorization Status</span>
                  <span className="text-black">Authorized to work in the U.S.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Specific Visa Type (if applicable)</span>
                  <span className="text-black">N/A (U.S. Citizen)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Work Authorization</span>
                  <span className="text-black">No restrictions; full-time eligible</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Requirement for Future Sponsorship</span>
                  <span className="text-black">No sponsorship required</span>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                Availability is shown to recruiters on the public profile and kept in sync with onboarding preferences.
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 p-5 space-y-3">
              <h3 className="text-lg font-bold text-black border-2 border-gray-400 px-2 py-1 inline-block">
                Activity
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span className="text-black">Profile views</span>
                  <span className="text-black">48</span>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                Public profile shows lightweight stats; sensitive data remains private until candidate applies or
                approves contact.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

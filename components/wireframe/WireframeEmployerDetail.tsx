"use client";

const sectionTitle =
  "text-lg font-bold border-2 border-gray-400 px-3 py-1 inline-block bg-gray-50";

const badgePill =
  "px-2 py-1 border border-gray-400 text-xs font-semibold rounded-full bg-white";

const jobCards = [
  {
    title: "Lead Product Designer",
    salary: "$140K - $170K",
    location: "Remote • United States",
    posted: "3 days ago",
  },
  {
    title: "Senior Backend Engineer",
    salary: "$160K - $210K",
    location: "Austin, TX (Hybrid)",
    posted: "1 day ago",
  },
  {
    title: "People Operations Lead",
    salary: "$120K - $145K",
    location: "New York, NY",
    posted: "5 days ago",
  },
];

const promoBadges = [
  { title: "Best Place to Work 2025", desc: "Voted top 10 mid-size tech employers nationwide" },
  { title: "Fortune 500 Partner", desc: "Nimbus powers Fortune innovators across AI & cloud" },
  { title: "ISO 27001 Certified", desc: "Enterprise-grade security and compliance posture" },
  { title: "CMMI Level 3", desc: "Mature, scalable delivery practices recognized globally" },
  { title: "Climate Pledge Friendly", desc: "Carbon-neutral data centers with verified offsets" },
];

export default function WireframeEmployerDetail() {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <header className="bg-white border-b-2 border-gray-300 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-bold border-2 border-gray-400 px-3 py-1">
            LiveRec Wireframe Lab
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm">
            <span className="px-2 py-1 border border-gray-400 bg-gray-50">
              Focus: Employer Branding
            </span>
            <span className="px-2 py-1 border border-gray-400 bg-gray-50">
              Audience: Candidates & Recruiters
            </span>
          </div>
          <div className="px-3 py-1 border-2 border-gray-400 text-sm">
            @Wireframe • Employer Detail
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="w-full">
          <p className="text-sm text-gray-600 mb-4">
            Candidate-facing profile with every branding, trust, and insights module visible publicly.
          </p>
          {/* Desktop wireframe */}
          <div className="bg-white border-4 border-gray-300 shadow-sm p-6 space-y-6 w-full">

            {/* Hero */}
            <section className="space-y-4">
              <div className={sectionTitle}>1️⃣ Hero / Company Header</div>
              <div className="relative border-2 border-gray-300 h-48 bg-gradient-to-r from-gray-200 to-gray-100 flex items-center justify-center text-gray-600 text-sm">
                Rich media cover (video or photo) visible to all candidates
              </div>

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 border-2 border-gray-400 bg-white flex items-center justify-center">
                    Logo
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">Nimbus Labs</div>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className={badgePill}>AI & Data Infrastructure</span>
                      <span className={badgePill}>San Francisco, CA</span>
                      <span className={badgePill}>250-500 employees</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Verified", "Featured Employer", "High Growth"].map(
                        (badge) => (
                          <span
                            key={badge}
                            className="px-2 py-1 border border-gray-500 text-xs uppercase tracking-wide bg-gray-50"
                          >
                            {badge}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full lg:w-64">
                  <button className="py-2 bg-gray-900 text-white border-2 border-gray-900 text-sm font-semibold">
                    View Open Jobs
                  </button>
                </div>
              </div>
            </section>

            {/* Promotional badges */}
            <section className="space-y-4">
              <div className={sectionTitle}>Promotional Badges</div>
              <p className="text-sm text-gray-600">
                Nimbus Labs curates third-party accolades to help talent quickly see what makes
                the company stand out in the U.S. market.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {promoBadges.map((badge) => (
                  <button
                    key={badge.title}
                    className="border-2 border-gray-300 p-4 text-left bg-white hover:border-gray-500 focus:border-gray-900 transition-colors"
                  >
                    <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1">
                      {badge.title}
                    </div>
                    <p className="text-sm text-gray-700">{badge.desc}</p>
                  </button>
                ))}
              </div>
              <div className="text-xs text-gray-500">
                Badges are managed from the employer dashboard; candidates can tap each tile to learn
                more about the certification or award criteria.
              </div>
            </section>

            {/* About */}
            <section className="space-y-4">
              <div className={sectionTitle}>2️⃣ About the Company</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-gray-300 p-4 space-y-3">
                  <h3 className="font-semibold border border-gray-400 px-2 py-1 inline-block">
                    Mission & Story
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Nimbus Labs builds AI-native infrastructure that helps
                    enterprises launch conversational copilots safely. The
                    company is mission-led with a focus on ethical automation
                    and inclusive hiring.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Founded 2018", "Series C", "Global team"].map(
                      (tag) => (
                        <span key={tag} className={badgePill}>
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div className="border-2 border-gray-300 p-4 space-y-3 bg-white">
                  <h3 className="font-semibold">Why Work With Us</h3>
                  <p className="text-sm text-gray-700">
                    Meaningful work, transparent growth paths, and people-first
                    leadership give candidates a clear reason to follow Nimbus
                    Labs.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                    <li>Work-life balance anchored by flexible Fridays &amp; recharge bonuses</li>
                    <li>Career growth via bi-annual promo cycles and rotational programs</li>
                    <li>Leadership support with open-door exec office hours weekly</li>
                    <li>Wellness and mental health coverage tailored to U.S. market needs</li>
                    <li>Inclusive innovation squads tackling climate &amp; civic impact</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-semibold flex items-center gap-2">
                  Photos & Videos gallery
                  <span className="px-2 py-0.5 text-xs border border-gray-400">
                    Public Gallery
                  </span>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="w-36 h-24 border-2 border-gray-300 flex items-center justify-center text-xs bg-white"
                    >
                      {item <= 3 ? `HQ Photo ${item}` : `Culture Shot ${item}`}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Jobs */}
            <section className="space-y-4">
              <div className={sectionTitle}>3️⃣ Active Job Listings</div>
              <div className="space-y-3">
                {jobCards.map((job) => (
                  <div
                    key={job.title}
                    className="border-2 border-gray-300 p-4 flex flex-col gap-2 bg-white"
                  >
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                      <div className="text-lg font-semibold">
                        {job.title}
                      </div>
                      <span className="text-xs border border-gray-400 px-2 py-0.5">
                        Posted {job.posted}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                      <span className={badgePill}>{job.salary}</span>
                      <span className={badgePill}>{job.location}</span>
                      <span className={badgePill}>Quick Apply</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="space-y-4">
              <div className={sectionTitle}>4️⃣ Reviews & Ratings</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-gray-300 p-4 space-y-3 bg-white">
                  <h3 className="font-semibold">Overall rating 4.7 / 5</h3>
                  <p className="text-sm text-gray-600">
                    Based on 320 reviews across engineering, product, and
                    operations roles.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center justify-between">
                      <span>Work-life balance</span>
                      <span>4.6</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Career growth</span>
                      <span>4.8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Leadership support</span>
                      <span>4.5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Social impact &amp; purpose</span>
                      <span>4.7</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Wellness &amp; benefits</span>
                      <span>4.6</span>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-gray-300 p-4 space-y-3 bg-white">
                  <h3 className="font-semibold">Featured Reviews</h3>
                  <p className="text-3xl font-bold text-gray-900">★★★★★</p>
                  <p className="text-sm text-gray-700 italic">
                    “Nimbus empowered me to ship AI-first features in weeks with
                    mentors who genuinely invest in growth.”
                  </p>
                  <p className="text-xs text-gray-500">
                    Staff Engineer • Chicago • 4 months ago
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="space-y-4">
              <button className="w-full py-3 bg-gray-900 text-white text-sm font-semibold">
                View All Jobs
              </button>
            </section>

            {/* Review requests */}
            <section className="space-y-4">
              <div className={sectionTitle}>Review Requests &amp; Responses</div>
              <p className="text-sm text-gray-600">
                Candidates can ask culture, interview, or benefits questions and
                get a response from the Nimbus Labs talent team.
              </p>
              <div className="border-2 border-gray-300 p-4 bg-white space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    className="border border-gray-300 px-3 py-2 text-sm text-gray-700 bg-gray-50"
                    placeholder="Your name"
                  />
                  <input
                    className="border border-gray-300 px-3 py-2 text-sm text-gray-700 bg-gray-50"
                    placeholder="Email (optional)"
                  />
                </div>
                <textarea
                  className="border border-gray-300 px-3 py-2 text-sm text-gray-700 w-full bg-gray-50 min-h-[100px]"
                  placeholder="Ask about onboarding, team rituals, benefits, or work style..."
                />
                <button className="w-full py-2 border-2 border-gray-900 bg-gray-900 text-white text-sm font-semibold">
                  Submit request
                </button>
                <p className="text-xs text-gray-500">
                  Average response time: under 48 hours. Approved answers appear
                  publicly for future candidates.
                </p>
              </div>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}



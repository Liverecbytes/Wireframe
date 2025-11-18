export default function WireframeSuccessStories() {
  const candidateStories = [
    {
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "TechCorp Inc.",
      salary: "$180K",
      growth: "+150%",
      quote: "LiveRec helped me find my dream job in just 2 weeks. The AI matching was spot on!",
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      company: "DataViz Solutions",
      salary: "$165K",
      growth: "+200%",
      quote: "The platform made job searching effortless. I got multiple offers within a month.",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      salary: "$190K",
      growth: "+180%",
      quote: "Express Interest feature saved me so much time. Employers reached out directly!",
    },
  ];

  const employerStories = [
    {
      company: "TechCorp Inc.",
      improvement: "60% faster",
      hires: "50+ candidates",
      quote: "We reduced our hiring time from 6 weeks to 2 weeks. The quality of candidates is exceptional.",
      metric: "Hiring Speed",
    },
    {
      company: "CloudTech",
      improvement: "45% cost reduction",
      hires: "120+ placements",
      quote: "LiveRec's platform helped us cut recruitment costs significantly while improving candidate quality.",
      metric: "Cost Efficiency",
    },
    {
      company: "FinanceHub",
      improvement: "3x more",
      hires: "200+ successful hires",
      quote: "We've tripled our hiring volume with the same team size. The platform is a game-changer.",
      metric: "Hiring Volume",
    },
  ];

  return (
    <section className="border-b-2 border-gray-300 bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Candidate Success Stories */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black border-2 border-gray-400 p-4 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-black">
              Real stories from candidates who found their dream jobs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {candidateStories.map((story, index) => (
              <div key={index} className="border-2 border-gray-400 bg-white p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 border-2 border-gray-400 bg-gray-100 rounded-full flex items-center justify-center mr-3 text-black text-xs">
                    [Photo]
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">{story.name}</h3>
                    <p className="text-sm text-black">{story.role}</p>
                  </div>
                </div>
                <p className="text-black mb-4 border-l-2 border-gray-300 pl-3 italic">
                  "{story.quote}"
                </p>
                <div className="border-t-2 border-gray-300 pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-black">Now at</div>
                      <div className="font-semibold text-black">{story.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-black">Salary</div>
                      <div className="font-semibold text-black">{story.salary}</div>
                      <div className="text-xs text-black">{story.growth} growth</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Employer Success Stories */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black border-2 border-gray-400 p-4 mb-4">
              Employer Testimonials
            </h2>
            <p className="text-lg text-black">
              How companies are transforming their hiring process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {employerStories.map((story, index) => (
              <div key={index} className="border-2 border-gray-400 bg-white p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black mb-2">{story.company}</h3>
                  <div className="inline-block border-2 border-gray-400 px-3 py-1 text-sm font-semibold mb-3 text-black">
                    {story.improvement} {story.metric}
                  </div>
                </div>
                <p className="text-black mb-4 border-l-2 border-gray-300 pl-3 italic">
                  "{story.quote}"
                </p>
                <div className="border-t-2 border-gray-300 pt-4">
                  <div className="text-sm text-black">Total Hires</div>
                  <div className="text-2xl font-bold text-black">{story.hires}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


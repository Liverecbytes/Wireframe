export default function SuccessStories() {
  const candidateStories = [
    {
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "TechCorp Inc.",
      salary: "$180K",
      growth: "+150%",
      image: "SJ",
      quote: "LiveRec helped me find my dream job in just 2 weeks. The AI matching was spot on!",
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      company: "DataViz Solutions",
      salary: "$165K",
      growth: "+200%",
      image: "MC",
      quote: "The platform made job searching effortless. I got multiple offers within a month.",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      salary: "$190K",
      growth: "+180%",
      image: "ER",
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Candidate Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from candidates who found their dream jobs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {candidateStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {story.image}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">Now at</div>
                      <div className="font-semibold text-gray-900">{story.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Salary</div>
                      <div className="font-semibold text-green-600">{story.salary}</div>
                      <div className="text-xs text-green-600">{story.growth} growth</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Employer Success Stories */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Employer Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              How companies are transforming their hiring process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {employerStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-200"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {story.improvement} {story.metric}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-600">Total Hires</div>
                  <div className="text-2xl font-bold text-blue-600">{story.hires}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


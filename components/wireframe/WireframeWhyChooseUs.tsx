export default function WireframeWhyChooseUs() {
  const features = [
    {
      title: "AI-Powered Job Matching",
      description:
        "Our advanced AI algorithm matches you with the perfect job opportunities based on your skills, experience, and preferences.",
    },
    {
      title: "Interview Management",
      description:
        "End-to-end hiring lifecycle management. Schedule, track, and manage interviews seamlessly with our integrated platform.",
    },
    {
      title: "Verified Employers & Recruiters",
      description:
        "All employers and recruiters on our platform are verified, ensuring authentic opportunities and secure hiring processes.",
    },
    {
      title: "Express Interest",
      description:
        "Skip the traditional application process. Express interest in jobs and let employers reach out to you directly.",
    },
  ];

  const testimonials = [
    {
      quote: "LiveRec helped me land my dream role in just 3 weeks. The AI matching was incredible!",
      name: "Avery Smith",
      role: "Senior Product Manager",
    },
    {
      quote: "The platform made my job search effortless. I received multiple offers within a month!",
      name: "Michael Chen",
      role: "Data Scientist",
    },
    {
      quote: "Express Interest feature saved me so much time. Employers reached out directly!",
      name: "Emily Rodriguez",
      role: "Software Engineer",
    },
  ];

  return (
    <section className="border-b-2 border-gray-300 bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 border border-gray-400 text-sm mb-4 text-black">Why Choose Us</div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Building Career Journeys That Inspire
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Experience a smarter way to hire and get hired with intuitive tools, verified connections, and guided support at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="border-2 border-gray-400 p-6 bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-gray-400 bg-gray-100 flex-shrink-0 text-black flex items-center justify-center text-xs">
                    [Icon]
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
                    <p className="text-sm text-black">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Illustration Panel */}
          <div className="border-2 border-gray-400 bg-white p-6">
            <div className="space-y-4">
              <div className="border-b-2 border-gray-300 pb-4">
                <div className="text-sm text-black mb-1">Real Results</div>
                <h3 className="text-2xl font-bold text-black">Hire Smarter, Faster</h3>
                <div className="inline-block px-3 py-1 border border-gray-400 text-sm mt-2 text-black">
                  92% Success Rate
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-300 p-4">
                  <div className="text-2xl font-bold text-black mb-1">50k+</div>
                  <div className="text-xs text-black">Successful Matches</div>
                </div>
                <div className="border border-gray-300 p-4">
                  <div className="text-2xl font-bold text-black mb-1">3x</div>
                  <div className="text-xs text-black">Faster Hiring</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="border-2 border-gray-400 bg-gray-100 p-6">
                <div className="text-sm text-black mb-2">Candidate Spotlight</div>
                <h4 className="text-lg font-semibold text-black mb-2">
                  "{testimonials[0].quote}"
                </h4>
                <p className="text-sm text-black">
                  {testimonials[0].name} • {testimonials[0].role}
                </p>
              </div>

              <div className="flex items-center justify-between border border-gray-300 p-4 bg-gray-50">
                <div>
                  <p className="text-sm font-semibold text-black">Verified Companies</p>
                  <p className="text-xs text-black">5,000+ trusted employers hiring daily</p>
                </div>
                <div className="px-4 py-2 bg-gray-800 text-white text-sm">Discover Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


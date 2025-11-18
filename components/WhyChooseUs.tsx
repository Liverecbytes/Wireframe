"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "AI-Powered Job Matching",
    description:
      "Our advanced AI algorithm matches you with the perfect job opportunities based on your skills, experience, and preferences.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    gradient: "from-blue-300/15 to-blue-300/5",
    iconGradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Interview Management",
    description:
      "End-to-end hiring lifecycle management. Schedule, track, and manage interviews seamlessly with our integrated platform.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-blue-300/15 to-blue-300/5",
    iconGradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Verified Employers & Recruiters",
    description:
      "All employers and recruiters on our platform are verified, ensuring authentic opportunities and secure hiring processes.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    gradient: "from-blue-300/15 to-blue-300/5",
    iconGradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Express Interest",
    description:
      "Skip the traditional application process. Express interest in jobs and let employers reach out to you directly.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
    gradient: "from-blue-300/15 to-blue-300/5",
    iconGradient: "from-orange-500 to-red-500",
  },
];

const testimonials = [
  {
    quote: "LiveRec helped me land my dream role in just 3 weeks. The AI matching was incredible!",
    name: "Avery Smith",
    role: "Senior Product Manager",
    company: "TechCorp Inc.",
  },
  {
    quote: "The platform made my job search effortless. I received multiple offers within a month!",
    name: "Michael Chen",
    role: "Data Scientist",
    company: "DataViz Solutions",
  },
  {
    quote: "Express Interest feature saved me so much time. Employers reached out directly!",
    name: "Emily Rodriguez",
    role: "Software Engineer",
    company: "CloudTech",
  },
  {
    quote: "Best job portal I've used. The interview management system is a game-changer!",
    name: "David Johnson",
    role: "Full Stack Developer",
    company: "StartupXYZ",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function WhyChooseUs() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/60 via-white to-blue-50/60 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_55%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-blue-100 text-sm font-semibold text-blue-600 mb-4 shadow-sm">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Building Career Journeys That Inspire
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience a smarter way to hire and get hired with intuitive tools, verified connections, and guided support at every step.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Feature List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 w-full space-y-5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.01, y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-full"
              >
                <div className={`flex items-center gap-4 rounded-2xl bg-gradient-to-r ${feature.gradient} p-1.5 shadow-md shadow-blue-100/30 w-full`}>
                  <div className="flex items-center gap-4 rounded-[18px] bg-white p-5 w-full min-w-0">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.iconGradient} shadow-lg`}>
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Illustration Panel */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 rounded-[38px] blur-lg opacity-40" />
              <div className="relative rounded-[32px] overflow-hidden bg-white shadow-2xl border border-blue-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-50" />
                <div className="relative p-8 md:p-10 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-blue-600 font-bold tracking-wide">Real Results</p>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Hire Smarter, Faster</h3>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 font-semibold text-sm">
                      92% Success Rate
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-blue-100 bg-white/60 p-4 shadow-sm">
                      <p className="text-3xl font-bold text-blue-600">50k+</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Successful Matches</p>
                    </div>
                    <div className="rounded-2xl border border-purple-100 bg-white/60 p-4 shadow-sm">
                      <p className="text-3xl font-bold text-purple-600">3x</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Faster Hiring</p>
                    </div>
                  </div>

                  {/* Testimonial Slider */}
                  <div className="relative rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 p-6 text-white shadow-lg overflow-hidden min-h-[180px]">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/15 rounded-full blur-3xl" />
                    <div className="relative">
                      <p className="text-sm font-bold tracking-wider text-white/70 mb-4">Candidate Spotlight</p>
                      
                      <div className="relative h-[120px] overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                          <motion.div
                            key={currentTestimonial}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                              x: { type: "spring", stiffness: 300, damping: 30 },
                              opacity: { duration: 0.2 },
                            }}
                            className="absolute inset-0"
                          >
                            <h4 className="text-xl font-semibold mb-3">
                              "{testimonials[currentTestimonial].quote}"
                            </h4>
                            <p className="text-sm text-white/80">
                              {testimonials[currentTestimonial].name} • {testimonials[currentTestimonial].role}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Slider Dots */}
                      <div className="flex justify-center gap-2 mt-4">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentTestimonial
                                ? "bg-white w-8"
                                : "bg-white/40 hover:bg-white/60"
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-blue-100 bg-white/70 p-4 shadow-sm">
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Verified Companies</p>
                      <p className="text-xs text-gray-500">5,000+ trusted employers hiring daily</p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold shadow"
                    >
                      Discover Now
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

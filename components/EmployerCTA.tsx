"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EmployerCTA() {
  const cards = [
    {
      title: "Post a Job",
      description: "Reach thousands of qualified candidates instantly. Post your job opening and start receiving applications.",
      ctaText: "Get Started",
      link: "/employer/post-job",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
        </svg>
      ),
      color: "blue",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      ctaColor: "text-blue-600 group-hover:text-blue-700",
      borderHover: "hover:border-blue-500",
      hoverBg: "group-hover:bg-blue-50/50",
    },
    {
      title: "Find Candidates",
      description: "Search through our database of verified candidates. Filter by skills, experience, and location.",
      ctaText: "Search Now",
      link: "/employer/find-candidates",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: "green",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      ctaColor: "text-green-600 group-hover:text-green-700",
      borderHover: "hover:border-green-500",
      hoverBg: "group-hover:bg-green-50/50",
    },
  ];

  return (
    <section className="py-20 bg-[#F5F5F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Find and Hire Top Candidates
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Connect with the best talent in the market
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link
                href={card.link}
                className={`group block bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent ${card.borderHover} ${card.hoverBg} h-full`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`inline-flex items-center justify-center w-20 h-20 ${card.iconBg} ${card.iconColor} rounded-2xl mb-6`}
                >
                  {card.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* CTA */}
                <div className={`inline-flex items-center gap-2 ${card.ctaColor} font-semibold text-lg transition-all duration-300 group-hover:gap-4`}>
                  <span>{card.ctaText}</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

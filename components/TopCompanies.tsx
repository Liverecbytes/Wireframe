"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TopCompanies() {
  const companies = [
    {
      name: "Apple",
      logo: "https://logo.clearbit.com/apple.com",
      jobs: "1,250+",
      rating: 4.8,
      successRate: "94%",
      location: { city: "Cupertino", state: "California" },
      color: "#000000",
    },
    {
      name: "Microsoft",
      logo: "https://logo.clearbit.com/microsoft.com",
      jobs: "2,100+",
      rating: 4.7,
      successRate: "92%",
      location: { city: "Redmond", state: "Washington" },
      color: "#0078D4",
    },
    {
      name: "Amazon",
      logo: "https://logo.clearbit.com/amazon.com",
      jobs: "3,500+",
      rating: 4.6,
      successRate: "89%",
      location: { city: "Seattle", state: "Washington" },
      color: "#FF9900",
    },
    {
      name: "Google",
      logo: "https://logo.clearbit.com/google.com",
      jobs: "2,800+",
      rating: 4.9,
      successRate: "96%",
      location: { city: "Mountain View", state: "California" },
      color: "#4285F4",
    },
    {
      name: "Meta",
      logo: "https://logo.clearbit.com/meta.com",
      jobs: "1,900+",
      rating: 4.5,
      successRate: "91%",
      location: { city: "Menlo Park", state: "California" },
      color: "#1877F2",
    },
    {
      name: "Tesla",
      logo: "https://logo.clearbit.com/tesla.com",
      jobs: "850+",
      rating: 4.7,
      successRate: "93%",
      location: { city: "Austin", state: "Texas" },
      color: "#E31937",
    },
    {
      name: "JPMorgan Chase",
      logo: "https://logo.clearbit.com/jpmorganchase.com",
      jobs: "1,600+",
      rating: 4.4,
      successRate: "88%",
      location: { city: "New York", state: "New York" },
      color: "#0066CC",
    },
    {
      name: "Johnson & Johnson",
      logo: "https://logo.clearbit.com/jnj.com",
      jobs: "1,200+",
      rating: 4.6,
      successRate: "90%",
      location: { city: "New Brunswick", state: "New Jersey" },
      color: "#0066A2",
    },
    {
      name: "Visa",
      logo: "https://logo.clearbit.com/visa.com",
      jobs: "650+",
      rating: 4.8,
      successRate: "95%",
      location: { city: "Foster City", state: "California" },
      color: "#1434CB",
    },
    {
      name: "Walmart",
      logo: "https://logo.clearbit.com/walmart.com",
      jobs: "4,200+",
      rating: 4.3,
      successRate: "87%",
      location: { city: "Bentonville", state: "Arkansas" },
      color: "#0071CE",
    },
    {
      name: "Coca-Cola",
      logo: "https://logo.clearbit.com/coca-cola.com",
      jobs: "780+",
      rating: 4.5,
      successRate: "89%",
      location: { city: "Atlanta", state: "Georgia" },
      color: "#F40009",
    },
    {
      name: "Intel",
      logo: "https://logo.clearbit.com/intel.com",
      jobs: "1,400+",
      rating: 4.6,
      successRate: "91%",
      location: { city: "Santa Clara", state: "California" },
      color: "#0071C5",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Top Hiring Companies
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Join thousands of professionals working at leading Fortune 500 companies in the US
          </p>
        </motion.div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link
                href={`/companies/${company.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group h-full"
              >
                {/* Company Logo */}
                <div className="flex items-center justify-center mb-5">
                  <div className="relative w-20 h-20 rounded-xl bg-gray-50 p-3 border border-gray-200 group-hover:border-gray-300 transition-colors">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                      onError={(e) => {
                        // Fallback to colored initial if logo fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center rounded-lg text-white font-bold text-xl" style="background: ${company.color}">
                              ${company.name.substring(0, 2).toUpperCase()}
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Company Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors">
                  {company.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(company.rating)
                            ? "text-yellow-400"
                            : i < company.rating
                            ? "text-yellow-300"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{company.rating}</span>
                </div>

                {/* Stats Grid */}
                <div className="space-y-3 mb-4">
                  {/* Jobs Posted */}
                  <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-600 font-medium">Jobs Posted</span>
                    <span className="text-sm font-bold text-blue-600">{company.jobs}</span>
                  </div>

                  {/* Success Rate */}
                  <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-600 font-medium">Success Rate</span>
                    <span className="text-sm font-bold text-green-600">{company.successRate}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600 font-medium">Location</span>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-gray-900 block">{company.location.city}</span>
                      <span className="text-xs text-gray-500">{company.location.state}, US</span>
                    </div>
                  </div>
                </div>

                {/* View Details CTA */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors flex items-center justify-center gap-2">
                    View Details
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/companies"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <span>View All Companies</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

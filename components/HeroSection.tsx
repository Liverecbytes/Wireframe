"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const recentSearches = [
    "Copywriter",
    "Game Designer",
    "Cloud Engineer",
    "User Experience",
    "Project Manager",
  ];

  const floatingJobs = [
    {
      title: "We're Hiring",
      type: "Full-time",
      location: "San Francisco",
      urgent: false,
      position: { top: "20%", right: "10%" },
    },
    {
      title: "Urgent Hiring",
      type: "Remote",
      location: "New York",
      urgent: true,
      position: { bottom: "25%", left: "15%" },
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Section - Text and Search */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            {/* Headline */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6"
              >
                Unlock{" "}
                <span className="relative inline-block">
                  Your
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-60 -z-10"
                  />
                </span>{" "}
                Career Potential
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Explore countless job opportunities tailored to your skills and aspirations. Start your journey today.
              </motion.p>
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6 relative z-10"
            >
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
                {/* Search for Jobs */}
                <div className="flex-1 relative group">
                  <div className="flex items-center gap-3 px-5 py-4 bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:shadow-lg h-[56px]">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search for Jobs"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          // Handle search
                        }
                      }}
                      className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 text-base font-medium"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="flex-1 relative group">
                  <div className="flex items-center gap-3 px-5 py-4 bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:shadow-lg h-[56px]">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          // Handle search
                        }
                      }}
                      className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 text-base font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Recent Searches */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-500">Recent Searches</p>
                <div className="flex flex-wrap gap-3">
                  {recentSearches.map((search, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setJobTitle(search)}
                      className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow-md"
                    >
                      {search}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] lg:h-[700px] hidden lg:block w-full overflow-hidden"
          >
            {/* Background Image Placeholder - You can replace this with an actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden isolate">
              {/* Placeholder for person image - using a gradient for now */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-2xl relative">
                  {/* Simulated person silhouette */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-80 bg-gradient-to-t from-gray-300 to-gray-200 rounded-t-full" />
                </div>
              </div>
            </div>

            {/* Floating Job Cards */}
            {floatingJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`absolute bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl border border-gray-200 w-64 z-20 ${
                  job.urgent ? "border-red-200" : ""
                }`}
                style={job.position}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{job.title}</h3>
                    {job.urgent && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                        Urgent
                      </span>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-black text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-900 transition-colors"
                  >
                    Apply Now
                  </motion.button>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded-full" />
                  <div className="h-2 bg-gray-200 rounded-full w-3/4" />
                  <div className="h-2 bg-gray-200 rounded-full w-1/2" />
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </motion.div>
            ))}

            {/* Details button */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-1/3 right-1/3 z-20"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-200/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg text-xs font-medium shadow-md hover:bg-gray-300 transition-colors"
              >
                Details
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

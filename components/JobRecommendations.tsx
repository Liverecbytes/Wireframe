"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function JobRecommendations() {
  const premiumCategories = [
    { name: "Software Developer", count: "25,000+", gradient: "from-blue-500 to-cyan-500" },
    { name: "Data Scientist", count: "12,500+", gradient: "from-purple-500 to-pink-500" },
    { name: "Product Manager", count: "8,200+", gradient: "from-indigo-500 to-blue-500" },
    { name: "UI/UX Designer", count: "15,300+", gradient: "from-pink-500 to-rose-500" },
    { name: "DevOps Engineer", count: "9,800+", gradient: "from-green-500 to-emerald-500" },
    { name: "Full Stack Developer", count: "18,600+", gradient: "from-orange-500 to-red-500" },
    { name: "Cloud Architect", count: "6,400+", gradient: "from-cyan-500 to-blue-500" },
    { name: "Data Analyst", count: "14,200+", gradient: "from-violet-500 to-purple-500" },
    { name: "Mobile Developer", count: "10,500+", gradient: "from-teal-500 to-green-500" },
    { name: "Backend Developer", count: "16,800+", gradient: "from-amber-500 to-orange-500" },
    { name: "Frontend Developer", count: "19,400+", gradient: "from-blue-600 to-indigo-600" },
    { name: "Machine Learning Engineer", count: "7,600+", gradient: "from-purple-600 to-violet-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight min-h-[3.5em] flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent"
            >
              Get job in over hundred plus
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              different categories
            </motion.span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4 max-w-md mx-auto"
          />
        </motion.div>

        {/* Premium Job Categories Grid - 2 Rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {premiumCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/jobs?category=${encodeURIComponent(category.name)}`}
                className="block relative group overflow-hidden rounded-2xl"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white group-hover:from-transparent group-hover:to-transparent transition-all duration-300" />
                
                {/* Content */}
                <div className="relative px-5 py-4 border-2 border-gray-200 group-hover:border-transparent rounded-2xl transition-all">
                  {/* Trendy Decorative Shape */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className={`w-full h-full bg-gradient-to-br ${category.gradient} rounded-full blur-xl`} />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="font-bold text-gray-900 group-hover:text-white text-center mb-2 transition-colors text-sm md:text-base whitespace-nowrap">
                      {category.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} group-hover:bg-white transition-colors`} />
                      <p className="text-xs md:text-sm text-gray-500 group-hover:text-white/90 transition-colors font-semibold">
                        {category.count}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* More Categories Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <Link href="/jobs/categories">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <span>Explore More Categories</span>
              <motion.svg
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

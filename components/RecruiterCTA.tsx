"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RecruiterCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-800 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Become a Pro Recruiter
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Earn More. Hire Faster. Access Premium Talent.
            </p>
            <ul className="space-y-5 mb-10">
              {[
                "Access to premium candidate database with verified profiles",
                "AI-powered candidate matching for faster placements",
                "Higher commission rates and flexible payment options",
                "Dedicated support team and advanced recruitment tools",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 mr-4 flex-shrink-0 mt-1"
                  >
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/recruiters/register"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Join as Recruiter</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-dark rounded-3xl p-8 border border-white/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                className="text-6xl font-extrabold mb-3 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent"
              >
                $8K+
              </motion.div>
              <div className="text-purple-200 mb-8 text-lg">Average Monthly Earnings</div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-3xl font-bold mb-2">2,500+</div>
                  <div className="text-sm text-purple-200">Active Recruiters</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-3xl font-bold mb-2">15,000+</div>
                  <div className="text-sm text-purple-200">Placements/Month</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

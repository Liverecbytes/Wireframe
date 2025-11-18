"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ConsolidatedCTA() {
  const [activeTab, setActiveTab] = useState<"recruiter" | "affiliate">("recruiter");

  const recruiterData = {
    headline: "Transform Your Recruitment Business",
    subheadline: "Join thousands of recruiters earning more with AI-powered matching",
    description: "Access premium talent, automate matching, and scale your placements faster than ever before.",
    ctaText: "Start Earning Today",
    ctaLink: "/recruiters/register",
    benefits: [
      { icon: "💰", text: "Earn $8K+ monthly on average", highlight: "$8K+" },
      { icon: "⚡", text: "AI matches candidates in seconds", highlight: "seconds" },
      { icon: "👥", text: "Access 50,000+ verified profiles", highlight: "50,000+" },
      { icon: "🔒", text: "Enterprise-grade security & support", highlight: "Enterprise-grade" },
    ],
    stats: {
      main: "$8K+",
      label: "Average Monthly Earnings",
      secondary: [
        { value: "2,500+", label: "Active Recruiters", trend: "+32%" },
        { value: "15,000+", label: "Monthly Placements", trend: "+48%" },
      ],
      growth: "+247%",
    },
    color: {
      primary: "purple",
      brand: "text-purple-600",
      bgGradient: "from-purple-50 via-indigo-50 to-blue-50",
      cardGradient: "from-purple-600 to-indigo-600",
      cardBg: "from-purple-100 to-indigo-100",
      cardBorder: "border-purple-300",
      button: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700",
      buttonText: "text-white",
      checkmark: "text-purple-600",
      badge: "bg-purple-100 text-purple-700",
    },
  };

  const affiliateData = {
    headline: "Monetize Your Network Effortlessly",
    subheadline: "Earn passive income by referring top talent to premium opportunities",
    description: "Track referrals in real-time, automate payouts, and scale your affiliate business with our powerful platform.",
    ctaText: "Join Affiliate Program",
    ctaLink: "/affiliate/register",
    benefits: [
      { icon: "💵", text: "Earn $250+ per successful referral", highlight: "$250+" },
      { icon: "📊", text: "Real-time tracking dashboard", highlight: "Real-time" },
      { icon: "🛠️", text: "100+ marketing tools included", highlight: "100+" },
      { icon: "💳", text: "Flexible weekly or monthly payouts", highlight: "Flexible" },
    ],
    stats: {
      main: "$250+",
      label: "Per Successful Referral",
      secondary: [
        { value: "$500K+", label: "Total Earnings", trend: "+65%" },
        { value: "1,200+", label: "Active Affiliates", trend: "+28%" },
      ],
      growth: "+189%",
    },
    color: {
      primary: "green",
      brand: "text-green-600",
      bgGradient: "from-green-50 via-emerald-50 to-teal-50",
      cardGradient: "from-green-600 to-emerald-600",
      cardBg: "from-green-100 to-emerald-100",
      cardBorder: "border-green-300",
      button: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
      buttonText: "text-white",
      checkmark: "text-green-600",
      badge: "bg-green-100 text-green-700",
    },
  };

  const currentData = activeTab === "recruiter" ? recruiterData : affiliateData;

  return (
    <section className={`py-24 bg-gradient-to-br ${currentData.color.bgGradient} relative overflow-hidden`}>
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 right-0 w-96 h-96 bg-${currentData.color.primary}-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float`} />
        <div className={`absolute bottom-0 left-0 w-96 h-96 bg-${currentData.color.primary}-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float`} style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200">
            <button
              onClick={() => setActiveTab("recruiter")}
              className={`px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === "recruiter"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105"
                  : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              Become a Recruiter
            </button>
            <button
              onClick={() => setActiveTab("affiliate")}
              className={`px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === "affiliate"
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105"
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              Become an Affiliate
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${currentData.color.badge} text-sm font-semibold`}
            >
              <span>🚀</span>
              <span>Join {activeTab === "recruiter" ? "2,500+" : "1,200+"} {activeTab === "recruiter" ? "recruiters" : "affiliates"} earning today</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4 leading-tight">
                {currentData.headline}
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
                {currentData.subheadline}
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                {currentData.description}
              </p>
            </motion.div>

            {/* Primary CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={currentData.ctaLink}
                className={`inline-block ${currentData.color.button} ${currentData.color.buttonText} px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {currentData.ctaText}
                  <motion.svg
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {currentData.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-white/80 backdrop-blur-sm border-2 ${currentData.color.cardBorder} rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 leading-snug">
                        {benefit.text.split(benefit.highlight).map((part, i) => (
                          <span key={i}>
                            {part}
                            {i < benefit.text.split(benefit.highlight).length - 1 && (
                              <span className={currentData.color.brand + " font-bold"}>{benefit.highlight}</span>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section - Dashboard Visualization */}
          <motion.div
            key={`dashboard-${activeTab}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${currentData.color.cardGradient} rounded-3xl blur-2xl opacity-20`} />
              
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Dashboard Header */}
                <div className={`bg-gradient-to-r ${currentData.color.cardGradient} px-8 py-6`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">LiveRec Dashboard</h3>
                      <p className="text-white/80 text-sm">{activeTab === "recruiter" ? "Recruiter Performance" : "Affiliate Analytics"}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-xl ${currentData.color.badge} text-sm font-bold`}>
                      {currentData.stats.growth} ↑
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-8">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      {
                        value: "12.8k",
                        label: activeTab === "recruiter" ? "Active Candidates" : "Active Referrals",
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        ),
                        color: currentData.color.primary === "purple" ? "purple" : "green",
                      },
                      {
                        value: "45min",
                        label: "Avg. Response",
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ),
                        color: "blue",
                      },
                      {
                        value: "2.2k",
                        label: activeTab === "recruiter" ? "Placements" : "Commissions",
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ),
                        color: "green",
                      },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-${stat.color}-100 mb-3`}>
                          <div className={`text-${stat.color}-600`}>{stat.icon}</div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Performance Chart */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Performance Growth</h4>
                        <p className="text-xs text-gray-500 mt-1">Last 6 months trajectory</p>
                      </div>
                      <div className={`px-4 py-2 rounded-lg ${currentData.color.badge} text-xs font-bold`}>
                        {currentData.stats.growth} Growth
                      </div>
                    </div>
                    
                    <div className="h-48 relative mb-6">
                      <svg className="w-full h-full absolute inset-0" viewBox="0 0 320 140" preserveAspectRatio="none">
                        {/* Grid Lines */}
                        {[0, 1, 2, 3, 4].map((i) => (
                          <line
                            key={i}
                            x1="30"
                            y1={20 + i * 30}
                            x2="300"
                            y2={20 + i * 30}
                            stroke="#E5E7EB"
                            strokeWidth="1"
                            strokeDasharray="3,3"
                          />
                        ))}
                        
                        {/* Y-axis Labels */}
                        {["100%", "75%", "50%", "25%", "0%"].map((label, i) => (
                          <text
                            key={i}
                            x="25"
                            y={23 + i * 30}
                            fill="#6B7280"
                            fontSize="10"
                            textAnchor="end"
                            className="font-semibold"
                          >
                            {label}
                          </text>
                        ))}
                        
                        {/* X-axis Labels */}
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, i) => (
                          <text
                            key={i}
                            x={35 + i * 53}
                            y="135"
                            fill="#6B7280"
                            fontSize="11"
                            textAnchor="middle"
                            className="font-semibold"
                          >
                            {month}
                          </text>
                        ))}
                        
                        {/* Gradient Fill */}
                        <defs>
                          <linearGradient id={`gradient-${activeTab}-new`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={currentData.color.primary === "purple" ? "#9333EA" : "#10B981"} stopOpacity="0.4" />
                            <stop offset="100%" stopColor={currentData.color.primary === "purple" ? "#9333EA" : "#10B981"} stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        
                        {/* Filled Area */}
                        <path
                          d="M 35,110 L 35,85 L 88,72 L 141,58 L 194,42 L 247,30 L 247,110 Z"
                          fill={`url(#gradient-${activeTab}-new)`}
                        />
                        
                        {/* Performance Line */}
                        <polyline
                          points="35,85 88,72 141,58 194,42 247,30"
                          fill="none"
                          stroke={currentData.color.primary === "purple" ? "#9333EA" : "#10B981"}
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* Data Points */}
                        {[
                          { x: 35, y: 85 },
                          { x: 88, y: 72 },
                          { x: 141, y: 58 },
                          { x: 194, y: 42 },
                          { x: 247, y: 30 },
                        ].map((point, i) => (
                          <g key={i}>
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="5"
                              fill={currentData.color.primary === "purple" ? "#9333EA" : "#10B981"}
                              stroke="white"
                              strokeWidth="3"
                            />
                          </g>
                        ))}
                      </svg>
                    </div>
                    
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                      {[
                        { value: "98.2%", label: "Success Rate", icon: "✓" },
                        { value: "3.2x", label: "Faster", icon: "⚡" },
                        { value: "15k+", label: "This Month", icon: "📈" },
                      ].map((metric, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                          <div className="text-xs text-gray-500 font-medium">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Earnings Card */}
                  <div className={`mt-6 bg-gradient-to-br ${currentData.color.cardBg} border-2 ${currentData.color.cardBorder} rounded-2xl p-6 shadow-lg`}>
                    <div className="text-center">
                      <div className={`text-5xl font-extrabold ${currentData.color.brand} mb-2`}>
                        {currentData.stats.main}
                      </div>
                      <div className="text-sm font-bold text-gray-700 mb-4">
                        {currentData.stats.label}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {currentData.stats.secondary.map((stat, index) => (
                          <div key={index} className="bg-white/60 rounded-xl p-3">
                            <div className={`text-xl font-bold ${currentData.color.brand} mb-1`}>
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-600 font-medium mb-1">{stat.label}</div>
                            <div className="text-xs text-green-600 font-bold">{stat.trend} ↑</div>
                          </div>
                        ))}
                      </div>
                    </div>
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

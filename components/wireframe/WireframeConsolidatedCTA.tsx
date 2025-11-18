"use client";

import { useState } from "react";

export default function WireframeConsolidatedCTA() {
  const [activeTab, setActiveTab] = useState<"recruiter" | "affiliate">("recruiter");

  const recruiterData = {
    headline: "Transform Your Recruitment Business",
    subheadline: "Join thousands of recruiters earning more with AI-powered matching",
    description: "Access premium talent, automate matching, and scale your placements faster than ever before.",
    ctaText: "Start Earning Today",
    benefits: [
      "Earn $8K+ monthly on average",
      "AI matches candidates in seconds",
      "Access 50,000+ verified profiles",
      "Enterprise-grade security & support",
    ],
    stats: {
      main: "$8K+",
      label: "Average Monthly Earnings",
      secondary: [
        { value: "2,500+", label: "Active Recruiters" },
        { value: "15,000+", label: "Monthly Placements" },
      ],
    },
  };

  const affiliateData = {
    headline: "Monetize Your Network Effortlessly",
    subheadline: "Earn passive income by referring top talent to premium opportunities",
    description: "Track referrals in real-time, automate payouts, and scale your affiliate business with our powerful platform.",
    ctaText: "Join Affiliate Program",
    benefits: [
      "Earn $250+ per successful referral",
      "Track referrals in real-time dashboard",
      "100+ marketing tools & integrations",
      "Flexible weekly or monthly payouts",
    ],
    stats: {
      main: "$250+",
      label: "Per Successful Referral",
      secondary: [
        { value: "$500K+", label: "Total Earnings" },
        { value: "1,200+", label: "Active Affiliates" },
      ],
    },
  };

  const currentData = activeTab === "recruiter" ? recruiterData : affiliateData;

  return (
    <section className="border-b-2 border-gray-300 bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex border-2 border-gray-400 bg-white">
            <button
              onClick={() => setActiveTab("recruiter")}
              className={`px-6 py-2 border-r-2 border-gray-400 ${
                activeTab === "recruiter" ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              Become a Recruiter
            </button>
            <button
              onClick={() => setActiveTab("affiliate")}
              className={`px-6 py-2 ${
                activeTab === "affiliate" ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              Become an Affiliate
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 border border-gray-400 text-sm mb-4 text-black">
              Join {activeTab === "recruiter" ? "2,500+" : "1,200+"} {activeTab === "recruiter" ? "recruiters" : "affiliates"} earning today
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-black border-2 border-gray-400 p-4">
              {currentData.headline}
            </h2>
            <p className="text-lg text-black border border-gray-300 p-3">
              {currentData.subheadline}
            </p>
            <p className="text-base text-black border border-gray-300 p-3">
              {currentData.description}
            </p>

            <div className="px-8 py-3 bg-gray-800 text-white border-2 border-gray-900 inline-block">
              {currentData.ctaText}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {currentData.benefits.map((benefit, index) => (
                <div key={index} className="border-2 border-gray-400 p-4 bg-white">
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 border-2 border-gray-400 mt-0.5 text-black flex items-center justify-center text-xs">✓</div>
                    <span className="text-sm text-black">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Dashboard */}
          <div className="border-2 border-gray-400 bg-white p-6">
            <div className="border-b-2 border-gray-300 pb-4 mb-6">
              <h3 className="text-lg font-bold text-black">LiveRec Dashboard</h3>
              <p className="text-sm text-black">
                {activeTab === "recruiter" ? "Recruiter Performance" : "Affiliate Analytics"}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="border border-gray-300 p-3">
                <div className="text-lg font-bold mb-1 text-black">12.8k</div>
                <div className="text-xs text-black">
                  Active {activeTab === "recruiter" ? "Candidates" : "Referrals"}
                </div>
              </div>
              <div className="border border-gray-300 p-3">
                <div className="text-lg font-bold mb-1 text-black">45min</div>
                <div className="text-xs text-black">Avg. Response</div>
              </div>
              <div className="border border-gray-300 p-3">
                <div className="text-lg font-bold mb-1 text-black">2.2k</div>
                <div className="text-xs text-black">
                  {activeTab === "recruiter" ? "Placements" : "Commissions"}
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-400 bg-gray-50 p-4 mb-6">
              <div className="text-sm font-bold mb-2 text-black">Performance Growth</div>
              <div className="border border-gray-300 bg-white h-32 flex items-center justify-center text-black">
                [Chart: Last 6 months trajectory]
              </div>
            </div>

            <div className="border-2 border-gray-400 bg-gray-100 p-4">
              <div className="text-center mb-3">
                <div className="text-3xl font-bold text-black mb-1">{currentData.stats.main}</div>
                <div className="text-sm text-black">{currentData.stats.label}</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {currentData.stats.secondary.map((stat, index) => (
                  <div key={index} className="border border-gray-300 bg-white p-2 text-center">
                    <div className="text-lg font-bold text-black">{stat.value}</div>
                    <div className="text-xs text-black">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


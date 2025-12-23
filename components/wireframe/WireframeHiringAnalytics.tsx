"use client";

export default function WireframeHiringAnalytics() {
  const jobDetails = {
    id: "JOB-2048",
    title: "Senior Product Designer",
    status: "Active",
    postedDate: "Dec 5, 2024",
    daysActive: 13
  };

  const overallStats = [
    { label: "Total Applications", value: "47", trend: "+12 this week", color: "bg-blue-50 border-blue-300" },
    { label: "Active Candidates", value: "35", trend: "In pipeline", color: "bg-purple-50 border-purple-300" },
    { label: "Interviews Completed", value: "18", trend: "8 pending", color: "bg-yellow-50 border-yellow-300" },
    { label: "Offers Sent", value: "3", trend: "1 accepted", color: "bg-green-50 border-green-300" }
  ];

  const pipelineStages = [
    { stage: "Applied", count: 23, percentage: 49, avgDays: 0, dropOff: 0 },
    { stage: "Shortlisted", count: 12, percentage: 26, avgDays: 2.3, dropOff: 48 },
    { stage: "Interview", count: 8, percentage: 17, avgDays: 5.7, dropOff: 33 },
    { stage: "Offered", count: 3, percentage: 6, avgDays: 12.5, dropOff: 63 },
    { stage: "Hired", count: 1, percentage: 2, avgDays: 18.0, dropOff: 67 }
  ];

  const interviewMetrics = {
    scheduled: 26,
    completed: 18,
    noShow: 2,
    cancelled: 3,
    pending: 8,
    averageRating: 4.2
  };

  const timeMetrics = [
    { metric: "Avg. Time to Shortlist", value: "2.3 days", benchmark: "Industry: 3.5 days", status: "good" },
    { metric: "Avg. Time to Interview", value: "5.7 days", benchmark: "Industry: 7 days", status: "good" },
    { metric: "Avg. Time to Offer", value: "12.5 days", benchmark: "Industry: 14 days", status: "good" },
    { metric: "Avg. Time to Hire", value: "18 days", benchmark: "Industry: 25 days", status: "excellent" }
  ];

  const conversionRates = [
    { from: "Applied", to: "Shortlisted", rate: 52, count: "23 → 12" },
    { from: "Shortlisted", to: "Interview", rate: 67, count: "12 → 8" },
    { from: "Interview", to: "Offer", rate: 38, count: "8 → 3" },
    { from: "Offer", to: "Hired", rate: 33, count: "3 → 1" }
  ];

  const sourceAnalysis = [
    { source: "Direct Application", count: 18, percentage: 38, hired: 1 },
    { source: "LinkedIn", count: 12, percentage: 26, hired: 0 },
    { source: "Referral", count: 8, percentage: 17, hired: 0 },
    { source: "Job Board", count: 5, percentage: 11, hired: 0 },
    { source: "Recruiter", count: 4, percentage: 8, hired: 0 }
  ];

  const topCandidates = [
    { name: "Emily Watson", score: 94, stage: "Offered", experience: "7 years", status: "Pending response" },
    { name: "Alex Johnson", score: 92, stage: "Applied", experience: "8+ years", status: "New application" },
    { name: "Sarah Chen", score: 88, stage: "Shortlisted", experience: "6 years", status: "Under review" },
    { name: "Michael Rodriguez", score: 85, stage: "Interview", experience: "10 years", status: "Interview scheduled" }
  ];

  const weeklyTrend = [
    { week: "Week 1", applications: 8, interviews: 0, offers: 0 },
    { week: "Week 2", applications: 15, interviews: 6, offers: 1 },
    { week: "Week 3", applications: 12, interviews: 8, offers: 2 },
    { week: "Week 4", applications: 12, interviews: 4, offers: 0 }
  ];

  const rejectionReasons = [
    { reason: "Skills mismatch", count: 8, percentage: 67 },
    { reason: "Experience level", count: 2, percentage: 17 },
    { reason: "Salary expectations", count: 1, percentage: 8 },
    { reason: "Location preferences", count: 1, percentage: 8 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b-2 border-gray-300 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-black border-2 border-gray-400 px-4 py-2">LiveRec</div>
            <nav className="hidden md:flex space-x-6">
              {["Dashboard", "Jobs", "Candidates", "Analytics", "Messages"].map((item) => (
                <div key={item} className={`px-3 py-1 border ${item === "Analytics" ? "border-2 border-gray-600 bg-gray-100" : "border-gray-400"} text-black`}>
                  {item}
                </div>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 border border-gray-400 text-black">🔔 Notifications</div>
              <div className="w-10 h-10 border-2 border-gray-400 bg-gray-100 flex items-center justify-center text-gray-500">
                👤
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="border border-gray-300 px-2 py-1">Dashboard</span>
          <span>→</span>
          <span className="border border-gray-300 px-2 py-1">Jobs</span>
          <span>→</span>
          <span className="border border-gray-300 px-2 py-1">{jobDetails.title}</span>
          <span>→</span>
          <span className="border border-gray-400 px-2 py-1 bg-gray-100 text-black">Analytics</span>
        </div>

        {/* Page Header */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-2">
                Hiring Analytics
              </h1>
              <div className="flex flex-wrap gap-2 text-sm text-gray-700 mt-2">
                <span className="border border-gray-400 px-2 py-1">Job: {jobDetails.title}</span>
                <span className="border border-gray-400 px-2 py-1">ID: {jobDetails.id}</span>
                <span className="border border-gray-300 px-2 py-1">Posted: {jobDetails.postedDate}</span>
                <span className="border border-gray-300 px-2 py-1">Active for: {jobDetails.daysActive} days</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 border-2 border-gray-400 text-black">Export Report</div>
              <div className="px-4 py-2 border-2 border-gray-400 text-black">Share</div>
              <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900">Download PDF</div>
            </div>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {overallStats.map((stat, idx) => (
            <div key={idx} className={`border-2 ${stat.color} p-6`}>
              <div className="text-4xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-600">{stat.trend}</div>
            </div>
          ))}
        </div>

        {/* Pipeline Overview */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-6">
            Pipeline Overview
          </h2>
          
          {/* Visual Pipeline */}
          <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-4">
            {pipelineStages.map((stage, idx) => (
              <div key={idx} className="flex items-center">
                <div className="min-w-[140px] border-2 border-gray-300 p-4 bg-gray-50 text-center">
                  <div className="font-bold text-black text-xl mb-1">{stage.count}</div>
                  <div className="text-sm text-gray-700 mb-2">{stage.stage}</div>
                  <div className="text-xs text-gray-600">{stage.percentage}%</div>
                </div>
                {idx < pipelineStages.length - 1 && (
                  <div className="px-2 text-gray-400">→</div>
                )}
              </div>
            ))}
          </div>

          {/* Detailed Pipeline Table */}
          <div className="border-2 border-gray-200 overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-black border-r border-gray-300">Stage</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-black border-r border-gray-300">Candidates</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-black border-r border-gray-300">% of Total</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-black border-r border-gray-300">Avg. Days in Stage</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-black">Drop-off Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pipelineStages.map((stage, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold text-black border-r border-gray-200">{stage.stage}</td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200">{stage.count}</td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200">{stage.percentage}%</td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200">{stage.avgDays} days</td>
                    <td className="px-4 py-3 text-sm text-black">
                      {stage.dropOff > 0 ? (
                        <span className="text-red-700">{stage.dropOff}%</span>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Time Metrics */}
          <div className="bg-white border-2 border-gray-300 p-6">
            <h2 className="text-xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-4">
              Time to Hire Metrics
            </h2>
            <div className="space-y-3">
              {timeMetrics.map((metric, idx) => (
                <div key={idx} className="border-2 border-gray-200 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-black">{metric.metric}</span>
                    <span className={`text-xl font-bold ${
                      metric.status === 'excellent' ? 'text-green-700' : 
                      metric.status === 'good' ? 'text-blue-700' : 
                      'text-gray-700'
                    }`}>
                      {metric.value}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{metric.benchmark}</span>
                    <span className={`px-2 py-1 border ${
                      metric.status === 'excellent' ? 'border-green-400 bg-green-50 text-green-800' : 
                      'border-blue-400 bg-blue-50 text-blue-800'
                    }`}>
                      {metric.status === 'excellent' ? '🏆 Excellent' : '✓ Good'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interview Metrics */}
          <div className="bg-white border-2 border-gray-300 p-6">
            <h2 className="text-xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-4">
              Interview Metrics
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="border-2 border-gray-200 p-4 bg-blue-50">
                  <div className="text-3xl font-bold text-black">{interviewMetrics.scheduled}</div>
                  <div className="text-sm text-gray-700">Total Scheduled</div>
                </div>
                <div className="border-2 border-gray-200 p-4 bg-green-50">
                  <div className="text-3xl font-bold text-black">{interviewMetrics.completed}</div>
                  <div className="text-sm text-gray-700">Completed</div>
                </div>
                <div className="border-2 border-gray-200 p-4 bg-yellow-50">
                  <div className="text-3xl font-bold text-black">{interviewMetrics.pending}</div>
                  <div className="text-sm text-gray-700">Pending</div>
                </div>
                <div className="border-2 border-gray-200 p-4 bg-red-50">
                  <div className="text-3xl font-bold text-black">{interviewMetrics.noShow + interviewMetrics.cancelled}</div>
                  <div className="text-sm text-gray-700">No-show/Cancelled</div>
                </div>
              </div>
              
              <div className="border-2 border-gray-200 p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Interview Success Rate</span>
                  <span className="text-2xl font-bold text-black">
                    {Math.round((interviewMetrics.completed / interviewMetrics.scheduled) * 100)}%
                  </span>
                </div>
              </div>

              <div className="border-2 border-gray-200 p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Average Candidate Rating</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-black">{interviewMetrics.averageRating}</span>
                    <span className="text-yellow-500">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conversion Rates */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-6">
            Stage Conversion Rates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {conversionRates.map((conversion, idx) => (
              <div key={idx} className="border-2 border-gray-200 p-4">
                <div className="text-center mb-2">
                  <div className="text-sm text-gray-600 mb-1">{conversion.from} → {conversion.to}</div>
                  <div className="text-3xl font-bold text-black">{conversion.rate}%</div>
                </div>
                <div className="border-t-2 border-gray-200 pt-2 text-center text-sm text-gray-700">
                  {conversion.count}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Source Analysis */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-6">
            Application Source Analysis
          </h2>
          <div className="border-2 border-gray-200 overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-black border-r border-gray-300">Source</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-black border-r border-gray-300">Applications</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-black border-r border-gray-300">% of Total</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-black">Hired</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sourceAnalysis.map((source, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold text-black border-r border-gray-200">{source.source}</td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200">{source.count}</td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 h-2 rounded">
                          <div 
                            className="bg-blue-500 h-2 rounded" 
                            style={{ width: `${source.percentage}%` }}
                          ></div>
                        </div>
                        <span>{source.percentage}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-black">
                      {source.hired > 0 ? (
                        <span className="text-green-700 font-semibold">{source.hired}</span>
                      ) : (
                        <span className="text-gray-500">0</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Trend */}
          <div className="bg-white border-2 border-gray-300 p-6">
            <h2 className="text-xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-4">
              Weekly Activity Trend
            </h2>
            <div className="space-y-3">
              {weeklyTrend.map((week, idx) => (
                <div key={idx} className="border-2 border-gray-200 p-4">
                  <div className="font-semibold text-black mb-3">{week.week}</div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="border border-blue-300 bg-blue-50 p-2 text-center">
                      <div className="text-lg font-bold text-black">{week.applications}</div>
                      <div className="text-xs text-gray-700">Applications</div>
                    </div>
                    <div className="border border-yellow-300 bg-yellow-50 p-2 text-center">
                      <div className="text-lg font-bold text-black">{week.interviews}</div>
                      <div className="text-xs text-gray-700">Interviews</div>
                    </div>
                    <div className="border border-green-300 bg-green-50 p-2 text-center">
                      <div className="text-lg font-bold text-black">{week.offers}</div>
                      <div className="text-xs text-gray-700">Offers</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rejection Analysis */}
          <div className="bg-white border-2 border-gray-300 p-6">
            <h2 className="text-xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-4">
              Rejection Insights
            </h2>
            <div className="space-y-3 mb-4">
              {rejectionReasons.map((reason, idx) => (
                <div key={idx} className="border-2 border-gray-200 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-black">{reason.reason}</span>
                    <span className="text-xl font-bold text-black">{reason.count}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 h-3 rounded">
                      <div 
                        className="bg-red-500 h-3 rounded" 
                        style={{ width: `${reason.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-700">{reason.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-gray-200 pt-4">
              <div className="text-sm text-gray-700">
                <span className="font-semibold text-black">Total Rejected:</span> 12 candidates
              </div>
            </div>
          </div>
        </div>

        {/* Top Candidates */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-6">
            Top Candidates by Match Score
          </h2>
          <div className="space-y-3">
            {topCandidates.map((candidate, idx) => (
              <div key={idx} className="border-2 border-gray-200 p-4 hover:bg-gray-50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-2xl font-bold text-black w-16 text-center">
                      #{idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <span className="font-semibold text-black">{candidate.name}</span>
                        <span className="text-sm border border-gray-300 px-2 py-1">{candidate.experience}</span>
                        <span className={`text-sm px-2 py-1 border ${
                          candidate.stage === 'Offered' ? 'border-green-400 bg-green-50 text-green-800' :
                          candidate.stage === 'Interview' ? 'border-yellow-400 bg-yellow-50 text-yellow-800' :
                          candidate.stage === 'Shortlisted' ? 'border-purple-400 bg-purple-50 text-purple-800' :
                          'border-blue-400 bg-blue-50 text-blue-800'
                        }`}>
                          {candidate.stage}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">{candidate.status}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="border-2 border-gray-300 px-4 py-2 bg-gray-50">
                      <div className="text-xs text-gray-600">Match Score</div>
                      <div className="text-2xl font-bold text-black">{candidate.score}%</div>
                    </div>
                    <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 text-sm">
                      View Profile
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <h2 className="text-2xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block mb-6">
            Key Insights & Recommendations
          </h2>
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50">
              <div className="font-semibold text-green-900">✓ Strong Performance</div>
              <p className="text-sm text-green-800 mt-1">
                Your time-to-hire (18 days) is 28% faster than industry average. Great job!
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
              <div className="font-semibold text-blue-900">→ Opportunity</div>
              <p className="text-sm text-blue-800 mt-1">
                Direct applications have highest conversion rate. Consider investing more in your careers page.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50">
              <div className="font-semibold text-yellow-900">⚠ Watch Out</div>
              <p className="text-sm text-yellow-800 mt-1">
                63% drop-off from Interview to Offer stage. Review interview process and feedback loop.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
              <div className="font-semibold text-purple-900">💡 Insight</div>
              <p className="text-sm text-purple-800 mt-1">
                67% of rejections are due to skills mismatch. Consider refining job requirements or expanding search.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


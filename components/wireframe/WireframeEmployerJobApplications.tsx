"use client";

import { useState } from "react";

export default function WireframeEmployerJobApplications() {
  const [expandedAssessments, setExpandedAssessments] = useState<{[key: string]: boolean}>({});
  const [activeTab, setActiveTab] = useState<'regular' | 'express'>('regular');

  const toggleAssessment = (applicantId: string, assessmentName: string) => {
    const key = `${applicantId}-${assessmentName}`;
    setExpandedAssessments(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  const jobDetails = {
    id: "JOB-2048",
    title: "Senior Product Designer",
    department: "Product & Design",
    location: "San Francisco, CA (Hybrid)",
    postedDate: "Posted 12 days ago",
    status: "Active",
    applicationsReceived: 47,
    requiredIQ: 110 // Minimum IQ requirement for this job
  };

  const regularApplicants = [
    {
      id: "APP-001",
      name: "Alex Johnson",
      photo: "Photo",
      applicantType: "regular",
      appliedDate: "Dec 17, 2024 at 2:45 PM",
      stage: "Applied",
      experience: "8+ years",
      location: "San Francisco, CA",
      noticePeriod: "2 weeks",
      matchScore: 92,
      keySkills: ["Product Strategy", "UX Research", "Figma", "Design Systems"],
      lastActivity: "Applied 1 day ago",
      resumeAvailable: true,
      assessments: [
        { name: "UX Design Skills", score: 88, status: "Passed" },
        { name: "Design Thinking", score: 92, status: "Excellent" },
        { name: "Figma Proficiency", score: 95, status: "Excellent" }
      ],
      iqTest: {
        score: 125,
        percentile: 95,
        completedDate: "Dec 17, 2024 at 2:30 PM",
        duration: "60 minutes",
        categories: [
          { name: "Logical Reasoning", score: 128 },
          { name: "Verbal Comprehension", score: 122 },
          { name: "Pattern Recognition", score: 126 },
          { name: "Mathematical Ability", score: 124 }
        ],
        interpretation: "Superior Intelligence",
        response: "The candidate demonstrated exceptional analytical and problem-solving abilities across all cognitive domains. Particularly strong in logical reasoning and pattern recognition, with excellent verbal comprehension skills."
      },
      screeningResponses: [
        {
          question: "Why are you interested in this position?",
          answer: "I'm excited about this opportunity because it aligns perfectly with my passion for fintech product design. Having led similar projects at Stripe, I understand the complexity of payment systems and the importance of creating intuitive user experiences for financial products. Your company's focus on innovation and user-centered design resonates with my professional values.",
          type: "text"
        },
        {
          question: "Are you authorized to work in the United States?",
          answer: "Yes",
          type: "boolean"
        },
        {
          question: "What is your expected salary range?",
          answer: "$140,000 - $170,000 base salary plus equity",
          type: "text"
        },
        {
          question: "When can you start if offered the position?",
          answer: "2 weeks notice required",
          type: "text"
        },
        {
          question: "Do you have experience with design systems?",
          answer: "Yes, I have 5+ years of experience building and maintaining design systems at scale. At Stripe, I helped evolve the design system that was adopted across 6+ product teams.",
          type: "text"
        }
      ]
    },
    {
      id: "APP-002",
      name: "Sarah Chen",
      photo: "Photo",
      applicantType: "regular",
      appliedDate: "Dec 17, 2024 at 10:30 AM",
      stage: "Shortlisted",
      experience: "6 years",
      location: "Oakland, CA",
      noticePeriod: "4 weeks",
      matchScore: 88,
      keySkills: ["Interaction Design", "Prototyping", "User Testing", "Sketch"],
      lastActivity: "Shortlisted 1 day ago",
      resumeAvailable: true,
      assessments: [
        { name: "UX Design Skills", score: 82, status: "Passed" },
        { name: "Figma Proficiency", score: 88, status: "Passed" }
      ],
      iqTest: {
        score: 118,
        percentile: 88,
        completedDate: "Dec 17, 2024 at 9:45 AM",
        duration: "60 minutes",
        categories: [
          { name: "Logical Reasoning", score: 120 },
          { name: "Verbal Comprehension", score: 115 },
          { name: "Pattern Recognition", score: 119 },
          { name: "Mathematical Ability", score: 117 }
        ],
        interpretation: "Above Average Intelligence",
        response: "The candidate showed strong cognitive abilities with well-balanced performance across all areas. Good analytical thinking and problem-solving skills suitable for complex design challenges."
      },
      screeningResponses: [
        {
          question: "Why are you interested in this position?",
          answer: "I'm looking for opportunities to grow my skills in product design and work on challenging projects. Your company's reputation in the industry and focus on user experience makes this an ideal fit for my career goals.",
          type: "text"
        },
        {
          question: "Are you authorized to work in the United States?",
          answer: "Yes",
          type: "boolean"
        },
        {
          question: "What is your expected salary range?",
          answer: "$120,000 - $145,000",
          type: "text"
        },
        {
          question: "When can you start if offered the position?",
          answer: "4 weeks notice required",
          type: "text"
        },
        {
          question: "Do you have experience with design systems?",
          answer: "Yes, I've worked with existing design systems and contributed to component libraries in my current role.",
          type: "text"
        }
      ]
    },
    {
      id: "APP-003",
      name: "Michael Rodriguez",
      photo: "Photo",
      applicantType: "regular",
      appliedDate: "Dec 16, 2024 at 4:15 PM",
      stage: "Interview",
      experience: "10 years",
      location: "San Jose, CA",
      noticePeriod: "1 month",
      matchScore: 85,
      keySkills: ["Design Leadership", "Visual Design", "Mentorship", "Adobe Creative Suite"],
      lastActivity: "Interview scheduled for Dec 20",
      resumeAvailable: true,
      interviewScheduled: "Dec 20, 2024 at 2:00 PM",
      iqTest: {
        score: 108,
        percentile: 70,
        completedDate: "Dec 16, 2024 at 3:30 PM",
        duration: "60 minutes",
        categories: [
          { name: "Logical Reasoning", score: 110 },
          { name: "Verbal Comprehension", score: 106 },
          { name: "Pattern Recognition", score: 109 },
          { name: "Mathematical Ability", score: 107 }
        ],
        interpretation: "Average Intelligence",
        response: "The candidate demonstrated adequate cognitive abilities. While the IQ score is slightly below the job requirement (110), their extensive 10 years of experience and leadership skills may compensate for this."
      },
      screeningResponses: [
        {
          question: "Why are you interested in this position?",
          answer: "With 10 years in design leadership, I'm seeking a role where I can leverage my experience to mentor teams and drive strategic design initiatives. Your company's vision aligns with my leadership philosophy.",
          type: "text"
        },
        {
          question: "Are you authorized to work in the United States?",
          answer: "Yes",
          type: "boolean"
        },
        {
          question: "What is your expected salary range?",
          answer: "$160,000 - $185,000 (reflecting senior leadership experience)",
          type: "text"
        },
        {
          question: "When can you start if offered the position?",
          answer: "1 month notice required",
          type: "text"
        },
        {
          question: "Do you have experience with design systems?",
          answer: "Yes, I've led design system initiatives at enterprise scale and managed teams responsible for system governance and evolution.",
          type: "text"
        }
      ]
    },
    {
      id: "APP-004",
      name: "Emily Watson",
      photo: "Photo",
      applicantType: "regular",
      appliedDate: "Dec 15, 2024 at 11:20 AM",
      stage: "Offered",
      experience: "7 years",
      location: "Remote (CA)",
      noticePeriod: "3 weeks",
      matchScore: 94,
      keySkills: ["Product Design", "Design Thinking", "Figma", "Front-end Development"],
      lastActivity: "Offer sent 2 days ago",
      resumeAvailable: true,
      offerStatus: "Pending response",
      assessments: [
        { name: "UX Design Skills", score: 94, status: "Excellent" },
        { name: "Design Thinking", score: 95, status: "Excellent" }
      ],
      iqTest: {
        score: 132,
        percentile: 98,
        completedDate: "Dec 15, 2024 at 11:00 AM",
        duration: "60 minutes",
        categories: [
          { name: "Logical Reasoning", score: 135 },
          { name: "Verbal Comprehension", score: 130 },
          { name: "Pattern Recognition", score: 133 },
          { name: "Mathematical Ability", score: 131 }
        ],
        interpretation: "Very Superior Intelligence",
        response: "Exceptional cognitive abilities demonstrated across all areas. The candidate shows outstanding analytical thinking, pattern recognition, and problem-solving skills. Top 2% of population."
      },
      screeningResponses: [
        {
          question: "Why are you interested in this position?",
          answer: "I'm passionate about solving complex design challenges in the fintech space. Your company's innovative approach to financial products and commitment to excellent user experience make this an exciting opportunity to contribute my skills while continuing to grow professionally.",
          type: "text"
        },
        {
          question: "Are you authorized to work in the United States?",
          answer: "Yes",
          type: "boolean"
        },
        {
          question: "What is your expected salary range?",
          answer: "$155,000 - $175,000 base + equity",
          type: "text"
        },
        {
          question: "When can you start if offered the position?",
          answer: "3 weeks notice required",
          type: "text"
        },
        {
          question: "Do you have experience with design systems?",
          answer: "Yes, extensive experience. I've built design systems from scratch and have deep expertise in component architecture, design tokens, and cross-platform scalability.",
          type: "text"
        }
      ]
    },
    {
      id: "APP-005",
      name: "David Kim",
      photo: "Photo",
      applicantType: "regular",
      appliedDate: "Dec 14, 2024 at 3:45 PM",
      stage: "Applied",
      experience: "5 years",
      location: "Berkeley, CA",
      noticePeriod: "Immediate",
      matchScore: 78,
      keySkills: ["UI Design", "Animation", "After Effects", "Design Systems"],
      lastActivity: "Applied 4 days ago",
      resumeAvailable: true,
      iqTest: {
        score: 102,
        percentile: 55,
        completedDate: "Dec 14, 2024 at 4:00 PM",
        duration: "60 minutes",
        categories: [
          { name: "Logical Reasoning", score: 105 },
          { name: "Verbal Comprehension", score: 100 },
          { name: "Pattern Recognition", score: 103 },
          { name: "Mathematical Ability", score: 101 }
        ],
        interpretation: "Average Intelligence",
        response: "The candidate demonstrated average cognitive abilities. The IQ score is below the job requirement (110), which may indicate challenges with complex problem-solving tasks required for senior-level positions."
      },
      screeningResponses: [
        {
          question: "Why are you interested in this position?",
          answer: "I'm looking for a new challenge where I can apply my UI design and animation skills. I'm particularly interested in working on modern design projects.",
          type: "text"
        },
        {
          question: "Are you authorized to work in the United States?",
          answer: "Yes",
          type: "boolean"
        },
        {
          question: "What is your expected salary range?",
          answer: "$95,000 - $115,000",
          type: "text"
        },
        {
          question: "When can you start if offered the position?",
          answer: "Immediately available",
          type: "text"
        },
        {
          question: "Do you have experience with design systems?",
          answer: "I've used design systems in my projects and follow component guidelines.",
          type: "text"
        }
      ]
    }
  ];

  const expressInterestApplicants = [
    {
      id: "EXP-001",
      name: "Robert Martinez",
      photo: "Photo",
      applicantType: "express",
      expressedDate: "Dec 18, 2024 at 10:30 AM",
      stage: "Express Interest",
      experience: "6 years",
      location: "Los Angeles, CA",
      matchScore: 86,
      keySkills: ["Product Design", "UX Strategy", "Prototyping", "User Research"],
      lastActivity: "Expressed interest yesterday",
      resumeAvailable: true,
      iqTest: {
        score: 121,
        percentile: 92,
        completedDate: "Dec 18, 2024 at 10:00 AM",
        duration: "60 minutes",
        categories: [
          { name: "Logical Reasoning", score: 123 },
          { name: "Verbal Comprehension", score: 119 },
          { name: "Pattern Recognition", score: 122 },
          { name: "Mathematical Ability", score: 120 }
        ],
        interpretation: "Superior Intelligence",
        response: "Strong cognitive abilities across all areas. Good analytical and problem-solving capabilities suitable for senior design roles."
      },
      expressInterestNote: "I'm very interested in this role and would love to learn more. I'm currently exploring new opportunities and your company's work in fintech aligns perfectly with my career goals."
    },
    {
      id: "EXP-002",
      name: "Jessica Park",
      photo: "Photo",
      applicantType: "express",
      expressedDate: "Dec 17, 2024 at 3:20 PM",
      stage: "Express Interest",
      experience: "8 years",
      location: "San Diego, CA",
      matchScore: 90,
      keySkills: ["Design Systems", "Interaction Design", "Figma", "Design Leadership"],
      lastActivity: "Expressed interest 1 day ago",
      resumeAvailable: true,
      iqTest: {
        score: 127,
        percentile: 96,
        completedDate: "Dec 17, 2024 at 3:00 PM",
        duration: "60 minutes",
        categories: [
          { name: "Logical Reasoning", score: 130 },
          { name: "Verbal Comprehension", score: 125 },
          { name: "Pattern Recognition", score: 128 },
          { name: "Mathematical Ability", score: 125 }
        ],
        interpretation: "Very Superior Intelligence",
        response: "Exceptional cognitive performance. Strong analytical thinking and pattern recognition abilities ideal for complex design challenges."
      },
      expressInterestNote: "I've been following your company for years and am impressed by your product design philosophy. I'd be thrilled to discuss how my experience in design systems could contribute to your team."
    },
    {
      id: "EXP-003",
      name: "Thomas Anderson",
      photo: "Photo",
      applicantType: "express",
      expressedDate: "Dec 16, 2024 at 1:45 PM",
      stage: "Express Interest",
      experience: "4 years",
      location: "Portland, OR",
      matchScore: 75,
      keySkills: ["UI Design", "Figma", "Visual Design", "Branding"],
      lastActivity: "Expressed interest 2 days ago",
      resumeAvailable: true,
      iqTest: {
        score: 112,
        percentile: 79,
        completedDate: "Dec 16, 2024 at 1:30 PM",
        duration: "60 minutes",
        categories: [
          { name: "Logical Reasoning", score: 115 },
          { name: "Verbal Comprehension", score: 110 },
          { name: "Pattern Recognition", score: 113 },
          { name: "Mathematical Ability", score: 111 }
        ],
        interpretation: "Above Average Intelligence",
        response: "Solid cognitive abilities with good problem-solving skills. Meets the job requirements for analytical thinking."
      },
      expressInterestNote: "I'm actively looking for senior design opportunities and would love to connect. Open to relocating for the right opportunity."
    }
  ];

  const notifications = [
    { type: "new", message: "3 new applications received in the last 24 hours", time: "Just now" },
    { type: "interview", message: "Interview with Michael Rodriguez scheduled for tomorrow", time: "2 hours ago" },
    { type: "offer", message: "Emily Watson hasn't responded to offer yet (2 days)", time: "1 day ago" }
  ];

  const stageStats = [
    { stage: "Applied", count: 23, color: "bg-blue-50 border-blue-300" },
    { stage: "Shortlisted", count: 12, color: "bg-purple-50 border-purple-300" },
    { stage: "Interview", count: 8, color: "bg-yellow-50 border-yellow-300" },
    { stage: "Offered", count: 3, color: "bg-green-50 border-green-300" },
    { stage: "Rejected", count: 1, color: "bg-red-50 border-red-300" }
  ];

  // Get applicants based on active tab
  const applicants = activeTab === 'regular' ? regularApplicants : expressInterestApplicants;

  // Assessment details data - would come from API in production
  const assessmentDetails: {[key: string]: any} = {
    "APP-001-UX Design Skills": {
      completedDate: "Dec 17, 2024 at 3:00 PM",
      duration: "45 minutes",
      totalQuestions: 20,
      correctAnswers: 17,
      sections: [
        { name: "User Research", score: 92, questions: 5 },
        { name: "Wireframing & Prototyping", score: 85, questions: 5 },
        { name: "Design Principles", score: 90, questions: 5 },
        { name: "Usability Testing", score: 84, questions: 5 }
      ]
    },
    "APP-001-Design Thinking": {
      completedDate: "Dec 17, 2024 at 4:30 PM",
      duration: "60 minutes",
      type: "Case Study",
      response: "The candidate demonstrated excellent problem-solving skills by conducting thorough user research, creating multiple design iterations, and presenting a well-structured solution.",
      evaluatedBy: "Emily R. (Lead Designer)"
    },
    "APP-001-Figma Proficiency": {
      completedDate: "Dec 17, 2024 at 5:15 PM",
      duration: "30 minutes",
      totalQuestions: 15,
      correctAnswers: 14,
      sections: [
        { name: "Components & Variants", score: 100, questions: 5 },
        { name: "Auto Layout", score: 90, questions: 5 },
        { name: "Prototyping", score: 95, questions: 5 }
      ]
    },
    "APP-002-UX Design Skills": {
      completedDate: "Dec 17, 2024 at 11:00 AM",
      duration: "45 minutes",
      totalQuestions: 20,
      correctAnswers: 16,
      sections: [
        { name: "User Research", score: 85, questions: 5 },
        { name: "Wireframing & Prototyping", score: 80, questions: 5 },
        { name: "Design Principles", score: 82, questions: 5 },
        { name: "Usability Testing", score: 81, questions: 5 }
      ]
    },
    "APP-002-Figma Proficiency": {
      completedDate: "Dec 17, 2024 at 12:00 PM",
      duration: "30 minutes",
      totalQuestions: 15,
      correctAnswers: 13,
      sections: [
        { name: "Components & Variants", score: 90, questions: 5 },
        { name: "Auto Layout", score: 85, questions: 5 },
        { name: "Prototyping", score: 90, questions: 5 }
      ]
    },
    "APP-004-UX Design Skills": {
      completedDate: "Dec 15, 2024 at 12:00 PM",
      duration: "45 minutes",
      totalQuestions: 20,
      correctAnswers: 19,
      sections: [
        { name: "User Research", score: 95, questions: 5 },
        { name: "Wireframing & Prototyping", score: 93, questions: 5 },
        { name: "Design Principles", score: 94, questions: 5 },
        { name: "Usability Testing", score: 94, questions: 5 }
      ]
    },
    "APP-004-Design Thinking": {
      completedDate: "Dec 15, 2024 at 1:30 PM",
      duration: "60 minutes",
      type: "Case Study",
      response: "Outstanding work. The candidate showed exceptional analytical thinking and creative problem-solving. The proposed solution was innovative, well-researched, and addressed all requirements comprehensively.",
      evaluatedBy: "John D. (Hiring Manager)"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b-2 border-gray-300 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-black border-2 border-gray-400 px-4 py-2">LiveRec</div>
            <nav className="hidden md:flex space-x-6">
              {["Dashboard", "Jobs", "Candidates", "Analytics", "Messages"].map((item) => (
                <div key={item} className={`px-3 py-1 border ${item === "Jobs" ? "border-2 border-gray-600 bg-gray-100" : "border-gray-400"} text-black`}>
                  {item}
                </div>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 border border-gray-400 text-black relative">
                🔔 Notifications
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  3
                </span>
              </div>
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
          <span className="border border-gray-400 px-2 py-1 bg-gray-100 text-black">{jobDetails.title}</span>
        </div>

        {/* Job Header */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block">
                  {jobDetails.title}
                </h1>
                <span className="px-3 py-1 bg-green-100 border-2 border-green-400 text-green-800">
                  {jobDetails.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-black">
                <span className="border border-gray-400 px-2 py-1">Job ID: {jobDetails.id}</span>
                <span className="border border-gray-400 px-2 py-1">📍 {jobDetails.location}</span>
                <span className="border border-gray-400 px-2 py-1">{jobDetails.department}</span>
                <span className="border border-gray-300 px-2 py-1 text-gray-600">{jobDetails.postedDate}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 border-2 border-gray-400 text-black">View Job Post</div>
              <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900">Share Job</div>
            </div>
          </div>
        </div>

        {/* Pipeline Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stageStats.map((stat) => (
            <div key={stat.stage} className={`border-2 ${stat.color} p-4`}>
              <div className="text-3xl font-bold text-black">{stat.count}</div>
              <div className="text-sm text-gray-700 mt-1">{stat.stage}</div>
            </div>
          ))}
        </div>

        {/* Applicant Type Tabs */}
        <div className="bg-white border-2 border-gray-300">
          <div className="flex border-b-2 border-gray-300">
            <button
              onClick={() => setActiveTab('regular')}
              className={`flex-1 px-6 py-4 text-center font-semibold transition-colors ${
                activeTab === 'regular'
                  ? 'bg-blue-50 border-b-4 border-blue-500 text-blue-800'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">📋</span>
                <span>Regular Applicants</span>
                <span className="px-2 py-1 border border-gray-400 bg-white text-black text-sm rounded">
                  {regularApplicants.length}
                </span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('express')}
              className={`flex-1 px-6 py-4 text-center font-semibold transition-colors ${
                activeTab === 'express'
                  ? 'bg-purple-50 border-b-4 border-purple-500 text-purple-800'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">⚡</span>
                <span>Express Interest</span>
                <span className="px-2 py-1 border border-gray-400 bg-white text-black text-sm rounded">
                  {expressInterestApplicants.length}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Filters & Actions */}
        <div className="bg-white border-2 border-gray-300 p-4">
          <div className="flex flex-wrap gap-3">
            <select className="border-2 border-gray-400 px-3 py-2 text-black">
              <option>All Stages</option>
              <option>Applied</option>
              <option>Shortlisted</option>
              <option>Interview</option>
              <option>Offered</option>
              <option>Rejected</option>
            </select>
            <select className="border-2 border-gray-400 px-3 py-2 text-black">
              <option>Sort by: Recent</option>
              <option>Sort by: Match Score</option>
              <option>Sort by: Experience</option>
              <option>Sort by: Name</option>
            </select>
            <input 
              type="text" 
              placeholder="Search applicants..." 
              className="border-2 border-gray-400 px-3 py-2 text-black"
            />
          </div>
        </div>

        {/* Applicants List */}
        <div className="bg-white border-2 border-gray-300">
          <div className="border-b-2 border-gray-300 p-4 bg-gray-50">
            <h2 className="text-xl font-bold text-black border-2 border-gray-400 px-3 py-1 inline-block">
              Applicants ({applicants.length})
            </h2>
          </div>
          
          <div className="divide-y-2 divide-gray-200">
            {applicants.map((applicant) => (
              <div key={applicant.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Applicant Info */}
                  <div className="flex gap-4 flex-1">
                    <div className="w-16 h-16 border-2 border-gray-400 bg-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0">
                      {applicant.photo}
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-semibold text-black border border-gray-400 px-2 py-1">
                          {applicant.name}
                        </h3>
                        <span className={`px-2 py-1 text-sm border-2 ${
                          applicant.stage === 'Express Interest' ? 'bg-purple-50 border-purple-400 text-purple-800' :
                          applicant.stage === 'Applied' ? 'bg-blue-50 border-blue-400 text-blue-800' :
                          applicant.stage === 'Shortlisted' ? 'bg-purple-50 border-purple-400 text-purple-800' :
                          applicant.stage === 'Interview' ? 'bg-yellow-50 border-yellow-400 text-yellow-800' :
                          applicant.stage === 'Offered' ? 'bg-green-50 border-green-400 text-green-800' :
                          'bg-red-50 border-red-400 text-red-800'
                        }`}>
                          {applicant.stage}
                        </span>
                        <div className="flex items-center gap-1 border border-gray-300 px-2 py-1 bg-white">
                          <span className="text-sm font-semibold text-black">{applicant.matchScore}%</span>
                          <span className="text-xs text-gray-600">match</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                        <span className="border border-gray-300 px-2 py-1">📍 {applicant.location}</span>
                        <span className="border border-gray-300 px-2 py-1">💼 {applicant.experience}</span>
                        <span className="border border-gray-300 px-2 py-1">⏱️ {applicant.noticePeriod}</span>
                        <span className="border border-gray-300 px-2 py-1">📄 Download Resume</span>
                      </div>
                      
                      {/* Assessment Tests */}
                      {applicant.assessments && applicant.assessments.length > 0 && (
                        <div className="mt-2 space-y-2">
                          <div className="text-xs font-semibold text-gray-600">Assessment Tests:</div>
                          <div className="space-y-2">
                            {applicant.assessments.map((assessment, idx) => {
                              const detailKey = `${applicant.id}-${assessment.name}`;
                              const isExpanded = expandedAssessments[detailKey];
                              const details = assessmentDetails[detailKey];
                              
                              return (
                                <div key={idx} className="space-y-2">
                                  <button
                                    onClick={() => toggleAssessment(applicant.id, assessment.name)}
                                    className={`border-2 px-3 py-1 text-sm hover:opacity-80 transition-opacity ${
                                      assessment.score >= 90 
                                        ? 'border-green-500 bg-green-50 text-green-800' 
                                        : assessment.score >= 70 
                                        ? 'border-blue-500 bg-blue-50 text-blue-800' 
                                        : 'border-yellow-500 bg-yellow-50 text-yellow-800'
                                    }`}
                                  >
                                    📝 {assessment.name}: {assessment.score}%
                                    <span className="ml-1 text-xs">
                                      {isExpanded ? '▼' : '▶'}
                                    </span>
                                  </button>
                                                                    
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* IQ Test Results */}
                      {applicant.iqTest && (
                        <div className="mt-2 space-y-2">
                          <div className="text-xs font-semibold text-gray-600">IQ Test:</div>
                          <button
                            onClick={() => toggleAssessment(applicant.id, 'IQ Test')}
                            className={`border-2 px-3 py-1 text-sm hover:opacity-80 transition-opacity w-full text-left ${
                              applicant.iqTest.score >= jobDetails.requiredIQ
                                ? 'border-green-500 bg-green-50 text-green-800'
                                : 'border-red-500 bg-red-50 text-red-800'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span>🧠 IQ Score: {applicant.iqTest.score}</span>
                                <span className="text-xs">
                                  ({applicant.iqTest.interpretation})
                                </span>
                                {applicant.iqTest.score >= jobDetails.requiredIQ ? (
                                  <span className="text-xs font-semibold">✓ Sufficient</span>
                                ) : (
                                  <span className="text-xs font-semibold">✗ Below Required ({jobDetails.requiredIQ})</span>
                                )}
                              </div>
                              <span className="ml-1 text-xs">
                                {expandedAssessments[`${applicant.id}-IQ Test`] ? '▼' : '▶'}
                              </span>
                            </div>
                          </button>

                        
                        </div>
                      )}

                      {/* Screening Responses */}
                      {applicant.screeningResponses && applicant.screeningResponses.length > 0 && (
                        <div className="mt-2">
                          <button
                            onClick={() => toggleAssessment(applicant.id, 'Screening Responses')}
                            className="border-2 border-blue-400 bg-blue-50 text-blue-800 px-3 py-1 text-sm hover:opacity-80 transition-opacity w-full text-left"
                          >
                            <div className="flex items-center justify-between">
                              <span>📋 Screening Questions ({applicant.screeningResponses.length} responses)</span>
                              <span className="ml-1 text-xs">
                                {expandedAssessments[`${applicant.id}-Screening Responses`] ? '▼' : '▶'}
                              </span>
                            </div>
                          </button>

                          {/* Expanded Screening Responses */}
                          {expandedAssessments[`${applicant.id}-Screening Responses`] && (
                            <div className="ml-4 mt-2 border-2 border-gray-300 p-4 bg-white">
                              <div className="space-y-4">
                                <div className="text-xs font-semibold text-gray-600 mb-3">
                                  Responses submitted during application
                                </div>
                                {applicant.screeningResponses.map((response, idx) => (
                                  <div key={idx} className="border-2 border-gray-200 p-3 bg-gray-50">
                                    <div className="text-xs font-semibold text-black mb-2">
                                      Q{idx + 1}: {response.question}
                                    </div>
                                    <div className="text-sm text-gray-700 pl-3 border-l-2 border-blue-400">
                                      {response.answer}
                                    </div>
                                  </div>
                                ))}
                                
                                {/* Action Button */}
                                <div className="pt-2 border-t border-gray-200">
                                  <div className="px-3 py-1 border border-gray-400 text-black text-xs text-center hover:bg-gray-50 cursor-pointer">
                                    View Full Application
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-1">
                        {applicant.keySkills.slice(0, 4).map((skill) => (
                          <span key={skill} className="border border-gray-300 px-2 py-1 text-xs text-black bg-gray-50">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="border border-gray-200 px-2 py-1">
                          {applicant.applicantType === 'express' ? applicant.expressedDate : applicant.appliedDate}
                        </span>
                        <span>•</span>
                        <span>{applicant.lastActivity}</span>
                      </div>

                      {/* Express Interest Note */}
                      {applicant.applicantType === 'express' && applicant.expressInterestNote && (
                        <div className="border-l-4 border-purple-400 pl-3 py-2 bg-purple-50">
                          <div className="text-xs font-semibold text-purple-900 mb-1">💬 Express Interest Note:</div>
                          <p className="text-sm text-gray-700">{applicant.expressInterestNote}</p>
                        </div>
                      )}
                      
                      {applicant.interviewScheduled && (
                        <div className="border-l-4 border-yellow-400 pl-3 py-1 bg-yellow-50">
                          <p className="text-sm text-black">📅 Interview: {applicant.interviewScheduled}</p>
                        </div>
                      )}
                      
                      {applicant.offerStatus && (
                        <div className="border-l-4 border-green-400 pl-3 py-1 bg-green-50">
                          <p className="text-sm text-black">✉️ Offer Status: {applicant.offerStatus}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex lg:flex-col gap-2 lg:items-end">
                    <div className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 text-center text-sm">
                      View Profile
                    </div>
                    <div className="px-4 py-2 border-2 border-gray-400 text-black text-center text-sm">
                      Move to Stage
                    </div>
                    <div className="px-4 py-2 border-2 border-gray-400 text-black text-center text-sm">
                      Message
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <div className="px-3 py-2 border-2 border-gray-400 text-black">← Previous</div>
          <div className="px-3 py-2 border-2 border-gray-600 bg-gray-100 text-black">1</div>
          <div className="px-3 py-2 border-2 border-gray-400 text-black">2</div>
          <div className="px-3 py-2 border-2 border-gray-400 text-black">3</div>
          <div className="px-3 py-2 border-2 border-gray-400 text-black">Next →</div>
        </div>
      </div>
    </div>
  );
}

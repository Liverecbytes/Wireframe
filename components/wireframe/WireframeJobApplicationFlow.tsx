"use client";

import { useEffect, useMemo, useState } from "react";

type PlanTier = "free" | "professional" | "premium";
type IqRequirement = "none" | "optional" | "required";
type AssessmentStatus = "not-started" | "in-progress" | "completed";

const planOptions: { id: PlanTier; label: string; description: string; perks: string[] }[] = [
  {
    id: "free",
    label: "Free",
    description: "Browse roles and save favourites. Limited to 5 applies / month.",
    perks: ["Job alerts", "Basic profile visibility", "Community access"]
  },
  {
    id: "professional",
    label: "Professional",
    description: "Unlimited applies with priority routing to recruiters.",
    perks: ["Unlimited applies", "Priority review", "Salary insights", "ATS-ready resume reviews"]
  },
  {
    id: "premium",
    label: "Premium",
    description: "Executive tier with concierge coaching and recruiter introductions.",
    perks: ["Everything in Professional", "Featured profile", "1:1 career coach", "Employer chat access"]
  }
];

const tierRank: Record<PlanTier, number> = {
  free: 0,
  professional: 1,
  premium: 2
};

const resumeTemplates = [
  {
    id: "product-depth",
    title: "Product Manager • Impact Focus",
    updated: "Updated 2 days ago",
    match: 92,
    highlights: ["ATS Optimised", "Tailored for Product IC", "Includes metrics mini-case"],
    fileName: "Liverec_PM_Impact.pdf"
  },
  {
    id: "product-lead",
    title: "Product Lead • Strategy Narrative",
    updated: "Updated 1 week ago",
    match: 87,
    highlights: ["Leadership emphasis", "Portfolio links", "Executive summary"],
    fileName: "Liverec_PM_Lead.pdf"
  },
  {
    id: "general-tech",
    title: "General Tech Resume",
    updated: "Updated 3 weeks ago",
    match: 81,
    highlights: ["Versatile", "Covers engineering + product", "Uses neutral language"],
    fileName: "Liverec_General_Tech.pdf"
  }
];

const screeningQuestions = [
  {
    id: "workAuth",
    question: "Do you have authorisation to work in the United States without sponsorship?",
    type: "single",
    options: ["Yes, I am authorised", "I require sponsorship", "I require future sponsorship"],
    helper: "Employers require this before scheduling interviews."
  },
  {
    id: "experience",
    question: "How many years of product management experience do you have?",
    type: "single",
    options: ["0-2 years", "3-5 years", "6-8 years", "9+ years"],
    helper: "Answer shifts the screening questions you receive."
  },
  {
    id: "cover",
    question: "Share a short note explaining why you're a fit for this role.",
    type: "text",
    helper: "Optional but increases response rate by 23%."
  }
];

const jobAssessmentCatalog = [
  {
    id: "product-sense",
    title: "Product Sense Scenario",
    type: "Case Study",
    duration: "25 min",
    description: "Prioritise features for a new marketplace and explain trade-offs."
  },
  {
    id: "analytical-reasoning",
    title: "Analytical Reasoning",
    type: "Data Exercise",
    duration: "20 min",
    description: "Interpret funnel data and recommend experiments."
  },
  {
    id: "stakeholder-comms",
    title: "Stakeholder Communication",
    type: "Written Response",
    duration: "15 min",
    description: "Draft an email to align engineering, design, and marketing."
  }
];

const iqRequirementOptions: { id: IqRequirement; label: string; helper: string }[] = [
  {
    id: "none",
    label: "Not required",
    helper: "Employer will not request IQ benchmarks for this role."
  },
  {
    id: "optional",
    label: "Optional boost",
    helper: "Uploading a score is optional but can improve ranking."
  },
  {
    id: "required",
    label: "Required before apply",
    helper: "IQ benchmark must be on file before submitting."
  }
];

type PrereqStep = {
  id: string;
  title: string;
  description: string;
  hint: string;
  status: "complete" | "action";
  actionLabel?: string;
  onAction?: () => void;
};

const statusStyles: Record<"complete" | "action", string> = {
  complete: "bg-green-50 text-green-800 border border-green-200",
  action: "bg-amber-50 text-amber-800 border border-amber-200"
};

const planLabel = (tier: PlanTier) => planOptions.find((plan) => plan.id === tier)?.label ?? "Plan";

export default function WireframeJobApplicationFlow() {
  const [emailVerified, setEmailVerified] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("Verification link sent 2 minutes ago.");
  const [planTier, setPlanTier] = useState<PlanTier>("free");
  const [jobMinPlan, setJobMinPlan] = useState<PlanTier>("professional");
  const [profileComplete, setProfileComplete] = useState(false);
  const [resumeCount, setResumeCount] = useState(2);
  const [selectedResumeId, setSelectedResumeId] = useState(resumeTemplates[0].id);
  const [requiresJobAssessments, setRequiresJobAssessments] = useState(true);
  const [iqRequirement, setIqRequirement] = useState<IqRequirement>("optional");
  const [iqAssessmentStatus, setIqAssessmentStatus] = useState<AssessmentStatus>("not-started");
  const [iqScore, setIqScore] = useState<number | null>(null);
  const [jobAssessmentProgress, setJobAssessmentProgress] = useState<Record<string, AssessmentStatus>>(
    jobAssessmentCatalog.reduce((acc, assessment) => {
      acc[assessment.id] = "not-started";
      return acc;
    }, {} as Record<string, AssessmentStatus>)
  );
  const [screeningResponses, setScreeningResponses] = useState<Record<string, string>>({
    workAuth: "",
    experience: "",
    cover: ""
  });

  const clampedResumeCount = Math.max(1, Math.min(resumeCount, resumeTemplates.length));

  const availableResumes = useMemo(
    () => resumeTemplates.slice(0, clampedResumeCount),
    [clampedResumeCount]
  );

  useEffect(() => {
    if (!availableResumes.some((resume) => resume.id === selectedResumeId)) {
      setSelectedResumeId(availableResumes[availableResumes.length - 1].id);
    }
  }, [availableResumes, selectedResumeId]);

  const hasPaidPlan = planTier !== "free";
  const meetsJobPlan = tierRank[planTier] >= tierRank[jobMinPlan];

  const prereqSteps: PrereqStep[] = useMemo(
    () => [
      {
        id: "email",
        title: "Verify your email address",
        status: emailVerified ? "complete" : "action",
        description: emailVerified
          ? "Email confirmed. Interview reminders and alerts are enabled."
          : "We need to confirm your email before you can apply to any job.",
        hint: emailVerified ? "Verified • All communication channels unlocked" : verificationMessage,
        actionLabel: emailVerified ? undefined : "Send verification link",
        onAction: emailVerified
          ? undefined
          : () => {
              setVerificationMessage("New verification link sent just now. Check your inbox.");
            }
      },
      {
        id: "membership",
        title: "Purchase a membership plan",
        status: hasPaidPlan ? "complete" : "action",
        description: hasPaidPlan
          ? `You're on the ${planLabel(planTier)} plan.`
          : "Free plan members can browse jobs but cannot apply. Upgrade to continue.",
        hint: hasPaidPlan ? "Billing up to date • Unlimited applies unlocked" : "Free plan: save roles & preview assessments.",
        actionLabel: hasPaidPlan ? undefined : "View membership options",
        onAction: hasPaidPlan ? undefined : () => setPlanTier("professional")
      },
      {
        id: "plan-fit",
        title: "Confirm plan meets employer requirement",
        status: meetsJobPlan ? "complete" : "action",
        description: meetsJobPlan
          ? "Your membership satisfies this employer's minimum requirement."
          : `This job requires at least a ${planLabel(jobMinPlan)} membership for high-touch recruiter access.`,
        hint: meetsJobPlan ? "Priority routing to employer enabled" : "Upgrading unlocks VIP shortlisting.",
        actionLabel: meetsJobPlan ? undefined : `Upgrade to ${planLabel(jobMinPlan)}`,
        onAction: meetsJobPlan ? undefined : () => setPlanTier(jobMinPlan)
      },
      {
        id: "profile",
        title: "Complete profile & resume",
        status: profileComplete ? "complete" : "action",
        description: profileComplete
          ? "Profile is 100% complete. Experience, education, and skills are validated."
          : "Finish required sections and upload at least one resume so recruiters can review your profile.",
        hint: profileComplete ? "Auto-fill enabled for future applies" : "Estimated 6 minutes to finish.",
        actionLabel: profileComplete ? undefined : "Complete profile now",
        onAction: profileComplete ? undefined : () => setProfileComplete(true)
      }
    ],
    [emailVerified, verificationMessage, hasPaidPlan, planTier, meetsJobPlan, jobMinPlan, profileComplete]
  );

  const allPrereqsMet = prereqSteps.every((step) => step.status === "complete");

  const jobAssessments = useMemo(
    () => (requiresJobAssessments ? jobAssessmentCatalog : []),
    [requiresJobAssessments]
  );

  const pendingJobAssessment = jobAssessments.some(
    (assessment) => jobAssessmentProgress[assessment.id] !== "completed"
  );

  const iqRequiredAndMissing = iqRequirement === "required" && iqAssessmentStatus !== "completed";
  const canSubmit = allPrereqsMet && !pendingJobAssessment && !iqRequiredAndMissing;

  const nextAction = useMemo(() => {
    const pendingStep = prereqSteps.find((step) => step.status === "action");
    if (pendingStep) {
      return `Complete: ${pendingStep.title}`;
    }
    if (pendingJobAssessment) {
      return "Finish employer assessments";
    }
    if (iqRequiredAndMissing) {
      return "Complete IQ assessment from My Profile";
    }
    if (iqAssessmentStatus === "in-progress") {
      return "Finish IQ assessment to record your score";
    }
    return "Review answers & submit application";
  }, [prereqSteps, pendingJobAssessment, iqRequiredAndMissing, iqAssessmentStatus]);

  const pendingReasons: string[] = [];
  if (!allPrereqsMet) pendingReasons.push("Prerequisites incomplete");
  if (pendingJobAssessment) pendingReasons.push("Job assessments pending");
  if (iqRequiredAndMissing) pendingReasons.push("IQ assessment required");

  const assessmentRequirementCopy = useMemo(() => {
    if (!requiresJobAssessments && iqRequirement === "none") {
      return "This employer is not requesting any assessments. You can proceed right after screening questions.";
    }
    if (requiresJobAssessments && iqRequirement === "required") {
      return "Both job-specific assessments and an IQ benchmark are required before you can submit.";
    }
    if (requiresJobAssessments) {
      return "Complete the employer's assessments to unlock the apply button. IQ is optional but can boost ranking.";
    }
    if (iqRequirement === "required") {
      return "Complete the IQ assessment from your profile to unlock the submit button. Employers use it to verify cognitive fit.";
    }
    return "Adding an IQ score is optional; it helps highlight analytical strength if the employer has opted in.";
  }, [requiresJobAssessments, iqRequirement]);

  const postPrereqLocked = !allPrereqsMet;

  const handleAssessmentAction = (id: string) => {
    setJobAssessmentProgress((prev) => {
      const current = prev[id] ?? "not-started";
      const next: AssessmentStatus =
        current === "not-started" ? "in-progress" : current === "in-progress" ? "completed" : "not-started";
      return {
        ...prev,
        [id]: next
      };
    });
  };

  const renderAssessmentAction = (status: AssessmentStatus) => {
    if (status === "not-started") return "Start";
    if (status === "in-progress") return "Mark complete";
    return "Redo";
  };

  const handleIqAction = (action: "start" | "complete" | "reset") => {
    if (action === "start") {
      setIqAssessmentStatus("in-progress");
      setIqScore(null);
      return;
    }
    if (action === "complete") {
      setIqAssessmentStatus("completed");
      setIqScore(128);
      return;
    }
    setIqAssessmentStatus("not-started");
    setIqScore(null);
  };

  const handleScreeningResponse = (id: string, value: string) => {
    setScreeningResponses((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b-2 border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-500">LiveRec Wireframe</p>
            <h1 className="text-3xl font-bold text-gray-900">Candidate Job Application Flow</h1>
            <p className="text-gray-600 text-sm">
              Visualise every prerequisite and branching scenario before a candidate can submit an application.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border-2 border-gray-400 text-sm text-black hover:bg-gray-100">
              Back to gallery
            </button>
            <button className="px-4 py-2 border-2 border-gray-900 bg-gray-900 text-white text-sm hover:bg-gray-800">
              Preview jobs page
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 lg:grid-cols-[320px,1fr]">
          <aside className="space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Scenario controls</h2>
              <p className="text-sm text-gray-600 mb-4">
                Toggle candidate states to preview every branch of the flow.
              </p>

              <div className="space-y-5">
                <div className="border border-dashed border-gray-200 rounded-lg p-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Email verified</span>
                    <label className="inline-flex items-center cursor-pointer gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-2 border-gray-400"
                        checked={emailVerified}
                        onChange={(event) => setEmailVerified(event.target.checked)}
                      />
                      {emailVerified ? "Yes" : "No"}
                    </label>
                  </div>
                  <button
                    className="w-full px-3 py-2 border-2 border-gray-400 text-sm text-black hover:bg-gray-100"
                    onClick={() => {
                      setEmailVerified(false);
                      setVerificationMessage("New verification link sent 30 seconds ago.");
                    }}
                  >
                    Send another verification link
                  </button>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Current membership plan</p>
                  <div className="space-y-2">
                    {planOptions.map((plan) => (
                      <label
                        key={plan.id}
                        className={`flex flex-col border-2 rounded-lg p-3 cursor-pointer ${
                          planTier === plan.id ? "border-gray-900 bg-gray-50" : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-900">{plan.label}</p>
                            <p className="text-xs text-gray-600">{plan.description}</p>
                          </div>
                          <input
                            type="radio"
                            name="plan-tier"
                            className="w-4 h-4 border-2 border-gray-400"
                            checked={planTier === plan.id}
                            onChange={() => setPlanTier(plan.id)}
                          />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Employer minimum plan</p>
                  <select
                    className="w-full border-2 border-gray-300 px-3 py-2 text-sm text-gray-800"
                    value={jobMinPlan}
                    onChange={(event) => setJobMinPlan(event.target.value as PlanTier)}
                  >
                    {planOptions.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center justify-between border border-dashed border-gray-200 rounded-lg p-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Profile setup complete</p>
                    <p className="text-xs text-gray-500">Requires resume + mandatory sections.</p>
                  </div>
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-2 border-gray-400"
                    checked={profileComplete}
                    onChange={(event) => setProfileComplete(event.target.checked)}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-800">Resumes uploaded</h3>
                <p className="text-xs text-gray-500">Showcase multi-resume selection state.</p>
              </div>
              <input
                type="range"
                min={1}
                max={resumeTemplates.length}
                value={clampedResumeCount}
                onChange={(event) => setResumeCount(Number(event.target.value))}
                className="w-full"
              />
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-900">{clampedResumeCount}</span> resume
                {clampedResumeCount > 1 ? "s" : ""}.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-800">Assessment requirements</h3>
                <p className="text-xs text-gray-500">Job-to-job and employer-to-employer variations.</p>
              </div>

              <label className="flex items-center justify-between text-sm text-gray-700">
                Employer assessments required
                <input
                  type="checkbox"
                  className="w-4 h-4 border-2 border-gray-400"
                  checked={requiresJobAssessments}
                  onChange={(event) => setRequiresJobAssessments(event.target.checked)}
                />
              </label>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">IQ assessment</p>
                <select
                  className="w-full border-2 border-gray-300 px-3 py-2 text-sm text-gray-800"
                  value={iqRequirement}
                  onChange={(event) => setIqRequirement(event.target.value as IqRequirement)}
                >
                  {iqRequirementOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  {iqRequirementOptions.find((option) => option.id === iqRequirement)?.helper}
                </p>
              </div>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="bg-gray-900 text-white rounded-xl p-5 shadow-sm">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-300">Next action</p>
                  <p className="text-xl font-semibold">{nextAction}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm text-gray-300">
                    {allPrereqsMet ? "Prerequisites cleared" : "Prerequisites pending"}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      allPrereqsMet ? "bg-green-500 text-white" : "bg-amber-400 text-gray-900"
                    }`}
                  >
                    {allPrereqsMet ? "Unlocked" : "Locked"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Prerequisite checkpoints</h3>
                  <p className="text-sm text-gray-600">
                    Ordered logic: email verification → membership purchase → plan fit → profile completion.
                  </p>
                </div>
                <span className="text-sm text-gray-500">All checkpoints must be green before applying.</span>
              </div>

              <div className="space-y-4">
                {prereqSteps.map((step, index) => (
                  <div key={step.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">Step {index + 1}</p>
                        <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[step.status]}`}>
                        {step.status === "complete" ? "Ready" : "Action needed"}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="text-xs text-gray-500">{step.hint}</span>
                      {step.actionLabel && step.onAction && (
                        <button
                          className="px-3 py-1 border-2 border-gray-400 text-xs font-semibold text-gray-900 hover:bg-gray-100"
                          onClick={step.onAction}
                        >
                          {step.actionLabel}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`space-y-6 ${postPrereqLocked ? "opacity-60 pointer-events-none" : ""}`}>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Select resume to attach</h3>
                    <p className="text-sm text-gray-600">
                      Candidates with multiple resumes can pick the best-fit document before proceeding.
                    </p>
                  </div>
                  {postPrereqLocked && (
                    <span className="text-xs font-semibold text-amber-600">Locked until prerequisites are complete</span>
                  )}
                </div>
                <div className="grid gap-4 mt-4 md:grid-cols-2">
                  {availableResumes.map((resume) => {
                    const isSelected = resume.id === selectedResumeId;
                    return (
                      <button
                        key={resume.id}
                        className={`text-left border-2 rounded-lg p-4 transition ${
                          isSelected ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-400"
                        }`}
                        onClick={() => setSelectedResumeId(resume.id)}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-semibold text-gray-900">{resume.title}</p>
                            <p className="text-xs uppercase tracking-wide text-gray-500">{resume.updated}</p>
                          </div>
                          {isSelected && (
                            <span className="text-xs font-semibold px-2 py-0.5 border border-gray-900 text-gray-900">
                              Selected
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Match score: {resume.match}%</p>
                        <ul className="mt-2 space-y-1 text-xs text-gray-500">
                          {resume.highlights.map((highlight) => (
                            <li key={highlight}>• {highlight}</li>
                          ))}
                        </ul>
                        <p className="text-xs text-gray-500 mt-3">{resume.fileName}</p>
                      </button>
                    );
                  })}
                </div>
                <button className="mt-4 px-4 py-2 border-2 border-dashed border-gray-400 text-sm text-gray-700 hover:bg-gray-50">
                  + Upload another resume
                </button>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Profile screening questions</h3>
                    <p className="text-sm text-gray-600">
                      Mandatory before the employer reveals assessments or allows applying.
                    </p>
                  </div>
                  {postPrereqLocked && (
                    <span className="text-xs font-semibold text-amber-600">Locked until prerequisites are complete</span>
                  )}
                </div>

                <div className="mt-4 space-y-6">
                  {screeningQuestions.map((question) => (
                    <div key={question.id} className="border border-gray-100 rounded-lg p-4">
                      <p className="font-semibold text-gray-900">{question.question}</p>
                      <p className="text-xs text-gray-500 mb-3">{question.helper}</p>

                      {question.type === "single" ? (
                        <div className="space-y-2">
                          {question.options?.map((option) => (
                            <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                              <input
                                type="radio"
                                name={question.id}
                                className="w-4 h-4 border-2 border-gray-400"
                                checked={screeningResponses[question.id] === option}
                                onChange={() => handleScreeningResponse(question.id, option)}
                              />
                              {option}
                            </label>
                          ))}
                        </div>
                      ) : (
                        <textarea
                          rows={3}
                          className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800"
                          placeholder="Type a short note..."
                          value={screeningResponses[question.id] ?? ""}
                          onChange={(event) => handleScreeningResponse(question.id, event.target.value)}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm space-y-5">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Assessment requirements</h3>
                  <p className="text-sm text-gray-600">{assessmentRequirementCopy}</p>
                </div>
                <div className="text-xs text-gray-500 text-right">
                  {requiresJobAssessments ? "Employer assessments toggled ON" : "Employer assessments toggled OFF"}
                  <br />
                  IQ requirement: {iqRequirementOptions.find((option) => option.id === iqRequirement)?.label}
                </div>
              </div>

              {requiresJobAssessments && (
                <div className="space-y-3">
                  {jobAssessments.map((assessment) => {
                    const status = jobAssessmentProgress[assessment.id] ?? "not-started";
                    return (
                      <div key={assessment.id} className="border border-gray-100 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{assessment.title}</p>
                          <p className="text-xs uppercase tracking-wide text-gray-500">
                            {assessment.type} • {assessment.duration}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">{assessment.description}</p>
                        </div>
                        <div className="flex flex-col items-start gap-2 md:items-end">
                          <span
                            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                              status === "completed"
                                ? "bg-green-100 text-green-800 border border-green-200"
                                : status === "in-progress"
                                ? "bg-blue-100 text-blue-800 border border-blue-200"
                                : "bg-gray-100 text-gray-700 border border-gray-200"
                            }`}
                          >
                            {status === "completed"
                              ? "Completed"
                              : status === "in-progress"
                              ? "In progress"
                              : "Not started"}
                          </span>
                          <button
                            className="px-4 py-2 border-2 border-gray-400 text-sm text-gray-900 hover:bg-gray-100"
                            onClick={() => handleAssessmentAction(assessment.id)}
                          >
                            {renderAssessmentAction(status)}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="border border-gray-100 rounded-lg p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold text-gray-900">IQ assessment (triggered from My Profile)</p>
                  <p className="text-sm text-gray-600">
                    Candidates launch this from their profile. Score is surfaced automatically once completed.
                  </p>
                  <div className="mt-2 text-xs text-gray-500 space-y-1">
                    <p>Status: {iqAssessmentStatus === "completed" ? "Score on file" : iqAssessmentStatus === "in-progress" ? "In progress" : "Not started"}</p>
                    {iqScore ? <p>Recorded IQ score: <span className="font-semibold text-gray-900">{iqScore}</span></p> : <p>No IQ score yet.</p>}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    className="px-4 py-2 border-2 border-gray-400 text-sm text-gray-900 hover:bg-gray-100"
                    onClick={() => handleIqAction("start")}
                  >
                    Launch from My Profile
                  </button>
                  <button
                    className="px-4 py-2 border-2 border-gray-900 bg-gray-900 text-white text-sm hover:bg-gray-800"
                    onClick={() => handleIqAction("complete")}
                  >
                    Mark as completed
                  </button>
                  <button
                    className="px-4 py-2 border-2 border-dashed border-gray-400 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => handleIqAction("reset")}
                  >
                    Reset score
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-500">Application readiness</p>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {canSubmit ? "Ready to submit" : "Submission locked"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {canSubmit
                      ? "All prerequisites, selections, and required assessments are complete."
                      : pendingReasons.join(" • ") || "Complete pending tasks to unlock submission."}
                  </p>
                </div>
                <button
                  className={`px-6 py-3 text-sm font-semibold border-2 ${
                    canSubmit
                      ? "bg-gray-900 text-white border-gray-900 hover:bg-gray-800"
                      : "border-dashed border-gray-400 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!canSubmit}
                >
                  {canSubmit ? "Submit application" : "Complete requirements"}
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

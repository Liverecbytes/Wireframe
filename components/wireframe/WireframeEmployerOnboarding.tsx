"use client";

import { useState } from "react";

const stepConfig = [
  { key: "signup", label: "Create Employer Account", type: "signup" },
  { key: "phone", label: "Phone Number", type: "signup" },
  { key: "otp", label: "Verify OTP", type: "signup" },
  { key: "email", label: "Email Verification (Optional)", type: "signup" },
  { key: "basics", label: "Company Basics", type: "profile" },
  { key: "branding", label: "Branding Assets", type: "profile" },
  { key: "culture", label: "Culture & Benefits", type: "profile" },
  { key: "job", label: "Build Job Posting", type: "profile" },
  { key: "trust", label: "Trust & Compliance", type: "profile" },
  { key: "preview", label: "Employer Detail Preview", type: "profile" },
  { key: "plan", label: "Membership Plan Selection", type: "plan" },
  { key: "complete", label: "Launch Complete", type: "plan" },
];

const stageLabels: Record<string, string> = {
  signup: "Signup & Verification",
  profile: "Profile & Branding Setup",
  plan: "Membership & Launch",
};

const membershipPlans = [
  {
    name: "Starter Presence",
    price: "$0",
    cadence: "per month",
    highlight: "Perfect for early stage teams",
    features: [
      "Company profile + 1 active job",
      "Phone-verified recruiter accounts",
      "Public ratings sync (read-only)",
      "Basic analytics dashboard",
    ],
  },
  {
    name: "Growth Spotlight",
    price: "$699",
    cadence: "per month",
    highlight: "Most popular for funded startups",
    featured: true,
    features: [
      "Unlimited jobs & talent CRM export",
      "Sponsored jobs across LiveRec partner network",
      "Branded storytelling tiles & review responses",
      "AI branding audits & heatmaps",
      "Priority support + Success manager",
    ],
  },
  {
    name: "Enterprise Brand Suite",
    price: "Custom",
    cadence: "annual contract",
    highlight: "Global teams & agencies",
    features: [
      "All Growth benefits",
      "API + ATS integrations (Greenhouse, Workday)",
      "Multi-brand rollups & compliance review",
      "Invite-only talent communities",
      "Quarterly co-marketing campaigns",
    ],
  },
];

const previewCompany = {
  name: "Nimbus Labs",
  headline: "AI & Data Infrastructure • San Francisco, CA • 250-500 employees",
  badges: ["Verified", "Featured Employer", "High Growth"],
  values: ["Ethical automation", "People-first leadership", "Inclusive hiring"],
};

const jobDetailTemplate = {
  title: "Senior Backend Engineer",
  city: "Austin",
  state: "TX",
  salaryMin: "160000",
  salaryMax: "210000",
  remoteType: "Hybrid",
  seniority: "Mid-senior",
  experienceMin: "5",
  experienceMax: "8",
  employmentType: "Full-time",
  industry: "Software & Internet",
  specialization: "Project Lead",
  relocation: "Allowed",
  visa: "Available",
  about:
    "Own the APIs that power Nimbus customer copilots. Partner with AI research and infra teams to ship reliable, secure services.",
  responsibilities:
    "Design and scale multi-region services, mentor engineers, and collaborate with product on roadmap priorities.",
  requirements:
    "5+ years building distributed systems with Go/Node/Python, deep understanding of cloud infrastructure, and experience leading projects.",
  skills: ["Node.js", "TypeScript", "GoLang", "AWS", "Kubernetes"],
};

const seniorityOptions = ["Associate", "Mid-senior", "Director", "Head", "CXO"];
const employmentTypes = ["Full-time", "Part-time", "Temporary", "Contract"];
const industryOptions = [
  "Software & Internet",
  "Financial Services",
  "Healthcare & Life Sciences",
  "Manufacturing",
  "Retail & E-commerce",
  "Energy & Sustainability",
];
const specializationOptions = [
  "Project Lead",
  "Scrum Master",
  "Program Manager",
  "Product Lead",
  "Engineering Manager",
  "Data Science Lead",
];
const relocationOptions = ["Allowed", "Not allowed"];
const visaOptions = ["Available", "Not available"];
const remoteOptions = ["Remote", "Hybrid", "On-Site"];
const skillLibrary = [
  "Node.js",
  "TypeScript",
  "GoLang",
  "Python",
  "AWS",
  "Kubernetes",
  "PostgreSQL",
  "API Design",
  "Security",
  "Stakeholder Management",
];

export default function WireframeEmployerOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loginMethod, setLoginMethod] = useState<"email" | "google" | null>(null);
  const [emailVerified, setEmailVerified] = useState(false);

  const totalSteps = stepConfig.length;

  const goToStep = (index: number) => {
    setCurrentStep(Math.max(0, Math.min(index, totalSteps - 1)));
  };

  const handlePlanSelected = () => {
    goToStep(11);
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <SignupMethodStep
            onGoogle={() => {
              setLoginMethod("google");
              goToStep(1);
            }}
            onEmail={() => {
              setLoginMethod("email");
              goToStep(1);
            }}
          />
        );
      case 1:
        return <PhoneNumberStep onContinue={() => goToStep(2)} />;
      case 2:
        return (
          <OTPVerificationStep
            onVerify={() => {
              goToStep(3);
            }}
          />
        );
      case 3:
        return (
          <EmailVerificationStep
            loginMethod={loginMethod}
            emailVerified={emailVerified}
            onVerify={() => {
              setEmailVerified(true);
              goToStep(4);
            }}
            onSkip={() => goToStep(4)}
          />
        );
      case 4:
        return <CompanyBasicsStep onContinue={() => goToStep(5)} />;
      case 5:
        return <BrandingAssetsStep onContinue={() => goToStep(6)} />;
      case 6:
        return <CultureBenefitsStep onContinue={() => goToStep(7)} />;
      case 7:
        return <JobCreationStep onContinue={() => goToStep(8)} />;
      case 8:
        return <TrustComplianceStep onContinue={() => goToStep(9)} />;
      case 9:
        return <PreviewStep onContinue={() => goToStep(10)} />;
      case 10:
        return <MembershipPlanStep onSelectPlan={handlePlanSelected} />;
      case 11:
        return <LaunchCompleteStep />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <header className="bg-white border-b-2 border-gray-300 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-lg font-bold border-2 border-gray-400 px-3 py-1">LiveRec • Employer Lab</div>
          <div className="hidden md:flex gap-3 text-sm">
            <span className="px-3 py-1 border border-gray-400 bg-gray-50">Inspired by market best practices</span>
            <span className="px-3 py-1 border border-gray-400 bg-gray-50">Focus: Employer Detail Launch</span>
          </div>
          <div className="px-3 py-1 border-2 border-gray-400 text-sm">@Wireframe • Onboarding Flow</div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div className="border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
          <strong>Benchmark note:</strong> Industry leaders enforce SMS verification before employer seats go live and block
          publishing until storytelling modules are complete. This streamlined canvas keeps both guardrails but focuses only on
          the active step content.
        </div>

        <section className="bg-white border-4 border-gray-300 shadow-sm p-6 space-y-5">
          <div className="flex flex-wrap gap-3 justify-between items-start">
            <div>
              <h2 className="text-2xl font-semibold border-b-2 border-gray-400 inline-block pb-1">
                {`${currentStep + 1}. ${stepConfig[currentStep].label}`}
              </h2>
              <p className="text-sm text-gray-600 mt-1">Stage: {stageLabels[stepConfig[currentStep].type] ?? "—"}</p>
            </div>
            <div className="text-sm text-gray-700">
              Step {currentStep + 1} of {totalSteps}
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white rounded-lg p-6">{getStepContent()}</div>

          <div className="flex flex-wrap justify-between items-center gap-3 text-xs text-gray-500 border-t border-gray-200 pt-4">
            <span>Need help? Dedicated onboarding manager responds within 1 business day.</span>
            <div className="flex gap-2">
              <button
                disabled={currentStep === 0}
                onClick={() => goToStep(currentStep - 1)}
                className={`px-4 py-2 border-2 border-gray-400 ${
                  currentStep === 0 ? "text-gray-400 cursor-not-allowed" : "text-black"
                }`}
              >
                ← Back
              </button>
              <button
                disabled={currentStep >= totalSteps - 1}
                onClick={() => goToStep(currentStep + 1)}
                className={`px-4 py-2 border-2 border-gray-900 ${
                  currentStep >= totalSteps - 1 ? "text-gray-400 cursor-not-allowed" : "bg-gray-900 text-white"
                }`}
              >
                Quick Advance →
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SignupMethodStep({ onGoogle, onEmail }: { onGoogle: () => void; onEmail: () => void }) {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-gray-500">Start • Employer console baseline</p>
        <h3 className="text-3xl font-bold">Create your employer account</h3>
        <p className="text-gray-600">
          Choose Google Workspace or email + password. Phone verification will always be required in the next step to match
          LiveRec’s security policy.
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={onGoogle}
          className="w-full border-2 border-gray-400 px-4 py-3 flex items-center justify-center gap-3 text-sm font-semibold"
        >
          <span className="w-5 h-5 border border-gray-400 rounded-full" />
          Continue with Google Workspace
        </button>
        <div className="relative text-center text-xs text-gray-500">
          <span className="bg-white px-3">OR</span>
          <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-gray-300" />
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Work email *</label>
            <input type="email" className="mt-2 w-full border-2 border-gray-400 px-4 py-2" placeholder="you@company.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Password *</label>
            <input type="password" className="mt-2 w-full border-2 border-gray-400 px-4 py-2" placeholder="••••••••" />
            <p className="text-xs text-gray-500 mt-1">Min 10 characters, per our employer trust policy.</p>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1 border-2 border-gray-400" />
            <span>
              I agree to the <span className="underline">Employer Terms</span> and <span className="underline">Master Service Agreement</span>.
            </span>
          </div>
        </div>
        <button
          onClick={onEmail}
          className="w-full border-2 border-gray-900 bg-gray-900 text-white px-4 py-3 text-sm font-semibold"
        >
          Continue with Email →
        </button>
      </div>
    </div>
  );
}

function PhoneNumberStep({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-6 max-w-xl">
      <h3 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Add a verified phone number</h3>
      <p className="text-sm text-gray-600">
        LiveRec requires multi-factor SMS before an employer account can be created. Every recruiter seat inherits this number as a safety check.
      </p>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Country & number *</label>
          <div className="mt-2 flex gap-3">
            <select className="w-32 border-2 border-gray-400 px-3 py-2 text-sm">
              <option>+1 USA</option>
              <option>+44 UK</option>
              <option>+91 India</option>
            </select>
            <input
              type="tel"
              className="flex-1 border-2 border-gray-400 px-4 py-2"
              placeholder="+1 (415) 555-0199"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">We’ll text a one-time code. Carrier rates may apply.</p>
        </div>
        <div className="border border-gray-200 bg-gray-50 p-4 text-xs text-gray-600 rounded">
          <p className="font-semibold text-sm text-gray-800 mb-2">Why we require this</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Stop fake job postings and impersonation.</li>
            <li>Enable review response notifications via SMS.</li>
            <li>Allow passwordless login for verified admins.</li>
          </ul>
        </div>
        <button
          onClick={onContinue}
          className="w-full border-2 border-gray-900 bg-gray-900 text-white px-4 py-3 text-sm font-semibold"
        >
          Send verification code →
        </button>
      </div>
    </div>
  );
}

function OTPVerificationStep({ onVerify }: { onVerify: () => void }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  return (
    <div className="space-y-6 max-w-xl">
      <h3 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Verify SMS code</h3>
      <p className="text-sm text-gray-600">Enter the 6-digit code we sent. You must complete this step to continue.</p>
      <div className="flex justify-center gap-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            value={digit}
            maxLength={1}
            onChange={(e) => {
              const next = [...otp];
              next[index] = e.target.value.replace(/\D/, "");
              setOtp(next);
            }}
            className="w-12 h-14 border-2 border-gray-400 text-center text-2xl font-semibold"
          />
        ))}
      </div>
      <div className="text-xs text-center text-gray-500">
        Didn’t get the code? <button className="underline">Resend</button>
      </div>
      <button
        onClick={onVerify}
        className="w-full border-2 border-gray-900 bg-gray-900 text-white px-4 py-3 text-sm font-semibold"
      >
        Verify & continue →
      </button>
    </div>
  );
}

function EmailVerificationStep({
  loginMethod,
  emailVerified,
  onVerify,
  onSkip,
}: {
  loginMethod: "email" | "google" | null;
  emailVerified: boolean;
  onVerify: () => void;
  onSkip: () => void;
}) {
  return (
    <div className="space-y-6 max-w-xl">
      <h3 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Email verification (optional)</h3>
      <p className="text-sm text-gray-600">
        Verifying an email unlocks review notifications and billing receipts, but you can skip for now.
      </p>
      <div className="border border-gray-200 bg-gray-50 p-4 rounded space-y-2 text-sm text-gray-700">
        <p className="font-semibold">Current status</p>
        <p>
          {emailVerified
            ? "✓ Already verified — you can move on."
            : loginMethod === "google"
            ? "Google Workspace provides a verified identity, but add a billing email for alerts."
            : "We sent a link to your work inbox. Click it, then confirm below."}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={onVerify}
          className="w-full border-2 border-gray-900 bg-gray-900 text-white px-4 py-3 text-sm font-semibold"
        >
          I verified my email →
        </button>
        <button onClick={onSkip} className="w-full border-2 border-gray-300 px-4 py-3 text-sm font-semibold">
          Skip for now
        </button>
      </div>
    </div>
  );
}

function CompanyBasicsStep({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-6">
      <p className="text-sm uppercase tracking-wide text-gray-500">Populate hero module</p>
      <h3 className="text-2xl font-semibold">Company basics</h3>
      <p className="text-sm text-gray-600">
        These fields directly fuel the hero area of the employer detail page you previewed earlier (logo, headline, location, team size).
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Company name *</label>
          <input className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue="Nimbus Labs" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Industry focus *</label>
          <input className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue="AI & Data Infrastructure" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">HQ location *</label>
          <input className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue="San Francisco, CA" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Team size *</label>
          <select
            defaultValue="250-500"
            className="mt-2 w-full border-2 border-gray-400 px-4 py-2 text-sm"
          >
            <option value="11-50">11-50</option>
            <option value="250-500">250-500</option>
            <option value="500-1000">500-1000</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Company tagline *</label>
          <input
            className="mt-2 w-full border-2 border-gray-400 px-4 py-2"
            defaultValue="AI-native infrastructure powering ethical automation."
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Company website *</label>
          <input
            className="mt-2 w-full border-2 border-gray-400 px-4 py-2"
            defaultValue="https://www.nimbuslabs.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Company type *</label>
          <select className="mt-2 w-full border-2 border-gray-400 px-4 py-2 text-sm" defaultValue="Private">
            <option value="Private">Private</option>
            <option value="Public">Public</option>
            <option value="Nonprofit">Nonprofit</option>
            <option value="Government">Government</option>
            <option value="Agency / Consultancy">Agency / Consultancy</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Founded on *</label>
          <input
            type="month"
            className="mt-2 w-full border-2 border-gray-400 px-4 py-2"
            defaultValue="2018-01"
          />
        </div>
      </div>
      <button
        onClick={onContinue}
        className="w-full border-2 border-gray-900 bg-gray-900 text-white px-4 py-3 text-sm font-semibold"
      >
        Save & continue →
      </button>
    </div>
  );
}

function BrandingAssetsStep({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-6">
      <p className="text-sm uppercase tracking-wide text-gray-500">Hero media</p>
      <h3 className="text-2xl font-semibold">Branding assets</h3>
      <p className="text-sm text-gray-600">
        Employers must add cover media before their profile is searchable, mirroring best-in-class brand hubs.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border-2 border-dashed border-gray-400 p-6 text-center space-y-2">
          <p className="font-semibold">Upload logo</p>
          <button className="px-4 py-2 border-2 border-gray-900 text-sm">Select file</button>
          <p className="text-xs text-gray-500">SVG or PNG • 500x500</p>
        </div>
        <div className="border-2 border-dashed border-gray-400 p-6 text-center space-y-2">
          <p className="font-semibold">Hero video / cover photo</p>
          <button className="px-4 py-2 border-2 border-gray-900 text-sm">Upload media</button>
          <p className="text-xs text-gray-500">MP4 up to 60s or JPG 2400x1350</p>
        </div>
      </div>
      <button
        onClick={onContinue}
        className="w-full border-2 border-gray-900 bg-gray-900 text-white px-4 py-3 text-sm font-semibold"
      >
        Continue to culture →
      </button>
    </div>
  );
}

function CultureBenefitsStep({ onContinue }: { onContinue: () => void }) {
  const benefits = [
    {
      title: "Flexible Fridays",
      placeholder: "Explain how teams unplug or use the day for learning.",
    },
    {
      title: "Recharge Bonus",
      placeholder: "Share the stipend or perk that helps people reset.",
    },
    {
      title: "People-first Leadership",
      placeholder: "Describe rituals that prove leadership accessibility.",
    },
    {
      title: "Wellness Stipend",
      placeholder: "Detail the monthly or annual allowance.",
    },
    {
      title: "Climate Impact Squads",
      placeholder: "Tell candidates how squads drive sustainability.",
    },
  ];
  const [selectedBenefits, setSelectedBenefits] = useState<Record<string, string>>({});

  const toggleBenefit = (title: string) => {
    setSelectedBenefits((prev) => {
      const next = { ...prev };
      if (title in next) {
        delete next[title];
      } else {
        next[title] = "";
      }
      return next;
    });
  };

  const updateDescription = (title: string, value: string) => {
    setSelectedBenefits((prev) => ({ ...prev, [title]: value }));
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Culture & benefits</h3>
      <p className="text-sm text-gray-600">
        Forced narrative ensures every employer page reads like the Nimbus Labs example—high-signal copy for candidates.
      </p>
      <div>
        <label className="text-sm font-medium text-gray-700">About the company *</label>
        <textarea
          className="mt-2 w-full border-2 border-gray-400 px-4 py-3 min-h-[120px]"
          defaultValue="Nimbus Labs builds AI-native infrastructure that helps enterprises launch conversational copilots safely."
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700">Top benefits</label>
        <p className="text-xs text-gray-500 mb-3">
          These tiles are curated by the LiveRec admin panel (title + logo). Select the benefits you actually offer, then add a
          short description for each selected clip.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="border-2 border-gray-300 rounded-lg p-4 space-y-3 bg-gray-50">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 border-2 border-gray-400"
                  checked={benefit.title in selectedBenefits}
                  onChange={() => toggleBenefit(benefit.title)}
                />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-gray-400 bg-white text-[10px] uppercase tracking-wide flex items-center justify-center">
                    Logo
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{benefit.title}</p>
                    <p className="text-xs text-gray-500">Admin-defined tile</p>
                  </div>
                </div>
              </label>
              {benefit.title in selectedBenefits ? (
                <textarea
                  className="w-full border-2 border-gray-400 px-3 py-2 text-sm min-h-[70px] bg-white"
                  placeholder={benefit.placeholder}
                  value={selectedBenefits[benefit.title]}
                  onChange={(e) => updateDescription(benefit.title, e.target.value)}
                />
              ) : (
                <p className="text-xs text-gray-500">
                  Select this benefit to add a short description visible on your public profile.
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-2">
          <label className="text-sm font-medium text-gray-700">Why join us</label>
          <textarea
            className="w-full border-2 border-gray-400 px-4 py-3 min-h-[120px]"
            placeholder="Summarize the reasons candidates should join — leadership access, growth runway, mission alignment..."
          />
        </div>
      </div>
      <button
        onClick={onContinue}
        className="w-full border-2 border-gray-900 bg-gray-900 text-white px-4 py-3 text-sm font-semibold"
      >
        Continue to open roles →
      </button>
    </div>
  );
}

function JobCreationStep({ onContinue }: { onContinue: () => void }) {
  const job = jobDetailTemplate;
  const [selectedSkills, setSelectedSkills] = useState<string[]>(job.skills);

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Build job posting</h3>
      <p className="text-sm text-gray-600">
        This form mirrors the LiveRec job detail layout. Fill out the structured data and descriptive copy so the public job page matches candidate expectations.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Job name *</label>
          <input className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue={job.title} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">City *</label>
          <input className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue={job.city} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">State *</label>
          <input className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue={job.state} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Remote type *</label>
          <select className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue={job.remoteType}>
            {remoteOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Salary range *</label>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <div>
              <span className="text-xs text-gray-500">Min ($)</span>
              <input
                type="number"
                className="mt-1 w-full border-2 border-gray-400 px-4 py-2"
                defaultValue={job.salaryMin}
              />
            </div>
            <div>
              <span className="text-xs text-gray-500">Max ($)</span>
              <input
                type="number"
                className="mt-1 w-full border-2 border-gray-400 px-4 py-2"
                defaultValue={job.salaryMax}
              />
            </div>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Seniority level *</label>
          <select className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue={job.seniority}>
            {seniorityOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Work experience *</label>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <div>
              <span className="text-xs text-gray-500">Min years</span>
              <input
                type="number"
                className="mt-1 w-full border-2 border-gray-400 px-4 py-2"
                defaultValue={job.experienceMin}
              />
            </div>
            <div>
              <span className="text-xs text-gray-500">Max years</span>
              <input
                type="number"
                className="mt-1 w-full border-2 border-gray-400 px-4 py-2"
                defaultValue={job.experienceMax}
              />
            </div>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Employment type *</label>
          <select className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue={job.employmentType}>
            {employmentTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Industry *</label>
          <select className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue={job.industry}>
            {industryOptions.map((industry) => (
              <option key={industry}>{industry}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Specialization *</label>
          <select className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue={job.specialization}>
            {specializationOptions.map((spec) => (
              <option key={spec}>{spec}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Relocation *</label>
          <select className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue={job.relocation}>
            {relocationOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Visa sponsorship *</label>
          <select className="mt-2 w-full border-2 border-gray-400 px-4 py-2" defaultValue={job.visa}>
            {visaOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">About the role *</label>
          <textarea className="w-full border-2 border-gray-400 px-4 py-3 min-h-[120px]" defaultValue={job.about} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Responsibilities *</label>
          <textarea
            className="w-full border-2 border-gray-400 px-4 py-3 min-h-[120px]"
            defaultValue={job.responsibilities}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Requirements *</label>
          <textarea
            className="w-full border-2 border-gray-400 px-4 py-3 min-h-[120px]"
            defaultValue={job.requirements}
          />
        </div>
      </div>

      <div className="space-y-3 border-2 border-gray-300 rounded-lg p-4">
        <p className="text-sm font-semibold text-gray-800">Skills required *</p>
        <p className="text-xs text-gray-500">
          Choose from the admin-approved skills library. Selected skills surface as chips on the job detail page and boost
          matching quality.
        </p>
        <div className="flex flex-wrap gap-2">
          {skillLibrary.map((skill) => {
            const isSelected = selectedSkills.includes(skill);
            return (
              <button
                type="button"
                key={skill}
                onClick={() =>
                  setSelectedSkills((prev) =>
                    prev.includes(skill) ? prev.filter((item) => item !== skill) : [...prev, skill],
                  )
                }
                className={`px-3 py-1 border-2 text-xs font-semibold ${
                  isSelected ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 text-gray-700 bg-white"
                }`}
              >
                {isSelected ? "✓ " : ""}{skill}
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={onContinue}
        className="w-full border-2 border-gray-900 bg-gray-900 text-white px-4 py-3 text-sm font-semibold"
      >
        Save job & continue →
      </button>
    </div>
  );
}

function TrustComplianceStep({ onContinue }: { onContinue: () => void }) {
  const badges = ["Best Place to Work 2025", "Fortune 500 Partner", "ISO 27001 Certified", "Climate Pledge Friendly"];
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Trust & compliance badges</h3>
      <p className="text-sm text-gray-600">
        This mirrors the promotional badges grid on the employer detail page. At least two must be selected to publish.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {badges.map((badge) => (
          <label key={badge} className="border-2 border-gray-300 p-4 flex items-start gap-3 cursor-pointer bg-gray-50">
            <input type="checkbox" className="mt-1" />
            <div>
              <p className="font-semibold text-sm">{badge}</p>
              <p className="text-xs text-gray-500">Add citation URL</p>
            </div>
          </label>
        ))}
      </div>
      <button
        onClick={onContinue}
        className="w-full border-2 border-gray-900 bg-gray-900 text-white px-4 py-3 text-sm font-semibold"
      >
        Continue to preview →
      </button>
    </div>
  );
}

function PreviewStep({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Review employer detail preview</h3>
      <p className="text-sm text-gray-600">
        LiveRec renders a mini-version of the Nimbus Labs profile so admins can confirm copy before selecting a membership plan.
      </p>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 space-y-3">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="w-16 h-16 border-2 border-gray-400 flex items-center justify-center text-sm">Logo</div>
          <div>
            <p className="font-semibold">{previewCompany.name}</p>
            <p className="text-xs text-gray-600">{previewCompany.headline}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {previewCompany.badges.map((badge) => (
                <span key={badge} className="px-2 py-0.5 border border-gray-400 text-[11px]">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-gray-200 p-3 text-xs text-gray-600">
          <p className="font-semibold text-gray-800">Culture snapshot</p>
          <ul className="list-disc list-inside">
            {previewCompany.values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
        <div className="grid md:grid-cols-3 gap-3 text-xs text-gray-600">
          <div className="border border-gray-200 p-3 bg-gray-50">
            <p className="font-semibold text-sm">Mission & Story</p>
            <p>AI-native infrastructure for ethical automation.</p>
          </div>
          <div className="border border-gray-200 p-3 bg-gray-50">
            <p className="font-semibold text-sm">Jobs</p>
            <p>3 featured roles ready for sponsorship.</p>
          </div>
          <div className="border border-gray-200 p-3 bg-gray-50">
            <p className="font-semibold text-sm">Badges</p>
            <p>4 trust signals uploaded.</p>
          </div>
        </div>
      </div>
      <button
        onClick={onContinue}
        className="w-full border-2 border-gray-900 bg-gray-900 text-white px-4 py-3 text-sm font-semibold"
      >
        Looks good → choose plan
      </button>
    </div>
  );
}

function MembershipPlanStep({ onSelectPlan }: { onSelectPlan: () => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold">Membership plan selection</h3>
        <p className="text-sm text-gray-600">
          Pick the reach your team needs—plans escalate from basic presence to fully managed branding support.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Selecting a plan opens LiveRec’s secure Stripe checkout; once payment succeeds you’ll jump straight to launch
          confirmation.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {membershipPlans.map((plan) => (
          <div
            key={plan.name}
            className={`border-2 rounded-lg p-4 space-y-3 ${
              plan.featured ? "border-gray-900 bg-gray-50" : "border-gray-300"
            }`}
          >
            {plan.featured && (
              <span className="text-[11px] uppercase tracking-wide border border-gray-900 px-2 py-0.5">
                Most popular
              </span>
            )}
            <div>
              <p className="font-semibold">{plan.name}</p>
              <p className="text-xl font-bold">{plan.price}</p>
              <p className="text-xs text-gray-500">{plan.cadence}</p>
              <p className="text-xs text-gray-600 mt-1">{plan.highlight}</p>
            </div>
            <ul className="space-y-2 text-xs text-gray-600">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-1">
                  <span>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={onSelectPlan}
              className={`w-full border-2 px-4 py-2 text-sm font-semibold ${
                plan.featured ? "border-gray-900 bg-gray-900 text-white" : "border-gray-400"
              }`}
            >
              {plan.price === "$0" ? "Continue free" : "Select plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function LaunchCompleteStep() {
  return (
    <div className="space-y-6 text-center">
      <div className="w-24 h-24 border-4 border-gray-900 mx-auto rounded-full flex items-center justify-center text-4xl">
        ✓
      </div>
      <h3 className="text-3xl font-semibold">Employer detail page launched!</h3>
      <p className="text-sm text-gray-600">
        Nimbus Labs is now discoverable in search, and the hiring team can manage reviews, jobs, and analytics in one hub.
      </p>
      <div className="grid md:grid-cols-3 gap-4 text-left text-sm">
        <div className="border border-gray-200 p-4 bg-gray-50">
          <p className="font-semibold">What’s live</p>
          <p>Hero, badges, jobs, culture modules—exactly like the employer detail mock.</p>
        </div>
        <div className="border border-gray-200 p-4 bg-gray-50">
          <p className="font-semibold">Next steps</p>
          <p>Sponsor priority jobs, invite recruiter seats, reply to new reviews.</p>
        </div>
        <div className="border border-gray-200 p-4 bg-gray-50">
          <p className="font-semibold">Support</p>
          <p>Success manager intro within 1 business day.</p>
        </div>
      </div>
    </div>
  );
}


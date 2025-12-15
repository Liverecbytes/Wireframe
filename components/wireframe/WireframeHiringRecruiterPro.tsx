"use client";

import { useMemo, useState } from "react";

const personaHighlights = [
  {
    id: "recruiter",
    label: "Recruiter Membership",
    badge: "Professional Plan",
    priceMonthly: "$548/mo",
    priceAnnual: "$4,599/yr",
    blurb: "Full-stack hiring workspace for in-house talent teams that need verified reach, ATS tools, and AI helpers without additional compliance layers.",
    focusPoints: ["10 active job listings included", "15 LiveRec resume credits", "Add-on automation boosts as needed"],
    cta: "Review recruiter plan on pricing",
    tone: "Essential tools for fast-moving teams",
  },
  {
    id: "pro",
    label: "Pro Recruiter Membership",
    badge: "Agency & Headhunter tier",
    priceMonthly: "$1,599/mo",
    priceAnnual: "$10,499/yr",
    blurb: "Built for vetted agencies and headhunters who run multi-client pipelines, require verifications, and depend on automation-first workflows.",
    focusPoints: [
      "100 active listings (+$15 per additional)",
      "50 LiveRec resume credits",
      "Verification & organized client management included",
    ],
    cta: "Review pro plan on pricing",
    tone: "Advanced automation + compliance guardrails",
  },
];

const journeys = [
  {
    id: "recruiter",
    title: "Recruiter onboarding",
    description:
      "Optimized for internal hiring teams. Every step begins after selecting Professional or Enterprise membership from the pricing hub.",
    steps: [
      {
        title: "1. Select Professional / Enterprise plan",
        detail: "Journey begins on pricing.liverec.com. Checkout chooses billing cadence and seat count.",
        note: "No membership pricing is shown on hiring.liverec.com per brand guidelines.",
      },
      {
        title: "2. Employer console kickoff",
        detail: "Recruiter admins confirm branding modules, upload logo, and verify SMS/email as shown in the recruiter wireframe.",
      },
      {
        title: "3. Recruiter seat invitations",
        detail: "Invite-only links for hiring managers and coordinators. Focus on ATS setup, scheduling, and templates.",
      },
      {
        title: "4. Go live & measure",
        detail: "Launch roles, monitor reach, and decide when to add-on items (priority placement, refresh automation, background packs).",
      },
    ],
  },
  {
    id: "pro",
    title: "Pro recruiter onboarding",
    description:
      "Agency-focused and front-loaded with verification. Every pro journey still originates on pricing.liverec.com so billing stays centralized.",
    steps: [
      {
        title: "1. Select Pro Recruiter membership",
        detail: "Plan selection and checkout live on pricing.liverec.com. After payment, access opens on hiring.liverec.com.",
      },
      {
        title: "2. Verification & portfolio review",
        detail: "Upload headhunter-corporate relationship proof, client roster, and compliance certificates before posting.",
      },
      {
        title: "3. Client workspace setup",
        detail: "Create organized client folders, import mandates, map AI-matching preferences, and configure automated interview scheduling.",
      },
      {
        title: "4. Automation & analytics calibration",
        detail: "Enable predictive analytics, Phase 2 AI note-taking, and Phase 3 benchmarking to keep agencies accountable.",
      },
    ],
  },
];

const comparisonGroups = [
  {
    title: "Reach & branding essentials",
    definition:
      "Everything candidates see on hiring.liverec.com — company stories, badges, and job visibility — starts with these controls.",
    items: [
      {
        feature: "Active job listings",
        recruiter: "10 included seats (Professional) / 40 with Enterprise, scale via pricing checkout.",
        pro: "100 included listings with automatic +$15 per extra listing, ideal for agency rosters.",
      },
      {
        feature: "LiveRec credits (resume views)",
        recruiter: "15 credits each cycle. Teams top up via credit packs from billing console.",
        pro: "50 credits plus pooled access across client pods; refreshes monthly.",
      },
      {
        feature: "Story modules & promotional badges",
        recruiter: "Yes — hero media, Why Work With Us, and review badges mirror recruiter wireframe.",
        pro: "All recruiter modules plus verification callouts that spotlight agency specializations.",
      },
    ],
  },
  {
    title: "Core hiring & management tools",
    definition: "ATS workflows, scheduling, assessments, and distribution logic to publish and manage requisitions.",
    items: [
      {
        feature: "Job posting + ATS + scheduling",
        recruiter: "Included toolset. Priority placement & automatic reposting available as add-ons.",
        pro: "Included toolset plus 3 priority placements and 2 auto-refresh slots baked in.",
      },
      {
        feature: "AI-powered matching",
        recruiter: "Baseline AI matching between job seekers and employers.",
        pro: "Expanded AI + predictive scoring tuned per client mandate, including labor trend insights.",
      },
      {
        feature: "IQ & assessment screenings",
        recruiter: "Included for standard roles.",
        pro: "Included plus configurable per client, designed for high-volume or niche assessments.",
      },
    ],
  },
  {
    title: "Automation & AI integration",
    definition: "Tools that remove manual work — from drafting posts to nudging talent.",
    items: [
      {
        feature: "AI job listing review",
        recruiter: "Manual template + support review. AI audit available as future upgrade.",
        pro: "Real-time AI diagnostics that flag errors and suggest improvements before publishing.",
      },
      {
        feature: "Automated postings & refresh",
        recruiter: "Automated postings available as an add-on inside the employer console.",
        pro: "Automated postings are always-on; refresh cadence is configurable per client.",
      },
      {
        feature: "Predictive analytics",
        recruiter: "Baseline trend tiles (time-to-fill, candidate pools).",
        pro: "Deep predictive insights with labor forecasts, salary deviations, and client-ready exports.",
      },
    ],
  },
  {
    title: "ATS intelligence & scheduling",
    definition: "Phase 2 capabilities that turn every interview into structured data.",
    items: [
      {
        feature: "AI note-taking & summarization",
        recruiter: "Available as a paid add-on per seat.",
        pro: "Included — transcripts, highlights, and suggested follow-ups auto-sync to each candidate.",
      },
      {
        feature: "Real-time interview question panel",
        recruiter: "Add-on guided interviewing for top roles.",
        pro: "Pinned side panel with curated questions is standard for every pro seat.",
      },
      {
        feature: "Automated reminders & follow-ups",
        recruiter: "Included SMS/email reminders.",
        pro: "Included plus AI-generated recap emails and branded candidate nudges.",
      },
    ],
  },
  {
    title: "Reporting & governance",
    definition: "Visibility for leadership, clients, and compliance reviewers.",
    items: [
      {
        feature: "Advanced KPIs",
        recruiter: "Full dashboard: employer profile activity, demographics, interview trends.",
        pro: "All recruiter analytics plus advanced KPIs, competitor comparisons, and Indeed benchmark overlays.",
      },
      {
        feature: "Verification methods",
        recruiter: "Standard business verification (SMS + email).",
        pro: "Headhunter–corporate relationship verification + organized client management dossier required.",
      },
      {
        feature: "Document & legal management",
        recruiter: "Immigration tracking available as add-on; e-sign and legal hub included.",
        pro: "Same coverage with priority review SLAs to keep agency paperwork audit-ready.",
      },
    ],
  },
  {
    title: "Phase roadmap advantages",
    definition: "Upcoming releases already scoped for this hiring hub.",
    items: [
      {
        feature: "Review amplification (Phase 3)",
        recruiter: "Request/respond workflows + community content enabled.",
        pro: "Same tools plus featured review placement for agency partners.",
      },
      {
        feature: "Workflow integrations",
        recruiter: "Slack, calendar, and ATS exports.",
        pro: "Everything above plus CRM sync (HubSpot/Salesforce) for client folders.",
      },
      {
        feature: "Interview prep concierge",
        recruiter: "On-demand interview prep as part of templates library.",
        pro: "Includes one-on-one interview coaching for agency candidates.",
      },
    ],
  },
];

const faqItems = [
  {
    question: "Where do recruiters or pro recruiters pick a membership?",
    answer:
      "Always on pricing.liverec.com. This hiring hub intentionally excludes pricing so admins stay in sync with Finance before onboarding.",
  },
  {
    question: "Can I switch from recruiter to pro recruiter later?",
    answer:
      "Yes. Upgrade within the billing console. We’ll run the verification checklist, migrate data, and preserve job performance history.",
  },
  {
    question: "What makes the pro recruiter verification different?",
    answer:
      "Agencies upload corporate agreements, references, and client management proof. Once approved, verification badges and governance controls unlock automatically.",
  },
  {
    question: "Do both journeys use the same onboarding flow shown earlier?",
    answer:
      "Shared modules (brand, ATS, storytelling) are identical, but pro recruiters see extra steps for verification, client folders, and automation presets.",
  },
];

export default function WireframeHiringRecruiterPro() {
  const [activePersona, setActivePersona] = useState<"recruiter" | "pro">("recruiter");

  const activeHighlight = useMemo(() => personaHighlights.find((item) => item.id === activePersona), [activePersona]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="border-b border-gray-300 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">hiring.liverec.com</p>
            <h1 className="text-2xl font-semibold">Recruiter & Pro Recruiter Hub</h1>
          </div>
          <div className="flex flex-col text-right text-sm">
            <span className="font-semibold text-blue-900">LiveRec • Hiring Network</span>
            <span className="text-gray-500">Designed for dual recruiter journeys</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-10 px-4 py-10">
        <section className="grid gap-6 rounded-2xl border-4 border-blue-200 bg-white/70 p-6 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-blue-700">One destination, two recruiter paths</p>
            <h2 className="text-3xl font-bold leading-tight">
              Start the hiring journey for recruiters and pro recruiters on a single page.
            </h2>
            <p className="text-base text-gray-600">
              This wireframe mirrors the recruiter-only concept you shared, but now surfaces pro recruiter context, definitions, and
              onboarding differences. Membership pricing remains on the dedicated pricing hub—this page converts informed visitors
              into plan selections.
            </p>
            <p className="text-sm text-gray-500">CTA buttons below route users back to pricing.liverec.com to complete checkout.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <button className="border-2 border-gray-900 bg-gray-900 px-4 py-2 text-white">View membership plans</button>
              <button className="border-2 border-gray-400 px-4 py-2 text-gray-800">Download recruiter overview</button>
            </div>
          </div>
          <div className="space-y-3 rounded-xl border-2 border-gray-900 bg-gray-900/5 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-500">Live metrics</p>
            <div className="grid grid-cols-2 gap-4">
              <Metric label="Active recruiters" value="50K+" delta="+6% q/q" />
              <Metric label="Candidates matched" value="2M+" delta="+18% YoY" />
              <Metric label="Satisfaction rate" value="95%" delta="Weighted NPS 68" />
              <Metric label="Faster hiring" value="60%" delta="Avg reduction in time-to-fill" />
            </div>
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border-4 border-gray-300 bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">Compare journeys</p>
              <h3 className="text-2xl font-semibold">Recruiters vs. Pro Recruiters</h3>
            </div>
            <div className="flex gap-2">
              {(["recruiter", "pro"] as const).map((persona) => (
                <button
                  key={persona}
                  onClick={() => setActivePersona(persona)}
                  className={`rounded-full border px-4 py-1 text-sm font-semibold ${
                    activePersona === persona ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 text-gray-600"
                  }`}
                >
                  {persona === "recruiter" ? "Recruiter" : "Pro Recruiter"}
                </button>
              ))}
            </div>
          </div>
          {activeHighlight && (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border-2 border-gray-900 bg-gray-900/90 p-6 text-white">
                <span className="text-xs uppercase tracking-wide text-blue-100">{activeHighlight.badge}</span>
                <h4 className="text-2xl font-semibold">{activeHighlight.label}</h4>
                <p className="text-sm text-white/80">{activeHighlight.tone}</p>
                <div className="grid grid-cols-2 gap-4 text-lg font-semibold">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/60">Monthly</p>
                    <p>{activeHighlight.priceMonthly}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/60">Annual</p>
                    <p>{activeHighlight.priceAnnual}</p>
                  </div>
                </div>
                <p className="text-sm text-white/90">{activeHighlight.blurb}</p>
                <ul className="space-y-2 rounded-lg bg-white/10 p-3 text-sm">
                  {activeHighlight.focusPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span>✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded border border-white/60 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  {activeHighlight.cta}
                </button>
              </div>
              <div className="space-y-4 rounded-xl border-2 border-dashed border-gray-400 p-6">
                <p className="text-sm text-gray-600">
                  The recruiter-focused wireframe showcased earlier remains intact. This new canvas simply adds pro recruiter context so
                  both audiences understand their path before heading to pricing.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center text-xs uppercase tracking-wide text-gray-500">
                  <div className="rounded-lg border border-gray-200 p-4">
                    <p>Primary CTA</p>
                    <p className="text-base font-semibold text-gray-900">“Explore plans”</p>
                    <p className="text-gray-400">links to pricing.liverec.com</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4">
                    <p>Secondary CTA</p>
                    <p className="text-base font-semibold text-gray-900">“Get recruiter kit”</p>
                    <p className="text-gray-400">PDF / resource hub</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  NOTE: Membership plan tables intentionally removed here per requirement. Users review subscription specifics on the
                  pricing page, then return to start onboarding.
                </p>
              </div>
            </div>
          )}
        </section>

        <section className="space-y-6 rounded-2xl border-4 border-gray-200 bg-white p-6">
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">Onboarding flows</p>
              <h3 className="text-2xl font-semibold">Parallel journeys, shared foundation</h3>
            </div>
            <p className="max-w-lg text-sm text-gray-600">
              Both journeys reuse the recruiter onboarding wireframe for shared modules (brand, ATS, storytelling). Pro recruiters get
              extra verification and automation steps layered on top.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {journeys.map((journey) => (
              <div key={journey.id} className="space-y-4 rounded-xl border border-gray-200 p-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">{journey.id === "recruiter" ? "Recruiter" : "Pro Recruiter"}</p>
                  <h4 className="text-lg font-semibold">{journey.title}</h4>
                  <p className="text-sm text-gray-600">{journey.description}</p>
                </div>
                <div className="space-y-3">
                  {journey.steps.map((step, index) => (
                    <div key={step.title} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-400">Step {index + 1}</p>
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-sm text-gray-600">{step.detail}</p>
                      {step.note && <p className="text-xs text-gray-500">{step.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5 rounded-2xl border-4 border-blue-100 bg-white p-6">
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-blue-600">Feature definitions</p>
              <h3 className="text-2xl font-semibold">Important capabilities by persona</h3>
            </div>
            <p className="max-w-lg text-sm text-gray-600">
              Below is the content system you can plug into the visual cells on hiring.liverec.com. Each row references the data you
              provided for Professional, Enterprise, and Pro Recruiter plans.
            </p>
          </div>
          <div className="space-y-6">
            {comparisonGroups.map((group) => (
              <div key={group.title} className="rounded-xl border border-gray-200 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">{group.title}</p>
                    <p className="text-sm text-gray-600">{group.definition}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  {group.items.map((item) => (
                    <div key={item.feature} className="grid gap-4 rounded-lg border border-gray-100 bg-gray-50 p-4 md:grid-cols-3">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">Feature</p>
                        <p className="font-semibold text-gray-900">{item.feature}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">Recruiter</p>
                        <p className="text-sm text-gray-700">{item.recruiter}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">Pro Recruiter</p>
                        <p className="text-sm text-gray-700">{item.pro}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-2xl border-4 border-gray-300 bg-white p-6 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wide text-gray-500">CTA band</p>
            <h3 className="text-2xl font-semibold">Ready to move forward?</h3>
            <p className="text-sm text-gray-600">
              Send every CTA to the pricing experience. From there, recruiters move directly into the onboarding flow you built, while
              pro recruiters complete verification and automation presets.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-md border-2 border-gray-900 bg-gray-900 px-5 py-3 text-sm font-semibold text-white">
                Go to pricing.liverec.com
              </button>
              <button className="rounded-md border-2 border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800">
                Talk to LiveRec team
              </button>
            </div>
          </div>
          <div className="space-y-3 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
            <p className="text-xs uppercase tracking-wide text-gray-500">Quick reminders</p>
            <ul className="space-y-2">
              <li>• Pricing tables live only on pricing.liverec.com.</li>
              <li>• Hiring hub houses feature narratives and journeys.</li>
              <li>• Both personas reuse the recruiter wireframe foundation.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border-4 border-gray-200 bg-white p-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">FAQ</p>
            <h3 className="text-2xl font-semibold">Frequently asked questions</h3>
          </div>
          <div className="space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-gray-900">{faq.question}</summary>
                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm text-gray-500">
          <p>LiveRec Hiring Hub • Concept wireframe • {new Date().getFullYear()}</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Support</span>
            <span>Legal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Metric({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-lg border border-white bg-white/70 p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      <p className="text-xs text-gray-400">{delta}</p>
    </div>
  );
}




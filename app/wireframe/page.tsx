import Link from "next/link";
import WireframeHeader from "@/components/wireframe/WireframeHeader";
import WireframeHeroSection from "@/components/wireframe/WireframeHeroSection";
import WireframeJobRecommendations from "@/components/wireframe/WireframeJobRecommendations";
import WireframeWhyChooseUs from "@/components/wireframe/WireframeWhyChooseUs";
import WireframeConsolidatedCTA from "@/components/wireframe/WireframeConsolidatedCTA";
import WireframeEmployerCTA from "@/components/wireframe/WireframeEmployerCTA";
import WireframeTopCompanies from "@/components/wireframe/WireframeTopCompanies";
import WireframeSuccessStories from "@/components/wireframe/WireframeSuccessStories";
import WireframeBlogSection from "@/components/wireframe/WireframeBlogSection";
import WireframeStatsSection from "@/components/wireframe/WireframeStatsSection";
import WireframeHelpCenter from "@/components/wireframe/WireframeHelpCenter";
import WireframeFooter from "@/components/wireframe/WireframeFooter";

export default function WireframePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Links to Wireframe Pages */}
      <div className="bg-gray-100 border-b-2 border-gray-300 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Candidate Journey */}
            <div>
              <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Candidate Journey</div>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link 
                  href="/wireframe/jobs" 
                  className="px-4 py-2 border-2 border-gray-400 bg-white text-black hover:bg-gray-800 hover:text-white transition-colors"
                >
                  🔍 Jobs Wireframe
                </Link>
                <Link 
                  href="/wireframe/onboarding" 
                  className="px-4 py-2 border-2 border-gray-400 bg-white text-black hover:bg-gray-800 hover:text-white transition-colors"
                >
                  👤 Candidate Onboarding
                </Link>
                <Link 
                  href="/wireframe/job-application-flow" 
                  className="px-4 py-2 border-2 border-gray-400 bg-white text-black hover:bg-gray-800 hover:text-white transition-colors"
                >
                  🧾 Job Application Flow
                </Link>
                <Link 
                  href="/wireframe/candidate-profile" 
                  className="px-4 py-2 border-2 border-gray-400 bg-white text-black hover:bg-gray-800 hover:text-white transition-colors"
                >
                  🧑‍💼 Candidate Profile
                </Link>
              </div>
            </div>

            {/* Employer Journey */}
            <div>
              <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Employer Journey - Applied Jobs</div>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link 
                  href="/wireframe/employer-job-applications" 
                  className="px-4 py-2 border-2 border-blue-400 bg-blue-50 text-black hover:bg-blue-600 hover:text-white transition-colors"
                >
                  📋 Applicant Listing View
                </Link>
                <Link 
                  href="/wireframe/applicant-detail-view" 
                  className="px-4 py-2 border-2 border-blue-400 bg-blue-50 text-black hover:bg-blue-600 hover:text-white transition-colors"
                >
                  👁️ Applicant Detail View
                </Link>
                <Link 
                  href="/wireframe/interview-scheduling" 
                  className="px-4 py-2 border-2 border-blue-400 bg-blue-50 text-black hover:bg-blue-600 hover:text-white transition-colors"
                >
                  📅 Interview Scheduling
                </Link>
                <Link 
                  href="/wireframe/hiring-analytics" 
                  className="px-4 py-2 border-2 border-blue-400 bg-blue-50 text-black hover:bg-blue-600 hover:text-white transition-colors"
                >
                  📊 Hiring Analytics
                </Link>
              </div>
            </div>

            {/* Other Pages */}
            <div>
              <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Other</div>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link 
                  href="/wireframe/employer-detail" 
                  className="px-4 py-2 border-2 border-gray-400 bg-white text-black hover:bg-gray-800 hover:text-white transition-colors"
                >
                  🏢 Employer Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WireframeHeader />
      <main>
        <WireframeHeroSection />
        <WireframeJobRecommendations />
        <WireframeWhyChooseUs />
        <WireframeConsolidatedCTA />
        <WireframeEmployerCTA />
        <WireframeTopCompanies />
        <WireframeSuccessStories />
        <WireframeBlogSection />
        <WireframeStatsSection />
        <WireframeHelpCenter />
      </main>
      <WireframeFooter />
    </div>
  );
}


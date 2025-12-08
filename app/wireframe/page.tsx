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
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/wireframe/jobs" 
              className="px-4 py-2 border-2 border-gray-400 bg-white text-black hover:bg-gray-800 hover:text-white transition-colors"
            >
              🔍 Jobs Wireframe (Listings + Details Side by Side)
            </Link>
            <Link 
              href="/wireframe/onboarding" 
              className="px-4 py-2 border-2 border-gray-400 bg-white text-black hover:bg-gray-800 hover:text-white transition-colors"
            >
              👤 Candidate Onboarding Flow
            </Link>
            <Link 
              href="/wireframe/employer-detail" 
              className="px-4 py-2 border-2 border-gray-400 bg-white text-black hover:bg-gray-800 hover:text-white transition-colors"
            >
              🏢 Employer Detail Page
            </Link>
            <Link 
              href="/wireframe/job-application-flow" 
              className="px-4 py-2 border-2 border-gray-400 bg-white text-black hover:bg-gray-800 hover:text-white transition-colors"
            >
              🧾 Job Application Flow
            </Link>
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


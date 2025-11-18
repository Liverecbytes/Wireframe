/* import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JobRecommendations from "@/components/JobRecommendations";
import WhyChooseUs from "@/components/WhyChooseUs";
import ConsolidatedCTA from "@/components/ConsolidatedCTA";
import EmployerCTA from "@/components/EmployerCTA";
import TopCompanies from "@/components/TopCompanies";
import SuccessStories from "@/components/SuccessStories";
import BlogSection from "@/components/BlogSection";
import StatsSection from "@/components/StatsSection";
import HelpCenter from "@/components/HelpCenter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <JobRecommendations />
        <WhyChooseUs />
        <ConsolidatedCTA />
        <EmployerCTA />
        <TopCompanies />
        <SuccessStories />
        <BlogSection />
        <StatsSection />
        <HelpCenter />
      </main>
      <Footer />
    </div>
  );
}

*/

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            LiveRec
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Job portal for candidates and employers and AI-powered matching jobs recommendation system for candidates.
          </p>
        </div>
      </main>
    </div>
  );
}

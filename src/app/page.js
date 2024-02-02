import AppSection from "@/components/Apps/AppSection";
import FaqSection from "@/components/FAQ/FaqSection";
import FeatureSection from "@/components/Feature/FeatureSection";
import HeroSection from "@/components/Hero/HeroSection";
import MetricsSection from "@/components/Metrics/MetricsSection";
import OrganiserSection from "@/components/Organiser/OrganiserSection";
import PricingSection from "@/components/Pricing/PricingSection";
import ReviewSection from "@/components/Review/ReviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <MetricsSection />
      <PricingSection />
      <AppSection />
      <ReviewSection />
      <OrganiserSection />
      <FaqSection />
    </>
  );
}

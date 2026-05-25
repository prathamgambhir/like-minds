import HeroPage from "@/components/landing/hero";
import StatsSection from "@/components/landing/stats";
import FeaturesSection from "@/components/landing/features";
import HowItWorksSection from "@/components/landing/how-it-works";
import WorkflowStepsSection from "@/components/landing/workflow-steps";
import TestimonialsSection from "@/components/landing/testimonials";
import PricingSection from "@/components/landing/pricing";
import FAQsSection from "@/components/landing/faqs";
import CTASection from "@/components/landing/cta";
import FooterSection from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="w-full flex-1 flex flex-col">
      <HeroPage />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WorkflowStepsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQsSection />
      <CTASection />
    </main>
  );
}

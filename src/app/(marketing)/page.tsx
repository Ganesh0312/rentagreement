import { CTASection, Features, Hero, HowItWorksStrip, StatsStrip } from "@/components/marketing/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Features />
      <HowItWorksStrip />
      <CTASection />
    </>
  );
}

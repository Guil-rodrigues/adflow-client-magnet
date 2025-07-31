import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import IdealForSection from "@/components/IdealForSection";
import SocialProofSection from "@/components/SocialProofSection";
import AboutSection from "@/components/AboutSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <IdealForSection />
      <SocialProofSection />
      <AboutSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;

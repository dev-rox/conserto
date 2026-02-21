import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AudienceSection from "@/components/AudienceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <AudienceSection />
      <HowItWorksSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;

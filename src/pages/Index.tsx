import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ValuePillars from "@/components/ValuePillars";
import PortfolioHighlights from "@/components/PortfolioHighlights";
import ServicesPreview from "@/components/ServicesPreview";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechStack from "@/components/TechStack";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValuePillars />
        <PortfolioHighlights />
        <ServicesPreview />
        <ProcessSection />
        <TestimonialsSection />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

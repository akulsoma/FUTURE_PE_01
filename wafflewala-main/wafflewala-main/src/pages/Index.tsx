import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import WhyUs from "@/components/WhyUs";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="scroll-smooth">
    <Navbar />
    <Hero />
    <IntroSection />
    <WhyUs />
    <MenuSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

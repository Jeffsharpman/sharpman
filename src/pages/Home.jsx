import Nav from "../components/UI/Nav";
import TerminalFooter from "../components/sharpman/TerminalFooter";
import HeroSection from "../components/sharpman/HeroSection";
import MarqueeSection from "../components/sharpman/MarqueeSection";
import AboutSection from "../components/sharpman/AboutSection";
import ServicesSection from "../components/sharpman/ServiceSection";
import ProjectsSection from "../components/sharpman/ProjectSection";
import ContactSection from "../components/sharpman/ContactSection";
import StartProjectSection from "../components/sharpman/StartProjectSection";
import BeyondCodeSection from "../components/sharpman/BeyondCodeSection";
import WhatsAppFAB from "../components/UI/WhatsAppFAB";
import ScrollProgress from "../components/UI/ScrollProgress";
import CursorGlow from "../components/UI/CursorGlow";

const Home = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <ScrollProgress />
      <CursorGlow />
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <BeyondCodeSection />
        <ServicesSection />
        <ProjectsSection />
        <StartProjectSection />
        <ContactSection />
        <WhatsAppFAB />
      </main>
      <TerminalFooter />
    </div>
  );
};

export default Home;

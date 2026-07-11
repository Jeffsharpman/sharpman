import React from "react";
import Navbar from "../components/sharpman/Navbar";
import TerminalFooter from "../components/sharpman/TerminalFooter";
import HeroSection from "../components/sharpman/HeroSection";
import MarqueeSection from "../components/sharpman/MarqueeSection";
import AboutSection from "../components/sharpman/AboutSection";
import ServicesSection from "../components/sharpman/ServiceSection";
import ProjectsSection from "../components/sharpman/ProjectSection";
import ContactSection from "../components/sharpman/ContactSection";
import StartProjectSection from "../components/sharpman/StartProjectSection";
import BeyondCodeSection from "../components/sharpman/BeyondCodeSection";
import WhatsAppFab from "../components/sharpman/WhatsAppFab";

const Home = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <BeyondCodeSection />
        <ServicesSection />
        <ProjectsSection />
        <StartProjectSection />
        <ContactSection />
        <WhatsAppFab />
      </main>
      <TerminalFooter />
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "../layout/Navbar";
import TerminalFooter from "../layout/TerminalFooter";
import HeroSection from "../sharpman/HeroSection";
import MarqueeSection from "../sharpman/MarqueeSection";
import AboutSection from "../sharpman/AboutSection";
import ServicesSection from "../sharpman/ServiceSection";
import ProjectsSection from "../sharpman/ProjectSection";
import ContactSection from "../sharpman/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Navbar />
      {/* <ScrollProgress /> */}
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <TerminalFooter />
    </div>
  );
};

export default Home;

import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import MenuSection from "../components/menu";
import AboutSection from "../components/about-section";
import StatSection from "../components/stat-section";
import HeroSection from "../components/hero-section";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <StatSection />
     <MenuSection />
      <Footer />
    </div>
  );
}

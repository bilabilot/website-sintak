import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import MenuSection from "../components/menu";
import AboutSection from "../components/about-section";
import HeroSection from "../components/hero-section";
import StatSection from "../components/stat-section";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <AboutSection />
      <HeroSection />
      <StatSection />
      <MenuSection />
      <Footer />
    </div>
  );
}

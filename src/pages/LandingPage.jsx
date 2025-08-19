import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeacturesSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-6 ">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
      </div>
      <Footer />
    </>
  );
}

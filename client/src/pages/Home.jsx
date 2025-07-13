import React, { useState, useEffect } from "react";
import testimonials from "../constants/testimonials";
import TestimonialRotator from "../components/ui/TestimonialRotator"
import HeroSection from "../components/ui/HeroSection";
import GhostBackground from "../components/ui/GhostBackground"

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 py-12 overflow-hidden flex flex-col items-center justify-evenly">
      {/* 🔄 Background animation */}
      <GhostBackground />
      {/* Main Content */}
      <HeroSection />
      
      {/* Centered rotating testimonial */}
      <TestimonialRotator quote={testimonials[currentIndex]} />
    </section>
  );
};

export default Home;

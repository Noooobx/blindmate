import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import ghostAnimation from "../assets/Ghost.json";

const testimonials = [
  "“I felt seen without saying my name.”",
  "“It helped just to know I wasn't the only one.”",
  "“It’s weird how strangers can feel safer than friends sometimes.”",
  "“I came to read, but ended up writing. It felt... freeing.”",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen  bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 py-12 overflow-hidden flex flex-col items-center justify-evenly">
      {/* 🔄 Background animation */}
      <Player
        autoplay
        loop
        src={ghostAnimation}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 items-start gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left - Text */}
        <div className="text-center md:text-left w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4 leading-snug">
            Some thoughts are too heavy to carry alone.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            blindMate is a calm, anonymous space to open up, reflect, or simply
            read what others are going through. No pressure. No names. Just real
            people, being real — together.
          </p>
        </div>

        {/* Right - Buttons */}
        <div className="flex flex-col w-full max-w-sm mx-auto space-y-3">
          {[
            {
              to: "/confessions",
              label: "Read Confessions",
              variant: "primary",
            },
            { to: "/auth", label: "Get Started", variant: "outline" },
            { to: "/support", label: "Get Support", variant: "purple" },
            { to: "/write", label: "Share Your Story", variant: "muted" },
          ].map(({ to, label, variant }) => (
            <Link to={to} key={label} className="w-full">
              <button
                className={`w-full px-6 py-3 rounded-full text-sm sm:text-base transition shadow ${
                  variant === "primary"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : variant === "outline"
                    ? "bg-white border border-blue-600 text-blue-700 hover:bg-blue-50"
                    : variant === "purple"
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200"
                }`}
              >
                {label}
              </button>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Centered rotating testimonial */}
      <motion.p
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mt-16 text-center text-blue-700 text-lg sm:text-xl md:text-2xl italic font-light px-4 max-w-3xl mx-auto"
      >
        {testimonials[currentIndex]}
      </motion.p>
    </section>
  );
};

export default Home;

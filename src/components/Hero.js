import React from "react";

const Hero = () => (
  <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white min-h-screen flex items-center justify-center px-6">
    <div className="text-center max-w-2xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Crack Placements with Confidence
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Prepare for internships, placements, and aptitude tests with modern tools,
        curated courses, and real-world practice.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Start Preparing
        </button>
        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
          Explore Courses
        </button>
      </div>
    </div>
  </section>
);

export default Hero;

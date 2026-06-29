// src/components/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Software Engineer at Infosys",
    feedback:
      "CrackTheCampus helped me practice aptitude and coding challenges. I felt confident during my placement interviews!",
  },
  {
    name: "Rahul Mehta",
    role: "Data Analyst at Deloitte",
    feedback:
      "The mock tests and analytics gave me a clear picture of my strengths. Highly recommend this platform!",
  },
  {
    name: "Priya Nair",
    role: "Frontend Developer at Wipro",
    feedback:
      "The interview prep resources were spot on. I cracked my first job with ease.",
  },
];

const Testimonials = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
            <p className="text-gray-700 mb-4">"{t.feedback}"</p>
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

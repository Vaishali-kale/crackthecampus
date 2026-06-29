// src/components/Courses.jsx
import React from "react";

const courses = [
  {
    title: "Aptitude Mastery",
    desc: "Sharpen logical reasoning and quantitative skills with curated practice sets.",
  },
  {
    title: "Coding Interview Prep",
    desc: "Solve industry-level coding challenges and prepare for technical rounds.",
  },
  {
    title: "Mock Placement Series",
    desc: "Experience real exam simulations with timed practice tests.",
  },
  {
    title: "Soft Skills Training",
    desc: "Improve communication, teamwork, and interview confidence.",
  },
];

const Courses = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Courses & Test Series</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((c, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <p className="text-gray-600">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;


import React from "react";

const features = [
  { title: "Mock Tests", desc: "Practice with real exam simulations." },
  { title: "Interview Prep", desc: "Ace HR and technical interviews." },
  { title: "Analytics", desc: "Track progress with detailed insights." },
  { title: "Aptitude Training", desc: "Sharpen problem-solving skills." },
  { title: "Coding Challenges", desc: "Solve industry-level problems." },
  { title: "Placement Guidance", desc: "Get mentorship from experts." },
];

const Features = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;

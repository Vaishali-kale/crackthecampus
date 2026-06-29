
import React from "react";

const stats = [
  { number: "50,000+", label: "Students Prepared" },
  { number: "92%", label: "Placement Success Rate" },
  { number: "1M+", label: "Practice Questions Attempted" },
  { number: "500+", label: "Corporate Partners" },
];

const Statistics = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        CrackTheCampus Impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-4xl font-extrabold text-indigo-600 mb-2">
              {stat.number}
            </h3>
            <p className="text-gray-700 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Statistics;

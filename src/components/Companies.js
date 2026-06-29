
import React from "react";

const companies = [
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Infosys_logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Wipro_logo.svg" },
  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Accenture_logo.svg" },
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tata_Consultancy_Services_Logo.svg" },
  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Capgemini_logo.svg" },
];

const Companies = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {companies.map((c, i) => (
          <div key={i} className="flex justify-center">
            <img
              src={c.logo}
              alt={c.name}
              className="h-12 grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Companies;

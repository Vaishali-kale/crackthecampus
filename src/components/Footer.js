// src/components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="bg-indigo-600 text-white py-12">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Navigation */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
        <ul className="space-y-2">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#courses" className="hover:underline">Courses</a></li>
          <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
          <li><a href="#companies" className="hover:underline">Companies</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <p>Email: support@crackthecampus.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">LinkedIn</a>
        </div>
      </div>
    </div>

    <div className="text-center mt-8 text-sm text-gray-200">
      © {new Date().getFullYear()} CrackTheCampus. All rights reserved.
    </div>
  </footer>
);

export default Footer;

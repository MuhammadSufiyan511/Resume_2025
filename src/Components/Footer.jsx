// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="py-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} Muhammad Sufiyan. All rights reserved.
        </p>
        {/* Optional: social icons */}
        <div className="mt-3 flex justify-center space-x-4">
          {/* Example: */}
          <a href="https://linkedin.com/in/..."><FaLinkedin className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition" size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

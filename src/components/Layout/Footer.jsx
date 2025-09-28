import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-white text-center p-4 shadow-md text-gray-700 border-t border-[#FFC300]/20"
      role="contentinfo"
      aria-label="Site footer"
    >
      <p>
        &copy; {new Date().getFullYear()} Assessment Master. Built for University IT Students.
      </p>
      <div className="mt-2 text-sm">
        <a
          href="mailto:support@assessmentmaster.com"
          className="text-[#4169E1] hover:text-[#3498DB] transition-colors"
          aria-label="Contact support"
        >
          Contact
        </a>
        {' | '}
        <a
          href="/about"
          className="text-[#4169E1] hover:text-[#3498DB] transition-colors"
          aria-label="About Assessment Master"
        >
          About
        </a>
      </div>
    </footer>
  );
};

export default Footer;
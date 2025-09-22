import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-center p-4 shadow-md text-gray-700">
      &copy; {new Date().getFullYear()} Assessment Master. Built for University IT Students.
    </footer>
  );
};

export default Footer;
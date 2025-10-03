import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = ({ sidebarState }) => {
  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-[#3498DB]/20 px-6 py-4 flex items-center justify-center text-sm text-gray-600 transition-all duration-200 z-30 ${
        sidebarState.collapsed ? "md:ml-20" : "md:ml-64"
      }`}
      role="contentinfo"
      aria-label="Site footer"
    >
      <AiOutlineCopyright className="w-4 h-4 mr-2 text-gray-500" />
      <img
        src="/logo.png"
        alt="The Brighter Side logo"
        className="w-6 h-6 mx-2 rounded"
      />

      {/* Link to Home (root path) */}
      <Link
        to="/"
        className="font-medium text-[#4169E1] hover:text-[#E67E22] transition-colors duration-200"
      >
        The Brighter Side of Life
      </Link>

      <span className="ml-2 text-gray-600">· All rights reserved</span>
    </footer>
  );
};

export default Footer;

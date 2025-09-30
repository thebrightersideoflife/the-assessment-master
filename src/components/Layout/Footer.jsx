import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = ({ sidebarState }) => {
  return (
    <footer
      className={`bg-white border-t border-[#3498DB]/20 px-6 py-4 flex items-center justify-center text-sm text-gray-600 transition-all duration-200 ${
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
      <span className="font-medium text-[#4169E1]">
        The Brighter Side of Life
      </span>
      <span className="ml-2 text-gray-600">· All rights reserved</span>
    </footer>
  );
};

export default Footer;

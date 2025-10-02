import React from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSetting,
} from "react-icons/ai";

const Header = ({ sidebarState, setSidebarState, onSettingsClick }) => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        {/* Company Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-12 w-auto"
          />
          <span className="ml-2 text-gray-800 font-bold text-base">
            The Brighter Side of Life
          </span>
        </div>

        {/* Project Name & Slogan - Center */}
        <div className="flex items-center space-x-4 flex-1 justify-center">
          <div className="h-10 w-10 bg-gradient-to-br from-[#FFC300] to-[#E67E22] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg drop-shadow-sm">
              AM
            </span>
          </div>
          <div className="text-left">
            <h1 className="text-lg font-semibold text-[#4169E1]">
              Assessment Master
            </h1>
            <p className="text-sm text-[#28B463] font-medium">
              Learn | Practice | Excel
            </p>
          </div>
        </div>

        {/* Settings & Mobile Menu - Right */}
        <div className="flex items-center space-x-4">
          {/* Desktop Settings Button */}
          <button
            onClick={onSettingsClick}
            className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#3498DB]/10 to-[#4169E1]/10 hover:from-[#3498DB]/20 hover:to-[#4169E1]/20 rounded-lg transition-all border border-[#3498DB]/20"
            title="Gamification Settings"
          >
            <AiOutlineSetting className="w-5 h-5 text-[#4169E1]" />
            <span className="text-sm text-[#4169E1] font-medium">
              Settings
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() =>
              setSidebarState((prev) => ({ ...prev, open: !prev.open }))
            }
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={sidebarState.open ? "Close menu" : "Open menu"}
          >
            {sidebarState.open ? (
              <AiOutlineClose className="w-6 h-6 text-gray-600" />
            ) : (
              <AiOutlineMenu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

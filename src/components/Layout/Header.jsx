import React from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';

const Header = ({ sidebarState, setSidebarState }) => {
  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Company Logo */}
        <div className="flex items-center">
          <img 
            src="logo.png" 
            alt="Company Logo" 
            className="h-12 w-auto"
          />
        </div>
        
        {/* Project Name & Slogan - Center */}
        <div className="flex items-center space-x-4 flex-1 justify-center">
          <div className="h-10 w-10 bg-gradient-to-br from-[#FFC300] to-[#E67E22] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg drop-shadow-sm">AM</span>
          </div>
          <div className="text-left">
            <h1 className="text-lg font-semibold text-[#4169E1]">Assessment Master</h1>
            <p className="text-sm text-[#28B463] font-medium">Learn | Practice | Excel</p>
          </div>
        </div>
        
        {/* Profile Section - Right */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#3498DB] to-[#4169E1] rounded-full flex items-center justify-center">
              <AiOutlineUser className="text-white w-4 h-4" />
            </div>
            <span className="text-sm text-gray-700">Student</span>
          </div>
          
          <button
            onClick={() => setSidebarState(prev => ({ ...prev, open: !prev.open }))}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
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
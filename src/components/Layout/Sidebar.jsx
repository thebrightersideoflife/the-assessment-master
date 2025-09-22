import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AiOutlineHome, 
  AiOutlineFileText, 
  AiOutlineBook, 
  AiOutlineDashboard, 
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold
} from 'react-icons/ai';

const Sidebar = ({ sidebarState, setSidebarState }) => {
  const location = useLocation();
  
  const navigationItems = [
    { name: "Home", path: "/", icon: AiOutlineHome },
    { name: "Quiz", path: "/quiz", icon: AiOutlineFileText },
    { name: "Topics", path: "/topics", icon: AiOutlineBook },
    { name: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard },
    { name: "Profile", path: "/profile", icon: AiOutlineUser },
  ];

  return (
    <aside
      className={`bg-white shadow-lg transition-all duration-200 fixed h-full z-20 ${
        sidebarState.open ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 ${sidebarState.collapsed ? "w-20" : "w-64"}`}
    >
      <div className="p-4 border-b border-[#3498DB]/20 flex items-center justify-between">
        {!sidebarState.collapsed && (
          <h2 className="text-lg font-semibold text-[#4169E1]">Navigation</h2>
        )}
        <button
          onClick={() => setSidebarState(prev => ({ ...prev, collapsed: !prev.collapsed }))}
          className="p-2 hover:bg-[#FFC300]/10 rounded-lg transition-colors"
        >
          {sidebarState.collapsed ? 
            <AiOutlineMenuUnfold className="w-5 h-5 text-[#4169E1]" /> : 
            <AiOutlineMenuFold className="w-5 h-5 text-[#4169E1]" />
          }
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-2">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarState(prev => ({ ...prev, open: false }))}
              className={`w-full flex items-center p-3 rounded-lg mb-1 transition-colors ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-[#FFC300]/20 to-[#E67E22]/20 text-[#4169E1] border-l-4 border-[#FFC300]"
                  : "text-gray-600 hover:bg-[#3498DB]/10 hover:text-[#4169E1]"
              }`}
            >
              <IconComponent className="w-5 h-5 mr-3 flex-shrink-0" />
              {!sidebarState.collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-[#3498DB]/20">
        <button 
          onClick={() => setSidebarState(prev => ({ ...prev, collapsed: !prev.collapsed }))}
          className="w-full flex items-center p-3 rounded-lg text-gray-600 hover:bg-[#28B463]/10 hover:text-[#28B463] transition-colors"
        >
          <AiOutlineSetting className="w-5 h-5 mr-3 flex-shrink-0" />
          {!sidebarState.collapsed && <span>Settings</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
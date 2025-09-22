import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  FiHome, 
  FiBookOpen, 
  FiAward, 
  FiBarChart3, 
  FiUser,
  FiRefreshCw,
  FiSettings
} from 'react-icons/fi';

const Sidebar = ({ sidebarState, setSidebarState, onResetQuiz }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { id: "", name: "Home", icon: <FiHome />, path: "/" },
    { id: "quiz", name: "Take Quiz", icon: <FiBookOpen />, path: "/quiz" },
    { id: "topics", name: "Topics", icon: <FiAward />, path: "/topics" },
    { id: "dashboard", name: "Dashboard", icon: <FiBarChart3 />, path: "/dashboard" },
    { id: "profile", name: "Profile", icon: <FiUser />, path: "/profile" },
  ];

  return (
    <aside
      className={`bg-white shadow-lg transition-all duration-200 fixed h-full z-20 ${
        sidebarState.open ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 ${sidebarState.collapsed ? "w-20" : "w-64"}`}
    >
      <div className="p-4 border-b flex items-center justify-between">
        {!sidebarState.collapsed && (
          <h2 className="text-lg font-semibold text-gray-800">Navigation</h2>
        )}
      </div>
      
      <nav className="flex-1 overflow-y-auto p-2">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              navigate(item.path);
              setSidebarState((prev) => ({ ...prev, open: false }));
            }}
            className={`w-full flex items-center p-3 rounded-lg mb-1 transition-colors ${
              location.pathname === item.path
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {!sidebarState.collapsed && <span>{item.name}</span>}
          </button>
        ))}
        
        <button
          onClick={onResetQuiz}
          className={`md:hidden w-full flex items-center p-3 rounded-lg mb-1 text-gray-600 hover:bg-gray-100 transition-colors ${
            !sidebarState.collapsed ? "" : "justify-center"
          }`}
        >
          <span className="mr-3"><FiRefreshCw /></span>
          {!sidebarState.collapsed && <span>Reset Quiz</span>}
        </button>
      </nav>

      <div className="p-4 border-t">
        <button className="w-full flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
          <FiSettings className="mr-3" />
          {!sidebarState.collapsed && <span>Settings</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
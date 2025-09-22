import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { resetQuiz } = useStore();

  // Load sidebar state from localStorage
  useEffect(() => {
    const collapsed = localStorage.getItem("sidebarCollapsed") === "true";
    setSidebarCollapsed(collapsed);
  }, []);

  // Save sidebar state to localStorage
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", sidebarCollapsed.toString());
  }, [sidebarCollapsed]);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Quiz", path: "/quiz" },
    { name: "Topics", path: "/topics" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
  ];

  const handleResetQuiz = () => {
    resetQuiz();
    navigate('/quiz');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="flex items-center justify-between">
          {/* Company Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Company Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Project Name & Slogan - Center */}
          <div className="flex items-center space-x-4 flex-1 justify-center">
            <div className="h-10 w-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AM</span>
            </div>
            <div className="text-center">
              <h1 className="text-lg font-semibold text-indigo-600">Assessment Master</h1>
              <p className="text-sm text-gray-600">Learn | Practice | Excel</p>
            </div>
          </div>
          
          {/* Profile Section - Right */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm">👤</span>
              </div>
              <span className="text-sm text-gray-700">Student</span>
            </div>
            
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {sidebarOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar and Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`bg-white shadow-lg transition-all duration-200 fixed h-full z-20 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 ${sidebarCollapsed ? "w-20" : "w-64"}`}
        >
          <div className="p-4 border-b flex items-center justify-between">
            {!sidebarCollapsed && (
              <h2 className="text-lg font-semibold text-gray-800">Navigation</h2>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {sidebarCollapsed ? "☰" : "✕"}
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`w-full flex items-center p-3 rounded-lg mb-1 transition-colors ${
                  location.pathname === item.path
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {!sidebarCollapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 p-6 overflow-auto transition-all duration-200 ${
            sidebarCollapsed ? "md:ml-20" : "md:ml-64"
          }`}
        >
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white text-center p-4 shadow-md text-gray-700">
        &copy; {new Date().getFullYear()} Assessment Master. Built for University IT Students.
      </footer>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useStore from "../../store/useStore";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import GamificationSettings from "../Quiz/GamificationSettings";

const Layout = ({ children }) => {
  const [sidebarState, setSidebarState] = useState({
    open: false,
    collapsed: false,
  });
  const [showGamificationSettings, setShowGamificationSettings] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { resetQuiz } = useStore();

  // Load sidebar state from localStorage
  useEffect(() => {
    const collapsed = localStorage.getItem("sidebarCollapsed") === "true";
    setSidebarState((prev) => ({ ...prev, collapsed }));
  }, []);

  // Save sidebar state to localStorage
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", sidebarState.collapsed.toString());
  }, [sidebarState.collapsed]);

  const handleResetQuiz = () => {
    resetQuiz();
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header (stays at top) */}
      <Header
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
        onSettingsClick={() => setShowGamificationSettings(true)}
      />

      {/* Content + Sidebar (takes remaining space) */}
      <div className="flex flex-1">
        <Sidebar
          sidebarState={sidebarState}
          setSidebarState={setSidebarState}
          onSettingsClick={() => setShowGamificationSettings(true)}
        />

        {/* Main Content scrolls if needed */}
        <main
          className={`flex-1 p-6 pb-20 transition-all duration-200 overflow-y-auto ${
            sidebarState.collapsed ? "md:ml-20" : "md:ml-64"
          }`}
        >
          {children}
        </main>
      </div>

      {/* Footer (always visible at bottom) */}
      <Footer sidebarState={sidebarState} />

      {/* Gamification Settings Modal */}
      <GamificationSettings
        isOpen={showGamificationSettings}
        onClose={() => setShowGamificationSettings(false)}
      />

      {/* Mobile Overlay */}
      {sidebarState.open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() =>
            setSidebarState((prev) => ({ ...prev, open: false }))
          }
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Layout;

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
  const [showJumpButton, setShowJumpButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { resetQuiz } = useStore();

  // Load sidebar collapsed state
  useEffect(() => {
    const collapsed = localStorage.getItem("sidebarCollapsed") === "true";
    setSidebarState((prev) => ({ ...prev, collapsed }));
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", sidebarState.collapsed.toString());
  }, [sidebarState.collapsed]);

  // Show the jump button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setShowJumpButton(y > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJumpToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleResetQuiz = () => {
    resetQuiz();
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
        onSettingsClick={() => setShowGamificationSettings(true)}
      />
      <div className="flex flex-1">
        <Sidebar
          sidebarState={sidebarState}
          setSidebarState={setSidebarState}
          onSettingsClick={() => setShowGamificationSettings(true)}
        />
        <main
          className={`flex-1 p-6 pb-20 transition-all duration-200 overflow-y-auto ${
            sidebarState.collapsed ? "md:ml-20" : "md:ml-64"
          }`}
        >
          {children}
        </main>
      </div>
      <Footer sidebarState={sidebarState} />
      <GamificationSettings
        isOpen={showGamificationSettings}
        onClose={() => setShowGamificationSettings(false)}
      />
      {/* Mobile overlay */}
      {sidebarState.open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() =>
            setSidebarState((prev) => ({ ...prev, open: false }))
          }
          aria-hidden="true"
        />
      )}
      {/* 🧭 Elegant Minimal Jump to Bottom Button */}
      {showJumpButton && (
        <button
          onClick={handleJumpToBottom}
          className="
            fixed bottom-6 right-6 z-50 print:hidden
            flex items-center justify-center
            w-12 h-12 rounded-full
            bg-gradient-to-br from-[#FFC300]/70 to-[#E67E22]/70 hover:from-gray-300 hover:to-gray-500
            ring-1 ring-white/20 hover:ring-white/40
            text-2xl
            transition-all duration-300 ease-out
            hover:scale-105
          "
          aria-label='Jump to bottom'
        >
          <span style={{ color: 'white', textShadow: '0 0 2px white' }}>🠟</span>
        </button>
      )}
    </div>
  );
};

export default Layout;
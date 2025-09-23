import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import GamificationSettings from '../UI/GamificationSettings';

const Layout = ({ children }) => {
  const [sidebarState, setSidebarState] = useState({
    open: false,
    collapsed: false
  });
  const [showGamificationSettings, setShowGamificationSettings] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { resetQuiz } = useStore();

  // Load sidebar state from localStorage
  useEffect(() => {
    const collapsed = localStorage.getItem("sidebarCollapsed") === "true";
    setSidebarState(prev => ({ ...prev, collapsed }));
  }, []);

  // Save sidebar state to localStorage
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", sidebarState.collapsed.toString());
  }, [sidebarState.collapsed]);

  const handleResetQuiz = () => {
    resetQuiz();
    navigate('/quiz');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header 
        sidebarState={sidebarState} 
        setSidebarState={setSidebarState} 
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          sidebarState={sidebarState}
          setSidebarState={setSidebarState}
          onSettingsClick={() => setShowGamificationSettings(true)}
        />
        
        <main
          className={`flex-1 p-6 overflow-auto transition-all duration-200 ${
            sidebarState.collapsed ? "md:ml-20" : "md:ml-64"
          }`}
        >
          {children}
        </main>
      </div>
      
      <Footer />
      
      {/* Gamification Settings Modal */}
      <GamificationSettings 
        isOpen={showGamificationSettings}
        onClose={() => setShowGamificationSettings(false)}
      />
      
      {/* Mobile Overlay */}
      {sidebarState.open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarState(prev => ({ ...prev, open: false }))}
        />
      )}
    </div>
  );
};

export default Layout;
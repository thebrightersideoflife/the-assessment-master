import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  AiOutlineHome, 
  AiOutlineFileText, 
  AiOutlineBook, 
  AiOutlineDashboard, 
  AiOutlineSetting,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineRight
} from 'react-icons/ai';
import { modules } from '../../data/modules';

// Reusable Collapsible wrapper with improved accessibility
const Collapsible = ({ isOpen, children, id }) => (
  <div
    id={id}
    className={`
      overflow-hidden transition-all duration-300 ease-in-out
      ${isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
    `}
    role="region"
    aria-hidden={!isOpen}
  >
    {children}
  </div>
);

const Sidebar = ({ sidebarState, setSidebarState }) => {
  const location = useLocation();
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isQuizzesOpen, setIsQuizzesOpen] = useState(false);
  const [isModuleQuizzesOpen, setIsModuleQuizzesOpen] = useState(false);

  // Enhanced mobile close handler
  const handleMobileClose = () => {
    if (window.innerWidth < 768) { // Only close on mobile
      setSidebarState(prev => ({ ...prev, open: false }));
    }
  };

  return (
    <aside
      className={`bg-white shadow-lg transition-all duration-200 fixed h-full z-20 ${
        sidebarState.open ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 ${sidebarState.collapsed ? "w-20" : "w-64"}`}
      aria-label="Main navigation"
    >
      {/* Header */}
      <div className="p-4 border-b border-[#3498DB]/20 flex items-center justify-between">
        {!sidebarState.collapsed && (
          <h2 className="text-lg font-semibold text-[#4169E1]">MathMaster</h2>
        )}
        <button
          onClick={() => setSidebarState(prev => ({ ...prev, collapsed: !prev.collapsed }))}
          className="p-2 hover:bg-[#FFC300]/10 rounded-lg transition-colors"
          aria-label={sidebarState.collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {sidebarState.collapsed ? 
            <AiOutlineMenuUnfold className="w-5 h-5 text-[#4169E1]" /> : 
            <AiOutlineMenuFold className="w-5 h-5 text-[#4169E1]" />
          }
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2" role="navigation">
        {/* Home */}
        <NavLink
          to="/"
          onClick={handleMobileClose}
          className={({ isActive }) => 
            `w-full flex items-center p-3 rounded-lg mb-1 transition-colors ${
              isActive
                ? "bg-gradient-to-r from-[#FFC300]/20 to-[#E67E22]/20 text-[#E67E22] border-l-4 border-[#FFC300]"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-600"
            }`}
          aria-current={isActive => isActive ? "page" : undefined}
        >
          <AiOutlineHome className="w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
          {!sidebarState.collapsed && <span>Home</span>}
        </NavLink>

        {/* Modules */}
        <div>
          <button
            onClick={() => setIsModulesOpen(!isModulesOpen)}
            className={`w-full flex items-center p-3 rounded-lg mb-1 transition-colors ${
              location.pathname.includes('/modules')
                ? "bg-gradient-to-r from-[#FFC300]/20 to-[#E67E22]/20 text-[#E67E22] border-l-4 border-[#FFC300]"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-600"
            }`}
            aria-expanded={isModulesOpen}
            aria-controls="modules-submenu"
          >
            <AiOutlineBook className="w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
            {!sidebarState.collapsed && (
              <>
                <span>Modules</span>
                <AiOutlineRight
                  className={`w-5 h-5 ml-auto flex-shrink-0 transform transition-transform duration-200 ${
                    isModulesOpen ? "rotate-90" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </>
            )}
          </button>
          {!sidebarState.collapsed && (
            <Collapsible isOpen={isModulesOpen} id="modules-submenu">
              <div className="pl-6 space-y-2 mt-2">
                {modules.map((module) => (
                  <NavLink
                    key={module.id}
                    to={`/modules/${module.id}`}
                    onClick={handleMobileClose}
                    className={({ isActive }) => 
                      `block py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors ${
                        isActive ? "bg-gray-100 text-gray-600 font-medium" : ""
                      }`}
                    aria-current={isActive => isActive ? "page" : undefined}
                  >
                    {module.id}
                  </NavLink>
                ))}
              </div>
            </Collapsible>
          )}
        </div>

        {/* Quizzes */}
        <div>
          <button
            onClick={() => setIsQuizzesOpen(!isQuizzesOpen)}
            className={`w-full flex items-center p-3 rounded-lg mb-1 transition-colors ${
              location.pathname.includes('/quizzes')
                ? "bg-gradient-to-r from-[#FFC300]/20 to-[#E67E22]/20 text-[#E67E22] border-l-4 border-[#FFC300]"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-600"
            }`}
            aria-expanded={isQuizzesOpen}
            aria-controls="quizzes-submenu"
          >
            <AiOutlineFileText className="w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
            {!sidebarState.collapsed && (
              <>
                <span>Quizzes</span>
                <AiOutlineRight
                  className={`w-5 h-5 ml-auto flex-shrink-0 transform transition-transform duration-200 ${
                    isQuizzesOpen ? "rotate-90" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </>
            )}
          </button>
          {!sidebarState.collapsed && (
            <Collapsible isOpen={isQuizzesOpen} id="quizzes-submenu">
              <div className="pl-6 space-y-2 mt-2">
                {/* Module Quizzes */}
                <button
                  onClick={() => setIsModuleQuizzesOpen(!isModuleQuizzesOpen)}
                  className={`w-full flex items-center py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors ${
                    location.pathname.includes('/quizzes/module')
                      ? "bg-gray-100 text-gray-600 font-medium"
                      : ""
                  }`}
                  aria-expanded={isModuleQuizzesOpen}
                  aria-controls="module-quizzes-submenu"
                >
                  <span>Module</span>
                  <AiOutlineRight
                    className={`w-5 h-5 ml-auto flex-shrink-0 transform transition-transform duration-200 ${
                      isModuleQuizzesOpen ? "rotate-90" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <Collapsible isOpen={isModuleQuizzesOpen} id="module-quizzes-submenu">
                  <div className="pl-6 space-y-2">
                    {modules.map((module) => (
                      <NavLink
                        key={module.id}
                        to={`/quizzes/module/${module.id}`}
                        onClick={handleMobileClose}
                        className={({ isActive }) => 
                          `block py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors ${
                            isActive ? "bg-gray-100 text-gray-600 font-medium" : ""
                          }`}
                        aria-current={isActive => isActive ? "page" : undefined}
                      >
                        {module.id}
                      </NavLink>
                    ))}
                  </div>
                </Collapsible>
                {/* Exam */}
                <NavLink
                  to="/quizzes/exam"
                  onClick={handleMobileClose}
                  className={({ isActive }) => 
                    `block py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors ${
                      isActive ? "bg-gray-100 text-gray-600 font-medium" : ""
                    }`}
                  aria-current={isActive => isActive ? "page" : undefined}
                >
                  Exam
                </NavLink>
              </div>
            </Collapsible>
          )}
        </div>

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          onClick={handleMobileClose}
          className={({ isActive }) => 
            `w-full flex items-center p-3 rounded-lg mb-1 transition-colors ${
              isActive
                ? "bg-gradient-to-r from-[#FFC300]/20 to-[#E67E22]/20 text-[#E67E22] border-l-4 border-[#FFC300]"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-600"
            }`}
          aria-current={isActive => isActive ? "page" : undefined}
        >
          <AiOutlineDashboard className="w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
          {!sidebarState.collapsed && <span>Dashboard</span>}
        </NavLink>
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-[#3498DB]/20">
        <button 
          onClick={() => setSidebarState(prev => ({ ...prev, collapsed: !prev.collapsed }))}
          className="w-full flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          aria-label="Toggle settings menu"
        >
          <AiOutlineSetting className="w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
          {!sidebarState.collapsed && <span>Settings</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
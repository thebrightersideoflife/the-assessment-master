import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineBook,
  AiOutlineDashboard,
  AiOutlineSetting,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineRight,
} from "react-icons/ai";
import { modules } from "../../data/modules";
import useStore from "../../store/useStore";

const Collapsible = ({ isOpen, children, id }) => (
  <div
    id={id}
    className={`overflow-hidden transition-all duration-300 ease-in-out ${
      isOpen
        ? "max-h-screen opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-2"
    }`}
    role="region"
    aria-hidden={!isOpen}
  >
    {children}
  </div>
);

const getModuleDisplayName = (module) => {
  switch (module.name) {
    case "Calculus":
      return "ITMTA";
    case "Linear Algebra":
      return "ITMTB";
    default:
      return module.name;
  }
};

const Sidebar = ({ sidebarState, setSidebarState, onSettingsClick }) => {
  const location = useLocation();
  const { isModuleVisible } = useStore();
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isQuizzesOpen, setIsQuizzesOpen] = useState(false);
  const [openModules, setOpenModules] = useState({});
  const [openQuizModules, setOpenQuizModules] = useState({});

  const handleMobileClose = () => {
    if (window.innerWidth < 768) {
      setSidebarState((prev) => ({ ...prev, open: false }));
    }
  };

  const handleSettingsClick = () => {
    onSettingsClick();
    handleMobileClose();
  };

  const handleKeyDown = (e, toggle) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  const toggleModule = (moduleId, section) => {
    if (section === "modules") {
      setOpenModules((prev) => ({
        ...prev,
        [moduleId]: !prev[moduleId],
      }));
    } else if (section === "quizzes") {
      setOpenQuizModules((prev) => ({
        ...prev,
        [moduleId]: !prev[moduleId],
      }));
    }
  };

  return (
    <aside
      className={`bg-white shadow-lg transition-all duration-200 fixed z-30 md:z-10 ${
        sidebarState.open ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 ${
        sidebarState.collapsed ? "w-20" : "w-64"
      } flex flex-col h-full`}
      aria-label="Main navigation"
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b border-[#3498DB]/20 flex items-center justify-between">
        {!sidebarState.collapsed && (
          <h2 className="text-lg font-semibold text-[#4169E1]">
            Navigation
          </h2>
        )}
        <button
          onClick={() =>
            setSidebarState((prev) => ({
              ...prev,
              collapsed: !prev.collapsed,
            }))
          }
          className="p-2 hover:bg-[#FFC300]/10 rounded-lg transition-colors hidden md:block"
          aria-label={sidebarState.collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {sidebarState.collapsed ? (
            <AiOutlineMenuUnfold className="w-5 h-5 text-[#4169E1]" />
          ) : (
            <AiOutlineMenuFold className="w-5 h-5 text-[#4169E1]" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
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
            }`
          }
          aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          title={sidebarState.collapsed ? "Home" : ""}
        >
          <AiOutlineHome className="w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
          {!sidebarState.collapsed && <span>Home</span>}
        </NavLink>

        {/* Modules */}
        <div>
          <button
            role="button"
            onClick={() => setIsModulesOpen(!isModulesOpen)}
            onKeyDown={(e) =>
              handleKeyDown(e, () => setIsModulesOpen(!isModulesOpen))
            }
            className={`w-full flex items-center p-3 rounded-lg mb-1 transition-colors ${
              location.pathname.includes("/modules")
                ? "bg-gradient-to-r from-[#FFC300]/20 to-[#E67E22]/20 text-[#E67E22] border-l-4 border-[#FFC300]"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-600"
            }`}
            aria-expanded={isModulesOpen}
            aria-controls="modules-submenu"
            title={sidebarState.collapsed ? "Modules" : ""}
          >
            <AiOutlineBook className="w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
            {!sidebarState.collapsed && (
              <>
                <span>Modules</span>
                <AiOutlineRight
                  className={`w-5 h-5 ml-auto transform transition-transform duration-200 ${
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
                {modules
                  .filter((mod) => isModuleVisible(mod.id))
                  .map((module) => (
                    <div key={module.id}>
                      <button
                        role="button"
                        onClick={() => toggleModule(module.id, "modules")}
                        onKeyDown={(e) =>
                          handleKeyDown(e, () => toggleModule(module.id, "modules"))
                        }
                        className={`w-full flex items-center py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors ${
                          location.pathname.includes(`/modules/${module.id}`)
                            ? "bg-gray-100 text-gray-600 font-medium"
                            : ""
                        }`}
                        aria-expanded={openModules[module.id] || false}
                        aria-controls={`module-${module.id}-submenu`}
                      >
                        <span>{getModuleDisplayName(module)}</span>
                        <AiOutlineRight
                          className={`w-4 h-4 ml-auto transform transition-transform duration-200 ${
                            openModules[module.id] ? "rotate-90" : "rotate-0"
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <Collapsible
                        isOpen={openModules[module.id]}
                        id={`module-${module.id}-submenu`}
                      >
                        <div className="pl-4 space-y-1 mt-1">
                          {module.weeks.map((week) => (
                            <NavLink
                              key={week.id}
                              to={`/modules/${module.id}/${week.id}`}
                              onClick={handleMobileClose}
                              className={({ isActive }) =>
                                `block py-1 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors ${
                                  isActive ? "bg-gray-100 text-gray-600 font-medium" : ""
                                }`
                              }
                              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                            >
                              {week.name}
                            </NavLink>
                          ))}
                            {module.exams?.map((exam) => (
                              <NavLink
                                key={exam.id}
                                to={`/exam/${exam.id}`} // Changed from /quizzes/module/:moduleId/:examId
                                onClick={handleMobileClose}
                                className={({ isActive }) =>
                                  `block py-1 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors ${
                                    isActive ? "bg-gray-100 text-gray-600 font-medium" : ""
                                  }`
                                }
                                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                              >
                                {exam.name}
                              </NavLink>
                            ))}
                        </div>
                      </Collapsible>
                    </div>
                  ))}
              </div>
            </Collapsible>
          )}
        </div>

        {/* Quizzes */}
        <div>
          <button
            role="button"
            onClick={() => setIsQuizzesOpen(!isQuizzesOpen)}
            onKeyDown={(e) =>
              handleKeyDown(e, () => setIsQuizzesOpen(!isQuizzesOpen))
            }
            className={`w-full flex items-center p-3 rounded-lg mb-1 transition-colors ${
              location.pathname.includes("/quizzes")
                ? "bg-gradient-to-r from-[#FFC300]/20 to-[#E67E22]/20 text-[#E67E22] border-l-4 border-[#FFC300]"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-600"
            }`}
            aria-expanded={isQuizzesOpen}
            aria-controls="quizzes-submenu"
            title={sidebarState.collapsed ? "Quizzes" : ""}
          >
            <AiOutlineFileText className="w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
            {!sidebarState.collapsed && (
              <>
                <span>Quizzes</span>
                <AiOutlineRight
                  className={`w-5 h-5 ml-auto transform transition-transform duration-200 ${
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
                {modules
                  .filter((mod) => isModuleVisible(mod.id))
                  .map((module) => (
                    <div key={module.id}>
                      <button
                        role="button"
                        onClick={() => toggleModule(module.id, "quizzes")}
                        onKeyDown={(e) =>
                          handleKeyDown(e, () => toggleModule(module.id, "quizzes"))
                        }
                        className={`w-full flex items-center py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors ${
                          location.pathname.includes(`/quizzes/module/${module.id}`)
                            ? "bg-gray-100 text-gray-600 font-medium"
                            : ""
                        }`}
                        aria-expanded={openQuizModules[module.id] || false}
                        aria-controls={`quiz-module-${module.id}-submenu`}
                      >
                        <span>{getModuleDisplayName(module)}</span>
                        <AiOutlineRight
                          className={`w-4 h-4 ml-auto transform transition-transform duration-200 ${
                            openQuizModules[module.id] ? "rotate-90" : "rotate-0"
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <Collapsible
                        isOpen={openQuizModules[module.id]}
                        id={`quiz-module-${module.id}-submenu`}
                      >
                        <div className="pl-4 space-y-1 mt-1">
                          {module.weeks.map((week) => (
                            <NavLink
                              key={week.id}
                              to={`/quizzes/module/${module.id}/${week.id}`}
                              onClick={handleMobileClose}
                              className={({ isActive }) =>
                                `block py-1 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors ${
                                  isActive ? "bg-gray-100 text-gray-600 font-medium" : ""
                                }`
                              }
                              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                            >
                              {week.name}
                            </NavLink>
                          ))}
                            {module.exams?.map((exam) => (
                              <NavLink
                                key={exam.id}
                                to={`/exam/${exam.id}`} // Changed from /quizzes/module/:moduleId/:examId
                                onClick={handleMobileClose}
                                className={({ isActive }) =>
                                  `block py-1 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors ${
                                    isActive ? "bg-gray-100 text-gray-600 font-medium" : ""
                                  }`
                                }
                                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                              >
                                {exam.name}
                              </NavLink>
                            ))}
                        </div>
                      </Collapsible>
                    </div>
                  ))}
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
            }`
          }
          aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          title={sidebarState.collapsed ? "Dashboard" : ""}
        >
          <AiOutlineDashboard className="w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
          {!sidebarState.collapsed && <span>Dashboard</span>}
        </NavLink>

        {/* Settings - Part of main navigation */}
        <button
          onClick={handleSettingsClick}
          className="w-full flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          aria-label="Open settings"
          title={sidebarState.collapsed ? "Settings" : ""}
        >
          <AiOutlineSetting className="w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
          {!sidebarState.collapsed && <span>Settings</span>}
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
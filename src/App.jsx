// src/App.jsx
import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { renderMath } from "./utils/mathRenderer";
import { injectAnimations } from "./utils/gamificationUtils";
import "./styles/tailwind.css";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import ScrollToTop from './components/UI/ScrollToTop';

// Lazy-loaded pages
const Home = React.lazy(() => import("./pages/Home"));
const Quiz = React.lazy(() => import("./pages/Quiz"));
const Topics = React.lazy(() => import("./pages/Topics"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Week = React.lazy(() => import("./pages/Week"));
const Modules = React.lazy(() => import("./pages/Modules"));
const FormulaSheetPage = React.lazy(() => import("./pages/FormulaSheetPage"));
const Admin = React.lazy(() => import("./pages/Admin"));
// ⬇️ The Exam page now internally uses ExamManagerCore
const Exam = React.lazy(() => import("./pages/Exam"));

const NotFound = () => (
  <div className="max-w-4xl mx-auto text-center p-6">
    <h2 className="text-3xl font-bold text-[#4169E1] mb-4">Page Not Found</h2>
    <p className="text-gray-600 mb-6">
      The page you're looking for doesn't exist.
    </p>
    <Link
      to="/"
      className="inline-block bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
      aria-label="Return to home"
    >
      Back to Home
    </Link>
  </div>
);

const Profile = () => (
  <div className="max-w-4xl mx-auto text-center p-6">
    <h2 className="text-3xl font-bold text-[#4169E1] mb-4">Profile</h2>
    <p className="text-gray-600">
      Profile feature coming soon! Track your progress on the Dashboard.
    </p>
  </div>
);

function App() {
  injectAnimations();

  useEffect(() => {
    renderMath();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* ========== HOME & NAVIGATION ========== */}
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />

            {/* ========== MODULE NAVIGATION ========== */}
            <Route path="/modules" element={<Modules />} />
            <Route path="/modules/:moduleId" element={<Modules />} />
            <Route path="/modules/:moduleId/:weekId" element={<Week />} />

            {/* ========== QUIZ ROUTES ========== */}
            <Route
              path="/quiz/:moduleId/:weekId/:quizIndex"
              element={<Quiz />}
            />

            {/* ========== EXAM ROUTE (uses ExamManagerCore internally) ========== */}
            <Route
              path="/exam/:examId"
              element={<Exam />}
            />

            {/* ========== LEGACY REDIRECTS ========== */}
            <Route
              path="/quizzes/module/:moduleId/:weekId"
              element={<Navigate to="/quiz/:moduleId/:weekId/0" replace />}
            />
            <Route
              path="/quizzes/exam/:examId"
              element={<Navigate to="/exam/:examId" replace />}
            />

            {/* ========== FORMULA SHEETS ========== */}
            <Route
              path="/formula-sheets/:moduleId"
              element={<FormulaSheetPage />}
            />

            {/* ========== 404 ========== */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;

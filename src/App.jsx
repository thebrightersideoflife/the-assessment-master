import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Topics from './pages/Topics';
import Dashboard from './pages/Dashboard';
import Week from './pages/Week';
import Modules from './pages/Modules';
import { injectAnimations } from './utils/gamificationUtils';
import './styles/tailwind.css';

const NotFound = () => (
  <div className="max-w-4xl mx-auto text-center p-6">
    <h2 className="text-3xl font-bold text-[#4169E1] mb-4">Page Not Found</h2>
    <p className="text-gray-600 mb-6">
      The page you’re looking for doesn’t exist.
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
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/modules/:moduleId" element={<Modules />} />
          <Route path="/modules/:moduleId/:weekId" element={<Week />} />
          <Route path="/quizzes/module/:moduleId/:weekId" element={<Quiz />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
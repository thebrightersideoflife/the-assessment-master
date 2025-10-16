// src/components/UI/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * 
 * Scrolls to top of page on route change
 * This fixes the issue where navigation causes the page to jump to bottom
 * 
 * Usage: Place in App.jsx inside <Router>
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' instead of 'smooth' for immediate effect
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Without this, React Router keeps the browser's scroll position when navigating
// between pages, so users can land mid-page on a route they just clicked into.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

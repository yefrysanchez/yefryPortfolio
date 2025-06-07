import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use Lenis for smooth scroll if available
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true }); // or smooth: false
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
// This component listens for route changes and scrolls to the top of the page.
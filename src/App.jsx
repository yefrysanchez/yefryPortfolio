import { useEffect } from "react";
import "./App.css";
import ContactPage from "./components/ContactPage";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import BlogContentPage from "./pages/BlogContentPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import ProjectContentPage from "./pages/ProjectContentPage";
import ProjectPage from "./pages/ProjectPage";
import Lenis from "lenis";

function App() {
  // https://blurr.framer.website/

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-shade3 min-h-screen font-inter">
      <Navbar />
      <AboutPage />
      <FooterSection />
    </div>
  );
}

export default App;

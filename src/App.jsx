// App.js
import { useEffect } from "react";
import "./App.css";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";
import Lenis from "lenis";
import AppRouter from "./router/AppRouter";
import Cursor from "./components/Cursor";
import CursorContextData from "./context/CursorContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    // Make lenis accessible globally (window or React Context are options)
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-shade3 font-inter cursor-none">
      <CursorContextData>
        <ScrollToTop />
        <Cursor />
        <Navbar />
        <AppRouter />
      </CursorContextData>
      <FooterSection />
    </div>
  );
}

export default App;

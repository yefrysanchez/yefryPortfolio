import { useEffect } from "react";
import "./App.css";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";
import Lenis from "lenis";
import AppRouter from "./router/AppRouter";
import ScrollRestoration from "./components/ScrollRestoration";
import Cursor from "./components/Cursor";
import CursorContextData from "./context/CursorContext";

function App() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-shade3 min-h-dvh lg:min-h-screen font-inter">
      <CursorContextData>
        <ScrollRestoration />
        <Cursor />
        <Navbar />
        <AppRouter />
      </CursorContextData>
      <FooterSection />
    </div>
  );
}

export default App;

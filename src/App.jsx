import "./App.css";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  // https://blurr.framer.website/

  return (
    <div className="bg-shade3 min-h-screen font-inter">
      <Navbar />
      <AboutPage />
      <FooterSection />
    </div>
  );
}

export default App;

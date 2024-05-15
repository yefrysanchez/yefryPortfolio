import "./App.css";
import ContactPage from "./components/ContactPage";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  // https://blurr.framer.website/

  return (
    <div className="bg-shade3 min-h-screen font-inter">
      <Navbar />
      <ProjectPage />
      <FooterSection />
    </div>
  );
}

export default App;

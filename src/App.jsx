import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  // https://blurr.framer.website/

  return (
    <div className="bg-shade3 min-h-screen px-4 font-inter ">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;

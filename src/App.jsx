import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CvSection from "./components/CvSection";

function App() {
  return (
    <>
      <div className="print-hide">
        <Navbar />
        <Hero />
      </div>

      <CvSection />
    </>
  );
}

export default App;
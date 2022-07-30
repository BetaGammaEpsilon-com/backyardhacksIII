// Import packages
import { Routes, Route } from "react-router-dom";

// Import pages
import HomePage from "./pages/HomePage";
import Checklist from "./pages/Checklist";

// Import components
import Navbar from "./components/Navbar";

// Import assets
import "./assets/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checklist" element={<Checklist />} />
      </Routes>
    </>
  );
}

export default App;

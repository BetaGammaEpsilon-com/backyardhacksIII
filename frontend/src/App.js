// Import packages
import { Routes, Route } from "react-router-dom";

// Import pages
import HomePage from "./pages/HomePage";
import Checklist from "./pages/Checklist";
import Login from "./pages/Login";

// Import components
import Navbar from "./components/Navbar";

// Import assets
import "./assets/reset.css";
import "./assets/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

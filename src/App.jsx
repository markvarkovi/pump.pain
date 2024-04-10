import Navbar from "../src/Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Rugrats from "./Components/Rugrats.jsx";
import Socials from "./Components/Socials.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex w-full h-screen flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ruglist" element={<Rugrats />} />
          <Route path="/social" element={<Socials />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

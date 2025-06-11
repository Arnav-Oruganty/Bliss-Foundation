import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Adopt from "./pages/Adopt";
import Donate from "./pages/Donate";
import HowAdoptionWorks from "./pages/HowAdoptionWorks";
import Login from "./pages/Login";
import AdminAnimalManagement from "./pages/AdminAnimalManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/how-adoption-works" element={<HowAdoptionWorks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminanimalmanagement" element={<AdminAnimalManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
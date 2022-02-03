import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import FormCharacter from "./components/FormCharacter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/personage" element={<FormCharacter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

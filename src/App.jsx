import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Character from "./components/Character";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/personage" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

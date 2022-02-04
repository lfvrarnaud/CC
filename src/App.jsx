import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FormCharacter from "./components/FormCharacter";
import "./App.css";
import Connexion from "./components/Connexion";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/connexion" element={<Connexion />} />
          <Route index path="/personage" element={<FormCharacter />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;

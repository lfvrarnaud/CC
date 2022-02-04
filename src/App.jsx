import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FormCharacter from "./components/FormCharacter";
import "./App.css";
import Connexion from "./components/Connexion";
import Compte from "./components/Compte";
import UserContextProvider from "./context/UserContextProvider";
import CharacterSheet from "./components/CharacterSheet";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/connexion" element={<Connexion />} />
          <Route index path="/personage" element={<FormCharacter  />} />
          <Route index path="/personage/:user_id/:id" element={<FormCharacter isUpdate={true} />} />
          <Route index path="/fiche/:user_id/:id" element={<CharacterSheet />} />
          <Route index path="/compte/:user_id/" element={<Compte />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;

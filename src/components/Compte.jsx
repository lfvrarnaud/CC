import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { PlusIcon } from "@heroicons/react/solid";
import UserContext from "../context/UserContext";
import { fetchAllCharacterById } from "../services/api";
import Card from "./Card";

const Compte = () => {
  const { user } = useContext(UserContext);
  const [characters, setCharacters] = useState([]);

  const setData = async () => {
    setCharacters(await fetchAllCharacterById(user.id));
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <div className="bg_paper container_compte">
      <h1>Bienvenue {user.username}</h1>
      <div className="container_character">
        {characters.map((character, id) => {
          return <Card character={character} user={user.id} key={id} />;
        })}
        <Link to={`/personnage`} className="container_card">
          <div className="cadre_character">
           <PlusIcon/>
          </div>
          <p>Nouveau personnage</p>
        </Link>
      </div>
    </div>
  );
};

export default Compte;

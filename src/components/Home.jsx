import { Link } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="container_home bg_home">
      <div className="filter_bg"></div>
      <div className="home_text">
        <h1>Personnalisez votre aventure</h1>
        <div className="home_modal">
          <p>
            Créez vos propres fiches personnages pour vos parties de jeu de rôle
          </p>
          {user.username ? (
            <Link to="/personnage">
              <button className="button button_blue">Créer</button>
            </Link>
          ) : (
            <Link to="/connexion">
              <button className="button button_blue">Connexion</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

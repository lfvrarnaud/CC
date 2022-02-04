import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container_home bg_home">
      <div className="filter_bg"></div>
      <div className="home_text">
        <h1>Personnalise ton aventure</h1>
        <div className="home_modal">
          <p>
            Créez vos propres fiches personnages pour vos parties de jeu de rôle
          </p>
          <Link to="/personage">
            <button className="button button_blue">Créez</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

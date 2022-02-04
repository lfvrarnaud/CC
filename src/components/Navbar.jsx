import { Link } from "react-router-dom";
import { useContext } from "react";

import Logo from "../assets/LogoCC.png";
import { UserCircleIcon } from "@heroicons/react/solid";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className="container_navbar">
      <div className="navbar">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        {user.id ? (
          <Link to={`/compte/${user.id}`}>
            <UserCircleIcon className="user_button" />
          </Link>
        ) : (
          <Link to="/connexion">
            <UserCircleIcon className="user_button" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

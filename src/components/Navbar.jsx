import {Link} from 'react-router-dom'

import Logo from "../assets/LogoCC.png"
import { UserCircleIcon } from '@heroicons/react/solid'


const Navbar = () => {
  return (
    <nav className="container_navbar">
      <div className="navbar">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <UserCircleIcon className="user_button" />
      </div>
    </nav>
  )
}

export default Navbar
import Login from "./Login";
import Register from "./Register";

const Connexion = () => {
  return (
    <div  className="container_connexion bg_home" >
      <div className=" modal_connexion">
        <Login/>
        <Register />

      </div>
    </div>
  )
}

export default Connexion;
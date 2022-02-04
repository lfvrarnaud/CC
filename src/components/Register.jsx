import { useForm } from "react-hook-form";
import { useContext } from "react";

import {createUser, fetchLogin} from "../services/api"
import UserContext from "../context/UserContext";
import { notifSuccess, notifFail } from '../services/notifications';
import { useNavigate } from "react-router-dom";


const Register = () => {
  const { setUser } = useContext(UserContext);
  const { register , handleSubmit } = useForm({});
  let navigate = useNavigate()


  const onSubmit = async (data) => {
    try {
      ;
      const login = await createUser(data);
      setUser(login)
      notifSuccess(`Bienvenue ${data.username}`)
      navigate(`/personnage`)
    } catch (e) {
      notifFail(e.response.data)
    }
  
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex_col form_connexion">
      <h2>Inscription</h2>
      <input placeholder="Pseudo" className="form_input input_connexion" {...register("username")} />
      <input placeholder="Email" className="form_input input_connexion" {...register("email")} />
      <input placeholder="Mot de passe" type="password" className="form_input input_connexion" {...register("password")} />
      <button className="button button_connexion button_blue">Inscription</button>
    </form>
  )
}

export default Register;
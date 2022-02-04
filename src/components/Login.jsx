import { useForm } from "react-hook-form";
import { useContext } from "react";

import {fetchLogin} from "../services/api"
import UserContext from "../context/UserContext";
import { notifSuccess, notifFail } from '../services/notifications';
import { useNavigate } from "react-router-dom";



const Login = () => {
  const { setUser } = useContext(UserContext);
  let navigate = useNavigate()
  const { register , handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    try {
      const login = await fetchLogin(data);
      setUser(login)
      notifSuccess(`Bonjour ${data.username}`)
      navigate(`/compte/${login.id}`)
    } catch (e) {
      notifFail(e.response.data)
    }
  
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex_col form_connexion">
      <h2>Connexion</h2>
      <input placeholder="Pseudo" className="form_input input_connexion" {...register("username")} />
      <input placeholder="Mot de passe" type="password" className="form_input input_connexion" {...register("clearPassword")} />
      <button className="button button_connexion button_blue">Connexion</button>
    </form>
  )
}

export default Login;
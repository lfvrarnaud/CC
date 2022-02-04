import { useForm } from "react-hook-form";
import { useContext } from "react";

import {fetchLogin} from "../services/api"
import UserContext from "../context/UserContext";
import { notifSuccess, notifFail } from '../services/notifications';



const Login = () => {
  const { setUser } = useContext(UserContext);

  const { register , handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    try {
      const login = await fetchLogin(data);
      setUser(login)
      notifSuccess(`Bonjour ${data.username}`)
    } catch (e) {
      notifFail(e.response.data)
    }
  
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex_col form_connexion">
      <h2>Connexion</h2>
      <input placeholder="Pseudo" className="form_input input_connexion" {...register("username")} />
      <input placeholder="Mot de passe" type="password" className="form_input input_connexion" {...register("clearPassword")} />
      <button className="button button_connexion button_blue">Envoyer</button>
    </form>
  )
}

export default Login;
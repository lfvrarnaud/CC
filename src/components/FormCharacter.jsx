import { useForm } from "react-hook-form";
import { useContext } from "react";

import { createCharacter } from "../services/api";
import Input from "./Input";
import Textarea from "./Textarea";
import UserContext from "../context/UserContext";

const FormCharacter = () => {
  const { user } = useContext(UserContext);
  const { register, watch, handleSubmit } = useForm({});
  const avatar = watch(["avatar"]);

  const onSubmit = async (data) => {
    console.log(user.id);
    try {
      await createCharacter(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="bg_character bg_paper">
      <form className="container_form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="container_block_form">
            <div className="block_form">
              <div className="cadre_character">
                <img
                  src={
                    avatar[0]
                      ? avatar
                      : "https://i.pinimg.com/originals/21/d0/57/21d0574f8447cac27a46fb066cab1926.jpg"
                  }
                />
              </div>
            </div>
            <div className="block_form">
              <Input register={register} info="avatar" label="Avatar :" />
              <Input register={register} info="name" label="Nom :" />
              <Input register={register} info="level" label="Niveau : " />
            </div>
            <div className="block_form">
              <Input register={register} info="race" label="Race :" />
              <Input register={register} info="job" label="Classe :" />
            </div>
            <div className="block_form">
              <Input register={register} info="age" label="Age :" />
              <Input register={register} info="taille" label="Taille :" />
            </div>
          </div>
          <div className="container_block_form ">
            <div className="block_form">
              <Textarea
                register={register}
                extra="form_textarea_col"
                info="feats"
                label="Histoire :"
              />
            </div>
            <div className="container_block_form flex_col">
              <div className="flex">
                <div className="block_form">
                  <Input register={register} info="pv" label="PV :" />
                  <Input register={register} info="armor" label="Armure :" />
                  <Input
                    register={register}
                    info="initiative"
                    label="Initiative :"
                  />
                </div>
                <div className="block_form">
                  <Input register={register} info="strength" label="Force :" />
                  <Input
                    register={register}
                    info="dexterity"
                    label="Dexterité :"
                  />
                  <Input
                    register={register}
                    info="constitution"
                    label="Constitution :"
                  />
                </div>
                <div className="block_form">
                  <Input
                    register={register}
                    info="intelligence"
                    label="Intelligence :"
                  />
                  <Input register={register} info="wisdow" label="Sagesse :" />
                  <Input
                    register={register}
                    info="charisma"
                    label="Charisme : "
                  />
                </div>
              </div>
              <div className="flex">
                <div className="block_form ">
                  <Textarea
                    register={register}
                    info="skill"
                    label="Compétences :"
                  />
                </div>
                <div className="block_form ">
                  <Textarea
                    register={register}
                    info="Languages"
                    label="Langues :"
                  />
                </div>
                <div className="block_form ">
                  <Textarea
                    register={register}
                    info="knowlegde"
                    label="Connaissances :"
                  />
                </div>
              </div>
            </div>
          </div>
          <input className="input_invisible" value={user.id} {...register("user_id")} />
        </div>

        <button className="red_button button" type="submit">
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

export default FormCharacter;

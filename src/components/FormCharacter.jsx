import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  createCharacter,
  updateCharacter,
  fetchCharacterById,
} from "../services/api";
import Input from "./Input";
import Textarea from "./Textarea";
import UserContext from "../context/UserContext";
import { notifSuccess, notifFail } from "../services/notifications";

const FormCharacter = ({ isUpdate = false }) => {
  const { user_id, id } = useParams();
  const { user } = useContext(UserContext);
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { register, watch, handleSubmit, reset } = useForm({
    defaultValues: {
      avatar: "",
      name: "",
      level: "",
      race: "",
      job: "",
      age: "",
      taille: "",
      pv: "",
      armor: "",
      initiative: "",
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdow: "",
      charisma: "",
      feats: "",
      skill: "",
      languages: "",
      knowlegde: "",
      user_id: user.id,
    },
  });

  const avatar = watch(["avatar"]);

  const setData = async () => {
    if (isUpdate) {
      const character = await fetchCharacterById(user_id, id);
      reset(character);
      setIsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (isUpdate) {
        await updateCharacter(data, id);
        notifSuccess(`Modifidation de ${data.name} effectuée`);
      } else {
        console.log(data);
        await createCharacter(data);
        notifSuccess(`Création de ${data.name}`);
      }
      navigate(`/compte/${data.user_id}`)
    } catch (e) {
      notifFail(e.response.data);
    }
  };

  useEffect(() => {
    if (isUpdate) {
      setData();
    }
    setIsLoading(false);
  }, []);

  console.log();
  return (
    <>
      {isLoading ? (
        <p>chargement en cours ...</p>
      ) : (
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
                  <Input register={register} info="avatar" label="Url de l'img :" />
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
                  <div className="flex container_block_form">
                    <div className="block_form">
                      <Input register={register} info="pv" label="PV :" />
                      <Input
                        register={register}
                        info="armor"
                        label="Armure :"
                      />
                      <Input
                        register={register}
                        info="initiative"
                        label="Initiative :"
                      />
                    </div>
                    <div className="block_form">
                      <Input
                        register={register}
                        info="strength"
                        label="Force :"
                      />
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
                      <Input
                        register={register}
                        info="wisdow"
                        label="Sagesse :"
                      />
                      <Input
                        register={register}
                        info="charisma"
                        label="Charisme : "
                      />
                    </div>
                  </div>
                  <div className="flex container_block_form">
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
                        info="languages"
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
              <input
                className="input_invisible"
                value={user.id}
                {...register("user_id")}
              />
            </div>
            
            <button className="red_button button" type="submit">
              Sauvegarder
            </button>
            
          </form>
        </div>
      )}
    </>
  );
};

export default FormCharacter;

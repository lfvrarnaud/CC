import { useForm } from "react-hook-form";

import { createCharacter } from "../services/api";

const Input = ({ register, label, info }) => {
  return (
    <>
      <label>{label}</label>
      <input className="form_input" {...register(`${info}`)} />
    </>
  );
};

const Textarea = ({ register, label, info }) => {
  return (
    <>
      <label>{label}</label>
      <textarea className="form_input form_textarea" {...register(`${info}`)} />
    </>
  );
};

const FormCharacter = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await createCharacter(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg_character">
      <form className="container_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="container_block_form">
          <div className="cadre_character">
            <img src="https://i.pinimg.com/originals/21/d0/57/21d0574f8447cac27a46fb066cab1926.jpg" />
          </div>
          <div className="block_form">
            <Input register={register} info="img" label="Url de l'image :" />
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
        <div className="container_block_form">
          <div className="block_form">
            <Input register={register} info="pv" label="PV :" />
            <Input register={register} info="armor" label="Armure :" />
            <Input register={register} info="initiative" label="Initiative :" />
          </div>
          <div className="block_form">
            <Input register={register} info="strength" label="Force :" />
            <Input register={register} info="dexterity" label="Dexterité :" />
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
            <Input register={register} info="charisma" label="Charisme : " />
          </div>
        </div>
        <div className="container_block_form">
          <div className="block_form ">
            <Textarea register={register} info="feats" label="Exploits :" />
          </div>
          <div className="block_form ">
            <Textarea register={register} info="skill" label="Compétences :" />
          </div>
          <div className="block_form ">
            <Textarea register={register} info="Languages" label="Langues :" />
          </div>
          <div className="block_form ">
            <Textarea
              register={register}
              info="knowlegde"
              label="Connaissances :"
            />
          </div>
        </div>

        <button className="button red_button" type="submit">
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

export default FormCharacter;

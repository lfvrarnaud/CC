import CharacterSheet from "./CharacterSheet";

const Input = ({ register, label, info, character }) => {
  return (
    <>
    {register ? (
      <>
      <label htmlFor={info} >{label}</label>
      <input className="form_input input_character" id={info}  {...register(`${info}`)} />
      </>
    ) : (
      <>
      <label>{label}</label>
      <p className="form_input input_character flex_center"  >{character}</p>
      </>
    )}
      
    </>
  );
};

export default Input;
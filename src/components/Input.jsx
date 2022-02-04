const Input = ({ register, label, info }) => {
  return (
    <>
      <label htmlFor={info} >{label}</label>
      <input className="form_input input_character" id={info}  {...register(`${info}`)} />
    </>
  );
};

export default Input;
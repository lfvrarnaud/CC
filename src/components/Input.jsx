const Input = ({ register, label, info }) => {
  return (
    <>
      <label>{label}</label>
      <input className="form_input input_character" {...register(`${info}`)} />
    </>
  );
};

export default Input;
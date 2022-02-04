const Textarea = ({ register, label, info, extra }) => {
  return (
    <>
      <label>{label}</label>
      <textarea className={extra? "form_input input_character form_textarea_col" : "form_input input_character form_textarea"} {...register(`${info}`)} />
    </>
  );
};

export default Textarea;
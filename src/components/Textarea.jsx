const Textarea = ({ register, label, info, extra, character }) => {
  let list = []
  if(!register){
    list = character.split("\n") 
  }

  return (
    <>
      {register ? (
        <>
          <label>{label}</label>
          <textarea
            className={
              extra
                ? "form_input input_character form_textarea_col"
                : "form_input input_character form_textarea"
            }
            {...register(`${info}`)}
          />
        </>
      ) : (
        <>
          <label>{label}</label>
          <div
            className={
              extra
                ? ""
                : "form_input input_character form_textarea"
            }
          >
            {list.map((item) => {
              if (item !== "") {
                return (
                  <p
                    className={
                      extra
                        ? "form_input input_character form_textarea_col"
                        : " flex_center text_center"
                    }
                  >
                    {item}
                  </p>
                );
              }
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Textarea;

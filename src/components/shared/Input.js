const Input = (props) => {
  // FUNCTIONS
  const handleInput = (event) => props.handleChangeInput(event.target.value);

  return (
    <>
      <input
        className={props.class}
        type={props.for}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.inputValue}
        onChange={handleInput}
      />
    </>
  );
};

export default Input;

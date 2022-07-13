const Input = (props) => {
  // FUNTIONS
  const handleInput = (event) => {
    props.handleChangeInput(event.target.value);
  };

  return (
    <>
      <input
        className={props.class}
        type={props.for}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.searchValueBrowser}
        onChange={handleInput}
      />
    </>
  );
};

export default Input;

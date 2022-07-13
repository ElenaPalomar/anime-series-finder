const Input = (props) => {
  return (
    <>
      <input
        className={props.class}
        type={props.for}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.searchValueBrowser}
        onChange={props.handleInput}
      />
    </>
  );
};

export default Input;

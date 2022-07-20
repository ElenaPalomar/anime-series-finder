const Button = (props) => {
  // FUNCTIONS
  const handleButton = () => props.handleClickButton();

  return (
    <>
      <button className={props.class} onClick={handleButton}>
        {props.text}
      </button>
    </>
  );
};

export default Button;

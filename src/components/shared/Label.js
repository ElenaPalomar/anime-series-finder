const Label = (props) => {
  return (
    <>
      <label className={props.class} htmlFor={props.for}>
        {props.text}
      </label>
    </>
  );
};

export default Label;

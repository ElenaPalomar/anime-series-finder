import Button from "../../shared/Button";

const PreviewList = (props) => {
  return (
    <div>
      <Button text='Top' handleClickButton={props.handleClickTop} />
      <Button text='Latest' handleClickButton={props.handleClickLatest} />
    </div>
  );
};

export default PreviewList;

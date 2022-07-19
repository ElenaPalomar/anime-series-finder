import Input from "../shared/Input";
import Label from "../shared/Label";

const Browser = (props) => {
  return (
    <>
      <Label class='search__label' text='Search' for='browse' />
      <Input
        class='search__input'
        type='text'
        name='browse'
        id='browse'
        placeholder='Kimi no na wa'
        searchValueInput={props.searchValueMainBrowser}
        handleChangeInput={props.handleSearchMainBrowser}
      />
    </>
  );
};

export default Browser;

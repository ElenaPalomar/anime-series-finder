import Input from '../shared/Input';
import Label from '../shared/Label';

const Browser = (props) => {
  return (
    <>
      <Label class="search__label" text="Find your anime!" for="browse" />
      <Input
        class="search__input"
        type="text"
        name="browse"
        id="browse"
        placeholder="Kimi no na wa"
        inputValue={props.searchValue}
        handleChangeInput={props.handleSearch}
      />
    </>
  );
};

export default Browser;

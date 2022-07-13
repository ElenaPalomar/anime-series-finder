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
        searchValueBrowser={props.searchValueMainBrowser}
        handleChangeInput={props.handleSearchMainBrowser} // La props que pasamos al componente 'Input' tiene que ser genérica, porque le vamos a pasar siempre la misma a todos los inputs. Es decir, no puede ser 'handleSearchBrowser' porque sería la que recibe por 'props' el input y sólo sería válida en el caso que se utilice el componente 'Input' en 'Browser', no cuando lo reutilicemos para los checkboxs (si se podría usar pero sería muy confuso)
      />
    </>
  );
};

export default Browser;

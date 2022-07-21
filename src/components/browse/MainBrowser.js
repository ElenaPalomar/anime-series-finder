import Browser from "./Browser";
import Button from "../shared/Button";
import Title from "../shared/title";

const MainBrowser = (props) => {
  // FUNCTIONS
  const handleSubmit = (event) => event.preventDefault();

  return (
    <main>
      <form action='' onSubmit={handleSubmit}>
        <Browser
          searchValue={props.searchValue}
          handleSearch={props.handleSearch}
        />
        <Button handleClickButton={props.handleClickSearch} />
      </form>
      <section className='section__list'>
        <Title />
      </section>
    </main>
  );
};

export default MainBrowser;

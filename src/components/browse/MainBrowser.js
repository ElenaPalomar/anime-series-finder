import Browser from "./Browser";
import Button from "../shared/Button";

const MainBrowser = (props) => {
  // FUNCTIONS
  const handleSubmit = (event) => event.preventDefault();

  return (
    <>
      <main>
        <form action='' onSubmit={handleSubmit}>
          <Browser
            searchValue={props.searchValue}
            handleSearch={props.handleSearch}
          />
          <Button handleClickButton={props.handleClickSearch} />
        </form>
      </main>
    </>
  );
};

export default MainBrowser;

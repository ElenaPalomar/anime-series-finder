import Browser from "./Browser";

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
        </form>
      </main>
    </>
  );
};

export default MainBrowser;

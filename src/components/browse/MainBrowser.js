import Browser from "./Browser";

const MainBrowser = (props) => {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <>
      <main>
        <form action='' onSubmit={handleSubmit}>
          <Browser
            searchValueMainBrowser={props.searchValueApp}
            handleSearchMainBrowser={props.handleSearchApp}
          />
        </form>
      </main>
    </>
  );
};

export default MainBrowser;

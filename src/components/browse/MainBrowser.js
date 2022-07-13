import Browser from "./Browser";

const MainBrowser = (props) => {
  return (
    <>
      <main>
        <form action=''>
          <Browser searchValueMainBrowser={props.searchValueApp} />
        </form>
      </main>
    </>
  );
};

export default MainBrowser;

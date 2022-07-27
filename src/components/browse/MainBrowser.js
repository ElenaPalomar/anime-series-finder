import Browser from "./Browser";
import Button from "../shared/Button";
import Title from "../shared/Title";
import AnimeList from "./list/AnimeList";
import PreviewList from "./list/PreviewList";

const MainBrowser = (props) => {
  // FUNCTIONS
  const handleSubmit = (event) => event.preventDefault();

  /* const renderTitle = () => {
    if (
      props.animeData.length !== 0 ||
      props.listTitle === "Top anime" ||
      props.listTitle === "Latest anime"
    ) {
      return <Title class='uppercase' title={props.listTitle} />;
    } else {
      return (
        <Title
          class='title--error'
          title={`No hay ningún anime que coincida con ${props.searchFetch} 😔`}
        />
      );
    }
  }; */
  console.log("animeDataTitle", props.animeData);

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
        {/* {renderTitle()} */}
        {props.animeData.length !== 0 ||
        props.listTitle === "Top anime" ||
        props.listTitle === "Latest anime" ? (
          <Title class='uppercase' title={props.listTitle} />
        ) : (
          <Title
            class='title--error'
            title={`No hay ningún anime que coincida con ${props.searchFetch} 😔`}
          />
        )}
        <PreviewList
          handleClickTop={props.handleClickTop}
          handleClickLatest={props.handleClickLatest}
        />
        <AnimeList
          animeData={props.animeData}
          searchFetch={props.searchFetch}
          listTitle={props.listTitle}
          top={props.top}
          latest={props.latest}
        />
      </section>
    </main>
  );
};

export default MainBrowser;

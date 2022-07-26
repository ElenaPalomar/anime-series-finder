import Browser from "./Browser";
import Button from "../shared/Button";
import Title from "../shared/Title";
import AnimeList from "./list/AnimeList";
import PreviewList from "./list/PreviewList";

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
        <Title class='uppercase' title={props.listTitle} />
        <PreviewList
          handleClickTop={props.handleClickTop}
          handleClickLatest={props.handleClickLatest}
        />
        <AnimeList
          animeData={props.animeData}
          searchFetch={props.searchFetch}
        />
      </section>
    </main>
  );
};

export default MainBrowser;

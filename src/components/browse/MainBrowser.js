import Browser from './Browser';
import Button from '../shared/Button';
import Title from '../shared/Title';
import AnimeList from './list/AnimeList';
import PreviewList from './list/PreviewList';

const MainBrowser = (props) => {
  // FUNCTIONS
  const handleSubmit = (event) => event.preventDefault();

  return (
    <main>
      <form action="" onSubmit={handleSubmit}>
        <Browser
          searchValue={props.searchValue}
          handleSearch={props.handleSearch}
        />
        <Button text="Search" handleClickButton={props.handleClickSearch} />
      </form>
      <section className="section__list">
        {props.animeData.length !== 0 ||
        props.listTitle === 'Top anime' ||
        props.listTitle === 'Latest anime' ? (
          <Title class="uppercase" title={props.listTitle} />
        ) : (
          <Title
            class="title--error"
            title={`ごめんなさい! Your search "${props.searchFetch}" doesn't give results! Maybe try something else?`}
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

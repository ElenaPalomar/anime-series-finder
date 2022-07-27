import AnimeCard from "./AnimeCard";

const AnimeList = (props) => {
  // FUNCTIONS
  // Conditional to render each list
  const chosenList = () => {
    if (props.listTitle === "Top anime") {
      return props.top;
    } else if (props.listTitle === "Latest anime") {
      return props.latest;
    } else if (props.listTitle === props.searchFetch) {
      return props.animeData;
    }
  };
  // Function to render the anime's list
  const renderAnimeList = chosenList().map((anime) => (
    <li className='anime' key={anime.id}>
      {/* Pass each object of the state of API array to the AnimeItem component with the props 'anime' */}
      <AnimeCard anime={anime} />
    </li>
  ));

  return <ul>{renderAnimeList}</ul>;
};

export default AnimeList;

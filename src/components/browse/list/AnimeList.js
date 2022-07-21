import AnimeCard from "./AnimeCard";

const AnimeList = (props) => {
  console.log(props.animeData);
  // FUNCTIONS
  // Function to render the animes' list
  const renderAnimeList = props.animeData.map((anime) => (
    <li className='anime' key={anime.id}>
      {/* Pass each object of the state of API array to the AnimeItem component with the props 'anime' */}
      <AnimeCard anime={anime} />
    </li>
  ));

  return (
    <ul>
      {renderAnimeList.length === 0 ? (
        <li className='anime--error'>
          No hay ningún anime que coincida con {props.searchFetch} 😔
        </li>
      ) : (
        renderAnimeList
      )}
    </ul>
  );
};

export default AnimeList;

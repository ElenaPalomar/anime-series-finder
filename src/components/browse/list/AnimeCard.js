import Button from "../../shared/Button";
import { Link } from "react-router-dom";

const addFavorite = () => {
  console.log("Has añadido esta película a favoritos");
};

const addWatched = () => {
  console.log("Has añadido esta película a animes que ya has visto");
};

const addPending = () => {
  console.log(
    "Has añadido esta película a animes que quieres ver en un futuro"
  );
};

const AnimeCard = (props) => {
  return (
    <>
      <Link
        to={`/anime/${props.anime.id}`}
        className='anime__link'
        title={props.anime.titles.title}
      >
        <img
          src={props.anime.poster}
          className='anime__poster'
          alt={props.anime.titles.title}
        />
        <h3 className='anime__title'>{props.anime.titles.title}</h3>
      </Link>
      <Button text='Favorite' handleClickButton={addFavorite} />
      <Button text='Watched' handleClickButton={addWatched} />
      <Button text='Pending' handleClickButton={addPending} />
    </>
  );
};

export default AnimeCard;

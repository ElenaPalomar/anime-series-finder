import Button from "../../shared/Button";
import { Link } from "react-router-dom";

const AnimeCard = (props) => {
  return (
    <>
      <Link
        to={`/anime/${props.anime.id}`}
        className='anime__link'
        title={props.anime.title}
      >
        <img
          src={props.anime.poster}
          className='anime__poster'
          alt={props.anime.title}
        />
        <h3 className='anime__title'>{props.anime.title}</h3>
        <Button text='Favorite' />
        <Button text='Watched' />
        <Button text='Pending' />
      </Link>
    </>
  );
};

export default AnimeCard;

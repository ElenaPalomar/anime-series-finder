import { Link } from 'react-router-dom';

const MainLanding = () => {
  return (
    <main>
      <h1>アニメ browser ⛩</h1>

      <p>
        Looking for anime info? Wanna fav the best of them? Make a watchlist?
      </p>

      <Link to="/browse" title="Click here!">
        Click me!
      </Link>
    </main>
  );
};

export default MainLanding;

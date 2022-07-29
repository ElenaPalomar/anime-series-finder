import { Link } from 'react-router-dom';
import logo from '../../images/logo_eyes.png';

const HeaderLanding = () => {
  return (
    <header>
      <Link to={`/`} title="Home">
        <img src={logo} alt="Logo" width="200" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to={`/browse`} title="Looking for something in particular?">
              Browser
            </Link>
          </li>
          <li>
            <Link to={`/favorites`} title="Here are the ones you've loved">
              Favorites
            </Link>
          </li>
          <li>
            <Link
              to={`/watched`}
              title="Remember that ONE you loved? Back to the past!"
            >
              Watched
            </Link>
          </li>
          <li>
            <Link
              to={`/pending`}
              title="Haven't you checked out Shingeki no Kyojin? It's a must!"
            >
              Pending
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderLanding;

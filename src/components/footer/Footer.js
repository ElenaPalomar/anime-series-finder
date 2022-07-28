// Routes
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="" alt="" />
        <small>
          &copy;
          <Link to="/about" title="Get to know us">
            co-workers&#9792;inTech
          </Link>
          <span>2022</span>
        </small>
      </div>

      <div>
        <div>
          <p>Elena Palomar Llorente</p>
          <a
            href="https://github.com/ElenaPalomar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/elena-palomar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div>
          <p>Clara Miranda Zapata</p>
          <a
            href="https://github.com/claraMirandaZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/claramirandazapata/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer>
      {/* <div>
        <img src='' alt='' />
        <small>&copy; 2022</small>
      </div> */}

      {/* <div> Este div no es necesario si no añadimos el copyright */}
      <div>
        <p>Elena Palomar Llorente</p>
        <a
          href='https://github.com/ElenaPalomar'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github-alt'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/elena-palomar/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
      </div>

      <div>
        <p>Clara Miranda Zapata</p>
        <a
          href='https://github.com/claraMirandaZ'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github-alt'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/claramirandazapata/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
      </div>
      {/* </div> Este div no es necesario si no añadimos el copyright */}
    </footer>
  );
};

export default Footer;

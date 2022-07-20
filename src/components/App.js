// Components
import HeaderLanding from './header/HeaderLanding';
import MainLanding from './landing/MainLanding';
import Footer from './footer/Footer';
import MainBrowser from './browse/MainBrowser';
// Services
import getTitleApi from '../services/api/titleApi';
// Styles
import '../styles/App.scss';
// Hooks
import { useState, useEffect } from 'react';
// Routes
import { Route, Routes } from 'react-router-dom';

function App() {
  // CONSTANTS
  // Input search (browsedTerm) value
  const [searchValue, setSearchValue] = useState('');
  // Fetched input text data (browsedTerm) on click of "search" button
  const [searchFetch, setSearchFetch] = useState(searchValue);
  // Fetched animes from input text
  const [animeData, setAnimeData] = useState([]);

  // USEEFFECTS
  useEffect(() => {
    getTitleApi().then((animeData) => {
      setAnimeData(animeData);
    });
  }, []);

  // FUNCTIONS
  // Handle function to collect the values of the input:text and update the state 'search'
  const handleSearch = (browsedTerm) => {
    setSearchValue(browsedTerm);
  };

  //
  const handleClickSearch = () => {
    setSearchFetch(searchValue);
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <HeaderLanding />
              <MainLanding />
            </>
          }
        />

        <Route
          path='/browse'
          element={
            <>
              <MainBrowser
                searchValue={searchValue}
                handleSearch={handleSearch}
                handleClickSearch={handleClickSearch}
              />
            </>
          }
        />

        <Route
          path='/about'
          element={
            <h2>
              Este título solo aparece cuando la usuaria entra en la página de
              about
            </h2>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

// Components
import HeaderLanding from './header/HeaderLanding';
import MainLanding from './landing/MainLanding';
import Header from './header/Header';
import MainBrowser from './browse/MainBrowser';
import About from './about/About';
import Footer from './footer/Footer';

// Services
import getTitleApi from '../services/api/titleApi';
import getTopApi from '../services/api/topApi';
import getLatestApi from '../services/api/latestApi';
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
  const [searchFetch, setSearchFetch] = useState('');
  // Fetched anime from input text
  const [animeData, setAnimeData] = useState([]);
  // Text shown in the list h1 (either from the input, Last anime or Top anime). Changes on click of each btn
  const [listTitle, setListTitle] = useState('Top anime');
  // Fetched anime from top
  const [top, setTop] = useState([]);
  // Fetched anime from latest
  const [latest, setLatest] = useState([]);

  // USEEFFECTS
  // Fetched anime data from users' search (input)
  useEffect(() => {
    if (searchFetch !== '') {
      getTitleApi(searchFetch).then((animeData) => {
        setAnimeData(animeData);
      });
    }
  }, [searchFetch]);
  console.log('animeData', animeData);

  // Fetched anime data from "top" button
  useEffect(() => {
    getTopApi().then((topData) => {
      setTop(topData);
    });
  }, []);
  console.log('top', top);

  // Fetched anime data from "latest" button
  useEffect(() => {
    getLatestApi().then((latestData) => {
      setLatest(latestData);
    });
  }, []);
  console.log('latest', latest);

  // FUNCTIONS
  // Handle function to collect the values of the input:text and update the state "search"
  const handleSearch = (browsedTerm) => {
    setSearchValue(browsedTerm);
  };

  // Handle function to update the searchFetch and listTitle values with searchValue when clicking the "search" button
  const handleClickSearch = () => {
    setSearchFetch(searchValue);
    setListTitle(searchValue);
  };

  // Handle function to update the listTitle value with "Top anime" when clicking the "top" button
  const handleClickTop = () => {
    setListTitle('Top anime');
  };

  // Handle function to update the listTitle value with "Latest anime" when clicking the "latest" button
  const handleClickLatest = () => {
    setListTitle('Latest anime');
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderLanding />
              <MainLanding />
            </>
          }
        />

        <Route
          path="/browse"
          element={
            <>
              <Header />
              <MainBrowser
                searchValue={searchValue}
                handleSearch={handleSearch}
                handleClickSearch={handleClickSearch}
                animeData={animeData}
                searchFetch={searchFetch}
                handleClickTop={handleClickTop}
                handleClickLatest={handleClickLatest}
                listTitle={listTitle}
                top={top}
                latest={latest}
              />
            </>
          }
        />

        <Route
          path="/favorites"
          element={
            <>
              <Header />
              {/* <Favorites /> */}
              <p>Here are the ones you've loved</p>
            </>
          }
        />

        <Route
          path="/watched"
          element={
            <>
              <Header />
              {/* <Watched /> */}
              <p>Remember that ONE you loved? Back to the past!</p>
            </>
          }
        />

        <Route
          path="/pending"
          element={
            <>
              <Header />
              {/* <Pending /> */}
              <p>Haven't you checked out Shingeki no Kyojin? It's a must!</p>
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

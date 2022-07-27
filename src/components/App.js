// Components
import HeaderLanding from "./header/HeaderLanding";
import MainLanding from "./landing/MainLanding";
import Footer from "./footer/Footer";
import MainBrowser from "./browse/MainBrowser";
// Services
import getTitleApi from "../services/api/titleApi";
import getTopApi from "../services/api/topApi";
import getLatestApi from "../services/api/latestApi";
// Styles
import "../styles/App.scss";
// Hooks
import { useState, useEffect } from "react";
// Routes
import { Route, Routes } from "react-router-dom";

function App() {
  // CONSTANTS
  // Input search (browsedTerm) value
  const [searchValue, setSearchValue] = useState("");
  // Fetched input text data (browsedTerm) on click of "search" button
  const [searchFetch, setSearchFetch] = useState("");
  // Fetched anime from input text
  const [animeData, setAnimeData] = useState([]);
  // Variable que guarda el texto que se va a mostrar en el título de las lista, ya sea el nombre buscado en el input text, last anime o top anime, y se cambia al pulsar cada botón
  const [listTitle, setListTitle] = useState("Top anime");
  // Fetched anime from top
  const [top, setTop] = useState([]);
  // Fetched anime from latest
  const [latest, setLatest] = useState([]);

  // USEEFFECTS
  // Fetched anime data from users' search (input)
  useEffect(() => {
    if (searchFetch !== "") {
      getTitleApi(searchFetch).then((animeData) => {
        setAnimeData(animeData);
      });
    }
  }, [searchFetch]);
  console.log("animeData", animeData);

  // Fetched anime data from 'top' button
  useEffect(() => {
    getTopApi().then((topData) => {
      setTop(topData);
    });
  }, []);
  console.log("top", top);

  // Fetched anime data from 'latest' button
  useEffect(() => {
    getLatestApi().then((latestData) => {
      setLatest(latestData);
    });
  }, []);
  console.log("latest", latest);

  // FUNCTIONS
  // Handle function to collect the values of the input:text and update the state 'search'
  const handleSearch = (browsedTerm) => {
    setSearchValue(browsedTerm);
  };

  // Handle function to update the searchFetch value and listTitle value with searchValue when clicking the search button
  const handleClickSearch = () => {
    setSearchFetch(searchValue);
    setListTitle(searchValue);
  };

  // Handle function to update the listTitle value with 'Top anime' when clicking the top button
  const handleClickTop = () => {
    setListTitle("Top anime");
  };

  // Handle function to update the listTitle value with 'Latest anime' when clicking the latest button
  const handleClickLatest = () => {
    setListTitle("Latest anime");
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

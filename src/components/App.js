// Components
import HeaderLanding from "./header/HeaderLanding";
import MainLanding from "./landing/MainLanding";
import Footer from "./footer/Footer";
import MainBrowser from "./browse/MainBrowser";
// Services
// Styles
import "../styles/App.scss";
// Hooks
import { useState } from "react";
// import { useState, useEffect } from "react";
// Routes
import { Route, Routes } from "react-router-dom";

function App() {
  // CONSTANTS
  // Input search (browsedTerm) value
  const [search, setSearch] = useState("");

  // FUNCTIONS
  // Handle function to collect the values of the input:text and update the state 'search'
  const handleSearch = (browsedTerm) => {
    setSearch(browsedTerm);
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
              <MainBrowser searchValue={search} handleSearch={handleSearch} />
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

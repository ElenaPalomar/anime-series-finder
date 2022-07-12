// Components
import HeaderLanding from './header/HeaderLanding';
import MainLanding from './landing/MainLanding';
import Footer from './footer/Footer';
// Services
import YearApi from '../services/api/yearApi';
// Styles
import '../styles/App.scss';
// Hooks
import { useState, useEffect } from 'react';
// Routes
import { Route, Routes } from 'react-router-dom';
import getYearApi from '../services/api/yearApi';

function App() {
  // WIP
  const [dataYears, setDataYears] = useState([]);

  useEffect(() => {
    getYearApi().then((dataYears) => {
      console.log(dataYears);
      setDataYears(dataYears);
    });
  }, []);

  console.log(dataYears);

  const yearFilter = dataYears.filter((user) => {
    return user.ano === 2012;
  });
  console.log(yearFilter);
  // WIP

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
          path='/finder'
          element={
            <h2>
              Este título solo aparece cuando la usuaria entra en la página de
              finder
            </h2>
          }
        />

        <Route
          path='/aboutUs'
          element={
            <h2>
              Este título solo aparece cuando la usuaria entra en la página de
              about us
            </h2>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

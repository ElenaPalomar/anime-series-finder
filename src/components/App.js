// Components
import HeaderLanding from './header/HeaderLanding';
import MainLanding from './landing/MainLanding';
import Footer from './footer/Footer';
// Styles
import '../styles/App.scss';
// Routes
import { Route, Routes } from 'react-router-dom';

function App() {
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

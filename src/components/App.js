// Components
import MainLanding from './landing/mainLanding';
// Styles
import '../styles/App.scss';
// Routes
import { Route, Routes } from 'react-router-dom';
import HeaderLanding from './header/headerLanding';


function App() {
  return (
    <div className="App">

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

      {/* Aquí iría el componente de Footer */}

    </div>
  );
}

export default App;
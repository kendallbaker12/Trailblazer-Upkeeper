import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Buildings from './pages/Buildings';
import Navbar from './components/navBar';
import Login from './pages/Links';
import Home from './pages/Home';
import Paints from './pages/Paints';
import Rooms from './pages/Rooms';
import Footer from './components/footerComp';
import Facility from './pages/Links';

//github 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              // home page still need to be set up.
              path='/'
              element={<Home />}
            />
            <Route
              // buildings page coming from pages
              path='/buildings'
              element={<Buildings />}
            />
            <Route
              // login page coming from pages 
              path='/paints'
              element={<Paints />}
            />
            <Route
              path='/links'
              element={<Facility />}
            />
            <Route
              path='/rooms'
              element={<Rooms />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

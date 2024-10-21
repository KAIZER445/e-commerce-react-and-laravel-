import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './Components/NavbarMain';
import Topbar from './Components/Topbar';
import Homepage from './Pages/Homepage';
import FooterMain from './Components/FooterMain';
import Productpage from './Pages/Productpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Exploremore from './Pages/Exploremore';

function App() {
  return (
    <>
      <BrowserRouter>
      <Topbar />
      <NavbarMain />
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Productpage' element={<Productpage/>}/>
          <Route path='/Explore-More' element={<Exploremore />}/>
        </Routes>
      <FooterMain />
      </BrowserRouter>
    </>
  );
}

export default App;

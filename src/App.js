import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './Components/NavbarMain';
import Topbar from './Components/Topbar';
import Homepage from './Pages/Homepage';
import FooterMain from './Components/FooterMain';

function App() {
  return (
    <>
      <Topbar />
      <NavbarMain />
      <Homepage />
      <FooterMain />
    </>
  );
}

export default App;

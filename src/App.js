import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './Components/NavbarMain';
import Topbar from './Components/Topbar';
// import Homepage from './Pages/Homepage';
import FooterMain from './Components/FooterMain';
import Productpage from './Pages/Productpage';

function App() {
  return (
    <>
      <Topbar />
      <NavbarMain />
      {/* <Homepage /> */}
      <Productpage/>
      <FooterMain />
    </>
  );
}

export default App;

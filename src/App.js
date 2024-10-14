import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './Components/NavbarMain';
import Topbar from './Components/Topbar';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <>
      <Topbar />
      <NavbarMain />
      <Homepage />
    </>
  );
}

export default App;

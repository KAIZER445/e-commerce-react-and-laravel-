import './App.css';
import HeroCarousel from './Components/HeroCarousel';
import NavbarMain from './Components/NavbarMain';
import Topbar from './Components/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<>
<Topbar/>
<NavbarMain/>
<HeroCarousel/>
</>
  );
}

export default App;

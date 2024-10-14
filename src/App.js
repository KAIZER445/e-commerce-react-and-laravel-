import './App.css';
import HeroCarousel from './Components/HeroCarousel';
import NavbarMain from './Components/NavbarMain';
import Todayselection from './Components/Todayselection';
import Topbar from './Components/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<>
<Topbar/>
<NavbarMain/>
<HeroCarousel/>
<Todayselection/>
</>
  );
}

export default App;

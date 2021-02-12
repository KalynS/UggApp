import './App.css';
import UggNavbar from './Components/Navbar/NavbarFeatures';
import BlackNavbar from './Components/Navbar/BlackNavbar';
import Imagess from "./Components/Assets/Img/image";
import Cardss from "./Components/Cards/Card";
import MiddleNav from './Components/Navbar/MiddleNav';
import Footer from './Components/Footer/Footer'






function App() {
  return (
    <div className="App">
      <BlackNavbar />
      <UggNavbar />
      <Imagess />
      <Cardss />
      {/* <MiddleNav /> */}
      <Footer />
     
     
      
    </div>
  );
}


export default App;

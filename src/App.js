import { Header } from "./componentes/Header/Header"; // Aca tambien sino usas esta variable eliminala
import "./fonts/font.scss" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Faltaba añadir este archivo para que funcione el js de Bootstrap
import { Home } from "./pages/Home/Home";


function App() {
  return (
  
  <Home/>
 
  );
}

export default App;
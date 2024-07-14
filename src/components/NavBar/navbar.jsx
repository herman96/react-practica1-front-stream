import { Link } from "react-router-dom";
import logo from './logo_practica1_unir.PNG';
import "./navbar.css";

function Nav() {
  return (
    <div class="ul-navbar">
      <a>
        <Link to="/"><img src={logo} className="logo" /></Link> 
      </a>
      <a></a>
      <Link to="Catalogo"><a>Directorio</a></Link>
      <div class="search-container">
        <input type="text" placeholder="Buscar.." name="search" />
        <button type="submit"><i class="fa fa-search"></i></button>
      </div>
    </div>
  );
}

export default Nav;
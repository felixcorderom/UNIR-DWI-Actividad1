import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../styles/navbar.scss';


function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__logo-link">
          <img src={require('../assets/logo.png')} alt="VirtualTek logo" className="navbar__logo-img" />
        </Link>
      </div>

      <nav className="navbar__menu">
        <Link to="/" className="navbar__link">Inicio</Link>
        <a href="#especializaciones" className="navbar__link">Especializaciones</a>
        <Link to="https://aula.virtualtek.academy/login/index.php" className="navbar__link">Aula Virtual</Link>
        <Link to="/contacto" className="navbar__link">Contacto</Link>
      </nav>

      <div className="navbar__actions">
        <FaSearch className="navbar__icon" />
        <Link to="/signin" className="navbar__signin">Sign in</Link>
      </div>
    </header>
  );
}

export default Navbar;

import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {

    function toggleMenu() {
        const menu = document.querySelector('.navbar-links');
        const toggleButton = document.querySelector('.menu-toggle');
        menu.classList.toggle('show');
        toggleButton.classList.toggle('active');
      }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">My Portfolio</Link>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>&#9776;</button>
    </nav>
  );
};

export default Navbar;

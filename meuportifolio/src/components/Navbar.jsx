import { useRef } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  function toggleMenu() {
    menuRef.current.classList.toggle('show');
    toggleRef.current.classList.toggle('open');
  }

  return (
    <nav className="navbar">
      <div className="typing-container">
        <h1 className="typing">&gt;&gt;&gt;print(&quot;Hello World!&quot;)</h1>
      </div>
      <ul className="navbar-links" ref={menuRef}>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div
        className="menu-wrapper"
        onClick={toggleMenu}
        ref={toggleRef}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

class Nav extends React.Component {
  render() {
    return (
        <header>
        <nav>
          <ul>
            <li>
              <Link to="/">About me</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;
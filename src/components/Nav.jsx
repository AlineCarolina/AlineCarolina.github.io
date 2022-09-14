import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../images/menu.svg';

import '../css/Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <header>
        <input type="checkbox" id="check"/>
        <label htmlFor="check">
          <img src={menu} alt="menu" id='menu'/>
        </label>
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
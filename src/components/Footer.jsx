import React from 'react';
import github from '../images/github.svg';
import gmail from '../images/gmail.svg';
import whatsapp from '../images/whatsapp.svg';

import linkedin from '../images/linkedin.svg';

import '../css/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <div id='contacts'>
            <img src={github} alt='github'/>
            <img src={gmail} alt='gmail'/>
            <img src={linkedin} alt='linkedin'/>
            <img src={whatsapp} alt='whatsapp'/>
          </div>
          <p id="aline-copyright">© Aline Carolina 2022</p>
        </footer>
      </>
    );
  }
}

export default Footer;
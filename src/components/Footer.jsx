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
        <footer id="footer">
          <div id='contacts'>
            <a href="https://github.com/AlineCarolina" target='_blank' rel="noreferrer">
              <img src={github} alt='github'/>
            </a>
            <a href="mailto:eualine2017@gmail.com" target='_blank' rel="noreferrer" >
              <img src={gmail} alt='gmail'/>
            </a>
            <a href="https://linkedin.com/in/alinecarolina2022" target='_blank' rel="noreferrer">
              <img src={linkedin} alt='linkedin'/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5544988342697&text=Olá, vi seu portifólio ..." target='_blank' rel="noreferrer">
              <img src={whatsapp} alt='whatsapp'/>
            </a>
          </div>
          <p id="aline-copyright">© Aline Carolina 2022</p>
        </footer>
      </>
    );
  }
}

export default Footer;
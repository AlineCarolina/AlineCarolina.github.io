import React, { Component } from 'react';
import github from '../images/github.svg';
import gmail from '../images/gmail.svg';
import whatsapp from '../images/whatsapp.svg';
import linkedin from '../images/linkedin.svg';

import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div id="contacts">
            <a href="https://github.com/AlineCarolina" target='_blank' rel="noreferrer">
              <img src={github} alt='github' className='svg-contacts'/>
            </a>
            <a href="mailto:eualine2017@gmail.com" target='_blank' rel="noreferrer" >
              <img src={gmail} alt='gmail' className='svg-contacts'/>
            </a>
            <a href="https://linkedin.com/in/alinecarolina2022" target='_blank' rel="noreferrer">
              <img src={linkedin} alt='linkedin' className='svg-contacts'/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5544988342697&text=Olá, vi seu portifólio ..." target='_blank' rel="noreferrer">
              <img src={whatsapp} alt='whatsapp' className='svg-contacts'/>
            </a>
          </div>
          <p id="aline-copyright">© Aline Carolina 2022</p>
        </footer>
      </>
    );
  }
}

export default Footer;
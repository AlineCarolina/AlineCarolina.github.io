import React from 'react';
import gmail from '../images/gmail.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import whatsapp from '../images/whatsapp.png';

import '../css/Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div id="div-contact">
        <h2>Contact me!</h2>
        <div id="div-links">
          <a href="mailto:eualine2017@gmail.com" target='_blank' rel="noreferrer" >
            <img src={gmail} alt="gmail" id="gmail-image"/>
          </a>
          <a href="https://linkedin.com/in/alinecarolina2022" target='_blank' rel="noreferrer">
            <img src={linkedin} alt="linkedin" id="linkedin-image"/>
          </a>
          <a href="https://github.com/AlineCarolina" target='_blank' rel="noreferrer">
            <img src={github} alt="github" id="github-image"/>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5544988342697&text=Olá, vi seu portifólio ..." target='_blank' rel="noreferrer">
            <img src={whatsapp} alt="whatsaap" id="whatsapp-image"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
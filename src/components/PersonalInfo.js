import React from 'react';
import profilePhoto from '../images/profilePhoto.png';
import githubIcon from '../images/github.svg';

import './PersonalInfo.css';

class PersonalInfo extends React.Component {
  render() {
    return (
      <aside id="personal-info">
        { <img src={ profilePhoto } alt="Aline Carolina" width="200px" /> }
        <h2>Aline Carolina</h2>
        <p>Avenida Mário Clapier Urbinatti, 724 - Maringá - PR</p>
        <p>(+55) 4498834-2697</p>
        <p>eualine2017@gmail.com</p>
        <p>
          { <a href="https://github.com/AlineCarolina" target="_blank" rel="noopener noreferrer">
            <img src={ githubIcon } alt="GitHub" width="25px" />
          </a> }
        </p>
      </aside>
    );
  }
}

export default PersonalInfo;
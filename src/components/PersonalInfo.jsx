import React from 'react';
import profilePhoto from '../images/profilePhoto.png';
import helloWorld from '../images/helloWorld.gif';

import '../css/PersonalInfo.css';

class PersonalInfo extends React.Component {
  render() {
    return (
      <div id="pricipal-div">
        <img src={helloWorld} alt="hello world" id="hello-world-image"/>  
        <article id="text-article">
          <img src={profilePhoto} alt="Aline" id="profile-image"/>
          <p>
            Hello, my name is Aline, I'm 22 years old and I'm a Full-Stack developer.
          </p>
          <p>
            I have always enjoyed learning a lot, I seek knowledge in several areas, mainly related to science and technology
          </p>
          <p>
            I believe that technology can increasingly change people's lives for the better, both as a rewarding job (which gave my life meaning), and as a solution to problems we face or will face.
          </p>
          <p>
            As a developer I have knowledge in the following technologies: JavaScript, HTML, CSS, React.js, Redux, Typescript, Docker, Node.js, Express.js, MySQL, React Testing Library, Mocha, Chai, Jest, Sinon, etc.
          </p>
        </article>
      </div>
    );
  }
}
    
export default PersonalInfo;
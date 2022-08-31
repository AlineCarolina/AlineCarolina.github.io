import React from 'react';
import avatar from '../images/aline-avatar.png';
import ilustracao1 from '../images/ilustracao1.png';
import ilustracao2 from '../images/ilustracao2.png';

import '../css/PersonalInfo.css';
import Footer from './Footer';

class PersonalInfo extends React.Component {
  render() {
    return (
      <div id="pricipal-div">
        <section id="pricipal-section">
          <article id="text-article">
            <h1>Hello World!</h1>
            <p>I'm Aline, Full-Stack Developer</p>
            <img src={avatar} alt='avatar' id='avatar'/>
            <div className="div-article">
              <img src={ilustracao1} alt='ilustração de pessoas montando um quebra-cabeça' className='ilustracao'/>
              <p className='p-div'>
              Hello, my name is Aline, I'm 22 years old and I'm a Full-Stack developer.<br/>
              I have always enjoyed learning a lot, I seek knowledge in several areas, mainly related to science and technology
              </p>
            </div>
            <div className="div-article">
              <p className='p-div'>
                I believe that technology can increasingly change people's lives for the better, both as a rewarding job (which gave my life meaning), and as a solution to problems we face or will face.
                <br/>
                As a developer I have knowledge in the following technologies: JavaScript, HTML, CSS, React.js, Redux, Typescript, Docker, Node.js, Express.js, MySQL, React Testing Library, Mocha, Chai, Jest, Sinon, etc.
              </p>
              <img src={ilustracao2} alt='ilustração de pessoas montando um quebra-cabeça' className='ilustracao'/>
            </div>
          </article>
        </section>
        <Footer />
      </div>
      
    );
  }
}
    
export default PersonalInfo;
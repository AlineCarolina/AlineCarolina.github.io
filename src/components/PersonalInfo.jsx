import React from 'react';
import avatar from '../images/aline-avatar.png';
import ilustracao1 from '../images/ilustracao1.png';
import ilustracao2 from '../images/ilustracao2.png';
import ilustracao3 from '../images/ilustracao3.png';

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
              Hi, my name is Aline, I'm 22 years old and I'm a Full-Stack developer.
              From childhood
              I was always very curious and liked to learn new things.
              Over the years I became more and more interested in understanding how the world works with philosophy, history, physics, chemistry, astronomy, etc.
              But when I started studying computer science my mind exploded.
              </p>
            </div>
            <div className="div-article">
              <p className='p-div'>
                Every scientific discovery made throughout history has contributed to humanity's most incredible invention: the computer. A machine intended for data processing, capable of obeying instructions that produce transformations in that data to achieve a certain end.<br/>
                It sounds a little poetic, and it is. 
                {/* I believe that technology can increasingly change people's lives for the better, both as a rewarding job (which gave my life meaning), and as a solution to problems we face or will face.
                <br/>
                As a developer I have knowledge in the following technologies: JavaScript, HTML, CSS, React.js, Redux, Typescript, Docker, Node.js, Express.js, MySQL, React Testing Library, Mocha, Chai, Jest, Sinon, etc. */}
              </p>
              <img src={ilustracao2} alt='ilustração de pessoas montando um quebra-cabeça' className='ilustracao'/>
            </div>
            <div className="div-article">
              <img src={ilustracao3} alt='ilustração de pessoas montando um quebra-cabeça' className='ilustracao'/>
              <p className='p-div'>
                That's why I love my job. Programming transcends the human ability to solve problems, and this has revolutionized the world in many different ways.
                <br/>
                For me to be a part of it is extremely enriching as a human being and rewarding as a professional.
              </p>
            </div>
          </article>
        </section>
        <Footer />
      </div>
      
    );
  }
}
    
export default PersonalInfo;
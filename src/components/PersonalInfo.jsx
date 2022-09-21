import React, { Component } from 'react';
import avatar from '../images/aline-avatar.png';
import ilustracao1 from '../images/ilustracao1.png';
import ilustracao2 from '../images/ilustracao2.png';
import ilustracao3 from '../images/ilustracao3.png';
import '../css/PersonalInfo.css';

class PersonalInfo extends Component {
  render() {
    return (
      <article className="text-article">
        <h1>Hello World!</h1>
        <p>I'm Aline, Full-Stack Developer</p>
        <img src={avatar} alt="avatar" id="avatar"/>
        <div className="div-article">
          <img src={ilustracao1} alt="ilustração de pessoas montando um quebra-cabeça" className="ilustracao"/>
          <p className="p-div">
          Hi, my name is Aline, I'm 22 years old and I'm a Full-Stack developer.
          From childhood
          I was always very curious and liked to learn new things.
          Over the years I became more and more interested in understanding how the world works with philosophy, history, physics, chemistry, astronomy, etc.
          But when I started studying computer science it was mind blowing.
          </p>
        </div>
        <div className="div-article">
          <p className="p-div">
          Every scientific discovery made throughout history has contributed to humanity's most incredible invention: the computer. A machine intended for data processing, capable of obeying instructions that produce transformations in that data to achieve a certain end.<br/>
          It sounds a little poetic, and it is.
          </p>
          <img src={ilustracao2} alt="ilustração de pessoas montando uma pagina web" className="ilustracao"/>
        </div>
        <div className="div-article">
          <img src={ilustracao3} alt="pessoas em volta de um computador" className="ilustracao"/>
          <p className="p-div">
          That's why I love my job. Programming transcends the human ability to solve problems, and this has revolutionized the world in many different ways.
          <br/>
          For me to be a part of it is extremely enriching as a human being and rewarding as a professional.
          </p>
        </div>
      </article>
    );
  }
}
    
export default PersonalInfo;
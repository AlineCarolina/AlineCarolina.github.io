import React from 'react';
import svg from '../images/web-development.svg';
import database from '../images/database.svg';
import Nav from './Nav';
import gif from '../images/engrenagens.gif';
import back from '../images/development-backend.svg';
import cloud from '../images/cloud.svg';
import checked from '../images/checked.svg';
import tools from '../images/tools.svg'

import '../css/Skills.css';

const basic = 'Basic';
const intermediate = 'Intermediary';
const advanced = 'Advanced';

class Skills extends React.Component {
  render() {
    return (  
      <div id="div-skills">
        <section id="section-header">
          <Nav />
          <article id="text-article">
            <h1>Skills</h1>
            <p id="p-skill">
              Below are some of the languages, tools, <br />technologies and methodologies that I have experience.
            </p>
            <img src={gif} alt='' id='gif-img'/>
          </article>
          <img src={svg} alt='' id='svg-img'/>
          <img src={database} alt='' id='svg-img'/>
          <img src={back} alt='' id='svg-img'/>
          <img src={cloud} alt='' id='svg-img'/>
          <img src={checked} alt='' id='svg-img'/>
          <img src={tools} alt='' id='svg-img'/>
          
          <section id="skills">
            <h3>HTML</h3>
            <div className="progress">
              <div className="step complete">{ basic }</div>
              <div className="step complete">{ intermediate }</div>
              <div className="step complete">{ advanced }</div>
            </div>

            <h3>CSS</h3>
            <div className="progress">
              <div className="step complete">{ basic }</div>
              <div className="step complete">{ intermediate }</div>
              <div className="step">{ advanced }</div>
            </div>

            <h3>JavaScript</h3>
            <div className="progress">
              <div className="step complete">{ basic }</div>
              <div className="step complete">{ intermediate }</div>
              <div className="step">{ advanced }</div>
            </div>

            <h3>Git e GitHub</h3>
            <div className="progress">
              <div className="step complete">{ basic }</div>
              <div className="step complete">{ intermediate }</div>
              <div className="step">{ advanced }</div>
            </div>

            <h3>Unit and Integration Tests</h3>
            <div className="progress">
              <div className="step complete">{ basic }</div>
              <div className="step complete">{ intermediate }</div>
              <div className="step">{ advanced }</div>
            </div>

            <h3>React</h3>
            <div className="progress">
              <div className="step complete">{ basic }</div>
              <div className="step complete">{ intermediate }</div>
              <div className="step">{ advanced }</div>
            </div>

            <h3>Redux</h3>
            <div className="progress">
              <div className="step complete">{ basic }</div>
              <div className="step">{ intermediate }</div>
              <div className="step">{ advanced }</div>
            </div>

            <h3>Docker</h3>
            <div className="progress">
              <div className="step complete">{ basic }</div>
              <div className="step complete">{ intermediate }</div>
              <div className="step">{ advanced }</div>
            </div>

            <h3>MySQL</h3>
            <div className="progress">
              <div className="step complete">{ basic }</div>
              <div className="step complete">{ intermediate }</div>
              <div className="step">{ advanced }</div>
            </div>

            <h3>Node.js</h3>
            <div className="progress">
              <div className="step complete">{ basic }</div>
              <div className="step complete">{ intermediate }</div>
              <div className="step">{ advanced }</div>
            </div>

            <h3>Typescript</h3>
            <div className="progress">
              <div className="step complete">{ basic }</div>
              <div className="step complete">{ intermediate }</div>
              <div className="step">{ advanced }</div>
            </div>

            <h3>MongoDB</h3>
            <div className="progress">
              <div className="step complete">{ basic }</div>
              <div className="step complete">{ intermediate }</div>
              <div className="step">{ advanced }</div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Skills;
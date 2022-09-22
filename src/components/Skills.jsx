import React, { Component } from 'react';
import svg from '../images/web-development.svg';
import database from '../images/database.svg';
import gif from '../images/engrenagens.gif';
import back from '../images/development-backend.svg';
import cloud from '../images/cloud.svg';
import checked from '../images/checked.svg';
import tools from '../images/tools.svg'

import '../css/Skills.css';

class Skills extends Component {
  render() {
    return (
      <>
        <article className="text-article">
          <h1>Skills</h1>
          <img src={gif} alt="gears turning" id="gif-img"/>
        </article>
        <div>
          <p className="p-text-article">
            Below are some of the languages, tools, technologies and methodologies that I have experience.
          </p>
        </div>
        <section id="section-skills">
          <div className="skill">
            <img src={svg} alt="Front-End development" className="svg-img"/>
            <h5>Front-End development</h5>
            <section className="languages">
              <p>HTML</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step complete"></div>
              </div>
              <p>CSS</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
              <p>JavaScript</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step complete"></div>
              </div>
              <p>React.js</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
              <p>Redux</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step"></div>
                <div className="step"></div>
              </div>
              <p>Context API</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
            </section>
          </div>
          <div className="skill">
            <img src={database} alt="Database" className="svg-img"/>
            <h5>Database</h5>
            <section className="languages">
              <p>MySQL</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step complete"></div>
              </div>
              <p>MongoDB</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
              <p>PostgreSQL</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step"></div>
                <div className="step"></div>
              </div>
              <p>MariaDB</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step"></div>
                <div className="step"></div>
              </div>
            </section>
          </div>
          <div className="skill">
            <img src={back} alt="Back-end development" className="svg-img"/>
            <h5>Back-end development</h5>
            <section className="languages">
              <p>Docker</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
              <p>Node.js</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step complete"></div>
              </div>
              <p>Typescript</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
              <p>Express.js</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step complete"></div>
              </div>
              <p>Sequelize</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
              <p>Mongoose</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
              <p>Phyton</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
            </section>
          </div>
          
          <div className="skill">
            <img src={cloud} alt="Cloud" className="svg-img"/>
            <h5>Cloud</h5>
            <section className="languages">
            <p>Vercel</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step complete"></div>
              </div>
            <p>Heroku</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
            <p>GitHub Pages</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
            <p>AWS</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step"></div>
                <div className="step"></div>
              </div>
            </section>
          </div>
          <div className="skill">
            <img src={checked} alt="Tests" className="svg-img"/>
            <h5>Tests</h5>
            <section className="languages">
              <p>Jest</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step complete"></div>
              </div>
              <p>React Testing Library</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
              <p>Mocha</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
              <p>Chai</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
              <p>Sinon</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
            </section>
          </div>
          <div className="skill">
            <img src={tools} alt="Tools" className="svg-img"/>
            <h5>Tools</h5>
            <section className="languages">
              <p>Git</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
              <p>Shell & Bash</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
              <p>Eslint</p>
              <div className="progress">
                <div className="step complete"></div>
                <div className="step complete"></div>
                <div className="step"></div>
              </div>
            </section>
          </div>
        </section>
      </>
    );
  }
}

export default Skills;
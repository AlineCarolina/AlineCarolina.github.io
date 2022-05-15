import React from 'react';

import '../styles/Skills.css';

const basic = 'Basic';
const intermediate = 'Intermediary';
const advanced = 'Advanced';

class Skills extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Skills;
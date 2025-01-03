import htmlSVG from "../assets/html5.svg";
import cssSVG from "../assets/css3.svg";
import javascriptSVG from "../assets/javascript.svg";
import reactSVG from "../assets/react.svg";
import rtlSVG from "../assets/reacttestinglibrary.svg";
import reduxSVG from "../assets/redux.svg";
import nodejsSVG from "../assets/nodejs.svg";
import typescriptSVG from "../assets/typescript.svg";
import mysqlSVG from "../assets/mysql.svg";
import mongodbSVG from "../assets/mongodb.svg";
import pythonSVG from "../assets/python.svg";
import dockerSVG from "../assets/docker.svg";
import sheetsSVG from "../assets/sheets.svg";
import RSVG from "../assets/R.svg";
import sqlSVG from "../assets/sql.svg";
import tableauSVG from "../assets/tableau.svg";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
    <h2 className="skills-h2">My Skills</h2>
    <div className="skills-container">
        <div className="skill-category">
        <h3>Front-End Development</h3>
        <ul>
            <li>
              <img src={htmlSVG} alt="HTML" />
              <span>HTML5</span>
            </li>

            <li>
              <img src={cssSVG} alt="CSS" />
              <span>CSS3</span>
            </li>

            <li>
              <img src={javascriptSVG} alt="JavaScript" />
              <span>JavaScript</span>
            </li>

            <li>
              <img src={reactSVG} alt="React.js" />
              <span>React.js</span>
            </li>

            <li>
              <img src={rtlSVG} alt="RTL" />
              <span>React Testing Library</span>
            </li>

            <li>
              <img src={reduxSVG} alt="React.js" />
              <span>Redux</span>
            </li>
        </ul>
        </div>

        <div className="skill-category">
        <h3>Back-End Development</h3>
        <ul>
            <li>
              <img src={nodejsSVG} alt="Node.js" />
              <span>Node.js</span>
            </li>
            
            <li>
              <img src={typescriptSVG} alt="TypeScript" />
              <span>TypeScript</span>
            </li>

            <li>
              <img src={mysqlSVG} alt="MySQL" />
              <span>MySQL</span>
            </li>

            <li>
              <img src={mongodbSVG} alt="MongoDB" />
              <span>MongoDB</span>
            </li>

            <li>
              <img src={pythonSVG} alt="Phyton" />
              <span>Phyton</span>
            </li>

            <li>
              <img src={dockerSVG} alt="Docker" />
              <span>Docker</span>
            </li>
        </ul>
        </div>

        <div className="skill-category">
        <h3>Data Analysis</h3>
        <ul>
          <li>
            <img src={sheetsSVG} alt="Sheets" />
            <span>Data Processing - Sheets</span>
          </li>

          <li>
            <img src={RSVG} alt="R" />
            <span>R</span>
          </li>

          <li>
            <img src={sqlSVG} alt="SQL" />
            <span>SQL</span>
          </li>

          <li>
            <img src={tableauSVG} alt="Tableau" />
            <span>Tableau</span>
          </li>
        </ul>
        </div>
    </div>
    </section>

  );
};

export default Skills;
import React, { Component } from 'react';
import ImgSound from '../images/project-sound-on.gif';
import ImgTrybewallet from '../images/project.gif';
import imgheader from '../images/imgprojectspage.png';
import vscodeimg from '../images/vscodeimg.jpg';
import imgstarwars from '../images/gifprojects.gif';

import '../css/Projects.css';

class Projects extends Component {
  render() {
    return (
      <>
        <article className="text-article">
          <h1>Projects</h1>
          <img src={imgheader} alt="woman using computer" id="header-img"/>
        </article>
        <div>
          <p className="p-text-article">
            Here are some proud projects that i have already developed.
          </p>
        </div>
        <ul id="ul-projects">
          <li className="li-projects">
            <a href="https://trybe-wallet-alinecarolina.vercel.app" target="_blank" rel="noreferrer" className="a-projects">
              <div className="div-img-h3">
                <h3>TrybeWallet</h3>
                <img src={ImgTrybewallet} alt="GIF do Trybewallet" className="img-project"/>
              </div>
              <p className="text-about-project">
                In this project, an expense control wallet with a currency converter was developed. By using this application the user can:
                  Add, remove and edit an expense;
                  View a table with your expenses;
                  View total spend converted to a currency of choice.
              </p>
            </a>
          </li>

          <li className="li-projects">
            <a href="https://star-wars-planets-search-alinecarolina.vercel.app/" target="_blank" rel="noreferrer" className="a-projects">
              <div className="div-img-h3">
                <h3>StarWars Planets Search</h3>
                <img src={imgstarwars} alt="GIF do StarWars Planets Search" className="img-project"/>
              </div>
              <p className="text-about-project">
              This React application receives from an API a list with data of planets from the Star Wars universe, there are also filters where it is possible:
                Search for a planet by name;
                Filter planets by specific features.
              </p>
            </a>
          </li>

          <li className="li-projects">
            <a href="https://sound-on-musics-alinecarolina.vercel.app/" target="_blank" rel="noreferrer" className="a-projects">
              <div className='div-img-h3'>
                <h3>Sound On - Musics</h3>
                <img src={ImgSound} alt="GIF do Projeto Sound On - Musics" className="img-project"/>
              </div>
              <p className="text-about-project">
              React application, using the Itunes API to play songs from the most varied bands and artists, create a list of favorite songs and edit the profile of the user logged in.
              </p>
            </a>
          </li>
          <li className="li-projects">
            <a href="https://github.com/AlineCarolina/Blogs-API" target="_blank" rel="noreferrer" className="a-projects">
              <div className="div-img-h3">
                <h3>Blogs API</h3>
                <img src={vscodeimg} alt="Imagem do Projeto 1" className="img-project" />
              </div>
              <p className="text-about-project">
              In this Back-end project I developed a CRUD API for blog posts. The API was built using Node.js, the MySQL database and ORM Sequelize.
              </p>
            </a>
          </li>
          <li className="li-projects">
            <a href="https://github.com/AlineCarolina/Trybesmith" target="_blank" rel="noreferrer" className="a-projects">
              <div className='div-img-h3'>
                <h3>Trybesmith</h3>
                <img src={vscodeimg} alt="Imagem do Projeto 2" className="img-project" />
              </div>
              <p className="text-about-project">
              For this project, I developed a CRUD (Create, Read, Update and Delete) of medieval items, in an API format, using Typescript and a MySQL database.
              </p>
            </a>
          </li>
        </ul>
      </>
    )
  }
}

export default Projects;
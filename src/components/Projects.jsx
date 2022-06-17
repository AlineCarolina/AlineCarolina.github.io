import React from 'react';
import ImgSound from '../images/project-sound-on.gif';

import '../css/Projects.css';

class Projects extends React.Component {
  render() {
    return (
      <section id="projects">
        <ul>
          <li>
            <a href='https://sound-on-musics-alinecarolina.vercel.app/' target='_blank' rel='noreferrer' id="img-sound-on">
              <div className='div-img-h3'>
                <h3>Sound On - Musics</h3>
                <img src={ImgSound} alt="GIF do Projeto Sound On - Musics" id="img-sound-on" />
              </div>
              <p>
              React application, using the Itunes API to play songs from the most varied bands and artists, create a list of favorite songs and edit the profile of the user logged in.
              </p>
            </a>
          </li>
          <li>
            <a href='https://github.com/AlineCarolina/Blogs-API' target='_blank' rel='noreferrer'>
              <div className='div-img-h3'>
                <h3>Blogs API</h3>
                <img src="https://picsum.photos/id/1/100/100" alt="Imagem do Projeto 1" />
              </div>
              <p>
              I architected and developed a CRUD API for blog posts (with Sequelize and following REST principles).
              </p>
            </a>
          </li>
          <li>
            <a href='https://github.com/AlineCarolina/Trybesmith' target='_blank' rel='noreferrer'>
              <div className='div-img-h3'>
                <h3>Trybesmith</h3>
                <img src="https://picsum.photos/id/2/100/100" alt="Imagem do Projeto 2" />
              </div>
              <p>
              For this project, I developed a CRUD (Create, Read, Update and Delete) of medieval items, in an API format, using Typescript and a MySQL database.
              </p>
            </a>
          </li>
          <li>
            <a href='https://github.com/AlineCarolina/StarWars' target='_blank' rel='noreferrer'>
              <div className='div-img-h3'>
                <h3>StarWars Search Planets</h3>
                <img src="https://picsum.photos/id/1/100/100" alt="Imagem do Projeto 3" />
              </div>
              <p>
              In this project, a list with filters of planets from the Star Wars universe was developed using Context API and Hooks to control global states.
              </p>
            </a>
          </li>
        </ul>
      </section>
    )
  }
}

export default Projects;
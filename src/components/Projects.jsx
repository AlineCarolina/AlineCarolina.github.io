import React from 'react';
import ImgSound from '../images/project-sound-on.gif';
import ImgTrybewallet from '../images/project.gif';
import Nav from './Nav';
import Footer from './Footer';
import imgheader from '../images/imgprojectspage.png';

import '../css/Projects.css';

class Projects extends React.Component {
  render() {
    return (
      <div id="div-projects">
        <section id="projects">
          <Nav />
          <article id="text-article">
            <h1>Projects</h1>
            <p id="p-projects">
            Here are some proud projects <br/>that i have already developed.
            </p>
            <img src={imgheader} alt='' id='header-img'/>
          </article>
          <ul id='ul-projects'>
            <li className='li-projects'>
              <a href='trybe-wallet-alinecarolina.vercel.app/' target='_blank' rel='noreferrer' className='a-projects'>
                <div className='div-img-h3'>
                  <h3 className='h3-name-project'>TrybeWallet</h3>
                  <img src={ImgTrybewallet} alt="GIF do Trybewallet" className='img-project'/>
                </div>
                <p className='text-about-project'>
                  In this project, an expense control wallet with a currency converter was developed. By using this application the user can:
                    Add, remove and edit an expense;
                    View a table with your expenses;
                    View total spend converted to a currency of choice.
                </p>
              </a>
            </li>
            <li className='li-projects'>
              <a href='https://sound-on-musics-alinecarolina.vercel.app/' target='_blank' rel='noreferrer' className='a-projects'>
                <div className='div-img-h3'>
                  <h3 className='h3-name-project'>Sound On - Musics</h3>
                  <img src={ImgSound} alt="GIF do Projeto Sound On - Musics" className='img-project'/>
                </div>
                <p className='text-about-project'>
                React application, using the Itunes API to play songs from the most varied bands and artists, create a list of favorite songs and edit the profile of the user logged in.
                </p>
              </a>
            </li>
            <li className='li-projects'>
              <a href='https://github.com/AlineCarolina/Blogs-API' target='_blank' rel='noreferrer' className='a-projects'>
                <div className='div-img-h3'>
                  <h3 className='h3-name-project'>Blogs API</h3>
                  <img src={ImgTrybewallet} alt="Imagem do Projeto 1" className='img-project' />
                </div>
                <p className='text-about-project'>
                In this Back-end project I developed a CRUD API for blog posts. The API was built using Node.js, the MySQL database and ORM Sequelize.
                </p>
              </a>
            </li>
            <li className='li-projects'>
              <a href='https://github.com/AlineCarolina/Trybesmith' target='_blank' rel='noreferrer' className='a-projects'>
                <div className='div-img-h3'>
                  <h3 className='h3-name-project'>Trybesmith</h3>
                  <img src={ImgTrybewallet} alt="Imagem do Projeto 2" className='img-project' />
                </div>
                <p className='text-about-project'>
                For this project, I developed a CRUD (Create, Read, Update and Delete) of medieval items, in an API format, using Typescript and a MySQL database.
                </p>
              </a>
            </li>
            <li className='li-projects'>
              <a href='https://github.com/AlineCarolina/StarWars' target='_blank' rel='noreferrer' className='a-projects'>
                <div className='div-img-h3'>
                  <h3 className='h3-name-project'>StarWars Search Planets</h3>
                  <img src={ImgTrybewallet} alt="Imagem do Projeto 3" className='img-project' />
                </div>
                <p className='text-about-project'>
                In this project, a list with filters of planets from the Star Wars universe was developed using Context API and Hooks to control global states.
                </p>
              </a>
            </li>
          </ul>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Projects;
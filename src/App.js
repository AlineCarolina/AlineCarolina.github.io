import './App.css';
import helloWorld from './images/helloWorld.gif';
import profilePhoto from './images/profilePhoto.png';
import contacts from './images/contacts.gif';

function App() {
  return (
    <div id="pricipal-div">
      <section id="section-image">
        <img src={profilePhoto} alt="Aline" id="profile-photo"/> 
        <img src={helloWorld} alt="hello world" id="hello-world-image"/>
      </section>
      <article id="text-article">
        <p>I have always enjoyed learning a lot, I seek knowledge in several areas, mainly related to science and technology</p>
        <p>I believe that technology can increasingly change people's lives for the better, both as a rewarding job (which gave my life meaning), and as a solution to problems we face or will face.</p>
        <p>As a developer I have knowledge in the following technologies: JavaScript, HTML, CSS, React.js, Redux, Typescript, Docker, Node.js, Express.js, MySQL, React Testing Library, Mocha, Chai, Jest, Sinon, etc.</p>
      </article>
      <section id="section-contacts">
        <img src={contacts} alt="contacts" id="contacts-image"/>
      </section>
      <div id="div-links">
        <p>Email: eualine2017@gmail.com</p>
        <a href="https://linkedin.com/in/alinecarolina2022" target="blank">Linkedin</a>
        <a href="https://github.com/AlineCarolina">GitHub</a>
        <p></p>
      </div>
      <footer id="footer-text">
        <p id="aline-copyright">©Aline Carolina 2022</p>
      </footer>
    </div>
  );
}

export default App;

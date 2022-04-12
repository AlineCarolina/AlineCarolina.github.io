import './App.css';
import profilePhoto from './profilePhoto.jpeg';

function App() {
  return (
    <div id="pricipalDiv">
      <img src={profilePhoto} alt="Foto de perfil" id="profilePhoto"/>
      <h1>HELLO THERE</h1>
      <h3>I'm Aline, developer full-stack</h3>
      <h4>About me</h4>
      <p>I have always enjoyed learning a lot, I seek knowledge in several areas, mainly related to science and technology</p>
      <p>I believe that technology can increasingly change people's lives for the better, both as a rewarding job (which gave my life meaning), and as a solution to problems we face or will face.</p>
      <p>As a developer I have knowledge in the following technologies: JavaScript, HTML, CSS, React.js, Redux, Typescript, Docker, Node.js, Express.js, MySQL, React Testing Library, Mocha, Chai, Jest, Sinon, etc.
</p>
    </div>
  );
}

export default App;

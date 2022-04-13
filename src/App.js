import './App.css';
import helloWorld from './images/helloWorld.gif';
import profilePhoto from './images/profilePhoto.png';

function App() {
  return (
    <div id="pricipal-div">
      <div id="div-image">
        <img src={profilePhoto} alt="profilePhoto" id="profile-photo" /> 
        <img src={helloWorld} alt="hello world" id="hello-world-image"/>
      </div>
      <h4>About me</h4>
      <p>I have always enjoyed learning a lot, I seek knowledge in several areas, mainly related to science and technology</p>
      <p>I believe that technology can increasingly change people's lives for the better, both as a rewarding job (which gave my life meaning), and as a solution to problems we face or will face.</p>
      <p>As a developer I have knowledge in the following technologies: JavaScript, HTML, CSS, React.js, Redux, Typescript, Docker, Node.js, Express.js, MySQL, React Testing Library, Mocha, Chai, Jest, Sinon, etc.</p>
    </div>
  );
}

export default App;

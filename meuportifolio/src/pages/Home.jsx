import "../styles/Home.css"
import typingBro from "../assets/code-typing-animate.svg"


const Home = () => {
  return (
    <div className="home">
      <div className="home-intro">
        <div>
          <h1 className="home-name">Aline Carolina</h1>
          <ul className="home-list">
            <li>Full Stack Developer</li>
            <li>Data Analyst</li>
            <li>Cybersecurity Analyst</li>
          </ul>
        </div>
      </div>
      <img src={typingBro} alt="someone typing" className="svg-typing"/>
    </div>
  );
};

export default Home;

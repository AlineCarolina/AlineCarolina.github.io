import "../styles/Home.css"
import picasrt from "../assets/Picsart.jpg";


const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text">
            <h1 className="home-name">Aline Carolina</h1>
            <ul className="home-list">
              <li>Full Stack Developer</li>
              <li>Data Analyst</li>
              <li>Cybersecurity Analyst</li>
            </ul>
          </div>
        <img
          src={picasrt}
          alt="an illustrated photo of Aline"
          className="home-image"
        />
        </div>
    </div>
  );
};

export default Home;

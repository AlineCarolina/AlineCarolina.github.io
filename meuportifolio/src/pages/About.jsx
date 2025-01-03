import ilustration from "../assets/Innovation.svg"
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-me-box">
        <div className="about-me-image">
          <img src={ilustration} alt="Illustration about me" />
        </div>
        <div className="about-me-content">
          <h2 className="about-me-title">About Me</h2>
          <p className="about-me-description">
          Hello! My name is Aline and I am <a href="https://www.credential.net/6963f35d-bc53-46c0-a474-bc7d96bba6c0" target="_blank" rel="noopener noreferrer"><span>Full Stack Developer</span></a>, <a href="https://coursera.org/share/fa712e7a03458ee7fd924583cf29544f" target="_blank" rel="noopener noreferrer"><span>Data Analyst</span></a> and <a href="https://coursera.org/share/785327f94e21163fc4be5ffacd63308a"  target="_blank" rel="noopener noreferrer"><span>Cybersecurity Analyst</span></a> passionate about technology and innovation. My mission is to create creative and secure solutions to complex problems, combining development skills, data analysis and digital security.
          </p>
          <p className="about-me-description">
          I love learning and am constantly updating my skills to stay ahead in an ever-evolving field. In my projects, I prioritize quality, performance and user experience.
          </p>
          <a href="#contact" className="about-me-button">Contact me</a>
        </div>
      </div>
    </section>
  );
};

  export default About;
  
import "../styles/Footer.css";
import githubSVG from "../assets/github.svg";
import likedinSVG from "../assets/linkedin.svg";
import x from "../assets/x.svg";

const Footer = () => {
    return (
      <footer className="footer" id="footer">
        <div className="footer-container">
          
          <div className="footer-section">
            <h4>Social media</h4>
            <ul className="social-links">
              <li><a href="https://github.com/AlineCarolina" target="_blank"><img src={githubSVG} alt="github logo"/>GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/alinecarolina2022/" target="_blank"><img src={likedinSVG} alt="Linkedin logo"/>LinkedIn</a></li>
              <li><a href="https://x.com/AlineCybersec" target="_blank"><img src={x} alt="Twitter logo"/>Twitter</a></li>
            </ul>
          </div>

          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="social-links">
              <li>Email:<a href="mailto:eualine2025@gmail.com">eualine2025@gmail.com</a></li>
              <li>Telephone: +55(44) 9 8834-2697</li>
            </ul>
          </div>
        </div>

        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aline Carolina. All rights reserved.</p>
        </div>
      </footer>

    );
  };
  
  export default Footer;
  
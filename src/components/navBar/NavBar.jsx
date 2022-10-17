import './navBar.css';
import { faLinkedinIn, faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Chinmaya Garg</span>
        <div className="navIcons">
          <a
            style={{ color: 'gray' }}
            href="https://www.linkedin.com/in/chinmayagarg/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="linkedin" />
          </a>
          <a style={{ color: 'gray' }} href="https://github.com/ChinmayaGarg" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="github" />
          </a>
          <a
            style={{ color: 'gray' }}
            href="https://www.facebook.com/chinmaya.garg.1/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} className="facebook" />
          </a>
        </div>
        <div className="navItems">
          <a
            href={require('../../data/Resume_Chinmaya.pdf')}
            download="Chinmaya_Resume"
            target="_blank"
            rel="noreferrer"
          >
            <button className="neon-button">RESUME</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

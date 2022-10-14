import './navBar.css';
import { faLinkedinIn, faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Chinmaya Garg</span>
        <div className="navIcons">
          <FontAwesomeIcon icon={faLinkedinIn} className="linkedin" />
          <FontAwesomeIcon icon={faGithub} className="github" />
          <FontAwesomeIcon icon={faFacebookF} className="facebook" />
        </div>
        <div className="navItems">
          <button className="neon-button">RESUME</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

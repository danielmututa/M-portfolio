import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          Daniel.
        </Link>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}><a href="#about">About</a></li>
          <li className={styles.navItem}><a href="#skills">Skills</a></li>
          <li className={styles.navItem}><a href="#portfolio">Works</a></li>
          <li className={styles.navItem}><a href="#resume">Resume</a></li>
        </ul>
        <a href="#contact" className={styles.contactBtn}>Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;

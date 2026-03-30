import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
          <h2 className={styles.footerTitle}>Let's create something<br/>beautiful together.</h2>
          <a href="mailto:mututadaniel54@gmail.com" className="btn-primary">Get in touch</a>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.footerBrand}>
            Daniel.<br/>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', display: 'block' }}>
              Phone: 0778113137
            </span>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/daniel-mututa-7483032aa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/danielmututa" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Daniel. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

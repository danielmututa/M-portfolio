import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={`container ${styles.aboutContainer}`}>
        <motion.div 
          className={styles.imageColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/Me.jpg" 
            alt="Daniel - Portrait" 
            className={styles.aboutImage}
          />
          <div className={styles.imageDecoration}></div>
        </motion.div>

        <motion.div 
          className={styles.contentColumn}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-subtitle">About Me</span>
          <h2 className={styles.title}>Full-Stack Developer building modern, responsive applications</h2>
          
          <div className={styles.description}>
            <p>
              Hi, I’m Daniel Mututa, a Full-Stack Developer building modern, responsive web and mobile applications. 
              I work with React, Next.js, React Native, Node.js, Express, Java, Kotlin, Laravel, MongoDB, and PostgreSQL 
              to create scalable, secure, and high-performance solutions.
            </p>
            <p>
              I combine UX/UI design and digital marketing principles to deliver intuitive, user-friendly interfaces 
              optimized for engagement and growth. My goal is to help businesses turn ideas into powerful digital products 
              that drive results.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statItem}>
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statItem}>
              <h3>4+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

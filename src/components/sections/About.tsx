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
            src="https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=800&auto=format&fit=crop" 
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
          <h2 className={styles.title}>Crafting digital experiences with passion & precision</h2>
          
          <div className={styles.description}>
            <p>
              Hi, I'm Daniel. I'm a passionate visual and product designer based in the creative hub of innovation. 
              My journey in design started with a fascination for how aesthetics meet functionality.
            </p>
            <p>
              I specialize in creating beautiful, intuitive interfaces that not only look stunning but also 
              deliver seamless user experiences. Over the past few years, I've had the privilege of working 
              with startups and established brands to bring their visions to life.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statItem}>
              <h3>20+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import styles from './Skills.module.css';

// User's specific tech stack
const row1 = [
  "HTML5", "CSS3", "Tailwind", "Typscript", "JavaScript", 
  "React.js", "Next.js", "React Native", "AndroidStudio"
];

const row2 = [
  "Node.js", "Express", "Fastify", "PHP", "Laravel", "Java", 
  "Mongo DB", "MY SQL", "GraphQL", "PostgreSQL", "Zod", "bcrypt", "Argon2"
];

// We duplicate the arrays to create a seamless infinite loop
const doubleRow1 = [...row1, ...row1, ...row1];
const doubleRow2 = [...row2, ...row2, ...row2];

const Skills = () => {
  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container" style={{ paddingBottom: '3rem' }}>
        <div className={styles.header}>
          <motion.span 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            My Arsenal
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive Tech Stack
          </motion.h2>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        {/* Row 1 - Moves Left */}
        <div className={styles.marqueeTrack}>
          <motion.div 
            className={styles.marqueeContent}
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {doubleRow1.map((skill, idx) => (
              <div key={idx} className={styles.skillPill}>
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className={`${styles.marqueeTrack} ${styles.trackReverse}`}>
          <motion.div 
            className={styles.marqueeContent}
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            {doubleRow2.map((skill, idx) => (
              <div key={idx} className={`${styles.skillPill} ${styles.pillAccent}`}>
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

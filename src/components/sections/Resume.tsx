import { motion } from 'framer-motion';
import styles from './Resume.module.css';
import { Download, FileText, Award } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className={`section ${styles.resumeSection}`}>
      <div className="container">
        <div className={styles.resumeContainer}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">Credentials</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>View my full background</h2>
            <p className={styles.resumeDescription}>
              Interested in the finer details of my career, education, and specific achievements? 
              You can download my full curriculum vitae, a motivational letter outlining my design 
              philosophy, and various certifications I've acquired over the years.
            </p>
          </motion.div>

          <motion.div 
            className={styles.downloadGrid}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="/Daniel Mutandwa Mututa CV (4.2).pdf" download="Daniel_Mututa_CV.pdf" className={styles.downloadCard}>
              <div className={styles.iconWrapper}>
                <FileText size={28} />
              </div>
              <div className={styles.cardInfo}>
                <h3>Curriculum Vitae</h3>
                <p>PDF</p>
              </div>
              <div className={styles.downloadIcon}>
                <Download size={20} />
              </div>
            </a>

            <a href="#" className={styles.downloadCard}>
              <div className={styles.iconWrapper}>
                <FileText size={28} />
              </div>
              <div className={styles.cardInfo}>
                <h3>Motivational Letter</h3>
                <p>PDF, 1.1 MB</p>
              </div>
              <div className={styles.downloadIcon}>
                <Download size={20} />
              </div>
            </a>

            <a href="#" className={styles.downloadCard}>
              <div className={styles.iconWrapper}>
                <Award size={28} />
              </div>
              <div className={styles.cardInfo}>
                <h3>Certificates & Awards</h3>
                <p>ZIP, 15.2 MB</p>
              </div>
              <div className={styles.downloadIcon}>
                <Download size={20} />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

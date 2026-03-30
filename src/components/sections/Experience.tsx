import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    company: "Microsoft Learn",
    role: "Software Engineer (Badges)",
    period: "2025 - Present",
    description: "Earned several official badges from Microsoft, demonstrating commitment to continuous learning and validating foundational/practical knowledge in cloud computing."
  },
  {
    id: 2,
    company: "Procode Platform",
    role: "Frontend Developer",
    period: "Mar 2025 - May 2025",
    description: "Designed and integrated Caserover, an AI-powered web solution for lawyers using React, TypeScript, TailwindCSS, and Node.js. Used Zod for validation and processed 5,000+ legal documents via Python3 scraping."
  },
  {
    id: 3,
    company: "Algebra Technologies",
    role: "Full Stack Developer",
    period: "Oct 2024 - Present",
    description: "Developed Android apps using Java and Kotlin in Android Studio. Created websites and provided technical support including email management, PC troubleshooting, and Windows installation."
  },
  {
    id: 4,
    company: "Freelance",
    role: "Web Developer",
    period: "Recent",
    description: "Developed strategic-builders.co.zw for a company with 10 years of experience, delivering a robust digital solution."
  }
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className={`section ${styles.experienceSection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className={styles.timelineContainer} ref={containerRef}>
          {/* The Animated Line */}
          <div className={styles.lineWrapper}>
            <svg className={styles.svgLine} viewBox="0 0 100 1000" preserveAspectRatio="none">
              <motion.line 
                x1="50" y1="0" x2="50" y2="1000" 
                stroke="var(--accent-primary)" 
                strokeWidth="4" 
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className={styles.timelineList}>
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className={styles.timelineNode}>
                  {/* The dot on the timeline */}
                  <motion.div 
                    className={styles.timelineDot}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                  />
                  
                  {/* Content card */}
                  <motion.div 
                    className={`${styles.timelineContent} ${isEven ? styles.contentLeft : styles.contentRight}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  >
                    <span className={styles.period}>{exp.period}</span>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                    <p className={styles.description}>{exp.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

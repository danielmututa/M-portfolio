import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    company: "Procode Platform",
    role: "Frontend Designer",
    period: "2019 - 2020",
    description: "Started my journey focused on creating beautiful, responsive frontend interfaces and establishing core design systems."
  },
  {
    id: 2,
    company: "Algebra Technologies",
    role: "Full Stack Developer",
    period: "2020 - 2021",
    description: "Expanded my expertise into full-stack development, bridging the gap between stunning UI and robust backend architecture."
  },
  {
    id: 3,
    company: "Econet",
    role: "Software Engineer",
    period: "2021 - 2022",
    description: "Worked on high-scale telecommunication applications, optimizing performance and delivering critical features to millions of users."
  },
  {
    id: 4,
    company: "Swift",
    role: "Senior Developer",
    period: "2022 - 2023",
    description: "Led development teams to build complex financial applications, ensuring security, reliability, and an intuitive user experience."
  },
  {
    id: 5,
    company: "Swiftmobiles",
    role: "Lead Engineer / Designer",
    period: "Present",
    description: "Currently leading product design and engineering, shaping the future of mobile experiences with king-level aesthetics."
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

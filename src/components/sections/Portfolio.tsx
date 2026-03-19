import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Portfolio.module.css';

const projects = [
  { id: 1, title: "Artemis & Artemis Rebrand", category: "Brand Strategy", image: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Eco Fintech Platform", category: "Product Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Ableton Springs App", category: "Mobile Design", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Cassie & Henry Event", category: "Typography / Print", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Procode Dashboard", category: "UI/UX Architecture", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Algebra Tech Portal", category: "Full Stack Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
  { id: 7, title: "Econet 5G Campaign", category: "Digital Marketing", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" },
  { id: 8, title: "Swift Financial App", category: "Fintech Mobile", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop" },
  { id: 9, title: "Organic Essence", category: "E-Commerce", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop" },
  { id: 10, title: "Lunar Architecture", category: "Web Design", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
  { id: 11, title: "Neo Banking App", category: "UI/UX Prototyping", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" },
  { id: 12, title: "Swiftmobiles Showcase", category: "Interactive Web", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" }
];

const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Start with 4 projects to solve the 50+ scroll issue

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, projects.length));
  };

  return (
    <section id="portfolio" className={`section ${styles.portfolioSection}`}>
      <div className="container">
        <div className={styles.header}>
          <motion.span 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Selected Works
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A sneak peek of my works
          </motion.h2>
        </div>

        <motion.div layout className={styles.projectGrid}>
          <AnimatePresence>
            {projects.slice(0, visibleCount).map((project, idx) => (
              <motion.div 
                layout // Enables fluid layout animations when grid expands
                key={project.id} 
                className={styles.projectCard}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  type: "spring", 
                  bounce: 0.3,
                  delay: (idx % 4) * 0.1 // Stagger newly loaded items
                }}
              >
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <div className={styles.overlay}>
                    <Link to={`/project/${project.id}`} className={styles.viewBtn}>View Case Study</Link>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <p className={styles.projectCategory}>{project.category}</p>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < projects.length && (
          <motion.div 
            layout 
            className={styles.loadMoreWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button onClick={handleShowMore} className="btn-secondary">
              Load More Works
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

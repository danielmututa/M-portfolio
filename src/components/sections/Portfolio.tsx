import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Portfolio.module.css';

const projects = [
  { id: 1, title: "ACCERSTUS", category: "Digital Marketing", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop", description: "Accerstus is a digital marketing agency similar to NP Digital, offering comprehensive strategies for online growth. Currently in progress.", link: "https://accerstus.co.zw/", actionType: "In Progress" },
  { id: 2, title: "AFROBITES", category: "Mobile App Website", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", description: "Afrobites is a dedicated website where users can easily download our mobile application for food ordering and delivery services.", link: "https://afrobiteszim.com/", actionType: "Download app" },
  { id: 3, title: "ZIMNEXT-SOLUTIONS", category: "Tech Solutions", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", description: "Zimnext Solutions is a Zimbabwe-based company that offers innovative web development, digital marketing, and tech solutions tailored to local and international business needs, driving growth and digital transformation.", link: "https://www.zimnextsolutions.co.zw/", actionType: "View Website" },
  { id: 4, title: "SWIFT MOBILES", category: "Mobile E-commerce", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop", description: "An upcoming platform for mobile devices and accessories. Still in development to provide a seamless shopping experience.", link: "https://demo.cservegroup.com/swiftmobile/", actionType: "In Progress" },
  { id: 5, title: "ASTROMOBILES", category: "Mobile Enterprise", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop", description: "Astro mobiles are a brand of smartphones and mobile devices, primarily associated with V3 Mobile and Mobicel in certain regions. In Zimbabwe, Astro Mobile is actively involved in providing affordable smartphones and mobile solutions to the local market.", link: "https://www.astromobile.io/", actionType: "View Website" },
  { id: 6, title: "Multimart Online Shop", category: "E-commerce Platform", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop", description: "Multimart is a user-friendly e-commerce platform built with React and TailwindCSS, designed to make online shopping effortless. Browse products, add to cart, purchase securely with integrated payment gateways, and track orders in real time.", link: "https://mmshop.co.zw", actionType: "View Website" },
  { id: 7, title: "STRATEGIC BUILDERS", category: "Construction Firm", image: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=800&auto=format&fit=crop", description: "Showcasing the Strategic Builders company, a construction firm with over 10 years of experience in residential, commercial, and renovation projects. Includes project galleries, service details, and client testimonials.", link: "https://www.strategic-builders.co.zw/", actionType: "View Website" },
  { id: 8, title: "ALPHA BUSINESS SERVICES", category: "Corporate Registration", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop", description: "Alpha Business Services (ABS) provides professional company registration and corporate services to help businesses establish and grow.", link: "https://abs.org.zw/", actionType: "View Website" },
  { id: 9, title: "HR SYSTEM", category: "Corporate Software", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop", description: "A comprehensive Human Resources management system for handling employee records, payroll, and performance tracking. Currently in development.", link: "#", actionType: "In Progress" },
  { id: 10, title: "OMINIVIEW", category: "Telecommunications & Energy", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", description: "Introducing OMINIVIEW! I've built a cutting-edge platform for telecommunications, solar energy, and electronics repair using React, Node.js, Express, and MongoDB. It streamlines operations, manages customer data, and provides real-time analytics for better decision-making.", link: "https://ominiview.netlify.app/", actionType: "Comming Soon" },
  { id: 11, title: "PREPAID LOCK UP", category: "Security Application", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop", description: "Still developing a secure Prepaid Lock Up feature for smartphones, designed to protect your device and data. The system will allow you to lock your device remotely and manage access securely.", link: "#", actionType: "Download app" },
  { id: 12, title: "TAFFY GRAPHICS DESIGN", category: "Design Portfolio", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop", description: "A creative portfolio showcasing graphic design work, branding, and visual identity projects. The website is currently in progress.", link: "https://taffy-graphics-design.vercel.app/", actionType: "In Progress" },
  { id: 13, title: "PINTEL", category: "Hospitality Application", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop", description: "Pintel is a comprehensive application designed for restaurants, hotel bookings, lodges, and staff management to streamline operations.", link: "https://expo.dev/accounts/mututadaniel/projects/FoodApplication/builds/58a3b111-c924-44f6-8d1e-357e4cce3b26", actionType: "Download app" },
  { id: 14, title: "TATENDA CHISADZA", category: "Personal Portfolio", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop", description: "A personal portfolio website for Tatenda Chisadza showcasing professional skills, experience, and projects.", link: "https://tatendachisadza.vercel.app/", actionType: "View Website" },
  { id: 15, title: "BOOTSTRAP Portfolio", category: "Web Development", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", description: "Highlighting my web development proficiency with HTML, CSS, and JavaScript, focusing on responsive layouts, clean code, and engaging user interactions. Developed it in the first month of 2024 without AI, back when I was not able to configure full sites.", link: "https://danielmututa.github.io/Bootstrape-portfolio/", actionType: "View Website" }
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
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
                      {project.actionType}
                    </a>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <p className={styles.projectCategory}>{project.category}</p>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.5' }}>
                    {project.description}
                  </p>
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

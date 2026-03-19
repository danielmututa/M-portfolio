import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import styles from './ProjectDetail.module.css';

// Using a mock database of projects since there are over 110 of them
const projectsData: Record<string, any> = {
  "1": {
    title: "Artemis & Artemis Rebrand",
    category: "Brand Strategy / Visual Design",
    client: "Artemis Studio",
    year: "2023",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=1200&auto=format&fit=crop",
    overview: "A complete overhaul of the Artemis visual identity, focusing on blending organic natural beauty with digital precision.",
    challenge: "The client needed a fresh perspective that didn't alienate their existing high-end customer base while appealing to Gen Z startups.",
    solution: "We developed a fluid, motion-first design system utilizing robust typography and dynamic layouts."
  },
  "2": {
    title: "Eco Fintech Platform",
    category: "Product Design / UI/UX",
    client: "EcoFin Corp",
    year: "2023",
    role: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    overview: "Designing a next-generation dashboard that makes tracking carbon offset investments intuitive and rewarding.",
    challenge: "Financial dashboards are notoriously cluttered. The goal was simplicity without losing power-user features.",
    solution: "We applied progressive disclosure techniques and a strict monochromatic color system accented by organic greens."
  },
  "3": {
    title: "Ableton Springs App",
    category: "Mobile Design / Interaction",
    client: "Ableton Springs",
    year: "2022",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1200&auto=format&fit=crop",
    overview: "A seamless mobile booking and exploration experience for a luxury wellness retreat.",
    challenge: "Integrating a complex booking engine into a serene, distraction-free mobile application.",
    solution: "Created a wizard-led journey accompanied by majestic micro-interactions that calm the user."
  },
  "4": {
    title: "Cassie & Henry Event",
    category: "Typography / Print",
    client: "C&H",
    year: "2021",
    role: "Art Director",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    overview: "Bespoke print design and digital companion site for an exclusive gathering.",
    challenge: "Merging classical typographic rules with modern digital accessibility requirements.",
    solution: "A beautiful intersection of serif fonts and high-contrast layouts translated from paper to screen."
  },
  "5": { title: "Procode Dashboard", category: "UI/UX Architecture", client: "Procode", year: "2023", role: "UX Lead", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop", overview: "Detailed analytics dashboard.", challenge: "Data overload.", solution: "Streamlined visuals." },
  "6": { title: "Algebra Tech Portal", category: "Full Stack Development", client: "Algebra", year: "2023", role: "Full Stack Dev", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", overview: "Internal company portal.", challenge: "Legacy system integration.", solution: "Microservices architecture via Next.js." },
  "7": { title: "Econet 5G Campaign", category: "Digital Marketing", client: "Econet", year: "2022", role: "Frontend Dev", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop", overview: "High-impact landing page.", challenge: "Aggressive timeline.", solution: "Framer Motion driven animations." },
  "8": { title: "Swift Financial App", category: "Fintech Mobile", client: "Swift", year: "2022", role: "Senior Dev", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1200&auto=format&fit=crop", overview: "Secure banking app.", challenge: "Security UX.", solution: "Biometric login flows." },
  "9": { title: "Organic Essence", category: "E-Commerce", client: "Essence", year: "2021", role: "Designer", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop", overview: "Premium skincare shop.", challenge: "Brand perception.", solution: "Earthy tones and smooth transitions." },
  "10": { title: "Lunar Architecture", category: "Web Design", client: "Lunar Arch", year: "2021", role: "Web Designer", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop", overview: "Portfolio for architects.", challenge: "Highlighting huge spaces.", solution: "Horizontal scrolling galleries." },
  "11": { title: "Neo Banking App", category: "UI/UX Prototyping", client: "Neo", year: "2020", role: "UI Designer", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop", overview: "Dark mode first banking.", challenge: "Readability.", solution: "High contrast neon accents." },
  "12": { title: "Swiftmobiles Showcase", category: "Interactive Web", client: "Swiftmobiles", year: "2024", role: "Lead Engineer", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop", overview: "Showcasing new phones.", challenge: "3D rendering.", solution: "Three.js and Framer integrations." }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[id || "1"]; // Fallback to 1 if not found for demo purposes
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div style={{ padding: '10rem', textAlign: 'center' }}>Project Not Found</div>;

  return (
    <motion.div 
      className={styles.projectPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={`container ${styles.detailContainer}`}>
        
        <Link to="/" className={styles.backButton}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <div className={styles.header}>
          <motion.h1 
            className={styles.title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {project.title}
          </motion.h1>
          <motion.p 
            className={styles.category}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {project.category}
          </motion.p>
        </div>

        <motion.div 
          className={styles.heroImageWrapper}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
          <img src={project.image} alt={project.title} className={styles.heroImage} />
        </motion.div>

        <div className={styles.contentGrid}>
          <div className={styles.metaInfo}>
            <div className={styles.metaItem}>
              <h5>Client</h5>
              <p>{project.client}</p>
            </div>
            <div className={styles.metaItem}>
              <h5>Year</h5>
              <p>{project.year}</p>
            </div>
            <div className={styles.metaItem}>
              <h5>Role</h5>
              <p>{project.role}</p>
            </div>
          </div>

          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h3>Overview</h3>
              <p>{project.overview}</p>
            </div>
            <div className={styles.textSection}>
              <h3>Challenge</h3>
              <p>{project.challenge}</p>
            </div>
            <div className={styles.textSection}>
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

// Using beautiful placeholder images from Unsplash to act as the floating portfolio preview cards.
const floatingCards = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop", 
    endPos: { top: '15%', left: '15%', rotate: -8, scale: 0.9 } 
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop", 
    endPos: { bottom: '15%', left: '20%', rotate: 12, scale: 0.85 } 
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop", 
    endPos: { top: '22%', right: '12%', rotate: 15, scale: 0.9 } 
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=600&auto=format&fit=crop", 
    endPos: { bottom: '20%', right: '18%', rotate: -10, scale: 0.8 } 
  },
];

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Floating images that start as one and separate  */}
      <div className={styles.imagesContainer}>
        {floatingCards.map((card, index) => (
          <motion.img
            key={card.id}
            src={card.src}
            alt="Portfolio preview"
            className={styles.floatingImage}
            initial={{ 
              top: '50%', 
              left: '50%', 
              x: '-50%', 
              y: '-50%', 
              rotate: 0, 
              scale: 0.3,
              opacity: 0
            }}
            animate={{ 
              top: card.endPos.top || 'auto', 
              bottom: card.endPos.bottom || 'auto',
              left: card.endPos.left || 'auto', 
              right: card.endPos.right || 'auto',
              x: '-50%', 
              y: '-50%', 
              rotate: card.endPos.rotate, 
              scale: card.endPos.scale,
              opacity: 1
            }}
            transition={{ 
              duration: 1.5, 
              ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
              delay: 0.2 + (index * 0.1) // Staggered separation
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`container ${styles.heroContent}`}>
        <motion.span 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          This is Daniel
        </motion.span>
        
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <span className={styles.italic}>Fullstack Developer</span>
        </motion.h1>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          startups can count on
        </motion.p>
        
        <motion.div 
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <a href="#portfolio" className="btn-primary">View my works</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

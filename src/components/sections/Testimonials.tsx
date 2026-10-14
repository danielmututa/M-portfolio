import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    client: "Director",
    role: "Jekob Creations (Pvt) Ltd - Fastbunny",
    text: "Daniel built Fastbunny from the ground up and delivered a fast, reliable book marketplace. He understood what our readers and authors needed and turned it into a smooth, easy-to-use platform."
  },
  {
    id: 2,
    client: "Naison Marufu",
    role: "Accerstus",
    text: "Daniel built our website with real care for detail. It looks professional, loads fast, and represents our digital marketing brand exactly the way we wanted."
  },
  {
    id: 3,
    client: "Tafadzwa Mhulanga",
    role: "Taffy Graphics Design",
    text: "Daniel delivered a clean, modern website that shows off our graphic design work beautifully. He was quick, professional, and easy to work with."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className={`section ${styles.testimonialsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What clients say</h2>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((test, idx) => (
            <motion.div 
              key={test.id}
              className={styles.testimonialCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testimonialText}>{test.text}</p>
              <div className={styles.clientInfo}>
                <h4 className={styles.clientName}>{test.client}</h4>
                <p className={styles.clientRole}>{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    client: "Sarah Jenkins",
    role: "CEO, EcoFin",
    text: "Daniel completely transformed our brand identity. The attention to detail and ability to translate our vision into a stunning visual experience was unparalleled. Highly recommended for any startup looking to stand out."
  },
  {
    id: 2,
    client: "Marcus Chen",
    role: "Founder, Ableton Springs",
    text: "Working with Daniel was a breeze. He brought our app to life with intuitive design and beautiful micro-interactions. Our user engagement increased by 40% after the redesign."
  },
  {
    id: 3,
    client: "Elena Rodriguez",
    role: "Creative Director",
    text: "A true master of typography and layout. Daniel's work on our event branding was elegant, sophisticated, and exactly what we needed to elevate our presence."
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

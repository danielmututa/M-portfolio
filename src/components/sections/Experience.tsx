import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Experience.module.css';

type Link = { label: string; url: string };

type Item = {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  links?: Link[];
};

const workExperience: Item[] = [
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
    period: "Jun 2025 - Jun 2026",
    description: "Developed Android apps using Java and Kotlin in Android Studio. Created websites and provided technical support including email management, PC troubleshooting, and Windows installation."
  },
  {
    id: 4,
    company: "Freelance",
    role: "Web Developer",
    period: "Recent",
    description: "Built a digital marketing agency website, a digital book marketplace, and a Help Desk System where users in a company open support tickets and staff manage and resolve them.",
    links: [
      { label: "accerstus.com", url: "https://accerstus.com" },
      { label: "fastbunny.co.zw", url: "https://www.fastbunny.co.zw/" },
      { label: "Help Desk System", url: "https://helpdesk-sysytem.vercel.app/" }
    ]
  },
  {
    id: 10,
    company: "Zimnext Solutions",
    role: "CEO",
    period: "Present",
    description: "Founded and run Zimnext Solutions, creating mobile applications, designing, and running marketing campaigns. Jobs done so far: Alpha Business Services (corporate registration website); Taffy Graphics Design (designed banners and flyers); and software development for Fastbunny, MMShop (mmshop.co.zw) and a Help Desk System, which is still under development.",
    links: [
      { label: "Zimnext Solutions", url: "https://www.zimnextsolutions.co.zw/" },
      { label: "Alpha Business Services", url: "https://abs.org.zw/" },
      { label: "Taffy Graphics Design", url: "https://taffy-graphics-design.vercel.app/" },
      { label: "fastbunny.co.zw", url: "https://www.fastbunny.co.zw/" },
      { label: "mmshop.co.zw", url: "https://mmshop.co.zw" },
      { label: "Help Desk System", url: "https://helpdesk-sysytem.vercel.app/" }
    ]
  }
];

const certificates: Item[] = [
  {
    id: 5,
    company: "Google",
    role: "Digital Marketing Certificate",
    period: "2024",
    description: "Completed Google's digital marketing training, covering online marketing strategy, audience growth, and campaign fundamentals."
  },
  {
    id: 6,
    company: "Cisco Networking Academy",
    role: "Introduction to Cybersecurity",
    period: "Jun 2026",
    description: "Completed the Introduction to Cybersecurity course through the Cisco Networking Academy program, covering core security concepts and threat awareness."
  },
  {
    id: 7,
    company: "Vanderbilt University (Coursera)",
    role: "Prompt Engineering for ChatGPT",
    period: "Jul 2026",
    description: "Completed Vanderbilt University's course on prompt engineering, led by Dr. Jules White, learning to design effective prompts for large language models."
  },
  {
    id: 8,
    company: "University of Oxford, Saïd Business School (Coursera)",
    role: "AI Essentials",
    period: "Jul 2026",
    description: "Completed the AI Essentials course from Saïd Business School, University of Oxford, covering the fundamentals of AI and its business applications."
  },
  {
    id: 9,
    company: "Vanderbilt University (Coursera)",
    role: "ChatGPT Advanced Data Analysis",
    period: "Jul 2026",
    description: "Completed Vanderbilt University's course on ChatGPT Advanced Data Analysis, using AI to analyze, clean, and visualize data."
  }
];

const badges: Item[] = [
  {
    id: 1,
    company: "Microsoft Learn",
    role: "Software Engineer (Badges)",
    period: "2025 - Present",
    description: "Earned several official badges from Microsoft, demonstrating commitment to continuous learning and validating foundational/practical knowledge in cloud computing."
  }
];

const linkStyle: React.CSSProperties = {
  color: '#ff8c00',
  fontWeight: 600,
  textDecoration: 'underline',
  cursor: 'pointer'
};

const Divider = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      margin: '4rem 0 3rem'
    }}
  >
    <div style={{ flex: 1, height: '2px', background: 'var(--accent-primary)', opacity: 0.4 }} />
    <h2 className="section-title" style={{ margin: 0, whiteSpace: 'nowrap' }}>
      {title}
    </h2>
    <div style={{ flex: 1, height: '2px', background: 'var(--accent-primary)', opacity: 0.4 }} />
  </motion.div>
);

const Timeline = ({ items }: { items: Item[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
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
        {items.map((exp, index) => {
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

                {exp.links && (
                  <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem' }}>
                    {exp.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className={`section ${styles.experienceSection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        {/* Work experience */}
        <Timeline items={workExperience} />

        {/* Certificates */}
        <Divider title="Certifications" />
        <Timeline items={certificates} />

        {/* Badges (last) */}
        <Divider title="Badges" />
        <Timeline items={badges} />
      </div>
    </section>
  );
};

export default Experience;
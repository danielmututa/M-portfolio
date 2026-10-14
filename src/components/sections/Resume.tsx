import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Resume.module.css';
import { Download, FileText, Award, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const cvFiles = [
  {
    title: 'Curriculum Vitae',
    label: 'PDF',
    href: '/Daniel Mutandwa Mututa CV (4.2).pdf',
    download: 'Daniel_Mututa_CV.pdf',
    icon: 'file',
  },
];

const certificates = [
  {
    title: 'Microsoft Badge: Cloud Computing',
    label: 'PDF',
    href: '/Describe cloud computing.pdf',
    download: 'Cloud_Computing_Badge.pdf',
    icon: 'award',
  },
  {
    title: 'Microsoft Badge: Cloud Services',
    label: 'PDF',
    href: '/Describe the benefits of using cloud services.pdf',
    download: 'Cloud_Services_Badge.pdf',
    icon: 'award',
  },
  {
    title: 'AI Essentials',
    label: 'PDF',
    href: '/Daniel Mututa AI Essentials.pdf',
    download: 'AI_Essentials_Certificate.pdf',
    icon: 'award',
  },
  {
    title: 'ChatGPT Data Analysis',
    label: 'PDF',
    href: '/Daniel Mututa ChartGpt Data Analysis 2.pdf',
    download: 'ChatGPT_Data_Analysis.pdf',
    icon: 'award',
  },
  {
    title: 'Advanced Data Analysis with ChatGPT',
    label: 'PDF',
    href: '/Daniel Mututa Chrt Gpt advanced Data analysis.pdf',
    download: 'Advanced_Data_Analysis.pdf',
    icon: 'award',
  },
  {
    title: 'Prompt Engineering for ChatGPT',
    label: 'PDF',
    href: '/Daniel Mututa Prompt Engineering for Chart Gpt.pdf',
    download: 'Prompt_Engineering_ChatGPT.pdf',
    icon: 'award',
  },
  {
    title: 'Introduction to Cybersecurity',
    label: 'PDF',
    href: '/Introduction_to_Cybersecurity_certificate_mututadaniel54-gmail-com_667eec6b-bdc5-48e8-9fdb-c74344cbd1e9 (2).pdf',
    download: 'Cybersecurity_Certificate.pdf',
    icon: 'award',
  },
];

const CERTS_PER_PAGE = 6;

const Resume = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = certificates.filter((cert) =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / CERTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * CERTS_PER_PAGE,
    currentPage * CERTS_PER_PAGE
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section id="resume" className={`section ${styles.resumeSection}`}>
      <div className="container">
        <div className={styles.resumeContainer}>

          {/* Left: Text */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">Credentials</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', color: '#ffffff' }}>
              View my full background
            </h2>
            <p className={styles.resumeDescription}>
              Interested in the finer details of my career, education, and specific achievements?
              You can download my full curriculum vitae, a motivational letter outlining my design
              philosophy, and various certifications I've acquired over the years.
            </p>

            {/* CV download (always visible on the left) */}
            {cvFiles.map((item) => (
              <a
                key={item.title}
                href={item.href}
                download={item.download}
                className={styles.downloadCard}
              >
                <div className={styles.iconWrapper}>
                  <FileText size={28} />
                </div>
                <div className={styles.cardInfo}>
                  <h3>{item.title}</h3>
                  <p>{item.label}</p>
                </div>
                <div className={styles.downloadIcon}>
                  <Download size={20} />
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right: Certificates with search + pagination */}
          <motion.div
            className={styles.certsColumn}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Search bar */}
            <div className={styles.searchWrapper}>
              <Search size={16} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search certificates…"
                value={searchQuery}
                onChange={handleSearch}
                className={styles.searchInput}
              />
            </div>

            {/* Certificate cards */}
            <div className={styles.downloadGrid}>
              {paginated.length > 0 ? (
                paginated.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.href}
                    download={cert.download}
                    className={styles.downloadCard}
                  >
                    <div className={styles.iconWrapper}>
                      <Award size={28} />
                    </div>
                    <div className={styles.cardInfo}>
                      <h3>{cert.title}</h3>
                      <p>{cert.label}</p>
                    </div>
                    <div className={styles.downloadIcon}>
                      <Download size={20} />
                    </div>
                  </a>
                ))
              ) : (
                <p className={styles.noResults}>No certificates match your search.</p>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  className={styles.pageBtn}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`${styles.pageBtn} ${currentPage === page ? styles.pageBtnActive : ''}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}

                <button
                  className={styles.pageBtn}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Resume;

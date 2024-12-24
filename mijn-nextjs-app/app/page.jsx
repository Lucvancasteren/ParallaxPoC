'use client';

import { useEffect, useState } from 'react';
import styles from './Parallax.module.css';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.scrollContainer}>
        <section className={styles.section}>
          <div className={styles.parallaxImage}>
            <img src="/afbeeldingen/parallax1.png" alt="Achtergrond 1" />
          </div>
        </section>

        <section className={styles.section}>
          <div 
            className={styles.parallaxImage}
            style={{ 
              transform: `translateY(${Math.max(100 - (scrollPosition / 3), 0)}%)` 
            }}
          >
            <img src="/afbeeldingen/parallax2.png" alt="Achtergrond 2" />
          </div>
        </section>

        <section className={styles.section}>
          <div 
            className={styles.parallaxImage}
            style={{ 
              transform: `translateY(${Math.max(100 - ((scrollPosition - 600) / 3), 0)}%)` 
            }}
          >
            <img src="/afbeeldingen/parallax3.png" alt="Achtergrond 3" />
          </div>
        </section>
      </div>
    </main>
  );
}

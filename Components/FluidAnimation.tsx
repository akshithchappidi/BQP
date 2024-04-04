import styles from '../styles/FluidAnimation.module.css';
import { useEffect, useRef } from 'react';

const FluidAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = `${styles.particle} bg-white/30`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(particle);

      setTimeout(() => {
        particle.remove();
        createParticle();
      }, Math.random() * 10000 + 5000);
    };

    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        createParticle();
      }
    };

    createParticles();
  }, []);

  return <div className={styles.fluidContainer} ref={containerRef} />;
};

export default FluidAnimation;
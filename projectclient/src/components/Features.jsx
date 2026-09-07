import { useEffect, useRef } from 'react';
import { features } from '../data/data.js';
import FeatureCard from './FeatureCard.jsx';
import './Features.css';

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card-wrapper');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('revealed');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features section" id="features" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Features</span>
          <h2 className="section-title">Everything your team needs to move faster</h2>
          <p className="section-subtitle">
            Powerful tools designed to streamline your workflow and boost productivity.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature) => (
            <div className="feature-card-wrapper reveal" key={feature.id}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

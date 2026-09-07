import { useEffect, useRef } from 'react';
import { howItWorksSteps } from '../data/data.js';
import './HowItWorks.css';

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="how-it-works section" id="how-it-works" ref={sectionRef} style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">How It Works</span>
          <h2 className="section-title">Get started in three simple steps</h2>
          <p className="section-subtitle">
            From setup to insights in minutes — no complex onboarding required.
          </p>
        </div>

        <div className="how-it-works__steps">
          {howItWorksSteps.map((item, index) => (
            <div className="how-it-works__step reveal" key={item.step}>
              <div className="how-it-works__circle">
                <span>{item.step}</span>
              </div>
              {index < howItWorksSteps.length - 1 && (
                <div className="how-it-works__connector" aria-hidden="true" />
              )}
              <h3 className="how-it-works__step-title">{item.title}</h3>
              <p className="how-it-works__step-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

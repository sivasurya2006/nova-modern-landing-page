import { useState, useEffect, useRef } from 'react';
import { statistics } from '../data/data.js';
import './Statistics.css';

const formatNumber = (num) => {
  if (num >= 1000) {
    return num.toLocaleString();
  }
  return num.toString();
};

const Statistics = () => {
  const [counts, setCounts] = useState(statistics.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const animateCounters = () => {
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* Ease-out quad */
      const eased = 1 - (1 - progress) * (1 - progress);

      setCounts(statistics.map((stat) => Math.floor(eased * stat.value)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(statistics.map((stat) => stat.value));
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="statistics" ref={sectionRef} aria-label="Key statistics">
      {/* Decorative circles */}
      <div className="statistics__decor statistics__decor--1" aria-hidden="true" />
      <div className="statistics__decor statistics__decor--2" aria-hidden="true" />

      <div className="statistics__container container">
        {statistics.map((stat, index) => (
          <div className="statistics__item" key={stat.label}>
            <span className="statistics__value">
              {stat.prefix}{formatNumber(counts[index])}{stat.suffix}
            </span>
            <span className="statistics__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;

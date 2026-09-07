import { useState, useEffect, useRef } from 'react';
import { pricingPlans } from '../data/data.js';
import PricingCard from './PricingCard.jsx';
import './Pricing.css';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pricing section reveal" id="pricing" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Pricing</span>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-subtitle">
            Choose the plan that fits your team. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Toggle */}
        <div className="pricing__toggle">
          <span className={`pricing__toggle-label ${!isAnnual ? 'pricing__toggle-label--active' : ''}`}>
            Monthly
          </span>
          <button
            className={`pricing__toggle-switch ${isAnnual ? 'pricing__toggle-switch--annual' : ''}`}
            onClick={() => setIsAnnual((prev) => !prev)}
            aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} pricing`}
            role="switch"
            aria-checked={isAnnual}
          >
            <span className="pricing__toggle-knob" />
          </button>
          <span className={`pricing__toggle-label ${isAnnual ? 'pricing__toggle-label--active' : ''}`}>
            Annual
            <span className="pricing__toggle-save">Save 20%</span>
          </span>
        </div>

        {/* Cards */}
        <div className="pricing__grid">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

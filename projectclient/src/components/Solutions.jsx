import { useState, useEffect, useRef } from 'react';
import { solutions } from '../data/data.js';
import './Solutions.css';

/* Inline SVG icons for solution tabs */
const solutionIcons = {
  rocket: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C12 2 4 8 4 16l3-1 5 7 5-7 3 1c0-8-8-14-8-14z" fill="currentColor"/>
    </svg>
  ),
  megaphone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 2L8 10H4a1 1 0 00-1 1v2a1 1 0 001 1h1l2 7h3l-1.5-7H12l8 8V2z" fill="currentColor"/>
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
};

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const sectionRef = useRef(null);

  const activeSolution = solutions.find((s) => s.id === activeTab);

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
    <section className="solutions section reveal" id="solutions" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Solutions</span>
          <h2 className="section-title">Built for every team</h2>
          <p className="section-subtitle">
            See how NOVA adapts to your team's unique workflow and goals.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="solutions__tabs" role="tablist" aria-label="Solutions for different teams">
          {solutions.map(({ id, title, icon }) => (
            <button
              key={id}
              className={`solutions__tab ${activeTab === id ? 'solutions__tab--active' : ''}`}
              onClick={() => setActiveTab(id)}
              role="tab"
              aria-selected={activeTab === id}
              aria-controls={`solution-panel-${id}`}
            >
              <span className="solutions__tab-icon">{solutionIcons[icon]}</span>
              {title}
            </button>
          ))}
        </div>

        {/* Active solution content */}
        {activeSolution && (
          <div
            className="solutions__content"
            key={activeSolution.id}
            id={`solution-panel-${activeSolution.id}`}
            role="tabpanel"
          >
            <div className="solutions__text">
              <h3 className="solutions__heading">{activeSolution.heading}</h3>
              <p className="solutions__description">{activeSolution.description}</p>
              <ul className="solutions__benefits">
                {activeSolution.benefits.map((benefit) => (
                  <li className="solutions__benefit" key={benefit}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#EEF2FF"/>
                      <path d="M6 10l3 3 5-5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary">{activeSolution.cta}</button>
            </div>

            <div className="solutions__visual">
              <div className="solutions__card-mockup">
                <div className="solutions__card-header">
                  <span className="solutions__card-icon">{solutionIcons[activeSolution.icon]}</span>
                  <span className="solutions__card-title">{activeSolution.title}</span>
                </div>
                <div className="solutions__card-stats">
                  <div className="solutions__card-stat">
                    <span className="solutions__card-stat-num">94%</span>
                    <span className="solutions__card-stat-label">Efficiency</span>
                  </div>
                  <div className="solutions__card-stat">
                    <span className="solutions__card-stat-num">3x</span>
                    <span className="solutions__card-stat-label">Faster</span>
                  </div>
                </div>
                <div className="solutions__card-bar-container">
                  <div className="solutions__card-bar-label">
                    <span>Progress</span>
                    <span>78%</span>
                  </div>
                  <div className="solutions__card-bar">
                    <div className="solutions__card-bar-fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Solutions;

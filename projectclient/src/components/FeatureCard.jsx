import './FeatureCard.css';

/* Simple inline SVG icons mapped by type */
const iconMap = {
  automation: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 3a2.5 2.5 0 012.5 2.5c0 .53-.17 1.03-.47 1.44l1.7 1.7A6.97 6.97 0 0121 14a7 7 0 01-7 7 7 7 0 01-7-7c0-1.94.8-3.7 2.08-4.97l1.7-1.7A2.46 2.46 0 0111.5 5.5 2.5 2.5 0 0114 3zm0 7a4 4 0 100 8 4 4 0 000-8z" fill="currentColor"/>
    </svg>
  ),
  project: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="6" height="18" rx="1.5" fill="currentColor" opacity="0.3"/>
      <rect x="11" y="8" width="6" height="15" rx="1.5" fill="currentColor" opacity="0.6"/>
      <rect x="19" y="3" width="6" height="20" rx="1.5" fill="currentColor"/>
    </svg>
  ),
  collaboration: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="10" cy="9" r="3.5" fill="currentColor"/>
      <circle cx="19" cy="9" r="3.5" fill="currentColor" opacity="0.6"/>
      <path d="M3 22c0-3.87 3.13-7 7-7s7 3.13 7 7" fill="currentColor" opacity="0.3"/>
      <path d="M15 22c0-3.87 3.13-7 7-7s7 3.13 7 7" fill="currentColor" opacity="0.15"/>
    </svg>
  ),
  analytics: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 24V14l6-4 6 6 8-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="4" cy="24" r="2" fill="currentColor"/>
      <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.6"/>
      <circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.6"/>
      <circle cx="24" cy="6" r="2" fill="currentColor"/>
    </svg>
  ),
  workflow: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="8" height="6" rx="2" fill="currentColor"/>
      <rect x="18" y="4" width="8" height="6" rx="2" fill="currentColor" opacity="0.6"/>
      <rect x="10" y="18" width="8" height="6" rx="2" fill="currentColor" opacity="0.8"/>
      <path d="M10 7h8M14 10v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
  security: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 2L4 7v6c0 6.63 4.27 12.43 10 14 5.73-1.57 10-7.37 10-14V7L14 2z" fill="currentColor" opacity="0.15"/>
      <path d="M14 2L4 7v6c0 6.63 4.27 12.43 10 14 5.73-1.57 10-7.37 10-14V7L14 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M10 14l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const FeatureCard = ({ feature }) => {
  const { title, description, icon } = feature;

  return (
    <article className="feature-card">
      <div className="feature-card__icon">
        {iconMap[icon] || iconMap.automation}
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </article>
  );
};

export default FeatureCard;

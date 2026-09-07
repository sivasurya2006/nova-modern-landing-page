import './PricingCard.css';

const PricingCard = ({ plan, isAnnual }) => {
  const { name, description, monthlyPrice, annualPrice, popular, features, cta } = plan;
  const price = isAnnual ? annualPrice : monthlyPrice;

  return (
    <article className={`pricing-card ${popular ? 'pricing-card--popular' : ''}`}>
      {popular && <span className="pricing-card__badge">Most Popular</span>}

      <h3 className="pricing-card__name">{name}</h3>
      <p className="pricing-card__description">{description}</p>

      <div className="pricing-card__price">
        <span className="pricing-card__currency">$</span>
        <span className="pricing-card__amount">{price}</span>
        <span className="pricing-card__period">/month</span>
      </div>

      {isAnnual && (
        <p className="pricing-card__savings">
          Save ${(monthlyPrice - annualPrice) * 12}/year
        </p>
      )}

      <ul className="pricing-card__features">
        {features.map((feature) => (
          <li className="pricing-card__feature" key={feature}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 9l3.5 3.5L14 6" stroke={popular ? '#4F46E5' : '#10B981'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button className={`btn ${popular ? 'btn-primary' : 'btn-secondary'} pricing-card__cta`}>
        {cta}
      </button>
    </article>
  );
};

export default PricingCard;

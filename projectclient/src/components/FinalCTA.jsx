import './FinalCTA.css';

const FinalCTA = () => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="final-cta section" aria-labelledby="cta-heading">
      <div className="final-cta__decor final-cta__decor--1" aria-hidden="true" />
      <div className="final-cta__decor final-cta__decor--2" aria-hidden="true" />

      <div className="container">
        <div className="final-cta__card">
          <span className="final-cta__badge">Get Started Today</span>
          <h2 id="cta-heading" className="final-cta__heading">
            Ready to transform the way your team works?
          </h2>
          <p className="final-cta__description">
            Join thousands of teams using NOVA to work smarter, automate faster and achieve more.
          </p>
          <div className="final-cta__buttons">
            <button className="btn btn-primary btn-lg final-cta__btn-primary" onClick={scrollToPricing}>
              Start Free
            </button>
            <button className="btn btn-outline btn-lg" onClick={scrollToPricing}>
              Talk to Sales
            </button>
          </div>
          <p className="final-cta__note">
            14-day unlimited free trial &bull; No credit card required &bull; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

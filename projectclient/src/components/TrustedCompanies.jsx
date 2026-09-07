import { trustedCompanies } from '../data/data.js';
import './TrustedCompanies.css';

const TrustedCompanies = () => {
  return (
    <section className="trusted" aria-label="Trusted by innovative teams">
      <div className="trusted__container container">
        <p className="trusted__label">Trusted by innovative teams worldwide</p>
        <div className="trusted__logos">
          {trustedCompanies.map(({ name, icon }) => (
            <div className="trusted__logo" key={name}>
              <span className="trusted__logo-icon" aria-hidden="true">{icon}</span>
              <span className="trusted__logo-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;

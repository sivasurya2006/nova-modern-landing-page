import { useState, useEffect } from 'react';
import { navLinks } from '../data/data.js';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = (id) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar__container container">
        <button className="navbar__logo" onClick={scrollToTop} aria-label="NOVA home">
          <span className="navbar__logo-icon">N</span>
          <span className="navbar__logo-text">NOVA</span>
        </button>

        <ul className="navbar__links" role="menubar">
          {navLinks.map(({ id, label }) => (
            <li key={id} role="none">
              <button
                className="navbar__link"
                role="menuitem"
                onClick={() => handleNavClick(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="navbar__login" onClick={() => handleNavClick('pricing')}>
            Login
          </button>
          <button className="btn btn-primary navbar__cta" onClick={() => handleNavClick('pricing')}>
            Get Started
          </button>
        </div>

        <button
          className={`navbar__hamburger ${isMobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${isMobileOpen ? 'navbar__mobile--open' : ''}`} role="menu">
        <ul className="navbar__mobile-links">
          {navLinks.map(({ id, label }) => (
            <li key={id} role="none">
              <button
                className="navbar__mobile-link"
                role="menuitem"
                onClick={() => handleNavClick(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-actions">
          <button className="navbar__mobile-login" onClick={() => handleNavClick('pricing')}>
            Login
          </button>
          <button className="btn btn-primary navbar__mobile-cta" onClick={() => handleNavClick('pricing')}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

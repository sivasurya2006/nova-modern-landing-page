import { useState } from 'react';
import { faqData } from '../data/data.js';
import './FAQ.css';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq section" id="faq" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">FAQ</span>
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-subtitle">
            Everything you need to know about NOVA. Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </div>

        <div className="faq__list" role="list">
          {faqData.map(({ id, question, answer }) => {
            const isOpen = openId === id;
            return (
              <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`} key={id} role="listitem">
                <button
                  className="faq__question"
                  onClick={() => toggleFaq(id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${id}`}
                >
                  <span>{question}</span>
                  <span className={`faq__icon ${isOpen ? 'faq__icon--open' : ''}`} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div
                  className="faq__answer-wrapper"
                  id={`faq-answer-${id}`}
                  role="region"
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="faq__answer">{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import { useState, useEffect, useRef } from 'react';
import { testimonials } from '../data/data.js';
import TestimonialCard from './TestimonialCard.jsx';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const sectionRef = useRef(null);

  /* Determine how many cards to show based on viewport */
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth <= 600) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

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

  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <section className="testimonials section reveal" id="testimonials" ref={sectionRef} style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">Loved by teams everywhere</h2>
          <p className="section-subtitle">
            See what our customers have to say about their experience with NOVA.
          </p>
        </div>

        <div className="testimonials__carousel">
          <div className="testimonials__grid" style={{ gridTemplateColumns: `repeat(${cardsToShow}, 1fr)` }}>
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Controls */}
          <div className="testimonials__controls">
            <button
              className="testimonials__control"
              onClick={goPrev}
              disabled={currentIndex === 0}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="testimonials__dots">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${currentIndex === i ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to testimonial group ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="testimonials__control"
              onClick={goNext}
              disabled={currentIndex === maxIndex}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

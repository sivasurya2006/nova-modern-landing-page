import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, company, avatar, rating, text } = testimonial;

  return (
    <article className="testimonial-card">
      <div className="testimonial-card__stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill={i < rating ? '#F59E0B' : '#E2E8F0'}
            aria-hidden="true"
          >
            <path d="M9 1l2.24 4.54 5.01.73-3.63 3.53.86 4.99L9 12.27 4.52 14.8l.86-5-3.63-3.52 5.01-.73z" />
          </svg>
        ))}
      </div>

      <blockquote className="testimonial-card__text">
        &ldquo;{text}&rdquo;
      </blockquote>

      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">{avatar}</div>
        <div className="testimonial-card__info">
          <span className="testimonial-card__name">{name}</span>
          <span className="testimonial-card__role">{role}, {company}</span>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;

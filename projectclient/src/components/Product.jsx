import { useEffect, useRef } from 'react';
import './Product.css';

const Product = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const bulletPoints = [
    'Manage projects effortlessly',
    'Automate repetitive work',
    'Track team performance',
    'Collaborate in real time',
  ];

  return (
    <section className="product section" id="product" ref={sectionRef}>
      <div className="product__container container">
        {/* Left - Dashboard Mockup */}
        <div className="product__mockup reveal">
          <div className="product__dashboard">
            <div className="product__dash-topbar">
              <div className="product__dash-dots">
                <span style={{ background: '#EF4444' }} />
                <span style={{ background: '#F59E0B' }} />
                <span style={{ background: '#10B981' }} />
              </div>
              <span className="product__dash-title">Analytics Overview</span>
            </div>
            <div className="product__dash-body">
              {/* Metric Cards */}
              <div className="product__metrics">
                <div className="product__metric">
                  <span className="product__metric-value">2,847</span>
                  <span className="product__metric-label">Total Tasks</span>
                  <span className="product__metric-trend product__metric-trend--up">↑ 12%</span>
                </div>
                <div className="product__metric">
                  <span className="product__metric-value">94.2%</span>
                  <span className="product__metric-label">Completion Rate</span>
                  <span className="product__metric-trend product__metric-trend--up">↑ 3.1%</span>
                </div>
                <div className="product__metric">
                  <span className="product__metric-value">1.8d</span>
                  <span className="product__metric-label">Avg. Turnaround</span>
                  <span className="product__metric-trend product__metric-trend--down">↓ 0.5d</span>
                </div>
              </div>

              {/* Line Chart */}
              <div className="product__chart-area">
                <h4 className="product__chart-title">Performance Trend</h4>
                <div className="product__line-chart">
                  <svg viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#4F46E5" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,60 Q30,55 60,45 T120,30 T180,35 T240,15 T300,20" fill="none" stroke="#4F46E5" strokeWidth="2.5"/>
                    <path d="M0,60 Q30,55 60,45 T120,30 T180,35 T240,15 T300,20 L300,80 L0,80Z" fill="url(#chartGrad)"/>
                  </svg>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="product__activity">
                <div className="product__activity-item">
                  <span className="product__activity-dot" style={{ background: '#10B981' }} />
                  <span>Sprint review completed</span>
                  <span className="product__activity-time">2m ago</span>
                </div>
                <div className="product__activity-item">
                  <span className="product__activity-dot" style={{ background: '#4F46E5' }} />
                  <span>New workflow automated</span>
                  <span className="product__activity-time">15m ago</span>
                </div>
                <div className="product__activity-item">
                  <span className="product__activity-dot" style={{ background: '#F59E0B' }} />
                  <span>Report generated</span>
                  <span className="product__activity-time">1h ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="product__content reveal">
          <span className="section-badge">About NOVA</span>
          <h2 className="product__title">One intelligent workspace for your entire team</h2>
          <p className="product__description">
            NOVA brings together project management, workflow automation, and real-time analytics in one powerful platform. Designed for modern teams that demand efficiency without complexity.
          </p>

          <ul className="product__bullets">
            {bulletPoints.map((point) => (
              <li className="product__bullet" key={point}>
                <span className="product__bullet-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#EEF2FF"/>
                    <path d="M6 10l3 3 5-5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>

          <button className="btn btn-primary">Explore NOVA</button>
        </div>
      </div>
    </section>
  );
};

export default Product;

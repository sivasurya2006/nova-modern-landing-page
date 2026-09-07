import './Hero.css';

const Hero = ({ onWatchDemo }) => {
  return (
    <section className="hero" id="hero">
      {/* Decorative background blobs */}
      <div className="hero__bg-blob hero__bg-blob--1" aria-hidden="true" />
      <div className="hero__bg-blob hero__bg-blob--2" aria-hidden="true" />

      <div className="hero__container container">
        {/* Left column - Text */}
        <div className="hero__content">
          <span className="section-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1l2 5h5l-4 3 1.5 5L8 11l-4.5 3L5 9 1 6h5z" fill="currentColor" />
            </svg>
            AI-powered productivity for modern teams
          </span>

          <h1 className="hero__title">
            Build Better.<br />
            <span className="hero__title-gradient">Work Smarter.</span>
          </h1>

          <p className="hero__subtitle">
            Turn ideas into results with an intelligent workspace designed to help your team plan, automate and collaborate faster.
          </p>

          <div className="hero__buttons">
            <button className="btn btn-primary btn-lg">Start Free</button>
            <button className="btn btn-secondary btn-lg" onClick={onWatchDemo}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 6.5l5 3.5-5 3.5z" fill="currentColor" />
              </svg>
              Watch Demo
            </button>
          </div>

          <p className="hero__trust-text">No credit card required &bull; 14-day free trial</p>
        </div>

        {/* Right column - Dashboard Mockup */}
        <div className="hero__dashboard-wrapper">
          <div className="hero__dashboard">
            {/* Window chrome */}
            <div className="dashboard__topbar">
              <div className="dashboard__dots">
                <span className="dashboard__dot dashboard__dot--red" />
                <span className="dashboard__dot dashboard__dot--yellow" />
                <span className="dashboard__dot dashboard__dot--green" />
              </div>
              <span className="dashboard__title">NOVA Dashboard</span>
              <div className="dashboard__dots" style={{ visibility: 'hidden' }}>
                <span className="dashboard__dot" />
                <span className="dashboard__dot" />
                <span className="dashboard__dot" />
              </div>
            </div>

            {/* Dashboard content */}
            <div className="dashboard__body">
              {/* Top stats row */}
              <div className="dashboard__stats-row">
                <div className="dashboard__stat-card">
                  <span className="dashboard__stat-label">On Track</span>
                  <span className="dashboard__stat-value dashboard__stat-value--green">87%</span>
                </div>
                <div className="dashboard__stat-card">
                  <span className="dashboard__stat-label">Tasks Done</span>
                  <span className="dashboard__stat-value dashboard__stat-value--blue">24</span>
                </div>
                <div className="dashboard__stat-card">
                  <span className="dashboard__stat-label">Active</span>
                  <span className="dashboard__stat-value dashboard__stat-value--purple">12</span>
                </div>
              </div>

              {/* Middle section */}
              <div className="dashboard__middle">
                {/* Progress section */}
                <div className="dashboard__progress-section">
                  <h4 className="dashboard__section-title">Project Progress</h4>
                  <div className="dashboard__progress-item">
                    <div className="dashboard__progress-header">
                      <span>Website Redesign</span>
                      <span>75%</span>
                    </div>
                    <div className="dashboard__progress-bar">
                      <div className="dashboard__progress-fill" style={{ width: '75%' }} />
                    </div>
                  </div>
                  <div className="dashboard__progress-item">
                    <div className="dashboard__progress-header">
                      <span>Mobile App</span>
                      <span>45%</span>
                    </div>
                    <div className="dashboard__progress-bar">
                      <div className="dashboard__progress-fill dashboard__progress-fill--blue" style={{ width: '45%' }} />
                    </div>
                  </div>
                  <div className="dashboard__progress-item">
                    <div className="dashboard__progress-header">
                      <span>API Integration</span>
                      <span>90%</span>
                    </div>
                    <div className="dashboard__progress-bar">
                      <div className="dashboard__progress-fill dashboard__progress-fill--green" style={{ width: '90%' }} />
                    </div>
                  </div>
                </div>

                {/* Chart section */}
                <div className="dashboard__chart-section">
                  <h4 className="dashboard__section-title">Weekly Activity</h4>
                  <div className="dashboard__chart">
                    <div className="dashboard__chart-bar" style={{ height: '45%' }}><span>M</span></div>
                    <div className="dashboard__chart-bar" style={{ height: '70%' }}><span>T</span></div>
                    <div className="dashboard__chart-bar" style={{ height: '55%' }}><span>W</span></div>
                    <div className="dashboard__chart-bar" style={{ height: '85%' }}><span>T</span></div>
                    <div className="dashboard__chart-bar" style={{ height: '60%' }}><span>F</span></div>
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="dashboard__bottom">
                {/* Task list */}
                <div className="dashboard__tasks">
                  <h4 className="dashboard__section-title">Recent Tasks</h4>
                  <div className="dashboard__task dashboard__task--done">
                    <span className="dashboard__task-check">✓</span>
                    <span>Design system update</span>
                  </div>
                  <div className="dashboard__task dashboard__task--done">
                    <span className="dashboard__task-check">✓</span>
                    <span>API documentation</span>
                  </div>
                  <div className="dashboard__task dashboard__task--active">
                    <span className="dashboard__task-dot" />
                    <span>User testing</span>
                  </div>
                  <div className="dashboard__task dashboard__task--pending">
                    <span className="dashboard__task-circle" />
                    <span>Deploy to staging</span>
                  </div>
                </div>

                {/* AI Assistant */}
                <div className="dashboard__ai-card">
                  <div className="dashboard__ai-header">
                    <span className="dashboard__ai-icon">✦</span>
                    <span className="dashboard__ai-title">AI Assistant</span>
                  </div>
                  <p className="dashboard__ai-message">
                    3 tasks can be automated. Want me to set up workflows?
                  </p>
                  <div className="dashboard__ai-actions">
                    <span className="dashboard__ai-btn">Automate</span>
                    <span className="dashboard__ai-btn dashboard__ai-btn--secondary">Later</span>
                  </div>

                  {/* Team avatars */}
                  <div className="dashboard__team">
                    <span className="dashboard__avatar" style={{ background: '#818CF8' }}>SJ</span>
                    <span className="dashboard__avatar" style={{ background: '#60A5FA' }}>MC</span>
                    <span className="dashboard__avatar" style={{ background: '#34D399' }}>ED</span>
                    <span className="dashboard__avatar" style={{ background: '#F59E0B' }}>DP</span>
                    <span className="dashboard__avatar dashboard__avatar--more">+3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

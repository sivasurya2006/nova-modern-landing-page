import { useEffect, useState } from 'react';
import './DemoModal.css';

const DemoModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    setIsPlaying(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="demo-modal-overlay"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-title"
    >
      <div
        className="demo-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="demo-modal__close"
          onClick={handleClose}
          aria-label="Close demo modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="demo-modal__header">
          <span className="section-badge">Product Walkthrough</span>
          <h2 id="demo-title" className="demo-modal__title">See NOVA in action</h2>
          <p className="demo-modal__desc">
            Explore how autonomous workflow automation, task orchestration, and intelligent insights power modern high-velocity teams.
          </p>
        </div>

        {/* Fake Video Preview Area */}
        <div className={`demo-video ${isPlaying ? 'demo-video--playing' : ''}`}>
          <div className="demo-video__screen">
            <div className="demo-video__header-bar">
              <span className="demo-video__dot demo-video__dot--red" />
              <span className="demo-video__dot demo-video__dot--yellow" />
              <span className="demo-video__dot demo-video__dot--green" />
              <span className="demo-video__url">https://app.nova.ai/demo-workspace</span>
            </div>

            <div className="demo-video__content">
              {!isPlaying ? (
                <div className="demo-video__poster">
                  <div className="demo-video__play-ring" onClick={() => setIsPlaying(true)}>
                    <button className="demo-video__play-btn" aria-label="Play demo preview">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                  <span className="demo-video__duration">2:30 min preview</span>
                  <p className="demo-video__hint">Click to launch interactive walkthrough</p>
                </div>
              ) : (
                <div className="demo-video__simulation">
                  <div className="demo-video__sim-alert">
                    <span className="demo-video__sim-spinner" />
                    <span>AI Copilot generating sprint automated tasks...</span>
                  </div>
                  <div className="demo-video__sim-cards">
                    <div className="demo-video__sim-card">
                      <span className="demo-video__sim-card-badge">Step 1</span>
                      <strong>Project Synced</strong>
                      <p>GitHub &amp; Slack webhooks connected</p>
                    </div>
                    <div className="demo-video__sim-card">
                      <span className="demo-video__sim-card-badge demo-video__sim-card-badge--active">Step 2</span>
                      <strong>Task Auto-Triage</strong>
                      <p>9 critical issues auto-prioritized</p>
                    </div>
                    <div className="demo-video__sim-card">
                      <span className="demo-video__sim-card-badge">Step 3</span>
                      <strong>Executive Report</strong>
                      <p>Real-time telemetry dispatched</p>
                    </div>
                  </div>
                  <button className="btn btn-secondary btn-sm demo-video__sim-reset" onClick={() => setIsPlaying(false)}>
                    Pause / Reset Preview
                  </button>
                </div>
              )}
            </div>

            {/* Video Controls Bar */}
            <div className="demo-video__footer">
              <div className="demo-video__timeline">
                <div className={`demo-video__progress ${isPlaying ? 'demo-video__progress--active' : ''}`} />
              </div>
              <div className="demo-video__controls">
                <button
                  className="demo-video__ctrl-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  )}
                </button>
                <span className="demo-video__time">{isPlaying ? '0:42 / 2:30' : '0:00 / 2:30'}</span>
                <span className="demo-video__hd">1080p HD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import { getImage } from '../data/images';
import './Onboarding.css';

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
    else navigate('/home');
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="onboarding" id="onboarding-screen">
      {/* Theme toggle header */}
      <div className="onboarding-header">
        <div className="onboarding-logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span>TrekTribe</span>
        </div>
        <ThemeToggle />
      </div>

      {/* Step indicators */}
      <div className="step-indicators">
        {[0, 1, 2].map(i => (
          <div key={i} className={`step-dot ${i === step ? 'active' : ''} ${i < step ? 'completed' : ''}`} />
        ))}
      </div>

      {/* Screen 1: Hero */}
      <div className={`onboarding-slide ${step === 0 ? 'active' : step > 0 ? 'exit-left' : 'exit-right'}`}>
        <div className="hero-image-container">
          <img src={getImage('mountain_trek_hero')} alt="Mountain trek" className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title animate-fade-in-up">Find Your<br /><span className="highlight">Tribe</span></h1>
            <p className="hero-subtitle animate-fade-in-up stagger-2">
              Connect with trekkers, discover new trails, and share your mountain stories with the world.
            </p>
            <button className="gradient-btn hero-btn animate-fade-in-up stagger-3" onClick={nextStep} id="onboarding-next-1">
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Screen 2: Choose Role */}
      <div className={`onboarding-slide ${step === 1 ? 'active' : step > 1 ? 'exit-left' : 'exit-right'}`}>
        <div className="role-screen">
          <div className="role-header animate-fade-in-up">
            <h2>How do you trek?</h2>
            <p>Choose your style and we'll personalize your experience</p>
          </div>

          <div className="role-cards">
            <button className="role-card animate-fade-in-up stagger-1" id="role-solo-trekker">
              <div className="role-icon solo-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
                  <path d="M14 22V18L16 13L13 14L12 9L11 14L8 13L10 18V22" />
                  <path d="M6 9L8 7" />
                  <path d="M18 9L16 7" />
                </svg>
              </div>
              <h3>Solo Trekker</h3>
              <p>Explore trails, share stories, and find trek buddies along the way</p>
              <div className="role-tag">Most Popular</div>
            </button>

            <button className="role-card animate-fade-in-up stagger-2" id="role-local-guide">
              <div className="role-icon guide-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22C12 22 3 14 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 13 5.09C14.09 3.81 15.76 3 17.5 3C20.58 3 23 5.42 23 8.5C23 14 14 22 14 22" />
                  <path d="M12 22L14 22" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>Local Guide</h3>
              <p>Lead treks, build your reputation, and connect with adventurers</p>
              <div className="role-tag guide-tag">For Experts</div>
            </button>
          </div>

          <div className="social-sharing-preview animate-fade-in-up stagger-3">
            <h4>Share your treks everywhere</h4>
            <div className="social-icons">
              <div className="social-icon">📸</div>
              <div className="social-icon">📍</div>
              <div className="social-icon">🎥</div>
              <div className="social-icon">📝</div>
            </div>
          </div>

          <div className="role-actions">
            <button className="gradient-btn-back" onClick={prevStep}>Back</button>
            <button className="gradient-btn" onClick={nextStep} id="onboarding-next-2">
              Continue
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Screen 3: Signup */}
      <div className={`onboarding-slide ${step === 2 ? 'active' : step > 2 ? 'exit-left' : 'exit-right'}`}>
        <div className="signup-screen">
          <div className="signup-header animate-fade-in-up">
            <div className="signup-icon-wrap">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2>Join TrekTribe</h2>
            <p>Your adventure starts here</p>
          </div>

          <form className="signup-form animate-fade-in-up stagger-2" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="input-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>

            <button type="submit" className="gradient-btn signup-btn" id="onboarding-signup">
              Start Your Journey 🏔️
            </button>
          </form>

          <div className="signup-footer animate-fade-in-up stagger-3">
            <p>or continue with</p>
            <div className="social-login-row">
              <button className="social-login-btn" id="login-google">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--text-secondary)">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button className="social-login-btn" id="login-apple">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--text-secondary)">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Apple
              </button>
            </div>
            <button className="gradient-btn-back" onClick={prevStep} style={{ marginTop: '16px' }}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

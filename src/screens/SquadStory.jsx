import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { squadStory } from '../data/mockData';
import { getImage } from '../data/images';
import './SquadStory.css';

export default function SquadStory() {
  const [showFab, setShowFab] = useState(true);

  return (
    <div className="squad-screen main-content" id="squad-screen">
      {/* Header */}
      <header className="squad-header">
        <div className="squad-header-top">
          <div>
            <h1>Trek Squad</h1>
            <p className="squad-subtitle">Collaborative trek stories</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Story Title */}
      <div className="squad-story-title animate-fade-in-up">
        <h2>{squadStory.title}</h2>
        <span className="story-badge">🔴 Live Story</span>
      </div>

      {/* Contributors Carousel */}
      <div className="contributors-carousel animate-fade-in-up stagger-1">
        {squadStory.contributors.map((user, idx) => (
          <div key={user.id} className="contributor" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="contributor-avatar-ring">
              <img src={user.avatar} alt={user.name} className="contributor-avatar" />
            </div>
            <span className="contributor-name">{user.name.split(' ')[0]}</span>
          </div>
        ))}
        <div className="contributor add-contributor">
          <div className="contributor-avatar-ring add-ring">
            <div className="add-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
          </div>
          <span className="contributor-name">Invite</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="squad-timeline">
        {squadStory.timeline.map((entry, idx) => (
          <div
            key={entry.id}
            className={`timeline-entry animate-slide-${idx % 2 === 0 ? 'right' : 'left'}`}
            style={{ animationDelay: `${idx * 0.15}s` }}
            id={`timeline-${entry.id}`}
          >
            {/* Timeline connector */}
            <div className="timeline-connector">
              <div className="timeline-dot" style={{ '--dot-idx': idx }} />
              {idx < squadStory.timeline.length - 1 && <div className="timeline-line" />}
            </div>

            {/* Entry content */}
            <div className="timeline-card">
              <div className="timeline-card-header">
                <img src={entry.user.avatar} alt={entry.user.name} className="timeline-avatar" />
                <div>
                  <span className="timeline-username">{entry.user.name}</span>
                  <span className="timeline-timestamp">{entry.timestamp}</span>
                </div>
              </div>

              <div className="timeline-image-container">
                <img src={getImage(entry.image)} alt="Trek moment" className="timeline-image" />
                <div className="timeline-image-overlay" />
              </div>

              <p className="timeline-note">{entry.note}</p>

              <div className="timeline-reactions">
                <button className="reaction-btn">❤️ 12</button>
                <button className="reaction-btn">🔥 8</button>
                <button className="reaction-btn">🏔️ 5</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAB */}
      {showFab && (
        <button className="add-story-fab" id="add-story-fab" onClick={() => setShowFab(true)}>
          <div className="fab-pulse-ring" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span className="fab-label">Add your story</span>
        </button>
      )}
    </div>
  );
}

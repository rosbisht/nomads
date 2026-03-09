import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { users, photoGrid } from '../data/mockData';
import { getImage } from '../data/images';
import './Profile.css';

const profileUser = users[0];

export default function Profile() {
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  const tabs = [
    { id: 'posts', label: 'Posts', icon: '📝', count: profileUser.posts },
    { id: 'treks', label: 'Treks', icon: '🥾', count: profileUser.treks },
    { id: 'photos', label: 'Photos', icon: '📸', count: profileUser.photos },
  ];

  const levelColors = {
    Beginner: { bg: 'rgba(59,130,246,0.15)', color: '#3b82f6' },
    Intermediate: { bg: 'rgba(232,123,53,0.15)', color: '#e87b35' },
    Expert: { bg: 'rgba(29,185,84,0.15)', color: '#1db954' },
  };

  const levelStyle = levelColors[profileUser.level] || levelColors.Beginner;

  return (
    <div className="profile-screen main-content" id="profile-screen">
      {/* Banner */}
      <div className="profile-banner">
        <img src={getImage('profile_banner')} alt="Banner" className="banner-image" />
        <div className="banner-overlay" />
        <div className="profile-banner-actions">
          <button className="icon-btn icon-btn-glass">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <ThemeToggle />
        </div>
      </div>

      {/* Avatar Section */}
      <div className="profile-info-section">
        <div className="profile-avatar-container">
          <img src={profileUser.avatar} alt={profileUser.name} className="profile-avatar" />
          <div className="avatar-ring" />
        </div>

        <h2 className="profile-name">{profileUser.name}</h2>
        <p className="profile-username">{profileUser.username}</p>

        <div
          className="trek-level-badge"
          style={{ background: levelStyle.bg, color: levelStyle.color }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          {profileUser.level} Trekker
        </div>

        <p className="profile-bio">{profileUser.bio}</p>

        {/* Stats */}
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-number">{profileUser.followers.toLocaleString()}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">{profileUser.following}</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">{profileUser.treks}</span>
            <span className="stat-label">Treks</span>
          </div>
        </div>

        {/* Follow Button */}
        <div className="profile-actions-row">
          <button
            className={`follow-btn ${isFollowing ? 'following' : ''}`}
            onClick={() => setIsFollowing(!isFollowing)}
            id="follow-btn"
          >
            {isFollowing ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-danger)" stroke="none">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
                Following
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                Follow
              </>
            )}
          </button>
          <button className="message-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`profile-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            id={`tab-${tab.id}`}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
            <span className="tab-count">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="photo-grid">
        {photoGrid.map((img, idx) => (
          <div key={idx} className="grid-item animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
            <img src={getImage(img)} alt={`Photo ${idx + 1}`} className="grid-image" />
            <div className="grid-overlay">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
              <span>24</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

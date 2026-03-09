import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { trekBuddies } from '../data/mockData';
import './Discover.css';

export default function Discover() {
  const [viewMode, setViewMode] = useState('list');
  const [connectedIds, setConnectedIds] = useState([]);

  const toggleConnect = (id) => {
    setConnectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="discover-screen main-content" id="discover-screen">
      {/* Header */}
      <header className="discover-header">
        <div className="discover-header-top">
          <h1>Find Trek Buddies</h1>
          <ThemeToggle />
        </div>
        <p className="discover-subtitle">Connect with trekkers near you and plan your next adventure together</p>

        {/* View Toggle */}
        <div className="view-toggle" id="view-toggle">
          <button
            className={`toggle-option ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            List
          </button>
          <button
            className={`toggle-option ${viewMode === 'map' ? 'active' : ''}`}
            onClick={() => setViewMode('map')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
              <line x1="8" y1="2" x2="8" y2="18" />
              <line x1="16" y1="6" x2="16" y2="22" />
            </svg>
            Map
          </button>
        </div>
      </header>

      {/* List View */}
      {viewMode === 'list' && (
        <div className="buddy-list">
          {trekBuddies.map((buddy, index) => (
            <div
              key={buddy.id}
              className="buddy-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              id={`buddy-${buddy.id}`}
            >
              <div className="buddy-card-content">
                <img src={buddy.user.avatar} alt={buddy.user.name} className="buddy-avatar" />
                <div className="buddy-info">
                  <h3 className="buddy-name">{buddy.user.name}</h3>
                  <p className="buddy-tagline">{buddy.tagline}</p>
                  <div className="buddy-meta">
                    <span className="buddy-distance">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-orange)" stroke="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" fill="white" />
                      </svg>
                      {buddy.distance}
                    </span>
                    <span className="buddy-mutual">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-accent)" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      {buddy.mutual} mutual
                    </span>
                  </div>
                  <div className="buddy-next-trek">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {buddy.nextTrek}
                  </div>
                </div>
                <button
                  className={`connect-btn ${connectedIds.includes(buddy.id) ? 'connected' : ''}`}
                  onClick={() => toggleConnect(buddy.id)}
                >
                  {connectedIds.includes(buddy.id) ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Connected
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                      Connect
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Map View */}
      {viewMode === 'map' && (
        <div className="map-view animate-fade-in" id="map-view">
          <div className="map-container">
            {/* Decorative map background */}
            <div className="map-bg">
              <div className="map-topo-lines">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="topo-line" style={{ '--i': i }} />
                ))}
              </div>
              <div className="map-water" />
              <div className="map-road road-1" />
              <div className="map-road road-2" />
            </div>

            {/* Buddy markers */}
            {trekBuddies.map((buddy, index) => {
              const positions = [
                { top: '25%', left: '30%' },
                { top: '40%', left: '60%' },
                { top: '55%', left: '25%' },
                { top: '35%', left: '75%' },
                { top: '65%', left: '55%' },
              ];
              const pos = positions[index] || positions[0];

              return (
                <div
                  key={buddy.id}
                  className="map-buddy-marker animate-fade-in"
                  style={{ top: pos.top, left: pos.left, animationDelay: `${index * 0.15}s` }}
                >
                  <div className="marker-bubble">
                    <img src={buddy.user.avatar} alt={buddy.user.name} className="marker-avatar" />
                    <div className="marker-ping" />
                  </div>
                  <div className="marker-label">{buddy.user.name.split(' ')[0]}</div>
                </div>
              );
            })}

            {/* Your location */}
            <div className="your-location">
              <div className="your-dot" />
              <div className="your-ring" />
              <span>You</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

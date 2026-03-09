import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trekDetail } from '../data/mockData';
import { getImage } from '../data/images';
import './TrekDetail.css';

export default function TrekDetail() {
  const [liked, setLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const navigate = useNavigate();

  const details = [
    { label: 'Distance', value: trekDetail.distance, icon: '📏' },
    { label: 'Elevation', value: trekDetail.elevation, icon: '⛰️' },
    { label: 'Duration', value: trekDetail.duration, icon: '⏱️' },
    { label: 'Difficulty', value: trekDetail.difficulty, icon: '💪' },
    { label: 'Best Season', value: trekDetail.bestSeason, icon: '🌤️' },
    { label: 'Max Altitude', value: trekDetail.maxAltitude, icon: '🏔️' },
  ];

  return (
    <div className="trek-detail main-content" id="trek-detail-screen">
      {/* Hero Header */}
      <div className="detail-hero">
        <img src={getImage(trekDetail.image)} alt={trekDetail.title} className="detail-hero-img" />
        <div className="detail-hero-overlay" />

        <button className="detail-back icon-btn icon-btn-glass" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="detail-hero-content">
          <h1 className="detail-title">{trekDetail.title}</h1>
          <div className="detail-location-row">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-orange)" stroke="none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" fill="white" />
            </svg>
            <span>{trekDetail.location}</span>
          </div>
        </div>

        {/* Like FAB */}
        <button
          className={`detail-like-fab ${liked ? 'liked' : ''}`}
          onClick={() => setLiked(!liked)}
          id="trek-like-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24"
            fill={liked ? 'white' : 'none'}
            stroke="white"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>
      </div>

      {/* Story Content */}
      <div className="detail-content">
        {/* Caption */}
        <p className="detail-caption animate-fade-in-up">{trekDetail.caption}</p>

        {/* Key Details */}
        <div className="detail-stats-grid animate-fade-in-up stagger-1">
          {details.map((d, i) => (
            <div key={i} className="detail-stat-item">
              <span className="detail-stat-icon">{d.icon}</span>
              <span className="detail-stat-value">{d.value}</span>
              <span className="detail-stat-label">{d.label}</span>
            </div>
          ))}
        </div>

        {/* Route info */}
        <div className="detail-route animate-fade-in-up stagger-2">
          <h3>Trek Route</h3>
          <div className="route-info">
            <div className="route-point">
              <div className="route-dot start" />
              <div>
                <span className="route-label">Start</span>
                <span className="route-name">{trekDetail.startPoint}</span>
              </div>
            </div>
            <div className="route-line" />
            <div className="route-point">
              <div className="route-dot end" />
              <div>
                <span className="route-label">End</span>
                <span className="route-name">{trekDetail.endPoint}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Preview */}
        <div className="map-preview animate-fade-in-up stagger-3">
          <div className="map-placeholder">
            <div className="map-grid">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="map-contour" style={{ '--idx': i }} />
              ))}
            </div>
            <div className="map-route-line" />
            <div className="map-marker start-marker">A</div>
            <div className="map-marker end-marker">B</div>
            <div className="map-label">Trek Route Map</div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="comments-section animate-fade-in-up stagger-4">
          <h3>Comments <span className="comment-count">({trekDetail.comments.length})</span></h3>

          {trekDetail.comments.map(comment => (
            <div key={comment.id} className="comment-card glass-card">
              <div className="comment-header">
                <img src={comment.user.avatar} alt={comment.user.name} className="comment-avatar" />
                <div>
                  <span className="comment-username">{comment.user.name}</span>
                  <span className="comment-date">{comment.date}</span>
                </div>
              </div>
              <p className="comment-text">{comment.text}</p>
              <div className="comment-actions">
                <button className="comment-action">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                  {comment.likes}
                </button>
                <button className="comment-action">Reply</button>
              </div>

              {/* Replies */}
              {comment.replies?.map(reply => (
                <div key={reply.id} className="reply-card">
                  <div className="comment-header">
                    <img src={reply.user.avatar} alt={reply.user.name} className="comment-avatar reply-avatar" />
                    <div>
                      <span className="comment-username">{reply.user.name}</span>
                      <span className="comment-date">{reply.date}</span>
                    </div>
                  </div>
                  <p className="comment-text reply-text">{reply.text}</p>
                  <div className="comment-actions">
                    <button className="comment-action">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                      {reply.likes}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Comment Input */}
          <div className="comment-input-container glass-card">
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              id="comment-input"
            />
            <button className="send-btn" disabled={!commentText.trim()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

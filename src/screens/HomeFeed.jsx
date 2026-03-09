import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import { feedPosts, trekTags } from '../data/mockData';
import { getImage } from '../data/images';
import './HomeFeed.css';

export default function HomeFeed() {
  const [posts, setPosts] = useState(feedPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState(null);
  const navigate = useNavigate();

  const toggleLike = (postId) => {
    setPosts(prev => prev.map(p =>
      p.id === postId
        ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
        : p
    ));
  };

  return (
    <div className="home-feed main-content" id="home-screen">
      {/* Header */}
      <header className="feed-header">
        <div className="feed-header-top">
          <div className="feed-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <h1>TrekTribe</h1>
          </div>
          <div className="feed-header-actions">
            <ThemeToggle />
            <button className="icon-btn" id="notifications-btn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
              <span className="notif-badge">3</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-bar" id="search-bar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search destinations, treks, people..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Trek Tags */}
        <div className="trek-tags" id="trek-tags">
          {trekTags.map(tag => (
            <button
              key={tag.id}
              className={`trek-tag ${activeTag === tag.id ? 'active' : ''}`}
              style={{ '--tag-color': tag.color }}
              onClick={() => setActiveTag(activeTag === tag.id ? null : tag.id)}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </header>

      {/* Feed */}
      <div className="feed-list">
        {posts.map((post, index) => (
          <article
            key={post.id}
            className="feed-card animate-fade-in-up"
            style={{ animationDelay: `${index * 0.08}s` }}
            id={`post-${post.id}`}
          >
            {/* Post Header */}
            <div className="post-header">
              <div className="post-user" onClick={() => navigate('/profile')}>
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="post-avatar"
                />
                <div>
                  <span className="post-username">{post.user.name}</span>
                  <span className="post-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-orange)" stroke="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" fill="white" />
                    </svg>
                    {post.location}
                  </span>
                </div>
              </div>
              <button className="icon-btn-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>

            {/* Post Image */}
            <div className="post-image-container" onClick={() => navigate('/trek-detail')}>
              <img src={getImage(post.image)} alt={post.location} className="post-image" />
              <div className="post-image-gradient" />
            </div>

            {/* Actions */}
            <div className="post-actions">
              <div className="post-actions-left">
                <button
                  className={`action-btn like-btn ${post.liked ? 'liked' : ''}`}
                  onClick={() => toggleLike(post.id)}
                  id={`like-btn-${post.id}`}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24"
                    fill={post.liked ? 'var(--color-danger)' : 'none'}
                    stroke={post.liked ? 'var(--color-danger)' : 'currentColor'}
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                  <span>{post.likes}</span>
                </button>
                <button className="action-btn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                  <span>{post.comments}</span>
                </button>
                <button className="action-btn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  <span>{post.shares}</span>
                </button>
              </div>
              <button className="action-btn bookmark-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                </svg>
              </button>
            </div>

            {/* Caption */}
            <div className="post-caption">
              <span className="caption-username">{post.user.name}</span>
              <span className="caption-text">{post.caption}</span>
            </div>

            {/* Tags */}
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="post-tag">{tag}</span>
              ))}
            </div>

            <span className="post-date">{post.date}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

import { useState, useEffect, useCallback } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

function StarRating({ rating, interactive, onRate }) {
  const [hover, setHover] = useState(0);
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={interactive ? 28 : 16}
          height={interactive ? 28 : 16}
          viewBox="0 0 24 24"
          fill={(interactive ? (hover || rating) : rating) >= star ? '#F59E0B' : '#E5E7EB'}
          stroke="none"
          style={interactive ? { cursor: 'pointer' } : undefined}
          onMouseEnter={interactive ? () => setHover(star) : undefined}
          onMouseLeave={interactive ? () => setHover(0) : undefined}
          onClick={interactive ? () => onRate(star) : undefined}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const modalOverlayStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  background: 'rgba(0,0,0,0.5)', zIndex: 9999,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  padding: 20,
};

const modalBoxStyle = {
  background: '#fff', borderRadius: 20, padding: '36px 32px',
  maxWidth: 480, width: '100%', position: 'relative',
  boxShadow: '0 20px 60px rgba(0,0,0,0.15)', maxHeight: '90vh', overflowY: 'auto',
};

const inputStyle = {
  width: '100%', padding: '12px 16px', border: '1px solid #dee2e6',
  borderRadius: 8, fontSize: '0.95rem', fontFamily: 'inherit',
  outline: 'none', transition: 'border-color 0.2s',
};

const labelStyle = {
  display: 'block', fontSize: '0.9rem', fontWeight: 600,
  color: '#212529', marginBottom: 6,
};

const btnPrimary = {
  background: '#B91C1C', color: '#fff', border: 'none',
  padding: '12px 28px', borderRadius: 8, fontSize: '0.95rem',
  fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
  transition: 'all 0.2s',
};

const btnOutline = {
  background: 'transparent', color: '#B91C1C', border: '2px solid #B91C1C',
  padding: '10px 24px', borderRadius: 8, fontSize: '0.9rem',
  fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
};

const closeBtn = {
  position: 'absolute', top: 16, right: 16, background: 'none',
  border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6c757d',
  lineHeight: 1,
};

function AuthModal({ isOpen, onClose, onAuth }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (mode === 'signup') {
        if (!form.name.trim()) { setError('Name is required'); setLoading(false); return; }
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: form.email, password: form.password, name: form.name }),
        });
        const data = await res.json();
        if (!res.ok) { setError(data.error || 'Signup failed'); setLoading(false); return; }
        // Auto-login after signup
        const loginRes = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: form.email, password: form.password }),
        });
        const loginData = await loginRes.json();
        if (loginRes.ok) {
          localStorage.setItem('cij_token', loginData.token);
          localStorage.setItem('cij_user', JSON.stringify(loginData.user));
          onAuth(loginData.user, loginData.token);
          onClose();
        } else {
          setError('Account created. Please log in.');
          setMode('login');
        }
      } else {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: form.email, password: form.password }),
        });
        const data = await res.json();
        if (!res.ok) { setError(data.error || 'Login failed'); setLoading(false); return; }
        localStorage.setItem('cij_token', data.token);
        localStorage.setItem('cij_user', JSON.stringify(data.user));
        onAuth(data.user, data.token);
        onClose();
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div style={modalOverlayStyle} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={modalBoxStyle}>
        <button style={closeBtn} onClick={onClose}>&times;</button>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 4, color: '#1A1A2E' }}>
          {mode === 'login' ? 'Log In' : 'Create Account'}
        </h2>
        <p style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: 24 }}>
          {mode === 'login' ? 'Log in to write a review' : 'Sign up to share your experience'}
        </p>

        {error && (
          <div style={{
            background: '#FEF2F2', color: '#B91C1C', padding: '10px 14px',
            borderRadius: 8, fontSize: '0.88rem', marginBottom: 16,
          }}>{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Name</label>
              <input
                style={inputStyle}
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
          )}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Email</label>
            <input
              style={inputStyle}
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Password</label>
            <input
              style={inputStyle}
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              minLength={6}
            />
          </div>
          <button type="submit" style={{ ...btnPrimary, width: '100%' }} disabled={loading}>
            {loading ? 'Please wait...' : mode === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 20, fontSize: '0.88rem', color: '#6c757d' }}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); }}
            style={{ background: 'none', border: 'none', color: '#B91C1C', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.88rem' }}
          >
            {mode === 'login' ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
}

function ReviewFormModal({ isOpen, onClose, onSubmit, editData }) {
  const [form, setForm] = useState({ title: '', text: '', rating: 5 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (editData) {
      setForm({ title: editData.title || '', text: editData.text || '', rating: editData.rating || 5 });
    } else {
      setForm({ title: '', text: '', rating: 5 });
    }
    setError('');
  }, [editData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.text.trim()) { setError('Review content is required'); return; }
    if (form.rating < 1 || form.rating > 5) { setError('Please select a rating'); return; }
    setLoading(true);
    setError('');
    try {
      await onSubmit(form, editData?.id);
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to save review');
    }
    setLoading(false);
  };

  return (
    <div style={modalOverlayStyle} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={modalBoxStyle}>
        <button style={closeBtn} onClick={onClose}>&times;</button>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 4, color: '#1A1A2E' }}>
          {editData ? 'Edit Review' : 'Write a Review'}
        </h2>
        <p style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: 24 }}>
          {editData ? 'Update your review below' : 'Share your experience at CIJ Academy'}
        </p>

        {error && (
          <div style={{
            background: '#FEF2F2', color: '#B91C1C', padding: '10px 14px',
            borderRadius: 8, fontSize: '0.88rem', marginBottom: 16,
          }}>{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Rating</label>
            <StarRating rating={form.rating} interactive onRate={(r) => setForm({ ...form, rating: r })} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Title</label>
            <input
              style={inputStyle}
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Brief summary of your experience"
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Review</label>
            <textarea
              style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              required
              placeholder="Tell us about your experience..."
            />
          </div>
          <button type="submit" style={{ ...btnPrimary, width: '100%' }} disabled={loading}>
            {loading ? 'Saving...' : editData ? 'Update Review' : 'Submit Review'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Review() {
  const { t } = useLanguage();
  const rv = t.comm?.review || {};
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [editingReview, setEditingReview] = useState(null);

  const fetchReviews = useCallback(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setReviews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  // Check for existing auth on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('cij_token');
    if (savedToken) {
      fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${savedToken}` },
      })
        .then((res) => {
          if (!res.ok) throw new Error('Invalid token');
          return res.json();
        })
        .then((userData) => {
          setUser(userData);
          setToken(savedToken);
        })
        .catch(() => {
          localStorage.removeItem('cij_token');
          localStorage.removeItem('cij_user');
        });
    }
  }, []);

  const handleAuth = (userData, newToken) => {
    setUser(userData);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('cij_token');
    localStorage.removeItem('cij_user');
    setUser(null);
    setToken(null);
  };

  const handleWriteClick = () => {
    if (!user) {
      setShowAuth(true);
    } else {
      setEditingReview(null);
      setShowReviewForm(true);
    }
  };

  const handleEditClick = (review) => {
    setEditingReview(review);
    setShowReviewForm(true);
  };

  const handleReviewSubmit = async (formData, editId) => {
    const method = editId ? 'PUT' : 'POST';
    const body = editId
      ? { id: editId, title: formData.title, text: formData.text, rating: formData.rating }
      : { title: formData.title, text: formData.text, rating: formData.rating };

    const res = await fetch('/api/reviews', {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to save');

    setEditingReview(null);
    fetchReviews();
  };

  return (
    <Layout title={rv.pageTitle || 'Reviews'}>
      <PageHeader
        title={rv.pageTitle || 'Student Reviews'}
        description={rv.pageSub || 'Hear from our students and parents'}
        breadcrumbs={[
          { label: t.nav.community, href: '/community' },
          { label: rv.pageTitle || 'Reviews' },
        ]}
      />
      <section className="section">
        <div className="container">
          {/* User bar */}
          {user && (
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: '#FEF2F2', borderRadius: 12, padding: '12px 20px',
              marginBottom: 24, flexWrap: 'wrap', gap: 12,
            }}>
              <span style={{ fontSize: '0.92rem', color: '#212529' }}>
                <span style={{ fontWeight: 600 }}>{user.name}</span>
                <span style={{ color: '#6c757d', marginLeft: 8 }}>{user.email}</span>
              </span>
              <button onClick={handleLogout} style={{
                background: 'none', border: 'none', color: '#B91C1C',
                fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              }}>
                Log Out
              </button>
            </div>
          )}

          {/* Action bar */}
          <div style={{
            display: 'flex', justifyContent: 'flex-end', marginBottom: 28,
          }}>
            {user ? (
              <button onClick={handleWriteClick} style={btnPrimary}>
                Write Review
              </button>
            ) : (
              <button onClick={() => setShowAuth(true)} style={btnPrimary}>
                Log In to Write Review
              </button>
            )}
          </div>

          {loading ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#6c757d' }}>Loading...</p>
          ) : reviews.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#6c757d' }}>No reviews yet.</p>
          ) : (
          <div className="review-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="review-avatar">
                    <span style={{ fontSize: '1.6rem' }}>{review.flag || '👤'}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong className="review-name">{review.name}</strong>
                    {(review.country || review.program || review.duration) && (
                      <span className="review-meta">
                        {[review.country, review.program, review.duration].filter(Boolean).join(' · ')}
                      </span>
                    )}
                  </div>
                  {user && review.user_id === user.id && (
                    <button
                      onClick={() => handleEditClick(review)}
                      style={{
                        background: 'none', border: '1px solid #dee2e6', borderRadius: 6,
                        padding: '4px 12px', fontSize: '0.82rem', color: '#6c757d',
                        cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
                      }}
                    >
                      Edit
                    </button>
                  )}
                </div>
                <StarRating rating={review.rating} />
                {review.title && (
                  <h3 style={{
                    fontSize: '1.05rem', fontWeight: 600, color: '#1A1A2E',
                    margin: '10px 0 0',
                  }}>{review.title}</h3>
                )}
                <p className="review-text">{review.text}</p>
                <span className="review-date">
                  {review.created_at ? new Date(review.created_at).toLocaleDateString() : review.date}
                </span>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        onAuth={handleAuth}
      />
      <ReviewFormModal
        isOpen={showReviewForm}
        onClose={() => { setShowReviewForm(false); setEditingReview(null); }}
        onSubmit={handleReviewSubmit}
        editData={editingReview}
      />
    </Layout>
  );
}

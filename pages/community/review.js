import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import AuthModal from '@/components/AuthModal';
import { useLanguage } from '@/lib/LanguageContext';

const PER_PAGE = 14;

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
  outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box',
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

const closeBtn = {
  position: 'absolute', top: 16, right: 16, background: 'none',
  border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6c757d',
  lineHeight: 1,
};

function ReviewFormModal({ isOpen, onClose, onSubmit, editData }) {
  const [form, setForm] = useState({ title: '', text: '' });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (editData) {
      setForm({ title: editData.title || '', text: editData.text || '' });
      setImagePreview(editData.image_url || null);
      setImageFile(null);
    } else {
      setForm({ title: '', text: '' });
      setImageFile(null);
      setImagePreview(null);
    }
    setError('');
  }, [editData, isOpen]);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setImageFile(f);
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target.result);
    reader.readAsDataURL(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.text.trim()) { setError('Review content is required'); return; }
    setLoading(true);
    setError('');
    try {
      let image_url = editData?.image_url || null;
      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);
        const uploadRes = await fetch('/api/admin/upload', { method: 'POST', body: formData });
        const uploadData = await uploadRes.json();
        if (!uploadData.url) throw new Error(uploadData.error || 'Image upload failed');
        image_url = uploadData.url;
      }
      await onSubmit({ ...form, image_url }, editData?.id);
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
            <label style={labelStyle}>Title</label>
            <input
              style={inputStyle}
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Brief summary of your experience"
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Review</label>
            <textarea
              style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              required
              placeholder="Tell us about your experience..."
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Image (optional)</label>
            <div
              onClick={() => document.getElementById('review-image-input').click()}
              style={{
                border: '2px dashed #dee2e6', borderRadius: 12,
                padding: imagePreview ? 0 : '24px 16px', textAlign: 'center',
                cursor: 'pointer', overflow: 'hidden', background: '#fafafa',
              }}
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" style={{ width: '100%', maxHeight: 200, objectFit: 'cover', display: 'block' }} />
              ) : (
                <p style={{ margin: 0, color: '#999', fontSize: '0.88rem' }}>Click to select image</p>
              )}
            </div>
            <input
              id="review-image-input"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
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
  const [expandedId, setExpandedId] = useState(null);
  const [page, setPage] = useState(1);

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

  const handleEditClick = (e, review) => {
    e.stopPropagation();
    setEditingReview(review);
    setShowReviewForm(true);
  };

  const handleReviewSubmit = async (formData, editId) => {
    const method = editId ? 'PUT' : 'POST';
    const body = editId
      ? { id: editId, title: formData.title, text: formData.text, image_url: formData.image_url }
      : { title: formData.title, text: formData.text, image_url: formData.image_url };

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

  const totalPages = Math.ceil(reviews.length / PER_PAGE);
  const currentReviews = reviews.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const getDisplayTitle = (review) => {
    if (review.title) return review.title;
    if (review.text) return review.text.length > 50 ? review.text.substring(0, 50) + '...' : review.text;
    return 'No title';
  };

  return (
    <Layout title={rv.pageTitle || 'Reviews'}>
      <PageHeader
        title={rv.pageTitle || 'Student Reviews'}
        subtitle={rv.pageSub || 'Hear from our students and parents'}
        breadcrumb={[
          { label: t.nav.community, href: '/community' },
          { label: rv.pageTitle || 'Reviews' },
        ]}
        backgroundImage="/images/headers/review.svg"
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
            <div className="board">
              <table className="board-table">
                <thead>
                  <tr>
                    <th className="board-col-no">{t.comm?.boardNo || 'No'}</th>
                    <th className="board-col-title">{t.comm?.boardTitle || 'Title'}</th>
                    <th className="board-col-date" style={{ width: 100 }}>Author</th>
                    <th className="board-col-date">{t.comm?.boardDate || 'Date'}</th>
                  </tr>
                </thead>
                <tbody>
                  {currentReviews.map((review, i) => (
                    <React.Fragment key={review.id}>
                      <tr
                        style={{ cursor: 'pointer' }}
                        onClick={() => setExpandedId(expandedId === review.id ? null : review.id)}
                      >
                        <td className="board-no">{reviews.length - ((page - 1) * PER_PAGE + i)}</td>
                        <td className="board-title">
                          <span style={{ color: '#1A1A2E' }}>{getDisplayTitle(review)}</span>
                        </td>
                        <td className="board-date" style={{ width: 100 }}>{review.name || 'Anonymous'}</td>
                        <td className="board-date">
                          {review.created_at ? new Date(review.created_at).toLocaleDateString() : review.date || ''}
                        </td>
                      </tr>
                      {expandedId === review.id && (
                        <tr>
                          <td colSpan="4" style={{ padding: '20px 24px', background: '#FAFAFA', borderBottom: '1px solid #eee' }}>
                            <div style={{ maxWidth: 700 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                                <span style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                                  by <strong>{review.name || 'Anonymous'}</strong>
                                  {review.created_at && ` on ${new Date(review.created_at).toLocaleDateString()}`}
                                </span>
                              </div>
                              {review.title && (
                                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1A1A2E', marginBottom: 8 }}>
                                  {review.title}
                                </h4>
                              )}
                              {review.image_url && (
                                <div style={{ marginBottom: 16 }}>
                                  <img
                                    src={review.image_url}
                                    alt={review.title || 'Review image'}
                                    style={{ maxWidth: '100%', maxHeight: 300, borderRadius: 8, objectFit: 'cover' }}
                                  />
                                </div>
                              )}
                              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#333', margin: 0, whiteSpace: 'pre-wrap' }}>
                                {review.text}
                              </p>
                              {user && review.user_id === user.id && (
                                <button
                                  onClick={(e) => handleEditClick(e, review)}
                                  style={{
                                    marginTop: 16,
                                    background: 'none', border: '1px solid #B91C1C', borderRadius: 6,
                                    padding: '6px 16px', fontSize: '0.85rem', color: '#B91C1C',
                                    cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600,
                                  }}
                                >
                                  Edit
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
              <div className="board-pagination">
                <button
                  className="board-page-btn"
                  disabled={page <= 1}
                  onClick={() => setPage(page - 1)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    className={`board-page-num ${p === page ? 'active' : ''}`}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                ))}
                <button
                  className="board-page-btn"
                  disabled={page >= totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
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

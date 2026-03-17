import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';

// ─── Tabs Configuration ───
const TABS = [
  { key: 'letters', label: 'Letters', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6' },
  { key: 'notices', label: 'Notices', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8' },
  { key: 'gallery', label: 'Gallery', icon: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
  { key: 'reviews', label: 'Reviews', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
];

const PRIMARY = '#B91C1C';
const PRIMARY_LIGHT = '#FEF2F2';
const FONT = "'Poppins', sans-serif";

// ─── Main Component ───
export default function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [activeTab, setActiveTab] = useState('letters');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '1234') {
      setAuthed(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!authed) {
    return (
      <>
        <Head><title>Admin Dashboard</title></Head>
        <div style={styles.loginWrapper}>
          <form onSubmit={handleLogin} style={styles.loginForm}>
            <div style={{ marginBottom: 24 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: PRIMARY, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h1 style={styles.loginTitle}>Admin Dashboard</h1>
              <p style={styles.loginDesc}>Enter password to continue</p>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={styles.input}
              autoFocus
            />
            <button type="submit" style={styles.btnPrimary}>Login</button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <Head><title>Admin Dashboard</title></Head>
      <div style={styles.shell}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.sidebarBrand}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: PRIMARY, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>CIJ</span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a2e' }}>CIJ Admin</div>
              <div style={{ fontSize: '0.72rem', color: '#999' }}>Dashboard</div>
            </div>
          </div>
          <nav style={styles.sidebarNav}>
            {TABS.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    ...styles.sidebarBtn,
                    ...(active ? styles.sidebarBtnActive : {}),
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? PRIMARY : '#888'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={tab.icon} />
                  </svg>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
          <div style={styles.sidebarFooter}>
            <button
              onClick={() => { setAuthed(false); setPassword(''); }}
              style={styles.logoutBtn}
            >
              Logout
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main style={styles.main}>
          {activeTab === 'letters' && <LettersTab />}
          {activeTab === 'notices' && <NoticesTab />}
          {activeTab === 'gallery' && <GalleryTab />}
          {activeTab === 'reviews' && <ReviewsTab />}
        </main>
      </div>
    </>
  );
}

// ─── Letters Tab ───
function LettersTab() {
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => { fetchLetters(); }, []);

  const fetchLetters = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/letters');
      const data = await res.json();
      setLetters(data);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const deleteLetter = async (id) => {
    if (!confirm('Delete this letter?')) return;
    await fetch(`/api/admin/letters?id=${id}`, { method: 'DELETE' });
    setLetters((prev) => prev.filter((l) => l.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Letters from Parents</h1>
        <span style={styles.badge}>{letters.length} total</span>
      </div>
      {loading ? (
        <LoadingState />
      ) : letters.length === 0 ? (
        <EmptyState message="No letters yet" />
      ) : (
        <div style={styles.splitLayout}>
          <div style={styles.splitList}>
            {letters.map((letter) => (
              <div
                key={letter.id}
                onClick={() => setSelected(letter)}
                style={{
                  ...styles.listCard,
                  ...(selected?.id === letter.id ? styles.listCardActive : {}),
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <strong style={{ fontSize: '0.93rem', color: '#1a1a2e' }}>{letter.title}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#999', flexShrink: 0, marginLeft: 8 }}>
                    {formatDate(letter.created_at)}
                  </span>
                </div>
                <span style={{ fontSize: '0.82rem', color: '#888' }}>To: {letter.student_name}</span>
              </div>
            ))}
          </div>
          <div style={styles.splitDetail}>
            {selected ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', margin: 0 }}>{selected.title}</h2>
                  <button onClick={() => deleteLetter(selected.id)} style={styles.btnDanger}>Delete</button>
                </div>
                <div style={{ display: 'flex', gap: 24, fontSize: '0.88rem', color: '#666', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #eee' }}>
                  <span><strong>Student:</strong> {selected.student_name}</span>
                  <span><strong>Date:</strong> {new Date(selected.created_at).toLocaleString('ko-KR')}</span>
                </div>
                <div style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#333' }}>
                  {(selected.content || '').split('\n').map((line, i) => (
                    <p key={i} style={{ margin: '0 0 8px' }}>{line || '\u00A0'}</p>
                  ))}
                </div>
              </>
            ) : (
              <div style={styles.detailPlaceholder}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <p style={{ margin: '12px 0 0', color: '#bbb' }}>Select a letter to view</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Notices Tab ───
function NoticesTab() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [form, setForm] = useState({ title: '', content: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { fetchNotices(); }, []);

  const fetchNotices = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/notices');
      const data = await res.json();
      setNotices(data);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return alert('Please fill in all fields.');
    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/notices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const newNotice = await res.json();
      setNotices((prev) => [newNotice, ...prev]);
      setForm({ title: '', content: '' });
      setShowForm(false);
    } catch (err) { console.error(err); alert('Failed to add notice.'); }
    setSubmitting(false);
  };

  const deleteNotice = async (id) => {
    if (!confirm('Delete this notice?')) return;
    await fetch(`/api/admin/notices?id=${id}`, { method: 'DELETE' });
    setNotices((prev) => prev.filter((n) => n.id !== id));
    if (expanded === id) setExpanded(null);
  };

  return (
    <div>
      <div style={styles.pageHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h1 style={styles.pageTitle}>Notices</h1>
          <span style={styles.badge}>{notices.length} total</span>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={styles.btnPrimary}>
          {showForm ? 'Cancel' : '+ Add Notice'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={styles.formCard}>
          <h3 style={styles.formTitle}>New Notice</h3>
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            style={styles.input}
          />
          <textarea
            placeholder="Content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            style={{ ...styles.input, minHeight: 120, resize: 'vertical' }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" disabled={submitting} style={styles.btnPrimary}>
              {submitting ? 'Saving...' : 'Save Notice'}
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <LoadingState />
      ) : notices.length === 0 ? (
        <EmptyState message="No notices yet" />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {notices.map((notice) => (
            <div key={notice.id} style={styles.tableRow}>
              <div
                onClick={() => setExpanded(expanded === notice.id ? null : notice.id)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '16px 20px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: expanded === notice.id ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <strong style={{ fontSize: '0.93rem', color: '#1a1a2e', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{notice.title}</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, marginLeft: 16 }}>
                  <span style={{ fontSize: '0.8rem', color: '#999' }}>{formatDate(notice.created_at)}</span>
                  <button onClick={(e) => { e.stopPropagation(); deleteNotice(notice.id); }} style={styles.btnSmallDanger}>Delete</button>
                </div>
              </div>
              {expanded === notice.id && (
                <div style={{ padding: '0 20px 20px 48px', fontSize: '0.9rem', lineHeight: 1.7, color: '#444', borderTop: '1px solid #f0f0f0' }}>
                  <div style={{ paddingTop: 16 }}>
                    {(notice.content || '').split('\n').map((line, i) => (
                      <p key={i} style={{ margin: '0 0 6px' }}>{line || '\u00A0'}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Gallery Tab ───
function GalleryTab() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', image_url: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { fetchImages(); }, []);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/gallery');
      const data = await res.json();
      setImages(data);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.image_url.trim()) return alert('Please fill in all fields.');
    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const newImage = await res.json();
      setImages((prev) => [newImage, ...prev]);
      setForm({ title: '', image_url: '' });
      setShowForm(false);
    } catch (err) { console.error(err); alert('Failed to add image.'); }
    setSubmitting(false);
  };

  const deleteImage = async (id) => {
    if (!confirm('Delete this image?')) return;
    await fetch(`/api/admin/gallery?id=${id}`, { method: 'DELETE' });
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div>
      <div style={styles.pageHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h1 style={styles.pageTitle}>Gallery</h1>
          <span style={styles.badge}>{images.length} images</span>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={styles.btnPrimary}>
          {showForm ? 'Cancel' : '+ Add Image'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={styles.formCard}>
          <h3 style={styles.formTitle}>New Image</h3>
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            style={styles.input}
          />
          <input
            type="url"
            placeholder="Image URL (https://...)"
            value={form.image_url}
            onChange={(e) => setForm({ ...form, image_url: e.target.value })}
            style={styles.input}
          />
          {form.image_url && (
            <div style={{ marginBottom: 16, borderRadius: 8, overflow: 'hidden', border: '1px solid #eee', maxHeight: 200 }}>
              <img
                src={form.image_url}
                alt="Preview"
                style={{ width: '100%', maxHeight: 200, objectFit: 'cover', display: 'block' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" disabled={submitting} style={styles.btnPrimary}>
              {submitting ? 'Saving...' : 'Save Image'}
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <LoadingState />
      ) : images.length === 0 ? (
        <EmptyState message="No images yet" />
      ) : (
        <div style={styles.imageGrid}>
          {images.map((img) => (
            <div key={img.id} style={styles.imageCard}>
              <div style={styles.imageWrapper}>
                <img
                  src={img.image_url}
                  alt={img.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#ccc;font-size:0.85rem;">Image not found</div>';
                  }}
                />
              </div>
              <div style={{ padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1a1a2e', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{img.title}</span>
                <button onClick={() => deleteImage(img.id)} style={styles.btnSmallDanger}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Reviews Tab ───
function ReviewsTab() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', country: '', flag: '', program: '', duration: '', rating: 5, text: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { fetchReviews(); }, []);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/reviews');
      const data = await res.json();
      setReviews(data);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return alert('Name and review text are required.');
    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, rating: Number(form.rating) }),
      });
      const newReview = await res.json();
      setReviews((prev) => [newReview, ...prev]);
      setForm({ name: '', country: '', flag: '', program: '', duration: '', rating: 5, text: '' });
      setShowForm(false);
    } catch (err) { console.error(err); alert('Failed to add review.'); }
    setSubmitting(false);
  };

  const deleteReview = async (id) => {
    if (!confirm('Delete this review?')) return;
    await fetch(`/api/admin/reviews?id=${id}`, { method: 'DELETE' });
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#F59E0B' : '#ddd', fontSize: '1rem' }}>★</span>
    ));
  };

  return (
    <div>
      <div style={styles.pageHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h1 style={styles.pageTitle}>Reviews</h1>
          <span style={styles.badge}>{reviews.length} total</span>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={styles.btnPrimary}>
          {showForm ? 'Cancel' : '+ Add Review'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={styles.formCard}>
          <h3 style={styles.formTitle}>New Review</h3>
          <div style={styles.formGrid}>
            <input
              type="text"
              placeholder="Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Country (e.g. Japan)"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Flag emoji (e.g. 🇯🇵)"
              value={form.flag}
              onChange={(e) => setForm({ ...form, flag: e.target.value })}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Program (e.g. ESL Intensive)"
              value={form.program}
              onChange={(e) => setForm({ ...form, program: e.target.value })}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Duration (e.g. 12 weeks)"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              style={styles.input}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <label style={{ fontSize: '0.88rem', color: '#666', flexShrink: 0 }}>Rating:</label>
              <select
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: e.target.value })}
                style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              >
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>{'★'.repeat(n)}{'☆'.repeat(5 - n)} ({n})</option>
                ))}
              </select>
            </div>
          </div>
          <textarea
            placeholder="Review text *"
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            style={{ ...styles.input, minHeight: 100, resize: 'vertical' }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" disabled={submitting} style={styles.btnPrimary}>
              {submitting ? 'Saving...' : 'Save Review'}
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <LoadingState />
      ) : reviews.length === 0 ? (
        <EmptyState message="No reviews yet" />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {reviews.map((review) => (
            <div key={review.id} style={styles.reviewCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={styles.reviewAvatar}>
                    {review.flag || review.name?.charAt(0)?.toUpperCase() || '?'}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#1a1a2e' }}>
                      {review.name}
                      {review.country && <span style={{ fontWeight: 400, color: '#888', marginLeft: 8, fontSize: '0.85rem' }}>{review.country}</span>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 2 }}>
                      <span>{renderStars(review.rating || 0)}</span>
                      {review.program && <span style={{ fontSize: '0.8rem', color: '#888' }}>{review.program}</span>}
                      {review.duration && <span style={{ fontSize: '0.8rem', color: '#aaa' }}>{review.duration}</span>}
                    </div>
                  </div>
                </div>
                <button onClick={() => deleteReview(review.id)} style={styles.btnSmallDanger}>Delete</button>
              </div>
              <p style={{ margin: '14px 0 0', fontSize: '0.9rem', lineHeight: 1.7, color: '#444' }}>{review.text}</p>
              {review.created_at && (
                <div style={{ marginTop: 10, fontSize: '0.75rem', color: '#bbb' }}>{formatDate(review.created_at)}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Shared Components ───
function LoadingState() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 0', color: '#999' }}>
      <div style={{ width: 32, height: 32, border: '3px solid #eee', borderTopColor: PRIMARY, borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 12px' }} />
      <p style={{ fontSize: '0.9rem' }}>Loading...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div style={{ textAlign: 'center', padding: '80px 0', color: '#bbb' }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 12 }}>
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
      </svg>
      <p style={{ fontSize: '0.9rem' }}>{message}</p>
    </div>
  );
}

// ─── Helpers ───
function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('ko-KR');
}

// ─── Styles ───
const styles = {
  // Login
  loginWrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f5f5',
    fontFamily: FONT,
  },
  loginForm: {
    background: '#fff',
    padding: '48px 40px',
    borderRadius: 16,
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    textAlign: 'center',
    width: 380,
    maxWidth: '90vw',
  },
  loginTitle: {
    fontSize: '1.35rem',
    fontWeight: 700,
    marginBottom: 6,
    color: '#1a1a2e',
  },
  loginDesc: {
    fontSize: '0.88rem',
    color: '#888',
    margin: 0,
  },

  // Shell
  shell: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: FONT,
    background: '#f8f8fa',
  },

  // Sidebar
  sidebar: {
    width: 240,
    background: '#fff',
    borderRight: '1px solid #eee',
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    height: '100vh',
    flexShrink: 0,
  },
  sidebarBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '24px 20px 20px',
    borderBottom: '1px solid #f0f0f0',
  },
  sidebarNav: {
    flex: 1,
    padding: '16px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  sidebarBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    padding: '10px 12px',
    border: 'none',
    borderRadius: 8,
    background: 'transparent',
    color: '#666',
    fontSize: '0.88rem',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: FONT,
    textAlign: 'left',
    transition: 'all 0.15s',
  },
  sidebarBtnActive: {
    background: PRIMARY_LIGHT,
    color: PRIMARY,
    fontWeight: 600,
  },
  sidebarFooter: {
    padding: '16px 12px',
    borderTop: '1px solid #f0f0f0',
  },
  logoutBtn: {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #eee',
    borderRadius: 8,
    background: '#fff',
    color: '#999',
    fontSize: '0.82rem',
    cursor: 'pointer',
    fontFamily: FONT,
  },

  // Main content
  main: {
    flex: 1,
    padding: '32px 36px',
    overflowY: 'auto',
    minWidth: 0,
  },

  // Page header
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    flexWrap: 'wrap',
    gap: 12,
  },
  pageTitle: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color: '#1a1a2e',
    margin: 0,
  },
  badge: {
    background: PRIMARY,
    color: '#fff',
    padding: '3px 12px',
    borderRadius: 20,
    fontSize: '0.78rem',
    fontWeight: 600,
  },

  // Inputs
  input: {
    width: '100%',
    padding: '10px 14px',
    border: '1px solid #ddd',
    borderRadius: 8,
    fontSize: '0.9rem',
    marginBottom: 12,
    fontFamily: FONT,
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.15s',
  },

  // Buttons
  btnPrimary: {
    padding: '10px 20px',
    background: PRIMARY,
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: '0.88rem',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: FONT,
    whiteSpace: 'nowrap',
  },
  btnDanger: {
    padding: '6px 16px',
    background: '#fff',
    border: '1px solid #fca5a5',
    borderRadius: 8,
    fontSize: '0.82rem',
    color: '#DC2626',
    cursor: 'pointer',
    fontFamily: FONT,
    flexShrink: 0,
    fontWeight: 500,
  },
  btnSmallDanger: {
    padding: '4px 12px',
    background: 'none',
    border: '1px solid #e5e5e5',
    borderRadius: 6,
    fontSize: '0.78rem',
    color: '#999',
    cursor: 'pointer',
    fontFamily: FONT,
    flexShrink: 0,
    transition: 'all 0.15s',
  },

  // Form card
  formCard: {
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #eee',
    padding: '24px',
    marginBottom: 24,
  },
  formTitle: {
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#1a1a2e',
    margin: '0 0 16px',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '0 12px',
  },

  // Split layout (letters)
  splitLayout: {
    display: 'grid',
    gridTemplateColumns: '340px 1fr',
    gap: 20,
    minHeight: 'calc(100vh - 140px)',
  },
  splitList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 140px)',
    paddingRight: 4,
  },
  splitDetail: {
    background: '#fff',
    borderRadius: 14,
    border: '1px solid #eee',
    padding: '28px',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 140px)',
  },
  detailPlaceholder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minHeight: 300,
  },

  // List card
  listCard: {
    padding: '14px 16px',
    background: '#fff',
    borderRadius: 10,
    border: '1px solid #eee',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  listCardActive: {
    borderColor: PRIMARY,
    background: PRIMARY_LIGHT,
  },

  // Table row (notices)
  tableRow: {
    background: '#fff',
    borderRadius: 10,
    border: '1px solid #eee',
    overflow: 'hidden',
  },

  // Image grid
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: 16,
  },
  imageCard: {
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #eee',
    overflow: 'hidden',
  },
  imageWrapper: {
    width: '100%',
    height: 180,
    background: '#f5f5f5',
    overflow: 'hidden',
  },

  // Review card
  reviewCard: {
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #eee',
    padding: '20px 24px',
  },
  reviewAvatar: {
    width: 42,
    height: 42,
    borderRadius: '50%',
    background: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    flexShrink: 0,
  },
};

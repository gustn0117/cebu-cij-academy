import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';

// ─── Tabs Configuration ───
const TABS = [
  { key: 'letters', label: 'Letters', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6' },
  { key: 'notices', label: 'Notices', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8' },
  { key: 'reviews', label: 'Reviews', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
  { key: 'reports', label: 'Reports', icon: 'M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z' },
  { key: 'members', label: 'Members', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75' },
  { key: 'floating', label: 'Floating Bar', icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' },
  { key: 'images', label: 'Images', icon: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M21 15l-5-5L5 21' },
  { key: 'popups', label: 'Popups', icon: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0' },
  { key: 'texts', label: 'Text Mgmt', icon: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' },
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
          {activeTab === 'reviews' && <ReviewsTab />}
          {activeTab === 'reports' && <ReportsTab />}
          {activeTab === 'members' && <MembersTab />}
          {activeTab === 'floating' && <FloatingTab />}
          {activeTab === 'images' && <ImagesTab />}
          {activeTab === 'popups' && <PopupsTab />}
          {activeTab === 'texts' && <TextsTab />}
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
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
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

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !file) return alert('Please add a title and select an image.');
    setSubmitting(true);
    try {
      // 1. Upload file
      const formData = new FormData();
      formData.append('file', file);
      const uploadRes = await fetch('/api/admin/upload', { method: 'POST', body: formData });
      const uploadData = await uploadRes.json();
      if (!uploadData.url) throw new Error(uploadData.error || 'Upload failed');

      // 2. Save to DB
      const res = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, image_url: uploadData.url }),
      });
      const newImage = await res.json();
      setImages((prev) => [newImage, ...prev]);
      setTitle('');
      setFile(null);
      setPreview(null);
      setShowForm(false);
    } catch (err) { console.error(err); alert('Failed to upload image: ' + err.message); }
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
        <button onClick={() => { setShowForm(!showForm); setFile(null); setPreview(null); setTitle(''); }} style={styles.btnPrimary}>
          {showForm ? 'Cancel' : '+ Add Image'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={styles.formCard}>
          <h3 style={styles.formTitle}>Upload Image</h3>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
          />
          <div
            onClick={() => document.getElementById('gallery-file-input').click()}
            style={{
              border: '2px dashed #ddd',
              borderRadius: 12,
              padding: preview ? 0 : '40px 20px',
              textAlign: 'center',
              cursor: 'pointer',
              marginBottom: 16,
              overflow: 'hidden',
              background: '#fafafa',
              transition: 'border-color 0.2s',
            }}
          >
            {preview ? (
              <img src={preview} alt="Preview" style={{ width: '100%', maxHeight: 240, objectFit: 'cover', display: 'block' }} />
            ) : (
              <>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p style={{ margin: '12px 0 0', color: '#999', fontSize: '0.88rem' }}>Click to select image</p>
                <p style={{ margin: '4px 0 0', color: '#ccc', fontSize: '0.78rem' }}>JPG, PNG, WebP (max 10MB)</p>
              </>
            )}
          </div>
          <input
            id="gallery-file-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" disabled={submitting} style={styles.btnPrimary}>
              {submitting ? 'Uploading...' : 'Upload & Save'}
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

// ─── Reports Tab ───
function ReportsTab() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [form, setForm] = useState({ title: '', content: '', image_url: '', password: '' });
  const [submitting, setSubmitting] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', content: '', image_url: '', password: '' });
  const [editFile, setEditFile] = useState(null);
  const [editPreview, setEditPreview] = useState(null);

  useEffect(() => { fetchReports(); }, []);

  const fetchReports = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/reports');
      const data = await res.json();
      setReports(data);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const handleFileChange = (e, isEdit) => {
    const f = e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (isEdit) { setEditFile(f); setEditPreview(ev.target.result); }
      else { setFile(f); setPreview(ev.target.result); }
    };
    reader.readAsDataURL(f);
  };

  const uploadImage = async (fileToUpload) => {
    const formData = new FormData();
    formData.append('file', fileToUpload);
    const uploadRes = await fetch('/api/admin/upload', { method: 'POST', body: formData });
    const uploadData = await uploadRes.json();
    if (!uploadData.url) throw new Error(uploadData.error || 'Upload failed');
    return uploadData.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert('Title is required.');
    setSubmitting(true);
    try {
      let image_url = form.image_url;
      if (file) image_url = await uploadImage(file);
      const res = await fetch('/api/admin/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, image_url }),
      });
      const newReport = await res.json();
      setReports((prev) => [newReport, ...prev]);
      setForm({ title: '', content: '', image_url: '', password: '' });
      setFile(null);
      setPreview(null);
      setShowForm(false);
    } catch (err) { console.error(err); alert('Failed to add report: ' + err.message); }
    setSubmitting(false);
  };

  const deleteReport = async (id) => {
    if (!confirm('Delete this report?')) return;
    await fetch(`/api/admin/reports?id=${id}`, { method: 'DELETE' });
    setReports((prev) => prev.filter((r) => r.id !== id));
    if (expanded === id) setExpanded(null);
  };

  const openEdit = (report) => {
    setEditModal(report);
    setEditForm({ title: report.title || '', content: report.content || '', image_url: report.image_url || '', password: report.password || '' });
    setEditFile(null);
    setEditPreview(report.image_url || null);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!editForm.title.trim()) return alert('Title is required.');
    setSubmitting(true);
    try {
      let image_url = editForm.image_url;
      if (editFile) image_url = await uploadImage(editFile);
      const res = await fetch('/api/admin/reports', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editModal.id, ...editForm, image_url }),
      });
      const updated = await res.json();
      setReports((prev) => prev.map((r) => r.id === editModal.id ? updated : r));
      setEditModal(null);
    } catch (err) { console.error(err); alert('Failed to update: ' + err.message); }
    setSubmitting(false);
  };

  return (
    <div>
      <div style={styles.pageHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h1 style={styles.pageTitle}>Reports</h1>
          <span style={styles.badge}>{reports.length} total</span>
        </div>
        <button onClick={() => { setShowForm(!showForm); setFile(null); setPreview(null); setForm({ title: '', content: '', image_url: '', password: '' }); }} style={styles.btnPrimary}>
          {showForm ? 'Cancel' : '+ Add Report'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={styles.formCard}>
          <h3 style={styles.formTitle}>New Report</h3>
          <input type="text" placeholder="Title *" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} style={styles.input} />
          <textarea placeholder="Content" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} style={{ ...styles.input, minHeight: 120, resize: 'vertical' }} />
          <div
            onClick={() => document.getElementById('report-file-input').click()}
            style={{ border: '2px dashed #ddd', borderRadius: 12, padding: preview ? 0 : '32px 20px', textAlign: 'center', cursor: 'pointer', marginBottom: 12, overflow: 'hidden', background: '#fafafa' }}
          >
            {preview ? (
              <img src={preview} alt="Preview" style={{ width: '100%', maxHeight: 200, objectFit: 'cover', display: 'block' }} />
            ) : (
              <p style={{ margin: 0, color: '#999', fontSize: '0.88rem' }}>Click to select image (optional)</p>
            )}
          </div>
          <input id="report-file-input" type="file" accept="image/*" onChange={(e) => handleFileChange(e, false)} style={{ display: 'none' }} />
          <input type="text" placeholder="Password (optional)" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} style={styles.input} />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" disabled={submitting} style={styles.btnPrimary}>{submitting ? 'Saving...' : 'Save Report'}</button>
          </div>
        </form>
      )}

      {/* Edit Modal */}
      {editModal && (
        <div style={styles.modalOverlay} onClick={() => setEditModal(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleEditSubmit}>
              <h3 style={styles.formTitle}>Edit Report</h3>
              <input type="text" placeholder="Title *" value={editForm.title} onChange={(e) => setEditForm({ ...editForm, title: e.target.value })} style={styles.input} />
              <textarea placeholder="Content" value={editForm.content} onChange={(e) => setEditForm({ ...editForm, content: e.target.value })} style={{ ...styles.input, minHeight: 120, resize: 'vertical' }} />
              <div
                onClick={() => document.getElementById('report-edit-file-input').click()}
                style={{ border: '2px dashed #ddd', borderRadius: 12, padding: editPreview ? 0 : '32px 20px', textAlign: 'center', cursor: 'pointer', marginBottom: 12, overflow: 'hidden', background: '#fafafa' }}
              >
                {editPreview ? (
                  <img src={editPreview} alt="Preview" style={{ width: '100%', maxHeight: 200, objectFit: 'cover', display: 'block' }} />
                ) : (
                  <p style={{ margin: 0, color: '#999', fontSize: '0.88rem' }}>Click to select image (optional)</p>
                )}
              </div>
              <input id="report-edit-file-input" type="file" accept="image/*" onChange={(e) => handleFileChange(e, true)} style={{ display: 'none' }} />
              <input type="text" placeholder="Password (optional)" value={editForm.password} onChange={(e) => setEditForm({ ...editForm, password: e.target.value })} style={styles.input} />
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                <button type="button" onClick={() => setEditModal(null)} style={styles.btnSmallDanger}>Cancel</button>
                <button type="submit" disabled={submitting} style={styles.btnPrimary}>{submitting ? 'Saving...' : 'Update Report'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <LoadingState />
      ) : reports.length === 0 ? (
        <EmptyState message="No reports yet" />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {reports.map((report) => (
            <div key={report.id} style={styles.tableRow}>
              <div
                onClick={() => setExpanded(expanded === report.id ? null : report.id)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '16px 20px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: expanded === report.id ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <strong style={{ fontSize: '0.93rem', color: '#1a1a2e', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{report.title}</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, marginLeft: 16 }}>
                  <span style={{ fontSize: '0.8rem', color: '#999' }}>{formatDate(report.created_at)}</span>
                  <button onClick={(e) => { e.stopPropagation(); openEdit(report); }} style={styles.btnSmallDanger}>Edit</button>
                  <button onClick={(e) => { e.stopPropagation(); deleteReport(report.id); }} style={styles.btnSmallDanger}>Delete</button>
                </div>
              </div>
              {expanded === report.id && (
                <div style={{ padding: '0 20px 20px 48px', fontSize: '0.9rem', lineHeight: 1.7, color: '#444', borderTop: '1px solid #f0f0f0' }}>
                  <div style={{ paddingTop: 16 }}>
                    {report.image_url && (
                      <img src={report.image_url} alt={report.title} style={{ maxWidth: '100%', maxHeight: 240, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }} />
                    )}
                    {(report.content || '').split('\n').map((line, i) => (
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

// ─── Members Tab ───
function MembersTab() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchMembers(); }, []);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/members');
      const data = await res.json();
      setMembers(data);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const deleteMember = async (id) => {
    if (!confirm('Are you sure you want to remove this member?')) return;
    await fetch(`/api/admin/members?id=${id}`, { method: 'DELETE' });
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div>
      <div style={styles.pageHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h1 style={styles.pageTitle}>Members</h1>
          <span style={styles.badge}>{members.length} total</span>
        </div>
      </div>

      {loading ? (
        <LoadingState />
      ) : members.length === 0 ? (
        <EmptyState message="No members yet" />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {members.map((member) => (
            <div key={member.id} style={{ ...styles.tableRow, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 600, color: '#888', flexShrink: 0 }}>
                    {(member.name || member.email || '?').charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.93rem', color: '#1a1a2e' }}>{member.name || 'No Name'}</div>
                    <div style={{ fontSize: '0.82rem', color: '#888' }}>{member.email || ''}</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#999', flexShrink: 0 }}>{formatDate(member.created_at)}</span>
              </div>
              <button onClick={() => deleteMember(member.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexShrink: 0 }} title="Remove member">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Floating Bar Tab ───
function FloatingTab() {
  const FLOATING_FIELDS = ['phone', 'email', 'facebook', 'instagram', 'tiktok', 'youtube'];
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => { fetchSettings(); }, []);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/floating');
      const data = await res.json();
      const map = {};
      (data || []).forEach((item) => { map[item.key] = item.value || ''; });
      setValues(map);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const handleSave = async () => {
    setSaving(true);
    setSuccess(false);
    try {
      const settings = FLOATING_FIELDS.map((key) => ({ key, value: values[key] || '' }));
      await fetch('/api/admin/floating', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings }),
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) { console.error(err); alert('Failed to save settings.'); }
    setSaving(false);
  };

  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Floating Bar Settings</h1>
      </div>

      {loading ? (
        <LoadingState />
      ) : (
        <div style={styles.formCard}>
          <h3 style={styles.formTitle}>Contact & Social Links</h3>
          {FLOATING_FIELDS.map((field) => (
            <div key={field} style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#555', marginBottom: 6, textTransform: 'capitalize' }}>{field}</label>
              <input
                type="text"
                placeholder={`Enter ${field}`}
                value={values[field] || ''}
                onChange={(e) => setValues({ ...values, [field]: e.target.value })}
                style={{ ...styles.input, marginBottom: 0 }}
              />
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
            <button onClick={handleSave} disabled={saving} style={styles.btnPrimary}>
              {saving ? 'Saving...' : 'Save Settings'}
            </button>
            {success && <span style={{ color: '#16a34a', fontSize: '0.88rem', fontWeight: 500 }}>Settings saved successfully!</span>}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Images Tab ───
function ImagesTab() {
  const [heroSlides, setHeroSlides] = useState([null, null, null, null]);
  const [heroLoading, setHeroLoading] = useState(true);
  const [facilityImages, setFacilityImages] = useState([]);
  const [facilityLoading, setFacilityLoading] = useState(true);
  const [uploading, setUploading] = useState(null);
  const [facForm, setFacForm] = useState({ section: 'liloan', title: '', file: null });
  const [facPreview, setFacPreview] = useState(null);
  const [facUploading, setFacUploading] = useState(false);

  useEffect(() => {
    fetchHeroSlides();
    fetchFacilityImages();
  }, []);

  const fetchHeroSlides = async () => {
    setHeroLoading(true);
    try {
      const res = await fetch('/api/admin/hero-slides');
      const data = await res.json();
      const slots = [null, null, null, null];
      (data || []).forEach((slide) => {
        const pos = (slide.position || 1) - 1;
        if (pos >= 0 && pos < 4) slots[pos] = slide;
      });
      setHeroSlides(slots);
    } catch (err) { console.error(err); }
    setHeroLoading(false);
  };

  const fetchFacilityImages = async () => {
    setFacilityLoading(true);
    try {
      const res = await fetch('/api/admin/facility-images');
      const data = await res.json();
      setFacilityImages(data || []);
    } catch (err) { console.error(err); }
    setFacilityLoading(false);
  };

  const handleHeroUpload = async (slotIndex) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      setUploading(slotIndex);
      try {
        const formData = new FormData();
        formData.append('file', file);
        const uploadRes = await fetch('/api/admin/upload', { method: 'POST', body: formData });
        const uploadData = await uploadRes.json();
        if (!uploadData.url) throw new Error(uploadData.error || 'Upload failed');

        const existing = heroSlides[slotIndex];
        const position = slotIndex + 1;

        if (existing) {
          const res = await fetch('/api/admin/hero-slides', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: existing.id, image_url: uploadData.url, position }),
          });
          const updated = await res.json();
          setHeroSlides((prev) => {
            const next = [...prev];
            next[slotIndex] = updated;
            return next;
          });
        } else {
          const res = await fetch('/api/admin/hero-slides', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image_url: uploadData.url, position }),
          });
          const created = await res.json();
          setHeroSlides((prev) => {
            const next = [...prev];
            next[slotIndex] = created;
            return next;
          });
        }
      } catch (err) { alert('Upload failed: ' + err.message); }
      setUploading(null);
    };
    input.click();
  };

  const handleHeroDelete = async (slotIndex) => {
    const slide = heroSlides[slotIndex];
    if (!slide) return;
    if (!confirm('Delete this hero image?')) return;
    try {
      await fetch(`/api/admin/hero-slides?id=${slide.id}`, { method: 'DELETE' });
      setHeroSlides((prev) => {
        const next = [...prev];
        next[slotIndex] = null;
        return next;
      });
    } catch (err) { alert('Failed to delete'); }
  };

  const handleFacFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFacForm((prev) => ({ ...prev, file: f }));
    const reader = new FileReader();
    reader.onload = (ev) => setFacPreview(ev.target.result);
    reader.readAsDataURL(f);
  };

  const handleFacUpload = async (e) => {
    e.preventDefault();
    if (!facForm.file) return alert('Please select an image.');
    setFacUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', facForm.file);
      const uploadRes = await fetch('/api/admin/upload', { method: 'POST', body: formData });
      const uploadData = await uploadRes.json();
      if (!uploadData.url) throw new Error(uploadData.error || 'Upload failed');

      const res = await fetch('/api/admin/facility-images', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          section: facForm.section,
          image_url: uploadData.url,
          title: facForm.title,
          position: facilityImages.filter((img) => img.section === facForm.section).length + 1,
        }),
      });
      const created = await res.json();
      setFacilityImages((prev) => [...prev, created]);
      setFacForm({ section: facForm.section, title: '', file: null });
      setFacPreview(null);
    } catch (err) { alert('Upload failed: ' + err.message); }
    setFacUploading(false);
  };

  const handleFacDelete = async (id) => {
    if (!confirm('Delete this facility image?')) return;
    try {
      await fetch(`/api/admin/facility-images?id=${id}`, { method: 'DELETE' });
      setFacilityImages((prev) => prev.filter((img) => img.id !== id));
    } catch (err) { alert('Failed to delete'); }
  };

  const liloanImages = facilityImages.filter((img) => img.section === 'liloan');
  const premiumImages = facilityImages.filter((img) => img.section === 'premium');

  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Image Management</h1>
      </div>

      {/* Hero Slider Section */}
      <div style={styles.formCard}>
        <h3 style={styles.formTitle}>Hero Slider Images (4 slots)</h3>
        <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: 20 }}>Upload images for the homepage hero slider. Slot 1 is the main image shown on page load.</p>
        {heroLoading ? (
          <LoadingState />
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {heroSlides.map((slide, i) => (
              <div key={i} style={{ border: '1px solid #eee', borderRadius: 12, overflow: 'hidden', background: '#fafafa' }}>
                <div style={{ height: 120, background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  {slide ? (
                    <img
                      src={slide.image_url}
                      alt={`Slide ${i + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div style={{ color: '#ccc', fontSize: '0.82rem', textAlign: 'center' }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <div style={{ marginTop: 4 }}>Empty</div>
                    </div>
                  )}
                </div>
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: i === 0 ? PRIMARY : '#666', marginBottom: 8 }}>
                    {i === 0 ? 'Slot 1 (Main)' : `Slot ${i + 1}`}
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button
                      onClick={() => handleHeroUpload(i)}
                      disabled={uploading === i}
                      style={{ ...styles.btnPrimary, padding: '4px 10px', fontSize: '0.75rem', flex: 1 }}
                    >
                      {uploading === i ? '...' : slide ? 'Replace' : 'Upload'}
                    </button>
                    {slide && (
                      <button
                        onClick={() => handleHeroDelete(i)}
                        style={{ ...styles.btnSmallDanger, padding: '4px 10px', fontSize: '0.75rem' }}
                      >
                        Del
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Facilities Images Section */}
      <div style={styles.formCard}>
        <h3 style={styles.formTitle}>Facilities Images</h3>

        {/* Upload form */}
        <form onSubmit={handleFacUpload} style={{ marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#666', marginBottom: 6 }}>Campus</label>
              <select
                value={facForm.section}
                onChange={(e) => setFacForm((prev) => ({ ...prev, section: e.target.value }))}
                style={{ ...styles.input, marginBottom: 0, minWidth: 160 }}
              >
                <option value="liloan">Liloan Campus</option>
                <option value="premium">Premium Campus</option>
              </select>
            </div>
            <div style={{ flex: 1, minWidth: 160 }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#666', marginBottom: 6 }}>Title</label>
              <input
                type="text"
                placeholder="Image title (optional)"
                value={facForm.title}
                onChange={(e) => setFacForm((prev) => ({ ...prev, title: e.target.value }))}
                style={{ ...styles.input, marginBottom: 0 }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#666', marginBottom: 6 }}>Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFacFileChange}
                style={{ fontSize: '0.82rem' }}
              />
            </div>
            <button type="submit" disabled={facUploading} style={{ ...styles.btnPrimary, whiteSpace: 'nowrap' }}>
              {facUploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
          {facPreview && (
            <div style={{ marginTop: 12 }}>
              <img src={facPreview} alt="Preview" style={{ maxHeight: 100, borderRadius: 8, objectFit: 'cover' }} />
            </div>
          )}
        </form>

        {facilityLoading ? (
          <LoadingState />
        ) : (
          <>
            {/* Liloan Campus */}
            <div style={{ marginBottom: 24 }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1a1a2e', marginBottom: 12 }}>
                Liloan Campus
                <span style={{ ...styles.badge, marginLeft: 8, fontSize: '0.72rem' }}>{liloanImages.length}</span>
              </h4>
              {liloanImages.length === 0 ? (
                <p style={{ color: '#bbb', fontSize: '0.88rem' }}>No images uploaded yet.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {liloanImages.map((img) => (
                    <div key={img.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#fafafa', borderRadius: 8, border: '1px solid #eee' }}>
                      <img src={img.image_url} alt={img.title} style={{ width: 60, height: 40, objectFit: 'cover', borderRadius: 6, flexShrink: 0 }} />
                      <span style={{ flex: 1, fontSize: '0.88rem', color: '#333', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{img.title || '(no title)'}</span>
                      <button onClick={() => handleFacDelete(img.id)} style={styles.btnSmallDanger}>Delete</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Premium Campus */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1a1a2e', marginBottom: 12 }}>
                Premium Campus
                <span style={{ ...styles.badge, marginLeft: 8, fontSize: '0.72rem' }}>{premiumImages.length}</span>
              </h4>
              {premiumImages.length === 0 ? (
                <p style={{ color: '#bbb', fontSize: '0.88rem' }}>No images uploaded yet.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {premiumImages.map((img) => (
                    <div key={img.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#fafafa', borderRadius: 8, border: '1px solid #eee' }}>
                      <img src={img.image_url} alt={img.title} style={{ width: 60, height: 40, objectFit: 'cover', borderRadius: 6, flexShrink: 0 }} />
                      <span style={{ flex: 1, fontSize: '0.88rem', color: '#333', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{img.title || '(no title)'}</span>
                      <button onClick={() => handleFacDelete(img.id)} style={styles.btnSmallDanger}>Delete</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Popups Tab ───
function PopupsTab() {
  const [popups, setPopups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', link_url: '', position: 1 });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', link_url: '', position: 1 });
  const [editFile, setEditFile] = useState(null);
  const [editPreview, setEditPreview] = useState(null);

  useEffect(() => { fetchPopups(); }, []);

  const fetchPopups = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/popups');
      const data = await res.json();
      setPopups(data);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const handleFileChange = (e, isEdit) => {
    const f = e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (isEdit) { setEditFile(f); setEditPreview(ev.target.result); }
      else { setFile(f); setPreview(ev.target.result); }
    };
    reader.readAsDataURL(f);
  };

  const uploadImage = async (fileToUpload) => {
    const formData = new FormData();
    formData.append('file', fileToUpload);
    const uploadRes = await fetch('/api/admin/upload', { method: 'POST', body: formData });
    const uploadData = await uploadRes.json();
    if (!uploadData.url) throw new Error(uploadData.error || 'Upload failed');
    return uploadData.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !file) return alert('Title and image are required.');
    setSubmitting(true);
    try {
      const image_url = await uploadImage(file);
      const res = await fetch('/api/admin/popups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, image_url, position: Number(form.position) || 1 }),
      });
      const newPopup = await res.json();
      setPopups((prev) => [...prev, newPopup].sort((a, b) => a.position - b.position));
      setForm({ title: '', link_url: '', position: 1 });
      setFile(null); setPreview(null); setShowForm(false);
    } catch (err) { console.error(err); alert('Failed: ' + err.message); }
    setSubmitting(false);
  };

  const toggleActive = async (popup) => {
    const res = await fetch('/api/admin/popups', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: popup.id, is_active: !popup.is_active }),
    });
    const updated = await res.json();
    setPopups((prev) => prev.map((p) => p.id === popup.id ? updated : p));
  };

  const deletePopup = async (id) => {
    if (!confirm('Delete this popup?')) return;
    await fetch(`/api/admin/popups?id=${id}`, { method: 'DELETE' });
    setPopups((prev) => prev.filter((p) => p.id !== id));
  };

  const openEdit = (popup) => {
    setEditModal(popup);
    setEditForm({ title: popup.title, link_url: popup.link_url || '', position: popup.position || 1 });
    setEditFile(null); setEditPreview(popup.image_url);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let image_url = editModal.image_url;
      if (editFile) image_url = await uploadImage(editFile);
      const res = await fetch('/api/admin/popups', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editModal.id, ...editForm, image_url, position: Number(editForm.position) || 1 }),
      });
      const updated = await res.json();
      setPopups((prev) => prev.map((p) => p.id === editModal.id ? updated : p).sort((a, b) => a.position - b.position));
      setEditModal(null);
    } catch (err) { console.error(err); alert('Failed: ' + err.message); }
    setSubmitting(false);
  };

  return (
    <div>
      <div style={styles.pageHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h1 style={styles.pageTitle}>Popup Management</h1>
          <span style={styles.badge}>{popups.filter(p => p.is_active).length} active</span>
        </div>
        <button onClick={() => { setShowForm(!showForm); setFile(null); setPreview(null); setForm({ title: '', link_url: '', position: 1 }); }} style={styles.btnPrimary}>
          {showForm ? 'Cancel' : '+ Add Popup'}
        </button>
      </div>

      {/* Guide */}
      <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 12, padding: '16px 20px', marginBottom: 24 }}>
        <strong style={{ fontSize: '0.9rem', color: '#92400E' }}>Image Guide</strong>
        <ul style={{ margin: '8px 0 0', paddingLeft: 20, fontSize: '0.85rem', color: '#78350F', lineHeight: 1.8 }}>
          <li>Recommended size: <strong>480 x 640px</strong> (3:4 ratio, portrait)</li>
          <li>Also works well: <strong>480 x 480px</strong> (1:1, square) or <strong>640 x 480px</strong> (4:3, landscape)</li>
          <li>Max file size: 10MB. Formats: JPG, PNG, WebP</li>
          <li>Multiple popups can be active at the same time</li>
          <li>Position number controls display order (lower = first)</li>
          <li>Link URL (optional): clicking the popup image opens this link</li>
        </ul>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={styles.formCard}>
          <h3 style={styles.formTitle}>New Popup</h3>
          <input type="text" placeholder="Title *" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} style={styles.input} />
          <input type="text" placeholder="Link URL (optional)" value={form.link_url} onChange={(e) => setForm({ ...form, link_url: e.target.value })} style={styles.input} />
          <input type="number" placeholder="Position (1=first)" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} style={{ ...styles.input, maxWidth: 200 }} min="1" />
          <div
            onClick={() => document.getElementById('popup-file-input').click()}
            style={{ border: '2px dashed #ddd', borderRadius: 12, padding: preview ? 0 : '40px 20px', textAlign: 'center', cursor: 'pointer', marginBottom: 16, overflow: 'hidden', background: '#fafafa' }}
          >
            {preview ? (
              <img src={preview} alt="Preview" style={{ width: '100%', maxHeight: 300, objectFit: 'contain', display: 'block' }} />
            ) : (
              <>
                <p style={{ margin: 0, color: '#999', fontSize: '0.88rem' }}>Click to select popup image *</p>
                <p style={{ margin: '4px 0 0', color: '#ccc', fontSize: '0.78rem' }}>Recommended: 480x640px (3:4 portrait)</p>
              </>
            )}
          </div>
          <input id="popup-file-input" type="file" accept="image/*" onChange={(e) => handleFileChange(e, false)} style={{ display: 'none' }} />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" disabled={submitting} style={styles.btnPrimary}>{submitting ? 'Uploading...' : 'Save Popup'}</button>
          </div>
        </form>
      )}

      {/* Edit Modal */}
      {editModal && (
        <div style={styles.modalOverlay} onClick={() => setEditModal(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleEditSubmit}>
              <h3 style={styles.formTitle}>Edit Popup</h3>
              <input type="text" placeholder="Title *" value={editForm.title} onChange={(e) => setEditForm({ ...editForm, title: e.target.value })} style={styles.input} />
              <input type="text" placeholder="Link URL (optional)" value={editForm.link_url} onChange={(e) => setEditForm({ ...editForm, link_url: e.target.value })} style={styles.input} />
              <input type="number" placeholder="Position" value={editForm.position} onChange={(e) => setEditForm({ ...editForm, position: e.target.value })} style={{ ...styles.input, maxWidth: 200 }} min="1" />
              <div
                onClick={() => document.getElementById('popup-edit-file-input').click()}
                style={{ border: '2px dashed #ddd', borderRadius: 12, padding: editPreview ? 0 : '32px 20px', textAlign: 'center', cursor: 'pointer', marginBottom: 16, overflow: 'hidden', background: '#fafafa' }}
              >
                {editPreview ? (
                  <img src={editPreview} alt="Preview" style={{ width: '100%', maxHeight: 300, objectFit: 'contain', display: 'block' }} />
                ) : (
                  <p style={{ margin: 0, color: '#999', fontSize: '0.88rem' }}>Click to change image</p>
                )}
              </div>
              <input id="popup-edit-file-input" type="file" accept="image/*" onChange={(e) => handleFileChange(e, true)} style={{ display: 'none' }} />
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                <button type="button" onClick={() => setEditModal(null)} style={styles.btnSmallDanger}>Cancel</button>
                <button type="submit" disabled={submitting} style={styles.btnPrimary}>{submitting ? 'Saving...' : 'Update'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <LoadingState />
      ) : popups.length === 0 ? (
        <EmptyState message="No popups yet" />
      ) : (
        <div style={styles.imageGrid}>
          {popups.map((popup) => (
            <div key={popup.id} style={{ ...styles.imageCard, opacity: popup.is_active ? 1 : 0.5 }}>
              <div style={{ ...styles.imageWrapper, height: 240 }}>
                <img src={popup.image_url} alt={popup.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '12px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1a1a2e', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{popup.title}</span>
                  <span style={{ fontSize: '0.75rem', color: '#999', marginLeft: 8, flexShrink: 0 }}>#{popup.position}</span>
                </div>
                {popup.link_url && <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{popup.link_url}</div>}
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <button onClick={() => toggleActive(popup)} style={{ ...styles.btnSmallDanger, color: popup.is_active ? '#16a34a' : '#999', borderColor: popup.is_active ? '#bbf7d0' : '#e5e5e5', fontSize: '0.75rem' }}>
                    {popup.is_active ? 'Active' : 'Inactive'}
                  </button>
                  <button onClick={() => openEdit(popup)} style={{ ...styles.btnSmallDanger, fontSize: '0.75rem' }}>Edit</button>
                  <button onClick={() => deletePopup(popup.id)} style={{ ...styles.btnSmallDanger, fontSize: '0.75rem' }}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Text Management Tab ───
function TextsTab() {
  const LANGS = [
    { code: 'EN', label: 'English' },
    { code: 'JA', label: 'Japanese' },
    { code: 'ZH-TW', label: 'Chinese (Traditional)' },
    { code: 'ZH-CN', label: 'Chinese (Simplified)' },
    { code: 'VI', label: 'Vietnamese' },
  ];

  const [values, setValues] = useState({ EN: '', JA: '', 'ZH-TW': '', 'ZH-CN': '', VI: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/admin/texts?page=address');
        const data = await res.json();
        if (Array.isArray(data)) {
          const newValues = { EN: '', JA: '', 'ZH-TW': '', 'ZH-CN': '', VI: '' };
          data.forEach((item) => {
            if (item.key === 'description' && newValues.hasOwnProperty(item.lang)) {
              newValues[item.lang] = item.value || '';
            }
          });
          setValues(newValues);
        }
      } catch (err) { console.error(err); }
      setLoading(false);
    })();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSuccess(false);
    try {
      for (const lang of LANGS) {
        await fetch('/api/admin/texts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ page: 'address', key: 'description', lang: lang.code, value: values[lang.code] }),
        });
      }
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) { console.error(err); alert('Failed to save texts.'); }
    setSaving(false);
  };

  return (
    <div>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Address Text Management</h1>
        <p style={{ color: '#888', fontSize: '0.9rem', marginTop: 4 }}>
          Edit the address description text that appears below &quot;CIJ Academy&quot; on the Address section
        </p>
      </div>

      {loading ? (
        <LoadingState />
      ) : (
        <div style={styles.formCard}>
          <h3 style={styles.formTitle}>Address Description</h3>
          {LANGS.map((lang) => (
            <div key={lang.code} style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#555', marginBottom: 6 }}>
                {lang.label} ({lang.code})
              </label>
              <textarea
                value={values[lang.code]}
                onChange={(e) => setValues((prev) => ({ ...prev, [lang.code]: e.target.value }))}
                placeholder={`Address description in ${lang.label}...`}
                style={{ ...styles.input, marginBottom: 0, minHeight: 80, resize: 'vertical' }}
              />
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
            <button onClick={handleSave} disabled={saving} style={styles.btnPrimary}>
              {saving ? 'Saving...' : 'Save All'}
            </button>
            {success && <span style={{ color: '#16a34a', fontSize: '0.88rem', fontWeight: 500 }}>Saved successfully!</span>}
          </div>
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

  // Modal
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    background: '#fff',
    borderRadius: 16,
    padding: '28px',
    width: 540,
    maxWidth: '90vw',
    maxHeight: '85vh',
    overflowY: 'auto',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
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

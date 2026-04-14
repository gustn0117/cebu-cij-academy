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
  outline: 'none', boxSizing: 'border-box',
};

const labelStyle = {
  display: 'block', fontSize: '0.9rem', fontWeight: 600,
  color: '#212529', marginBottom: 6,
};

const btnPrimary = {
  background: '#B91C1C', color: '#fff', border: 'none',
  padding: '12px 28px', borderRadius: 8, fontSize: '0.95rem',
  fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
};

const closeBtn = {
  position: 'absolute', top: 16, right: 16, background: 'none',
  border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6c757d',
  lineHeight: 1,
};

/* ── Write/Edit Letter Modal ── */
function LetterFormModal({ isOpen, onClose, onSubmit, editData }) {
  const [form, setForm] = useState({ title: '', studentName: '', content: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (editData) {
      setForm({ title: editData.title || '', studentName: editData.student_name || '', content: editData.content || '', password: '' });
    } else {
      setForm({ title: '', studentName: '', content: '', password: '' });
    }
    setError('');
  }, [editData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.studentName.trim() || !form.content.trim() || !form.password.trim()) {
      setError('All fields are required');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await onSubmit(form, editData?.id);
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to save');
    }
    setLoading(false);
  };

  return (
    <div style={modalOverlayStyle} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={modalBoxStyle}>
        <button style={closeBtn} onClick={onClose}>&times;</button>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 4, color: '#1A1A2E' }}>
          {editData ? 'Edit Letter' : 'Write a Letter'}
        </h2>
        <p style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: 24 }}>
          {editData ? 'Update your letter below' : 'Send a heartfelt message to your child at CIJ Academy'}
        </p>

        {error && (
          <div style={{ background: '#FEF2F2', color: '#B91C1C', padding: '10px 14px', borderRadius: 8, fontSize: '0.88rem', marginBottom: 16 }}>{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Title</label>
            <input style={inputStyle} type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Enter letter title" required />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Student Name</label>
            <input style={inputStyle} type="text" value={form.studentName} onChange={(e) => setForm({ ...form, studentName: e.target.value })} placeholder="Enter student's full name" required />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Password</label>
            <input style={inputStyle} type="text" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required placeholder="Set a password" />
            <p style={{ fontSize: '0.78rem', color: '#999', marginTop: 4 }}>Only people who know this password can read the letter.</p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Message</label>
            <textarea style={{ ...inputStyle, minHeight: 150, resize: 'vertical' }} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} required placeholder="Write your message here..." />
          </div>
          <button type="submit" style={{ ...btnPrimary, width: '100%' }} disabled={loading}>
            {loading ? 'Saving...' : editData ? 'Update Letter' : 'Send Letter'}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── Password Prompt Modal ── */
function PasswordModal({ isOpen, onClose, onSubmit, letterTitle }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => { setPassword(''); setError(''); }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) { setError('Please enter the birthdate'); return; }
    setLoading(true);
    setError('');
    try {
      await onSubmit(password);
    } catch (err) {
      setError(err.message || 'Incorrect password');
    }
    setLoading(false);
  };

  return (
    <div style={modalOverlayStyle} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={modalBoxStyle}>
        <button style={closeBtn} onClick={onClose}>&times;</button>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8, color: '#1A1A2E' }}>
          Enter Password to Read
        </h2>
        <p style={{ color: '#6c757d', fontSize: '0.88rem', marginBottom: 20 }}>
          &ldquo;{letterTitle}&rdquo;<br />
          Enter the password to view this letter.
        </p>
        {error && (
          <div style={{ background: '#FEF2F2', color: '#B91C1C', padding: '10px 14px', borderRadius: 8, fontSize: '0.88rem', marginBottom: 16 }}>{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Password</label>
            <input style={inputStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter password" />
          </div>
          <button type="submit" style={{ ...btnPrimary, width: '100%' }} disabled={loading}>
            {loading ? 'Verifying...' : 'View Letter'}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function Letter() {
  const { t } = useLanguage();
  const lt = t.comm?.letter || {};
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingLetter, setEditingLetter] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [expandedContent, setExpandedContent] = useState(null);
  const [passwordModal, setPasswordModal] = useState(null); // { id, title }
  const [page, setPage] = useState(1);

  const fetchLetters = useCallback(() => {
    fetch('/api/letter')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setLetters(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => { fetchLetters(); }, [fetchLetters]);

  useEffect(() => {
    const savedToken = localStorage.getItem('cij_token');
    if (savedToken) {
      fetch('/api/auth/me', { headers: { Authorization: `Bearer ${savedToken}` } })
        .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
        .then((userData) => { setUser(userData); setToken(savedToken); })
        .catch(() => { localStorage.removeItem('cij_token'); localStorage.removeItem('cij_user'); });
    }
  }, []);

  const handleAuth = (userData, newToken) => { setUser(userData); setToken(newToken); };

  const handleLetterClick = (letter) => {
    if (expandedId === letter.id) {
      setExpandedId(null);
      setExpandedContent(null);
      return;
    }
    // Show password prompt
    setPasswordModal({ id: letter.id, title: letter.title });
  };

  const handlePasswordSubmit = async (password) => {
    const res = await fetch(`/api/letter?id=${passwordModal.id}&password=${encodeURIComponent(password)}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Incorrect password');
    setExpandedId(passwordModal.id);
    setExpandedContent(data);
    setPasswordModal(null);
  };

  const handleWriteClick = () => {
    if (!user) { setShowAuth(true); return; }
    setEditingLetter(null);
    setShowForm(true);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    if (!expandedContent) return;
    setEditingLetter(expandedContent);
    setShowForm(true);
  };

  const handleSubmit = async (formData, editId) => {
    const method = editId ? 'PUT' : 'POST';
    const body = editId
      ? { id: editId, title: formData.title, studentName: formData.studentName, content: formData.content, password: formData.password }
      : { title: formData.title, studentName: formData.studentName, content: formData.content, password: formData.password };

    const res = await fetch('/api/letter', {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to save');
    setEditingLetter(null);
    setExpandedId(null);
    setExpandedContent(null);
    fetchLetters();
  };

  const totalPages = Math.ceil(letters.length / PER_PAGE);
  const currentLetters = letters.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <Layout title={lt.pageTitle || 'Letter to Student'}>
      <PageHeader
        title={lt.pageTitle || 'Letter to Student'}
        subtitle={lt.pageSub || 'Send a letter to your child studying at CIJ Academy'}
        breadcrumb={[
          { label: t.nav.community, href: '/community' },
          { label: lt.pageTitle || 'Letter' },
        ]}
        backgroundImage="/images/headers/letter.svg"
      />
      <section className="section">
        <div className="container">
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
              <button onClick={() => { localStorage.removeItem('cij_token'); localStorage.removeItem('cij_user'); setUser(null); setToken(null); }} style={{
                background: 'none', border: 'none', color: '#B91C1C',
                fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              }}>Log Out</button>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 28 }}>
            {user ? (
              <button onClick={handleWriteClick} style={btnPrimary}>{lt.formTitle || 'Write a Letter'}</button>
            ) : (
              <button onClick={() => setShowAuth(true)} style={btnPrimary}>Log In to Write Letter</button>
            )}
          </div>

          {loading ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#6c757d' }}>Loading...</p>
          ) : letters.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#6c757d' }}>No letters yet.</p>
          ) : (
            <div className="board">
              <table className="board-table">
                <thead>
                  <tr>
                    <th className="board-col-no">{t.comm?.boardNo || 'No'}</th>
                    <th className="board-col-title">{t.comm?.boardTitle || 'Title'}</th>
                    <th className="board-col-date" style={{ width: 120 }}>Student</th>
                    <th className="board-col-date">{t.comm?.boardDate || 'Date'}</th>
                  </tr>
                </thead>
                <tbody>
                  {currentLetters.map((letter, i) => (
                    <React.Fragment key={letter.id}>
                      <tr style={{ cursor: 'pointer' }} onClick={() => handleLetterClick(letter)}>
                        <td className="board-no">{letters.length - ((page - 1) * PER_PAGE + i)}</td>
                        <td className="board-title"><span style={{ color: '#1A1A2E' }}>{letter.title}</span></td>
                        <td className="board-date" style={{ width: 120 }}>{letter.student_name || '-'}</td>
                        <td className="board-date">{letter.created_at ? new Date(letter.created_at).toLocaleDateString() : ''}</td>
                      </tr>
                      {expandedId === letter.id && expandedContent && (
                        <tr>
                          <td colSpan="4" style={{ padding: '20px 24px', background: '#FAFAFA', borderBottom: '1px solid #eee' }}>
                            <div style={{ maxWidth: 700 }}>
                              <div style={{ marginBottom: 12 }}>
                                <span style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                                  To: <strong>{expandedContent.student_name}</strong>
                                  {expandedContent.created_at && ` | ${new Date(expandedContent.created_at).toLocaleDateString()}`}
                                </span>
                              </div>
                              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1A1A2E', marginBottom: 8 }}>{expandedContent.title}</h4>
                              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#333', margin: 0, whiteSpace: 'pre-wrap' }}>{expandedContent.content}</p>
                              {user && user.id === expandedContent.author_id && (
                                <button onClick={handleEditClick} style={{
                                  marginTop: 16, background: 'none', border: '1px solid #B91C1C', borderRadius: 6,
                                  padding: '6px 16px', fontSize: '0.85rem', color: '#B91C1C',
                                  cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600,
                                }}>Edit</button>
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
                <button className="board-page-btn" disabled={page <= 1} onClick={() => setPage(page - 1)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button key={p} className={`board-page-num ${p === page ? 'active' : ''}`} onClick={() => setPage(p)}>{p}</button>
                ))}
                <button className="board-page-btn" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} onAuth={handleAuth} />
      <LetterFormModal isOpen={showForm} onClose={() => { setShowForm(false); setEditingLetter(null); }} onSubmit={handleSubmit} editData={editingLetter} />
      <PasswordModal isOpen={!!passwordModal} onClose={() => setPasswordModal(null)} onSubmit={handlePasswordSubmit} letterTitle={passwordModal?.title || ''} />
    </Layout>
  );
}

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function AdminLetters() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '1234') {
      setAuthed(true);
      fetchLetters();
    } else {
      alert('Incorrect password');
    }
  };

  const fetchLetters = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/letters');
      const data = await res.json();
      setLetters(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const deleteLetter = async (id) => {
    if (!confirm('Delete this letter?')) return;
    await fetch(`/api/admin/letters?id=${id}`, { method: 'DELETE' });
    setLetters(letters.filter((l) => l.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  if (!authed) {
    return (
      <>
        <Head><title>Admin - Letters</title></Head>
        <div style={styles.loginWrapper}>
          <form onSubmit={handleLogin} style={styles.loginForm}>
            <h1 style={styles.loginTitle}>Admin Access</h1>
            <p style={styles.loginDesc}>Enter password to manage letters</p>
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
      <Head><title>Admin - Letters</title></Head>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Letters from Parents</h1>
          <span style={styles.badge}>{letters.length} total</span>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', color: '#888', padding: 40 }}>Loading...</p>
        ) : letters.length === 0 ? (
          <div style={styles.empty}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <p>No letters yet</p>
          </div>
        ) : (
          <div style={styles.layout}>
            <div style={styles.list}>
              {letters.map((letter) => (
                <div
                  key={letter.id}
                  style={{
                    ...styles.listItem,
                    ...(selected?.id === letter.id ? styles.listItemActive : {}),
                  }}
                  onClick={() => setSelected(letter)}
                >
                  <div style={styles.listItemHeader}>
                    <strong style={styles.listItemTitle}>{letter.title}</strong>
                    <span style={styles.listItemDate}>
                      {new Date(letter.created_at).toLocaleDateString('ko-KR')}
                    </span>
                  </div>
                  <span style={styles.listItemStudent}>To: {letter.student_name}</span>
                </div>
              ))}
            </div>

            <div style={styles.detail}>
              {selected ? (
                <>
                  <div style={styles.detailHeader}>
                    <h2 style={styles.detailTitle}>{selected.title}</h2>
                    <button
                      onClick={() => deleteLetter(selected.id)}
                      style={styles.btnDelete}
                    >
                      Delete
                    </button>
                  </div>
                  <div style={styles.detailMeta}>
                    <span><strong>Student:</strong> {selected.student_name}</span>
                    <span><strong>Date:</strong> {new Date(selected.created_at).toLocaleString('ko-KR')}</span>
                  </div>
                  <div style={styles.detailContent}>
                    {selected.content.split('\n').map((line, i) => (
                      <p key={i} style={{ margin: '0 0 8px' }}>{line || '\u00A0'}</p>
                    ))}
                  </div>
                </>
              ) : (
                <div style={styles.detailEmpty}>
                  <p>Select a letter to view</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  loginWrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f5f5',
    fontFamily: "'Poppins', sans-serif",
  },
  loginForm: {
    background: '#fff',
    padding: '48px 40px',
    borderRadius: 16,
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    textAlign: 'center',
    width: 360,
  },
  loginTitle: {
    fontSize: '1.4rem',
    fontWeight: 700,
    marginBottom: 8,
    color: '#1a1a2e',
  },
  loginDesc: {
    fontSize: '0.9rem',
    color: '#888',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: 8,
    fontSize: '1rem',
    marginBottom: 16,
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  },
  btnPrimary: {
    width: '100%',
    padding: '12px',
    background: '#B91C1C',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  container: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '32px 24px',
    fontFamily: "'Poppins', sans-serif",
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#1a1a2e',
  },
  badge: {
    background: '#B91C1C',
    color: '#fff',
    padding: '4px 12px',
    borderRadius: 20,
    fontSize: '0.8rem',
    fontWeight: 600,
  },
  empty: {
    textAlign: 'center',
    padding: '80px 0',
    color: '#aaa',
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '360px 1fr',
    gap: 24,
    minHeight: 'calc(100vh - 120px)',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 120px)',
  },
  listItem: {
    padding: '16px',
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #eee',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  listItemActive: {
    borderColor: '#B91C1C',
    background: '#FEF2F2',
  },
  listItemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  listItemTitle: {
    fontSize: '0.95rem',
    color: '#1a1a2e',
  },
  listItemDate: {
    fontSize: '0.78rem',
    color: '#999',
    flexShrink: 0,
  },
  listItemStudent: {
    fontSize: '0.82rem',
    color: '#888',
  },
  detail: {
    background: '#fff',
    borderRadius: 16,
    border: '1px solid #eee',
    padding: '32px',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 120px)',
  },
  detailHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  detailTitle: {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#1a1a2e',
  },
  btnDelete: {
    padding: '6px 16px',
    background: 'none',
    border: '1px solid #ddd',
    borderRadius: 8,
    fontSize: '0.85rem',
    color: '#999',
    cursor: 'pointer',
    fontFamily: 'inherit',
    flexShrink: 0,
  },
  detailMeta: {
    display: 'flex',
    gap: 24,
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: '1px solid #eee',
  },
  detailContent: {
    fontSize: '1rem',
    lineHeight: 1.8,
    color: '#333',
  },
  detailEmpty: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: '#bbb',
    fontSize: '0.95rem',
  },
};

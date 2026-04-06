import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

const PER_PAGE = 14;

export default function Report() {
  const { t } = useLanguage();
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // Modal state
  const [selectedId, setSelectedId] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [verifying, setVerifying] = useState(false);

  // Detail view state
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch('/api/reports')
      .then((res) => res.json())
      .then((data) => {
        setAllPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(allPosts.length / PER_PAGE);
  const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleRowClick = (id) => {
    setSelectedId(id);
    setPassword('');
    setPasswordError('');
  };

  const handlePasswordSubmit = async () => {
    setVerifying(true);
    setPasswordError('');
    try {
      const res = await fetch(`/api/reports?id=${selectedId}&password=${encodeURIComponent(password)}`);
      if (res.ok) {
        const data = await res.json();
        setReport(data);
        setSelectedId(null);
      } else {
        setPasswordError('Incorrect password. Please try again.');
      }
    } catch {
      setPasswordError('An error occurred. Please try again.');
    }
    setVerifying(false);
  };

  const handleBack = () => {
    setReport(null);
  };

  // Detail view
  if (report) {
    return (
      <Layout title="Report">
        <PageHeader
          title="Report"
          description="Detailed report information"
          breadcrumbs={[
            { label: t.nav.community, href: '/community' },
            { label: 'Report', href: '/community/report' },
            { label: report.title },
          ]}
          backgroundImage="/images/headers/community.svg"
        />
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <button
                onClick={handleBack}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#0066cc',
                  cursor: 'pointer',
                  fontSize: '14px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                Back to list
              </button>
              <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>{report.title}</h2>
              <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: '24px' }}>
                {new Date(report.created_at).toLocaleDateString()}
              </p>
              {report.image_url && (
                <div style={{ marginBottom: '24px' }}>
                  <img
                    src={report.image_url}
                    alt={report.title}
                    style={{ maxWidth: '100%', borderRadius: '8px' }}
                  />
                </div>
              )}
              <div
                style={{ lineHeight: 1.8, fontSize: '15px', color: '#333', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{ __html: report.content }}
              />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout title="Report">
      <PageHeader
        title="Report"
        description="Reports and documents"
        breadcrumbs={[
          { label: t.nav.community, href: '/community' },
          { label: 'Report' },
        ]}
        backgroundImage="/images/headers/community.svg"
      />
      <section className="section">
        <div className="container">
          {loading ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#6c757d' }}>Loading...</p>
          ) : allPosts.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#6c757d' }}>No reports yet.</p>
          ) : (
            <div className="board">
              <table className="board-table">
                <thead>
                  <tr>
                    <th className="board-col-no">{t.comm?.boardNo || 'No'}</th>
                    <th className="board-col-title">{t.comm?.boardTitle || 'Title'}</th>
                    <th className="board-col-date">{t.comm?.boardDate || 'Date'}</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, i) => (
                    <tr
                      key={post.id}
                      onClick={() => handleRowClick(post.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <td className="board-no">{allPosts.length - ((page - 1) * PER_PAGE + i)}</td>
                      <td className="board-title">{post.title}</td>
                      <td className="board-date">{new Date(post.created_at).toLocaleDateString()}</td>
                    </tr>
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

      {/* Password Modal */}
      {selectedId !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
          onClick={() => setSelectedId(null)}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '32px',
              width: '90%',
              maxWidth: '400px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 600 }}>Password Required</h3>
            <p style={{ margin: '0 0 20px', color: '#6c757d', fontSize: '14px' }}>
              Enter the password to view this report.
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              placeholder="Enter password"
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                marginBottom: '12px',
                boxSizing: 'border-box',
              }}
              autoFocus
            />
            {passwordError && (
              <p style={{ color: 'red', fontSize: '13px', margin: '0 0 12px' }}>{passwordError}</p>
            )}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setSelectedId(null)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  background: '#fff',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordSubmit}
                disabled={verifying}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '6px',
                  background: '#0066cc',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '14px',
                  opacity: verifying ? 0.7 : 1,
                }}
              >
                {verifying ? 'Verifying...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

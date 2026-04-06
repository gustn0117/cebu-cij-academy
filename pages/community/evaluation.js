import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

const PER_PAGE = 14;

export default function Evaluation() {
  const { t } = useLanguage();
  const ev = t.comm?.evaluation || {};

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Password modal state
  const [selectedReport, setSelectedReport] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [verifying, setVerifying] = useState(false);

  // Report detail state
  const [viewingReport, setViewingReport] = useState(null);

  useEffect(() => {
    fetch('/api/reports')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setReports(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredReports = searchQuery.trim()
    ? reports.filter((r) =>
        (r.title || '').toLowerCase().includes(searchQuery.toLowerCase())
      )
    : reports;
  const totalPages = Math.ceil(filteredReports.length / PER_PAGE);
  const currentReports = filteredReports.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleReportClick = (report) => {
    setSelectedReport(report);
    setPassword('');
    setPasswordError('');
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;
    setVerifying(true);
    setPasswordError('');

    try {
      const res = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedReport.id, password }),
      });

      if (res.ok) {
        const data = await res.json();
        setViewingReport(data);
        setSelectedReport(null);
        setPassword('');
      } else {
        setPasswordError('Incorrect password. Please try again.');
      }
    } catch {
      setPasswordError('An error occurred. Please try again.');
    }
    setVerifying(false);
  };

  const closeModal = () => {
    setSelectedReport(null);
    setPassword('');
    setPasswordError('');
  };

  const closeDetail = () => {
    setViewingReport(null);
  };

  // Viewing a report detail
  if (viewingReport) {
    return (
      <Layout title={viewingReport.title || ev.pageTitle || 'Evaluation Report'}>
        <PageHeader
          title={ev.pageTitle || 'Evaluation Report'}
          subtitle={ev.pageSub || 'Student progress and evaluation reports'}
          breadcrumb={[
            { label: t.nav.community, href: '/community' },
            { label: ev.pageTitle || 'Evaluation Report' },
          ]}
          backgroundImage="/images/headers/evaluation-reports.svg"
        />
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <button
                onClick={closeDetail}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'none', border: 'none', color: '#6c757d',
                  fontSize: '0.92rem', cursor: 'pointer', fontFamily: 'inherit',
                  marginBottom: 24, padding: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                Back to list
              </button>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A1A2E', marginBottom: 8 }}>
                {viewingReport.title}
              </h2>
              <p style={{ color: '#6c757d', fontSize: '0.88rem', marginBottom: 32 }}>
                {new Date(viewingReport.created_at).toLocaleDateString()}
              </p>

              {viewingReport.image_url && (
                <div style={{ marginBottom: 32 }}>
                  <img
                    src={viewingReport.image_url}
                    alt={viewingReport.title}
                    style={{ maxWidth: '100%', borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                  />
                </div>
              )}

              {viewingReport.content && (
                <div
                  style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}
                  dangerouslySetInnerHTML={{ __html: viewingReport.content.replace(/\n/g, '<br/>') }}
                />
              )}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout title={ev.pageTitle || 'Evaluation Report'}>
      <PageHeader
        title={ev.pageTitle || 'Evaluation Report'}
        subtitle={ev.pageSub || 'Student progress and evaluation reports'}
        breadcrumb={[
          { label: t.nav.community, href: '/community' },
          { label: ev.pageTitle || 'Evaluation Report' },
        ]}
      />
      <section className="section">
        <div className="container">
          {/* Search */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
            <div style={{ position: 'relative', width: 280 }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
                placeholder="Search by title..."
                style={{
                  width: '100%', padding: '10px 14px 10px 36px', border: '1px solid #dee2e6',
                  borderRadius: 8, fontSize: '0.9rem', fontFamily: 'inherit',
                  outline: 'none', boxSizing: 'border-box',
                }}
              />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}>
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
          </div>

          {loading ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#6c757d' }}>Loading...</p>
          ) : filteredReports.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#6c757d' }}>{searchQuery ? 'No matching reports found.' : 'No reports available.'}</p>
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
                  {currentReports.map((report, i) => (
                    <tr key={report.id} style={{ cursor: 'pointer' }} onClick={() => handleReportClick(report)}>
                      <td className="board-no">{filteredReports.length - ((page - 1) * PER_PAGE + i)}</td>
                      <td className="board-title">
                        <span style={{ color: '#1A1A2E', cursor: 'pointer' }}>{report.title}</span>
                      </td>
                      <td className="board-date">{new Date(report.created_at).toLocaleDateString()}</td>
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
      {selectedReport && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)', zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20,
          }}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div style={{
            background: '#fff', borderRadius: 20, padding: '36px 32px',
            maxWidth: 420, width: '100%', position: 'relative',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          }}>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute', top: 16, right: 16, background: 'none',
                border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6c757d',
                lineHeight: 1,
              }}
            >
              &times;
            </button>
            <div style={{ marginBottom: 8 }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1A1A2E', marginBottom: 4 }}>
              Password Required
            </h3>
            <p style={{ color: '#6c757d', fontSize: '0.88rem', marginBottom: 20 }}>
              Enter the password to view this report.
            </p>

            {passwordError && (
              <div style={{
                background: '#FEF2F2', color: '#B91C1C', padding: '10px 14px',
                borderRadius: 8, fontSize: '0.88rem', marginBottom: 16,
              }}>
                {passwordError}
              </div>
            )}

            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoFocus
                style={{
                  width: '100%', padding: '12px 16px', border: '1px solid #dee2e6',
                  borderRadius: 8, fontSize: '0.95rem', fontFamily: 'inherit',
                  outline: 'none', marginBottom: 16, boxSizing: 'border-box',
                }}
              />
              <button
                type="submit"
                disabled={verifying}
                style={{
                  width: '100%', background: '#B91C1C', color: '#fff', border: 'none',
                  padding: '12px 28px', borderRadius: 8, fontSize: '0.95rem',
                  fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                {verifying ? 'Verifying...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}

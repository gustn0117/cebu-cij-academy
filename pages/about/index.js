import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const milestones = [
    { year: t.hist.y1, title: t.hist.y1t, desc: t.hist.y1d },
    { year: t.hist.y2, title: t.hist.y2t, desc: t.hist.y2d },
    { year: t.hist.y3, title: t.hist.y3t, desc: t.hist.y3d },
    { year: t.hist.y4, title: t.hist.y4t, desc: t.hist.y4d },
    { year: t.hist.y5, title: t.hist.y5t, desc: t.hist.y5d },
    { year: t.hist.y6, title: t.hist.y6t, desc: t.hist.y6d },
  ];

  const reasons = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: t.why.f1t,
      desc: t.why.f1d,
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      title: t.why.f2t,
      desc: t.why.f2d,
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: t.why.f3t,
      desc: t.why.f3d,
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: t.why.f4t,
      desc: t.why.f4d,
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: t.why.f5t,
      desc: t.why.f5d,
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: t.why.f6t,
      desc: t.why.f6d,
    },
  ];

  const stats = [
    { num: '10+', label: t.why.statYears },
    { num: '5,000+', label: t.why.statGrads },
    { num: '20+', label: t.why.statNations },
    { num: '50+', label: t.why.statTeachers },
  ];

  return (
    <Layout title={t.about.title}>
      <PageHeader
        title={t.about.title}
        description={t.about.subtitle}
        breadcrumbs={[{ label: t.nav.aboutUs }]}
      />

      {/* Greeting Section */}
      <section id="greeting" className="section">
        <div className="container">
          <div className="section-title">
            <h2>{t.greet.title}</h2>
            <p>{t.greet.subtitle}</p>
            <span className="accent-line"></span>
          </div>
          <div className="content-block">
            <h2>{t.greet.welcome}</h2>
            <p>{t.greet.p1}</p>
            <p>{t.greet.p2}</p>

            <h3>{t.greet.missionTitle}</h3>
            <p>{t.greet.missionDesc}</p>

            <h3>{t.greet.promiseTitle}</h3>
            <p>{t.greet.promiseDesc}</p>
            <p>{t.greet.closing}</p>

            <div style={{
              marginTop: 40,
              padding: '24px 32px',
              background: 'var(--primary-light)',
              borderRadius: 'var(--radius)',
              borderLeft: '4px solid var(--primary)',
            }}>
              <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: 4 }}>
                {t.greet.director}
              </p>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>
                {t.greet.academy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t.hist.title}</h2>
            <p>{t.hist.subtitle}</p>
            <span className="accent-line"></span>
          </div>
          <div className="content-block">
            <p>{t.hist.intro}</p>
          </div>

          <div style={{ maxWidth: 700, margin: '40px auto' }}>
            {milestones.map((m, i) => (
              <div key={m.year} style={{
                display: 'flex',
                gap: 24,
                marginBottom: 32,
                position: 'relative',
              }}>
                <div style={{
                  flexShrink: 0,
                  width: 80,
                  textAlign: 'right',
                  paddingTop: 4,
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                  }}>{m.year}</span>
                </div>
                <div style={{
                  flexShrink: 0,
                  width: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <div style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    border: '3px solid var(--primary-light)',
                    flexShrink: 0,
                    marginTop: 6,
                  }}></div>
                  {i < milestones.length - 1 && (
                    <div style={{
                      width: 2,
                      flex: 1,
                      background: 'var(--gray-300)',
                      marginTop: 4,
                    }}></div>
                  )}
                </div>
                <div style={{
                  background: 'var(--white)',
                  padding: '20px 24px',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-sm)',
                  flex: 1,
                }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 6 }}>{m.title}</h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CIJ Section */}
      <section id="why-choose-cij" className="section">
        <div className="container">
          <div className="section-title">
            <h2>{t.why.intro}</h2>
            <p>{t.why.introDesc}</p>
            <span className="accent-line"></span>
          </div>
          <div className="feature-grid">
            {reasons.map((r) => (
              <div className="feature-item" key={r.title}>
                <div className="feature-icon">{r.icon}</div>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{
            marginTop: 60,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 32,
            textAlign: 'center',
          }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>{stat.num}</div>
                <div style={{ color: 'var(--gray-500)', fontSize: '0.95rem', marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section id="address" className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t.addr.title}</h2>
            <p>{t.addr.subtitle}</p>
            <span className="accent-line"></span>
          </div>
          <div className="content-block">
            <h2>{t.addr.heading}</h2>
            <p>{t.addr.location}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

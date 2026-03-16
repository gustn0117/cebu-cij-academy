import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function History() {
  const { t } = useLanguage();

  const milestones = [
    { year: t.hist.y1, title: t.hist.y1t, desc: t.hist.y1d },
    { year: t.hist.y2, title: t.hist.y2t, desc: t.hist.y2d },
    { year: t.hist.y3, title: t.hist.y3t, desc: t.hist.y3d },
    { year: t.hist.y4, title: t.hist.y4t, desc: t.hist.y4d },
    { year: t.hist.y5, title: t.hist.y5t, desc: t.hist.y5d },
    { year: t.hist.y6, title: t.hist.y6t, desc: t.hist.y6d },
  ];

  return (
    <Layout title={t.hist.title}>
      <PageHeader
        title={t.hist.title}
        description={t.hist.subtitle}
        breadcrumbs={[
          { label: t.nav.aboutUs, href: '/about' },
          { label: t.hist.title },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.hist.title}</h2>
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
    </Layout>
  );
}

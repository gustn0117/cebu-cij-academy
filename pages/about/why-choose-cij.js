import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function WhyChooseCIJ() {
  const { t } = useLanguage();

  const reasons = [
    { icon: '👨‍🏫', title: t.why.f1t, desc: t.why.f1d },
    { icon: '📖', title: t.why.f2t, desc: t.why.f2d },
    { icon: '🏫', title: t.why.f3t, desc: t.why.f3d },
    { icon: '🌴', title: t.why.f4t, desc: t.why.f4d },
    { icon: '🤝', title: t.why.f5t, desc: t.why.f5d },
    { icon: '🎯', title: t.why.f6t, desc: t.why.f6d },
  ];

  return (
    <Layout title={t.why.title}>
      <PageHeader
        title={t.why.title}
        description={t.why.subtitle}
        breadcrumbs={[
          { label: t.nav.aboutUs, href: '/about' },
          { label: t.why.title },
        ]}
      />
      <section className="section">
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-alt">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 32,
            textAlign: 'center',
          }}>
            {[
              { num: '10+', label: t.why.statYears },
              { num: '5,000+', label: t.why.statGrads },
              { num: '20+', label: t.why.statNations },
              { num: '50+', label: t.why.statTeachers },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>{stat.num}</div>
                <div style={{ color: 'var(--gray-500)', fontSize: '0.95rem', marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

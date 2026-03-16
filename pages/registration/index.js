import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Registration() {
  const { t } = useLanguage();

  return (
    <Layout title={t.reg.title}>
      <PageHeader
        title={t.reg.title}
        description={t.reg.subtitle}
        breadcrumbs={[{ label: t.nav.registration }]}
      />
      <section className="section">
        <div className="container">
          <div className="card-grid" style={{ maxWidth: 800, margin: '0 auto' }}>
            <Link href="/registration/how-to-register" style={{ textDecoration: 'none' }}>
              <div className="card">
                <div className="card-image" style={{ background: 'linear-gradient(135deg, #0057B8 0%, #00B4D8 100%)', color: '#fff' }}>
                  <span style={{ fontSize: '3rem' }}>📝</span>
                </div>
                <div className="card-body">
                  <h3>{t.nav.howToRegister}</h3>
                  <p>{t.reg.howDesc}</p>
                </div>
              </div>
            </Link>
            <Link href="/registration/school-rules" style={{ textDecoration: 'none' }}>
              <div className="card">
                <div className="card-image" style={{ background: 'linear-gradient(135deg, #FFB800 0%, #FF6B6B 100%)', color: '#fff' }}>
                  <span style={{ fontSize: '3rem' }}>📋</span>
                </div>
                <div className="card-body">
                  <h3>{t.nav.schoolRules}</h3>
                  <p>{t.reg.rulesDesc}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

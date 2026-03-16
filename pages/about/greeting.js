import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function Greeting() {
  const { t } = useLanguage();

  return (
    <Layout title={t.greet.title}>
      <PageHeader
        title={t.greet.title}
        description={t.greet.subtitle}
        breadcrumbs={[
          { label: t.nav.aboutUs, href: '/about' },
          { label: t.greet.title },
        ]}
      />
      <section className="section">
        <div className="container">
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
    </Layout>
  );
}

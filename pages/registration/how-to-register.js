import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

export default function HowToRegister() {
  const { t } = useLanguage();

  const steps = [
    { num: 1, title: t.reg.step1t, desc: t.reg.step1d },
    { num: 2, title: t.reg.step2t, desc: t.reg.step2d },
    { num: 3, title: t.reg.step3t, desc: t.reg.step3d },
    { num: 4, title: t.reg.step4t, desc: t.reg.step4d },
    { num: 5, title: t.reg.step5t, desc: t.reg.step5d },
    { num: 6, title: t.reg.step6t, desc: t.reg.step6d },
  ];

  const documents = [
    t.reg.doc1,
    t.reg.doc2,
    t.reg.doc3,
    t.reg.doc4,
    t.reg.doc5,
    t.reg.doc6,
  ];

  return (
    <Layout title={t.reg.howTitle}>
      <PageHeader
        title={t.reg.howTitle}
        description={t.reg.howSubtitle}
        breadcrumbs={[
          { label: t.nav.registration, href: '/registration' },
          { label: t.reg.howTitle },
        ]}
      />

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{t.reg.stepsTitle}</h2>
            <p>{t.reg.stepsDesc}</p>
            <span className="accent-line"></span>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <div className="step" key={step.num}>
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-block">
            <h2>{t.reg.docsTitle}</h2>
            <p>{t.reg.docsDesc}</p>
            <ul>
              {documents.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.reg.notesTitle}</h2>
            <div style={{
              padding: '24px 32px',
              background: 'var(--secondary-light)',
              borderRadius: 'var(--radius)',
              borderLeft: '4px solid var(--secondary)',
              marginBottom: 20,
            }}>
              <p style={{ fontWeight: 600, color: '#8B6914', marginBottom: 8 }}>{t.reg.visaTitle}</p>
              <p style={{ color: 'var(--gray-700)' }}>
                {t.reg.visaDesc}
              </p>
            </div>
            <div style={{
              padding: '24px 32px',
              background: 'var(--primary-light)',
              borderRadius: 'var(--radius)',
              borderLeft: '4px solid var(--primary)',
            }}>
              <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: 8 }}>{t.reg.airportTitle}</p>
              <p style={{ color: 'var(--gray-700)' }}>
                {t.reg.airportDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: 16, fontSize: '1.8rem' }}>{t.reg.readyTitle}</h2>
          <p style={{ color: 'var(--gray-500)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            {t.reg.readyDesc}
          </p>
          <a
            href="mailto:info@cijacademy.com"
            className="hero-btn"
            style={{ background: 'var(--primary)', color: '#fff' }}
          >
            {t.reg.contactAdmissions}
          </a>
        </div>
      </section>
    </Layout>
  );
}

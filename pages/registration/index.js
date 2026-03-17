import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/lib/LanguageContext';

const ruleCategories = [
  {
    titleKey: 'general',
    rules: [
      'Students must attend all scheduled classes. Absence without prior approval may result in warnings.',
      'Students must be punctual. Classes start on time and latecomers may not be admitted.',
      'English-only policy applies in all classrooms and common areas during school hours.',
      'Respectful behavior towards all teachers, staff, and fellow students is required at all times.',
      'Students must carry their student ID at all times while on campus.',
    ],
  },
  {
    titleKey: 'dorm',
    rules: [
      'Curfew time is 10:00 PM on weekdays (Sunday - Thursday). Students must be in the dormitory by this time.',
      'Weekend curfew is 12:00 AM (Friday - Saturday).',
      'Overnight stays outside the dormitory require advance written approval from the academy.',
      'Visitors are not allowed inside the dormitory rooms.',
      'Students are responsible for keeping their rooms clean and tidy.',
      'Quiet hours are from 10:00 PM to 7:00 AM. Please be considerate of other students.',
    ],
  },
  {
    titleKey: 'attendance',
    rules: [
      'Students must maintain a minimum attendance rate of 90%.',
      'Absence due to illness must be reported to the office before 8:00 AM.',
      'Medical certificates are required for absences of 2 or more consecutive days.',
      'Excessive absences may result in program suspension or dismissal.',
      'Make-up classes may be arranged for excused absences, subject to teacher availability.',
    ],
  },
  {
    titleKey: 'campusRules',
    rules: [
      'Smoking is only permitted in designated smoking areas.',
      'Alcohol consumption is prohibited on campus premises.',
      'Swimming pool hours are from 6:00 AM to 9:00 PM. No swimming alone.',
      'Gym and recreational facilities are available from 6:00 AM to 10:00 PM.',
      'Students must not damage or deface any school property. Repair costs will be charged.',
      'Loud music or noise that disturbs other students is not allowed.',
    ],
  },
  {
    titleKey: 'safety',
    rules: [
      'All students must attend the safety orientation on their first day.',
      'Emergency contact information must be provided during registration.',
      'Valuable items should be stored in the provided safety deposit boxes.',
      'Report any safety concerns or incidents to the academy office immediately.',
      'Fire exit routes are posted on every floor. Familiarize yourself with them.',
    ],
  },
];

export default function Registration() {
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
    <Layout title={t.reg.title}>
      <PageHeader
        title={t.reg.title}
        description={t.reg.subtitle}
        breadcrumbs={[{ label: t.nav.registration }]}
      />

      {/* How to Register */}
      <section id="how-to-register" className="section">
        <div className="container">
          <div className="section-title">
            <h2>{t.reg.howTitle}</h2>
            <p>{t.reg.howSubtitle}</p>
            <span className="accent-line"></span>
          </div>

          {/* Steps */}
          <div className="section-title" style={{ marginTop: 48 }}>
            <h3>{t.reg.stepsTitle}</h3>
            <p>{t.reg.stepsDesc}</p>
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

          {/* Required Documents */}
          <div className="content-block" style={{ marginTop: 48 }}>
            <h3>{t.reg.docsTitle}</h3>
            <p>{t.reg.docsDesc}</p>
            <ul>
              {documents.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </div>

          {/* Important Notes */}
          <div className="content-block" style={{ marginTop: 48 }}>
            <h3>{t.reg.notesTitle}</h3>
            <div style={{
              padding: '24px 32px',
              background: 'var(--secondary-light)',
              borderRadius: 'var(--radius)',
              borderLeft: '4px solid var(--secondary)',
              marginBottom: 20,
            }}>
              <p style={{ fontWeight: 600, color: '#8B6914', marginBottom: 8 }}>{t.reg.visaTitle}</p>
              <p style={{ color: 'var(--gray-700)' }}>{t.reg.visaDesc}</p>
            </div>
            <div style={{
              padding: '24px 32px',
              background: 'var(--primary-light)',
              borderRadius: 'var(--radius)',
              borderLeft: '4px solid var(--primary)',
            }}>
              <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: 8 }}>{t.reg.airportTitle}</p>
              <p style={{ color: 'var(--gray-700)' }}>{t.reg.airportDesc}</p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <h3 style={{ marginBottom: 16, fontSize: '1.8rem' }}>{t.reg.readyTitle}</h3>
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
        </div>
      </section>

      {/* School Rules */}
      <section id="school-rules" className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{t.rules.title}</h2>
            <p>{t.rules.subtitle}</p>
            <span className="accent-line"></span>
          </div>

          <div className="content-block">
            <p style={{ marginBottom: 32 }}>{t.rules.intro}</p>

            {ruleCategories.map((cat, i) => (
              <div key={i} style={{ marginBottom: 40 }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--dark)',
                  marginBottom: 16,
                  paddingBottom: 8,
                  borderBottom: '2px solid var(--primary-light)',
                }}>
                  {t.rules[cat.titleKey]}
                </h3>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  {cat.rules.map((rule, j) => (
                    <li key={j} style={{
                      padding: '12px 16px',
                      background: j % 2 === 0 ? 'var(--gray-100)' : 'transparent',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--gray-700)',
                      fontSize: '0.95rem',
                      display: 'flex',
                      gap: 12,
                      alignItems: 'flex-start',
                    }}>
                      <span style={{
                        color: 'var(--primary)',
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: 2,
                      }}>•</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div style={{
              marginTop: 40,
              padding: '24px 32px',
              background: '#FFF3D0',
              borderRadius: 'var(--radius)',
              borderLeft: '4px solid var(--secondary)',
            }}>
              <p style={{ fontWeight: 600, color: '#8B6914', marginBottom: 8 }}>{t.rules.importantNotice}</p>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem' }}>{t.rules.noticeText}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
